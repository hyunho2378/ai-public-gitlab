# M-11 신규 판정

D21 신규192행 전부를 공식 M11 원장1,812행에 연결했다. 코드120/Figma72. 과거 큐 건수를 합하지 않는다. 판정 완료와 코드 수정 완료는 구분한다.

- 실제 캡처/정량 명세 → D-xx → Figma 기준을 유지한다.
- search_breakpoints.md는 열 존재 여부/결과 시작 위치를 기록하지만 D-21 여백을 적용한 범위 열의 고정 너비는 정하지 않았다. 신규 x/w120행은 공통 범위 열256→248로 판정했다. 화면별 좌표 보정 없음.
- G-12 색은 다른 페이지와 같은 D-21 모드/토큰을 적용한다. 새 활동 목록60행도 공통 목록 구분선 gray-70을 유지한다. Figma var 이름이 같아도 모드/해석한 hex가 다를 수 있다. 코드만 밝은 색으로 덮지 않는다.

|원인·고칠 쪽|건수|정답|근거|
|---|---:|---|---|
|color · profile-event · stroke · Figma|60|D-21 공통 목록 구분선 --layout-divider(gray-70), 동일 mode로 재내보내기|UX/gitlab_compare/v2/measure.md 색 층/목록 구분선; D-21 공통 틀; UX/17|
|box · project-row · x · 코드|48|312 / 392 / 632|capture_map.md: 범위 열 너비의 직접 정량 명세 없음 → Figma. D-21 좌우 여백은 유지, 공통 범위 열256→248|
|box · project-row · w · 코드|48|672 / 928|capture_map.md: 범위 열 너비의 직접 정량 명세 없음 → Figma. D-21 좌우 여백은 유지, 공통 범위 열256→248|
|box · results · x · 코드|6|312 / 392 / 632|capture_map.md: 범위 열 너비의 직접 정량 명세 없음 → Figma. D-21 좌우 여백은 유지, 공통 범위 열256→248|
|box · results · w · 코드|6|672 / 928|capture_map.md: 범위 열 너비의 직접 정량 명세 없음 → Figma. D-21 좌우 여백은 유지, 공통 범위 열256→248|
|box · task-search · x · 코드|6|312 / 392 / 632|capture_map.md: 범위 열 너비의 직접 정량 명세 없음 → Figma. D-21 좌우 여백은 유지, 공통 범위 열256→248|
|box · task-search · w · 코드|6|672 / 928|capture_map.md: 범위 열 너비의 직접 정량 명세 없음 → Figma. D-21 좌우 여백은 유지, 공통 범위 열256→248|
|color · topbar · fill · Figma|3|D-21 shell/panel/search 색. G-12만 다른 모드/공통색을 쓰지 않음|UX/gitlab_compare/v2/measure.md 색 층/목록 구분선; D-21 공통 틀; UX/17|
|color · topbar · text · Figma|2|D-21 shell/panel/search 색. G-12만 다른 모드/공통색을 쓰지 않음|UX/gitlab_compare/v2/measure.md 색 층/목록 구분선; D-21 공통 틀; UX/17|
|only-code · global-search ·  · Figma|4|기존 D-21 상단 검색 조작 유지. Figma 이름/모바일 표시 복구|UX/gitlab_compare/v2/measure.md 색 층/목록 구분선; D-21 공통 틀; UX/17|
|color · global-search · fill · Figma|1|D-21 shell/panel/search 색. G-12만 다른 모드/공통색을 쓰지 않음|UX/gitlab_compare/v2/measure.md 색 층/목록 구분선; D-21 공통 틀; UX/17|
|color · global-search · stroke · Figma|1|D-21 shell/panel/search 색. G-12만 다른 모드/공통색을 쓰지 않음|UX/gitlab_compare/v2/measure.md 색 층/목록 구분선; D-21 공통 틀; UX/17|
|color · gitlab-sidebar · fill · Figma|1|D-21 shell/panel/search 색. G-12만 다른 모드/공통색을 쓰지 않음|UX/gitlab_compare/v2/measure.md 색 층/목록 구분선; D-21 공통 틀; UX/17|

## 큰 원인 재판정

- file-table h30: Figma. 원문 v3 `프로젝트 홈 |1440|파일 표 행|42|40|-2|D-16(4의 배수)`. Figma 첫 name 텍스트 y368→410→452는42 피치다. 코드 행40과 전체 실제 fixture 항목을 유지한다. root35개+thead1은1441, src44개+상위1+thead1은1841. 모바일은1400/1800. 높이를 임의로 잘라 맞추지 않는다.
- section-title text43: Figma. copy/work/gl의 최신 문구를 반영하고 제목/새 브랜치 CTA의 이름표 역할을 분리한다. R25 `사용된`을 `사용 된`으로 바꾸지 않는다.
- language-bar shape40: 간격20은 Figma gap2→4(D-16). 반경20은 코드0→8(최신 Figma). 선 두께2의 예외를 gap2 허용으로 해석하지 않는다.
