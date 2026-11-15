// 로컬 MCP 서버(stdio). 줄 단위 JSON-RPC. 실행: node server/src/mcp-stdio.js
// 호출 기록은 표준 오류(stderr)에 남긴다(표준 출력은 프로토콜 전용). 인증정보와 검색어 원문은 기록하지 않는다.
import readline from 'node:readline';
import {handleMcp}from'./mcp-tools.js';
const log=o=>process.stderr.write('[mcp] '+new Date().toISOString()+' '+JSON.stringify(o)+'\n');
const rl=readline.createInterface({input:process.stdin});
let chain=Promise.resolve();
rl.on('line',line=>{
  if(!line.trim())return;
  chain=chain.then(async()=>{
    let m;try{m=JSON.parse(line)}catch{process.stdout.write(JSON.stringify({jsonrpc:'2.0',id:null,error:{code:-32700,message:'Parse error'}})+'\n');return}
    const res=await handleMcp(m,{log});if(res)process.stdout.write(JSON.stringify(res)+'\n');
  });
});
rl.on('close',()=>chain.then(()=>process.exit(0)));
