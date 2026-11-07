// 그룹 찾아보기(G-04) 첫 쪽 목록과 그룹마다 하위 그룹·프로젝트·구성원 수를 공개 읽기 API에서 한 번 받아 고정 저장한다.
// 이유: 화면은 그룹마다 3번씩 차례로 요청해 숫자를 채우므로 측정 시점에 따라 '-'와 숫자가 섞여 Figma 대조가 어긋났다(M-14 문구 group-row).
// 경로·인자는 화면(app/src/screens/P11_Organizations.jsx)과 같다: groups?order_by=id&sort=desc&per_page=20&page=1&archived=false,
//   groups/:id/{subgroups,projects,members}?per_page=1 의 x-total(없으면 배열 길이, 401·403이면 null)
// 요청 사이 1.1초 이상, 429/5xx 연속 3번이면 멈춘다. 출력: data/raw/groups/explore.json, app/public/data/snapshot/groups/explore.json
// 실행: node scripts/snapshot/fetch-groups.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const API = 'https://gitlab.aigov.go.kr/api/v4';
const GAP_MS = 1100;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let last = 0;
let bad = 0;
async function get(url) {
  const wait = last + GAP_MS - Date.now();
  if (wait > 0) await sleep(wait);
  last = Date.now();
  const r = await fetch(url, { headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(20000) });
  if (r.status === 429 || r.status >= 500) { if (++bad >= 3) { console.log(`연속 ${r.status} 3회: 중단`); process.exit(2); } } else bad = 0;
  if (r.status === 429) { await sleep(Number(r.headers.get('retry-after') || 30) * 1000); return get(url); }
  return r;
}
const startedAt = new Date().toISOString();
const query = 'order_by=id&sort=desc&per_page=20&page=1&archived=false';
const lr = await get(`${API}/groups?${query}`);
if (!lr.ok) { console.log(`목록 ${lr.status}: 중단`); process.exit(1); }
const groups = await lr.json();
const total = lr.headers.get('x-total') != null ? Number(lr.headers.get('x-total')) : null;
const nextPage = lr.headers.get('x-next-page') || null;
const counts = {};
for (const g of groups) {
  const one = async (sub) => {
    const r = await get(`${API}/groups/${g.id}/${sub}?per_page=1`);
    if (!r.ok) return null;
    const t = r.headers.get('x-total');
    if (t != null) return Number(t);
    const d = await r.json().catch(() => null);
    return Array.isArray(d) ? d.length : null;
  };
  counts[g.id] = { subgroups: await one('subgroups'), projects: await one('projects'), members: await one('members') };
}
const out = { fetchedAt: new Date().toISOString(), startedAt, source: `${API} 공개 읽기(비로그인)`, query, total, nextPage, groups, counts };
for (const dir of [path.join(ROOT, 'data/raw/groups'), path.join(ROOT, 'app/public/data/snapshot/groups')]) {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'explore.json'), JSON.stringify(out));
}
console.log(`그룹 ${groups.length}(전체 ${total}), 저장 ${out.fetchedAt}`);
