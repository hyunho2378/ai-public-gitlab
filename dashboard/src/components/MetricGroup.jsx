// Figma: Dashboard/Metric group
// 지표 하나: 이름(작게), 대표 수치 제목, 분모 줄, 순위 행(링크 있는 행은 같은 조건 목록으로), 합계 줄, 정의 줄(항상 보임, 툴팁 아님)
import { RankList } from './RankList';

export function MetricGroup({ name, title, aside, rows, sum, warn, def }) {
  return (
    <section className="dash-metric" data-figma="Dashboard/Metric group" aria-label={name}>
      <p className="krds-text-body-xsmall dash-subtle">{name}</p>
      <h3 className="krds-text-heading-xsmall dash-metric-title">{title}</h3>
      {aside ? <p className="krds-text-body-xsmall dash-subtle">{aside}</p> : null}
      <RankList rows={rows} caption={name} figma="metric-rank" />
      {sum ? <p className="krds-text-body-small dash-metric-sum">{sum}</p> : null}
      {warn ? <p className="krds-text-body-small dash-metric-warn" role="status">{warn}</p> : null}
      <p className="krds-text-body-xsmall dash-subtle">{def}</p>
    </section>
  );
}
