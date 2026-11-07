// P-10 내 프로젝트(G-06). 로그인 필요. 받은 의견, 점검, 설명서 제안으로 이어진다.
// 로그인 사용자의 공개 프로젝트·별표 프로젝트를 공개 API(users?username, users/:id/projects, starred_projects)로 보여 준다(G-12 프로필과 같은 자료).
// 개발 ?auth=Signed-in은 예시 자료 소유자(useAuth DEV_USER)로, ?fixture=kordoc이면 고정 저장 자료를 쓴다. '최근 본 도구'는 저장하는 곳이 없어 두지 않는다
import { phrase } from '../components/Help/Phrase';
import { t } from '../copy/ko';
import { u } from '../copy/ui';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { auth, gitlab } from '../api/client';
import { useData } from '../api/useData';
import { useAuth } from '../components/Identity/useAuth';
import { Page } from '../components/Layout/Page';
import { LinkButton } from '../components/Action/Button';
import { EmptyState, Status } from '../components/Feedback/Status';
import { ProjectRow } from '../components/Layout/ProjectRow';
import { StateTabs } from './P19_Issues';

async function loadMine(username) {
  const r = await gitlab.userByName(username);
  const user = Array.isArray(r.data) ? r.data[0] : null;
  if (!user) return null;
  const [projects, starred] = await Promise.all([gitlab.userProjects(user.id), gitlab.userStarred(user.id)]);
  const list = (x) => (Array.isArray(x.data) ? x.data : []);
  return { projects: list(projects), projectsTotal: projects.pagination?.total ?? list(projects).length, starred: list(starred), starredTotal: starred.pagination?.total ?? list(starred).length };
}

export default function MyProjects() {
  const { signedIn, user, ready } = useAuth();
  const location = useLocation();
  const [tab, setTab] = useState('mine');
  const mine = useData(() => (signedIn && user?.username ? loadMine(user.username) : Promise.resolve(null)), [signedIn, user?.username], (d) => !d);
  const d = mine.data;
  const rows = d ? (tab === 'mine' ? d.projects : d.starred) : [];
  return (
    <Page id="G-06" title={t.P09_34} state={!signedIn ? 'Login' : d ? (rows.length ? 'Ideal' : 'Empty') : mine.state}>
      <h1 className="krds-text-heading-small" data-figma="page-head">{phrase(t.P09_34)}</h1>
      {!ready && <p role="status">{t.P10_1}</p>}
      {ready && !signedIn && (
        <EmptyState title={t.P10_3} actions={<a className="krds-btn small primary" href={auth.loginUrl(location.pathname)}>{t.P10_2}</a>} />
      )}
      {signedIn && (
        <>
          <div className="rb-my-toolbar" data-figma="toolbar"><LinkButton to="/projects/new">{t.P10_new}</LinkButton></div>
          {d ? (
            <>
              <div data-figma="tabs">
                <StateTabs value={tab} onChange={setTab} label={t.P10_tabs} items={[['mine', <>{t.P09_34} <span className="gl-tab-count">{d.projectsTotal}</span></>], ['starred', <>{u.X_stars} <span className="gl-tab-count">{d.starredTotal}</span></>]]} />
              </div>
              {rows.length ? <ul className="rb-prows">{rows.map((p) => <ProjectRow key={p.id} p={p} />)}</ul> : <EmptyState title={t.P10_4}>{t.P10_linked}</EmptyState>}
            </>
          ) : <Status {...mine} />}
        </>
      )}
    </Page>
  );
}
