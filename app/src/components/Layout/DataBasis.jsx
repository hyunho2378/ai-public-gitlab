// Figma: Layout/Data basis
// UX/23 5-3: 자료 기준 줄. body xsmall subtle, 날짜 형식 2026. 10. 30., 쉼표로 항목 구분(가운뎃점, 세로선 금지)
import '../Feedback/trust.css';

export function DataBasis({ children, as: Tag = 'p', className = '' }) {
  return <Tag className={`rb-databasis krds-text-body-xsmall ${className}`.trim()} data-figma="Layout/Data basis">{children}</Tag>;
}
