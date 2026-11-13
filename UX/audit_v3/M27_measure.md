# M27 측정 담당 전달(코드 담당)

- 공통 원인: M-27 측정 시점에 공공 깃랩 점검 중. 2026. 11. 13. 18:39 KST 확인: REST /api/v4/* 200 HTML 점검 안내(CORS 헤더 없음), GraphQL POST 405
- 결론: 145건 전부 코드나 Figma 결함 아님, 공공 깃랩 응답에 기대는 화면의 측정 환경 요인
- 다음 측정 조건: 공공 깃랩 정상 응답 확인 뒤 재측정, 또는 아래 고정 저장본 준비 뒤 fixture 경로 측정

## 원인별

| 원인 | 화면 | 행 | 확정 원인 | 처리 |
|---|---|---:|---|---|
| readme h 4684/5152, preview h 4655/5118 | A-02, R-01, R-03 | 30 | README 상대 경로 그림 docs/readme-hero.gif가 공공 깃랩 원문 주소(/-/raw/main/)로 불려 점검 안내 HTML을 받고 깨진 그림(높이 0). 외부 배지(shields.io)는 정상 200 | 측정 쪽: 공공 깃랩 정상 때 재측정, 대기 조건에 본문 img 전부 complete 그리고 naturalWidth>0(실패 그림이 있으면 그 변형을 '환경 요인'으로 기록). 코드 고정 없음(그림 원본 크기를 받을 수 없어 지어내지 않음) |
| profile-activity h·문구 | R-12 | 20 | 댓글은 공개 GraphQL에서만 읽음(REST notes 비로그인 401), 점검 중 405로 빈 활동 | 코드: GraphQL 고정 저장본 연결(36e1436). 저장본은 scripts/snapshot/fetch-graphql.mjs로 공공 깃랩 복구 뒤 받기(점검 중에는 받지 않고 중단) |
| Figma에만 gl-filter, filter-search, filter-display, filter-settings, filter-expand | R-13 보드 | 50 | 보드 자료 GraphQL 실패 → '저장된 자료에 없습니다' 상태만 남아 필터 막대 미표시. 요소는 코드에 있음(정상 응답 때 M-25 원장 0) | 위와 같음 |
| Figma에만 gl-tabs, filter-search | R-14 라벨 | 20 | 라벨 GraphQL 실패, 같은 이유 | 위와 같음 |
| gl-tabs 문구 '전체 완료' / '전체 6' | R-19 작업 | 10 | 작업 GraphQL 실패로 개수 없음 | 위와 같음 |
| main 글자 속성 | R-22 스니펫 | 5 | 스니펫 GraphQL 실패로 본문이 '저장된 자료에 없습니다' 한 줄(15/22)만 남음 | 위와 같음 |
| checks 문구 5/8 / 7/8 | A-03 | 10 | 점검 입력이 실시간 대신 저장 자료로 대체되며 저장 자료가 맨 위 폴더 목록만 줘서 시험 파일, .github/workflows가 빠짐. 저장 자료 기준 정답도 7/8(실시간 입력과 같은 펼친 목록, 실행 환경만 보완 필요) | 코드: 저장 자료에 펼친 파일 목록 추가(60cc220), 노드 재현 7/8. 점검 HTML 200 대응(d54ecd3) |

## 공공 깃랩 복구 뒤 순서

```bash
node scripts/snapshot/fetch-graphql.mjs   # app/public/data/snapshot/graphql/kordoc.json
```

- 그다음 fixture 경로 재측정: R-12, R-13, R-14, R-15, R-17, R-19, R-22는 저장본으로 고정, 점검과 무관
- README 그림(A-02, R-01, R-03): 공공 깃랩 원문 그림이라 정상 응답 때 측정
