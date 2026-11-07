// 자료: 현황판 공개 API(CORS 허용)를 먼저 부르고, 실패하면 저장 자료(public/data/dashboard.json)를 쓴다.
// 주소에 ?data=snapshot 을 붙이면 저장 자료만 쓴다(시안 캡처, 피그마 대조용).
import { trimDashboard } from './trim';

const LIVE = 'https://axboard.aigov.go.kr/api/dashboard';
const SNAPSHOT = `${import.meta.env.BASE_URL}data/dashboard.json`;

export async function loadDashboard() {
  const forceSnapshot = new URLSearchParams(location.search).get('data') === 'snapshot';
  if (!forceSnapshot) {
    try {
      const res = await fetch(LIVE, { cache: 'no-store' });
      if (res.ok) return { data: trimDashboard(await res.json()), source: 'live' };
    } catch {
      /* 저장 자료로 넘어간다 */
    }
  }
  const res = await fetch(SNAPSHOT);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return { data: await res.json(), source: 'snapshot' };
}
