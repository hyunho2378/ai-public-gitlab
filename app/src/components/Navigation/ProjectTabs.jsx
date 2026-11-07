// Figma: product/repo_tabs (data-figma), 기존 화면 상자는 data-figma-key
import { t } from '../../copy/ko';
import { Link } from 'react-router-dom';

const TABS = [
  ['', t.Tab_code],
  ['/about', t.ProjectTabs_1],
  ['/use', t.ProjectTabs_2],
  ['/changes', t.ProjectTabs_4],
  ['/feedback', t.ProjectTabs_5],
];

export function ProjectTabs({ id, active }) {
  return (
    <nav data-figma="product/repo_tabs" data-figma-key="" className="krds-tab-area rb-tabs" aria-label={t.ProjectTabs_6}>
      <div className="tab line">
        <ul>
          {TABS.map(([suffix, label]) => (
            <li key={suffix} className={suffix === active ? 'active' : ''}>
              <Link className="btn-tab" to={`/projects/${id}${suffix}`} aria-current={suffix === active ? 'page' : undefined}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
