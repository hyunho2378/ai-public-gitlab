// Figma: Layout/Project row
// UX/23 3-1-6, 3-4-2: 검색 결과 행 Kind=Recommend(추천 이유), Kind=Similar(유사 수준, 관련 이유, 차이), Kind=Explore(일반 결과). Density=Compact
// 같은 카드(cards.min.json)와 같은 근거 부품을 G-02, 업무 도우미, A-02 비슷한 프로젝트가 함께 쓴다
import { Link } from 'react-router-dom';
import { a } from '../../copy/ai';
import { Icon } from '../Code/Icon';
import { Menu } from '../Navigation/Menu';
import { iconBtnClass } from '../Action/IconButton';
import { BasisBadge } from '../Feedback/BasisBadge';
import { BasisMark } from '../Feedback/BasisMark';
import { FieldTag } from '../Data/FieldTag';
import { cleanDescription } from './description';
import { newWindow } from './newWindow';
import './recommend.css';

const LEVEL = { high: a.Q_simHigh, medium: a.Q_simMid, low: a.Q_simUnknown };

export function cardBasis(card) {
  return card?.oneLine?.b || card?.basis || 'none';
}

export function RecommendRow({ item, card, kind = 'Recommend', fallback = false, onSimilar, onOpen, stacked = false }) {
  if (!card) return null;
  const id = card.id;
  const readme = card.readme?.v === 'present' || card.readme?.v === 'template';
  const oneLine = card.oneLine?.v;
  const desc = cleanDescription(card.desc);
  const level = kind === 'Similar' ? (fallback ? a.Q_simSkipped : LEVEL[item.level] || a.Q_simUnknown) : null;
  const strong = !fallback && (item.level === 'high' || item.level === 'medium');
  const reasonLabel = kind === 'Similar' ? a.Q_related : kind === 'Explore' ? a.Q_matchLabel : a.Q_reason;
  return (
    <li className={'rb-rec' + (stacked ? ' is-stacked' : '')} data-figma="Layout/Project row" data-kind={kind} data-density="Compact">
      <div className="rb-rec-main">
        <p className="rb-rec-title">
          <Link className="krds-text-body-small-bold" to={`/projects/${id}/about`} state={{ from: 'search' }} onClick={onOpen}>{card.name}</Link>
          <BasisBadge basis={cardBasis(card)} />
          {level ? <span className={'rb-rec-level krds-text-body-xsmall' + (strong ? ' is-strong' : '')}>{level}</span> : null}
        </p>
        {card.status === 'failed' ? (
          <p className="rb-rec-line rb-rec-warn krds-text-body-xsmall"><Icon name="sys_danger_mark" />{a.S_failed}</p>
        ) : (
          <p className={'rb-rec-line krds-text-body-small' + (stacked ? ' rb-clamp-2' : ' rb-rec-one')} title={oneLine || desc || undefined}>{oneLine || desc || <span className="rb-subtle">{a.C_info}</span>}</p>
        )}
        <p className="rb-rec-line krds-text-body-xsmall">
          <b>{reasonLabel}</b> <span>{item.reason}</span>{' '}
          {item.basisLines ? <BasisMark id={id} lines={item.basisLines} readme={readme} /> : null}
        </p>
        {kind === 'Similar' && !fallback ? (
          <p className="rb-rec-line krds-text-body-xsmall">
            <b>{a.Q_diff}</b> <span className="rb-subtle">{a.Q_diffUnknown}</span> <BasisMark id={id} />
          </p>
        ) : null}
        <p className="rb-rec-meta krds-text-body-xsmall">
          <FieldTag fields={card.fields} />
          {card.org?.v ? <span className="rb-subtle">{card.org.v}</span> : null}
          <span className="rb-subtle">{a.P_stars(card.stars)}</span>
          {onSimilar ? <button type="button" className="krds-btn text small rb-rec-similar" onClick={() => onSimilar(card)}>{a.A_similar}</button> : null}
        </p>
      </div>
      <Menu label={a.P_rowMenu} align="right" toggle={false} btnClass={iconBtnClass('small')} button={<Icon name="ellipsis_vertical" />}>
        {(close) => (
          <ul className="drop-list">
            <li><a className="item-link" href={card.url} {...newWindow(a.P_openOrigin)} onClick={close}>{a.P_openOrigin}</a></li>
          </ul>
        )}
      </Menu>
    </li>
  );
}

/** 묶음 제목 줄: Spark(AI 자리만) + 제목 */
export function RecGroupHead({ spark, children, id }) {
  return <h2 id={id} className="rb-rec-head krds-text-body-small-bold">{spark}{children}</h2>;
}
