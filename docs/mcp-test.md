# 로컬 MCP 시험 기록(stdio)

- 작성일: 2026. 11. 15.
- 서버: `server/src/mcp-stdio.js`(줄 단위 JSON-RPC, 표준 입출력). 도구 정의와 처리는 `server/src/mcp-tools.js`, HTTP 경로 `/api/v1/mcp`도 같은 처리 사용
- 자료: `app/public/data/cards.min.json` 하나(웹과 같은 파일), 자료 버전 `2026-10-30-518f9d73`, 수집일 2026. 10. 30., 728개
- 검색: 웹과 같은 공통 검색 `app/src/api/searchCore.js`. 환경 변수 `SEARCH_URL`이 없어 이번 시험은 모두 일반 검색(fallback) 결과
- 로컬 실행 명령: `node server/src/mcp-stdio.js` (Claude Code 등록 예 `claude mcp add public-gitlab -- node <저장소 경로>/server/src/mcp-stdio.js`, 경로는 각자 컴퓨터 값으로 바꿔 사용)
- 호출 기록: 표준 오류에 `[mcp] 시각 {도구, 인자}` 한 줄씩 남김. 검색어 원문과 인증정보는 기록하지 않고 글자 수만 기록

## 시험 방법

`node`로 서버를 자식 프로세스로 띄워 `initialize`, `tools/list`, `tools/call` 9건을 표준 입력으로 보내고 표준 출력 응답을 확인. 개발도구(Claude Code)를 통한 시연은 별도 확인 필요, 이 기록은 서버 단독 호출 결과.

## 결과(2026. 11. 15. 실행)

| 번호 | 요청 | 결과 |
|---|---|---|
| 1 | initialize | 서버 이름 public-repository, 버전 0.3.0 응답 |
| 2 | tools/list | search_projects, get_project, find_similar 세 도구 응답 |
| 3 | search_projects `출장비 정산 계산` | status fallback, 10건, 첫 결과 615번 여비업무통합도우미(회계/예산/출장, README 기반), 원문 주소와 자료 버전 포함 |
| 4 | get_project 9번 | status ok, 배포된 카드 그대로(항목별 값, 근거 구분, 근거 위치, 생성 상태) |
| 5 | find_similar `엑셀 파일로 부처별 예산 자료를 내려받는 기능` | status fallback, similarityJudged false(유사 판단 미수행 표시), 10건 |
| 6 | get_project 999999 | status not-found, isError true(자료 읽기 실패와 구분) |
| 7 | search_projects `가` | status invalid, 오류 종류 short, 글자 수 1, isError true |
| 8 | search_projects 일치 없는 말 | status fallback-empty, 0건 |

- 호출 기록(stderr) 6줄: search_projects 3회(글자 수 9, 1, 17), get_project 2회(9, 999999), find_similar 1회(글자 수 25), 호출 수와 일치
- 단위 시험: `cd server && node --test test/mcp.test.js` 9건 통과(자료 버전, 세 도구, 입력 오류, 분야 조건, 카드 일치, AI 주소 있을 때 검증과 대체, 자료 읽기 실패, 버전 불일치)

## 아직 시험하지 않은 항목

- Claude Code에서 출장비 계산 도구 제작 요청을 한 실제 시연과 그 호출 기록
- AI 함수 주소(`SEARCH_URL`)를 설정한 상태의 호출(AI 함수 미배포, 응답 형식 검증은 단위 시험으로만 확인)
- 웹 검색 결과와 도구 결과의 화면 대조(웹 화면 연결 전)
