// node scripts/evaluate-search.mjs <search-queries.json> [cards.min.json]
// SEARCH_URL이 있으면 실제 AI 응답만 평가한다. 없으면 화면의 taskSearch를 실행한다.
import { readFile } from 'node:fs/promises';
import { createServer as createHttpServer } from 'node:http';
import { createServer } from 'vite';
import { runSearch } from '../src/api/searchCore.js';

const [queryFile, cardFile = 'public/data/cards.min.json'] = process.argv.slice(2);
if (!queryFile) throw new Error('평가 질의 JSON 경로가 필요합니다.');
const json = async file => JSON.parse(await readFile(file, 'utf8'));
const data = await json(cardFile);
const queries = await json(queryFile);
const endpoint = process.env.SEARCH_URL;
const originalFetch = globalThis.fetch;
let vite;
let fallbackSearch;
try {
  if (!endpoint) {
    const snapshot = await json('public/data/snapshot/index.json');
    globalThis.fetch = async url => {
      if (url === '/data/cards.min.json') return Response.json(data);
      if (url === '/data/snapshot/index.json') return Response.json(snapshot);
      throw new Error('예상하지 않은 자료 주소');
    };
    vite = await createServer({ configFile: false, server: { middlewareMode: true, hmr: { server: createHttpServer() } }, appType: 'custom' });
    const { taskSearch } = await vite.ssrLoadModule('/src/api/cards.js');
    fallbackSearch = query => taskSearch(query, 50);
  }
  let passed = 0;
  console.log('자료 ' + data.meta.version + ' / ' + (endpoint ? 'AI 추천' : '일반 대체 검색'));
  console.log('| 질의 | 정답 ID | 상위 5개 ID | 정답 순위 |');
  console.log('|---|---|---|---|');
  for (const { id, query, expectedProjectIds } of queries) {
    const result = await runSearch({ query, mode: 'task' }, { data, aiUrl: endpoint, fallbackSearch });
    if (endpoint && !['ok', 'empty'].includes(result.status)) throw new Error(id + ': ' + (result.aiReason || result.status));
    const ids = result.items.slice(0, 5).map(hit => hit.id);
    const rank = ids.findIndex(i => expectedProjectIds.includes(i)) + 1;
    if (rank) passed++;
    console.log('| ' + [id, expectedProjectIds.join(', '), ids.join(', '), rank || '미포함'].join(' | ') + ' |');
  }
  console.log('\n상위 5개 적중 ' + passed + '/' + queries.length);
} finally {
  globalThis.fetch = originalFetch;
  await vite?.close();
}
