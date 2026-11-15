// Figma: Layout/Project info (data-figma), 기존 화면 상자는 data-figma-key
// D-21 6장 프로젝트 홈 오른쪽 '프로젝트 정보' 열(공공 깃랩 02 그대로, 상시).
// 설명(4줄 더보기), 주제, 언어 막대, 개수 목록(아이콘 + 굵은 숫자 + 이름), README·라이선스·변경 로그, 생성 날짜.
// 덧붙임은 맨 아래 '사용 전 확인' 묶음 하나(라벨/값 세로 쌍 4개 + 더보기, UX/14 3-2).
import { Link } from 'react-router-dom';
import { t } from '../../copy/ko';
import { u } from '../../copy/ui';
import { useData } from '../../api/useData';
import { Icon } from '../Code/Icon';
import { cleanDescription } from './description';
import { decisionRows, loadDecision } from './DecisionPanel';
import { FoldText, InfoPair } from './FoldText';
import { cardValue, loadCards } from '../../api/cards';
import { newWindow } from './newWindow';
import { a } from '../../copy/ai';
import { IntroItem } from './IntroItem';

const LANG_KEYS = ['typescript', 'javascript', 'python', 'java', 'shell'];
const langVar = (name) => {
  const k = String(name).toLowerCase();
  return `var(--language-${LANG_KEYS.includes(k) ? k : 'other'})`;
};

function LangBar({ languages }) {
  const list = Object.entries(languages || {}).sort((a, b) => b[1] - a[1]);
  if (!list.length) return null;
  const label = list.map(([n, v]) => `${n} ${v.toFixed(1)}%`).join(', ');
  return (
    <div className="rb-lang">
      <p className="sr-only">{u.I_languages}: {label}</p>
      <div className="rb-lang-bar" data-figma="language-bar" aria-hidden="true" title={label}>
        {list.map(([n, v]) => <span key={n} style={{ width: `${v}%`, background: langVar(n) }} />)}
      </div>
      <ul className="rb-lang-list" aria-hidden="true">
        {list.slice(0, 4).map(([n, v]) => (
          <li key={n}><i style={{ background: langVar(n) }} />{n} <span className="rb-subtle">{v.toFixed(1)}%</span></li>
        ))}
      </ul>
    </div>
  );
}

const ymd = (iso) => { const d = new Date(iso); return u.I_ymd(d.getFullYear(), String(d.getMonth() + 1).padStart(2, '0'), String(d.getDate()).padStart(2, '0')); };
const fmt = (n) => (n == null ? null : Number(n).toLocaleString('ko-KR'));

export function ProjectInfo({ id, project, readme, totals, stats, languages, root, hideCheck = false }) {
  // A-02는 실제 점검 요약(사용 전 확인)을 숨긴다(부모 결정, F9 시연 원칙). 점검 요청도 하지 않음
  const d = useData(() => (hideCheck ? Promise.resolve(null) : loadDecision(id)), [id, hideCheck]);
  const p = `/projects/${id}`;
  const intro = cleanDescription(project.description);
  const topics = project.topics || [];
  // 공공 깃랩 02: 커밋, 브랜치, 태그는 늘 보인다(모르는 수는 '-'), 릴리스는 있을 때만
  const counts = [
    ['ext/commit', stats?.commits ? fmt(stats.commits) + (stats?.more ? '+' : '') : project.commit_count != null ? fmt(project.commit_count) : '-', u.I_commits, `${p}/changes`, true],
    ['ext/branch', totals?.branches != null ? fmt(totals.branches) : project.branch_count != null ? fmt(project.branch_count) : '-', u.I_branches, `${p}/branches`, true],
    ['ext/tag', totals?.tags != null ? fmt(totals.tags) : project.tag_count != null ? fmt(project.tag_count) : '-', u.I_tags, `${p}/tags`, true],
    ['ext/rocket-launch', fmt(totals?.releases), u.I_releases, `${p}/releases`, !!totals?.releases],
  ].filter((c) => c[4]);
  const file = (re) => (root || []).find((f) => f.type === 'blob' && re.test(f.name));
  const lic = file(/^(LICENSE|LICENCE|COPYING)(\.|$)/i);
  const log = file(/^CHANGELOG/i);
  const docs = [
    readme ? [u.I_readme, '#readme', true, 'ext/file-text'] : null,
    lic || project.license ? [project.license?.name || u.I_license, lic ? `${p}/code/${lic.path}` : project.license_url, !!lic, 'ext/scale'] : null,
    log ? [u.I_changelog, `${p}/code/${log.path}`, true, 'ext/file-text'] : null,
  ].filter(Boolean);
  const rows = d.data ? decisionRows(id, readme, d.data).slice(0, 4) : [];
  const cs = useData(loadCards, []);
  const card0 = cs.data ? cs.data.get(id) : null;
  // 네 칸이 모두 비면 카드 대신 사용 전 확인(빈 칸만 늘어놓지 않는다)
  const card = card0 || null;
  const field = card ? [].concat(cardValue(card.fields) ?? [])[0] : null;
  return (
    <aside className="rb-repo-info" aria-labelledby="rb-info-title" data-figma="Layout/Project info" data-figma-key="project-info">
      <h2 id="rb-info-title" className="krds-text-body-small-bold">{u.G_projectInfo}</h2>
      {intro ? <FoldText lines={4} className="rb-info-intro">{intro}</FoldText> : null}
      {topics.length || field ? (
        <div className="krds-tag-wrap small rb-info-topics">
          {topics.map((x) => <span key={x} className="krds-btn-tag">{x}</span>)}
          {/* 덧붙임(UX/14 2): 주제 옆 분야 하나 */}
          {field ? <Link className="krds-btn-tag" to={`/?field=${encodeURIComponent(field)}`} title={u.C_field} data-figma="extra-field">{u.C_field}: {field}</Link> : null}
        </div>
      ) : null}
      <LangBar languages={languages} />
      {counts.length ? (
        <ul className="rb-info-list rb-info-sep">
          {counts.map(([icon, n, label, to]) => (
            <li key={label}><Link to={to}><Icon name={icon} /><b>{n}</b> {label}</Link></li>
          ))}
        </ul>
      ) : null}
      {docs.length ? (
        <ul className="rb-info-list rb-info-sep">
          {docs.map(([label, to, inside, icon]) => (
            <li key={label}>
              {inside && to.startsWith('#') ? <a href={to}><Icon name={icon} />{label}</a> : inside ? <Link to={to}><Icon name={icon} />{label}</Link> : <a href={to}><Icon name={icon} />{label}</a>}
            </li>
          ))}
        </ul>
      ) : null}
      {project.created_at ? (
        <div className="rb-info-sep">
          <InfoPair label={u.I_created}>{ymd(project.created_at)}</InfoPair>
        </div>
      ) : null}
      {/* 덧붙임 자리(UX/14 1, 5, 6, 8): 소개 카드가 있으면 카드 4줄, 없으면 사용 전 확인 4줄. 한 묶음, 4줄 + 더보기 */}
      {card ? <IntroCard id={id} card={card} /> : hideCheck ? null : (
        <section className="rb-info-sep rb-info-extra" data-figma="intro-card" aria-labelledby="rb-info-extra">
          <h3 id="rb-info-extra" className="krds-text-body-small-bold">{u.I_extra}</h3>
          {d.data ? (
            <dl className="rb-dock-list">
              {rows.map(([label, value]) => (
                <InfoPair key={label} label={label}><FoldText lines={1}>{value}</FoldText></InfoPair>
              ))}
            </dl>
          ) : <p className="krds-text-body-xsmall rb-subtle" role="status">{d.state === 'Error' ? d.error : t.P10_1}</p>}
          <p className="rb-dock-more"><Link className="krds-link" to={`${p}/use`}>{u.I_more}</Link></p>
        </section>
      )}
    </aside>
  );
}

/** UX/23 3-2-2 정보 열: Layout/Intro item Variant=Compact 4개(하는 일, 실행 형태, 이용 조건, 한계), 라벨 옆 근거 배지, 맨 아래 소개 카드 전체 */
function IntroCard({ id, card }) {
  const readme = card.readme?.v === 'present' || card.readme?.v === 'template';
  return (
    <section className="rb-info-sep rb-info-extra" data-figma="intro-card" aria-labelledby="rb-info-card">
      <h3 id="rb-info-card" className="krds-text-body-small-bold">{a.C_cardTitle}</h3>
      <dl className="rb-intro-list">
        <IntroItem variant="Compact" label={a.C_oneLine} item={card.oneLine} id={id} readme={readme} />
        <IntroItem variant="Compact" label={a.C_form} item={card.form} id={id} readme={readme} />
        <IntroItem variant="Compact" label={a.C_license} item={card.license} id={id} readme={readme} />
        <IntroItem variant="Compact" label={a.C_limits} item={card.limits} id={id} readme={readme} />
      </dl>
      <p className="rb-dock-more"><Link className="krds-link" to={`/projects/${id}/about#intro-card`}>{a.C_cardAll}</Link></p>
    </section>
  );
}
