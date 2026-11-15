// Figma: A-02 써 봤어요 예시 구역(F8, UX/23 3-8)
// 사전 예시 2건(app/public/demo/reuse-examples.json) + 이번 기록(React 상태만). 저장, 전송, 현황판 반영 없음. 새로고침이나 다른 화면 이동이면 사라짐
// 프로젝트가 바뀌면 부모가 key로 새로 그려 다른 프로젝트 기록이 섞이지 않는다
import { useEffect, useRef, useState } from 'react';
import { a } from '../../copy/ai';
import { Notice } from '../../components/Feedback/Status';

const BASE = import.meta.env.BASE_URL || '/';
let cached = null;
const loadExamples = () => (cached ??= fetch(`${BASE}demo/reuse-examples.json`, { cache: 'no-cache' }).then((r) => { if (!r.ok) throw new Error(String(r.status)); return r.json(); }).catch((e) => { cached = null; throw e; }));
const lenOf = (s) => [...String(s || '').trim()].length;
let seq = 0;

function Form({ name, initial, onSubmit, onCancel, submitLabel }) {
  const [stage, setStage] = useState(initial?.stage ?? null);
  const [text, setText] = useState(initial?.text ?? '');
  const [err, setErr] = useState({});
  const sending = useRef(false);
  const first = useRef(null);
  const textRef = useRef(null);
  useEffect(() => { first.current?.focus(); }, []);
  const submit = (e) => {
    e.preventDefault();
    if (sending.current) return;
    const next = { stage: stage == null ? a.D8_errStage : null, text: lenOf(text) < 2 || lenOf(text) > 100 ? a.D8_errText : null };
    setErr(next);
    if (next.stage) { first.current?.focus(); return; }
    if (next.text) { textRef.current?.focus(); return; }
    sending.current = true;
    onSubmit({ stage, text: text.trim() });
  };
  return (
    <form className="rb-demo-panel rb-reuse-form" onSubmit={submit} noValidate>
      <p className="krds-text-body-xsmall-bold">{a.D8_target(name)}</p>
      <fieldset className="rb-reuse-stages" aria-describedby={err.stage ? 'rb-d8-err-stage' : undefined}>
        <legend className="krds-text-body-xsmall-bold">{a.D8_stage}</legend>
        {a.D8_stages.map((s, i) => (
          <div key={s} className="krds-form-check">
            <input ref={i === 0 ? first : undefined} id={`rb-d8-s${i}`} type="radio" name="rb-d8-stage" checked={stage === i} onChange={() => setStage(i)} />
            <label htmlFor={`rb-d8-s${i}`}>{s}</label>
          </div>
        ))}
        {err.stage ? <p id="rb-d8-err-stage" className="rb-q-rule is-error krds-text-body-xsmall" role="alert">{err.stage}</p> : null}
      </fieldset>
      <label className="krds-text-body-xsmall-bold" htmlFor="rb-d8-text">{a.D8_text} <span className="rb-subtle">{a.D8_textRule}</span></label>
      <textarea id="rb-d8-text" ref={textRef} className="krds-input rb-reuse-text" rows={2} maxLength={200} value={text} aria-invalid={!!err.text} aria-describedby="rb-d8-err-text" onChange={(e) => setText(e.target.value)} />
      <p id="rb-d8-err-text" className={'rb-q-rule krds-text-body-xsmall' + (err.text ? ' is-error' : '')} role={err.text ? 'alert' : undefined}>{err.text || a.D8_refresh}</p>
      <p className="rb-actions">
        <button type="submit" className="krds-btn small primary">{submitLabel}</button>
        <button type="button" className="krds-btn text small" onClick={onCancel}>{a.D8_cancel}</button>
      </p>
    </form>
  );
}

export function ReuseDemo({ name }) {
  const [ex, setEx] = useState({ s: 'loading', items: [] });
  const [mine, setMine] = useState([]);
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(null);
  const [live, setLive] = useState('');
  const addBtn = useRef(null);
  const load = () => { setEx({ s: 'loading', items: [] }); loadExamples().then((d) => setEx({ s: 'ready', items: d.items || [] })).catch(() => setEx({ s: 'fail', items: [] })); };
  useEffect(load, []);
  const focusRow = (id) => setTimeout(() => document.getElementById(`rb-d8-row-${id}`)?.focus(), 0);
  const add = (v) => { const id = `t${++seq}`; setMine((m) => [{ id, ...v }, ...m]); setAdding(false); setLive(a.D8_added); focusRow(id); };
  const save = (id, v) => { setMine((m) => m.map((r) => (r.id === id ? { ...r, ...v } : r))); setEditing(null); setLive(a.D8_edited); focusRow(id); };
  const remove = (id) => {
    const i = mine.findIndex((r) => r.id === id);
    const next = mine.filter((r) => r.id !== id);
    setMine(next);
    setLive(a.D8_deleted);
    setTimeout(() => (next[i] ? document.getElementById(`rb-d8-row-${next[i].id}`)?.focus() : addBtn.current?.focus()), 0);
  };
  const row = (r, temp) => (
    <li key={r.id} id={`rb-d8-row-${r.id}`} tabIndex={-1} className="rb-reuse-row">
      {editing === r.id ? (
        <Form name={name} initial={r} submitLabel={a.D8_save} onSubmit={(v) => save(r.id, v)} onCancel={() => { setEditing(null); focusRow(r.id); }} />
      ) : (
        <>
          <p className="krds-text-body-xsmall-bold">{a.D8_stages[r.stage]}</p>
          <p className="krds-text-body-small rb-reuse-said">{r.text}</p>
          <p className="krds-text-body-xsmall rb-reuse-kind">
            <span className="rb-subtle">{temp ? a.D8_temp : a.D8_sample}</span>
            {temp ? <><button type="button" className="krds-btn text small" onClick={() => setEditing(r.id)}>{a.D8_edit}</button><button type="button" className="krds-btn text small" onClick={() => remove(r.id)}>{a.D8_delete}</button></> : null}
          </p>
        </>
      )}
    </li>
  );
  return (
    <section id="reuse-demo" className="rb-demo" aria-labelledby="rb-d8-title" data-figma="reuse-demo">
      <h3 id="rb-d8-title" className="krds-text-body-small-bold">{a.D8_title}</h3>
      <Notice>{a.D8_scope}</Notice>
      <span className="sr-only" role="status" aria-live="polite">{live}</span>
      {ex.s === 'fail' ? (
        <div role="alert" className="rb-status" data-state="Error">
          <h4 className="krds-text-body-small-bold">{a.D8_loadFail}</h4>
          <div className="rb-actions"><button type="button" className="krds-btn small tertiary" onClick={load}>{a.Q_retry}</button></div>
        </div>
      ) : (
        <>
          <p className="krds-text-body-xsmall rb-subtle" data-figma="reuse-count">{a.D8_count(ex.items.length, mine.length)}</p>
          <ul className="rb-reuse-list">
            {mine.map((r) => row(r, true))}
            {ex.items.map((r) => row(r, false))}
          </ul>
          {adding ? (
            <Form name={name} submitLabel={a.D8_submit} onSubmit={add} onCancel={() => { setAdding(false); setTimeout(() => addBtn.current?.focus(), 0); }} />
          ) : (
            <p><button type="button" ref={addBtn} className="krds-btn small tertiary" onClick={() => setAdding(true)}>{a.D8_add}</button></p>
          )}
        </>
      )}
    </section>
  );
}
