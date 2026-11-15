import test from 'node:test';import assert from 'node:assert/strict';
import {dispField,itemBasis,formBasis,readmeState,sourceFieldState,fieldState,cardStatus}from'./derive.mjs';
test('분야 이름 가운뎃점을 빗금으로',()=>{assert.equal(dispField('회계·예산·출장'),'회계/예산/출장');assert.equal(dispField(null),null)});
test('근거 구분',()=>{
  assert.equal(itemBasis({value:'a',evidence:{lines:[1,2]}}),'readme');
  assert.equal(itemBasis({value:'a',evidence:{paths:['a.py']}}),'code');
  assert.equal(itemBasis({value:'a',evidence:null}),'none');
  assert.equal(itemBasis({value:null,evidence:{lines:[1,2]}}),'none');
  assert.equal(formBasis({value:'check',evidence:['index.html']}),'none');
});
test('README 원천 상태: 접근 실패는 없음이 아님',()=>{
  const c={readmeStatus:{value:'present'}};
  assert.equal(readmeState({tree:'error'},c),'unknown');
  assert.equal(readmeState({tree:404},c),'unknown');
  assert.equal(readmeState(null,c),'unknown');
  assert.equal(readmeState({tree:200,readme:undefined,readmePath:null},c),'none');
  assert.equal(readmeState({tree:'no-branch'},c),'none');
  assert.equal(readmeState({tree:200,readme:200},{readmeStatus:{value:'template'}}),'template');
});
test('원천 분야 표시',()=>{
  assert.equal(sourceFieldState({description:'[공공행정] x',topics:[],rState:'unknown'}),'present');
  assert.equal(sourceFieldState({description:'x',topics:[],rState:'none'}),'absent');
  assert.equal(sourceFieldState({description:'x',topics:[],rState:'unknown'}),'unknown');
});
test('분야 상태와 카드 상태',()=>{
  assert.deepEqual(fieldState({value:['문서·보고서']}),{state:'confirmed',v:'문서/보고서'});
  assert.equal(fieldState({value:['a','b']}).state,'check');
  assert.equal(fieldState({value:null}).state,'unclassified');
  assert.equal(cardStatus({failedSource:true,bases:['readme']}),'failed');
  assert.equal(cardStatus({failedSource:false,bases:['none','code']}),'ok');
  assert.equal(cardStatus({failedSource:false,bases:['none','none']}),'thin');
});
