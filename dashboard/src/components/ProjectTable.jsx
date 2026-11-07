// Figma: filters, project-table, project-row → filters, project-table, project-row
import { useMemo, useState } from 'react';
import { t } from '../copy/ko';
import { commits, filterSort, formatDate, num, relative, splitDescription, stats } from '../lib/compute';
import { Pagination } from './Pagination';
import { Section } from './Section';

const PER = 20;

export function ProjectTable({ data, now, fields }) {
  const [q, setQ] = useState('');
  const [field, setField] = useState('');
  const [sort, setSort] = useState('last_activity_at');
  const [page, setPage] = useState(1);
  const list = useMemo(() => filterSort(data, { q, field, sort }), [data, q, field, sort]);
  const pageCount = Math.max(1, Math.ceil(list.length / PER));
  const cur = Math.min(page, pageCount);
  const rows = list.slice((cur - 1) * PER, cur * PER);
  const changed = q || field || sort !== 'last_activity_at';
  const maxCommits = useMemo(() => Math.max(1, ...data.projects.map((p) => commits(data, p))), [data]);
  const set = (fn) => (e) => { fn(e.target.value); setPage(1); };

  return (
    <Section id="sec-table" title={t.table} aside={t.count(num(list.length), num(data.projects.length))} figma="table">
      <form className="dash-filters" role="search" onSubmit={(e) => e.preventDefault()} data-figma="dash/filter field" data-figma-key="filters">
        <div className="form-group dash-filter-q">
          <div className="form-tit"><label htmlFor="f-q">{t.search}</label></div>
          <div className="form-conts"><input id="f-q" type="search" className="krds-input medium" placeholder={t.searchHint} value={q} onChange={set(setQ)} /></div>
        </div>
        <div className="form-group">
          <div className="form-tit"><label htmlFor="f-field">{t.field}</label></div>
          <div className="form-conts">
            <select id="f-field" className="krds-form-select medium" value={field} onChange={set(setField)}>
              <option value="">{t.fieldAll}</option>
              {fields.map(([f]) => <option key={f} value={f}>{f}</option>)}
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-tit"><label htmlFor="f-sort">{t.sort}</label></div>
          <div className="form-conts">
            <select id="f-sort" className="krds-form-select medium" value={sort} onChange={set(setSort)}>
              {Object.entries(t.sorts).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </div>
        </div>
        {changed ? <button type="button" className="krds-btn medium tertiary dash-reset" onClick={() => { setQ(''); setField(''); setSort('last_activity_at'); setPage(1); }}>{t.reset}</button> : null}
      </form>

      {rows.length ? (
        <div className="krds-table-wrap dash-table-wrap">
          <table className="tbl col data dash-table" data-figma="project-table">
            <caption className="sr-only">{t.tableCaption}</caption>
            <colgroup><col /><col className="c-owner" /><col className="c-field" /><col className="c-issues" /><col className="c-commits" /><col className="c-stars" /><col className="c-updated" /></colgroup>
            <thead>
              <tr>
                <th scope="col">{t.col.project}</th><th scope="col">{t.col.owner}</th><th scope="col">{t.col.field}</th>
                <th scope="col" className="is-right">{t.col.issues}</th><th scope="col" className="is-right">{t.col.commits}</th><th scope="col" className="is-right">{t.col.stars}</th><th scope="col" className="is-right">{t.col.updated}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((p) => {
                const s = splitDescription(p);
                const st = stats(data, p);
                const c = commits(data, p);
                return (
                  <tr key={p.id} data-figma="dash/table row" data-figma-key="project-row">
                    <td className="dash-cell-project">
                      <div className="dash-cell-project-inner">
                        <a className="krds-text-body-small-bold dash-link dash-name" href={p.web_url} target="_blank" rel="noreferrer" title={`${p.name}, ${t.newWindow}`}>{p.name}</a>
                        {s.description ? <span className="krds-text-body-xsmall dash-subtle dash-ellipsis" title={s.description}>{s.description}</span> : null}
                        <span className="krds-text-body-xsmall dash-subtle dash-ellipsis dash-only-stack">{p.owner}{s.field ? ` / ${s.field}` : ''}</span>
                      </div>
                    </td>
                    <td className="dash-only-cols" data-label={t.col.owner}><span className="dash-ellipsis" title={p.owner}>{p.owner}</span></td>
                    <td className={`dash-only-cols${s.field ? '' : ' dash-subtle'}`} data-label={t.col.field}>{s.field || t.fieldNone}</td>
                    <td className="dash-num is-right" data-label={t.col.issues}>{num(st.openedIssues || 0)}</td>
                    <td className="dash-num is-right" data-label={t.col.commits}>
                      <span className="dash-commits">
                        <span>{num(c)}</span>
                        <span className="dash-rank-track is-cell" aria-hidden="true"><span className="dash-rank-bar" style={{ width: `${Math.max(0.5, (c / maxCommits) * 100)}%` }} /></span>
                      </span>
                    </td>
                    <td className="dash-num is-right" data-label={t.col.stars}>{num(p.star_count)}</td>
                    <td className="dash-num is-right dash-nowrap-cell" data-label={t.col.updated} title={formatDate(p.last_activity_at)}>{relative(p.last_activity_at, now)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : <p className="krds-text-body-medium dash-subtle dash-empty">{t.empty}</p>}

      <Pagination page={cur} total={pageCount} onPage={(p) => { setPage(p); document.getElementById('sec-table')?.scrollIntoView({ block: 'start' }); }} />
    </Section>
  );
}
