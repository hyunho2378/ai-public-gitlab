// 작업 항목 댓글 작성란(공공 깃랩 작업 항목 아래 '의견' 편집기). 로그인 상태에서만 그린다.
// 입력값을 우리가 보내지 않는다(D-12 로그인과 같은 원칙): '의견 보내기'와 '작업 항목 닫기'는 공공 깃랩 원본 작업 항목 화면을 새 창으로 연다.
// Figma: comment-editor
import { useState } from 'react';
import { t } from '../../copy/ko';
import { newWindow } from '../../components/Layout/newWindow';
import { Readme } from '../../components/Help/Readme';
import '../../components/Write/write.css';

export function CommentBox({ webUrl }) {
  const [view, setView] = useState('write');
  const [text, setText] = useState('');
  return (
    <section className="rb-editor rb-comment" data-figma="comment-editor" aria-label={t.Cmt_label}>
      <div className="rb-editor-tabs" role="tablist" aria-label={t.Cmt_label}>
        <button type="button" role="tab" aria-selected={view === 'write'} className={'rb-code-view' + (view === 'write' ? ' active' : '')} onClick={() => setView('write')}>{t.Cmt_write}</button>
        <button type="button" role="tab" aria-selected={view === 'preview'} className={'rb-code-view' + (view === 'preview' ? ' active' : '')} onClick={() => setView('preview')}>{t.P16_viewPreview}</button>
      </div>
      {view === 'write'
        ? <textarea className="krds-input rb-comment-area" aria-label={t.Cmt_label} value={text} onChange={(e) => setText(e.target.value)} />
        : <div className="rb-comment-area">{text ? <Readme source={text} /> : null}</div>}
      <p className="krds-text-body-xsmall rb-subtle">{t.Cmt_hint}</p>
      <div className="rb-actions">
        <a className="krds-btn small tertiary" href={webUrl} {...newWindow(t.Cmt_close)}>{t.Cmt_close}</a>
        <a className="krds-btn small primary" href={webUrl} {...newWindow(t.P08_14)}>{t.P08_14}</a>
      </div>
    </section>
  );
}
