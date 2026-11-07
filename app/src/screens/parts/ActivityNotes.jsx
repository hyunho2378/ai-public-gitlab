// 작업 항목·머지 리퀘스트 상세의 '활동' 묶음(공공 깃랩 .issuable-discussion). 공개 GraphQL discussions의 글을 시간순으로 보여 주고,
// 비로그인이면 실제처럼 '회신하려면 등록 또는 로그인 하십시오'를 둔다. 같은 class(gl-activity, gl-note, gl-reply)라 머지 리퀘스트와 모양이 같다.
// Figma: profile-activity
import { Link } from 'react-router-dom';
import { Avatar } from '../../components/Layout/Avatar';
import { au } from '../../copy/work';
import { ago } from './glTime';

export function ActivityNotes({ notes, signedIn }) {
  return (
    <section className="gl-activity" data-figma="profile-activity">
      <div className="gl-activity-head"><h2>{au.activity}</h2></div>
      {notes.length ? (
        <ul>
          {notes.map((n, i) => (
            <li key={i} className="gl-note">
              <Avatar src={n.author?.avatarUrl} name={n.author?.name} seed={n.author?.username} />
              <div><strong>{n.author?.name}</strong> <span className="rb-subtle">{n.system ? n.body : ''} {ago(n.createdAt)}</span>{n.system ? null : <p>{n.body}</p>}</div>
            </li>
          ))}
        </ul>
      ) : null}
      {signedIn ? null : <p className="gl-reply">{au.loginReply} <Link className="krds-link" to="/login">{au.register}</Link> {au.orWord} <Link className="krds-link" to="/login">{au.login}</Link> {au.pleaseDo}</p>}
    </section>
  );
}
