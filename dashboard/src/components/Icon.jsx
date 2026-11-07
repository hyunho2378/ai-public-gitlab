// Figma: 호출부 전달 / 내부 부품 → 대응 미등록(실제 Figma 확인 필요)
// KRDS 아이콘(공식 키트 svg)을 글자색으로 칠한다. 크기는 KRDS 아이콘 크기 변수.
const BASE = `${import.meta.env.BASE_URL}krds/resources/img/component/icon/`;
export function Icon({ name, size = 'medium' }) {
  const url = `url(${BASE}ico_${name}.svg)`;
  return <span className={`dash-icon is-${size}`} aria-hidden="true" data-icon={name} style={{ WebkitMaskImage: url, maskImage: url }} />;
}
