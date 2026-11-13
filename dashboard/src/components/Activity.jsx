// Figma: Dashboard/Tabs, Dashboard/Bar chart (data-figma), 기존 화면 상자는 data-figma-key(activity-tabs, activity-chart, chart-col)
// 최근 7일 막대 그래프: KRDS 탭으로 항목을 고르고, 0부터 시작하는 세로축과 눈금선 위에 막대 하나씩.
// 막대 폭 16(가로로 뚱뚱하지 않게), 그래프 높이 200(위로 충분히). 기준선(0)은 진한 선.
import { useState } from 'react';
import { t } from '../copy/ko';
import { dayLabel, niceTicks, num } from '../lib/compute';
import { Section } from './Section';

export function Activity({ a }) {
  const [cur, setCur] = useState(a.rows[0].key);
  const row = a.rows.find((r) => r.key === cur);
  const ticks = niceTicks(Math.max(...row.values));
  const top = ticks[ticks.length - 1];
  // 제목 합계 = 그래프에 보이는 7일 막대의 합(사용자가 더해 봐도 같은 값)
  const total = num(row.values.reduce((x, y) => x + y, 0));
  return (
    <Section id="sec-activity" title={t.activityTitle(t.activityRows[cur], total)} figma="activity">
      <div className="krds-tab-area layer dash-tabs" data-figma="Dashboard/Tabs" data-figma-key="activity-tabs">
        <div className="tab line">
          <ul role="tablist" aria-label={t.activity}>
            {a.rows.map((r) => (
              <li key={r.key} id={`tab-${r.key}`} role="tab" aria-selected={r.key === cur} aria-controls="panel-activity" className={r.key === cur ? 'active' : undefined}>
                <button type="button" className="btn-tab" onClick={() => setCur(r.key)}>{t.activityRows[r.key]}{r.key === cur ? <i className="sr-only"> 선택됨</i> : null}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div id="panel-activity" role="tabpanel" aria-labelledby={`tab-${cur}`} className="dash-chart" data-figma="Dashboard/Bar chart" data-figma-key="activity-chart">
        <div className="dash-chart-plot" aria-hidden="true">
          <ol className="dash-chart-y">
            {ticks.map((v) => <li key={v} className="krds-text-body-xsmall dash-subtle dash-num" style={{ '--p': v / top }}>{num(v)}</li>)}
          </ol>
          <div className="dash-chart-area">
            <div className="dash-chart-grid">{ticks.slice(1).map((v) => <span key={v} style={{ '--p': v / top }} />)}</div>
            <ol className="dash-chart-cols">
              {row.values.map((v, i) => (
                <li key={a.days[i]} className="dash-chart-col" title={`${dayLabel(a.days[i])} ${num(v)}`} data-figma="chart-col">
                  <span className="dash-chart-bar" style={{ '--r': v / top }} />
                </li>
              ))}
            </ol>
          </div>
        </div>
        <ol className="dash-chart-days" aria-hidden="true">
          {a.days.map((d) => <li key={d} className="krds-text-body-xsmall dash-subtle">{dayLabel(d)}</li>)}
        </ol>
        <table className="sr-only">
          <caption>{t.activityRows[cur]} {t.activityTableCaption}</caption>
          <tbody>{a.days.map((d, i) => <tr key={d}><th scope="row">{dayLabel(d)}</th><td>{row.values[i]}</td></tr>)}</tbody>
        </table>
      </div>
    </Section>
  );
}
