// UX/23 3-2-4, 5-4: 근거 줄 이동과 강조. README 구역의 블록(data-readme-line, data-l0~data-l1) 중 범위와 겹치는 블록을 강조한다.
// 이동 280ms(움직임 줄이기면 즉시), 강조 1.2초 유지 뒤 280ms 사라짐. 다른 표식을 누르면 이전 강조는 즉시 지운다.
let timers = [];
let lit = [];

const ms = (name) => {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const n = Number.parseFloat(v);
  return Number.isFinite(n) ? n : 0;
};

function clear() {
  timers.forEach(clearTimeout);
  timers = [];
  lit.forEach((el) => el.classList.remove('is-evidence'));
  lit = [];
}

function scrollBoxOf(el) {
  let p = el.parentElement;
  while (p) {
    const oy = getComputedStyle(p).overflowY;
    if ((oy === 'auto' || oy === 'scroll') && p.scrollHeight > p.clientHeight) return p;
    p = p.parentElement;
  }
  return document.scrollingElement;
}

function glide(box, top, dur) {
  if (!dur) { box.scrollTo({ top, behavior: 'instant' }); return; }
  const start = box.scrollTop;
  const t0 = performance.now();
  const ease = (x) => 1 - (1 - x) ** 3;
  const step = (now) => {
    const k = Math.min(1, (now - t0) / dur);
    box.scrollTo({ top: start + (top - start) * ease(k), behavior: 'instant' });
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/** 범위가 README 밖이면 강조 없이 README 구역 맨 위(UX/23 5-4). 돌려주는 값: 강조한 블록 수 */
export function jumpToReadme(a, b = a) {
  clear();
  const blocks = [...document.querySelectorAll('[data-readme-line]')];
  const hit = blocks.filter((el) => Number(el.dataset.l1) >= a && Number(el.dataset.l0) <= b);
  const target = hit[0] || document.getElementById('readme');
  if (!target) return 0;
  const box = scrollBoxOf(target);
  const boxTop = box === document.scrollingElement ? 0 : box.getBoundingClientRect().top;
  const top = box.scrollTop + target.getBoundingClientRect().top - boxTop - ms('--krds-number-12') * 10;
  glide(box, Math.max(0, top), ms('--rb-motion-slow'));
  if (!hit.length) return 0;
  lit = hit;
  hit.forEach((el) => el.classList.add('is-evidence'));
  hit[0].setAttribute('tabindex', '-1');
  hit[0].focus({ preventScroll: true });
  const hold = ms('--layout-evidence-hold') || 1200;
  timers.push(setTimeout(() => { hit.forEach((el) => el.classList.remove('is-evidence')); lit = []; }, hold));
  return hit.length;
}

/** 주소 조각 #readme-L3-5 또는 #readme-L3 읽기 */
export function parseEvidenceHash(hash) {
  const m = /^#readme-L(\d+)(?:-(\d+))?$/.exec(hash || '');
  return m ? [Number(m[1]), Number(m[2] || m[1])] : null;
}
