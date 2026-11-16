import test from 'node:test';
import assert from 'node:assert/strict';
import handler, { candidates } from '../api/search.js';
import data from '../public/data/cards.min.json' with { type: 'json' };

test('후보 설명은 하는 일, 설명 순서로 고르며 빈 카드도 유지한다', () => {
  const rows = candidates([
    { id: 1, oneLine: { v: ' 기능 ' }, desc: '설명' },
    { id: 2, oneLine: { v: ' ' }, desc: ' 원래 설명 ' },
    { id: 3, oneLine: { v: null } },
  ]);
  assert.deepEqual(rows.map(r => r.summary), ['기능', '원래 설명', '']);
});

test('함수에서 분야와 제외 ID를 적용하고 비교 이유와 차이를 전달한다', async t => {
  const [first, second] = data.cards.filter(c => c.fields?.v === data.fields[0].name);
  const input = { query: '보고서 작성', mode: 'similar', fields: [first.fields.v], excludeIds: [second.id] };
  const res = { setHeader() {}, status(n) { this.code = n; return this; }, json(body) { this.body = body; } };
  for (const [key, value] of Object.entries({ SEARCH_MODEL: 'test', SEARCH_API_KEY: 'test', SEARCH_COMPLETIONS_URL: 'https://example.invalid' })) {
    const old = process.env[key];
    process.env[key] = value;
    t.after(() => { if (old === undefined) delete process.env[key]; else process.env[key] = old; });
  }
  const fetch = t.mock.method(globalThis, 'fetch', async (_url, init) => {
    const sent = JSON.parse(JSON.parse(init.body).messages[1].content).candidates;
    assert.ok(sent.some(c => c.id === first.id));
    assert.ok(sent.every(c => c.id !== second.id && data.cards.find(row => row.id === c.id).fields.v === first.fields.v));
    const items = [{ id: first.id, level: 'medium', reason: '보고서 작성', difference: '입력 자료가 다름' }];
    return Response.json({ choices: [{ message: { content: JSON.stringify({ items }) } }] });
  });
  await handler({ method: 'POST', headers: {}, body: input }, res);
  assert.equal(res.code, 200);
  assert.equal(res.body.items[0].difference, '입력 자료가 다름');
  assert.equal(res.body.dataVersion, data.meta.version);
  await handler({ method: 'POST', headers: {}, body: { ...input, dataVersion: 'old' } }, res);
  assert.deepEqual(res.body.items, []);
  assert.equal(fetch.mock.callCount(), 1);
});
