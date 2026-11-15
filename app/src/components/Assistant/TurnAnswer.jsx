// Figma: Assistant/Turn answer
// UX/23 3-10-4, 3-10-6: 상태 머리(AI 추천 n, 비슷한 프로젝트 n, 대체면 Spark 없이 일반 결과 n), 해석 줄 또는 조건 글자, 행 최대 5, 일반 결과 n건 링크.
// 자유 문단 답변, 요약 문장, 인사말 없음. 화면 글자 원천은 고정 문구, 카드 칸, 검색 응답 칸 셋
import { Link } from 'react-router-dom';
import { a } from '../../copy/ai';
import { localSearch } from '../../api/searchCore';
import { Skeleton, Notice } from '../Feedback/Status';
import { RecommendRow } from '../Layout/RecommendRow';
import { SparkMark } from './SparkMark';
import { ReadingLine } from './ReadingLine';

const searchHref = (t) => `/search?mode=${t.mode}&q=${encodeURIComponent(t.query || '')}${t.fields?.length ? `&field=${encodeURIComponent(t.fields.join(','))}` : ''}`;

export function TurnAnswer({ turn, store, onSimilar, onOpenRow, onRetry, onAllFields, onRerun }) {
  const { status, res, mode } = turn;
  const similar = mode === 'similar';
  if (status === 'thinking') {
    return (
      <div className="rb-ai-a" data-figma="Assistant/Turn answer" data-state="Thinking" aria-busy="true">
        <p className="rb-ai-a-head krds-text-body-small-bold" aria-live="polite"><SparkMark pulse />{a.A_thinking}</p>
        <div className="rb-skel-group"><Skeleton widths={['100%', '88%', '72%']} /></div>
      </div>
    );
  }
  if (status === 'canceled') return <p className="rb-ai-a rb-subtle krds-text-body-xsmall" data-figma="Assistant/Turn answer" data-state="Canceled">{a.A_canceled}</p>;
  if (status === 'base-missing') return <div className="rb-ai-a" data-figma="Assistant/Turn answer" data-state="Error"><p className="krds-text-body-small-bold" aria-live="polite">{a.Q_baseMissing}</p></div>;
  const data = store?.raw;
  const cards = (res?.items || []).slice(0, 5).map((it) => ({ it, card: store?.get(it.id) })).filter((x) => x.card);
  const fallback = !!res?.fallback;
  const aiIds = fallback ? [] : cards.map((x) => x.card.id);
  const generalN = data && turn.query ? localSearch(data, turn.query, { fields: turn.fields, excludeIds: [...(turn.excludeIds || []), ...aiIds], limit: 50 }).length : 0;
  const head = fallback ? a.Q_kwTitle(cards.length) : similar ? a.Q_simTitle(cards.length) : a.Q_recTitle(cards.length);
  const rows = cards.length ? (
    <ul className="rb-rec-list">
      {cards.map(({ it, card }) => (
        <RecommendRow key={card.id} item={it} card={card} kind={fallback ? (similar ? 'Similar' : 'Explore') : similar ? 'Similar' : 'Recommend'} fallback={fallback} stacked onSimilar={onSimilar} onOpen={onOpenRow} />
      ))}
    </ul>
  ) : null;
  const more = generalN && status !== 'failed' ? <p className="krds-text-body-xsmall"><Link className="krds-link" to={searchHref(turn)}>{a.A_moreResults(generalN)}</Link></p> : null;
  if (status === 'failed') {
    return (
      <div className="rb-ai-a" data-figma="Assistant/Turn answer" data-state="Error">
        <p className="krds-text-body-small-bold" aria-live="polite">{a.Q_fail}</p>
        <p className="krds-text-body-xsmall rb-subtle">{a.Q_failBody}</p>
        <button type="button" className="krds-btn small tertiary" onClick={() => onRetry(turn)}>{a.Q_retry}</button>
      </div>
    );
  }
  if (status === 'empty' || status === 'fallback-empty') {
    return (
      <div className="rb-ai-a" data-figma="Assistant/Turn answer" data-state={status === 'empty' ? 'Empty' : 'Fallback'}>
        {status === 'fallback-empty' ? <Notice>{similar ? a.Q_fbBuild : a.Q_fbTask}</Notice> : null}
        <p className="krds-text-body-small-bold" aria-live="polite">{status === 'empty' ? (similar ? a.Q_simNone : a.Q_none) : a.Q_fbNone}</p>
        <p className="krds-text-body-xsmall rb-subtle">{a.Q_noneBody}</p>
        <p className="rb-ai-acts">
          {turn.fields?.length ? <button type="button" className="krds-btn small tertiary" onClick={() => onAllFields(turn)}>{a.Q_allFields}</button> : null}
          <Link className="krds-btn small tertiary" to={`/requests?title=${encodeURIComponent(turn.query || '')}`} onClick={onOpenRow}>{a.Q_request}</Link>
        </p>
      </div>
    );
  }
  return (
    <div className="rb-ai-a" data-figma="Assistant/Turn answer" data-state={status === 'ok' ? 'Ready' : status === 'version-mismatch' ? 'Mismatch' : 'Fallback'} data-kind={similar ? 'Similar' : 'Recommend'}>
      {status === 'fallback' ? <Notice>{similar ? a.Q_fbBuild : a.Q_fbTask}</Notice> : null}
      {status === 'version-mismatch' ? <Notice>{a.Q_versionMismatch}</Notice> : null}
      <p className="rb-ai-a-head krds-text-body-small-bold" aria-live="polite">{fallback ? null : <SparkMark />}{head}</p>
      <ReadingLine reading={res?.reading} fields={turn.fields} fallback={fallback} fieldOptions={(store?.fields() || []).map((f) => f.name)} onRerun={(r) => onRerun(turn, r)} />
      {rows}
      {status === 'version-mismatch' ? <p className="krds-text-body-xsmall rb-subtle">{a.Q_versionNeed}</p> : null}
      {more}
    </div>
  );
}
