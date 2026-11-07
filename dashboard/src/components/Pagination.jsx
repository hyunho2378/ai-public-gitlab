// Figma: pagination → pagination
// KRDS 페이지네이션 공식 마크업(pagination.html). 현재 쪽 앞뒤 2쪽과 처음, 끝.
import { t } from '../copy/ko';

function pages(cur, total) {
  const set = new Set([1, total]);
  for (let i = cur - 2; i <= cur + 2; i += 1) if (i >= 1 && i <= total) set.add(i);
  const list = [...set].sort((a, b) => a - b);
  const out = [];
  list.forEach((p, i) => {
    if (i && p - list[i - 1] > 1) out.push('dot' + p);
    out.push(p);
  });
  return out;
}

export function Pagination({ page, total, onPage }) {
  if (total <= 1) return null;
  const go = (p) => (e) => { e.preventDefault(); onPage(p); };
  return (
    <nav className="krds-pagination" aria-label={t.pagination} data-figma="pagination">
      {page === 1 ? <span className="page-navi prev disabled">{t.prev}</span> : <a className="page-navi prev" href="#" onClick={go(page - 1)}>{t.prev}</a>}
      <div className="page-links">
        {pages(page, total).map((p) => (typeof p === 'string'
          ? <span key={p} className="page-link link-dot" />
          : <a key={p} className={`page-link${p === page ? ' active' : ''}`} href="#" onClick={go(p)} aria-current={p === page ? 'page' : undefined}>
              {p === page ? <span className="sr-only">{t.currentPage} </span> : null}{p}
            </a>))}
      </div>
      {page === total ? <span className="page-navi next disabled">{t.next}</span> : <a className="page-navi next" href="#" onClick={go(page + 1)}>{t.next}</a>}
    </nav>
  );
}
