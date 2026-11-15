// Figma: Code/Copy block
// UX/23 3-5-3: 읽기 전용 코드 글자 + 오른쪽 위 복사 단추. 성공이면 '복사됨' 2초, 실패면 글자 전체 선택과 직접 복사 안내
import { useRef, useState } from 'react';
import { a } from '../../copy/ai';
import { toast } from '../Feedback/Toast';
import '../Feedback/trust.css';

export function CopyBlock({ text, label, toastText, children }) {
  const [state, setState] = useState('idle');
  const pre = useRef(null);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setState('copied');
      if (toastText) toast(toastText);
      setTimeout(() => setState('idle'), 2000);
    } catch {
      setState('failed');
      const sel = window.getSelection();
      const r = document.createRange();
      r.selectNodeContents(pre.current);
      sel.removeAllRanges();
      sel.addRange(r);
    }
  };
  return (
    <div className="rb-copyblock" data-figma="Code/Copy block">
      <pre ref={pre} className="rb-copyblock-pre" tabIndex={0} aria-label={label}>{children || text}</pre>
      <button type="button" className="krds-btn small tertiary rb-copyblock-btn" onClick={copy} aria-label={label ? `${label} ${a.Copy}` : a.Copy}>{state === 'copied' ? a.Copied : a.Copy}</button>
      <span className="sr-only" role="status">{state === 'copied' ? a.Copied : ''}</span>
      {state === 'failed' ? <p className="krds-text-body-xsmall rb-subtle rb-copyblock-fail" role="alert">{a.Mcp_copyFail}</p> : null}
    </div>
  );
}
