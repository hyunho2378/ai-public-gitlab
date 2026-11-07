// Figma: 호출부 전달 / 내부 부품 → 대응 미등록(실제 Figma 확인 필요)
// 분야: 먼저 '분야 미표시' 비율을 크게 보여 주고, 표시된 분야 상위 6개와 '그 외'를 순위 목록으로.
import { t } from '../copy/ko';
import { num } from '../lib/compute';
import { RankList } from './RankList';
import { Section } from './Section';

const TOP = 5;

export function Fields({ f }) {
  const top = f.named.slice(0, TOP);
  const rest = f.named.slice(TOP);
  const restSum = rest.reduce((a, [, v]) => a + v, 0);
  const rows = [
    ...top.map(([label, v]) => ({ label, value: v, display: num(v) })),
    ...(rest.length ? [{ label: t.fieldsOther(rest.length), value: restSum, display: num(restSum), muted: true }] : []),
  ];
  const pct = ((f.none / f.total) * 100).toFixed(1);
  return (
    <Section id="sec-fields" title={t.fieldsTitle(num(f.none), pct)} aside={t.fieldsNote(f.named.length)} figma="fields">
      <RankList rows={rows} caption={t.fieldsCaption} figma="field-rank" />
    </Section>
  );
}
