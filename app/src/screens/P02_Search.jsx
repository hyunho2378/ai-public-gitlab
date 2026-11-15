// G-02 업무 검색(기획안 A-01) = /search. UX/23 3-1(F1 업무로 찾기), 3-4(F4 만들려는 기능 설명하기).
// 두 탭은 화면 안 상태(주소 mode=task|similar). 검색어 q, 분야 field(확정 분야 쉼표 묶음)도 주소에 둬 뒤로 가기와 새로고침에 복원.
// 공통 검색 api/search.js search() 하나만 부른다(업무 도우미와 같은 함수, 같은 순서). 상태 7종 + 대체 후 결과 없음 + 버전 불일치 + 분야 조건 전환.
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { a } from '../copy/ai';
import { search, cancelPending, validateQuery, createLatestGuard } from '../api/search';
import GitlabSearch from './P02_SearchGitlab';
import { localSearch } from '../api/searchCore';
import { loadCards } from '../api/cards';
import { useData } from '../api/useData';
import { Page } from '../components/Layout/Page';
import { Notice, Skeleton, EmptyState } from '../components/Feedback/Status';
import { Icon } from '../components/Code/Icon';
import { RecommendRow, RecGroupHead } from '../components/Layout/RecommendRow';
import { DataBasis } from '../components/Layout/DataBasis';
import { SparkMark } from '../components/Assistant/SparkMark';
import { useAssistant } from '../components/Assistant/AssistantContext';
import '../components/Layout/recommend.css';
import './search3.css';

const guard = createLatestGuard();
const MODES = ['task', 'similar'];
const ERR = { empty: () => a.Q_errEmpty, short: () => a.Q_errShort, long: (n) => a.Q_errLong(n) };
const UNSURE = ['check', 'unclassified'];

/** 주제(topic) 검색은 기존 공공 깃랩 프로젝트 검색 화면 그대로 */
export default function SearchRoute() {
  const [params] = useSearchParams();
  return params.get('topic') ? <GitlabSearch /> : <Search />;
}

function Search() {
  const [params, setParams] = useSearchParams();
  const mode = MODES.includes(params.get('mode')) ? params.get('mode') : 'task';
  const q = params.get('q') || params.get('search') || '';
  const rawFields = (params.get('field') || '').split(',').map((x) => x.trim()).filter(Boolean);
  const fieldReset = rawFields.some((f) => UNSURE.includes(f));
  const fields = rawFields.filter((f) => !UNSURE.includes(f));
  const fieldKey = fields.join(',');
  const store = useData(loadCards, []).data;
  const confirmed = useMemo(() => (store ? store.fields().map((f) => f.name) : []), [store]);
  const [text, setText] = useState(q);
  const [error, setError] = useState(null);
  const [res, setRes] = useState(null);
  const [busy, setBusy] = useState(false);
  const [showSkel, setShowSkel] = useState(false);
  const [picked, setPicked] = useState(fields);
  const [showScopes, setShowScopes] = useState(false);
  const [nonce, setNonce] = useState(0);
  const input = useRef(null);
  const ai = useAssistant();
  useEffect(() => setText(q), [q]);
  useEffect(() => setPicked(fields), [fieldKey]); // eslint-disable-line react-hooks/exhaustive-deps

  // 주소 값(q, mode, field)이 바뀌면 검색. 처리 중 새 검색이면 이전 결과 버림(createLatestGuard)
  useEffect(() => {
    if (!q) { setRes(null); setBusy(false); return undefined; }
    let live = true;
    setBusy(true);
    const skel = setTimeout(() => live && setShowSkel(true), 160);
    search({ query: q, mode, fields }, { guard }).then((r) => {
      if (!live || r.stale) return;
      setRes({ ...r, q, mode, fields });
      setBusy(false);
      setShowSkel(false);
    });
    return () => { live = false; clearTimeout(skel); guard.cancel(); };
  }, [q, mode, fieldKey, nonce]); // eslint-disable-line react-hooks/exhaustive-deps

  const set = (patch) => {
    const next = new URLSearchParams(params);
    Object.entries(patch).forEach(([k, v]) => (v ? next.set(k, v) : next.delete(k)));
    next.delete('search');
    setParams(next);
  };
  const submit = (value = text) => {
    const v = validateQuery(value);
    if (!v.ok) { setError({ reason: v.reason, length: v.length }); input.current?.focus(); return; }
    setError(null);
    if (v.query === q) setNonce((n) => n + 1);
    set({ q: v.query, mode, field: fieldKey });
  };
  const pickTab = (m) => { cancelPending(); setError(null); set({ mode: m, q: '' }); };
  const onTabKey = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const m = mode === 'task' ? 'similar' : 'task';
    pickTab(m);
    setTimeout(() => document.getElementById(`rb-q-tab-${m}`)?.focus(), 0);
  };
  const similar = mode === 'similar';
  const meta = store?.meta || {};
  const shown = res && res.q === q && res.mode === mode ? res : null;
  const rows = (items, kind, fallback) => (
    <ul className="rb-rec-list">
      {items.map((it) => ({ it, card: store?.get(it.id) })).filter((x) => x.card).map(({ it, card }) => (
        <RecommendRow key={card.id} item={it} card={card} kind={kind} fallback={fallback} />
      ))}
    </ul>
  );
  const status = shown?.status;
  const aiItems = status === 'ok' ? shown.items.slice(0, 5) : [];
  const general = useMemo(() => {
    if (!shown || !store) return [];
    if (shown.fallback) return shown.items.slice(0, 10);
    if (status !== 'ok') return [];
    return localSearch(store.raw, q, { fields, excludeIds: aiItems.map((x) => x.id), limit: 10 });
  }, [shown, store]); // eslint-disable-line react-hooks/exhaustive-deps
  const toAssistant = () => ai.ask({ query: q, mode, fields, label: q, reuse: shown });
  const examples = similar ? a.Q_exBuild : a.Q_exTask;

  return (
    <Page id="G-02" title={q ? `${a.Q_title}: ${q}` : a.Q_title} state={busy ? 'Loading' : status || 'Initial'}>
      <h1 className="krds-text-heading-small rb-q-title" data-figma="page-head">{a.Q_title}</h1>
      <div className="rb-q-tabs" role="tablist" aria-label={a.Q_tabs} data-figma="Navigation/Tabs">
        {MODES.map((m) => (
          <button key={m} id={`rb-q-tab-${m}`} type="button" role="tab" aria-selected={mode === m} tabIndex={mode === m ? 0 : -1} aria-controls="rb-q-panel" className={'rb-q-tab' + (mode === m ? ' is-on' : '')} data-figma="Navigation/Tab item" onClick={() => pickTab(m)} onKeyDown={onTabKey}>
            {m === 'task' ? a.Q_tabTask : a.Q_tabBuild}
          </button>
        ))}
      </div>
      <div id="rb-q-panel" role="tabpanel" aria-labelledby={`rb-q-tab-${mode}`} className="rb-q-panel">
        <p className="krds-text-body-xsmall rb-subtle rb-q-purpose">{similar ? a.Q_purposeBuild : a.Q_purposeTask}</p>
        <form className={'rb-q-form' + (error ? ' is-error' : '')} role="search" data-figma="Input/Task search" onSubmit={(e) => { e.preventDefault(); submit(); }}>
          <label className="sr-only" htmlFor="rb-q-input">{similar ? a.Q_phBuild : a.Q_phTask}</label>
          <div className="rb-q-row">
            <input
              id="rb-q-input"
              ref={input}
              className="krds-input small"
              type="search"
              value={text}
              placeholder={similar ? a.Q_phBuild : a.Q_phTask}
              aria-invalid={!!error}
              aria-describedby="rb-q-rule"
              onChange={(e) => { setText(e.target.value); if (error) setError(null); }}
              onKeyDown={(e) => { if (e.key === 'Escape' && busy) { cancelPending(); guard.cancel(); setBusy(false); setShowSkel(false); } if (e.key === 'Enter' && e.nativeEvent.isComposing) e.preventDefault(); }}
            />
            <button type="submit" className="krds-btn small primary" disabled={busy}>{busy ? a.Q_busy : a.Q_submit}</button>
          </div>
          <p id="rb-q-rule" className={'rb-q-rule krds-text-body-xsmall' + (error ? ' is-error' : '')} role={error ? 'alert' : undefined}>
            {error ? ERR[error.reason](error.length) : a.Q_rule}
            {[...text].length > 450 ? <span>{a.Q_count([...text].length)}</span> : null}
          </p>
        </form>
        <p className="rb-q-examples krds-text-body-xsmall">
          <span className="rb-subtle">{a.Q_exLabel}</span>
          {examples.map((x) => <button key={x} type="button" className="krds-btn text small" onClick={() => { setText(x); submit(x); }}>{x}</button>)}
        </p>
        <div className="rb-s-filterbar"><button type="button" className="krds-btn small tertiary rb-s-filterbtn" aria-expanded={showScopes} aria-controls="rb-q-side" onClick={() => setShowScopes(!showScopes)}><Icon name="ext/filter" /><span>{a.Q_filter}</span></button></div>
        <div className="rb-s-body rb-q-body">
          <aside id="rb-q-side" className={'rb-s-side' + (showScopes ? ' is-open' : '')} data-figma="filters" aria-label={a.Q_scope}>
            <fieldset className="rb-q-fields">
              <legend className="krds-text-body-xsmall-bold">{a.Q_scope}</legend>
              {confirmed.map((f, i) => (
                <div key={f} className="krds-form-check">
                  <input id={`rb-qf-${i}`} type="checkbox" checked={picked.includes(f)} onChange={(e) => setPicked(e.target.checked ? [...picked, f] : picked.filter((x) => x !== f))} />
                  <label htmlFor={`rb-qf-${i}`}>{f}</label>
                </div>
              ))}
            </fieldset>
            <button type="button" className="krds-btn small tertiary" onClick={() => set({ field: picked.join(','), q: q || '' })}>{a.Q_apply}</button>
          </aside>
          <section className="rb-q-results" data-figma="results" aria-live="polite" aria-busy={busy}>
            {q ? (
              <div className="rb-q-cond">
                <DataBasis as="div">
                  {a.Q_condQuery} {q}, {a.Q_condField} {fields.length ? fields.join(', ') : a.Q_condFieldAll}, {a.Q_condBasis(meta.fetchedDate, meta.count)}
                </DataBasis>
                <button type="button" className="krds-btn text small" onClick={() => { setText(''); setPicked([]); set({ q: '', field: '' }); input.current?.focus(); }}>{a.Q_reset}</button>
                {shown && !busy && ['ok', 'fallback', 'version-mismatch'].includes(status) ? <button type="button" className="krds-btn text small rb-q-toai" onClick={toAssistant}>{a.A_openSimilar}</button> : null}
              </div>
            ) : null}
            {fieldReset && q ? <Notice>{a.Q_fieldReset}</Notice> : null}
            {!q ? <p className="krds-text-body-small rb-subtle">{similar ? a.Q_purposeBuild : a.Q_purposeTask}</p> : null}
            {busy && showSkel ? (
              <div className="rb-q-busy" role="status">
                <RecGroupHead spark={<SparkMark pulse />}>{a.A_thinking}</RecGroupHead>
                <div className="rb-skel-group"><Skeleton widths={['100%', '84%', '72%']} /></div>
                <div className="rb-skel-group"><Skeleton widths={['100%', '84%', '72%']} /></div>
              </div>
            ) : null}
            {!busy && shown ? (
              <>
                {status === 'fallback' || status === 'fallback-empty' ? (
                  <Notice action={<button type="button" className="krds-btn text small" onClick={() => setNonce((n) => n + 1)}>{a.Q_retryAi}</button>}>{similar ? a.Q_fbBuild : a.Q_fbTask}</Notice>
                ) : null}
                {status === 'version-mismatch' ? <Notice>{a.Q_versionMismatch}</Notice> : null}
                {status === 'ok' ? (
                  <section className="rb-q-group" aria-labelledby="rb-q-ai" data-figma="ai-group">
                    <RecGroupHead id="rb-q-ai" spark={<SparkMark />}>{similar ? a.Q_simTitle(aiItems.length) : a.Q_recTitle(aiItems.length)}</RecGroupHead>
                    {rows(aiItems, similar ? 'Similar' : 'Recommend', false)}
                  </section>
                ) : null}
                {status === 'ok' && general.length ? <hr className="rb-q-sep" /> : null}
                {['ok', 'fallback', 'version-mismatch'].includes(status) && general.length ? (
                  <section className="rb-q-group" aria-labelledby="rb-q-kw" data-figma="keyword-group">
                    <RecGroupHead id="rb-q-kw">{a.Q_kwTitle(general.length)}</RecGroupHead>
                    {rows(general, similar && shown.fallback ? 'Similar' : 'Explore', true)}
                  </section>
                ) : null}
                {status === 'version-mismatch' ? <p className="krds-text-body-xsmall rb-subtle">{a.Q_versionNeed}</p> : null}
                {status === 'empty' ? (
                  <EmptyState
                    title={similar ? a.Q_simNone : a.Q_none}
                    actions={<>
                      {fields.length ? <button type="button" className="krds-btn small tertiary" onClick={() => { setPicked([]); set({ field: '' }); }}>{a.Q_allFields}</button> : null}
                      <Link className="krds-btn small tertiary" to={`/requests?title=${encodeURIComponent(q)}`}>{a.Q_request}</Link>
                      <Link className="krds-btn text small" to="/">{a.Q_toList}</Link>
                    </>}
                  >{a.Q_noneBody}</EmptyState>
                ) : null}
                {status === 'fallback-empty' ? (
                  <EmptyState title={a.Q_fbNone} actions={<><button type="button" className="krds-btn small tertiary" onClick={() => setNonce((n) => n + 1)}>{a.Q_retry}</button><Link className="krds-btn text small" to="/">{a.Q_toList}</Link></>}>{a.Q_noneBody}</EmptyState>
                ) : null}
                {status === 'failed' ? (
                  <div role="alert" className="rb-status" data-figma="Feedback/Status block" data-state="Error">
                    <h2 className="krds-text-body-small-bold">{a.Q_fail}</h2>
                    <p className="rb-subtle">{a.Q_failBody}</p>
                    <div className="rb-actions">
                      <button type="button" className="krds-btn small tertiary" onClick={() => setNonce((n) => n + 1)}>{a.Q_retry}</button>
                      <Link className="krds-btn text small" to="/">{a.Q_toList}</Link>
                    </div>
                  </div>
                ) : null}
              </>
            ) : null}
          </section>
        </div>
      </div>
    </Page>
  );
}

