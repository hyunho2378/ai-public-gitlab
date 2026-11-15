// A-02 소개 카드(기획안 A-02) = /projects/:id/about. UX/23 3-2-2 배치:
// 1 머리(기존) 2 소개 카드(#intro-card) 3 비슷한 프로젝트(F4) 4 시연 묶음(F7 README 초안, F8 써 봤어요, F9 공개 준비 점검 링크) 5 README 원문(#readme, 줄 앵커 readme-L{n}) 6 공공 깃랩에서 열기
// 카드와 검색은 cards.min.json과 api/search.js만(서버 점검 호출 없음). 근거 표식은 같은 화면 README 줄로 이동과 강조(부모 결정)
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { t } from '../copy/ko';
import { a } from '../copy/ai';
import { newWindow } from '../components/Layout/newWindow';
import { ProjectFrame, useProject } from '../components/Layout/ProjectFrame';
import { Readme } from '../components/Help/Readme';
import { LinkButton } from '../components/Action/Button';
import { EmptyState } from '../components/Feedback/Status';
import { loadCards } from '../api/cards';
import { useData } from '../api/useData';
import { jumpToReadme, parseEvidenceHash } from '../components/Help/evidence';
import { IntroCardSection } from './parts/IntroCardSection';
import { SimilarSection } from './parts/SimilarSection';
import { ReadmeDraftDemo } from './parts/ReadmeDraftDemo';
import { ReuseDemo } from './parts/ReuseDemo';
import './parts/a02.css';

/** 주소 조각 이동: #readme-L3-5면 줄 강조, #intro-card, #reuse-demo, #readme-demo면 그 구역으로 */
function useHashJump(ready, key) {
  const { hash } = useLocation();
  useEffect(() => {
    if (!ready || !hash) return undefined;
    const tm = setTimeout(() => {
      const ev = parseEvidenceHash(hash);
      if (ev) { jumpToReadme(ev[0], ev[1]); return; }
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) { el.scrollIntoView({ block: 'start' }); el.setAttribute('tabindex', '-1'); el.focus({ preventScroll: true }); }
    }, 60);
    return () => clearTimeout(tm);
  }, [ready, hash, key]);
}

export default function Project() {
  const data = useProject();
  const cards = useData(loadCards, []);
  const store = cards.data;
  const card = store ? store.get(data.id) : null;
  useHashJump(!!data.data && !!store, data.id);
  if (!data.data) return <ProjectFrame screenId="A-02" data={data} />;
  const { project, readme } = data.data;
  const id = data.id;
  return (
    <ProjectFrame screenId="A-02" tab="/about" tabLabel={t.ProjectTabs_1} data={data} state={card ? card.status : 'Loading'} title info hideCheck>
      <div className="rb-one-col rb-a02">
        {card ? <IntroCardSection id={id} card={card} fetched={store.meta.fetchedDate} /> : null}
        {store ? <SimilarSection key={id} id={id} card={card} store={store} /> : null}
        <section className="rb-demo-group" aria-labelledby="rb-demo-title" data-figma="demo-group">
          <h2 id="rb-demo-title" className="krds-text-body-small-bold">{a.D_groupTitle}</h2>
          <ReadmeDraftDemo name={project.name} />
          <ReuseDemo key={id} name={project.name} />
          <section className="rb-demo" aria-labelledby="rb-d9-link">
            <h3 id="rb-d9-link" className="krds-text-body-small-bold">{a.D9_title}</h3>
            <p><Link className="krds-btn small tertiary" to={`/projects/${id}/publish-check`} state={{ fromId: id }}>{a.D9_title}</Link></p>
          </section>
        </section>
        <section id="readme" className="rb-stack" aria-labelledby="rb-readme-title">
          <h2 id="rb-readme-title" className="krds-text-body-small-bold">{t.P04_22}</h2>
          {readme ? (
            <Readme source={readme} lineAnchors base={{ id, rawBase: `${project.web_url}/-/raw/${project.default_branch || 'main'}/` }} />
          ) : (
            <EmptyState title={t.P04_23} actions={<LinkButton Type="tertiary" to={`/projects/${id}/feedback?type=readme`}>{t.P04_24}</LinkButton>}>{t.P04_noReadme}</EmptyState>
          )}
        </section>
        <p><a className="krds-link" href={project.web_url} {...newWindow(a.P_openOrigin)}>{a.P_openOrigin}</a></p>
      </div>
    </ProjectFrame>
  );
}
