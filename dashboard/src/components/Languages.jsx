// Figma: 호출부 전달 / 내부 부품 → 대응 미등록(실제 Figma 확인 필요)
import { t } from '../copy/ko';
import { RankList } from './RankList';
import { Section } from './Section';

export function Languages({ langs }) {
  const rows = langs.map((l) => ({ label: l.name, value: l.raw, display: l.raw > 0 && l.raw < 1 ? t.belowOnePercent : `${l.percent}%` }));
  return (
    <Section id="sec-lang" title={t.languages} aside={t.languagesNote} figma="languages">
      <RankList rows={rows} caption={t.languagesNote} figma="lang-rank" />
    </Section>
  );
}
