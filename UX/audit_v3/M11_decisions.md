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

- file-table h30: **정정, 둘 다**. 위의40 유지 판정을 취소한다. 실제 파일 행42가 정답이며 코드 tbody40→42를 반영했다. 머리40은 유지한다. fixture 개수를 보존한 높이는 root1511/src1931, mobile1470/1890이다. Figma도 같은 행42와 같은 행 수로 다시 만든다. 근거: D-21 6장과 원본 감사02_프로젝트홈_파일.md20행.
- section-title text43: Figma. copy/work/gl의 최신 문구를 반영하고 제목/새 브랜치 CTA의 이름표 역할을 분리한다. R25 `사용된`을 `사용 된`으로 바꾸지 않는다.
- language-bar shape40: 간격20은 Figma gap2→4(D-16). 반경20은 코드0→8(최신 Figma). 선 두께2의 예외를 gap2 허용으로 해석하지 않는다.
