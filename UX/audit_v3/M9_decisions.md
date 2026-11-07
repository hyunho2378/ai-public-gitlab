# M-9 신규 원인 판정

보고서 신규 D21 921 + C 171 = 1,092행을 원장과 일대일 연결했다. 보고서73개 묶음, 고칠 쪽 판정과 수정 완료는 구분한다. 원문 값·화면·폭·인증은 M9_decision_rows.json에 보존한다.

- 기준: capture_map.md의 직접 캡처/정량 기록 → D-xx → Figma. 로컬 measured_full.json을 공공 깃랩 실측으로 쓰지 않는다.
- main y 510은 이번 신규1,092행 밖의 공통 export 문제다. Figma 담당이 복구한다. 코드 main 이름표는 그대로 둔다.
- A-04는 UX/05·PRD의 의견 화면이다. /projects/150/feedback으로 복원했다. 예전 홈 측정값에 맞춰 의견 화면을 고치지 않는다.
- 상태별 합: Figma 424, 코드 485, 측정 매핑 오류 183.
- 그룹 행 폭200은 D-16의 공통 내용 폭을 유지한다. Figma의2 차이를 화면별1 여백/새 테두리로 맞추지 않는다. 직접 원본 정량값이 추가되면 해당 행만 재판정한다.

|원인·속성·고칠 쪽|행 수|정답/조치|근거|
|---|---:|---|---|
|box · group-row · w · Figma|200|944 / 1088 / 1200 / 328 / 704|D-16 4배수; D-21 본문 폭. Figma 942/1086/1198은 공통 내용 폭에서2 감소한 값. 화면별1 보정/새 테두리 금지|
|text · group-row ·  · Figma|140|동일 API 자료/관찰시각으로 다시 생성. 미확인 수를0으로 채우지 않음|UX/07 5·10·11·13절; P11_Organizations useCounts; P33_Profile ago|
|shape · language-bar ·  · 코드|40|모서리 4→0 / 간격 2→4|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|shape · language-bar ·  · 측정 매핑 오류|20|/projects/150/feedback으로 재측정. 의견 폼 Figma 재작성 뒤 대조|사용자 M-9 지시; UX/05; PRD; code_plan/figma_name_map.json|
|only-figma · profile-event ·  · 측정 매핑 오류|40|기존 profile-* DOM이 API 완료 뒤 나타나는지 재측정. 새 UI를 만들지 않음|app/src/screens/P33_Profile.jsx data-figma:profile-head/info/activity/event|
|box · group-row · y · 코드|38|339 / 408 / 477 / 546 / 353 / 458 / 563|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|box · language-bar · y · 코드|20|299 / 381 / 319 / 389|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|box · language-bar · y · 측정 매핑 오류|10|/projects/150/feedback으로 재측정. 의견 폼 Figma 재작성 뒤 대조|사용자 M-9 지시; UX/05; PRD; code_plan/figma_name_map.json|
|box · language-bar · h · 측정 매핑 오류|30|언어 범례가 아닌 실제 막대 .rb-lang-bar(8)를 측정 / /projects/150/feedback으로 재측정. 의견 폼 Figma 재작성 뒤 대조|app/src/components/Layout/ProjectInfo.jsx LangBar; 사용자 M-9 지시; UX/05; PRD; code_plan/figma_name_map.json|
|shape · search ·  · 코드|30|모서리 4→8 / 안쪽 0 12 0 12→0 0 0 0 / 간격 8→0|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|box · content-panel · y · 측정 매핑 오류|8|/projects/150/feedback으로 재측정. 의견 폼 Figma 재작성 뒤 대조|사용자 M-9 지시; UX/05; PRD; code_plan/figma_name_map.json|
|box · content-panel · y · Figma|15|D-21 공통 틀의 현재 코드 y. main 이름표 변경 금지|D-21; UX/gitlab_compare/v2/measure.md; capture_map.md|
|box · breadcrumb · y · 측정 매핑 오류|8|/projects/150/feedback으로 재측정. 의견 폼 Figma 재작성 뒤 대조|사용자 M-9 지시; UX/05; PRD; code_plan/figma_name_map.json|
|box · breadcrumb · y · Figma|15|D-21 공통 틀의 현재 코드 y. main 이름표 변경 금지|D-21; UX/gitlab_compare/v2/measure.md; capture_map.md|
|only-figma · profile-activity ·  · 측정 매핑 오류|12|기존 profile-* DOM이 API 완료 뒤 나타나는지 재측정. 새 UI를 만들지 않음 / 기존 section.gl-activity에 측정 이름표 연결|app/src/screens/P33_Profile.jsx data-figma:profile-head/info/activity/event; app/src/screens/P20_MergeRequests.jsx|
|only-figma · gl-tabs ·  · 측정 매핑 오류|20|기존 ProjectStateTabs 내부 탭 목록 이름 연결. 중복 탭 생성 금지|app/src/components/Navigation/ProjectStateTabs.jsx; code_plan/figma_name_map.json|
|shape · extra-field-filter ·  · 코드|20|모서리 8→0 / 안쪽 0 12 0 12→0 0 0 0|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|color · filter-search · stroke · 코드|20|#33363d color/layout/panel-border|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|shape · filter-search ·  · 코드|20|안쪽 0 0 0 0→0 4 0 4 / 안쪽 0 0 0 0→0 8 0 8|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|color · search · text · 코드|10|#cdd1d5 color/text/subtle|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|color · search · stroke · 코드|10|#33363d color/border/gray-light|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|box · filters · w · 코드|12|264|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|box · filters · h · 코드|12|358|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|text · filters ·  · 코드|12|["그룹","Any","Any","27"]|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|color · filters · fill · 코드|12|#1e2124 color/layout/raised-bg|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|shape · filters ·  · 코드|12|간격 12→16|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|icon · filters ·  · 코드|12|["arrow-down","folder","fork","issues","merge-request","tag"]|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|box · language-bar · w · 코드|8|296|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|box · language-bar · w · 측정 매핑 오류|4|/projects/150/feedback으로 재측정. 의견 폼 Figma 재작성 뒤 대조|사용자 M-9 지시; UX/05; PRD; code_plan/figma_name_map.json|
|box · results · h · 코드|10|695 / 635 / 1057 / 711|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|shape · results ·  · 코드|10|간격 12→8|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|only-code · intro-card ·  · 측정 매핑 오류|10|/projects/150/feedback으로 재측정. 의견 폼 Figma 재작성 뒤 대조|사용자 M-9 지시; UX/05; PRD; code_plan/figma_name_map.json|
|box · gitlab-sidebar · y · 측정 매핑 오류|4|/projects/150/feedback으로 재측정. 의견 폼 Figma 재작성 뒤 대조|사용자 M-9 지시; UX/05; PRD; code_plan/figma_name_map.json|
|box · gitlab-sidebar · y · Figma|6|D-21 공통 틀의 현재 코드 y. main 이름표 변경 금지|D-21; UX/gitlab_compare/v2/measure.md; capture_map.md|
|box · extra-field-filter · x · 코드|10|678 / 1078 / 1374 / 32 / 430|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|box · extra-field-filter · w · 코드|10|107|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|box · search · w · 코드|10|799 / 943 / 1055 / 183 / 559|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|box · repo-actions · w · 코드|10|234|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|shape · extra-reuse ·  · 코드|10|모서리 0→8|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|box · steps · y · 코드|10|313 / 311 / 349 / 335|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|box · steps · h · 코드|10|558 / 580|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|color · search-filter · fill · 코드|8|#33363d color/layout/btn-fill-bg|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|box · repo-actions · x · 코드|8|430 / 830 / 1126 / 502|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|box · extra-reuse · x · 코드|8|546 / 946 / 1242 / 132|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|box · page-head · y · 코드|5|154|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|color · section-title · text · Figma|4|--krds-color-text-basic. 내 작업 캡처 대기 상태는 유지|D-15; UX/07; M8_user_checks.md|
|color · readme · stroke · Figma|1|--layout-panel-border / gray-80|UX/gitlab_compare/v2/measure.md: 판 테두리 KRDS gray-80|
|color · readme · stroke · 측정 매핑 오류|1|/projects/150/feedback으로 재측정. 의견 폼 Figma 재작성 뒤 대조|사용자 M-9 지시; UX/05; PRD; code_plan/figma_name_map.json|
|box · extra-field-filter · y · 코드|2|270|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|box · search · y · 코드|2|290|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|only-figma · profile-head ·  · 측정 매핑 오류|2|기존 profile-* DOM이 API 완료 뒤 나타나는지 재측정. 새 UI를 만들지 않음|app/src/screens/P33_Profile.jsx data-figma:profile-head/info/activity/event|
|only-figma · profile-info ·  · 측정 매핑 오류|2|기존 profile-* DOM이 API 완료 뒤 나타나는지 재측정. 새 UI를 만들지 않음|app/src/screens/P33_Profile.jsx data-figma:profile-head/info/activity/event|
|text · profile-event ·  · Figma|2|동일 API 자료/관찰시각으로 다시 생성. 미확인 수를0으로 채우지 않음|UX/07 5·10·11·13절; P11_Organizations useCounts; P33_Profile ago|
|box · repo-actions · y · 코드|2|177|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|box · extra-reuse · y · 코드|2|177|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|box · extra-reuse · w · 코드|2|82|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|color · page-head · text · Figma|1|--krds-color-text-basic|D-15; UX/gitlab_compare/v2/measure.md 제목 글자|
|box · profile-activity · h · 코드|1|174|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|shape · profile-activity ·  · 코드|1|간격 12→0|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|box · profile-event · h · 코드|1|144|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|only-figma · profile-activity ·  · 코드|10|{"x":40,"y":557,"w":944,"h":144} / {"x":296,"y":557,"w":808,"h":144} / {"x":480,"y":557,"w":920,"h":144} / {"x":16,"y":955,"w":328,"h":144} / {"x":32,"y":641,"w":704,"h":144}|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|color · gl-filter · text · 코드|20|#cdd1d5 color/text/subtle|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|box · filter-search · w · 코드|10|32|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|box · filter-search · h · 코드|10|32|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|color · filter-clear · stroke · 코드|10|#33363d color/layout/panel-border|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|color · body · fill · Figma|10|D-21 공통 shell/panel/text 토큰. 설정 화면만 별도 색을 만들지 않음|D-21; UX/gitlab_compare/v2/measure.md 색 층|
|color · content-panel · fill · Figma|10|D-21 공통 shell/panel/text 토큰. 설정 화면만 별도 색을 만들지 않음|D-21; UX/gitlab_compare/v2/measure.md 색 층|
|color · breadcrumb · text · Figma|10|D-21 공통 shell/panel/text 토큰. 설정 화면만 별도 색을 만들지 않음|D-21; UX/gitlab_compare/v2/measure.md 색 층|
|color · footer · fill · Figma|10|D-21 공통 shell/panel/text 토큰. 설정 화면만 별도 색을 만들지 않음|D-21; UX/gitlab_compare/v2/measure.md 색 층|
|font · tabs ·  · 코드|5|크기 17→15, 줄 높이 26→22|code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선|
|icon · topbar ·  · 측정 매핑 오류|2|Sidebar=Expanded 상태와 D-10 role을 고정해 다시 측정. UI 상태를 코드 결함으로 간주하지 않음|D-10; UX/17_사이드바_실측.md; app/src/components/Identity/useAuth.js|
|only-figma · gitlab-sidebar ·  · 측정 매핑 오류|2|Sidebar=Expanded 상태와 D-10 role을 고정해 다시 측정. UI 상태를 코드 결함으로 간주하지 않음|D-10; UX/17_사이드바_실측.md; app/src/components/Identity/useAuth.js|
|box · content-panel · x · 측정 매핑 오류|2|Sidebar=Expanded 상태와 D-10 role을 고정해 다시 측정. UI 상태를 코드 결함으로 간주하지 않음|D-10; UX/17_사이드바_실측.md; app/src/components/Identity/useAuth.js|
|box · content-panel · w · 측정 매핑 오류|2|Sidebar=Expanded 상태와 D-10 role을 고정해 다시 측정. UI 상태를 코드 결함으로 간주하지 않음|D-10; UX/17_사이드바_실측.md; app/src/components/Identity/useAuth.js|
|box · breadcrumb · x · 측정 매핑 오류|2|Sidebar=Expanded 상태와 D-10 role을 고정해 다시 측정. UI 상태를 코드 결함으로 간주하지 않음|D-10; UX/17_사이드바_실측.md; app/src/components/Identity/useAuth.js|
|only-figma · sidebar-nav ·  · 측정 매핑 오류|2|Sidebar=Expanded 상태와 D-10 role을 고정해 다시 측정. UI 상태를 코드 결함으로 간주하지 않음|D-10; UX/17_사이드바_실측.md; app/src/components/Identity/useAuth.js|
