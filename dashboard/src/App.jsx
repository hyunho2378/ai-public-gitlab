import { useCallback, useEffect, useMemo, useState } from 'react';
import { t } from './copy/ko';
import { loadDashboard } from './data/load';
import { activity, calendar, fieldCounts, languages, metrics, parseDate } from './lib/compute';
import { Heatmap } from './components/Heatmap';
import { Activity } from './components/Activity';
import { Fields } from './components/Fields';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Languages } from './components/Languages';
import { Metrics } from './components/Metrics';
import { PageHead } from './components/PageHead';
import { ProjectTable } from './components/ProjectTable';
import { RecentIssues } from './components/RecentIssues';

export function App() {
  const [state, setState] = useState({ status: 'loading' });
  const load = useCallback(() => {
    setState((s) => ({ ...s, busy: true }));
    loadDashboard()
      .then(({ data, source }) => setState({ status: 'ready', data, source }))
      .catch(() => setState({ status: 'error' }));
  }, []);
  useEffect(load, [load]);

  const view = useMemo(() => {
    if (state.status !== 'ready') return null;
    const d = state.data;
    const now = parseDate(d.generatedAt)?.getTime() || Date.now();
    return { now, m: metrics(d), a: activity(d, now), f: fieldCounts(d), langs: languages(d), cal: calendar(d, now) };
  }, [state]);

  return (
    <>
      <a className="dash-skip" href="#main">{t.skip}</a>
      <Header />
      <main id="main" className="dash-inner dash-main" tabIndex={-1}>
        {state.status === 'loading' ? <p className="krds-text-body-medium dash-subtle" role="status">{t.loading}</p> : null}
        {state.status === 'error' ? (
          <div role="alert" className="dash-error">
            <p className="krds-text-body-medium">{t.loadError}</p>
            <button type="button" className="krds-btn medium secondary" onClick={load}>{t.retry}</button>
          </div>
        ) : null}
        {view ? (
          <>
            <PageHead generatedAt={state.data.generatedAt} source={state.source} onRefresh={load} busy={state.busy} />
            <Metrics m={view.m} />
            <div className="dash-cols">
              <Heatmap cal={view.cal} />
              <Languages langs={view.langs} />
            </div>
            <div className="dash-cols">
              <Activity a={view.a} />
              <Fields f={view.f} />
            </div>
            <RecentIssues data={state.data} now={view.now} />
            <ProjectTable data={state.data} now={view.now} fields={view.f.named} />
          </>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
