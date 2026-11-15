// 소개 정보 현황 자료: 카드 자료 생성(build.mjs)이 cards.min.json과 함께 쓰는 public/data/metrics.json(docs/METRICS.md 계약).
// 앱 카드 자료(cards.min.json)의 버전도 읽어 대조한다(다르면 자료 버전 불일치). 앱 자료를 못 읽으면 대조하지 않는다
export const APP_URL = import.meta.env.VITE_APP_URL || import.meta.env.VITE_GITLAB_URL || '../';

export async function loadMetrics() {
  const r = await fetch(`${import.meta.env.BASE_URL}data/metrics.json`, { cache: 'no-cache' });
  if (r.status === 404) return { none: true };
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  const m = await r.json();
  let appVersion = null;
  try {
    const c = await fetch(new URL('data/cards.min.json', new URL(APP_URL, location.href)), { cache: 'no-cache' });
    if (c.ok) appVersion = (await c.json()).meta?.version ?? null;
  } catch { /* 대조 생략 */ }
  return { m, appVersion };
}
