// Figma: Dashboard/Header (data-figma), 기존 화면 상자는 data-figma-key(header)
import { t } from '../copy/ko';

const BASE = import.meta.env.BASE_URL;
// '공공 GitLab' 바로가기: 배포본은 리빌딩 사이트(VITE_GITLAB_URL), 값이 없으면 공공 깃랩 원본
const GITLAB_URL = import.meta.env.VITE_GITLAB_URL || 'https://gitlab.aigov.go.kr';

export function Header() {
  return (
    <header className="dash-header" data-figma="Dashboard/Header" data-figma-key="header">
      <div className="dash-inner dash-header-inner">
        <a className="dash-brand" href={`${BASE}`} aria-label={`${t.ministry} ${t.service}`}>
          <img className="dash-brand-logo" src={`${BASE}brand/mois-logo-horizontal-inline.svg`} alt="" />
          <span className="dash-brand-divider" aria-hidden="true" />
          <span className="krds-text-heading-xxsmall">{t.service}</span>
        </a>
        <nav className="dash-header-nav" aria-label="바로가기">
          <a className="krds-text-body-small" href={GITLAB_URL} target="_blank" rel="noreferrer" title={`${t.navGitlab}, ${t.newWindow}`}>{t.navGitlab}</a>
        </nav>
      </div>
    </header>
  );
}
