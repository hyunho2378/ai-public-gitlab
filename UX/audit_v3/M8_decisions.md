# M-8 원인 판정표

부모 확정 일괄 판정 기준을 적용한다. 158개 원인/2240개 차이 전부 고칠 쪽을 정했다. **판정 완료와 코드 수정 완료는 별개다.** 화면/폭별 정답값은 M8_decision_rows.json에 보존한다. 캡처 수치가 문서화되지 않은 세부 속성은 Figma 기준으로 분류했으며 이미지에서 수치를 새로 측정했다고 주장하지 않는다.

| 원인 | 건수 | 고칠 쪽(건수) | 정답값 | 근거 파일 |
|---|---:|---|---|---|
| 코드에만 · group-row | 200 | Figma 200 | 캡처에 있는 기존 기능: Figma에 코드 부품/이름표 추가 | UX/handson/gitlab/40_탐색_그룹.png; UX/14_팀기능_배치.md |
| 문구 · page-head | 44 | Figma 44 | copy/ko.js,ui.js,gl.js,work.js의 현재 문구 / 사용자 원문·상대시간은 같은 자료 기준으로 재생성 | UX/07_밀도_문구_기준.md 5/10/11/13절; D-19 |
| 위치/크기 · project-row · h | 40 | 코드 40 | 91 / 161 / 69 / 119 / 189 / 95 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| Figma에만 · tabs | 40 | 코드 40 | {"x":40,"y":199,"w":944,"h":40} / {"x":296,"y":199,"w":1088,"h":40} / {"x":480,"y":199,"w":1200,"h":40} / {"x":16,"y":213,"w":328,"h":40} / {"x":32,"y":199,"w":704,"h":40} / {"x":40,"y":173,"w":160,"h":48} / {"x":296,"y":173,"w":160,"h":48} / {"x":480,"y":173,"w":160,"h":48} / {"x":16,"y":197,"w":160,"h":48} / {"x":32,"y":173,"w":160,"h":48} / {"x":40,"y":173,"w":944,"h":33} / {"x":296,"y":173,"w":1088,"h":33} / {"x":480,"y":173,"w":1200,"h":33} / {"x":16,"y":165,"w":328,"h":33} / {"x":32,"y":173,"w":704,"h":33} / {"x":40,"y":217,"w":944,"h":40} / {"x":296,"y":217,"w":1088,"h":40} / {"x":480,"y":217,"w":1200,"h":40} / {"x":16,"y":191,"w":328,"h":88} / {"x":32,"y":217,"w":704,"h":40} / {"x":40,"y":173,"w":944,"h":40} / {"x":296,"y":173,"w":1088,"h":40} / {"x":480,"y":173,"w":1200,"h":40} / {"x":16,"y":165,"w":328,"h":40} / {"x":32,"y":173,"w":704,"h":40} | UX/audit_v3/capture_map.md; code_plan/figma_full.json; UX/handson/gitlab/01_탐색_프로젝트목록_기본.png; code_plan/figma_full.json; UX/handson/gitlab/40_탐색_그룹.png; code_plan/figma_full.json |
| 아이콘 · project-row | 38 | 코드 38 | project/globe/fork/star/merge-request/issues/ellipsis-vertical;모바일 숨김 제거 완료 | UX/gitlab_compare/01_탐색_프로젝트목록_1440.png |
| 위치/크기 · sidebar-nav · w | 36 | Figma 36 | 목록224−실제 스크롤바폭(현재213);사이드바240/접힘44 | UX/17_사이드바_실측.md; D-16 |
| 위치/크기 · filter-search · x | 36 | 코드 36 | 867 / 1267 / 1563 / 295 / 619 / 778 / 1178 / 1474 / 530 / 796 / 1196 / 1492 / 156 / 548 / 809 / 1209 / 1505 / 561 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · section-title · y | 35 | 코드 35 | 169 / 161 / 243 / 137 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · login-card · h | 32 | Figma 32 | 사용자 확정 로그인 배치 유지:2열 묶음 중앙,왼쪽 공지/로고,모바일 세로 쌓기 | UX/07 7절; UX/gitlab_compare/v3/README.md 13절 |
| 문구 · login-card | 30 | Figma 30 | copy/ko.js,ui.js,gl.js,work.js의 현재 문구 / 사용자 원문·상대시간은 같은 자료 기준으로 재생성 | UX/07_밀도_문구_기준.md 5/10/11/13절; D-19 |
| Figma에만 · login-fact | 30 | Figma 30 | D-12 확정: 현재 코드 안내/로고 왼쪽 열 가운데/공지·폼 배치 유지. 추가 상태의 없는 안내를 임의 삽입하지 않음 | D-12; UX/07 7절; app/scripts/audit-login-logo.mjs |
| 문구 · commit-bar | 30 | Figma 30 | copy/ko.js,ui.js,gl.js,work.js의 현재 문구 / 사용자 원문·상대시간은 같은 자료 기준으로 재생성 | UX/07_밀도_문구_기준.md 5/10/11/13절; D-19 |
| 모서리·안쪽·간격 · readme | 30 | 코드 30 | 모서리 0→8 / 안쪽 16 16 16 16→0 0 0 0 / 간격 12→0 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · project-row · y | 28 | 코드 28 | 437 / 528 / 599 / 509 / 320 / 397 / 412 / 529 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · gl-filter · y | 26 | 코드 26 | 245 / 206 / 198 / 170 / 282 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · page-head · h | 25 | 코드 25 | 44 / 36 / 111 / 32 / 76 / 72 / 56 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 모서리·안쪽·간격 · page-head | 25 | 코드 25 | 안쪽 0 0 4 0→0 0 0 0 / 간격 8→16 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · section-title · w | 25 | 코드 25 | 944 / 1088 / 1200 / 328 / 704 / 960 / 312 / 720 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · sidebar-nav · h | 24 | 측정 매핑 오류 4 / Figma 20 | 홈 + AI 소개 카드 /projects/150?fixture=kordoc / UX/17: 접힘/펼침 항목수 기반 Hug;피치32,화면 안 스크롤 | UX/audit_v3/M8_mapping.md; UX/17_사이드바_실측.md; D-16 |
| 문구 · section-title | 24 | Figma 24 | copy/ko.js,ui.js,gl.js,work.js의 현재 문구 / 사용자 원문·상대시간은 같은 자료 기준으로 재생성 | UX/07_밀도_문구_기준.md 5/10/11/13절; D-19 |
| 위치/크기 · main · y | 23 | 측정 매핑 오류 10 / Figma 13 | 홈 + AI 소개 카드 /projects/150?fixture=kordoc / 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 | UX/audit_v3/M8_mapping.md; D-21 7-1/7-2; D-20; UX/07 7절 |
| Figma에만 · section-title | 22 | 코드 22 | {"x":1088,"y":241,"w":30,"h":26} / {"x":32,"y":989,"w":30,"h":26} / {"x":40,"y":520,"w":944,"h":28} / {"x":40,"y":955,"w":944,"h":28} / {"x":296,"y":520,"w":1088,"h":28} / {"x":296,"y":955,"w":1088,"h":28} / {"x":480,"y":520,"w":1200,"h":28} / {"x":480,"y":955,"w":1200,"h":28} / {"x":16,"y":530,"w":328,"h":56} / {"x":16,"y":975,"w":328,"h":28} / {"x":32,"y":520,"w":704,"h":28} / {"x":32,"y":955,"w":704,"h":28} | UX/handson/gitlab/48_그룹_사용자페이지.png; code_plan/figma_full.json; UX/handson/gitlab/30_리포지토리분석.png; code_plan/figma_full.json |
| 위치/크기 · filter-search · y | 22 | 코드 22 | 194 / 187 / 287 / 299 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 모서리·안쪽·간격 · global-search | 22 | Figma 22 | 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 | D-21 7-1/7-2; D-20; UX/07 7절 |
| 코드에만 · page-head | 21 | Figma 21 | 캡처에 있는 기존 기능: Figma에 코드 부품/이름표 추가 | UX/handson/gitlab/01_탐색_프로젝트목록_기본.png; UX/14_팀기능_배치.md; UX/handson/gitlab/48_그룹_사용자페이지.png; UX/14_팀기능_배치.md; UX/handson/gitlab/02_프로젝트홈_기본.png; UX/14_팀기능_배치.md |
| Figma에만 · results | 20 | 측정 매핑 오류 20 | 기존 DOM에 이름표 추가. 새 기능/겹친 상자 생성 금지 | app/src/screens/P02_Search.jsx; app/src/components/Help/RunSteps.jsx; app/src/screens/gl/parts.jsx |
| 위치/크기 · search-clear · x | 20 | 코드 20 | 883 / 1219 / 1459 / 243 / 635 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| Figma에만 · project-info | 20 | 측정 매핑 오류 10 / 코드 10 | 홈 + AI 소개 카드 /projects/150?fixture=kordoc / {"x":688,"y":121,"w":296,"h":698} / {"x":1088,"y":121,"w":296,"h":698} / {"x":1384,"y":121,"w":296,"h":698} / {"x":16,"y":225,"w":328,"h":652} / {"x":32,"y":185,"w":704,"h":630} | UX/audit_v3/M8_mapping.md; UX/audit_v3/capture_map.md; code_plan/figma_full.json |
| Figma에만 · toolbar | 20 | 측정 매핑 오류 10 / 코드 10 | 홈 + AI 소개 카드 /projects/150?fixture=kordoc / {"x":40,"y":185,"w":624,"h":32} / {"x":296,"y":185,"w":768,"h":32} / {"x":480,"y":185,"w":880,"h":32} / {"x":16,"y":893,"w":328,"h":72} / {"x":32,"y":831,"w":704,"h":32} | UX/audit_v3/M8_mapping.md; UX/audit_v3/capture_map.md; code_plan/figma_full.json |
| Figma에만 · commit-bar | 20 | 측정 매핑 오류 10 / 코드 10 | 홈 + AI 소개 카드 /projects/150?fixture=kordoc / {"x":40,"y":233,"w":624,"h":66} / {"x":296,"y":233,"w":768,"h":66} / {"x":480,"y":233,"w":880,"h":66} / {"x":16,"y":981,"w":328,"h":66} / {"x":32,"y":879,"w":704,"h":66} | UX/audit_v3/M8_mapping.md; UX/audit_v3/capture_map.md; code_plan/figma_full.json |
| Figma에만 · file-table | 20 | 측정 매핑 오류 10 / 코드 10 | 홈 + AI 소개 카드 /projects/150?fixture=kordoc / {"x":40,"y":315,"w":624,"h":1262} / {"x":296,"y":315,"w":768,"h":1262} / {"x":480,"y":315,"w":880,"h":1262} / {"x":16,"y":1063,"w":328,"h":1219} / {"x":32,"y":961,"w":704,"h":1262} | UX/audit_v3/M8_mapping.md; UX/audit_v3/capture_map.md; code_plan/figma_full.json |
| Figma에만 · readme | 20 | 측정 매핑 오류 10 / 코드 10 | 홈 + AI 소개 카드 /projects/150?fixture=kordoc / {"x":40,"y":1593,"w":624,"h":6176} / {"x":296,"y":1593,"w":768,"h":5640} / {"x":480,"y":1593,"w":880,"h":5464} / {"x":16,"y":2298,"w":328,"h":9104} / {"x":32,"y":2239,"w":704,"h":5842} | UX/audit_v3/M8_mapping.md; UX/audit_v3/capture_map.md; code_plan/figma_full.json |
| Figma에만 · filter-search | 20 | 코드 10 / 측정 매핑 오류 10 | {"x":603,"y":238,"w":32,"h":32} / {"x":1003,"y":238,"w":32,"h":32} / {"x":1299,"y":238,"w":32,"h":32} / {"x":295,"y":269,"w":32,"h":32} / {"x":355,"y":238,"w":32,"h":32} / 기존 DOM에 이름표 추가. 새 기능/겹친 상자 생성 금지 | UX/handson/gitlab/01_탐색_프로젝트목록_기본.png; code_plan/figma_full.json; app/src/screens/P02_Search.jsx; app/src/components/Help/RunSteps.jsx; app/src/screens/gl/parts.jsx |
| 코드에만 · gl-tabs | 20 | Figma 20 | 캡처에 있는 기존 기능: Figma에 코드 부품/이름표 추가 | UX/handson/gitlab/01_탐색_프로젝트목록_기본.png; UX/14_팀기능_배치.md; UX/handson/gitlab/40_탐색_그룹.png; UX/14_팀기능_배치.md |
| 아이콘 · gl-filter | 20 | 코드 20 | ["arrow-down","search"] / ["arrow-down","history","search"] | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| Figma에만 · tabbar | 20 | 코드 20 | {"x":40,"y":203,"w":26,"h":2} / {"x":90,"y":203,"w":39,"h":2} / {"x":296,"y":203,"w":26,"h":2} / {"x":346,"y":203,"w":39,"h":2} / {"x":480,"y":203,"w":26,"h":2} / {"x":530,"y":203,"w":39,"h":2} / {"x":16,"y":195,"w":26,"h":2} / {"x":66,"y":195,"w":39,"h":2} / {"x":32,"y":203,"w":26,"h":2} / {"x":82,"y":203,"w":39,"h":2} | UX/handson/gitlab/40_탐색_그룹.png; code_plan/figma_full.json |
| 위치/크기 · notice-block · x | 20 | Figma 20 | 사용자 확정 로그인 배치 유지:2열 묶음 중앙,왼쪽 공지/로고,모바일 세로 쌓기 | UX/07 7절; UX/gitlab_compare/v3/README.md 13절 |
| 위치/크기 · notice-block · w | 20 | Figma 20 | 사용자 확정 로그인 배치 유지:2열 묶음 중앙,왼쪽 공지/로고,모바일 세로 쌓기 | UX/07 7절; UX/gitlab_compare/v3/README.md 13절 |
| 코드에만 · profile-event | 20 | Figma 20 | 새 프로필은 실제 자료 길이에 맞춘 기존 코드 구조;1440/768/360 상태 이름표 동기화 | code_plan/measured_G-12_codeonly.json; UX/handson/gitlab/48_그룹_사용자페이지.png |
| 아이콘 · commit-bar | 20 | 코드 20 | ["copy","ellipsis-horizontal"] | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · file-table · h | 20 | 코드 20 | 1262 / 1219 / 926 / 883 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 색 · gl-filter · text | 20 | Figma 20 | D-15 회색 면/원색 강조,현재 코드 KRDS 토큰 | D-15; D-07; UX/gitlab_compare/v2/measure.md 1절 |
| Figma에만 · header | 20 | Figma 20 | D-21 세로 사이드바+상단 바 틀로 통일. 폐기된 repo-tabs/header 틀 제거 | D-21 1장; UX/handson/README.md 0절 |
| 위치/크기 · login-divider · h | 18 | Figma 18 | 사용자 확정 로그인 배치 유지:2열 묶음 중앙,왼쪽 공지/로고,모바일 세로 쌓기 | UX/07 7절; UX/gitlab_compare/v3/README.md 13절 |
| 위치/크기 · commit-bar · y | 18 | 코드 18 | 233 / 225 / 217 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · gl-filter · h | 16 | 코드 16 | 159 / 73 / 119 / 65 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · page-head · w | 16 | 코드 16 | 944 / 1088 / 1200 / 704 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · file-table · y | 16 | 코드 16 | 315 / 307 / 299 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · gl-tabs · h | 16 | 코드 16 | 49 / 145 / 97 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · tabs · y | 15 | 코드 15 | 191 / 221 / 243 / 351 / 365 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · section-title · x | 14 | 코드 14 | 40 / 296 / 480 / 16 / 32 / 24 / 240 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 순서 · (화면) | 13 | 코드 13 | system-band > body > login-divider > login-card > login-notice > login-logo > login-field > notice-block > footer / system-band > topbar > global-search > body > gitlab-sidebar > content-panel > breadcrumb > sidebar-nav > main > footer / system-band > topbar > global-search > body > content-panel > breadcrumb > main > project-info > toolbar > commit-bar > file-table > intro-card > readme > footer / system-band > topbar > global-search > body > gitlab-sidebar > content-panel > breadcrumb > main > project-info > sidebar-nav > toolbar > commit-bar > file-table > intro- | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| Figma에만 · filters | 12 | 측정 매핑 오류 12 | 기존 DOM에 이름표 추가. 새 기능/겹친 상자 생성 금지 | app/src/screens/P02_Search.jsx; app/src/components/Help/RunSteps.jsx; app/src/screens/gl/parts.jsx |
| 위치/크기 · footer · x | 12 | Figma 12 | 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 | D-21 7-1/7-2; D-20; UX/07 7절 |
| 위치/크기 · footer · w | 12 | Figma 12 | 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 | D-21 7-1/7-2; D-20; UX/07 7절 |
| 위치/크기 · login-notice · y | 12 | Figma 12 | 사용자 확정 로그인 배치 유지:2열 묶음 중앙,왼쪽 공지/로고,모바일 세로 쌓기 | UX/07 7절; UX/gitlab_compare/v3/README.md 13절 |
| 위치/크기 · login-logo · y | 12 | Figma 12 | 사용자 확정 로그인 배치 유지:2열 묶음 중앙,왼쪽 공지/로고,모바일 세로 쌓기 | UX/07 7절; UX/gitlab_compare/v3/README.md 13절 |
| 위치/크기 · notice-block · y | 12 | Figma 12 | 사용자 확정 로그인 배치 유지:2열 묶음 중앙,왼쪽 공지/로고,모바일 세로 쌓기 | UX/07 7절; UX/gitlab_compare/v3/README.md 13절 |
| 위치/크기 · task-search · h | 10 | 코드 10 | 248 / 284 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 문구 · task-search | 10 | Figma 10 | copy/ko.js,ui.js,gl.js,work.js의 현재 문구 / 사용자 원문·상대시간은 같은 자료 기준으로 재생성 | UX/07_밀도_문구_기준.md 5/10/11/13절; D-19 |
| 모서리·안쪽·간격 · task-search | 10 | 코드 10 | 안쪽 0 0 0 0→0 0 8 0 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| Figma에만 · breadcrumb | 10 | 측정 매핑 오류 10 | 홈 + AI 소개 카드 /projects/150?fixture=kordoc | UX/audit_v3/M8_mapping.md |
| Figma에만 · intro-card | 10 | 측정 매핑 오류 10 | 홈 + AI 소개 카드 /projects/150?fixture=kordoc | UX/audit_v3/M8_mapping.md |
| 문구 · gl-filter | 10 | Figma 10 | copy/ko.js,ui.js,gl.js,work.js의 현재 문구 / 사용자 원문·상대시간은 같은 자료 기준으로 재생성 | UX/07_밀도_문구_기준.md 5/10/11/13절; D-19 |
| 코드에만 · extra-field-filter | 10 | Figma 10 | UX/14 지정 자리의 기존 코드 부품 추가 | UX/14_팀기능_배치.md 1/3절 |
| Figma에만 · search | 10 | 코드 10 | {"x":56,"y":223,"w":799,"h":40} / {"x":312,"y":223,"w":943,"h":40} / {"x":496,"y":223,"w":1055,"h":40} / {"x":32,"y":215,"w":183,"h":40} / {"x":48,"y":223,"w":559,"h":40} | UX/handson/gitlab/40_탐색_그룹.png; code_plan/figma_full.json |
| 문구 · login-field | 10 | Figma 10 | copy/ko.js,ui.js,gl.js,work.js의 현재 문구 / 사용자 원문·상대시간은 같은 자료 기준으로 재생성 | UX/07_밀도_문구_기준.md 5/10/11/13절; D-19 |
| 코드에만 · login-field | 10 | 코드 10 | Figma에 없는 미지정 요소 제거 또는 기존 Figma 요소에 이름표 통합 | UX/audit_v3/capture_map.md; UX/14_팀기능_배치.md |
| 위치/크기 · project-info · y | 10 | 코드 10 | 121 / 225 / 185 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · project-info · h | 10 | 코드 10 | 792 / 746 / 724 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 문구 · toolbar | 10 | Figma 10 | copy/ko.js,ui.js,gl.js,work.js의 현재 문구 / 사용자 원문·상대시간은 같은 자료 기준으로 재생성 | UX/07_밀도_문구_기준.md 5/10/11/13절; D-19 |
| 아이콘 · toolbar | 10 | 코드 10 | ["arrow-down","branch","ellipsis-vertical"] | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 아이콘 · file-table | 10 | 코드 10 | ["folder","icon-file/git","icon-file/markdown"] | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · readme · h | 10 | 코드 10 | 6176 / 5640 / 5464 / 9104 / 5842 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 아이콘 · readme | 10 | 코드 10 | ["bell","copy"] | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · intro-card · h | 10 | 코드 10 | 172 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 문구 · intro-card | 10 | Figma 10 | copy/ko.js,ui.js,gl.js,work.js의 현재 문구 / 사용자 원문·상대시간은 같은 자료 기준으로 재생성 | UX/07_밀도_문구_기준.md 5/10/11/13절; D-19 |
| 모서리·안쪽·간격 · intro-card | 10 | 코드 10 | 안쪽 0 0 0 0→12 0 0 0 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 코드에만 · repo-actions | 10 | Figma 10 | 캡처에 있는 기존 기능: Figma에 코드 부품/이름표 추가 | UX/handson/gitlab/02_프로젝트홈_기본.png; UX/14_팀기능_배치.md |
| 코드에만 · extra-reuse | 10 | Figma 10 | UX/14 지정 자리의 기존 코드 부품 추가 | UX/14_팀기능_배치.md 1/3절 |
| 코드에만 · extra-field | 10 | Figma 10 | UX/14 지정 자리의 기존 코드 부품 추가 | UX/14_팀기능_배치.md 1/3절 |
| 코드에만 · language-bar | 10 | Figma 10 | 캡처에 있는 기존 기능: Figma에 코드 부품/이름표 추가 | UX/handson/gitlab/02_프로젝트홈_기본.png; UX/14_팀기능_배치.md |
| 위치/크기 · preview · y | 10 | 코드 10 | 364 / 426 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · preview · h | 10 | 코드 10 | 5256 / 5054 / 4922 / 9050 / 5788 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 아이콘 · preview | 10 | 코드 10 | ["bell","copy"] | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 모서리·안쪽·간격 · gl-filter | 10 | 코드 10 | 간격 8→0 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · diff-area · y | 10 | 코드 10 | 525 / 593 / 549 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · diff-area · h | 10 | 코드 10 | 1389 / 1239 / 1419 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 아이콘 · diff-area | 10 | 코드 10 | ["expand-less","expand-more"] / ["expand-less","expand-more","icon-file/json","icon-file/markdown","icon-file/nodejs"] | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · diff-file · y | 10 | 코드 10 | 525 / 593 / 549 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · diff-file · h | 10 | 코드 10 | 723 / 735 / 753 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 아이콘 · diff-file | 10 | 코드 10 | ["expand-less"] | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · filter-clear · x | 10 | 코드 10 | 835 / 1235 / 1531 / 263 / 587 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 색 · filter-clear · stroke | 10 | Figma 10 | D-15 회색 면/원색 강조,현재 코드 KRDS 토큰 | D-15; D-07; UX/gitlab_compare/v2/measure.md 1절 |
| 모서리·안쪽·간격 · filter-clear | 10 | 코드 10 | 모서리 0→8 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 모서리·안쪽·간격 · filter-display | 10 | 코드 10 | 모서리 0→8 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 모서리·안쪽·간격 · filter-settings | 10 | 코드 10 | 모서리 0→8 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 모서리·안쪽·간격 · filter-expand | 10 | 코드 10 | 모서리 0→8 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · gl-tabs · w | 10 | 코드 10 | 309 / 385 / 381 / 437 / 1 / 189 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 코드에만 · filter-search | 10 | Figma 10 | 캡처에 있는 기존 기능: Figma에 코드 부품/이름표 추가 | UX/handson/gitlab/26_라벨.png; UX/14_팀기능_배치.md |
| 위치/크기 · code-button · x | 10 | 코드 10 | 922 / 1322 / 1618 / 282 / 674 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · code-button · y | 10 | 코드 10 | 125 / 137 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · code-button · w | 10 | 코드 10 | 62 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| Figma에만 · repo-tabs | 10 | Figma 10 | D-21 세로 사이드바+상단 바 틀로 통일. 폐기된 repo-tabs/header 틀 제거 | D-21 1장; UX/handson/README.md 0절 |
| 색 · footer · fill | 10 | Figma 10 | 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 | D-21 7-1/7-2; D-20; UX/07 7절 |
| 위치/크기 · body · y | 10 | Figma 10 | 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 | D-21 7-1/7-2; D-20; UX/07 7절 |
| 위치/크기 · main · w | 10 | Figma 10 | 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 | D-21 7-1/7-2; D-20; UX/07 7절 |
| 위치/크기 · global-search · x | 10 | Figma 10 | 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 | D-21 7-1/7-2; D-20; UX/07 7절 |
| 위치/크기 · global-search · y | 10 | Figma 10 | 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 | D-21 7-1/7-2; D-20; UX/07 7절 |
| 위치/크기 · global-search · h | 10 | Figma 10 | 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 | D-21 7-1/7-2; D-20; UX/07 7절 |
| 코드에만 · system-band | 10 | Figma 10 | 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 | D-21 7-1/7-2; D-20; UX/07 7절 |
| 코드에만 · topbar | 10 | Figma 10 | 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 | D-21 7-1/7-2; D-20; UX/07 7절 |
| 코드에만 · breadcrumb | 10 | Figma 10 | 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 | D-21 7-1/7-2; D-20; UX/07 7절 |
| Figma에만 · steps | 10 | 측정 매핑 오류 10 | 기존 DOM에 이름표 추가. 새 기능/겹친 상자 생성 금지 | app/src/screens/P02_Search.jsx; app/src/components/Help/RunSteps.jsx; app/src/screens/gl/parts.jsx |
| 위치/크기 · login-field · y | 9 | 코드 9 | 497 / 587 / 149 / 473 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · main · x | 9 | Figma 9 | 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 | D-21 7-1/7-2; D-20; UX/07 7절 |
| 색 · search-filter · fill | 8 | Figma 8 | D-15 회색 면/원색 강조,현재 코드 KRDS 토큰 | D-15; D-07; UX/gitlab_compare/v2/measure.md 1절 |
| 아이콘 · gitlab-sidebar | 8 | 측정 매핑 오류 4 / Figma 4 | 홈 + AI 소개 카드 /projects/150?fixture=kordoc / UX/17: 접힘/펼침 항목수 기반 Hug;피치32,화면 안 스크롤 | UX/audit_v3/M8_mapping.md; UX/17_사이드바_실측.md; D-16 |
| 아이콘 · sidebar-nav | 8 | 측정 매핑 오류 4 / Figma 4 | 홈 + AI 소개 카드 /projects/150?fixture=kordoc / UX/17: 접힘/펼침 항목수 기반 Hug;피치32,화면 안 스크롤 | UX/audit_v3/M8_mapping.md; UX/17_사이드바_실측.md; D-16 |
| 위치/크기 · section-title · h | 7 | 코드 7 | 2 / 40 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · toolbar · y | 6 | 코드 6 | 185 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · commit-bar · h | 6 | 코드 6 | 66 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · diff-file · x | 6 | 코드 6 | 40 / 580 / 764 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · diff-file · w | 6 | 코드 6 | 944 / 804 / 916 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · global-search · w | 6 | Figma 6 | 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 | D-21 7-1/7-2; D-20; UX/07 7절 |
| 문구 · global-search | 6 | Figma 6 | copy/ko.js,ui.js,gl.js,work.js의 현재 문구 / 사용자 원문·상대시간은 같은 자료 기준으로 재생성 | UX/07_밀도_문구_기준.md 5/10/11/13절; D-19 |
| 글자 속성 · global-search | 6 | Figma 6 | 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 | D-21 7-1/7-2; D-20; UX/07 7절 |
| Figma에만 · repo-path | 6 | Figma 6 | D-21 세로 사이드바+상단 바 틀로 통일. 폐기된 repo-tabs/header 틀 제거 | D-21 1장; UX/handson/README.md 0절 |
| 코드에만 · checks | 5 | Figma 5 | UX/14 지정 자리의 기존 코드 부품 추가 | UX/14_팀기능_배치.md 1/3절 |
| 위치/크기 · checks · y | 5 | 코드 5 | 277 / 313 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · checks · h | 5 | 코드 5 | 589 / 1245 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 문구 · checks | 5 | Figma 5 | copy/ko.js,ui.js,gl.js,work.js의 현재 문구 / 사용자 원문·상대시간은 같은 자료 기준으로 재생성 | UX/07_밀도_문구_기준.md 5/10/11/13절; D-19 |
| 모서리·안쪽·간격 · checks | 5 | 코드 5 | 간격 0→20 / 간격 0→12 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 아이콘 · checks | 5 | 코드 5 | ["check-circle"] | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| Figma에만 · project-row | 5 | 사용자 확인 5 | 로그인 내 작업 목록의 실제 데이터와 캡처1건 필요 | UX/audit_v3/parity_ledger.md pending |
| Figma에만 · comment-editor | 5 | 코드 5 | {"x":40,"y":717,"w":944,"h":122} / {"x":296,"y":717,"w":808,"h":122} / {"x":480,"y":717,"w":920,"h":122} / {"x":16,"y":1115,"w":328,"h":122} / {"x":32,"y":801,"w":704,"h":122} | UX/handson/gitlab/20_이슈목록.png; code_plan/figma_full.json |
| 글자 속성 · main | 5 | Figma 5 | 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 | D-21 7-1/7-2; D-20; UX/07 7절 |
| 코드에만 · tabs | 5 | 코드 5 | Figma에 없는 미지정 요소 제거 또는 기존 Figma 요소에 이름표 통합 | UX/audit_v3/capture_map.md; UX/14_팀기능_배치.md |
| 문구 · tabs | 5 | Figma 5 | copy/ko.js,ui.js,gl.js,work.js의 현재 문구 / 사용자 원문·상대시간은 같은 자료 기준으로 재생성 | UX/07_밀도_문구_기준.md 5/10/11/13절; D-19 |
| 문구 · gitlab-sidebar | 4 | 측정 매핑 오류 4 | 홈 + AI 소개 카드 /projects/150?fixture=kordoc | UX/audit_v3/M8_mapping.md |
| 위치/크기 · sidebar-nav · y | 4 | 측정 매핑 오류 4 | 홈 + AI 소개 카드 /projects/150?fixture=kordoc | UX/audit_v3/M8_mapping.md |
| 문구 · sidebar-nav | 4 | 측정 매핑 오류 4 | 홈 + AI 소개 카드 /projects/150?fixture=kordoc | UX/audit_v3/M8_mapping.md |
| 글자 속성 · section-title | 4 | Figma 4 | D-16 KRDS 글자 단계와 짝수 행간. 현재 코드 글자 토큰 | D-16; UX/07 4절 |
| 색 · section-title · text | 4 | 코드 4 | #ffffff color/text/inverse-static | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 코드에만 · gitlab-sidebar | 4 | Figma 4 | UX/17: 접힘/펼침 항목수 기반 Hug;피치32,화면 안 스크롤 | UX/17_사이드바_실측.md; D-16 |
| 코드에만 · sidebar-nav | 4 | Figma 4 | UX/17: 접힘/펼침 항목수 기반 Hug;피치32,화면 안 스크롤 | UX/17_사이드바_실측.md; D-16 |
| 아이콘 · task-search | 2 | 코드 2 | ["ellipsis-vertical","fork","globe","issues","merge-request","project","star"] | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 문구 · breadcrumb | 2 | Figma 2 | copy/ko.js,ui.js,gl.js,work.js의 현재 문구 / 사용자 원문·상대시간은 같은 자료 기준으로 재생성 | UX/07_밀도_문구_기준.md 5/10/11/13절; D-19 |
| 모서리·안쪽·간격 · diff-area | 2 | 코드 2 | 간격 24→16 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 위치/크기 · tabs · h | 2 | 코드 2 | 104 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 글자 속성 · page-head | 2 | Figma 2 | D-16 KRDS 글자 단계와 짝수 행간. 현재 코드 글자 토큰 | D-16; UX/07 4절 |
| 위치/크기 · gl-tabs · y | 2 | 코드 2 | 233 | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 색 · page-head · text | 1 | 코드 1 | #1e2124 color/text/basic | code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma) |
| 모서리·안쪽·간격 · login-card | 1 | Figma 1 | 사용자 확정 로그인 배치 유지:2열 묶음 중앙,왼쪽 공지/로고,모바일 세로 쌓기 | UX/07 7절; UX/gitlab_compare/v3/README.md 13절 |
| 코드에만 · profile-head | 1 | Figma 1 | 새 프로필은 실제 자료 길이에 맞춘 기존 코드 구조;1440/768/360 상태 이름표 동기화 | code_plan/measured_G-12_codeonly.json; UX/handson/gitlab/48_그룹_사용자페이지.png |
| 코드에만 · profile-activity | 1 | Figma 1 | 새 프로필은 실제 자료 길이에 맞춘 기존 코드 구조;1440/768/360 상태 이름표 동기화 | code_plan/measured_G-12_codeonly.json; UX/handson/gitlab/48_그룹_사용자페이지.png |
| 코드에만 · activity-calendar | 1 | Figma 1 | 새 프로필은 실제 자료 길이에 맞춘 기존 코드 구조;1440/768/360 상태 이름표 동기화 | code_plan/measured_G-12_codeonly.json; UX/handson/gitlab/48_그룹_사용자페이지.png |
| 코드에만 · profile-info | 1 | Figma 1 | 새 프로필은 실제 자료 길이에 맞춘 기존 코드 구조;1440/768/360 상태 이름표 동기화 | code_plan/measured_G-12_codeonly.json; UX/handson/gitlab/48_그룹_사용자페이지.png |

## 실행 상태

- 측정 매핑156건: A-02 경로104건(기존 커밋), 기존 DOM 이름표52건(results20/filters12/steps10/filter-search10)을 연결했다. 기능이나 모양은 바꾸지 않았다. 전체 공식 재측정 전이므로 해소 수로 확정하지 않는다.
- 코드1069건 중 project-row 아이콘38건은 1f7eba9에서 반영했다. 나머지1031건은 M8_code_queue.md와 JSON에 미수정으로 남는다. 판정 완료와 구현 완료를 혼동하지 않는다.
- Figma1010건은 M8_to_figma.md에 화면·폭·요소·속성·정답을 전달했다.
- 사용자 확인5행은 G-06 로그인 목록 한 사안이다(M8_user_checks.md).
- 로그인 안내30건은 부모의 D-12 확정에 따라 Figma로 돌렸다. 로그인 코드 두 파일은 바꾸지 않았다.
- 회귀: 검색/따라하기/추가 로그인 상태의1440·360 총10조합, 가로 넘침0/빈main0/pageerror0. 검사 JSON은 세션tmp M8-bulk-check.json. 이 JSON의 로그인 안내1회 표시는 임시 삽입 검증 당시 기록이므로 최종 코드 증거로 쓰지 않는다. 임시 삽입은 전부 원복했다. 최종 로그인은 audit-login-logo와 login-inspect로 따로 재검사한다.
