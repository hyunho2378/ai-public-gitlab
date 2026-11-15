// Figma: A-02 README 초안 예시 구역(F7, UX/23 3-7)
// 고정 예시 파일(app/public/demo/readme-draft-example.md)을 한 번 읽어 미리보기와 내려받기에 같은 글자를 쓴다. 생성, 저장, 서버 요청 없음
import { useEffect, useRef, useState } from 'react';
import { a } from '../../copy/ai';
import { Notice, Skeleton } from '../../components/Feedback/Status';
import { Readme } from '../../components/Help/Readme';
import { IconButton } from '../../components/Action/IconButton';
import { toast } from '../../components/Feedback/Toast';

const BASE = import.meta.env.BASE_URL || '/';
let cached = null;
export const loadDraft = () => (cached ??= fetch(`${BASE}demo/readme-draft-example.md`, { cache: 'no-cache' }).then((r) => { if (!r.ok) throw new Error(String(r.status)); return r.text(); }).catch((e) => { cached = null; throw e; }));

export function ReadmeDraftDemo({ name }) {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({ s: 'idle' });
  const opener = useRef(null);
  const head = useRef(null);
  const load = () => {
    setState({ s: 'loading' });
    loadDraft().then((text) => setState({ s: 'ready', text })).catch(() => setState({ s: 'fail' }));
  };
  useEffect(() => { if (open && state.s === 'idle') load(); }, [open]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { if (open) head.current?.focus(); }, [open]);
  const close = () => { setOpen(false); setTimeout(() => opener.current?.focus(), 0); };
  const download = () => {
    try {
      const blob = new Blob([state.text], { type: 'text/markdown;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = a.D7_file;
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      toast(a.D7_downloaded);
    } catch {
      toast(a.D7_downloadFail);
    }
  };
  return (
    <section id="readme-demo" className="rb-demo" aria-labelledby="rb-d7-title" data-figma="readme-draft-demo">
      <h3 id="rb-d7-title" className="krds-text-body-small-bold">{a.D7_title}</h3>
      <Notice>{a.D7_scope}</Notice>
      {!open ? (
        <p><button type="button" ref={opener} className="krds-btn small tertiary" onClick={() => setOpen(true)} aria-expanded="false" aria-controls="rb-d7-panel">{a.D7_open}</button></p>
      ) : (
        <div id="rb-d7-panel" className="rb-demo-panel" onKeyDown={(e) => { if (e.key === 'Escape') { e.preventDefault(); close(); } }}>
          <div className="rb-demo-head">
            <p ref={head} tabIndex={-1} className="rb-demo-headnote"><Notice>{a.D_notice}</Notice></p>
            <IconButton icon="close" label={a.D7_close} onClick={close} />
          </div>
          <p className="krds-text-body-xsmall rb-demo-target"><span>{a.D7_target}</span><span>{a.D7_current(name)}</span></p>
          {state.s === 'loading' || state.s === 'idle' ? <div className="rb-skel-group" role="status"><Skeleton /></div> : null}
          {state.s === 'fail' ? (
            <div role="alert" className="rb-status" data-state="Error">
              <h4 className="krds-text-body-small-bold">{a.D7_loadFail}</h4>
              <div className="rb-actions">
                <button type="button" className="krds-btn small tertiary" onClick={load}>{a.Q_retry}</button>
                <button type="button" className="krds-btn text small" onClick={close}>{a.D7_close}</button>
              </div>
            </div>
          ) : null}
          {state.s === 'ready' ? (
            <>
              <div className="rb-demo-preview" tabIndex={0} aria-label={a.D7_preview}><Readme source={state.text} /></div>
              <p className="rb-actions">
                <button type="button" className="krds-btn small primary" onClick={download}>{a.D7_download}</button>
                <button type="button" className="krds-btn text small" onClick={close}>{a.D7_close}</button>
              </p>
            </>
          ) : null}
        </div>
      )}
    </section>
  );
}
