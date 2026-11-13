# 개발 안내

- 범위: 공공 깃랩의 기술 스택, 실행, 서버, 인증, 배포
- 서비스 소개: [README](../README.md)

## 기술 스택

- 화면: React 18, Vite, JavaScript(JSX), react-router-dom 6
- 스타일: KRDS 공식 CSS(SCSS 직접 빌드)와 연결 CSS, Tailwind 값은 KRDS 변수만 등록
- 서버: Node 22.13 이상, Express 4, 내장 SQLite
- 저장소 엔진: 공공 GitLab REST v4 읽기, GitLab 원본 무수정, GitLab UI 코드 미사용
- API 계약: [api/openapi.yaml](../api/openapi.yaml)(JSON 문법의 YAML 1.2 부분집합)
- 배포: GitHub Pages 정적 모드

## 실행

정적 모드(서버 없음):

```bash
cd app
npm ci
VITE_STATIC=1 npm run dev     # http://127.0.0.1:5731
```

서버 포함:

```bash
cd app && npm ci
KRDS_KIT_PATH=/절대/경로 npm run sync:krds   # 필요할 때만, 키트 사본은 app/public/krds에 포함
cd ../server && npm ci && npm run dev        # 포트 5732
cd ../app && npm run dev                     # 포트 5731, /api와 /auth를 서버로 연결
```

- 운영 프록시: 같은 출처 프록시 구성
- vercel.json: SPA 새로고침 처리만

## 폴더

- app/src/components: Figma 묶음 단위 공통 부품
- app/src/screens: 화면 파일(P01~P33, gl/, parts/)
- app/src/app/routes.js: 화면 번호와 주소 계약
- app/src/api: 공공 GitLab 읽기, 서버 클라이언트, 정적 모드(static.js), 저장 자료(snapshot.js), 고정 예시 자료(fixture.js), 소개 카드(cards.js)
- app/src/copy: 화면 문구 한 곳(ko.js, ui.js, gl.js, work.js)
- app/src/krds: KRDS 생성 CSS와 출처 JSON, 생성 파일 직접 수정 금지
- app/public/krds: 공식 키트 사본, sync:krds로 재생성
- app/public/data/snapshot: 점검 중 대체용 저장 자료, 측정용 고정 자료(users, groups)
- server/src/endpoints.js: 기능과 경로 메타데이터, 실행 핸들러는 products.js
- server/src/app.js: 공개 읽기 프록시와 제품 라우트 연결, products.js, analysis.js, catalog.js, auth.js, store.js 기능 분리
- UX: 과업 흐름, 화면 설계, 대조 기록

## Figma 대응

- 이름: Figma 이름과 컴포넌트 이름 일치, Type, Size, State, Label 속성과 같은 이름의 props
- 공식 CSS: public/krds 직접 수정 금지, 변경은 연결 계층과 결정 기록(UX)
- 값 구분: KRDS 그대로 쓰는 값과 서비스 확장 값, 어두운 화면(D-01)은 공식 선명한 화면과 별개 규칙
- 측정 이름표: data-figma, 측정 경로 표는 code_plan/figma_name_map.json
- 부품 대응: [COMPONENTS.md](COMPONENTS.md), [FIGMA_COMPONENTS.md](FIGMA_COMPONENTS.md)

## 코드 규칙

- 금지 기술: TypeScript, localStorage와 sessionStorage, 화면 코드의 직접 색과 px/rem, Tailwind 임의값, 이모지
- 금지 표현: KRDS 팔레트 밖 색, 장식 테두리, 같은 카드 반복, 근거 없는 통계, 화면 문구의 가운뎃점
- 토큰 보관: 서버 토큰은 VITE_ 환경변수와 브라우저 밖
- 모의 응답: mock:true와 미실행 안내 유지, 실제 분석이나 보안 점검이나 활동으로 표시 금지

## 검사

```bash
cd app
npm run sync:krds        # KRDS 키트 동기화
npm run audit:code       # 코드 규칙, 문구(가운뎃점 포함), 사이드바 토큰, 로그인 로고 검사
npm run check:palette    # 팔레트 검사
npm run check:sidebar    # 사이드바 명세 검사
npm run measure:full     # 코드 요소 상자 내보내기
npm run check:parity     # Figma 대조
npm run build

cd ../server
npm test
```

## 연동

- 공개 프록시: 공개 GET만, GitLab 토큰 미전송, 쪽당 최대 20건, 분당 30회, 동시 2개, 60초 캐시
- GITLAB_TOKEN: 인증 어댑터용 예약 환경변수, 공개 프록시 미사용
- 인증: OAuth, 세션, CSRF, 관리자 전용 보안 상세 권한 검사, OAuth 앱 등록 전 503 응답
- /mcp: JSON-RPC 초기화와 검색 도구(search_projects) 호출
- GitLab 업데이트: 화면 직접 덮어쓰기 금지, API 버전과 계약 테스트 유지

## 서버 기능

- F-01, F-03, F-04 업무 문장 검색, 분야 필터, 유사 후보: BM25, 2글자 n-gram, 업무용 동의어, 저장 자료
- F-02 규칙 분류와 근거 단어: 실제 주제 대응표(server/data/topic-mapping.json)
- F-05 유사 프로젝트 연결 후보: 저장 자료
- F-06 MCP 검색 도구: JSON-RPC
- F-11, F-23 README 자동 추출, 초안: README 원문
- F-12 예규, 고시, 시행일 후보: README 원문
- F-14 실행 환경 판정: 파일 구성 근거
- F-21, F-22 공개 준비 점검: 파일명과 README 패턴, 보안 상세는 관리자 전용, 파일 목록 최대 100개
- F-24 README 표준 양식: 제공 양식
- F-31 의견 저장: 인증 뒤 로컬 SQLite
- F-32, F-35 사용 기록, 도구 요청, 중복 방지 공감: SQLite, 기관과 사용일은 이용자 입력
- F-33 이용 현황 기관별 집계: 저장 자료
- F-36 커밋 원문 조회: 공공 GitLab 공개 API
- F-37 인수인계 초안: 공공 GitLab 공개 API 원문 조립
- F-38 단계별 제안 점검표: 제공 양식
- F-39 분류별 건수: 저장 자료
- 연결 예정: F-13 법령 변경 추적(법제처 키), F-34 공공데이터 연결, 임베딩 검색, 외부 AI 소개 카드 생성
- 어댑터 상태: /api/v1/integrations, 키 입력 뒤에도 외부 전송은 수동 전용

## 서버 데이터와 인증

- 공개 목록: 공식 API 1초 이상 간격 조회, 기준 날짜는 server/data/gitlab-public-snapshot.json의 observedAt
- 검색 색인: server/data/projects.csv와 새 공개 목록 병합, 새 목록에 없는 항목은 snapshotStatus=older-team-observation
- 색인 대상: 공식 공개 목록의 설명과 주제 문자열
- 주제 대응표: server/data/topic-mapping.json
- 저장소: Node 22.13 이상 내장 SQLite, DB_PATH로 위치 변경, SQLite 파일 커밋 제외
- OAuth: GITLAB_CLIENT_ID, GITLAB_CLIENT_SECRET, GITLAB_REDIRECT_URI, httpOnly SameSite 쿠키와 서버 메모리 토큰, 서버 재시작 때 세션 만료
- 개발 로그인: NODE_ENV=development와 DEV_AUTH=true 조건, is_dev 기록은 실제 기록과 분리
- 화면 개발 로그인: 개발 서버 ?auth=Signed-in, 사용자는 예시 자료 소유자(chrisryugj), 배포본 미사용
- 쓰기 요청: 로그인 뒤 /auth/session의 csrf 값을 X-CSRF-Token 헤더로

## 측정용 고정 자료

```bash
node scripts/snapshot/fetch-users.mjs     # G-12 사용자 프로필(chrisryugj), 요청 간격 1.1초
node scripts/snapshot/fetch-groups.mjs    # G-04 그룹 첫 쪽과 개수
node scripts/snapshot/build.mjs           # app/public/data/snapshot 생성
```

- 측정 주소 인자: ?fixture=kordoc&now=2026-11-07T10:00:00+09:00(개발 서버 전용)

## 배포(GitHub Pages, 정적 모드)

- 주소: https://hyunho2378.github.io/ai-public-gitlab/
- 게시: main push 때 .github/workflows/pages.yml이 app을 정적 모드로 빌드
- 로컬 빌드: cd app && npm run build:pages, 결과 app/dist
- 환경변수: VITE_STATIC=1, VITE_BASE(저장소 이름 경로, build:pages 스크립트에 지정)
- VITE_DASHBOARD_URL: 상단 띠 '프로젝트 현황판' 링크 주소, 비우면 원본 axboard.aigov.go.kr, 개발 서버는 app/.env.development(로컬 현황판 5804)

정적 모드 동작(app/src/api/static.js):

- 공공 GitLab 자료: 브라우저에서 https://gitlab.aigov.go.kr/api/v4 공개 API 직접 호출(CORS 허용), 서버와 같은 허용 경로만
- 검색, 분류, 실행 환경 판정, 공개 준비 점검, 소개 카드: 서버와 같은 코드(server/src/catalog-core.js, analysis.js, repository.js)의 브라우저 실행, 색인 원본은 빌드 때 dist/data/로 복사
- 로그인과 저장(의견, 사용 기록, 도구 요청, 공감, 보안 상세): 서버판 전용
- 새로고침: 빌드 때 index.html을 404.html로 복사, 서버판과 같은 주소 모양
- 공공 GitLab 점검 중: 저장 자료(app/public/data/snapshot) 자동 전환, 갱신은 scripts/snapshot/build.mjs
- 서버판(로그인, 저장 포함): server 별도 호스팅, 같은 출처 프록시 연결
