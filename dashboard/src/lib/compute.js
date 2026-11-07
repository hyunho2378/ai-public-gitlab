// 현황판 계산. 원본(axboard index.html)의 계산 방식을 그대로 옮겼다. 기준 시각만 '지금' 대신 자료 생성 시각(generatedAt)을 쓴다.
const TZ = 'Asia/Seoul';
const DAY = 86400000;

export const num = (v) => (v === null || v === undefined ? '-' : Number(v).toLocaleString('ko-KR'));

export function parseDate(v) {
  if (!v) return null;
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? null : d;
}

export function dateKey(v) {
  const d = parseDate(v);
  if (!d) return '';
  return new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(d);
}

// 11. 07. 처럼 KRDS 날짜 표기(마침표 뒤 띄어쓰기)
export function dayLabel(key) {
  const [, m, d] = key.split('-');
  return `${Number(m)}. ${Number(d)}.`;
}

export function formatDateTime(v) {
  const d = parseDate(v);
  if (!d) return '-';
  const p = Object.fromEntries(
    new Intl.DateTimeFormat('ko-KR', { timeZone: TZ, year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false })
      .formatToParts(d)
      .map((x) => [x.type, x.value]),
  );
  return `${p.year}. ${p.month}. ${p.day}. ${p.hour}:${p.minute}`;
}

export function formatDate(v) {
  const d = parseDate(v);
  if (!d) return '-';
  const p = Object.fromEntries(
    new Intl.DateTimeFormat('ko-KR', { timeZone: TZ, year: 'numeric', month: 'numeric', day: 'numeric' }).formatToParts(d).map((x) => [x.type, x.value]),
  );
  return `${p.year}. ${p.month}. ${p.day}.`;
}

export function relative(v, now) {
  const d = parseDate(v);
  if (!d) return '-';
  const s = Math.max(0, Math.floor((now - d.getTime()) / 1000));
  if (s < 60) return '방금';
  if (s < 3600) return `${Math.floor(s / 60)}분 전`;
  if (s < 86400) return `${Math.floor(s / 3600)}시간 전`;
  if (s < 2592000) return `${Math.floor(s / 86400)}일 전`;
  if (s < 31536000) return `${Math.floor(s / 2592000)}개월 전`;
  return `${Math.floor(s / 31536000)}년 전`;
}

// 설명 안 첫 [분야] 표기를 분야로 쓴다(원본과 같은 규칙)
export function splitDescription(p) {
  const raw = String(p.description || '');
  const m = raw.match(/\[([^\]]+)\]/);
  if (!m) return { field: '', description: raw.trim() };
  const description = (raw.slice(0, m.index) + raw.slice(m.index + m[0].length)).trim();
  return { field: m[1].trim(), description };
}

export const stats = (data, p) => data.projectStats?.[p.id] || {};
export const commits = (data, p) => Number(stats(data, p).totalCommits || 0);

export function metrics(data) {
  const sum = (k) => data.projects.reduce((a, p) => a + Number(stats(data, p)[k] || 0), 0);
  const priv = data.privateProjectCount == null || data.internalProjectCount == null ? null : data.privateProjectCount + data.internalProjectCount;
  return {
    total: data.totalProjects,
    listed: data.projects.length,
    private: priv,
    active: data.activeProjects,
    openIssues: sum('openedIssues'),
    closedIssues: sum('closedIssues'),
    stars: data.projects.reduce((a, p) => a + Number(p.star_count || 0), 0),
    users: data.totalUsers,
  };
}

export function lastSevenDays(now) {
  const out = [];
  for (let i = 6; i >= 0; i -= 1) out.push(dateKey(new Date(now - i * DAY).toISOString()));
  return out;
}

export function activity(data, now) {
  const days = lastSevenDays(now);
  const by = (list) => {
    const c = Object.fromEntries(days.map((k) => [k, 0]));
    for (const v of list) {
      const k = dateKey(v);
      if (k in c) c[k] += 1;
    }
    return days.map((k) => c[k]);
  };
  return {
    days,
    rows: [
      { key: 'commits', values: by(data.recentCommitDates || []), total: (data.recentCommitDates || []).length },
      { key: 'issues', values: by((data.recentIssues || []).map((i) => i.created_at)), total: (data.recentIssues || []).length },
      // 합계는 원본과 같이 '지금부터 7일(168시간)' 안에 활동한 프로젝트 수, 막대는 날짜별
      { key: 'updated', values: by(data.projects.map((p) => p.last_activity_at)), total: data.projects.filter((p) => (parseDate(p.last_activity_at)?.getTime() || 0) >= now - 7 * DAY).length },
    ],
  };
}

export function fieldCounts(data) {
  const c = {};
  for (const p of data.projects) {
    const f = splitDescription(p).field || '';
    c[f] = (c[f] || 0) + 1;
  }
  const none = c[''] || 0;
  delete c[''];
  const named = Object.entries(c).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'ko'));
  return { none, named, total: data.projects.length };
}

export function languages(data, top = 5) {
  const totals = {};
  for (const p of data.projects) {
    for (const [lang, v] of Object.entries(stats(data, p).languages || {})) totals[lang] = (totals[lang] || 0) + Number(v || 0);
  }
  const entries = Object.entries(totals).sort((a, b) => b[1] - a[1]).slice(0, top);
  const total = entries.reduce((a, [, v]) => a + v, 0) || 1;
  return entries.map(([name, v]) => ({ name, percent: Math.round((v / total) * 100), raw: (v / total) * 100 }));
}

export function byRecent(list, key = 'last_activity_at') {
  return [...list].sort((a, b) => (parseDate(b[key])?.getTime() || 0) - (parseDate(a[key])?.getTime() || 0));
}

export function filterSort(data, { q, field, sort }) {
  const kw = q.trim().toLowerCase();
  const list = data.projects.filter((p) => {
    const s = splitDescription(p);
    if (field && s.field !== field) return false;
    if (!kw) return true;
    return [p.name, s.description, s.field, p.owner].join(' ').toLowerCase().includes(kw);
  });
  return [...list].sort((a, b) => {
    if (sort === 'name') return String(a.name).localeCompare(String(b.name), 'ko');
    if (sort === 'issues') return (stats(data, b).openedIssues || 0) - (stats(data, a).openedIssues || 0);
    if (sort === 'commits') return commits(data, b) - commits(data, a);
    if (sort === 'stars') return Number(b.star_count || 0) - Number(a.star_count || 0);
    return (parseDate(b[sort])?.getTime() || 0) - (parseDate(a[sort])?.getTime() || 0);
  });
}

// 등록 달력: 끝 주를 포함해 weeks주(일요일 시작) 칸. 값은 그날 생성된 공개 프로젝트 수.
// 단계: 0, 그리고 값이 있는 날들의 4분위(1~4). GitHub/GitLab 활동 달력과 같은 방식
export function calendar(data, now, weeks = 52) {
  const counts = {};
  let first = null;
  for (const p of data.projects) {
    const k = dateKey(p.created_at);
    if (!k) continue;
    counts[k] = (counts[k] || 0) + 1;
    if (!first || k < first) first = k;
  }
  const end = new Date(`${dateKey(new Date(now).toISOString())}T00:00:00+09:00`);
  const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dow = DOW.indexOf(new Intl.DateTimeFormat('en-US', { timeZone: TZ, weekday: 'short' }).format(end));
  const start = new Date(end.getTime() - ((weeks - 1) * 7 + dow) * DAY);
  const nz = Object.values(counts).sort((a, b) => a - b);
  const q = (r) => nz[Math.min(nz.length - 1, Math.floor(nz.length * r))] || 1;
  const cuts = [q(0.25), q(0.5), q(0.75)];
  const level = (v) => (!v ? 0 : v <= cuts[0] ? 1 : v <= cuts[1] ? 2 : v <= cuts[2] ? 3 : 4);
  const cols = [];
  let total = 0;
  for (let w = 0; w < weeks; w += 1) {
    const days = [];
    for (let d = 0; d < 7; d += 1) {
      const t = new Date(start.getTime() + (w * 7 + d) * DAY + 12 * 3600000);
      const key = dateKey(t.toISOString());
      const future = t.getTime() > now;
      const v = future ? null : counts[key] || 0;
      if (v) total += v;
      days.push({ key, v, level: v == null ? null : level(v) });
    }
    cols.push(days);
  }
  // 달 이름: 그 달 1일이 들어 있는 주에 표시
  const months = cols.map((days) => {
    const firstDay = days.find((x) => x.key.endsWith('-01'));
    return firstDay ? `${Number(firstDay.key.slice(5, 7))}월` : '';
  });
  return { cols, months, total, first, cuts };
}

// 0부터 시작하는 눈금: 최댓값의 5분의 1을 1, 2, 2.5, 5 x 10^n 단위로 올리고, 최댓값을 덮는 칸 수만큼
export function niceTicks(max) {
  if (max <= 0) return [0, 1];
  const raw = max / 5;
  const p = 10 ** Math.floor(Math.log10(raw));
  const unit = [1, 2, 2.5, 5, 10].map((m) => m * p).find((u) => u >= raw);
  const steps = Math.max(1, Math.ceil(max / unit));
  return Array.from({ length: steps + 1 }, (_, i) => Math.round(i * unit * 100) / 100);
}
