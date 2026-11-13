// Figma: Dashboard/Registration calendar (data-figma), 기존 화면 상자는 data-figma-key(calendar-grid)
// 공개 프로젝트 등록 달력(GitHub/GitLab 활동 달력 방식). 칸 하나 = 하루, 진할수록 그날 등록이 많음.
// 색: 0은 회색, 1~4단계는 KRDS 주색 20/40/60/80(공공 GitLab 사용자 활동 달력의 파랑 단계에 대응)
import { useEffect, useRef } from 'react';
import { t } from '../copy/ko';
import { dayLabel, num } from '../lib/compute';
import { Section } from './Section';

const ROW_LABEL = ['', '월', '', '수', '', '금', ''];

export function Heatmap({ cal }) {
  // 좁은 화면에서는 가로로 넘기고, 처음에는 최근 주(오른쪽 끝)를 보여 준다
  const ref = useRef(null);
  useEffect(() => { if (ref.current) ref.current.scrollLeft = ref.current.scrollWidth; }, []);
  return (
    <Section id="sec-cal" title={t.calTitle(num(cal.total))} aside={t.calAside(dayLabel(cal.first))} figma="calendar">
      <div className="dash-cal-scroll" ref={ref}>
        <div className="dash-cal" role="img" aria-label={t.calAria(num(cal.total))} data-figma="Dashboard/Registration calendar" data-figma-key="calendar-grid">
          <div className="dash-cal-rows" aria-hidden="true">
            <span />
            {ROW_LABEL.map((l, i) => <span key={i} className="krds-text-body-xsmall dash-subtle">{l}</span>)}
          </div>
          {cal.cols.map((days, w) => (
            <div key={w} className="dash-cal-week">
              <span className="krds-text-body-xsmall dash-subtle dash-cal-month">{cal.months[w]}</span>
              {days.map((d) => (
                <span key={d.key} className={`dash-cal-day${d.level == null ? ' is-future' : ` lv-${d.level}`}`} title={d.v == null ? undefined : `${dayLabel(d.key)} ${num(d.v)}개`} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="dash-cal-foot">
        <p className="krds-text-body-xsmall dash-subtle">{t.calNote}</p>
        <p className="dash-cal-legend krds-text-body-xsmall dash-subtle" aria-hidden="true">
          {t.calLess}
          {[0, 1, 2, 3, 4].map((l) => <span key={l} className={`dash-cal-day lv-${l}`} />)}
          {t.calMore}
        </p>
      </div>
    </Section>
  );
}
