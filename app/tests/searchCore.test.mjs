import test from 'node:test';
import assert from 'node:assert/strict';
import { validateQuery, runSearch, validateAiResponse, localSearch, allowedCards, createLatestGuard, matchesFields } from '../src/api/searchCore.js';

const mk = (id, name, oneLine, fv, extra = {}) => ({ id, name, desc: '', topics: [], oneLine: oneLine ? { v: oneLine, e: { lines: [3, 3] }, s: 'ai', b: 'readme' } : { v: null, e: null, s: 'ai', b: 'none' }, task: null, fields: { v: fv, e: null, s: 'ai', ...(extra.fields || {}) } });
const data = { meta: { version: '2026-10-30-test0001', fetchedDate: '2026-10-30', count: 5 }, cards: [
  mk(1, '출장비 정산 도구', '출장 여비를 계산하는 도구', '회계/예산/출장'),
  mk(2, '회의록 요약', '회의록을 요약하는 도구', '문서/보고서'),
  mk(3, '여비 계산기', '국내 출장 여비를 계산', '회계/예산/출장'),
  mk(4, '분야 확인 필요 도구', '출장 문서 정리', null, { fields: { check: true, c: ['문서/보고서', '회계/예산/출장'] } }),
  mk(5, '미분류 도구', null, null),
] };
const fb = async (q) => localSearch(data, q, { minScore: 0.3 });
const okResp = (items, extra = {}) => async () => ({ ok: true, json: async () => ({ items, ...extra }) });
const run = (input, deps) => runSearch({ mode: 'task', ...input }, { data, fallbackSearch: fb, ...deps });

test('입력 2~500자 검증', () => {
  assert.equal(validateQuery('').reason, 'empty');
  assert.equal(validateQuery('   ').reason, 'empty');
  assert.equal(validateQuery('가').reason, 'short');
  assert.equal(validateQuery('가나').ok, true);
  assert.equal(validateQuery('가'.repeat(500)).ok, true);
  const long = validateQuery('가'.repeat(501));
  assert.equal(long.reason, 'long');
  assert.equal(long.length, 501);
  assert.equal(validateQuery(123).reason, 'empty');
});

test('입력 오류는 invalid, AI와 대체 검색을 부르지 않음', async () => {
  let called = 0;
  const r = await run({ query: '가' }, { aiUrl: 'https://x', fetchImpl: async () => { called++; } });
  assert.equal(r.status, 'invalid');
  assert.equal(called, 0);
});

test('AI 정상 응답은 ok, fallback false', async () => {
  const r = await run({ query: '출장비 계산' }, { aiUrl: 'https://x', fetchImpl: okResp([{ id: 1, reason: '출장 여비 계산', basisLines: [3, 3], level: 'high' }]) });
  assert.equal(r.status, 'ok');
  assert.equal(r.fallback, false);
  assert.deepEqual(r.items.map((i) => i.id), [1]);
  assert.equal(r.dataVersion, '2026-10-30-test0001');
});

test('AI 정상 무결과는 empty', async () => {
  const r = await run({ query: '출장비 계산' }, { aiUrl: 'https://x', fetchImpl: okResp([]) });
  assert.equal(r.status, 'empty');
  assert.equal(r.fallback, false);
});

test('주소 없으면 일반 검색 fallback, 결과 없으면 fallback-empty', async () => {
  const a = await run({ query: '출장 여비 계산' }, { aiUrl: undefined });
  assert.equal(a.status, 'fallback');
  assert.equal(a.fallback, true);
  assert.ok(a.items.length >= 1);
  const b = await run({ query: '전혀없는말뭉치' }, { aiUrl: '' });
  assert.equal(b.status, 'fallback-empty');
  assert.equal(b.fallback, true);
});

test('AI 실패(네트워크, HTTP 오류)는 fallback', async () => {
  const a = await run({ query: '출장 여비' }, { aiUrl: 'https://x', fetchImpl: async () => { throw new Error('net'); } });
  assert.equal(a.status, 'fallback');
  assert.equal(a.aiReason, 'ai-failed');
  const b = await run({ query: '출장 여비' }, { aiUrl: 'https://x', fetchImpl: async () => ({ ok: false, status: 500 }) });
  assert.equal(b.status, 'fallback');
});

test('AI와 대체 검색이 모두 실패하면 failed', async () => {
  const r = await runSearch({ query: '출장 여비', mode: 'task' }, { data, aiUrl: 'https://x', fetchImpl: async () => { throw new Error('x'); }, fallbackSearch: async () => { throw new Error('y'); } });
  assert.equal(r.status, 'failed');
  assert.equal(r.fallback, true);
  assert.deepEqual(r.items, []);
});

test('검증: 없는 id, 중복 id, 분야 조건 밖, 제외 id, 형식 오류는 전체 폐기', async () => {
  const bad = [
    [{ id: 999, reason: 'a' }],
    [{ id: 1, reason: 'a' }, { id: 1, reason: 'b' }],
    [{ id: 2, reason: 'a' }],
    [{ id: 1, reason: '' }],
    [{ id: 1, reason: 'a', level: 'top' }],
    [{ id: 1, reason: 'a', basisLines: [5, 2] }],
  ];
  for (const items of bad) {
    const r = await run({ query: '출장 여비', fields: ['회계/예산/출장'] }, { aiUrl: 'https://x', fetchImpl: okResp(items) });
    assert.equal(r.status, 'fallback', JSON.stringify(items));
    assert.match(r.aiReason, /^invalid-response/);
  }
  const ex = await run({ query: '출장 여비', excludeIds: [1] }, { aiUrl: 'https://x', fetchImpl: okResp([{ id: 1, reason: 'a' }]) });
  assert.equal(ex.status, 'fallback');
  assert.ok(!ex.items.some((i) => i.id === 1));
  assert.equal(validateAiResponse({ items: 'x' }, data).ok, false);
});

test('일반 검색 결과에도 분야와 제외 조건을 다시 적용', async () => {
  const leaky = async () => [{ id: 2, reason: 'x' }, { id: 1, reason: 'x' }, { id: 1, reason: 'x' }];
  const r = await runSearch({ query: '출장 여비', mode: 'task', fields: ['회계/예산/출장'], excludeIds: [3] }, { data, aiUrl: '', fallbackSearch: leaky });
  assert.deepEqual(r.items.map((i) => i.id), [1]);
});

test('분야 조건: 선택 안 하면 전체, 복수는 합집합, 미확정 토큰', () => {
  assert.equal(allowedCards(data).length, 5);
  assert.deepEqual(allowedCards(data, { fields: ['회계/예산/출장', '문서/보고서'] }).map((c) => c.id), [1, 2, 3]);
  assert.deepEqual(allowedCards(data, { fields: ['check'] }).map((c) => c.id), [4]);
  assert.deepEqual(allowedCards(data, { fields: ['unclassified'] }).map((c) => c.id), [5]);
  assert.equal(matchesFields(data.cards[0], []), true);
  assert.deepEqual(allowedCards(data, { excludeIds: [1, 2] }).map((c) => c.id), [3, 4, 5]);
});

test('자료 버전 불일치는 version-mismatch, 일반 검색 결과만', async () => {
  const r = await run({ query: '출장 여비' }, { aiUrl: 'https://x', fetchImpl: okResp([{ id: 1, reason: 'a' }], { dataVersion: '2026-11-20-other' }) });
  assert.equal(r.status, 'version-mismatch');
  assert.equal(r.fallback, true);
  assert.equal(r.aiDataVersion, '2026-11-20-other');
});

test('요청 번호: 마지막 요청만 최신', () => {
  const g = createLatestGuard();
  const a = g.next(), b = g.next();
  assert.equal(g.isLatest(a), false);
  assert.equal(g.isLatest(b), true);
  g.cancel();
  assert.equal(g.isLatest(b), false);
});

test('mode similar도 같은 흐름', async () => {
  const r = await runSearch({ query: '출장 여비 계산 기능', mode: 'similar' }, { data, aiUrl: 'https://x', fetchImpl: okResp([{ id: 3, reason: '비슷', level: 'medium' }]), fallbackSearch: fb });
  assert.equal(r.status, 'ok');
  assert.equal(r.items[0].level, 'medium');
});
