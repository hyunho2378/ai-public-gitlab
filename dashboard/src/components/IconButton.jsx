// Figma: icon-button → icon-button (refresh 변형)
import { Icon } from './Icon';

export function IconButton({ icon, label, className = '', figma = 'icon-button', ...props }) {
  return <button type="button" className={`krds-btn medium tertiary icon dash-iconbtn ${className}`} aria-label={label} title={label} data-figma={figma} {...props}><Icon name={icon} /></button>;
}
