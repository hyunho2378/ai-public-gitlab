# M-8 실행 기록

## 설명 원문 절단

- API `https://gitlab.aigov.go.kr/api/v4/projects/903`, `/1140`을1.1초 간격으로 직접 읽었다. 스냅샷과 설명 원문이 같다. 스냅샷 갱신은 필요하지 않다.
- 전: `.split(/\r?\n/)[0]`로 두 번째 문장 이후를 버렸다.
- 후: 줄바꿈을 공백으로 연결해 원문 전체를 보존한다. 영어 병기 정리와 앞 분류 표기 제거는 기존 규칙을 유지한다. 2줄 말줄임은 CSS에서만 처리한다.
- 1440 안정 상자: Watson 높이71→91. HWP99→99(문구는 전체 복원). 360: Watson139→139, HWP225→245. 미해소 크기를 강제로 맞추지 않았다.
- 전후 JSON: 세션tmp M8-description-before.json / M8-description-after.json. after1440은 폭 전환 과도 상태이므로 M8-description-1440-stable.json이 최종 증거다.
- 캡처: M8-description-1440-stable.png / M8-description-after-360.png.

## 상태 탭 공통화

- 프로젝트/그룹에 복제된 KRDS 탭을 components/Navigation/ProjectStateTabs.jsx 한 곳으로 묶었다. 기능·마크업·CSS 배치 유지, data-figma만 tabs로 일치시켰다.
- 프로젝트1440 탭 상자는 x296/y173/w1073/h48로 기존과 같다. 그룹1440 x296/y211/w1073/h48. 360은 각각 x16/y165/w313/h48, x16/y225/w313/h48.
- 기존 검색 버튼/검색 폼에 filter-search/search 이름표를 연결했다. 새 UI를 추가하지 않았다. 측정 매핑은 code_plan/figma_name_map.json에 기록했다.
- 두 화면 두 폭 가로 넘침0, 탭 수2, 검색 이름표1.

## 회귀

- description 5개 단위 검사 PASS.
- audit:code PASS(문구, 사이드바, 로그인 로고 포함).
- login-inspect: bad=[], cyDiff0. 로그인 코드 변경 없음.
- D-xx, 토큰 기준, 판정/허용 규칙 변경 없음.
- 후보 수와 재측정 해소 수는 구분한다. 코드108개 후보에 공통 원인을 반영했고 매핑156개는 기존 경로/이름표 수정 상태다. 전체 원장 재측정 전이다.

## README 공통 안쪽과 간격 (7150bbd)

- 기존 원문(code.css148): `.rb-readme-box { display: flex; flex-direction: column; gap: 0; padding: 0; … }`,149의 head 안쪽8/12,152의 body 안쪽20이었다.
- 후: root에서 안쪽12/12/16/12, gap12, radius0을 관리하고 head/body/toc 안쪽을0으로 통일했다. Figma의 아래 안쪽15는 D-16에 따라16으로 유지한다. D-xx 수정 없이 Figma 쪽의1 차이를 남긴다.
- 원인: 원장 R-01 README shape30행의 중복 안쪽과 모서리/간격. 높이를 상수로 고정하지 않았다.
- 1440 실제 상자: x296/y1800/w753, h5507.219→5479.25.360: x16/y2736.5/w313, h6335.086→6357.609. 문서 줄바꿈 변화이며 비율/고정 높이를 강제하지 않았다.

## 필터 아이콘과 붙은 조작 (28e1b9a)

- 기존 원문(glWork.css7): `.gl-work-bar { … gap: var(--krds-gap-3); … }`. 실제 clear/search 사이가8이었다. IconButton 기본 radius8을 그대로 상속했다.
- 후: 공통 필터 bar column-gap0, 필터 안 IconButton radius0. 아이콘32칸과 초점 처리는 유지한다.
- 원인: 원장 R-11·R-13 필터 shape40행. clear/search는 Figma처럼 바로 붙인다.360에서 검색 x316.328→284.328, clear276.328→252.328.1440은 search1240.070 유지, clear1200.070→1208.070.
- R-13 display/settings/expand는1440·360 모두 radius8→0. 글자/기능/폭은 바꾸지 않았다.

## MR 제목줄 공통 정렬 (5959a6e)

- 기존 원문(glMrDetail.css46): `.gl-mr-titlerow { display: flex; align-items: flex-start; justify-content: space-between; gap: var(--krds-gap-5); }`.
- 후: align-items:center, gap8. 제목의 flex/min-width/white-space를 공통 MR 머리 부품 안에서 정해 모바일 강제 말줄임을 해제한다. 버튼은 축소하지 않는다.
- 원인: R-17 shape·머리 높이·코드 버튼 y22행. Figma와 코드 제목 원문은 모두 `Add MCP Toplist rank badge`였다.
- 1440 머리 h48 유지, 코드 단추 y121→125.360 머리 h48→72, 단추 y121→137. Figma의 y125/137과 같다. 단추 실측 폭63.930은 자연 글자 폭이므로62로 강제하지 않았다.

## 추가 제보 R-26 현재 항목

- `projectMenu`에는 이미 `/projects/${id}/settings`가 있다. `SideLink`의 NavLink와 active 스타일도 있다.
- `auth=Signed-in&role=developer` 실제 확인: 현재 링크 `/projects/150/settings`, aria-current=page, font-weight700, ::before width2px.
- Signed-in만 지정하면 useAuth 기본 role은 viewer라 D-10에 따라 설정 항목이 없다. role 확인 없이 Guest/viewer에 설정 항목을 추가하지 않았다. 이 제보는 역할 조건 대조가 필요하다.

## 회귀와 후보 상태 (이번 배치)

- 네 경로(R-01/R-11/R-13/R-17)×1440/360에서 유한 전환 애니메이션 종료 후 최종 측정. 가로 넘침0.
- 모든 측정 전에 snapshot으로 화면을 읽었다. 첫 임시 측정은 전환 중 값이 있어 최종 증거로 쓰지 않는다.
- 최종: 세션tmp M8-shared-final.json, 전: M8-shared-before.json / M8-filter-before.json / M8-mr-before.json. 캡처: M8-final-150-360.png / M8-final-issues-360.png / M8-final-boards-360.png / M8-final-56-360.png.
- audit:code PASS. build PASS(기존 큰 청크 경고 유지). 로그인1440 bad=[]/cyDiff0,360 bad=[]/cyDiff415.8(좁은 화면 세로 배치, 검사 예외와 기존값 동일). M8-shared-login.json.
- 로그인, D-xx, 판정/허용 검사 규칙 변경 없음. 브랜치 feature/profile-and-dashboard-link만 변경했다.
- 이번 후보92(README30+필터40+MR22), 기존108과 합200. 미수정831. 공식 재측정 해소 건수는 아직 주장하지 않는다.200건 부모 알림 발송 완료.
- 현재 브라우저는 고전 스크롤바15 폭을 차지해1440 내부1073,360 내부313이다. 종전 원장의1088/328과15 차이가 있으므로 x/w를 억지로 보정하지 않았다. 공식 재측정 환경과 함께 대조해야 한다.
