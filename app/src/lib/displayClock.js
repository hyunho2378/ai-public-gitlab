/** 표시용 시계. 개발 측정에서만 ?now=ISO를 읽고 배포본은 실제 현재 시각을 쓴다. */
export function displayNow() {
  if (import.meta.env.DEV && typeof window !== 'undefined') {
    const raw = new URLSearchParams(window.location.search).get('now');
    // URLSearchParams가 인코딩하지 않은 +09:00을 공백으로 읽는 경우도 허용한다.
    const fixed = raw ? Date.parse(raw.replace(/ (\d{2}:\d{2})$/, '+$1')) : NaN;
    if (Number.isFinite(fixed)) return fixed;
  }
  return Date.now();
}
