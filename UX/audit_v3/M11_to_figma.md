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

- 파일 표 h30 **정정**: 코드40 유지 요청은 취소한다. 실제 행42에 맞춰 코드 수정 완료. Figma도42와 fixture root35/src44+상위1개로 다시 만든다. 최종 root1511/src1931, mobile1470/1890. 코드/Figma 둘 다 대상이다.
- section-title 문구43: copy/work/gl 최신 문구와 API 기준. 활성 브랜치 제목을 새 브랜치 CTA로 대체하지 않는다.
- language-bar gap20: Figma2→4. D-16의 gap/padding4배수와 선 두께2 예외를 구분한다. radius20은 코드8로 처리한다.

## 실측 갱신 전달

- 모바일 commit-bar: 실제360은48, 제목/작성자 데스크톱 영역은 숨김. hash/시간/설명토글/이력 구조. 코드48 구현 완료, 기존Figma66을48로. 데스크톱66은 유지한다.
-1024 project-info: 실제 전체 폭으로 제목 아래. D21에 '1024 이하 아래' 직접 문구는 없으나 공공 깃랩 배치 원칙과 실측에 따라 코드 KRDS1279/1280 경계로 정리했다. 사용자 좌우여백은 유지하며 Figma도1024 전체폭으로 맞춘다.
