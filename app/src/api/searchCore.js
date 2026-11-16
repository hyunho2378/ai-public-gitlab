// 공통 검색 핵심(F1 업무 검색, F4 비슷한 프로젝트, MCP 도구가 함께 씀). 브라우저 환경값과 DOM에 의존하지 않는 순수 모듈이라 서버(MCP)도 그대로 가져다 쓴다.
// 자료는 cards.min.json 하나. 상태: ok, empty, invalid, failed, fallback, fallback-empty, version-mismatch.
export const STATUS = ['ok', 'empty', 'invalid', 'failed', 'fallback', 'fallback-empty', 'version-mismatch'];
export const MIN_LEN = 2;
export const MAX_LEN = 500;
export const MODES = ['task', 'similar'];
export const LEVELS = ['high', 'medium', 'low'];
export const FIELD_CHECK = 'check';
export const FIELD_NONE = 'unclassified';

const val = (f) => (f && f.v != null && !(Array.isArray(f.v) && !f.v.length) ? f.v : null);
const lenOf = (s) => [...String(s)].length;

/** 입력 검증: 2~500자(공백 제외 앞뒤 정리 뒤 글자 수). 오류 종류 empty, short, long */
export function validateQuery(q) {
  const s = typeof q === 'string' ? q.trim() : '';
  if (!s) return { ok: false, reason: 'empty', length: 0 };
  const n = lenOf(s);
  if (n < MIN_LEN) return { ok: false, reason: 'short', length: n };
  if (n > MAX_LEN) return { ok: false, reason: 'long', length: n };
  return { ok: true, query: s, length: n };
}

export function ngramSet(s, n = 2) {
  const t = String(s ?? '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  const out = new Set();
  for (const w of t.split(' ')) {
    if (!w) continue;
    if (w.length < n) { out.add(w); continue; }
    for (let i = 0; i <= w.length - n; i++) out.add(w.slice(i, i + n));
  }
  return out;
}

/** 분야 조건에 맞는 카드인지. fields 비면 전체. 확정 분야 이름, 'check', 'unclassified'를 섞어 쓸 수 있고 하나라도 맞으면 포함 */
export function matchesFields(card, fields) {
  if (!fields || !fields.length) return true;
  const f = card.fields || {};
  return fields.some((name) => {
    if (name === FIELD_CHECK) return f.check === true;
    if (name === FIELD_NONE) return f.v == null && !f.check;
    return f.v === name;
  });
}

/** 허용 후보: 전체 카드에 분야 조건과 제외 조건을 먼저 적용 */
export function allowedCards(data, { fields = [], excludeIds = [] } = {}) {
  const ex = new Set((excludeIds || []).map(Number));
  return (data?.cards || []).filter((c) => !ex.has(c.id) && matchesFields(c, fields));
}

const W = { name: 2, oneLine: 3, task: 2, desc: 2, fields: 2, topics: 1 };
function pieces(c) {
  return { name: c.name, oneLine: val(c.oneLine), task: val(c.task), desc: c.desc, fields: c.fields?.v || (c.fields?.c || []).join(' '), topics: (c.topics || []).join(' ') };
}
const LABEL = { name: '이름', oneLine: '하는 일', task: '대상 업무', desc: '설명', fields: '분야', topics: '주제' };
export function scoreCard(grams, c) {
  if (!grams.size) return { score: 0, best: null };
  const p = pieces(c);
  let score = 0, best = null, bestV = 0;
  for (const [k, w] of Object.entries(W)) {
    const g = ngramSet(p[k]);
    if (!g.size) continue;
    let hit = 0;
    for (const x of grams) if (g.has(x)) hit++;
    const v = (w * hit) / grams.size;
    score += v;
    if (v > bestV) { bestV = v; best = k; }
  }
  return { score, best };
}

/** 근거 위치(줄 범위)만 뽑기. README 근거 줄이 없으면 null */
export function basisLinesOf(c) {
  const e = c?.oneLine?.e;
  return e && Array.isArray(e.lines) ? e.lines : null;
}

/** 수집 자료만으로 하는 일반 검색(MCP, 시험, AI 함수 없는 환경). 점검 중에도 동작 */
export function localSearch(data, query, { fields = [], excludeIds = [], limit = 10, minScore = 0.5 } = {}) {
  const g = ngramSet(query);
  return allowedCards(data, { fields, excludeIds })
    .map((c) => ({ c, ...scoreCard(g, c) }))
    .filter((x) => x.score >= minScore)
    .sort((a, b) => b.score - a.score || a.c.id - b.c.id)
    .slice(0, limit)
    .map(({ c, best }) => ({ id: c.id, reason: best ? `${LABEL[best]} 문구가 입력 내용과 겹침` : '입력 내용과 겹침', basisLines: basisLinesOf(c), level: null }));
}

/** AI 응답 검증. 수집 목록에 없는 id, 중복 id, 조건 밖 후보, 형식 오류가 하나라도 있으면 전체 폐기 */
export function validateAiResponse(resp, data, { fields = [], excludeIds = [] } = {}) {
  if (!resp || !Array.isArray(resp.items)) return { ok: false, reason: 'shape' };
  const allowed = new Map(allowedCards(data, { fields, excludeIds }).map((c) => [c.id, c]));
  const known = new Set((data?.cards || []).map((c) => c.id));
  const seen = new Set();
  const items = [];
  for (const it of resp.items) {
    const id = Number(it?.id);
    if (!Number.isInteger(id) || !known.has(id)) return { ok: false, reason: 'unknown-id', id: it?.id };
    if (seen.has(id)) return { ok: false, reason: 'duplicate-id', id };
    if (!allowed.has(id)) return { ok: false, reason: 'condition-mismatch', id };
    if (typeof it.reason !== 'string' || !it.reason.trim()) return { ok: false, reason: 'no-reason', id };
    const bl = it.basisLines;
    if (bl != null && !(Array.isArray(bl) && bl.length === 2 && bl.every(Number.isInteger) && bl[0] >= 1 && bl[0] <= bl[1])) return { ok: false, reason: 'bad-basis-lines', id };
    if (it.level != null && !LEVELS.includes(it.level)) return { ok: false, reason: 'bad-level', id };
    if (it.difference != null && typeof it.difference !== 'string') return { ok: false, reason: 'bad-difference', id };
    seen.add(id);
    items.push({ id, reason: it.reason.trim(), basisLines: bl ?? null, level: it.level ?? null, difference: it.difference?.trim() || null });
  }
  return { ok: true, items };
}

async function callAi(url, payload, fetchImpl, timeoutMs) {
  const ctl = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timer = ctl ? setTimeout(() => ctl.abort(), timeoutMs) : null;
  try {
    const r = await fetchImpl(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload), signal: ctl?.signal });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return await r.json();
  } finally { if (timer) clearTimeout(timer); }
}

/**
 * 공통 검색 한 번 실행.
 * input: { query, mode: 'task'|'similar', fields: [], excludeIds: [] }
 * deps: { data(cards.min.json), aiUrl, fetchImpl, fallbackSearch(query, opts)->items, timeoutMs }
 * 반환: { status, items, fallback, dataVersion, fetchedDate, error? }
 * AI 응답 형식: { dataVersion?, items: [{ id, reason, basisLines: [시작,끝]|null, level: high|medium|low|null }] }
 */
export async function runSearch(input, deps) {
  const { data, aiUrl, fetchImpl = globalThis.fetch, fallbackSearch, timeoutMs = 40000 } = deps;
  const base = { dataVersion: data?.meta?.version ?? null, fetchedDate: data?.meta?.fetchedDate ?? null };
  const v = validateQuery(input?.query);
  if (!v.ok) return { ...base, status: 'invalid', items: [], fallback: false, error: v.reason, length: v.length };
  const mode = MODES.includes(input?.mode) ? input.mode : 'task';
  const opts = { fields: input?.fields || [], excludeIds: input?.excludeIds || [] };
  const general = async () => {
    const items = await fallbackSearch(v.query, { ...opts, mode });
    return (items || []).filter((x) => allowedCards(data, opts).some((c) => c.id === x.id)).filter((x, i, a) => a.findIndex((y) => y.id === x.id) === i);
  };
  const toFallback = async (status, aiReason) => {
    try {
      const items = await general();
      return { ...base, status: status || (items.length ? 'fallback' : 'fallback-empty'), items, fallback: true, aiReason };
    } catch (e) {
      return { ...base, status: 'failed', items: [], fallback: true, error: 'fallback-failed', aiReason };
    }
  };
  if (!aiUrl) return toFallback(null, 'no-url');
  let resp;
  try {
    resp = await callAi(aiUrl, { query: v.query, mode, fields: opts.fields, excludeIds: opts.excludeIds, dataVersion: base.dataVersion }, fetchImpl, timeoutMs);
  } catch (e) {
    return toFallback(null, 'ai-failed');
  }
  if (resp?.dataVersion && base.dataVersion && resp.dataVersion !== base.dataVersion) {
    const r = await toFallback('version-mismatch', 'version-mismatch');
    return r.status === 'failed' ? r : { ...r, aiDataVersion: resp.dataVersion };
  }
  const chk = validateAiResponse(resp, data, opts);
  if (!chk.ok) return toFallback(null, 'invalid-response:' + chk.reason);
  return { ...base, status: chk.items.length ? 'ok' : 'empty', items: chk.items, fallback: false };
}

/** 최신 요청만 반영: 요청마다 번호를 붙이고, 더 새 요청이 시작됐으면 결과에 stale: true */
export function createLatestGuard() {
  let seq = 0;
  return {
    next: () => ++seq,
    isLatest: (n) => n === seq,
    cancel: () => { seq += 1; },
    get current() { return seq; },
  };
}
