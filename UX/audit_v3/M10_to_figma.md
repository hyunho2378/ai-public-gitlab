# M-10 Figma 전달

sidebar-nav40은 UX/17 224−실제막대폭(현재11)=213. 코드 유지. project-row y는 G-01 36만 Figma이며 A-01 28은 코드 공통 원인이다. main 이름표/로그인/D-xx 변경 없음.

|원인|행 수|근거/조치|
|---|---:|---|
|text · language-bar ·  · Figma|20|"비율 글자는 범례에 두고 실제8 높이 막대 이름표와 분리. API값89.4/7.2/1.7/1.7…를 같은 자료로 재생성"; ProjectInfo.jsx LangBar; UX/07; measured_full.json|
|color · group-row · stroke · Figma|20|"--layout-divider gray-70. 검정으로 바꾸지 않음"; UX/gitlab_compare/v2/measure.md: 목록 구분선 gray-70|
|color · section-title · text · Figma|4|"--krds-color-text-basic"; D-15; v2/measure.md 제목 글자|
|color · page-head · text · Figma|1|"--krds-color-text-basic"; D-15; v2/measure.md 제목 글자|
|color · filter-clear · stroke · Figma|10|"KRDS text IconButton의 선0 유지. 회색 선을 새로 추가하지 않음"; IconButton.jsx; D-21; 기존 필터 테두리 안 지우기 조작|
|text · profile-activity ·  · Figma|10|"동일 MR notes API 원문/시각으로 재생성. 활동을 임의로 창작하지 않음"; UX/07 5·10·11·13절; P20_MergeRequests notes|
|box · sidebar-nav · w · Figma|40|"224 − 실제 스크롤바폭. 현재213=224−11; 코드 유지"; UX/17 1절 스크롤; D-16; sidebar-spec.json|
|box · project-row · y · Figma|36|"실측 필터→첫 행8 간격. 모바일 필터2줄 복구 후 같은 자료로 재생성"; UX/gitlab_compare/v2/measure.md: 필터→첫 행8; v3: 모바일 입력 먼저/정렬 다음|
