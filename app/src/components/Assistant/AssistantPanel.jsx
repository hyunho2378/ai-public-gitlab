// Figma: Assistant/Panel
// UX/23 3-10-1: 768 이상 오른쪽 패널(비모달, 폭 400, 본문 위에 겹침, 본문 밀어내기 없음), 768 미만 바텀 시트(모달, 딤, 본문 inert, 초점 가두기)
// 머리 줄(Spark + 업무 도우미, 새 대화, 닫기), 자료 기준 줄, 대화 영역, 입력 묶음. 열림 200ms, 닫힘 120ms, 시트 280ms
import { useEffect, useRef, useState } from 'react';
import { a } from '../../copy/ai';
import { loadCards } from '../../api/cards';
import { useData } from '../../api/useData';
import { breakpoint, useMinWidth } from '../../app/prefs';
import { IconButton } from '../Action/IconButton';
import { DataBasis } from '../Layout/DataBasis';
import { useAssistant } from './AssistantContext';
import { Composer } from './Composer';
import { SparkMark } from './SparkMark';
import { SuggestionRow } from './SuggestionRow';
import { TurnQuestion } from './TurnQuestion';
import { TurnAnswer } from './TurnAnswer';
import './assistant.css';

const SUGGEST = [...a.Q_exTask.map((q) => [q, 'task']), ...a.Q_exBuild.map((q) => [q, 'similar'])];

export function AssistantPanel() {
  const ai = useAssistant();
  const desk = useMinWidth(breakpoint('--rb-bp-mobile'));
  const store = useData(loadCards, []).data;
  const [mounted, setMounted] = useState(ai.open);
  const [shown, setShown] = useState(false);
  const [text, setText] = useState('');
  const [mode, setMode] = useState('task');
  const [error, setError] = useState(null);
  const input = useRef(null);
  const box = useRef(null);
  const convo = useRef(null);
  const busy = ai.turns.some((t) => t.status === 'thinking');

  // 열고 닫기: 붙인 뒤 다음 그림에서 보이게(transform, opacity 전환), 닫힐 때는 120ms 뒤 떼어 냄
  useEffect(() => {
    if (ai.open) {
      setMounted(true);
      const r = requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)));
      return () => cancelAnimationFrame(r);
    }
    setShown(false);
    const ms = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue(desk ? '--rb-motion-fast' : '--rb-motion-base')) || 0;
    const t = setTimeout(() => setMounted(false), ms);
    return () => clearTimeout(t);
  }, [ai.open, desk]);
  useEffect(() => { if (shown && ai.open) input.current?.focus({ preventScroll: true }); }, [shown, ai.open]);
  // A-07 웹에서 같은 질문: 입력칸 채움
  useEffect(() => { if (ai.draft.nonce) { setText(ai.draft.text); setMode(ai.draft.mode); setError(null); } }, [ai.draft]);
  // 새 차례면 대화 영역 맨 아래로
  useEffect(() => { const c = convo.current; if (c) c.scrollTop = c.scrollHeight; }, [ai.turns.length, mounted]);
  // 360 시트: 본문 inert(모달)
  useEffect(() => {
    if (!mounted || desk) return undefined;
    const els = [...document.querySelectorAll('.rb-top, .rb-shell, .rb-skip')];
    els.forEach((el) => el.setAttribute('inert', ''));
    return () => els.forEach((el) => el.removeAttribute('inert'));
  }, [mounted, desk]);

  const submit = async (value, m) => {
    // 처리 중 같은 질문 재전송은 막는다(새 질문이면 이전 요청 취소 뒤 새 차례)
    const last = ai.turns[ai.turns.length - 1];
    if (busy && last && last.query === String(value).trim() && last.mode === m) return;
    const r = await ai.ask({ query: value, mode: m, fields: [] });
    if (r?.error) { setError({ reason: r.error, length: r.length }); input.current?.focus(); return; }
    setText('');
    setError(null);
  };
  const onKey = (e) => {
    if (e.key === 'Escape') {
      if (e.defaultPrevented) return;
      if (busy) { ai.cancel(); e.preventDefault(); return; }
      e.preventDefault();
      ai.closePanel();
      return;
    }
    // 360 시트: 초점 가두기
    if (e.key === 'Tab' && !desk) {
      const f = [...box.current.querySelectorAll('button:not([disabled]), a[href], textarea, [tabindex="0"]')];
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  };
  if (!mounted) return null;
  const meta = store?.meta || {};
  const onSimilar = (card) => ai.ask({ query: `${card.name} ${card.oneLine?.v || card.desc || ''}`.slice(0, 500), mode: 'similar', excludeIds: [card.id], label: a.A_similarQ(card.name) });
  const panel = (
    <div
      ref={box}
      id="rb-assistant"
      className={'rb-ai-panel' + (desk ? ' is-side' : ' is-sheet') + (shown ? ' is-shown' : '')}
      data-figma="Assistant/Panel"
      data-layout={desk ? 'Side' : 'Sheet'}
      data-state={ai.turns.length ? 'Conversation' : 'Empty'}
      role={desk ? 'complementary' : 'dialog'}
      aria-modal={desk ? undefined : 'true'}
      aria-label={a.A_name}
      onKeyDown={onKey}
    >
      <div className="rb-ai-head">
        <h2 className="rb-ai-title krds-text-body-small-bold"><SparkMark />{a.A_name}</h2>
        <IconButton icon="reset" label={a.A_new} onClick={() => { ai.reset(); setText(''); setError(null); input.current?.focus(); }} />
        <IconButton icon="close" label={a.A_close} onClick={ai.closePanel} />
      </div>
      <DataBasis className="rb-ai-basis">{a.A_basis(meta.fetchedDate, meta.count)}</DataBasis>
      <div className="rb-ai-convo" ref={convo} tabIndex={-1}>
        {!ai.turns.length ? (
          <div className="rb-ai-empty">
            <SparkMark size={24} />
            <p className="rb-ai-greet">{a.A_greet}</p>
            <ul className="rb-ai-suggests">
              {SUGGEST.map(([q, m]) => <SuggestionRow key={q} label={q} mode={m} onPick={(label, mm) => { setMode(mm); submit(label, mm); }} />)}
            </ul>
          </div>
        ) : (
          ai.turns.map((t) => (
            <div key={t.id} className="rb-ai-turn">
              <TurnQuestion text={t.q} mode={t.mode} />
              <TurnAnswer
                turn={t}
                store={store}
                onSimilar={onSimilar}
                onOpenRow={() => { if (!desk) ai.closePanel(); }}
                onRetry={(x) => ai.ask({ query: x.query, mode: x.mode, fields: x.fields, excludeIds: x.excludeIds, label: x.q })}
                onAllFields={(x) => ai.ask({ query: x.query, mode: x.mode, fields: [], excludeIds: x.excludeIds })}
                onRerun={(x, r) => ai.ask({ query: [x.query, ...(r.keywords || [])].join(' ').slice(0, 500), mode: x.mode, fields: r.field ? [r.field] : [], excludeIds: x.excludeIds, label: [...(r.keywords || []), r.field].filter(Boolean).join(', ') || x.q })}
              />
            </div>
          ))
        )}
      </div>
      <div className="rb-ai-foot">
        <Composer value={text} onChange={setText} mode={mode} onMode={(m) => { setMode(m); setError(null); }} onSubmit={submit} busy={busy} error={error} onClearError={() => setError(null)} inputRef={input} />
      </div>
    </div>
  );
  if (desk) return panel;
  return (
    <div className={'rb-ai-dim' + (shown ? ' is-shown' : '')} onMouseDown={(e) => { if (e.target === e.currentTarget) ai.closePanel(); }}>
      {panel}
    </div>
  );
}
