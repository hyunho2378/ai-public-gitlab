// Figma: Data/Field tag
// UX/23 3-0-1: 분야 확정(분야 이름), 분류 확인 필요, 미분류 세 상태. 누르면 A-01 같은 분야 목록
import { Link } from 'react-router-dom';
import { a } from '../../copy/ai';
import '../Feedback/trust.css';

/** fields: 카드 fields 칸({ v, check }) */
export function fieldState(fields) {
  if (fields?.v) return { status: 'Confirmed', key: fields.v, label: fields.v };
  if (fields?.check) return { status: 'Check', key: 'check', label: a.F_check };
  return { status: 'None', key: 'unclassified', label: a.F_none };
}

export function FieldTag({ fields, link = true }) {
  const f = fieldState(fields);
  const cls = `rb-fieldtag is-${f.status.toLowerCase()} krds-text-body-xsmall`;
  if (!link) return <span className={cls} data-figma="Data/Field tag" data-status={f.status}>{f.label}</span>;
  return <Link className={cls} data-figma="Data/Field tag" data-status={f.status} to={`/?field=${encodeURIComponent(f.key)}`} aria-label={`${a.F_label} ${f.label}`}>{f.label}</Link>;
}
