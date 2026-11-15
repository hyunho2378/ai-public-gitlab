// Figma: Assistant/Composer
// UX/22 G3, UX/23 3-10-2: 입력칸(높이 56에서 최대 120), Enter 보내기(한글 조합 중 무시), Shift+Enter 줄바꿈, 모드 탭(업무로 찾기, 만들 기능), 기준 줄 2~500자 겸 오류 줄
// Context=Page(첫 화면 진입칸)는 모드 탭 없이 한 줄
import { useEffect, useRef, useState } from 'react';
import { a } from '../../copy/ai';
import { Icon } from '../Code/Icon';

const ERR = { empty: () => a.Q_errEmpty, short: () => a.Q_errShort, long: (n) => a.Q_errLong(n) };

export function Composer({ context = 'Panel', value, onChange, mode = 'task', onMode, onSubmit, busy = false, error = null, onClearError, inputRef, id = 'rb-ai-input' }) {
  const own = useRef(null);
  const ref = inputRef || own;
  const [composing, setComposing] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || context !== 'Panel') return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }, [value, context, ref]);
  const send = (e) => { e?.preventDefault(); if (!busy) onSubmit(value, mode); };
  const errId = `${id}-rule`;
  const len = [...String(value || '')].length;
  return (
    <form className={'rb-ai-composer is-' + context.toLowerCase() + (error ? ' is-error' : '')} data-figma="Assistant/Composer" data-context={context} onSubmit={send} role="search">
      {context === 'Panel' ? (
        <div className="rb-ai-tabs" role="tablist" aria-label={a.Q_tabs}>
          {[['task', a.Q_tabTask], ['similar', a.A_tabBuild]].map(([m, label]) => (
            <button key={m} type="button" role="tab" aria-selected={mode === m} className={'rb-ai-tab' + (mode === m ? ' is-on' : '')} onClick={() => onMode(m)}>{label}</button>
          ))}
        </div>
      ) : null}
      <div className="rb-ai-field">
        {context === 'Page' ? null : <label className="sr-only" htmlFor={id}>{a.A_input}</label>}
        <textarea
          id={id}
          ref={ref}
          rows={1}
          value={value}
          placeholder={mode === 'similar' ? a.Q_phBuild : a.Q_phTask}
          aria-label={context === 'Page' ? a.A_entry : undefined}
          aria-invalid={!!error}
          aria-describedby={errId}
          onChange={(e) => { onChange(e.target.value); if (error) onClearError?.(); }}
          onCompositionStart={() => setComposing(true)}
          onCompositionEnd={() => setComposing(false)}
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey && !composing && !e.nativeEvent.isComposing) send(e); }}
        />
        <button type="submit" className="rb-ai-send" aria-label={a.A_send} title={a.A_send} disabled={busy}>
          <Icon name={context === 'Page' ? 'search' : 'arrow-right'} />
        </button>
      </div>
      <p id={errId} className={'rb-ai-rule krds-text-body-xsmall' + (error ? ' is-error' : '')} role={error ? 'alert' : undefined}>
        {error ? ERR[error.reason]?.(error.length) : a.Q_rule}
        {len > 450 ? <span className="rb-ai-count">{a.Q_count(len)}</span> : null}
      </p>
    </form>
  );
}
