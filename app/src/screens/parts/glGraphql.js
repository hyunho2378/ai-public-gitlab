// 공공 깃랩 공개 GraphQL(비로그인, access-control-allow-origin:*). REST가 401인 멤버, 라벨, 보드, 작업, 마일스톤, 스니펫과 머지 리퀘스트 부가 정보를 읽는다.
// 읽기 질의만 보내고 토큰은 보내지 않는다. 응답이 없으면 SNAPSHOT_MISSING 오류를 던져 Status가 '저장된 자료에 없습니다'를 그린다.
const URL_GQL = 'https://gitlab.aigov.go.kr/api/graphql';
const cache = new Map();

// 고정 저장본(app/public/data/snapshot/graphql/kordoc.json, scripts/snapshot/fetch-graphql.mjs): 질의 이름 + 변수로 찾는다.
// 개발 ?fixture=kordoc(측정)에서는 먼저 쓰고, 그 밖에는 공공 깃랩이 답하지 않을 때만 쓴다(점검 중 POST 405, 2026. 11. 13.)
let pinnedP = null;
const pinned = () => (pinnedP ||= fetch(`${import.meta.env.BASE_URL || '/'}data/snapshot/graphql/kordoc.json`).then((r) => (r.ok ? r.json() : null)).catch(() => null));
const fixtureOn = () => import.meta.env.DEV && new URLSearchParams(window.location.search).get('fixture') === 'kordoc';
async function fromPinned(query, variables) {
  const name = Object.keys(Q).find((k) => Q[k] === query);
  const store = name ? await pinned() : null;
  return store?.items?.[`${name}:${JSON.stringify(variables)}`] || null;
}

export async function gql(query, variables = {}) {
  const key = query + JSON.stringify(variables);
  if (cache.has(key)) return cache.get(key);
  const run = (async () => {
    if (fixtureOn()) { const hit = await fromPinned(query, variables); if (hit) return hit; }
    try { return await live(query, variables); } catch (e) { const hit = await fromPinned(query, variables); if (hit) return hit; throw e; }
  })();
  cache.set(key, run);
  run.catch(() => cache.delete(key));
  return run;
}

async function live(query, variables) {
  {
    let r;
    try {
      r = await fetch(URL_GQL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ query, variables }), signal: AbortSignal.timeout(10000) });
    } catch {
      throw Object.assign(new Error('저장된 자료에 없습니다'), { status: 502, code: 'SNAPSHOT_MISSING' });
    }
    if (!r.ok) throw Object.assign(new Error('저장된 자료에 없습니다'), { status: r.status, code: 'SNAPSHOT_MISSING' });
    const j = await r.json();
    if (j.errors?.length || !j.data) throw Object.assign(new Error(j.errors?.[0]?.message || '자료 없음'), { status: 502, code: 'SNAPSHOT_MISSING' });
    return j.data;
  }
}

export const Q = {
  issueNotes: `query($p:ID!,$i:String!){project(fullPath:$p){issue(iid:$i){discussions(first:30){nodes{notes{nodes{body createdAt system author{name username avatarUrl}}}}}}}}`,
  labels: `query($p:ID!){project(fullPath:$p){labels(first:100){nodes{title color textColor description}}}}`,
  board: `query($p:ID!){project(fullPath:$p){boards(first:5){nodes{name}} open:issues(first:20,state:opened){count nodes{iid title webUrl}} closed:issues(first:20,state:closed){count nodes{iid title webUrl}}}}`,
  milestones: `query($p:ID!){project(fullPath:$p){milestones(first:50){nodes{title state dueDate startDate description}}}}`,
  snippets: `query($p:ID!){project(fullPath:$p){snippets(first:50){nodes{title fileName createdAt}}}}`,
  jobs: `query($p:ID!){project(fullPath:$p){jobs(first:100){nodes{id name status stage{name} refName shortSha createdAt allowFailure pipeline{iid}}}}}`,
  mr: `query($p:ID!,$i:String!){project(fullPath:$p){mergeRequest(iid:$i){iid title state createdAt mergedAt closedAt sourceBranch targetBranch commitCount
    author{name username avatarUrl}
    assignees{nodes{name username avatarUrl}} reviewers{nodes{name username avatarUrl}}
    labels{nodes{title color textColor}} milestone{title}
    participants{nodes{name username avatarUrl}}
    approved approvalsRequired approvedBy{nodes{name}}
    timeEstimate totalTimeSpent
    mergedBy:mergeUser{name username}
    discussions(first:30){nodes{notes{nodes{body createdAt system author{name username avatarUrl}}}}}
  }}}`,
};
