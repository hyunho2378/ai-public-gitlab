# M14 판정 (코드 담당 작성)

- 기준 순서: D-xx 사용자 결정·UX/07 > 실제 공공 깃랩 실측(capture_map.md 캡처, 직접 측정) > 실측 없는 요소는 Figma. 이어받은 판정: M13_decisions_new.md(Figma 담당), M13_to_figma.md·M12_to_figma.md(코드 담당, 실측 근거)
- M-14 원장(925행)의 '신규 판정 필요' 243행과, M8~M11 '코드' 판정을 이어받았지만 M12·M13에서 실측으로 Figma 쪽이 된 행을 함께 정리했다. 원장 M-14가 M12·M13 행 판정 파일을 읽지 않아 '코드'로 남은 행이 있다
- 코드 재측정(이 문서 작성 시점, 개발 서버 5994, 고정 시각, 스크롤 막대 0, G-04·G-12는 fixture=kordoc 저장 자료): 합 822(M-14 925). 측정한 전 변형 가로 넘침 0
- 고정 저장 자료: G-12 사용자 chrisryugj = 2026-11-07T08:48:42Z(17:48:42 KST) 저장, 이벤트 1,159건 중 측정 기준 시각(10:00 KST) 이전만 사용. G-04 그룹 첫 쪽 20개와 개수 = 2026-11-07T09:08:35Z(18:08:35 KST)

## 1. 신규 판정 243행

| 원인(분류 · 요소 · 항목) | 행 | 판정 | 근거 | 처리 |
|---|---:|---|---|---|
| 문구 profile-event | 48(+Figma 12) | 측정 자료 고정 → Figma | 활동을 실시간 API에서 받아 측정마다 바뀌었음 | 코드: 저장 자료 고정(744701a). 재측정에서 문구 차이 0. Figma는 같은 저장 자료 20행 문구 유지 |
| 문구 group-row(G-04, M-14 29 → 재측정 74) | — | 측정 자료 고정 → 코드 | 그룹마다 3번씩 차례로 숫자를 받아 측정 시점에 '-'가 섞였음 | 코드: 저장 자료 고정(1305430). 재측정에서 문구 차이 0 |
| 위치/크기 project-row y·h(G-01/G-02) | 18 + 32 | Figma | 설명 2줄 말줄임 글 상자가 Figma에서 h40 고정. 같은 13/20, 폭704에서 코드는 한 줄 | M14_to_figma 1 |
| 위치/크기 results h(A-01/G-02) | 10 | Figma | 결과 줄 수는 자료 길이. 코드 9행, Figma 8행(반복 표본) | M14_to_figma 2 |
| 위치/크기 readme h | 2 | Figma | 렌더 높이(실측 R-03 본문도 코드에 가까움) | M14_to_figma |
| 모서리·안쪽·간격 extra-field | 20 | Figma | M13_decisions_new: 코드 칩 안쪽 8(KRDS 태그) | Figma 담당 처리 대기 |
| 위치/크기 extra-field y(360/768) | 8 | Figma | 정보 열 위치를 따름(M13_decisions_new) | 같음 |
| G-12 profile-head·page-head·profile-activity·activity-calendar·profile-info y, activity-calendar 간격, profile-event y·h | 3+3+3+3+1+3+6+3 | Figma | 코드 머리는 본문 위 121에서 시작(모든 화면 공통), Figma 125. 달력 간격 12는 코드 부품 값. 활동 높이는 저장 자료 글 길이 | M14_to_figma 3 |
| Figma에만 toolbar·project-row(G-06 Signed-in) | 5+5 | 자료 없음 | 개발 서버 정적 모드에서 로그인 자료(내 프로젝트)가 없어 안내 문장만 나옴. 숫자·목록을 지어내지 않음 | 보류 |
| 위치/크기 checks h, 간격(A-03 360) | 1+1 | Figma | 코드 간격은 KRDS 제목-본문 반응형 토큰(--rb-title-body: PC 20, 모바일 12). Figma 360도 12 | M14_to_figma 4 |
| 문구 section-title(R-02) | 10 | 코드 | 실측 하위 폴더 화면: 제목 줄에 폴더 이름 + '파일 찾기' + '코드' | 코드 반영(e784d1a, efad3f7). 남은 2행은 360 아이콘만 표시 |
| 아이콘 section-title(R-02) | 10 | 코드 | 같음 | 코드 반영. 360 2행은 좁은 화면 '코드' 대신 내려받기 아이콘(코드 규칙) → Figma 360도 아이콘 |
| 위치/크기 filter-search x(R-14) | 10 | Figma | 오른쪽 정렬 단추 폭 = KRDS small(12+글+4+16+12). Figma 안쪽이 다름 | M14_to_figma 5 |
| 위치/크기 filter-search y(R-14) | 10 | 코드 | 49 막대 가운데가 맞음(Figma 130). 코드는 도구 아래 안쪽8로 위로 치우침 | 코드 반영(c5e3388) 125 → 129 |
| 모서리·안쪽·간격 gl-tabs(R-14, 8 → 0) | 10 | Figma | 탭은 서로 붙는 KRDS 탭(간격0, 탭 안쪽으로 띄움) | M14_to_figma |
| 모서리·안쪽·간격 code-button(R-17, 12 → 8) | 10 | Figma | 폭은 두 쪽 같음(64). 코드 '코드' 단추 안쪽8 + 아이콘 간격4가 코드 부품 값 | M14_to_figma |
| Figma에만 tabs(R-27) | 5 | 측정 매핑 | role=developer 측정 필요(M13_decisions_new) | 측정 담당 |
| 위치/크기 section-title y·h(R-02) | 2+2 | 코드 | R-02 제목 줄 구조 변경으로 해소 | 해소 |
| 모서리·안쪽·간격 page-head(R-05 360, G-07) | 2 | Figma | R-05 360은 실측 정규화 명세(M12_to_figma), G-07은 공통 머리 40(G-04와 같은 판정) | M14_to_figma |
| 모서리·안쪽·간격 commit-bar(R-03 360) | 2 | Figma | 코드 360 커밋 막대는 실제 모바일 구조를 맞춘 것(169ab3b) | M14_to_figma |

## 2. '코드'로 이어받았지만 실측 근거로 Figma 쪽인 행(M13_to_figma.md 근거)

| 원인 | 재측정 행 | 근거 요약 |
|---|---:|---|
| R-01·A-02 project-info y·h, language-bar y, page-head w | 8+16+8 | 실측: 머리 전체 폭, 정보 열은 머리 아래 16 |
| R-01·A-02 아이콘 file-table·readme | 20+20 | file-table은 `icon-file/*` 이름 대응. readme는 실측 문서 아이콘 + 코드 묶음 copy |
| R-01·A-02 readme h·모양 | 20+8 | 마크다운 렌더 높이. 실측과 코드 같은 구조 |
| R-03 preview y·h·아이콘, commit-bar 아이콘 | 2+10+0+2 | 실측: 파일 상자 위 +50. 본문 펼침 단추 |
| R-05 diff-area·diff-file(60) | 60 | 실측 지연 로딩으로 아직 상자 없음 → 보류 |
| R-11·R-16·R-20·R-23·G-01 filter-search x, R-11 filter-clear x | 26+8 | 캡처 20·25와 KRDS small 단추 폭. G-01 360은 데스크톱 Figma와 같은 오른쪽 안쪽12 |
| R-17 tabs y·h, profile-activity w·모양 | 6+2+6+10 | 실측 MR 상태줄 40. 본문 열 768(D-21 7). 영역 간격 24는 D-21(실측 16) 충돌 → D-21 유지 |
| R-30 steps y·h | 20 | 부모 결정 2로 단계 표시 제거 뒤 남은 차이는 내용(폼 절) 차이. 내용 삭제 금지 |
| R-25 section-title y | 10 | 실측 절 간격 450/434, 코드가 더 가까움 |
| G-04 search 모양·폭, gl-filter h·아이콘, group-row y(360) | 8+2+2+2+6 | 실측 360: 검색 전체 폭, 정렬은 둘째 줄 |
| G-04 tabbar(Figma에만) | 20 | G-01 같은 부품에 tabbar 층 없음 |
| A-09·G-06·G-07 Figma에만 tabs | 20 | 로그인 자료 없음(보류) |
| R-04 gl-filter 간격·글자색 | 10+10 | 입력 상자 안 배치 표현 차이(위치 같음). 글자색은 sr-only 첫 글 측정 이름표 문제 |
| R-09 page-head 아이콘 | 10 | 판정 없음. 다음 판 |
| R-12 profile-activity h·w·y, comment-editor | 10+4+6+5 | 활동 묶음은 코드에 추가(b37a0d9). Figma 문구 '공개된 활동 기록이 없습니다'는 실제와 다름(실제 댓글 1개). 작성란은 쓰기 서버가 없어 보류 |

## 3. 판정 대기(사용자·측정)

- sidebar-nav w/h: 측정 방법 문제(부모 지시, 손대지 않음)
- 사용자 확인 5, 둘 다 2(M-14 원장 그대로)
