// Figma: A-02 비슷한 프로젝트 구역(F4, UX/23 3-4). 소개 카드 표시 뒤 자동 요청, 현재 프로젝트 제외(대체 검색 포함), 최대 5
import { useEffect, useState } from 'react';
import { a } from '../../copy/ai';
import { search, createLatestGuard } from '../../api/search';
import { Notice, Skeleton } from '../../components/Feedback/Status';
import { RecommendRow, RecGroupHead } from '../../components/Layout/RecommendRow';
import { SparkMark } from '../../components/Assistant/SparkMark';
import { useAssistant } from '../../components/Assistant/AssistantContext';

const guard = createLatestGuard();
export const similarQuery = (card) => `${card.name} ${card.oneLine?.v || card.task?.v || card.desc || ''}`.replace(/\s+/g, ' ').trim().slice(0, 500);

export function SimilarSection({ id, card, store }) {
  const [res, setRes] = useState(null);
  const [n, setN] = useState(0);
  const ai = useAssistant();
  const base = card ? similarQuery(card) : '';
  useEffect(() => {
    if (!card) return undefined;
    let live = true;
    setRes(null);
    search({ query: base, mode: 'similar', excludeIds: [Number(id)] }, { guard }).then((r) => { if (live && !r.stale) setRes(r); });
    return () => { live = false; };
  }, [id, n]); // eslint-disable-line react-hooks/exhaustive-deps
  const items = (res?.items || []).filter((x) => x.id !== Number(id)).slice(0, 5).map((it) => ({ it, card: store?.get(it.id) })).filter((x) => x.card);
  const fallback = !!res?.fallback;
  const toAssistant = () => (res ? ai.ask({ query: base, mode: 'similar', excludeIds: [Number(id)], label: a.A_similarQ(card.name), reuse: res }) : null);
  let body;
  if (!card) body = <p className="krds-text-body-small-bold" role="status">{a.Q_baseMissing}</p>;
  else if (!res) body = <div className="rb-q-busy" role="status" aria-busy="true"><RecGroupHead spark={<SparkMark pulse />}>{a.A_thinking}</RecGroupHead><div className="rb-skel-group"><Skeleton widths={['100%', '84%', '72%']} /></div></div>;
  else if (res.status === 'failed') body = <div role="alert" className="rb-status" data-state="Error"><p className="krds-text-body-small-bold">{a.Q_fail}</p><div className="rb-actions"><button type="button" className="krds-btn small tertiary" onClick={() => setN((x) => x + 1)}>{a.Q_retry}</button></div></div>;
  else if (res.status === 'empty' || res.status === 'fallback-empty' || !items.length) body = <>{fallback ? <Notice>{a.Q_fbBuild}</Notice> : null}<p className="krds-text-body-small-bold">{fallback ? a.Q_fbNone : a.Q_simNone}</p></>;
  else body = (
    <>
      {res.status === 'fallback' ? <Notice>{a.Q_fbBuild}</Notice> : null}
      {res.status === 'version-mismatch' ? <Notice>{a.Q_versionMismatch}</Notice> : null}
      <ul className="rb-rec-list">{items.map(({ it, card: c }) => <RecommendRow key={c.id} item={it} card={c} kind="Similar" fallback={fallback} />)}</ul>
      {res.status === 'version-mismatch' ? <p className="krds-text-body-xsmall rb-subtle">{a.Q_versionNeed}</p> : null}
    </>
  );
  return (
    <section id="similar" className="rb-similar" aria-labelledby="rb-sim-title" data-figma="similar-projects">
      <div className="rb-similar-head">
        <h2 id="rb-sim-title" className="rb-rec-head krds-text-body-small-bold">{res && !fallback && items.length ? <SparkMark /> : null}{res ? a.Q_simTitle(items.length) : a.A_similar}</h2>
        {res && items.length ? <button type="button" className="krds-btn text small" onClick={toAssistant}>{a.A_openSimilar}</button> : null}
      </div>
      {body}
      <p className="krds-text-body-xsmall rb-subtle">{a.Q_selfExcluded}</p>
    </section>
  );
}
