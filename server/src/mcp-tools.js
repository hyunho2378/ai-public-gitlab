// MCP 도구 세 개(search_projects, get_project, find_similar). 웹과 같은 공통 검색(app/src/api/searchCore.js)과 같은 cards.min.json을 쓴다.
// HTTP(/api/v1/mcp)와 stdio(mcp-stdio.js)가 이 파일의 handleMcp를 함께 쓴다.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {runSearch,localSearch,validateQuery,MIN_LEN,MAX_LEN}from'../../app/src/api/searchCore.js';
const DEFAULT_DATA=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../app/public/data/cards.min.json');
let cache={file:null,mtime:0,data:null};
/** 자료를 읽지 못하면 null. 같은 파일이면 수정 시각이 바뀔 때만 다시 읽음 */
export function loadData(file=process.env.CARDS_MIN_PATH||DEFAULT_DATA){
  try{const st=fs.statSync(file);if(cache.file===file&&cache.mtime===st.mtimeMs)return cache.data;const d=JSON.parse(fs.readFileSync(file,'utf8'));if(!Array.isArray(d.cards)||!d.cards.length)return null;cache={file,mtime:st.mtimeMs,data:d};return d}catch{return null}
}
const head=d=>({dataVersion:d?.meta?.version??null,fetchedDate:d?.meta?.fetchedDate??null,count:d?.meta?.count??null});
const BASIS={readme:'README 기반',code:'코드 추정',none:'정보 부족'};
const slim=(c,hit)=>({id:c.id,name:c.name,url:c.url,field:c.fields?.v??null,fieldState:c.fields?.v?'confirmed':c.fields?.check?'check':'unclassified',oneLine:c.oneLine?.v??null,basis:c.basis,basisLabel:BASIS[c.basis],status:c.status,...(hit?{reason:hit.reason,basisLines:hit.basisLines,level:hit.level}:{})});
const item=cell=>cell?{value:cell.v??null,basis:cell.b??null,evidence:cell.e??null}:null;
export function projectDetail(c){
  return{id:c.id,name:c.name,url:c.url,path:c.path,topics:c.topics,description:c.desc,
    basis:c.basis,status:c.status,aiPass:c.aiPass,readmeState:c.readme?.v,field:{value:c.fields?.v??null,check:!!c.fields?.check,candidates:c.fields?.c??null},
    card:{oneLine:item(c.oneLine),form:{...item(c.form),label:c.form?.label},license:item(c.license),run:item(c.run),limits:item(c.limits)},
    organization:c.org?.v??null,stars:c.stars,forks:c.forks,lastActivity:c.lastActivity,createdAt:c.createdAt};
}
const text=o=>({content:[{type:'text',text:JSON.stringify(o)}]});
const fail=(o)=>({...text(o),isError:true});
async function searchTool(mode,args,env){
  const d=env.data();if(!d)return fail({status:'data-unreadable',message:'카드 자료(cards.min.json)를 읽지 못했습니다',items:[]});
  const query=mode==='similar'?(args.description??args.query):args.query;
  const res=await runSearch({query,mode,fields:args.fields||[],excludeIds:args.excludeIds||[]},{data:d,aiUrl:env.aiUrl,fetchImpl:env.fetchImpl,fallbackSearch:async(q,o)=>localSearch(d,q,{...o,limit:10})});
  const byId=new Map(d.cards.map(c=>[c.id,c]));
  const body={status:res.status,fallback:res.fallback,...(mode==='similar'?{similarityJudged:!res.fallback}:{}),...head(d),...(res.error?{error:res.error,length:res.length}:{}),count:res.items.length,items:res.items.map(h=>slim(byId.get(h.id),h)),note:res.fallback?'일반 검색 결과임. AI 판단 미수행':undefined};
  return res.status==='invalid'||res.status==='failed'?fail(body):text(body);
}
const inputSchema=(extra,required)=>({type:'object',properties:{...extra,fields:{type:'array',items:{type:'string'},description:'업무 분야 이름(빗금 표기). 비우면 전체'},excludeIds:{type:'array',items:{type:'integer'}}},required});
export const TOOLS=[
 {name:'search_projects',description:`업무 문장으로 공공 깃랩 공개 프로젝트 찾기(${MIN_LEN}~${MAX_LEN}자). 수집 자료 기준`,inputSchema:inputSchema({query:{type:'string'}},['query'])},
 {name:'get_project',description:'프로젝트 번호로 소개 카드 상세(항목별 근거, 분야, 생성 상태, 원문 주소) 조회. 새로 추정하지 않고 배포된 카드를 그대로 돌려줌',inputSchema:{type:'object',properties:{id:{type:'integer'}},required:['id']}},
 {name:'find_similar',description:`만들려는 기능 설명(${MIN_LEN}~${MAX_LEN}자)에 맞는 비슷한 공개 프로젝트 찾기`,inputSchema:inputSchema({description:{type:'string'}},['description'])},
];
/** JSON-RPC 한 건 처리. 응답 객체, 알림이면 null */
export async function handleMcp(m,{data=loadData,aiUrl=process.env.SEARCH_URL,fetchImpl=globalThis.fetch,log=()=>{}}={}){
  const id=m?.id??null;const ok=result=>({jsonrpc:'2.0',id,result});const err=(code,message)=>({jsonrpc:'2.0',id,error:{code,message}});
  if(!m||typeof m!=='object'||Array.isArray(m))return err(-32600,'Invalid Request');
  if(m.method==='initialize')return ok({protocolVersion:'2024-11-05',capabilities:{tools:{}},serverInfo:{name:'public-repository',version:'0.3.0'}});
  if(m.method?.startsWith('notifications/'))return null;
  if(m.method==='ping')return ok({});
  if(m.method==='tools/list')return ok({tools:TOOLS});
  if(m.method==='tools/call'){
    const name=m.params?.name,args=m.params?.arguments||{};const env={data,aiUrl,fetchImpl};
    log({tool:name,args:{...args,query:undefined,description:undefined,queryLength:String(args.query??args.description??'').length}});
    if(name==='search_projects')return ok(await searchTool('task',args,env));
    if(name==='find_similar')return ok(await searchTool('similar',args,env));
    if(name==='get_project'){
      const d=data();if(!d)return ok(fail({status:'data-unreadable',message:'카드 자료(cards.min.json)를 읽지 못했습니다'}));
      const n=Number(args.id);const c=Number.isInteger(n)?d.cards.find(x=>x.id===n):null;
      if(!c)return ok(fail({status:'not-found',...head(d),id:args.id??null,message:'수집 목록에 없는 프로젝트 번호'}));
      return ok(text({status:'ok',...head(d),project:projectDetail(c)}));
    }
    return err(-32602,'Unknown tool: '+name);
  }
  return err(-32601,'Method not found');
}
export {validateQuery};
