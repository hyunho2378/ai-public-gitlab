// 정적 배포용 묶음. 한 번 실행으로 두 파일을 함께 쓴다: app/public/data/cards.min.json(공개 칸만)과 dashboard/public/data/metrics.json(docs/METRICS.md 계약).
// 비공개 알림은 넣지 않는다. 합계가 맞지 않으면 파일을 쓰지 않고 멈춘다.
import fs from 'node:fs/promises';import path from 'node:path';import crypto from 'node:crypto';
import {ROOT,CARDS,RAW,loadCards,rj,rt}from'./lib.mjs';
import {dispField,itemBasis,formBasis,readmeState,sourceFailed,sourceFieldState,fieldState,cardStatus}from'./derive.mjs';
const cards=await loadCards();const meta=await rj(path.join(CARDS,'_meta.json'));const tax=await rj(path.join(CARDS,'taxonomy.json'));const sim=await rj(path.join(CARDS,'_similar.json'));
const list=await rj(path.join(RAW,'_list.json'));if(!list)throw new Error('data/raw/_list.json 없음: 원본 목록 캐시가 필요합니다');
const prog=await rj(path.join(CARDS,'_progress.json'));const aiDone=new Set(prog?.done||[]);
const byList=new Map(list.map(p=>[p.id,p]));
const cell=c=>c?{v:c.value,e:c.evidence,s:c.source,...(c.rawCommands?{raw:c.rawCommands}:{})}:null;
const withB=(c,b)=>({...cell(c),b});
const READ_LABEL={present:'있음',template:'기본 템플릿',none:'없음',unknown:'미확인'};
const outCards=[],tally={sf:{present:0,absent:0,unknown:0},field:{confirmed:0,check:0,unclassified:0},basis:{readme:0,code:0,none:0},status:{ok:0,thin:0,failed:0},rs:{present:0,none:0,unknown:0},noRd:{ok:0,thin:0,failed:0}};
const fieldCount=new Map();let aiPending=0;
for(const c of cards){
  const done=await rj(path.join(RAW,String(c.id),'done.json'));const p=byList.get(c.id)||{};
  const rText=done?.readme===200?await rt(path.join(RAW,String(c.id),'README.md')):null;
  const rs=readmeState(done,c);const failed=sourceFailed(done);
  const bOne=itemBasis(c.ai?.oneLine),bForm=formBasis(c.executionForm),bLic=itemBasis(c.license),bRun=itemBasis(c.ai?.runSummary),bLim=itemBasis(c.ai?.limitations);
  const status=cardStatus({failedSource:failed,bases:[bOne,bForm,bLic,bRun,bLim]});
  const basis=failed?'none':bOne;
  const fs_=fieldState(c.ai?.fields);const sf=sourceFieldState({description:p.description,topics:c.topics,readmeText:rText,rState:rs});
  const aiPass=aiDone.has(c.id)?'done':'pending';if(aiPass==='pending')aiPending++;
  tally.sf[sf]++;tally.field[fs_.state]++;tally.basis[basis]++;tally.status[status]++;tally.rs[rs==='template'?'present':rs]++;
  if(rs==='none')tally.noRd[status]++;
  if(fs_.state==='confirmed')fieldCount.set(fs_.v,(fieldCount.get(fs_.v)||0)+1);
  outCards.push({id:c.id,name:c.name,path:c.path,url:c.webUrl,topics:c.topics,
   desc:(p.description||'').slice(0,300),stars:p.star_count??null,forks:p.forks_count??null,lastActivity:p.last_activity_at??null,createdAt:p.created_at??null,
   basis,status,aiPass,sf,
   oneLine:withB(c.ai?.oneLine,bOne),task:cell(c.ai?.targetTask),
   fields:{v:fs_.v,...(fs_.state==='check'?{check:true,c:fs_.c}:{}),e:c.ai?.fields?.evidence??null,s:c.ai?.fields?.source??'ai'},
   form:{...withB(c.executionForm,bForm),label:c.executionForm.label},run:withB(c.ai?.runSummary,bRun),tech:cell(c.techStack),license:withB(c.license,bLic),limits:withB(c.ai?.limitations,bLim),refs:cell(c.referenceDates),org:cell(c.organization),updated:cell(c.updatedAt),
   readme:{...cell(c.readmeStatus),v:rs,label:READ_LABEL[rs]},generatedAt:c.generatedAt});
}
const total=outCards.length;
if(new Set(outCards.map(c=>c.id)).size!==total)throw new Error('중복 id');
const fieldNames=(tax?.groups||[]).map(g=>dispField(g.name));
for(const n of fieldCount.keys())if(!fieldNames.includes(n))throw new Error('정해진 분야 밖 이름 '+n);
const fieldList=fieldNames.map(name=>({name,count:fieldCount.get(name)||0}));
const out={meta:{fetchedDate:meta?.fetchedDate,count:total,note:'공개 칸만. AI 정리 칸은 s:"ai"',aiPass:{done:total-aiPending,pending:aiPending},stateFields:{confirmed:tally.field.confirmed,check:tally.field.check,unclassified:tally.field.unclassified}},
 fields:fieldList,
 cards:outCards,
 similar:(sim?.groups||[]).map(g=>({id:g.id,title:g.title,reason:g.reason,ids:g.projects.map(p=>p.id)}))};
const hash=crypto.createHash('sha1').update(JSON.stringify({fields:out.fields,cards:out.cards,similar:out.similar})).digest('hex').slice(0,8);
const dataVersion=`${meta.fetchedDate}-${hash}`;
out.meta.dataVersion=dataVersion;out.meta.version=dataVersion;out.meta.builtAt=new Date().toISOString();
// 합계 검증
const sum=o=>Object.values(o).reduce((a,b)=>a+b,0);
const checks=[['원천 분야 표시',sum(tally.sf)],['분야 확정+확인+미분류',sum(tally.field)],['근거 3종',sum(tally.basis)],['생성 상태',sum(tally.status)],['README 상태',sum(tally.rs)]];
for(const [n,v] of checks)if(v!==total)throw new Error(`합계 불일치 ${n} ${v}≠${total}`);
const confSum=fieldList.reduce((a,f)=>a+f.count,0);if(confSum!==tally.field.confirmed)throw new Error('분야별 합 불일치');
if(sum(tally.noRd)!==tally.rs.none)throw new Error('README 없음 카드 합 불일치');
const rt4=(n,d)=>d?Math.round(n/d*1e4)/1e4:null;const cr=(n,d)=>({count:n,ratio:rt4(n,d)});
const sfDen=tally.sf.present+tally.sf.absent;
const metrics={schemaVersion:1,dataVersion,fetchedDate:meta.fetchedDate,builtAt:out.meta.builtAt,
 scope:{source:'공공 깃랩 공개 프로젝트',total,excluded:{deletionScheduled:0},complete:true,missing:[]},
 total:{count:total},
 sourceField:{present:cr(tally.sf.present,sfDen),absent:cr(tally.sf.absent,sfDen),unknown:{count:tally.sf.unknown},denominator:sfDen},
 fieldAfter:{confirmed:[...fieldList].sort((a,b)=>b.count-a.count||fieldNames.indexOf(a.name)-fieldNames.indexOf(b.name)).map(f=>({name:f.name,count:f.count,ratio:rt4(f.count,total)})),confirmedTotal:cr(tally.field.confirmed,total),check:cr(tally.field.check,total),none:cr(tally.field.unclassified,total),denominator:total},
 basis:{readme:cr(tally.basis.readme,total),code:cr(tally.basis.code,total),none:cr(tally.basis.none,total),denominator:total},
 cardStatus:{ok:cr(tally.status.ok,total),thin:cr(tally.status.thin,total),failed:cr(tally.status.failed,total),denominator:total},
 readmeState:{present:{count:tally.rs.present},absent:{count:tally.rs.none},unknown:{count:tally.rs.unknown}},
 noReadmeCards:{withEvidence:cr(tally.noRd.ok,tally.rs.none),thin:cr(tally.noRd.thin,tally.rs.none),failed:cr(tally.noRd.failed,tally.rs.none),denominator:tally.rs.none,readmeUnknown:tally.rs.unknown}};
if(tally.rs.none===0)metrics.noReadmeCards={...metrics.noReadmeCards,denominator:0};
const dst=path.join(ROOT,'app/public/data');await fs.mkdir(dst,{recursive:true});
const mdst=path.join(ROOT,'dashboard/public/data');await fs.mkdir(mdst,{recursive:true});
const s=JSON.stringify(out);
await fs.writeFile(path.join(dst,'cards.min.json'),s);
await fs.writeFile(path.join(mdst,'metrics.json'),JSON.stringify(metrics,null,1));
await fs.writeFile(path.join(CARDS,'_meta.json'),JSON.stringify({...meta,dataVersion},null,2));
console.log('cards.min.json',total,'cards',(s.length/1024).toFixed(0)+'KB','version',dataVersion);console.log('metrics.json 합계 검증 통과',JSON.stringify(tally),'AI 정리 대기',aiPending);
