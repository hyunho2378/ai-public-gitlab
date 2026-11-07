# 캡처-화면 대응표

파일명만으로 내용을 확정하지 않는다. 아래는 UX/handson/README.md의 방문 기록과 파일 번호에 따른 대응이다. 원본은1920 CSS 폭(2배 이미지), 모바일360만 별도다. v3 합성 캡처는 README에 명시된 1280/1440/1920/768/360을 따른다.

| 화면 | 원본 캡처 | 폭 | 판정 범위 / 주의 |
|---|---|---|---|
| G-01 | UX/handson/gitlab/01_탐색_프로젝트목록_기본.png | 1920 | 원본 화면 구조와 요소 존재 |
| R-01 | UX/handson/gitlab/02_프로젝트홈_기본.png | 1920 | 원본 화면 구조와 요소 존재 |
| R-02 | UX/handson/gitlab/07_파일트리_폴더_src.png | 1920 | 원본 화면 구조와 요소 존재 |
| R-03 | UX/handson/gitlab/08_파일보기_코드_README.png | 1920 | 원본 화면 구조와 요소 존재 |
| R-04 | UX/handson/gitlab/13_커밋목록.png | 1920 | 원본 화면 구조와 요소 존재 |
| R-05 | UX/handson/gitlab/14_커밋상세_diff.png | 1920 | 원본 화면 구조와 요소 존재 |
| R-06 | UX/handson/gitlab/18_비교_선택.png | 1920 | 원본 화면 구조와 요소 존재 |
| R-07 | UX/handson/gitlab/15_브랜치목록.png | 1920 | 원본 화면 구조와 요소 존재 |
| R-08 | UX/handson/gitlab/16_태그목록.png | 1920 | 원본 화면 구조와 요소 존재 |
| R-09 | UX/handson/gitlab/17_릴리스목록.png | 1920 | 원본 화면 구조와 요소 존재 |
| R-10 | UX/handson/gitlab/23_기여자분석.png | 1920 | 원본 화면 구조와 요소 존재 |
| R-11 | UX/handson/gitlab/20_이슈목록.png | 1920 | 원본 화면 구조와 요소 존재 |
| R-12 | UX/handson/gitlab/20_이슈목록.png | 1920 | 작업 항목 목록 캡처만 존재, 상세 댓글 편집기는 실측 없음 |
| R-13 | UX/handson/gitlab/54_이슈보드.png | 1920 | 원본 화면 구조와 요소 존재 |
| R-14 | UX/handson/gitlab/26_라벨.png | 1920 | 원본 화면 구조와 요소 존재 |
| R-15 | UX/handson/gitlab/27_마일스톤.png | 1920 | 원본 화면 구조와 요소 존재 |
| R-16 | UX/handson/gitlab/21_머지리퀘스트목록.png | 1920 | 원본 화면 구조와 요소 존재 |
| R-17 | UX/handson/gitlab/36_MR상세_개요.png | 1920 | 원본 화면 구조와 요소 존재 |
| R-18 | UX/handson/gitlab/29_파이프라인.png | 1920 | 원본 화면 구조와 요소 존재 |
| R-19 | UX/handson/gitlab/56_Jobs.png | 1920 | 원본 화면 구조와 요소 존재 |
| R-21 | UX/handson/gitlab/28_위키.png | 1920 | 원본 화면 구조와 요소 존재 |
| R-22 | UX/handson/gitlab/55_스니펫_프로젝트.png | 1920 | 원본 화면 구조와 요소 존재 |
| R-23 | UX/handson/gitlab/25_멤버.png | 1920 | 원본 화면 구조와 요소 존재 |
| R-25 | UX/handson/gitlab/30_리포지토리분석.png | 1920 | 원본 화면 구조와 요소 존재 |
| G-04 | UX/handson/gitlab/40_탐색_그룹.png | 1920 | 원본 화면 구조와 요소 존재 |
| G-01t | UX/handson/gitlab/41_탐색_주제.png | 1920 | 원본 화면 구조와 요소 존재 |
| G-01s | UX/handson/gitlab/42_탐색_스니펫.png | 1920 | 원본 화면 구조와 요소 존재 |
| G-02 | UX/handson/gitlab/44_전역검색_결과_hwp.png | 1920 | 원본 화면 구조와 요소 존재 |
| G-08 | UX/handson/gitlab/46_로그인화면.png | 1920 | 원본 화면 구조와 요소 존재 |
| G-12 | UX/handson/gitlab/48_그룹_사용자페이지.png | 1920 | 사용자 페이지 외형만 대응, 신규 프로필 변형은 Figma 기준 |
| R-01 | UX/handson/gitlab/52_모바일360_프로젝트홈.png | 360 | 모바일 직접 캡처 |
| R-03 | UX/handson/gitlab/53_모바일360_파일보기.png | 360 | 모바일 직접 캡처 |

## 별도 실측

| 파일 | 화면 / 폭 | 적용 |
|---|---|---|
| UX/gitlab_compare/v3/README.md | 탐색/그룹/주제/검색/홈/파일/커밋목록/상세/브랜치/MR목록/상세/작업항목,1280/1440/1920/768/360 | 캡처 목록과 이미 기록된 수치 |
| UX/gitlab_compare/v2/measure.md | 탐색/홈,1440/1920 | 색 층, 필터65, 안쪽16, 조작32. D-21 여백 우선 |
| UX/17_사이드바_실측.md | 사이드바1280/1440/1920,서랍360/768 | 폭240/44,목록224−스크롤바,피치32(D-16) |
| UX/handson/README.md 0절 | 47/50/69 | 47은 로그인,50은 tree,69는 비로그인 로그인 이동. 파일명만 보고404/설정 실측으로 쓰지 않음 |
| UX/audit_v3/search_breakpoints.md | 검색1440/1280/1024/768/360 | 범위 열1024 이상,모바일 필터 단추 |

R-26, G-08b~e, 새 덧붙임은 해당 상태의 직접 실측 없음. 화면 공통 틀은 D-21, 문구는 UX/07, 그 외는 Figma를 적용한다. measured_full.json은 로컬 코드 측정이며 공공 깃랩 실측이 아니다.
