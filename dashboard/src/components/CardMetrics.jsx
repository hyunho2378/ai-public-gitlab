// Figma: Dashboard/Metric group(cards-metrics 구역)
// F6 소개 정보 현황(UX/23 3-6). 지표 다섯 개(A 분류 전, B 분류 후, C 하는 일 근거, D 카드 생성 상태, E README 없는 카드 생성).
// 지표마다 대표 수치, 분모, 정의 줄, 수집일과 자료 버전(구역 기준 줄). B 분야 행은 앱 목록(/?field=)으로 같은 조건 이동. A와 B 사이 개선율 없음
import { useCallback, useEffect, useState } from 'react';
import { t } from '../copy/ko';
import { num } from '../lib/compute';
import { APP_URL, loadMetrics } from '../data/loadMetrics';
import { Section } from './Section';
import { MetricGroup } from './MetricGroup';

const m = t.m;
const pct = (r) => (r == null || Number.isNaN(r) ? null : `${(r * 100).toFixed(1)}%`);
const dot = (iso) => (iso ? `${iso.slice(0, 4)}. ${iso.slice(5, 7)}. ${iso.slice(8, 10)}.` : '');
const appList = (key) => `${APP_URL}?field=${encodeURIComponent(key)}`;
const row = (label, x, extra = {}) => ({ label, value: x?.count ?? 0, display: m.value(num(x?.count ?? 0), pct(x?.ratio)), ...extra });

export function CardMetrics() {
  const [st, setSt] = useState({ s: 'loading' });
  const load = useCallback(() => { setSt({ s: 'loading' }); loadMetrics().then((d) => setSt(d.none ? { s: 'none' } : { s: 'ready', ...d })).catch(() => setSt({ s: 'error' })); }, []);
  useEffect(load, [load]);
  let body;
  if (st.s === 'loading') body = <p className="krds-text-body-medium dash-subtle" role="status">{t.loading}</p>;
  else if (st.s === 'none') body = <p className="krds-text-body-medium dash-subtle">{m.none0}</p>;
  else if (st.s === 'error') body = <div role="alert" className="dash-error"><p className="krds-text-body-medium">{m.error}</p><button type="button" className="krds-btn medium tertiary" onClick={load}>{t.retry}</button></div>;
  else {
    const d = st.m;
    const total = d.total?.count ?? d.scope?.total;
    const sf = d.sourceField || {};
    const fa = d.fieldAfter || {};
    const sum = (fa.confirmedTotal?.count ?? 0) + (fa.check?.count ?? 0) + (fa.none?.count ?? 0);
    const sumOk = sum === total;
    const nr = d.noReadmeCards || {};
    const mismatch = st.appVersion && st.appVersion !== d.dataVersion;
    body = (
      <>
        <p className="krds-text-body-xsmall dash-subtle" data-figma="Layout/Data basis">{m.basis(dot(d.fetchedDate), num(total), d.dataVersion)}</p>
        {mismatch ? <p className="dash-notice krds-text-body-xsmall" role="status">{m.versionMismatch}</p> : null}
        <div className="dash-cols dash-metric-cols">
          <div className="dash-stack">
            <MetricGroup
              name={m.a}
              title={sf.denominator ? m.aTitle(num(sf.absent?.count), pct(sf.absent?.ratio)) : m.notComputed(m.a)}
              aside={m.aAside(num(sf.denominator), num(sf.unknown?.count))}
              rows={[row(m.aRows.present, sf.present), row(m.aRows.absent, sf.absent), { label: m.aRows.unknown, value: sf.unknown?.count ?? 0, display: m.value(num(sf.unknown?.count ?? 0)), muted: true }]}
              def={m.aDef}
            />
            <MetricGroup
              name={m.b}
              title={m.bTitle(num(fa.confirmedTotal?.count), pct(fa.confirmedTotal?.ratio))}
              aside={m.total(num(fa.denominator ?? total))}
              rows={[
                ...(fa.confirmed || []).map((f) => row(f.name, f, { href: appList(f.name), linkLabel: m.listLink(f.name) })),
                row(m.check, fa.check, { href: appList('check'), linkLabel: m.listLink(m.check), muted: true }),
                row(m.none, fa.none, { href: appList('unclassified'), linkLabel: m.listLink(m.none), muted: true }),
              ]}
              sum={sumOk ? m.sum(num(sum)) : null}
              warn={sumOk ? null : m.sumMismatch}
              def={m.bDef}
            />
          </div>
          <div className="dash-stack">
            <MetricGroup name={m.c} title={m.cTitle(num(d.basis?.readme?.count), pct(d.basis?.readme?.ratio))} aside={m.total(num(d.basis?.denominator))} rows={['readme', 'code', 'none'].map((k) => row(m.cRows[k], d.basis?.[k]))} def={m.cDef} />
            <MetricGroup name={m.d} title={m.dTitle(num(d.cardStatus?.ok?.count), pct(d.cardStatus?.ok?.ratio))} aside={m.total(num(d.cardStatus?.denominator))} rows={['ok', 'thin', 'failed'].map((k) => row(m.dRows[k], d.cardStatus?.[k]))} def={m.dDef} />
            <MetricGroup name={m.e} title={m.eTitle(num(nr.withEvidence?.count))} aside={m.eAside(num(nr.denominator), num(nr.readmeUnknown))} rows={['withEvidence', 'thin', 'failed'].map((k) => row(m.eRows[k], nr[k]))} def={m.eDef} />
          </div>
        </div>
      </>
    );
  }
  return (
    <Section id="sec-cards" title={m.title} figma="cards-metrics">
      {body}
    </Section>
  );
}
