// Figma: Layout/Intro card(intro-card-full), UX/23 3-2-2, 3-2-5
// 제목, 작성 주체 줄(AI 정리 고지 + 수집일), 머리 줄(대표 근거, 생성 상태, 분야, README 상태), 다섯 항목(하는 일, 실행 형태, 이용 조건, 실행 방법, 한계)
import { Link } from 'react-router-dom';
import { a } from '../../copy/ai';
import { Icon } from '../../components/Code/Icon';
import { BasisBadge } from '../../components/Feedback/BasisBadge';
import { MadeByLine } from '../../components/Feedback/MadeByLine';
import { EmptyState } from '../../components/Feedback/Status';
import { FieldTag } from '../../components/Data/FieldTag';
import { IntroItem } from '../../components/Layout/IntroItem';
import { newWindow } from '../../components/Layout/newWindow';

const README_STATE = { present: a.R_present, template: a.R_present, none: a.R_none, unknown: a.R_unknown };

export function IntroCardSection({ id, card, fetched }) {
  const readme = card.readme?.v === 'present' || card.readme?.v === 'template';
  const head = (
    <p className="rb-intro-head krds-text-body-xsmall">
      <BasisBadge basis={card.oneLine?.b || card.basis} />
      {card.status === 'thin' ? <span className="rb-subtle">{a.S_thin}</span> : null}
      {card.status === 'failed' ? <span className="rb-rec-warn"><Icon name="sys_danger_mark" />{a.S_failed}</span> : null}
      <FieldTag fields={card.fields} />
      <span className="rb-intro-readme"><Icon name="ext/file-text" />{README_STATE[card.readme?.v] || a.R_unknown}</span>
    </p>
  );
  return (
    <section id="intro-card" className="rb-intro" aria-labelledby="rb-intro-title" data-figma="intro-card-full" data-status={card.status}>
      <h2 id="rb-intro-title" className="krds-text-body-small-bold">{a.C_cardTitle}</h2>
      {card.status !== 'failed' && card.aiPass === 'done' ? (
        <MadeByLine text={readme ? a.C_madeReadme : a.C_madeCode}><span className="rb-subtle">{a.C_fetched(fetched)}</span></MadeByLine>
      ) : null}
      {head}
      {card.status === 'failed' ? (
        <EmptyState title={a.S_failed} actions={<a className="krds-btn small tertiary" href={card.url} {...newWindow(a.P_openOrigin)}>{a.P_openOrigin}</a>}>{a.S_failedBody}</EmptyState>
      ) : (
        <dl className="rb-intro-list">
          <IntroItem label={a.C_oneLine} item={card.oneLine} id={id} readme={readme} />
          <IntroItem label={a.C_form} item={card.form} id={id} readme={readme} />
          <IntroItem label={a.C_license} item={card.license} id={id} readme={readme} />
          <IntroItem label={a.C_run} item={card.run} id={id} readme={readme} fold={3} />
          <IntroItem label={a.C_limits} item={card.limits} id={id} readme={readme} />
        </dl>
      )}
      {card.status === 'thin' ? (
        <p className="rb-actions">
          <Link className="krds-btn small tertiary" to={`/projects/${id}/feedback?type=readme`}>{a.R_request}</Link>
          <a className="krds-link krds-text-body-xsmall" href="#readme-demo">{a.D7_title}</a>
        </p>
      ) : null}
    </section>
  );
}
