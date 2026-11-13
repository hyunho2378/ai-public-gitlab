// 예시 자료(kordoc, 프로젝트 150)의 공개 GraphQL 응답을 한 번 받아 고정 저장한다.
// 쓰는 곳: app/src/screens/parts/glGraphql.js(개발 ?fixture=kordoc 측정에서 먼저, 그 밖에는 공공 깃랩 장애 때 대체)
// 질의는 화면이 쓰는 것과 같은 Q(라벨 R-14, 보드 R-13, 마일스톤 R-15, 스니펫 R-22, 작업 R-19, 머지 리퀘스트 56 R-17, 작업 항목 55 댓글 R-12)
// 요청 사이 1.1초 이상. 공공 깃랩이 점검 중(POST 405, HTML 안내)이면 받지 않고 멈춘다(지어낸 자료를 저장하지 않음)
// 실행: node scripts/snapshot/fetch-graphql.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const src = fs.readFileSync(path.join(ROOT, 'app/src/screens/parts/glGraphql.js'), 'utf8');
const Q = {};
for (const m of src.matchAll(/^ {2}(\w+): `([\s\S]*?)`,$/gm)) Q[m[1]] = m[2];
const P = 'chrisryugj/kordoc';
const JOBS = [['labels', { p: P }], ['board', { p: P }], ['milestones', { p: P }], ['snippets', { p: P }], ['jobs', { p: P }], ['mr', { p: P, i: '56' }], ['issueNotes', { p: P, i: '55' }]];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const items = {};
for (const [name, variables] of JOBS) {
  if (!Q[name]) { console.log(`질의 없음: ${name}`); process.exit(1); }
  const r = await fetch('https://gitlab.aigov.go.kr/api/graphql', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ query: Q[name], variables }), signal: AbortSignal.timeout(20000) });
  const type = r.headers.get('content-type') || '';
  if (!r.ok || !/json/.test(type)) { console.log(`${name}: ${r.status} ${type}, 공공 깃랩 응답 없음(점검 중일 수 있음). 저장하지 않고 중단`); process.exit(2); }
  const j = await r.json();
  if (j.errors?.length || !j.data) { console.log(`${name}: 오류 ${j.errors?.[0]?.message}`); process.exit(3); }
  items[`${name}:${JSON.stringify(variables)}`] = j.data;
  console.log(`${name}: 받음`);
  await sleep(1100);
}
const out = path.join(ROOT, 'app/public/data/snapshot/graphql');
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'kordoc.json'), JSON.stringify({ fetchedAt: new Date().toISOString(), source: 'https://gitlab.aigov.go.kr/api/graphql 공개 읽기(비로그인)', project: P, items }));
console.log('저장', path.join(out, 'kordoc.json'));
