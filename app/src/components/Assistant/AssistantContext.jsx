// Figma: 호출부 전달 / 내부 부품 → Assistant/Panel 상태(열림, 차례 목록)
// UX/23 3-10, 2-3: 업무 도우미 공용 상태. 같은 탭 안 화면 이동에도 대화 유지(React 상태만), 새로고침이면 사라짐(저장소, 서버 전송 없음)
// 검색은 G-02와 같은 api/search.js search() 하나. 요청 번호는 패널 전용 guard로 따로 센다
import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import { search, createLatestGuard, validateQuery } from '../../api/search';

const Ctx = createContext(null);
const TURN_MAX = 20;
let seq = 0;

export function AssistantProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [turns, setTurns] = useState([]);
  const [draft, setDraft] = useState({ text: '', mode: 'task', nonce: 0 });
  const guard = useRef(createLatestGuard());
  const opener = useRef(null);
  const busyId = useRef(null);

  const patch = (id, p) => setTurns((list) => list.map((t) => (t.id === id ? { ...t, ...p } : t)));

  const openPanel = useCallback((from) => {
    opener.current = from || document.activeElement;
    setOpen(true);
  }, []);
  const closePanel = useCallback(() => {
    setOpen(false);
    const o = opener.current;
    setTimeout(() => (o && document.contains(o) ? o.focus?.() : document.getElementById('main')?.focus({ preventScroll: true })), 0);
  }, []);

  /** 처리 중 차례 취소(Esc, 새 질문). 결과가 와도 버린다 */
  const cancel = useCallback(() => {
    if (!busyId.current) return;
    guard.current.cancel();
    patch(busyId.current, { status: 'canceled' });
    busyId.current = null;
  }, []);

  /** 질문 하나 실행. reuse가 있으면 요청 없이 그 결과를 차례로(G-02 도우미로 이어 찾기). 입력 오류면 차례를 만들지 않고 오류 반환 */
  const ask = useCallback(async ({ query, mode = 'task', fields = [], excludeIds = [], label, reuse = null, baseMissing = false }) => {
    const v = validateQuery(query);
    if (!v.ok && !baseMissing) return { error: v.reason, length: v.length };
    if (busyId.current) cancel();
    const id = ++seq;
    const turn = { id, q: label || v.query || query, query: v.query, mode, fields, excludeIds, status: 'thinking', res: null };
    if (baseMissing) Object.assign(turn, { status: 'base-missing' });
    if (reuse) Object.assign(turn, { status: reuse.status, res: reuse });
    setTurns((list) => [...list, turn].slice(-TURN_MAX));
    setOpen(true);
    if (reuse || baseMissing) return { id };
    busyId.current = id;
    const res = await search({ query: v.query, mode, fields, excludeIds }, { guard: guard.current });
    if (res.stale || busyId.current !== id) return { id, stale: true };
    busyId.current = null;
    patch(id, { status: res.status, res });
    return { id };
  }, [cancel]);

  const reset = useCallback(() => { cancel(); setTurns([]); }, [cancel]);
  /** A-07 웹에서 같은 질문: 입력칸 채움과 모드 맞춤, 전송은 사용자 */
  const prefill = useCallback((text, mode = 'task') => {
    opener.current = document.activeElement;
    setDraft((d) => ({ text, mode, nonce: d.nonce + 1 }));
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ open, turns, draft, openPanel, closePanel, ask, cancel, reset, prefill, busy: () => !!busyId.current }), [open, turns, draft, openPanel, closePanel, ask, cancel, reset, prefill]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAssistant() {
  return useContext(Ctx);
}
