// Figma: Layout/Intro item
// UX/23 3-2-3: 소개 카드 한 행. Variant=Full(라벨 120 + 값 + 근거 줄), Variant=Compact(정보 열, 라벨 옆 배지와 값 한 줄)
import { a } from '../../copy/ai';
import { BasisBadge } from '../Feedback/BasisBadge';
import { BasisMark } from '../Feedback/BasisMark';
import { FoldText } from './FoldText';
import '../Feedback/trust.css';

/** item: 카드 항목({ v, e, b, label }), b가 없으면 근거 줄(e.lines)로 readme 추정 */
export function itemBasis(item) {
  // 규칙 칸(실행 형태)은 값이 파일 목록(e 경로)에서 나왔는데 자료 b가 none으로 들어와 있다(2026-11-15 자료 기준). 경로 근거가 있으면 코드 추정으로 본다
  const paths = Array.isArray(item?.e) ? item.e : item?.e?.paths;
  if (item?.b && item.b !== 'none') return item.b;
  if (item?.v != null && Array.isArray(paths) && paths.length) return 'code';
  if (item?.b) return item.b;
  return item?.e?.lines ? 'readme' : 'none';
}
export function itemText(item) {
  const v = item?.v;
  if (v == null || (Array.isArray(v) && !v.length)) return null;
  if (item.label && typeof v === 'string' && !/\s/.test(v)) return item.label;
  return Array.isArray(v) ? v.join(', ') : String(v);
}

export function IntroItem({ label, item, id, readme, variant = 'Full', fold = 0 }) {
  const b = itemBasis(item);
  const text = b === 'none' && item?.s === 'ai' ? null : itemText(item);
  const value = text == null ? <span className="rb-subtle">{a.C_info}</span> : fold ? <FoldText lines={fold}>{text}</FoldText> : text;
  if (variant === 'Compact') {
    return (
      <div className="rb-intro-item is-compact" data-figma="Layout/Intro item" data-variant="Compact">
        <dt className="krds-text-body-xsmall-bold">{label} <BasisBadge basis={b} label={label} /></dt>
        <dd className="krds-text-body-small rb-clamp-2" title={text || undefined}>{value}</dd>
      </div>
    );
  }
  return (
    <div className="rb-intro-item" data-figma="Layout/Intro item" data-variant="Full">
      <dt className="rb-intro-label krds-text-body-xsmall-bold">{label}</dt>
      <dd className="rb-intro-value">
        <div className="krds-text-body-small">{value}</div>
        <div className="rb-intro-basis">
          <BasisBadge basis={b} label={label} />
          <BasisMark id={id} e={item?.e} readme={readme} />
        </div>
      </dd>
    </div>
  );
}
