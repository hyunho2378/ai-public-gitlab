// Figma: Assistant/Reading line
// UX/23 3-10-4: 검색 함수 응답에 해석 칸(reading: { field, keywords })이 있을 때만 표시(부모 결정). 없으면 조건 글자(분야 전체 또는 고른 분야)
// 고치기: 분야 메뉴와 핵심어 지우기, 다시 찾기와 취소
import { useState } from 'react';
import { a } from '../../copy/ai';
import { Menu } from '../Navigation/Menu';
import { IconButton } from '../Action/IconButton';

export function ReadingLine({ reading, fields, fieldOptions = [], fallback, onRerun }) {
  const [edit, setEdit] = useState(false);
  const [field, setField] = useState(reading?.field || '');
  const [kws, setKws] = useState(reading?.keywords || []);
  if (!reading) {
    return <p className="rb-ai-cond krds-text-body-xsmall" data-figma="Assistant/Reading line" data-source="None">{fields?.length ? fields.join(', ') : a.A_fieldAllShort}</p>;
  }
  if (!edit) {
    return (
      <p className="rb-ai-read krds-text-body-xsmall" data-figma="Assistant/Reading line" data-source={fallback ? 'Fallback' : 'Ai'} data-state="View">
        <b>{fallback ? a.A_readFallback : a.A_read}</b>
        {reading.field ? <span className="rb-fieldtag">{reading.field}</span> : null}
        {(reading.keywords || []).slice(0, 3).map((k) => <span key={k} className="rb-ai-kw">{k}</span>)}
        {!fallback ? <button type="button" className="krds-btn text small" onClick={() => setEdit(true)}>{a.A_edit}</button> : null}
      </p>
    );
  }
  return (
    <div className="rb-ai-read is-edit krds-text-body-xsmall" data-figma="Assistant/Reading line" data-state="Edit">
      <Menu label={a.X_field} align="left" btnClass="krds-btn small tertiary" button={<span>{field || a.A_fieldAllShort}</span>}>
        {(close) => (
          <ul className="drop-list" role="menu">
            {['', ...fieldOptions].map((f) => (
              <li key={f || 'all'}><button type="button" role="menuitemradio" aria-checked={f === field} className="item-link" onClick={() => { setField(f); close(); }}>{f || a.A_fieldAllShort}</button></li>
            ))}
          </ul>
        )}
      </Menu>
      {kws.map((k) => (
        <span key={k} className="rb-ai-kw">{k}<IconButton icon="close" label={a.A_removeKw(k)} onClick={() => setKws(kws.filter((x) => x !== k))} /></span>
      ))}
      <button type="button" className="krds-btn small primary" onClick={() => { setEdit(false); onRerun({ field, keywords: kws }); }}>{a.A_rerun}</button>
      <button type="button" className="krds-btn text small" onClick={() => setEdit(false)}>{a.A_cancel}</button>
    </div>
  );
}
