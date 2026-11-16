// data/raw(커밋 제외 캐시)를 커밋된 스냅샷(app/public/data/snapshot)으로 복원한다. 공공 깃랩 점검 중에도 카드 도구를 돌릴 수 있게 하는 용도.
// 사용: node scripts/cards/restore-raw.mjs   (이미 있는 data/raw/{id}/done.json은 건드리지 않는다)
// 복원 규칙
//  - 목록: snapshot/index.json projects → data/raw/_list.json
//  - 파일 목록이 있으면 tree 200, 없으면 기본 브랜치 없음은 'no-branch', 그 밖은 'error'(원문 접근 실패, README 미확인)
//  - README 본문이 있으면 readme 200. 본문은 스냅샷에서 빠졌지만 기존 카드가 README 있음으로 기록한 경우도 200(본문 없이)
import fs from 'node:fs/promises';import path from 'node:path';
import {ROOT,RAW,CARDS,rj}from'./lib.mjs';
const SNAP=path.join(ROOT,'app/public/data/snapshot');
const idx=await rj(path.join(SNAP,'index.json'));if(!idx)throw new Error('스냅샷 index.json 없음');
await fs.mkdir(RAW,{recursive:true});
const exists=p=>fs.access(p).then(()=>true,()=>false);
if(!await exists(path.join(RAW,'_list.json')))await fs.writeFile(path.join(RAW,'_list.json'),JSON.stringify(idx.projects));
let made=0,skipped=0;const tally={};
for(const p of idx.projects){
  const dir=path.join(RAW,String(p.id));if(await exists(path.join(dir,'done.json'))){skipped++;continue}
  const s=await rj(path.join(SNAP,'projects',p.id+'.json'));if(!s)continue;
  const card=await rj(path.join(CARDS,p.id+'.json'));
  await fs.mkdir(dir,{recursive:true});
  await fs.writeFile(path.join(dir,'project.json'),JSON.stringify(p));
  const out={};
  if(Array.isArray(s.tree)){out.tree=200;await fs.writeFile(path.join(dir,'tree.json'),JSON.stringify(s.tree))}
  else out.tree=p.default_branch?'error':'no-branch';
  if(s.languages&&typeof s.languages==='object'){out.languages=200;await fs.writeFile(path.join(dir,'languages.json'),JSON.stringify(s.languages))}
  out.readmePath=s.readmePath||null;
  const cardSays=card?.readmeStatus?.value;
  if(typeof s.readme==='string'&&s.readme.length){out.readme=200;await fs.writeFile(path.join(dir,'README.md'),s.readme)}
  else if(cardSays==='present'||cardSays==='template'){out.readme=200;out.readmeBodyExcluded=true}
  else if(out.readmePath)out.readme='error';
  out.fetchedAt=s.fetchedAt||null;out.restoredFrom='snapshot';
  await fs.writeFile(path.join(dir,'done.json'),JSON.stringify(out));made++;
  const k=`${out.tree}/${out.readme??'-'}`;tally[k]=(tally[k]||0)+1;
}
console.log('복원',made,'기존 유지',skipped,tally);
