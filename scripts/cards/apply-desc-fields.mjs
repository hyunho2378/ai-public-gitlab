// README가 없거나(없음, 기본 템플릿, 미확인) 분야를 받지 못한 프로젝트의 분야를 프로젝트 설명과 이름으로 정한 결과를 합친다.
// 입력: data/cards/_ai/desc-fields-NNN.json = [{id, fields:[통합 분야 이름 0~2개]}]
// 규칙: README 근거로 정한 분야(ai.fields.value가 이미 있음)는 덮어쓰지 않는다. 근거 위치는 evidence.description=true(설명 문장 전체).
//       분야 1개면 확정, 2개면 분류 확인 필요, 0개면 미분류(build.mjs의 fieldState 규칙 그대로).
// 사용: node scripts/cards/apply-desc-fields.mjs data/cards/_ai/desc-fields-001.json
import fs from 'node:fs/promises';import path from 'node:path';
import {CARDS,rj,GROUPS}from'./lib.mjs';
const file=process.argv[2];const list=await rj(file);if(!Array.isArray(list))throw new Error('입력 파일 없음: '+file);
const valid=new Set(GROUPS.map(g=>g[0]));let set=0,kept=0,empty=0;const errs=[];
for(const x of list){
  const cp=path.join(CARDS,x.id+'.json');const c=await rj(cp);if(!c){errs.push(x.id+' 카드 없음');continue}
  if(c.ai?.fields?.value?.length){kept++;continue}
  const fl=(x.fields||[]).filter(f=>valid.has(f)).slice(0,2);
  if((x.fields||[]).some(f=>!valid.has(f)))errs.push(x.id+' 분야 이름 이상 '+x.fields);
  if(!fl.length){empty++;continue}
  c.ai.fields={value:fl,evidence:{description:true},source:'ai',note:'README 없이 프로젝트 설명과 이름으로 분류'};
  c.fieldsAt=new Date().toISOString();
  await fs.writeFile(cp,JSON.stringify(c,null,1));set++;
}
console.log('설명 기반 분야',set,'README 분야 유지',kept,'근거 부족(미분류)',empty,'errors',errs);
