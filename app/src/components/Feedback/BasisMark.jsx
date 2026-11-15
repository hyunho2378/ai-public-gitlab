// Figma: Feedback/Basis mark
// UX/23 3-2-3, 5-3: 근거 위치 글자 링크. Kind=Lines 'README a~b줄'(A-02 README 줄로 이동과 강조), Kind=Paths 경로 최대 3 + '외 n'(첫 경로 R-03), Kind=None '확인 근거 없음'(링크 없음)
import { Link, useLocation } from 'react-router-dom';
import { a } from '../../copy/ai';
import { jumpToReadme } from '../Help/evidence';
import './trust.css';

/** e: 카드 항목 근거({ lines:[a,b] } 또는 { paths:[] } 또는 배열 경로), lines: 검색 응답 basisLines */
export function basisKind(e, lines) {
  const ln = lines || e?.lines;
  if (Array.isArray(ln) && ln.length === 2) return { kind: 'Lines', lines: ln };
  const paths = Array.isArray(e) ? e : e?.paths;
  if (Array.isArray(paths) && paths.length) return { kind: 'Paths', paths };
  return { kind: 'None' };
}

export function BasisMark({ id, e, lines, readme = true, link = true }) {
  const { pathname } = useLocation();
  let k = basisKind(e, lines);
  // README 없는 카드에는 줄 표식을 만들지 않는다(3-2-4)
  if (k.kind === 'Lines' && readme === false) k = { kind: 'None' };
  if (k.kind === 'None') return <span className="rb-basis-mark is-none" data-figma="Feedback/Basis mark" data-kind="None">{a.E_none}</span>;
  if (k.kind === 'Paths') {
    const shown = k.paths.slice(0, 3);
    const more = k.paths.length - shown.length;
    return (
      <span className="rb-basis-mark" data-figma="Feedback/Basis mark" data-kind="Paths">
        {link && id ? <Link className="rb-basis-link" to={`/projects/${id}/code/${shown[0]}`}>{shown[0]}</Link> : shown[0]}
        {shown.slice(1).map((p) => <span key={p}>, {p}</span>)}
        {more > 0 ? <span> {a.E_more(more)}</span> : null}
      </span>
    );
  }
  const [x, y] = k.lines;
  const to = `/projects/${id}/about#readme-L${x}-${y}`;
  const here = pathname === `/projects/${id}/about`;
  const text = a.E_lines(x, y);
  if (!link || !id) return <span className="rb-basis-mark" data-figma="Feedback/Basis mark" data-kind="Lines">{text}</span>;
  return (
    <Link
      className="rb-basis-mark rb-basis-link"
      data-figma="Feedback/Basis mark"
      data-kind="Lines"
      to={to}
      title={a.E_tip(x, y)}
      onClick={(ev) => {
        if (!here) return;
        ev.preventDefault();
        window.history.replaceState(window.history.state, '', `${window.location.pathname}${window.location.search}#readme-L${x}-${y}`);
        jumpToReadme(x, y);
      }}
    >
      {text}
    </Link>
  );
}
