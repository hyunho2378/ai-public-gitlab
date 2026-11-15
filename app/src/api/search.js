// 공통 검색(F1 업무 검색 mode:'task', F4 비슷한 프로젝트 mode:'similar'). 화면은 이 파일의 search()만 부른다.
// AI 함수 주소(VITE_SEARCH_URL)가 있으면 호출하고 결과를 검증, 없거나 실패하면 기존 taskSearch로 대체(fallback: true).
// 비밀값은 이 파일에 두지 않는다. AI 키는 서버리스 함수 쪽에만 있다.
import { loadCards, taskSearch } from './cards.js';
import { runSearch, createLatestGuard, validateQuery } from './searchCore.js';
import { devAi } from './devState.js';

export { STATUS, MIN_LEN, MAX_LEN, validateQuery, matchesFields, FIELD_CHECK, FIELD_NONE, createLatestGuard } from './searchCore.js';

const guard = createLatestGuard();

/** 카드 원자료(cards.min.json 그대로). 없으면 null */
async function rawData() {
  const base = import.meta.env?.BASE_URL || '/';
  try {
    const r = await fetch(`${base}data/cards.min.json`, { cache: 'no-cache' });
    return r.ok ? await r.json() : null;
  } catch { return null; }
}
let dataP = null;
const data = () => (dataP ??= rawData().then((d) => { if (!d) dataP = null; return d; }));

/** 기존 업무 문장 검색(taskSearch)으로 일반 검색. 분야와 제외는 공통 핵심이 다시 걸러 낸다 */
async function fallbackSearch(query, { mode }) {
  await loadCards();
  const rows = await taskSearch(query, 50);
  return rows.map((r) => ({ id: r.id, reason: mode === 'similar' ? '이름과 설명이 입력 내용과 겹침(유사 판단 미수행)' : '이름과 설명이 입력 내용과 겹침', basisLines: null, level: null }));
}

/**
 * search({ query, mode: 'task'|'similar', fields: [분야 이름], excludeIds: [id] })
 * 반환: { requestId, stale, status, items:[{id,reason,basisLines,level}], fallback, dataVersion, fetchedDate }
 * status: ok, empty, invalid, failed, fallback, fallback-empty, version-mismatch
 * 입력 오류는 요청 번호를 올리지 않아 직전 결과가 유지된다.
 */
export async function search(input, deps = {}) {
  // 화면마다 요청 번호를 따로 셀 수 있게 guard를 받는다(G-02와 업무 도우미가 서로의 결과를 stale로 만들지 않음, 2026-11-15 주현호)
  const g = deps.guard || guard;
  const v = validateQuery(input?.query);
  if (!v.ok) return { requestId: g.current, stale: false, status: 'invalid', items: [], fallback: false, error: v.reason, length: v.length };
  const requestId = g.next();
  const d = deps.data ?? (await data());
  if (!d) return { requestId, stale: !g.isLatest(requestId), status: 'failed', items: [], fallback: false, error: 'data-unreadable', dataVersion: null, fetchedDate: null };
  // 개발 서버 전용 모의 AI(?ai=ok 등, devState.js). 배포본에서는 null
  const dev = deps.aiUrl === undefined && !deps.fetchImpl ? devAi(d) : null;
  const res = await runSearch(input, {
    data: d,
    aiUrl: dev ? dev.url : deps.aiUrl !== undefined ? deps.aiUrl : import.meta.env?.VITE_SEARCH_URL,
    fetchImpl: dev ? dev.fetchImpl : deps.fetchImpl,
    fallbackSearch: dev?.fallbackSearch || deps.fallbackSearch || fallbackSearch,
    timeoutMs: dev?.timeoutMs ?? deps.timeoutMs,
  });
  return { ...res, requestId, stale: !g.isLatest(requestId) };
}

/** 카드 원자료(cards.min.json) 한 번 읽기. 화면의 자료 기준 줄과 버전 대조에 쓴다 */
export const cardsData = () => data();

/** 입력, 탭, 분야가 바뀔 때 호출하면 진행 중 요청 결과가 stale로 돌아온다 */
export const cancelPending = () => guard.cancel();
