// Figma: Data/Notify row (data-figma), State=unread|read. 실제 알림 자료가 있을 때만 호출한다.
import { Link } from 'react-router-dom';

export function NotifyRow({ to, read = false, children }) {
  return (
    <li className="rb-plain-row" data-figma="Data/Notify row" data-figma-key="" data-state={read ? 'read' : 'unread'}>
      {to ? <Link to={to}>{children}</Link> : children}
    </li>
  );
}
