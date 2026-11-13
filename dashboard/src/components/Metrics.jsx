// Figma: Dashboard/Stat (data-figma), 기존 화면 상자는 data-figma-key(metrics, metric)
// 숫자 한 줄: 큰 숫자 카드 대신 화면 머리 아래 한 줄에 이름과 값(GitHub 저장소 숫자 줄 방식).
import { t } from '../copy/ko';
import { num } from '../lib/compute';

export function Metrics({ m }) {
  const items = [
    [t.kpi.total, num(m.total), t.kpi.totalHint(num(m.listed), num(m.private))],
    [t.kpi.active, num(m.active), t.kpi.activeHint],
    [t.kpi.users, num(m.users), null],
    [t.kpi.issues, num(m.openIssues + m.closedIssues), t.kpi.issuesHint(num(m.openIssues), num(m.closedIssues))],
    [t.kpi.stars, num(m.stars), null],
  ];
  return (
    <dl className="dash-stats" data-figma="metrics">
      {items.map(([label, value, hint]) => (
        <div className="dash-stat" key={label} data-figma="Dashboard/Stat" data-figma-key="metric" title={hint || undefined}>
          <dt className="krds-text-body-small dash-subtle">{label}</dt>
          <dd className="krds-text-body-small-bold dash-num">{value}</dd>
          {hint ? <dd className="krds-text-body-xsmall dash-subtle dash-stat-hint">{hint}</dd> : null}
        </div>
      ))}
    </dl>
  );
}
