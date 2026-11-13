# 팀 작업 규칙

## 작업 순서
- 브랜치: `feat/이름-기능` (예: `feat/eunjin-search`)
- 올리기: 브랜치에서 PR, main 직접 올리기 금지
- PR 검사: GitHub Actions `PR 검사`(audit:code, 앱 빌드, 현황판 빌드) 통과 필수
- 병합: 주현호 확인 후 main 병합
- 배포: main 병합 즉시 GitHub Pages 자동 배포(hyunho2378.github.io/ai-public-gitlab)

## 실행
- 설치: `cd app && npm ci`
- 개발 서버: `VITE_STATIC=1 npm run dev`
- 규칙 검사: `npm run audit:code`
- 고정 자료 화면: 주소 끝 `?fixture=kordoc` (저장 자료만 사용)
- 고정 시각: 주소 끝 `&now=2026-11-07T10:00:00%2B09:00` (상대 시간 고정, 개발 서버 전용)

## 파일 담당
- 김민우: `scripts/cards/`, `data/cards/`, `app/public/data/cards.min.json`, `server/src/products.js`
- 한은진: 검색 함수 폴더, `app/src/api/search.js`, `app/src/screens/P02_Search.jsx`
- 장준호: `app/src/api/cards.js`, `app/src/screens/P01_Home.jsx`, `app/src/screens/P04_Project.jsx`, `app/src/screens/P26_Insights.jsx`의 `Mcp`
- 주현호: `dashboard/`, `app/src/copy/`, `app/src/components/`, `app/src/krds/`, 측정 스크립트, Figma
- 박만재: `data/eval/`
- 담당 밖 파일: 필요한 줄만 고치고 PR 설명에 담당자 표시

## 화면 번호
- 기능제안서 G-01(전체 목록): 코드 `A-01`, 주소 `/`
- 기능제안서 A-01(업무 검색): 코드 `G-02`, 주소 `/search`
- 기능제안서 A-02(소개 카드): 코드 `A-02`, 주소 `/projects/:id/about`
- 기능제안서 A-03(공개 준비 점검): 주소 `/projects/:id/publish-check`
- 기능제안서 A-07(MCP 안내): 주소 `/mcp`
- 현황판: `dashboard/`, 주소 `/dashboard/`
- 부를 때: 화면 번호 대신 주소

## 화면 규칙
- 문구 위치: `app/src/copy/` 한 곳, 화면 파일에 글자 직접 입력 금지
- 문구 표기: 가운뎃점, 느낌표, 이모지, 줄표 금지. 나열은 쉼표 또는 빗금
- 색과 간격: KRDS 변수(`--krds-*`)와 `app/src/krds/layout.tokens.css`의 `--layout-*`만
- 부품: `app/src/components/` 공통 부품 재사용, 새 부품은 주현호 확인
- Figma 대응: 부품 맨 위 `// Figma: 부품 이름` 주석, `data-figma` 이름표 유지
- 비밀값: AI 키는 서버리스 함수 쪽만, `VITE_` 변수와 화면 코드 금지

## 자료 기준
- 수집 기준일: 재수집 날짜 하나로 계획서, 현황판, 발표 수치 통일
- 공공 깃랩 상태: 2026. 11. 12.부터 점검 중, 재개 일정 미정(11. 13. 확인)
- 점검 중 작업: 기존 수집본(2026. 10. 30., 728개) 기준일 유지, 재개 후 재수집과 교체
- 시연 자료: F7~F9 입력과 결과는 실제 수치(F6 현황판)에 합산 금지
