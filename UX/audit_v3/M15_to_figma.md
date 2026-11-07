# M15 Figma 쪽 전달 (코드 담당)

판정 근거는 M15_decisions.md. M14_to_figma.md·M13_to_figma.md에서 아직 처리 안 된 행은 그대로 유효하다(특히 project-row 설명 Hug, R-01·A-02 정보 열 y185, file-table 아이콘 이름 대응, R-03 preview y).

| 화면 | 폭 | 요소 | 속성 | 현재 Figma | 정답값 | 근거 |
|---|---|---|---|---|---|---|
| A-01, G-01, G-02 | 전 폭 | project-row | h | 설명 줄 수를 Figma 글 계산으로 | 코드 측정 높이(설명 Hug, 최대 2줄 말줄임). 예: A-01 1024 #6·#7 91 | 브라우저 렌더 기준 |
| G-07 | 전 폭(Signed-in) | body·content-panel·gitlab-sidebar | y | 74 | 72 | D-21 공통 틀(띠24 + 상단 바48) |
| G-07 | 전 폭(Signed-in) | breadcrumb / main / sidebar-nav | y | 83 / 123 / 120 | 81 / 121 / 118 | 위 행 연쇄 |
| R-02 | 360 | section-title | 구성·h·글자 | 제목만 32, 24/32 | 제목 24/32 → 16 → '파일 찾기' 전체폭32 → 8 → '코드' 글 단추(전체폭−40) + 더보기32. h120 | 실측 360 .tree-controls 세로 |
| R-02, R-03 | 360 | commit-bar, file-table, preview | y | 217 / 281 / 471 | 265 / 329 / 503(코드값) | 위 머리 높이 연쇄 |
| R-12 | 768 | section-title | h | 28 | 56(제목 두 줄) | 자료 길이, 글 상자 Hug |
| R-12 | 전 폭 | profile-activity | 문구·폭·h | '공개된 활동 기록이 없습니다', 808 | 실제 댓글 1건(서울특별시 광진구 류승인 · 3 개월 전, 본문 첫 줄), 폭 본문 전체, 비로그인은 '회신하려면 등록 또는 로그인 하십시오' | 실측 작업 항목 55 |
| R-25 | 360 | section-title#2 | h | 56 | 28(문구 '코드 커버리지 통계' 한 줄) | 문구는 M11 판정 그대로 |
| G-06 | 전 폭(Guest) | section-title | 층·상자 | 2px 구분선에 이름표 | 안내 제목 글 상자(x 본문+24, h22) | 이름표 층 오류 |
| A-05 | 360 | tabs | y | 191 | 191 | 코드가 맞춤(29febef). 조치 없음 |
| A-01, G-02 | 전 폭 | filters | 채움 | raised-bg | 없음(투명) | 캡처44 |
| A-01, G-02 | 360·768 | search-filter | 채움 | btn-fill-bg | 없음(테두리 단추) | 같음 |
| G-02 | 전 폭 | filters | 문구(개수) | 6 | 3(저장 자료 검색 결과) | fixture 저장 자료 |
| R-17 | 360 | tabs | h | 104(두 줄) | 49(한 줄, 넘치면 가로 밀기) | 실제 모바일 탭 |
| R-05 | — | diff-area·diff-file | — | — | 보류: 트리 폭 결정 대기(M15_decisions 3절 실측값) | — |
