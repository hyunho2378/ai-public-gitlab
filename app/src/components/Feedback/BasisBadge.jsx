// Figma: Feedback/Basis badge
// UX/23 5-3: KRDS badge, 높이 24, 모서리 4. README 기반 primary 채움, 코드 추정 secondary 채움, 정보 부족 gray 면과 subtle 글자. 마우스 올림과 초점에 풀이
import { a } from '../../copy/ai';
import './trust.css';

const LABEL = { readme: [a.B_readme, a.B_readmeTip], code: [a.B_code, a.B_codeTip], none: [a.B_none, a.B_noneTip] };

export function BasisBadge({ basis, label }) {
  const b = LABEL[basis] ? basis : 'none';
  const [text, tip] = LABEL[b];
  return (
    <span className={`rb-basis-badge is-${b}`} data-figma="Feedback/Basis badge" data-basis={b} title={tip} tabIndex={0} aria-label={label ? `${label} ${text}, ${tip}` : `${text}, ${tip}`}>
      {text}
    </span>
  );
}
