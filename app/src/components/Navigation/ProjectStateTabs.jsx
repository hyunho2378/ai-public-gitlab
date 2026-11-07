// Figma: gl-tabs → 프로젝트/그룹 활성 상태 탭. 같은 KRDS 마크업을 두 화면에서 공유한다.
// 바깥 틀은 Figma에 대응 층이 없어(G-01/G-04는 gl-tabs 하나) 이름표를 두지 않는다(M13 코드에만 tabs 20).
import { u } from '../../copy/ui';

export function ProjectStateTabs({ archived, onChange }) {
  return (
    <div className="krds-tab-area rb-x-tabs">
      <div className="tab line" role="tablist" aria-label={u.X_tabs}>
        <ul data-figma="gl-tabs">
          {[[false, u.X_active], [true, u.X_inactive]].map(([value, label]) => (
            <li key={label} className={archived === value ? 'active' : undefined}>
              <button type="button" role="tab" aria-selected={archived === value} className="btn-tab" onClick={() => onChange(value)}>{label}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
