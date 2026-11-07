# M-10 신규와 요청 재판정

신규 D21 111 + C 46 =157행, 요청 재확인 project-row y64 + sidebar-nav w40 =104행. 합261행을 원장에 일대일 연결했다. 판정 완료와 코드 완료는 구분한다.

- 같은 기준: 직접 캡처/정량 기록 → D-xx → Figma. measured_full은 로컬 코드 값이다.
- sidebar-nav40은 UX/17이 정답.224에서 실제 막대폭11을 뺀213을 유지한다. 코드의 사이드바 폭/이름표를 고치지 않는다.
- project-row y64는 G-01 36과 A-01 28을 분리한다. 탐색은 필터 뒤8이 실측 정답인데 Figma는12다. 모바일3줄→2줄은 별도 코드 결함이다. A-01은 taskfind 공통 안쪽/간격 차이로 판정했다.
- 합: Figma141, 코드112, 측정 매핑 오류8.

|원인·고칠 쪽|행 수|정답/조치|근거|
|---|---:|---|---|
|text · language-bar ·  · Figma|20|"비율 글자는 범례에 두고 실제8 높이 막대 이름표와 분리. API값89.4/7.2/1.7/1.7…를 같은 자료로 재생성"|ProjectInfo.jsx LangBar; UX/07; measured_full.json|
|shape · gl-tabs ·  · 코드|20|"간격 0→8" / "간격 24→8"|capture_map.md; 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|color · group-row · stroke · Figma|20|"--layout-divider gray-70. 검정으로 바꾸지 않음"|UX/gitlab_compare/v2/measure.md: 목록 구분선 gray-70|
|color · filters · fill · 코드|12|"#1e2124 color/layout/raised-bg"|capture_map.md; 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|color · filter-search · stroke · 코드|10|"#33363d color/layout/panel-border"|capture_map.md; 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|color · search-filter · fill · 코드|8|"#33363d color/layout/btn-fill-bg"|capture_map.md; 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|color · search · text · 코드|8|"#f4f5f6 color/text/basic"|capture_map.md; 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|only-figma · global-search ·  · 측정 매핑 오류|8|"G-04 기존 rb-x-searchbtn. 전역 검색#2로 이름 붙인 Figma 이름 수정. UI 추가 금지"|P11_Organizations.jsx; 공통 상단 바 global-search는 별도 존재|
|color · section-title · text · Figma|4|"--krds-color-text-basic"|D-15; v2/measure.md 제목 글자|
|color · page-head · text · Figma|1|"--krds-color-text-basic"|D-15; v2/measure.md 제목 글자|
|color · gl-filter · text · 코드|20|"#cdd1d5 color/text/subtle"|capture_map.md; 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|color · filter-clear · stroke · Figma|10|"KRDS text IconButton의 선0 유지. 회색 선을 새로 추가하지 않음"|IconButton.jsx; D-21; 기존 필터 테두리 안 지우기 조작|
|text · profile-activity ·  · Figma|10|"동일 MR notes API 원문/시각으로 재생성. 활동을 임의로 창작하지 않음"|UX/07 5·10·11·13절; P20_MergeRequests notes|
|box · profile-activity · w · 코드|6|944 / 772 / 884|capture_map.md; 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|box · project-row · y · 코드|28|437 / 528 / 599 / 320 / 397 / 509|Figma A-01; rb-taskfind 아래8 제거/compact 행 사이2→0/results gap8→12의 공통 원인|
|box · sidebar-nav · w · Figma|40|"224 − 실제 스크롤바폭. 현재213=224−11; 코드 유지"|UX/17 1절 스크롤; D-16; sidebar-spec.json|
|box · project-row · y · Figma|36|"실측 필터→첫 행8 간격. 모바일 필터2줄 복구 후 같은 자료로 재생성"|UX/gitlab_compare/v2/measure.md: 필터→첫 행8; v3: 모바일 입력 먼저/정렬 다음|
