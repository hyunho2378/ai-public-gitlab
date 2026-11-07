// Figma: issue-row → issue-row
import { t } from '../copy/ko';
import { byRecent, relative } from '../lib/compute';
import { Section } from './Section';

export function RecentIssues({ data, now }) {
  const byId = Object.fromEntries(data.projects.map((p) => [p.id, p]));
  const list = byRecent(data.recentIssues || [], 'created_at').slice(0, 5);
  return (
    <Section id="sec-issues" title={t.issuesRecent} figma="issues">
      {list.length ? (
        <ul className="dash-rows">
          {list.map((i) => (
            <li key={i.id} className="dash-row" data-figma="issue-row">
              <a className="krds-text-body-small-bold dash-link" href={i.web_url} target="_blank" rel="noreferrer" title={`#${i.iid} ${i.title}, ${t.newWindow}`}>#{i.iid} {i.title}</a>
              <p className="krds-text-body-xsmall dash-subtle">{byId[i.project_id]?.name || '-'} / {relative(i.created_at, now)}</p>
            </li>
          ))}
        </ul>
      ) : <p className="krds-text-body-small dash-subtle">{t.issuesEmpty}</p>}
    </Section>
  );
}
