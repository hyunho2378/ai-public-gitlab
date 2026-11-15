// A-03 공개 준비 점검 예시(F9, UX/23 3-9). 고정 예시 파일(app/public/demo/publish-check-example.json)만 표시. 실제 점검 계산, 업로드, 입력 칸, 진행률 없음.
// 판정 3종(충족, 보완 필요, 확인 불가)과 이유, 보완 안내, 예시 근거. 불러오기 실패는 전체 통과로 바꾸지 않는다
import { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { a } from '../copy/ai';
import { ProjectFrame, useProject } from '../components/Layout/ProjectFrame';
import { Notice } from '../components/Feedback/Status';
import { Icon } from '../components/Code/Icon';
import { toast } from '../components/Feedback/Toast';
import './parts/a02.css';
import './parts/a03.css';

const BASE = import.meta.env.BASE_URL || '/';
const VERDICT = {
  ok: { icon: 'sys_success_mark', label: a.D9_ok, cls: 'is-ok' },
  fix: { icon: 'sys_danger_mark', label: a.D9_fix, cls: 'is-fix' },
  unknown: { icon: 'ext/info', label: a.D9_unknown, cls: 'is-unknown' },
};
const GROUP = { doc: a.D9_groupDoc, review: a.D9_groupReview };

export default function PublishCheck() {
  const frame = useProject();
  const loc = useLocation();
  const navigate = useNavigate();
  const fromId = loc.state?.fromId ?? null;
  const [st, setSt] = useState({ s: 'initial' });
  const [openIds, setOpenIds] = useState(() => new Set());
  const openBtn = useRef(null);
  const load = () => {
    setSt({ s: 'loading' });
    fetch(`${BASE}demo/publish-check-example.json`, { cache: 'no-cache' })
      .then((r) => { if (!r.ok) throw new Error(String(r.status)); return r.json(); })
      .then((d) => { if (!Array.isArray(d.groups)) throw new Error('shape'); setSt({ s: 'open', d }); setOpenIds(new Set([d.groups[0]?.items[2]?.id].filter(Boolean))); })
      .catch(() => setSt({ s: 'fail' }));
  };
  const reset = () => { setSt({ s: 'initial' }); setOpenIds(new Set()); setTimeout(() => openBtn.current?.focus(), 0); };
  const toggle = (id) => setOpenIds((s) => { const n = new Set(s); if (n.has(id)) n.delete(id); else n.add(id); return n; });
  const toDraft = () => { if (fromId) navigate(`/projects/${fromId}/about#readme-demo`); else { toast(a.D9_pickProject); navigate('/'); } };
  if (!frame.data) return <ProjectFrame screenId="A-03" data={frame} />;
  const name = frame.data.project.name;
  const total = st.d ? st.d.groups.reduce((n, g) => n + g.items.length, 0) : 0;
  return (
    <ProjectFrame screenId="A-03" tab="" tabLabel={a.D9_title} crumbs={[[a.D9_title, null]]} data={frame} state={st.s}>
      <div className="rb-one-col rb-a03" data-figma="publish-check-demo">
        <Notice>{a.D9_scope}</Notice>
        <p className="krds-text-body-xsmall rb-demo-target"><span>{a.D9_target}</span><span>{fromId ? a.D9_current(name) : a.D9_noCurrent}</span></p>
        {st.s === 'initial' || st.s === 'loading' ? (
          <p><button type="button" ref={openBtn} className="krds-btn small primary" onClick={load} disabled={st.s === 'loading'}>{a.D9_open}</button></p>
        ) : null}
        {st.s === 'fail' ? (
          <div role="alert" className="rb-status" data-figma="Feedback/Status block" data-state="Error">
            <h2 className="krds-text-body-small-bold">{a.D9_loadFail}</h2>
            <div className="rb-actions">
              <button type="button" className="krds-btn small tertiary" onClick={load}>{a.Q_retry}</button>
              {fromId ? <Link className="krds-btn text small" to={`/projects/${fromId}/about`}>{a.D9_back}</Link> : null}
            </div>
          </div>
        ) : null}
        {st.s === 'open' ? (
          <section className="rb-pc-result" aria-live="polite">
            <p className="rb-pc-legend krds-text-body-xsmall">
              {Object.entries(VERDICT).map(([k, v]) => <span key={k} className={'rb-pc-verdict ' + v.cls}><Icon name={v.icon} />{v.label}<span className="rb-subtle">{k === 'ok' ? a.D9_legendOk : k === 'fix' ? a.D9_legendFix : a.D9_legendUnknown}</span></span>)}
            </p>
            <p className="krds-text-body-xsmall rb-subtle">{a.D9_count(total)}</p>
            {st.d.groups.map((g) => (
              <section key={g.key} className="rb-pc-group" aria-labelledby={`rb-pc-${g.key}`}>
                <h2 id={`rb-pc-${g.key}`} className="krds-text-body-small-bold">{GROUP[g.key] || g.key}</h2>
                <ul className="rb-pc-list">
                  {g.items.map((it) => {
                    const v = VERDICT[it.verdict] || VERDICT.unknown;
                    const on = openIds.has(it.id);
                    return (
                      <li key={it.id} className="rb-pc-item">
                        <button type="button" className="rb-pc-head" aria-expanded={on} aria-controls={`rb-pc-body-${it.id}`} onClick={() => toggle(it.id)}>
                          <span className="krds-text-body-small">{it.name}</span>
                          <span className={'rb-pc-verdict krds-text-body-xsmall ' + v.cls}><Icon name={v.icon} />{v.label}</span>
                          <Icon name="arrow-down" />
                        </button>
                        {on ? (
                          <dl id={`rb-pc-body-${it.id}`} className="rb-pc-body krds-text-body-xsmall">
                            <div><dt>{a.D9_check}</dt><dd>{it.check}</dd></div>
                            <div><dt>{a.D9_reason}</dt><dd>{it.reason}</dd></div>
                            <div><dt>{a.D9_fixGuide}</dt><dd>{it.fix}{it.draft ? <> <button type="button" className="krds-btn text small" onClick={toDraft}>{a.D9_draftLink}</button></> : null}</dd></div>
                            <div><dt>{a.D9_evidence}</dt><dd>{it.evidence} <span className="rb-subtle">{a.D_example}</span></dd></div>
                          </dl>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </section>
        ) : null}
        <p className="krds-text-body-xsmall rb-subtle">{a.D9_notApproval}</p>
        <p className="krds-text-body-xsmall rb-subtle">{a.D9_notSecurity}</p>
        <p className="rb-actions">
          {st.s === 'open' ? <button type="button" className="krds-btn text small" onClick={reset}>{a.D9_reset}</button> : null}
          {fromId ? <Link className="krds-btn small tertiary" to={`/projects/${fromId}/about`}>{a.D9_back}</Link> : null}
          <Link className="krds-btn text small" to="/">{a.Q_toList}</Link>
        </p>
      </div>
    </ProjectFrame>
  );
}
