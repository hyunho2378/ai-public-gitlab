// Figma: Layout/Search result row, Layout/Project row (data-figma), 기존 화면 상자는 data-figma-key
// D-21 4장 탐색 목록 행(공공 깃랩 01 그대로): 유형 아이콘, 아바타, '만든 곳 / 이름' + 공개 아이콘, 설명 두 줄, 주제 3개 + 더보기,
// 오른쪽에 별표, 포크, 머지 리퀘스트, 작업 항목 개수(아이콘 + 숫자 13)와 '업데이트됨 n 전', 맨 오른쪽 점 세 개 메뉴.
import { Link } from 'react-router-dom';
import { t } from '../../copy/ko';
import { u } from '../../copy/ui';
import { Icon } from '../Code/Icon';
import { Avatar } from './Avatar';
import { Menu } from '../Navigation/Menu';
import { iconBtnClass } from '../Action/IconButton';
import { cleanDescription } from './description';
import { newWindow } from './newWindow';
import { FoldText } from './FoldText';
import { a } from '../../copy/ai';
import { BasisBadge } from '../Feedback/BasisBadge';
import { FieldTag } from '../Data/FieldTag';
import './recommend.css';

function Stat({ icon, label, n, href }) {
  return (
    <li>
      <a className="rb-prow-stat" href={href} {...newWindow(`${label} ${n ?? 0}`)} title={label}>
        <Icon name={icon} />
        <span>{n ?? '-'}</span>
      </a>
    </li>
  );
}

/** card: 소개 카드(cards.min.json). 있으면 UX/23 3-2-6대로 제목 끝 대표 근거 배지, 하는 일 줄, 주제 줄 맨 앞 분야 태그, 이름은 A-02로 */
export function ProjectRow({ p, mrs, issues, compact = false, card = null }) {
  const owner = p.namespace?.name || '';
  const topics = p.topics || p.tag_list || [];
  const { rel, full } = t.fn.relativeDate(p.last_activity_at);
  const desc = cleanDescription(p.description);
  return (
    <li className="rb-prow" data-figma={compact ? "Layout/Search result row" : "Layout/Project row"} data-figma-key="project-row">
      <Icon name="ext/project" />
      {/* 공공 깃랩: 머리글자는 '만든 곳 / 이름'의 첫 글자(서울특별시 광진구 류승인 / kordoc → 서) */}
      <Avatar src={p.avatar_url} name={owner || p.name} seed={p.id} className="is-32" />
      <div className="rb-prow-main">
        <p className="rb-prow-title">
          <Link to={card ? `/projects/${p.id}/about` : `/projects/${p.id}`} state={{ project: p, from: 'list' }}>{owner && !compact ? `${owner} / ` : ''}{p.name}</Link>
          <Icon name="globe" label={u.X_public} />
          {card ? <BasisBadge basis={card.oneLine?.b || card.basis} /> : null}
        </p>
        {card && card.status === 'failed' && !compact ? <p className="rb-prow-desc rb-rec-warn"><Icon name="sys_danger_mark" />{a.S_failed}</p> : null}
        {card && card.status !== 'failed' && card.oneLine?.v && !compact ? <p className="rb-prow-desc rb-prow-oneline" title={card.oneLine.v}>{card.oneLine.v}</p> : null}
        {/* 공공 깃랩 탐색 행: 설명은 2줄 말줄임, 펼침 단추 없음(실측) */}
        {desc && !compact && !(card && (card.oneLine?.v || card.status === 'failed')) ? <p className="rb-prow-desc rb-clamp-2" title={desc}>{desc}</p> : null}
        {card && !compact && !topics.length ? <p className="rb-prow-topics"><FieldTag fields={card.fields} /></p> : null}
        {topics.length && !compact ? (
          <p className="rb-prow-topics">
            {card ? <FieldTag fields={card.fields} /> : null}
            <span className="rb-subtle">{u.X_topics}</span>
            <span className="krds-tag-wrap small">
              {topics.slice(0, 3).map((x) => <span key={x} className="krds-btn-tag rb-topic">{x}</span>)}
            </span>
            {topics.length > 3 ? <span className="rb-subtle">{u.X_moreTopics(topics.length - 3)}</span> : null}
          </p>
        ) : null}
      </div>
      <div className="rb-prow-side">
        <ul className="rb-prow-stats">
          <Stat icon="ext/star" label={u.X_stars} n={p.star_count} href={`${p.web_url}/-/starrers`} />
          <Stat icon="ext/fork" label={u.X_forks} n={p.forks_count} href={`${p.web_url}/-/forks`} />
          <Stat icon="ext/merge-request" label={u.X_mrs} n={mrs} href={`${p.web_url}/-/merge_requests`} />
          <Stat icon="ext/issues" label={u.X_issues} n={p.open_issues_count ?? issues} href={`${p.web_url}/-/work_items`} />
        </ul>
        {compact ? null : <p className="rb-prow-time" title={full}>{u.X_updated(rel)}</p>}
      </div>
      <Menu label={u.X_actions} align="right" toggle={false} btnClass={iconBtnClass('small')} button={<Icon name="ellipsis_vertical" />}>
        {(close) => (
          <ul className="drop-list">
            <li><Link className="item-link" to={`/projects/${p.id}`} onClick={close}>{p.name}</Link></li>
            <li><a className="item-link" href={p.web_url} {...newWindow(u.G_newWindow)} onClick={close}>{u.G_newWindow}</a></li>
          </ul>
        )}
      </Menu>
    </li>
  );
}
