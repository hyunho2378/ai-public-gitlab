// Figma: 호출부 전달 / 내부 부품 → 대응 미등록(실제 Figma 확인 필요)
// 구역 제목과 내용. 상자 없이 제목과 간격으로만 나눈다.
export function Section({ id, title, aside, children, figma }) {
  return (
    <section className="dash-section" aria-labelledby={id} data-figma={figma}>
      <div className="dash-section-head">
        <h2 id={id} className="krds-text-heading-xsmall">{title}</h2>
        {aside ? <p className="krds-text-body-xsmall dash-subtle">{aside}</p> : null}
      </div>
      {children}
    </section>
  );
}
