// 활동 달력(공공 GitLab 사용자 프로필 '활동' 그대로): 52주 x 7일, 칸 하나 = 하루, 진할수록 활동이 많음.
// 달 이름은 위(끝 2주는 넘침 방지로 비움), 요일(월, 수, 금)은 왼쪽에 고정, 범례는 왼쪽 아래, 설명은 오른쪽 아래. 색은 layout.tokens.css --layout-cal-0~4
import { useEffect, useRef } from 'react';
import { pf } from '../../copy/work';

const TZ = 'Asia/Seoul';
const DAY = 86400000;
const keyOf = (d) => new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(d);
const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const ROWS = pf.calRows;

/** counts: { 'YYYY-MM-DD': n }. 단계는 값이 있는 날의 4분위(GitHub, GitLab 방식) */
export function buildCalendar(counts, now = Date.now(), weeks = 52) {
  const end = new Date(`${keyOf(new Date(now))}T12:00:00+09:00`);
  const dow = DOW.indexOf(new Intl.DateTimeFormat('en-US', { timeZone: TZ, weekday: 'short' }).format(end));
  const start = end.getTime() - ((weeks - 1) * 7 + dow) * DAY;
  const nz = Object.values(counts).filter(Boolean).sort((a, b) => a - b);
  const q = (r) => nz[Math.min(nz.length - 1, Math.floor(nz.length * r))] || 1;
  const cuts = [q(0.25), q(0.5), q(0.75)];
  const level = (v) => (!v ? 0 : v <= cuts[0] ? 1 : v <= cuts[1] ? 2 : v <= cuts[2] ? 3 : 4);
  const cols = [];
  let total = 0;
  for (let w = 0; w < weeks; w += 1) {
    const days = [];
    for (let d = 0; d < 7; d += 1) {
      const at = start + (w * 7 + d) * DAY;
      const key = keyOf(new Date(at));
      const future = at > end.getTime();
      const v = future ? null : counts[key] || 0;
      if (v) total += v;
      days.push({ key, v, level: v == null ? null : level(v) });
    }
    cols.push(days);
  }
  const months = cols.map((days) => {
    const f = days.find((x) => x.key.endsWith('-01'));
    return f ? pf.calMonth(Number(f.key.slice(5, 7))) : '';
  });
  return { cols, months, total };
}

const dayText = (key) => `${Number(key.slice(5, 7))}. ${Number(key.slice(8, 10))}.`;

export function ActivityCalendar({ cal, caption, cellLabel, aria, less, more }) {
  // 좁은 화면에서는 가로로 넘기고, 처음에는 최근 주(오른쪽 끝)를 보여 준다
  const ref = useRef(null);
  useEffect(() => { if (ref.current) ref.current.scrollLeft = ref.current.scrollWidth; }, [cal]);
  return (
    <div className="rb-cal" data-figma="activity-calendar">
      <div className="rb-cal-scroll" ref={ref}>
        {/* 한 격자: 1열은 요일, 2~53열은 주. 1행은 달 이름, 2~8행은 일~토 */}
        <div className="rb-cal-grid" role="img" aria-label={aria}>
          <span className="rb-cal-month" aria-hidden="true" />
          {ROWS.map((r, i) => <span key={i} className="rb-cal-dow" aria-hidden="true">{r}</span>)}
          {cal.cols.map((days, w) => [
            <span key={`m${w}`} className="rb-cal-month" aria-hidden="true">{w < cal.cols.length - 2 ? cal.months[w] : ''}</span>,
            ...days.map((d) => <span key={d.key} className={'rb-cal-day' + (d.level == null ? ' is-future' : ` lv-${d.level}`)} title={d.v == null ? undefined : cellLabel(dayText(d.key), d.v)} />),
          ])}
        </div>
      </div>
      <div className="rb-cal-foot">
        <p className="rb-cal-legend" aria-hidden="true"><span>{less}</span>{[0, 1, 2, 3, 4].map((l) => <span key={l} className={`rb-cal-day lv-${l}`} />)}<span>{more}</span></p>
        <p className="rb-cal-caption">{caption}</p>
      </div>
    </div>
  );
}
