// Figma: page-head, refresh → page-head, refresh
import { t } from '../copy/ko';
import { formatDateTime } from '../lib/compute';
import { IconButton } from './IconButton';

export function PageHead({ generatedAt, source, onRefresh, busy }) {
  return (
    <div className="dash-pagehead" data-figma="page-head">
      <h1 className="krds-text-heading-medium">{t.title}</h1>
      <div className="dash-asof">
        <p className="krds-text-body-small dash-subtle">
          {t.asOf} {formatDateTime(generatedAt)}
          {source === 'snapshot' ? <span> / {t.snapshot}</span> : null}
        </p>
        <IconButton icon="reset" label={t.refresh} onClick={onRefresh} disabled={busy} figma="refresh" />
      </div>
    </div>
  );
}
