// Figma: Dashboard/Rank row (data-figma), 기존 화면 상자는 data-figma-key(rank-row)
// 순위 목록: 위 줄에 이름과 값, 아래에 얇은 막대(각진 끝). 보는 값은 주색, 미표시와 '그 외'는 회색.
// 이름은 한 줄(넘치면 말줄임, 전체는 title), 값은 줄바꿈 없음.
export function RankList({ rows, caption, figma }) {
  const max = Math.max(1, ...rows.map((r) => r.value));
  return (
    <ul className="dash-rank" aria-label={caption} data-figma={figma}>
      {rows.map((r) => (
        <li key={r.label} className={`dash-rank-row${r.muted ? ' is-muted' : ''}${r.href ? ' is-link' : ''}`} data-figma="Dashboard/Rank row" data-figma-key="rank-row">
          {/* 링크 행(F6 분야 행): 행 전체가 같은 조건 목록 이동(UX/23 3-6-4) */}
          {r.href ? (
            <a className="dash-rank-hit" href={r.href} aria-label={`${r.linkLabel || r.label}, ${r.display}`}>
              <span className="dash-rank-line">
                <span className="krds-text-body-small dash-rank-label" title={r.label}>{r.label}</span>
                <span className="krds-text-body-small dash-num dash-rank-value">{r.display}</span>
              </span>
              <span className="dash-rank-track" aria-hidden="true"><span className="dash-rank-bar" style={{ width: `${Math.max(0, (r.value / max) * 100)}%` }} /></span>
            </a>
          ) : (
            <>
              <span className="dash-rank-line">
                <span className="krds-text-body-small dash-rank-label" title={r.label}>{r.label}</span>
                <span className="krds-text-body-small dash-num dash-rank-value">{r.display}</span>
              </span>
              <span className="dash-rank-track" aria-hidden="true"><span className="dash-rank-bar" style={{ width: `${Math.max(0, (r.value / max) * 100)}%` }} /></span>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
