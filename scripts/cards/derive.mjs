// 카드 상태 계산(순수 함수). build.mjs와 시험이 함께 쓴다. 원자료(data/cards/{id}.json)는 고치지 않고 배포용 표시값만 만든다.
// 근거 구분 b: readme(README 줄 범위가 있음), code(파일 경로가 있음), none(정보 부족). 값이 비었거나 위치가 없으면 none.
export const dispField=n=>n==null?n:String(n).replace(/[·・]/g,'/');
const empty=v=>v==null||v===''||(Array.isArray(v)&&!v.length);
export function itemBasis(cell){
  if(!cell||empty(cell.value))return'none';
  const e=cell.evidence;
  if(e&&typeof e==='object'){
    if(Array.isArray(e.lines)&&e.lines.length===2)return'readme';
    if(Array.isArray(e.paths)&&e.paths.length)return'code';
  }
  return'none';
}
// 실행 형태 check(확인 필요)는 파일 구성만으로 형태를 정하지 못한 상태라 근거 없음으로 본다.
export function formBasis(cell){return cell?.value==='check'?'none':itemBasis(cell)}
const FIELD_RE=/^[\s>*\-|]*\**\s*(?:업무\s*)?(?:분야|카테고리|분류|도메인)\s*\**\s*[:：|]\s*\**\s*(.{1,60}?)\s*\**\s*\|?\s*$/;
export const hasReadmeFieldLine=text=>String(text||'').split('\n').some(l=>FIELD_RE.test(l));
// README 원천 상태: 원문 접근 실패는 없음으로 처리하지 않고 unknown.
export function readmeState(done,card){
  if(!done)return'unknown';
  if(done.readme===200)return card.readmeStatus?.value==='none'?'none':(card.readmeStatus?.value||'present');
  if(done.tree==='no-branch')return'none';
  if(done.tree===200&&done.readme===undefined&&!done.readmePath)return'none';
  return'unknown';
}
export const sourceFailed=done=>!done||done.tree==='error'||done.tree===404||done.readme==='error';
// 원천 분야 표시: 설명 앞 [분야] 표기, 주제(topics), README 분야 줄 중 하나라도 있으면 present. 없고 README를 읽을 수 있었으면 absent. 읽지 못했으면 unknown.
export function sourceFieldState({description,topics,readmeText,rState}){
  if(/^\s*\[[^\]]{1,20}\]/.test(description||'')||(topics||[]).length||hasReadmeFieldLine(readmeText))return'present';
  return rState==='unknown'?'unknown':'absent';
}
// 분야 상태: 후보가 하나면 확정, 둘 이상이면 주분야를 정할 수 없어 확인 필요, 후보 없음은 미분류.
export function fieldState(aiFields){
  const v=Array.isArray(aiFields?.value)?aiFields.value.filter(Boolean):[];
  if(v.length===1)return{state:'confirmed',v:dispField(v[0])};
  if(v.length>1)return{state:'check',v:null,c:v.map(dispField)};
  return{state:'unclassified',v:null};
}
export function cardStatus({failedSource,bases}){
  if(failedSource)return'failed';
  return bases.some(b=>b!=='none')?'ok':'thin';
}
