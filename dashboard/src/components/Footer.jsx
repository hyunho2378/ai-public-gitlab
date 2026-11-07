// Figma: footer, footer-top, footer-logo, footer-info, footer-bottom → footer, footer-top, footer-logo, footer-info, footer-bottom
// 바닥글: 피그마 product/footer(Context=Panel)와 같은 구조. 값은 행정안전부 누리집에 실제로 있는 것만(D-20).
import { t } from '../copy/ko';

const BASE = import.meta.env.BASE_URL;
const MOIS = 'https://www.mois.go.kr/frt/sub/a08';
const nw = (label) => ({ target: '_blank', rel: 'noreferrer', title: `${label}, ${t.newWindow}` });

export function Footer() {
  return (
    <footer className="dash-footer" data-figma="footer">
      <div className="dash-inner">
        <div className="dash-foot">
          <div className="dash-foot-top" data-figma="footer-top">
            <img className="dash-foot-logo" src={`${BASE}brand/mois-logo-horizontal-inline.svg`} alt={t.ministry} data-figma="footer-logo" />
            <div className="dash-foot-info" data-figma="footer-info">
              <address className="dash-foot-contact krds-text-body-xsmall">
                <p>{t.foot.addr}</p>
                <p>{t.foot.tel} {t.foot.telNote}</p>
                <p>{t.foot.call} {t.foot.callNote}</p>
              </address>
              <ul className="dash-foot-links krds-text-body-small">
                <li><a href={`${MOIS}/useInfo/screen.do`} {...nw(t.foot.use)}>{t.foot.use}</a></li>
                <li><a href={`${MOIS}/sitemap/screen.do`} {...nw(t.foot.map)}>{t.foot.map}</a></li>
              </ul>
            </div>
          </div>
          <div className="dash-foot-divider" aria-hidden="true" />
          <div className="dash-foot-bottom" data-figma="footer-bottom">
            <ul className="dash-foot-links krds-text-body-small">
              <li><a className="is-strong" href={`${MOIS}/personalInfo/screen.do`} {...nw(t.foot.privacy)}>{t.foot.privacy}</a></li>
              <li><a href={`${MOIS}/copyrightPolicy/screen.do`} {...nw(t.foot.copyright)}>{t.foot.copyright}</a></li>
            </ul>
            <p className="dash-foot-copy krds-text-body-xsmall">{t.foot.copy}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
