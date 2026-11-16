# 업무 검색과 유사 프로젝트 검색

Vercel 프로젝트의 Root Directory를 `app`으로 설정한다. 앱 빌드에서 `../server`와 `../sample`을 읽으므로 루트 밖의 소스 파일도 포함한다. Node.js 22를 사용한다.

서버 환경 변수에 `SEARCH_COMPLETIONS_URL`(Chat Completions 호환 HTTPS 엔드포인트), `SEARCH_MODEL`, `SEARCH_API_KEY`를 설정한다. 모델은 JSON 객체 응답을 지원하고 전체 후보를 처리할 수 있어야 한다. 허용할 웹 출처는 `SEARCH_ORIGINS`에 쉼표로 구분해 넣는다. 기본값은 `https://hyunho2378.github.io`이다.

배포 후 GitHub Actions 저장소 변수 `VITE_SEARCH_URL`에 함수의 전체 주소 `https://<배포 도메인>/api/search`를 넣고 Pages를 다시 빌드한다. MCP 실행 환경의 `SEARCH_URL`도 같은 주소로 설정한다. 양쪽 배포에서 같은 버전의 카드 JSON을 사용한다.

## 호출

`POST /api/search`, Content-Type은 `application/json`. 필수 값은 query(앞뒤 공백을 뺀 2~500자)이다. mode는 task(기본값) 또는 similar이다. fields는 분야 배열, excludeIds는 제외할 프로젝트 번호 배열이다. dataVersion은 호출자가 읽은 카드 버전이다.

요청 예시:
```json
{"query":"출장비 정산에 쓸 도구","mode":"task","fields":[],"excludeIds":[]}
```

성공 응답은 `{dataVersion, items}`이며, 각 항목에 `id, reason, level, difference, basisLines`가 있다. 유사 검색은 high 또는 medium과 확인 가능한 차이 한 줄을 제공하며, 확인할 수 없는 차이는 null이다. 근거 줄은 카드에서 가져온다. 빈 결과는 빈 배열이다. 버전이 다르면 함수가 보유한 버전과 빈 배열을 반환하며 화면은 일반 검색으로 대체한다. 모델 호출 실패 또는 응답 형식 오류는 HTTP 502, 서버 설정 누락은 503이다.

## 평가

`app`에서 `node scripts/evaluate-search.mjs <질의 JSON 경로> [카드 JSON 경로]`를 실행한다. 기본값은 화면과 같은 일반 대체 검색이다. 실제 AI 평가에는 함수 주소를 SEARCH_URL로 지정한다. AI 호출 실패는 적중률로 집계하지 않고 오류로 표시한다. 카드 PR 반영 전에는 민우님 PR에서 추출한 카드 JSON을 마지막 인수로 지정한다.
