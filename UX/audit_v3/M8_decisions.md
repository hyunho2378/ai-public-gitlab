# M-8 원인 판정표

기준 원장2240건, 원인158개를 누락 없이 싣는다. **미판정은 확정 판정으로 위장하지 않고 [blocked]로 남긴다.** 이 표는 전체 판정 완료본이 아니다. 기존 판정은 담당 문서 근거를 인용하며 직접 캡처를 새로 검증한 것으로 쓰지 않는다.

| 원인 | 건수 | 고칠 쪽 | 정답값 / 상태 | 근거 파일 |
|---|---:|---|---|---|
| 코드에만 · group-row | 200 | Figma | UX/gitlab_compare/40_그룹_실제대우리_1440.png 왼쪽(실제 공공 깃랩)에 그룹 행(아바타, 이름, 통계, 점 세 개)이 있고 Figma G-04에는 group-row 요소가 없다. 실측 있음 → Figma에 행 추가·이름표 | UX/audit_v3/M8_owner_D21.md |
| 문구 · page-head | 44 | 보류 | [blocked] G-06 제목 '내 작업' 대 '내 프로젝트'는 원장 pending: 사용자 캡처 대기(실제 /dashboard/projects, 로그인 필요) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · project-row · h | 40 | Figma | 코드 설명 최대 폭 704는 실측으로 기록(커밋 5830de2). 줄 수와 행 높이는 폭에서 결정되므로 Figma 행(91/119) 줄 수를 704 기준으로 다시 계산 | UX/audit_v3/M8_owner_D21.md |
| Figma에만 · tabs | 40 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 아이콘 · project-row | 38 | 코드 | 모바일 project 아이콘 숨김 제거. 공개 globe flex 축소 방지. 원본 탐색 캡처를 직접 열어 확인 | UX/gitlab_compare/01_탐색_프로젝트목록_1440.png; app/src/components/Layout/repo.css |
| 위치/크기 · sidebar-nav · w | 36 | Figma | 스크롤 발생213 / 미발생224(UX/17 목록 폭은 실제 스크롤바만큼 감소) | UX/17_사이드바_실측.md 1절 |
| 위치/크기 · filter-search · x | 36 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 위치/크기 · section-title · y | 35 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · login-card · h | 32 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 문구 · login-card | 30 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| Figma에만 · login-fact | 30 | 미판정 | [blocked] UX/gitlab_compare/46_로그인_1440.png 실제 로그인엔 '비밀번호 미수집, 로그인은 공공 저장소에서 처리' 문구가 없는 덧붙임. 로그인 2열 유지 결정(UX/13_공공깃랩_화면_대조표.md 78행) 안의 덧붙임이라 Figma가 정답(규칙 2)이면 코드에 추가 | UX/audit_v3/M8_owner_D21.md |
| 문구 · commit-bar | 30 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 모서리·안쪽·간격 · readme | 30 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · project-row · y | 28 | Figma | 위 project-row h 차이가 아래 행 y에 누적된 값. h를 고치면 같이 해소 | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · gl-filter · y | 26 | Figma | UX/audit_v3/M7_to_figma.md·M7_C_resolution.md: D-21 조작 32 적용으로 코드 쪽은 처리됨. 남은 차이는 Figma 전달 항목 | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · page-head · h | 25 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 모서리·안쪽·간격 · page-head | 25 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · section-title · w | 25 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · sidebar-nav · h | 24 | 미판정 / A-02 4건 매핑 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 문구 · section-title | 24 | 미판정 | [blocked] G-06 Signed-in 등 문구 차이 24건: 실측 캡처 없음 | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · main · y | 23 | Figma / A-02 10건 매핑 | 코드는 전 화면 main y 81로 같고(560개 중 이 항목 차이는 A-02·G-12에만), Figma 121은 A-02·G-12에 breadcrumb 줄을 따로 둔 구조. 공통 판 구조(breadcrumb y 81 일치)에 Figma가 맞춘다 | UX/audit_v3/M8_owner_D21.md |
| Figma에만 · section-title | 22 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · filter-search · y | 22 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 모서리·안쪽·간격 · global-search | 22 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 코드에만 · page-head | 21 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| Figma에만 · results | 20 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · search-clear · x | 20 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| Figma에만 · project-info | 20 | 미판정 / A-02 10건 매핑 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| Figma에만 · toolbar | 20 | 미판정 / A-02 10건 매핑 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| Figma에만 · commit-bar | 20 | 미판정 / A-02 10건 매핑 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| Figma에만 · file-table | 20 | 미판정 / A-02 10건 매핑 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| Figma에만 · readme | 20 | 미판정 / A-02 10건 매핑 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| Figma에만 · filter-search | 20 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 코드에만 · gl-tabs | 20 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 아이콘 · gl-filter | 20 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| Figma에만 · tabbar | 20 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · notice-block · x | 20 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · notice-block · w | 20 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 코드에만 · profile-event | 20 | Figma | G-12 360 변형만 profile-event가 없다(1440·768 Figma는 같은 요소 있음, 코드 1440·768 차이 0). 같은 Figma 안의 360 변형 누락 | UX/audit_v3/M8_owner_D21.md |
| 아이콘 · commit-bar | 20 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · file-table · h | 20 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 색 · gl-filter · text | 20 | 미판정 | [blocked] 화면별 실측/결정 교차 확인 미완료 | [blocked] 근거 대조 미완료 |
| Figma에만 · header | 20 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 위치/크기 · login-divider · h | 18 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · commit-bar · y | 18 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · gl-filter · h | 16 | Figma | UX/audit_v3/M7_to_figma.md·M7_C_resolution.md: D-21 조작 32, PC 65, 모바일 105 확정. Figma 모바일 2건 전달 | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · page-head · w | 16 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · file-table · y | 16 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · gl-tabs · h | 16 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 위치/크기 · tabs · y | 15 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · section-title · x | 14 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 순서 · (화면) | 13 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| Figma에만 · filters | 12 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · footer · x | 12 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · footer · w | 12 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · login-notice · y | 12 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · login-logo · y | 12 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · notice-block · y | 12 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · task-search · h | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 문구 · task-search | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 모서리·안쪽·간격 · task-search | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| Figma에만 · breadcrumb | 10 | 측정 매핑 오류 | A-02 실제 홈 + AI 소개 카드 경로로 재측정 | code_plan/figma_name_map.json; app/src/screens/P16_Code.jsx |
| Figma에만 · intro-card | 10 | 측정 매핑 오류 | A-02 실제 홈 + AI 소개 카드 경로로 재측정 | code_plan/figma_name_map.json; app/src/screens/P16_Code.jsx |
| 문구 · gl-filter | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 코드에만 · extra-field-filter | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| Figma에만 · search | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 문구 · login-field | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 코드에만 · login-field | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · project-info · y | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · project-info · h | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 문구 · toolbar | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 아이콘 · toolbar | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 아이콘 · file-table | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · readme · h | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 아이콘 · readme | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · intro-card · h | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 문구 · intro-card | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 모서리·안쪽·간격 · intro-card | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 코드에만 · repo-actions | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 코드에만 · extra-reuse | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 코드에만 · extra-field | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 코드에만 · language-bar | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · preview · y | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 위치/크기 · preview · h | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 아이콘 · preview | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 모서리·안쪽·간격 · gl-filter | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 위치/크기 · diff-area · y | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 위치/크기 · diff-area · h | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 아이콘 · diff-area | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 위치/크기 · diff-file · y | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 위치/크기 · diff-file · h | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 아이콘 · diff-file | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 위치/크기 · filter-clear · x | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 색 · filter-clear · stroke | 10 | 미판정 | [blocked] 화면별 실측/결정 교차 확인 미완료 | [blocked] 근거 대조 미완료 |
| 모서리·안쪽·간격 · filter-clear | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 모서리·안쪽·간격 · filter-display | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 모서리·안쪽·간격 · filter-settings | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 모서리·안쪽·간격 · filter-expand | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 위치/크기 · gl-tabs · w | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 코드에만 · filter-search | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 위치/크기 · code-button · x | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 위치/크기 · code-button · y | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 위치/크기 · code-button · w | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| Figma에만 · repo-tabs | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 색 · footer · fill | 10 | 미판정 | [blocked] 화면별 실측/결정 교차 확인 미완료 | [blocked] 근거 대조 미완료 |
| 위치/크기 · body · y | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 위치/크기 · main · w | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 위치/크기 · global-search · x | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 위치/크기 · global-search · y | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 위치/크기 · global-search · h | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 코드에만 · system-band | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 코드에만 · topbar | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 코드에만 · breadcrumb | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| Figma에만 · steps | 10 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · login-field · y | 9 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · main · x | 9 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 색 · search-filter · fill | 8 | 미판정 | [blocked] 화면별 실측/결정 교차 확인 미완료 | [blocked] 근거 대조 미완료 |
| 아이콘 · gitlab-sidebar | 8 | 미판정 / A-02 4건 매핑 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 아이콘 · sidebar-nav | 8 | 미판정 / A-02 4건 매핑 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · section-title · h | 7 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · toolbar · y | 6 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · commit-bar · h | 6 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · diff-file · x | 6 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 위치/크기 · diff-file · w | 6 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 위치/크기 · global-search · w | 6 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 문구 · global-search | 6 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 글자 속성 · global-search | 6 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| Figma에만 · repo-path | 6 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 코드에만 · checks | 5 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · checks · y | 5 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 위치/크기 · checks · h | 5 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 문구 · checks | 5 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 모서리·안쪽·간격 · checks | 5 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 아이콘 · checks | 5 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| Figma에만 · project-row | 5 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| Figma에만 · comment-editor | 5 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 글자 속성 · main | 5 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 코드에만 · tabs | 5 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 문구 · tabs | 5 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 문구 · gitlab-sidebar | 4 | 측정 매핑 오류 | A-02 실제 홈 + AI 소개 카드 경로로 재측정 | code_plan/figma_name_map.json; app/src/screens/P16_Code.jsx |
| 위치/크기 · sidebar-nav · y | 4 | 측정 매핑 오류 | A-02 실제 홈 + AI 소개 카드 경로로 재측정 | code_plan/figma_name_map.json; app/src/screens/P16_Code.jsx |
| 문구 · sidebar-nav | 4 | 측정 매핑 오류 | A-02 실제 홈 + AI 소개 카드 경로로 재측정 | code_plan/figma_name_map.json; app/src/screens/P16_Code.jsx |
| 글자 속성 · section-title | 4 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 색 · section-title · text | 4 | 미판정 | [blocked] 화면별 실측/결정 교차 확인 미완료 | [blocked] 근거 대조 미완료 |
| 코드에만 · gitlab-sidebar | 4 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 코드에만 · sidebar-nav | 4 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 아이콘 · task-search | 2 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 문구 · breadcrumb | 2 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 모서리·안쪽·간격 · diff-area | 2 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 위치/크기 · tabs · h | 2 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 글자 속성 · page-head | 2 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 위치/크기 · gl-tabs · y | 2 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_C.md |
| 색 · page-head · text | 1 | 미판정 | [blocked] 화면별 실측/결정 교차 확인 미완료 | [blocked] 근거 대조 미완료 |
| 모서리·안쪽·간격 · login-card | 1 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 코드에만 · profile-head | 1 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 코드에만 · profile-activity | 1 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 코드에만 · activity-calendar | 1 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
| 코드에만 · profile-info | 1 | 미판정 | [blocked] 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음) | UX/audit_v3/M8_owner_D21.md |
