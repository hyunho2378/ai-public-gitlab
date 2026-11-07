// 사용자 프로필(G-12) 자료를 공개 읽기 API에서 한 번 받아 data/raw/users/{username}/에 고정 저장한다.
// 이유: 프로필 활동은 공개 API에서 실시간으로 받아 측정할 때마다 새 이벤트가 생겨 Figma 대조가 어긋났다(M-14 문구 profile-event 60).
// 받는 것(앱 api/client.js의 gitlab.userByName/userEvents/userProjects/userStarred와 같은 경로·인자):
//   users?username=, users/:id/events?per_page=100&page=n&after=(기준 시각 - 366일), users/:id/projects?per_page=20&order_by=last_activity_at,
//   users/:id/starred_projects?per_page=20&order_by=last_activity_at. 응답의 x-total도 저장. 공개 이메일(public_email)은 지운다
// 요청 사이 1.1초 이상. 429/5xx 연속 3번이면 멈춘다. 끝나면 node scripts/snapshot/build.mjs가 app/public/data/snapshot/users/{username}.json으로 싣는다
// 실행: node scripts/snapshot/fetch-users.mjs [username ...]   (기본 chrisryugj)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const OUT = path.join(ROOT, 'data/raw/users');
const API = 'https://gitlab.aigov.go.kr/api/v4';
const GAP_MS = 1100;
const MAX_PAGES = 12;
// 측정 고정 시각(app/src/lib/displayClock.js 개발용 기준)과 같은 날 기준으로 1년 범위를 받는다
const BASE_NOW = Date.parse('2026-11-07T10:00:00+09:00');
const users = process.argv.slice(2).length ? process.argv.slice(2) : ['chrisryugj'];
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
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  const strip = (k, v) => (k === 'public_email' ? undefined : v);
  return { data: JSON.parse(JSON.stringify(await r.json()), strip), total: r.headers.get('x-total') != null ? Number(r.headers.get('x-total')) : null };
}

for (const username of users) {
  const dir = path.join(OUT, username);
  fs.mkdirSync(dir, { recursive: true });
  const startedAt = new Date().toISOString();
  const u = await get(`${API}/users?username=${encodeURIComponent(username)}`);
  const user = Array.isArray(u.data) ? u.data[0] : null;
  if (!user) { console.log(`${username}: 사용자 없음`); continue; }
  const after = new Date(BASE_NOW - 366 * 86400000).toISOString().slice(0, 10);
  const events = [];
  let partial = false;
  for (let page = 1; page <= MAX_PAGES; page += 1) {
    const ev = await get(`${API}/users/${user.id}/events?per_page=100&page=${page}&after=${after}`);
    const list = Array.isArray(ev.data) ? ev.data : [];
    events.push(...list);
    if (list.length < 100) break;
    if (page === MAX_PAGES) partial = true;
  }
  const projects = await get(`${API}/users/${user.id}/projects?per_page=20&order_by=last_activity_at`);
  const starred = await get(`${API}/users/${user.id}/starred_projects?per_page=20&order_by=last_activity_at`);
  const out = {
    fetchedAt: new Date().toISOString(), startedAt, source: `${API} 공개 읽기(비로그인)`, after, partial,
    user, events, projects: projects.data, projectsTotal: projects.total, starred: starred.data, starredTotal: starred.total,
  };
  fs.writeFileSync(path.join(dir, 'profile.json'), JSON.stringify(out, null, 1));
  // 배포·측정용 사본(build.mjs를 다시 돌리지 않아도 바로 쓰이게)
  const pub = path.join(ROOT, 'app/public/data/snapshot/users');
  fs.mkdirSync(pub, { recursive: true });
  fs.writeFileSync(path.join(pub, `${username}.json`), JSON.stringify(out));
  console.log(`${username}: 이벤트 ${events.length}, 프로젝트 ${projects.data.length}/${projects.total}, 별표 ${starred.data.length}/${starred.total}, 저장 ${out.fetchedAt}`);
}
