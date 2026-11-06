// G-12 사용자 프로필(공공 GitLab 사용자 화면 그대로, UX/handson/gitlab/70_사용자프로필.png).
// 이름과 @아이디, '활동' 달력(최근 1년), 활동 목록, 오른쪽 '정보' 열. 탭: 개인 프로젝트, 별점 부여된 프로젝트.
// 자료: 공개 API(users?username, users/:id/events, projects, starred_projects). 사용자 상세와 팔로워는 비로그인 403이라 쓰지 않는다.
// 공개 이메일은 화면에 싣지 않는다(활동 공개 이메일 제외 규칙).
import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gitlab } from '../api/client';
import { useData } from '../api/useData';
import { Page } from '../components/Layout/Page';
import { Avatar } from '../components/Layout/Avatar';
import { ProjectRow } from '../components/Layout/ProjectRow';
import { Breadcrumb } from '../components/Navigation/Breadcrumb';
import { EmptyState, Status } from '../components/Feedback/Status';
import { ActivityCalendar, buildCalendar } from '../components/Layout/ActivityCalendar';
import { Icon } from '../components/Code/Icon';
import { newWindow } from '../components/Layout/newWindow';
import { pf, p1 } from '../copy/work';
import { ago } from './parts/glTime';
import './parts/glRepo.css';
import './parts/profile.css';

const NOT_CONTRIB = new Set(['imported', 'joined', 'left', 'expired']);
const MAX_PAGES = 12; // 100개씩 12쪽 = 최근 1,200건까지(달력 계산)
const TZ = 'Asia/Seoul';
const keyOf = (s) => new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(s));

async function loadUser(username) {
  const r = await gitlab.userByName(username);
  const user = Array.isArray(r.data) ? r.data[0] : null;
  if (!user) return null;
  const after = new Date(Date.now() - 366 * 86400000).toISOString().slice(0, 10);
  const events = [];
  let partial = false;
  for (let page = 1; page <= MAX_PAGES; page += 1) {
    const ev = await gitlab.userEvents(user.id, { page, after });
    const list = Array.isArray(ev.data) ? ev.data : [];
    events.push(...list);
    if (list.length < 100) break;
    if (page === MAX_PAGES) partial = true;
  }
  const counts = {};
  // 공공 GitLab 달력은 기여(푸시, 이슈, 머지 리퀘스트, 댓글)만 센다. 가져오기, 참여, 탈퇴, 만료는 빼야 calendar.json과 맞는다
  // 2026. 11. 7. 대조(chrisryugj): calendar.json 1,143건, 이 집계 1,146건(머지 리퀘스트 닫기 3건 차이)
  for (const e of events) {
    if (NOT_CONTRIB.has(e.action_name)) continue;
    const k = keyOf(e.created_at); counts[k] = (counts[k] || 0) + 1;
  }
  const [projects, starred] = await Promise.all([gitlab.userProjects(user.id), gitlab.userStarred(user.id)]);
  const pjs = Array.isArray(projects.data) ? projects.data : [];
  const names = Object.fromEntries(pjs.map((p) => [p.id, p.name_with_namespace]));
  return { user, events, counts, partial, projects: pjs, projectsTotal: projects.pagination?.total ?? pjs.length, starred: Array.isArray(starred.data) ? starred.data : [], starredTotal: starred.pagination?.total ?? null, names };
}

function EventRow({ e, names }) {
  const pd = e.push_data;
  const where = names[e.project_id];
  return (
    <li className="gl-act rb-pf-act" data-figma="profile-event">
      <span className="rb-pf-act-icon" aria-hidden="true"><Icon name="ext/commit" /></span>
      <div className="gl-act-main">
        <div>
          <strong>{pd ? (pd.ref_type === 'tag' ? p1.pushedTag(pd.ref) : p1.pushedBranch(pd.ref)) : `${e.action_name} ${e.target_title || ''}`}</strong>
          {where ? <> {pf.at} <Link to={`/projects/${e.project_id}`}>{where}</Link></> : null}
        </div>
        {pd?.commit_title ? <div><code>{(pd.commit_to || '').slice(0, 8)}</code> · {pd.commit_title}</div> : null}
        {pd?.commit_count > 1 ? <div className="rb-subtle">{p1.moreCommits(pd.commit_count - 1)}</div> : null}
      </div>
      <span className="gl-act-time">{ago(e.created_at)}</span>
    </li>
  );
}

export default function Profile({ tab = 'overview' }) {
  const { username } = useParams();
  const res = useData(() => loadUser(username), [username], (d) => !d);
  const d = res.data;
  const cal = useMemo(() => (d ? buildCalendar(d.counts) : null), [d]);
  const title = d?.user?.name || username;
  return (
    <Page id="G-12" title={title} state={res.state}>
      <Breadcrumb home={false} items={[[title, null]]} />
      <Status state={res.state} error={res.error} status={res.status} code={res.code} />
      {res.state === 'Empty' ? <EmptyState title={pf.noUser} /> : null}
      {d ? (
          <div className="rb-pf">
            <div className="rb-pf-head" data-figma="profile-head">
              <Avatar src={d.user.avatar_url} name={d.user.name} seed={d.user.id} className="rb-pf-avatar" />
              <div className="rb-pf-name">
                <h1 className="rb-pf-title">{d.user.name}</h1>
                <p className="rb-subtle">@{d.user.username}</p>
              </div>
            </div>
            <div className="rb-repo-main has-info rb-pf-body">
              <div className="rb-pf-main">
                {tab === 'overview' ? (
                  <>
                    <section aria-labelledby="pf-activity" data-figma="profile-activity">
                      <div className="rb-pf-sec-head">
                        <h2 id="pf-activity">{pf.activity}</h2>
                        <a href={`${d.user.web_url}/activity`} {...newWindow(pf.viewAll)}>{pf.viewAll}</a>
                      </div>
                      <ActivityCalendar cal={cal} caption={d.partial ? `${pf.calCaption} ${pf.calPartial(d.events.length)}` : pf.calCaption} cellLabel={pf.calCell} aria={pf.calAria(cal.total)} less={pf.less} more={pf.more} />
                    </section>
                    {d.events.length ? <ul className="rb-plain-list">{d.events.slice(0, 20).map((e) => <EventRow key={e.id} e={e} names={d.names} />)}</ul> : <p className="rb-subtle">{pf.none}</p>}
                  </>
                ) : (
                  <section aria-labelledby="pf-list">
                    <h2 id="pf-list" className="rb-pf-list-title">{tab === 'projects' ? pf.personal : pf.starred}</h2>
                    {(tab === 'projects' ? d.projects : d.starred).length
                      ? <ul className="rb-prows">{(tab === 'projects' ? d.projects : d.starred).map((p) => <ProjectRow key={p.id} p={p} />)}</ul>
                      : <p className="rb-subtle">{pf.noProjects}</p>}
                  </section>
                )}
              </div>
              <aside className="rb-pf-info" aria-labelledby="pf-info" data-figma="profile-info">
                <h2 id="pf-info">{pf.info}</h2>
                <ul className="rb-pf-info-list">
                  <li><Link to={`/users/${d.user.username}/projects`}>{pf.personalCount(d.projectsTotal)}</Link></li>
                  {d.starredTotal != null ? <li><Link to={`/users/${d.user.username}/starred`}>{pf.starredCount(d.starredTotal)}</Link></li> : null}
                  <li><a href={d.user.web_url} {...newWindow(pf.openOriginal)}>{pf.openOriginal}</a></li>
                </ul>
              </aside>
            </div>
          </div>
      ) : null}
    </Page>
  );
}

export const ProfileProjects = () => <Profile tab="projects" />;
export const ProfileStarred = () => <Profile tab="starred" />;
