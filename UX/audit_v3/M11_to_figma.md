# M-11 Figma 전달

신규192행 중72행. G-12만 다른 색 모드로 재구성하지 말고 D-21 공통 틀/목록 구분선과 맞춘다. 나머지 신규 x/w120행은 코드 공통 범위 열 수정 대상이다.

|원인|건수|조치/근거|
|---|---:|---|
|color · profile-event · stroke · Figma|60|D-21 공통 목록 구분선 --layout-divider(gray-70), 동일 mode로 재내보내기; UX/gitlab_compare/v2/measure.md 색 층/목록 구분선; D-21 공통 틀; UX/17|
|color · topbar · fill · Figma|3|D-21 shell/panel/search 색. G-12만 다른 모드/공통색을 쓰지 않음; UX/gitlab_compare/v2/measure.md 색 층/목록 구분선; D-21 공통 틀; UX/17|
|color · topbar · text · Figma|2|D-21 shell/panel/search 색. G-12만 다른 모드/공통색을 쓰지 않음; UX/gitlab_compare/v2/measure.md 색 층/목록 구분선; D-21 공통 틀; UX/17|
|only-code · global-search ·  · Figma|4|기존 D-21 상단 검색 조작 유지. Figma 이름/모바일 표시 복구; UX/gitlab_compare/v2/measure.md 색 층/목록 구분선; D-21 공통 틀; UX/17|
|color · global-search · fill · Figma|1|D-21 shell/panel/search 색. G-12만 다른 모드/공통색을 쓰지 않음; UX/gitlab_compare/v2/measure.md 색 층/목록 구분선; D-21 공통 틀; UX/17|
|color · global-search · stroke · Figma|1|D-21 shell/panel/search 색. G-12만 다른 모드/공통색을 쓰지 않음; UX/gitlab_compare/v2/measure.md 색 층/목록 구분선; D-21 공통 틀; UX/17|
|color · gitlab-sidebar · fill · Figma|1|D-21 shell/panel/search 색. G-12만 다른 모드/공통색을 쓰지 않음; UX/gitlab_compare/v2/measure.md 색 층/목록 구분선; D-21 공통 틀; UX/17|

## 추가 전달

- 파일 표 h30: 코드40 행 유지. root35+머리1은1441, src44+상위1+머리1은1841. 모바일1400/1800. v3/README의 D-16 42→40과 sample/kordoc 실제 항목 수가 근거다. Figma의42 피치/옛 행 수를 고친다.
- section-title 문구43: copy/work/gl 최신 문구와 API 기준. 활성 브랜치 제목을 새 브랜치 CTA로 대체하지 않는다.
- language-bar gap20: Figma2→4. D-16의 gap/padding4배수와 선 두께2 예외를 구분한다. radius20은 코드8로 처리한다.
