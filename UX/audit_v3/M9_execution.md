# M-9 실행

## 판정과 경로

- 신규 보고서73묶음/1,092행을 원장 행과 일대일 연결했다. 코드485, Figma424, 측정 매핑183. M9_decisions.md / M9_to_figma.md / M9_decision_rows.json. 판정 완료는 수정 완료가 아니다.
- A-04 전: figma_name_map screens[].code.path `/projects/150`. 후: `/projects/150/feedback`. UX/05·PRD와 사용자 지시가 근거다. 실제 의견 종류 라디오3개가 있는 의견 화면을 snapshot으로 확인했다. 경로의 단일 원본은 figma_name_map이다.
- main 이름표는 수정하지 않았다. y510은 Figma export 복구 대상으로 유지한다.

## 공통 부품 변경

- 전 원문: ProjectInfo `<div className="rb-lang" data-figma="language-bar">`가 범례까지 포함한56 높이를 측정했다. 후: 이름표를 기존 `.rb-lang-bar`로 이동해8 높이를 측정한다. 모양은 repo.css 한 곳에서 반경4/조각 간격2로 통일했다. 중복 code.css 정의는 제거했다. 1440/360 최종 실측 모두 h8/r4/gap2. 근거: M9 language-bar h/shape, 기존 실제 막대 DOM.
- 전 원문: `.gl-filter-go { … height:100%; padding:0 var(--krds-padding-4); … }`. 후: border-box32×32, padding0, 안쪽 아이콘16, border-color layout-panel-border. 1440 w37/h30/x1346/y214 → w32/h32/x1351/y213.360 x306/y206 → x311/y205. 원장 목표 w32/h32/x1351과 일치하며 상위 y 차이는 별도다.94fe95b.
- 전 원문: `.rb-x-search { … border-radius:var(--krds-radius-medium2); … }`, 루트 안쪽0/간격0. 후: 반경4/좌우12/간격8/선 layout-panel-border로 공통 검색 부품에서 관리한다. 그룹 검색1440 x312/y276/w914.820/h32,360 x32/y330/w296/h32는 유지했다. 원장 shape30과 색20 대상이다.11da330.
- 기존 MR `section.gl-activity`와 ProjectStateTabs의 기존 ul에 이름표를 연결했다. 새 활동/탭 UI 생성 없음. MR 활동 상자는1440 x296/y830.523/w768/h142,360 x16/y1060.523/w328/h142로 전후 동일하다. 탭 목록도 전후 w136.898/h48 동일하다. Figma160 폭과의 차이를 숨기지 않는다.a7ed344.

## 큐 상태

- M8 미수정831 중100은 공식M9에서 현재 요소 존재/같은 kind+name+field 차이 미검출을 확인해 중복 큐에서 분리했다. M9_retired_M8.json에 원문/관찰시각/판정 근거를 보존했다. 아이콘·순서·한쪽에만 있는 요소와 A-04는 이 자동 분리에서 제외했다. 코드 수정 해소 실적으로 세지 않는다.
- M8 미수정731 + M9 신규 코드 미수정355 =1,086행 남음. 이번 공통 코드 후보130, 매핑 후보50. 공식 전체 재측정 전이라 후보180을 해소180으로 주장하지 않는다.
- 이번200건 경과 부모 알림 발송: 후보180과 공식M9 중복100을 구분했다.

## 검증

- 공식M9와 같은 스크롤바0 조건으로1440/360, 네 경로를 전후 측정했다. 전환/애니메이션은 측정 탭에만 껐다. 제품 CSS 또는 검사 규칙 변경 없음. 네 경로×두 폭 가로 넘침0.
- 세션tmp M9-before.json / M9-after.json. 언어 막대는 뒤쪽 중복 CSS를 제거한 M9-language-final.json이 최종값이다. 이전 after의 r8/gap1은 최종값으로 쓰지 않는다.
- 로그인1440 bad=[]/cyDiff0,360 bad=[]/cyDiff415.8. 기존 세로 쌓기와 동일. M9-login.json.
- audit:code PASS. build PASS(기존 snapshot 중복 import/큰 청크 경고 유지). 로그인/D-xx/판정 허용 규칙/main 이름표 변경 없음. main 브랜치/배포 변경 없음. 작업 탭 닫음.
