# 공공 깃랩

[![Deploy](https://img.shields.io/badge/github%20pages-deployed-222222.svg)](https://hyunho2378.github.io/ai-public-gitlab/)
[![KRDS](https://img.shields.io/badge/design%20system-KRDS-256ef4.svg)](https://www.krds.go.kr/)

- 공공 깃랩: AI 정부 실험실 공공 GitLab(gitlab.aigov.go.kr) 공개 프로젝트의 KRDS 화면
- 기준: 공공 GitLab과 같은 화면 구조, 기능 이름, 단축키
- 덧붙임: 비전공 공무원의 도구 찾기와 판단을 위한 소개 카드, 업무 분야 분류, 업무 문장 검색, 공개 준비 점검
- 자료 출처: 공공 GitLab 공개 API

![프로젝트 홈](docs/images/home.jpg)

## 주소

| 화면 | 주소 |
| --- | --- |
| 공공 깃랩 | [hyunho2378.github.io/ai-public-gitlab](https://hyunho2378.github.io/ai-public-gitlab/) |
| 프로젝트 홈과 소개 카드 | [/projects/150](https://hyunho2378.github.io/ai-public-gitlab/projects/150) |
| 도구 찾기 | [/search?q=출장비 계산](https://hyunho2378.github.io/ai-public-gitlab/search?q=%EC%B6%9C%EC%9E%A5%EB%B9%84%20%EA%B3%84%EC%82%B0) |
| 공개 준비 점검 | [/projects/150/publish-check](https://hyunho2378.github.io/ai-public-gitlab/projects/150/publish-check) |
| AI 코딩 도구 연결 | [/mcp](https://hyunho2378.github.io/ai-public-gitlab/mcp) |
| 원본 | [gitlab.aigov.go.kr](https://gitlab.aigov.go.kr) |

## 핵심 기능

- 프로젝트 둘러보기: 공개 프로젝트 목록, 활성과 비활성 구분, 3자 이상 키워드 검색, 업무 분야 필터, 업데이트 날짜 정렬
- 도구 찾기: 업무 문장으로 관련 프로젝트 검색, 검색 결과 위 3개와 더보기
- 소개 카드: 프로젝트 홈 정보 열의 하는 일, 실행 형태, 이용 조건, 기준 날짜, 'AI 정리' 표시, README 근거 줄
- 업무 분야 분류: 표기가 섞인 주제의 분야 체계 통합, 분야 필터 값
- 공개 준비 점검: .gitignore, README, 하는 일, 사용 방법, 실행 환경, 이용 조건, 시험 파일, 자동 점검 설정 8개 항목, 제작자 전용 보안 점검 상세
- 사용 기록: 별표 옆 단추, 사용 기관과 날짜와 한 줄 메모
- 업무 지원 묶음: 도구 요청(필요 도구 요청), 이용 현황(분야와 기관별 도구 분포), 공동 개발(같은 도구 제작 기관 연결)
- AI 코딩 도구 연결: MCP 검색 도구(search_projects), 연결 안내 화면
- 공공 GitLab 기본 화면: 프로젝트 홈, 파일, 커밋, 브랜치, 태그, 릴리스, 작업 항목, 머지 리퀘스트, 파이프라인, 위키, 패키지, 멤버, 라벨, 마일스톤, 활동, 사용자 프로필
- 개발자 동작: 검색 `/`, 도움말 `?`, 파일 찾기 `t`, 파일 트리 `Shift+F`, 코드 메뉴(HTTPS와 SSH 복사, 압축 내려받기), 브랜치 검색, 나란히 비교
- 반응형: 1920, 1440, 1024, 768, 360 다섯 폭, 1280 미만 세로 바 접힘, 768 미만 서랍
- 점검 중 대체: 공공 GitLab 점검, 오류, 시간 초과 때 저장 자료 화면
- 소개 카드 근거: README 원문과 파일 목록, 칸마다 근거 줄
- 기능 번호와 화면 구성: [PRD.md](PRD.md)(F-01~F-39)

## 이용자별 화면

- 찾기(비전공 공무원): 도구 찾기, 업무 분야 필터
- 찾기(개발자): 프로젝트, 그룹, 주제 탐색, 키워드 검색, 최근 검색
- 이해(비전공 공무원): 소개 카드, 근거 줄, 기준 날짜
- 이해(개발자): README, 파일 표, 최근 커밋, 언어 비율
- 사용(비전공 공무원): 실행 형태, 사용 방법, 사용 기록
- 사용(개발자): 코드 메뉴, 파일 찾기, 브랜치, 머지 리퀘스트
- 올리기(비전공 공무원): 새 프로젝트 만들기 전 유사 도구 확인, README 표준 양식
- 올리기(개발자): 공개 준비 점검, README 제안

## 디자인 시스템과 Figma

- 디자인 시스템: KRDS v1.0.0 공식 CSS와 연결 CSS, 색, 글꼴, 간격, 모서리, 그림자의 KRDS 변수 연결
- Figma 파일: [AX.S] Public GitLab Rebuild_DS, 화면 57개, 변형 598개
- 코드 대응: Figma 부품 이름과 코드 이름표(`data-figma`) 일치
- 양방향 대조: 화면, 폭 5개, 로그인 2가지 조합 563개 변형의 요소 상자(x, y, 너비, 높이) 1px 이내 대조, 최근 원장 0건(M-25)
- 개발팀 구현 기준: Figma 화면, 이 저장소는 우리 팀의 계속 개발용

```bash
npm run measure:full    # 코드 요소 상자 내보내기
npm run check:parity    # Figma 대조
npm run audit:code      # 코드 규칙 검사
```

## 빠른 실행

```bash
git clone https://github.com/hyunho2378/ai-public-gitlab.git
cd ai-public-gitlab/app
npm ci
VITE_STATIC=1 npm run dev   # http://127.0.0.1:5731
npm run build:pages         # GitHub Pages 빌드, 결과 app/dist
```

- 정적 실행: 서버 없이 공공 GitLab 공개 API 직접 호출
- 서버판 실행, 환경 변수, 배포: [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md)

## 폴더 구조

```text
app/            화면(React 18, Vite, 화면 파일, 공통 부품, KRDS 변수)
server/         기능 API(Node, Express, SQLite)
api/            API 계약(openapi.yaml)
data/           소개 카드와 분류 자료
sample/         예시 자료(공공 GitLab 공개 API 응답)
scripts/        카드 수집, 저장 자료 생성
dashboard/      프로젝트 현황판
UX/             화면 설계 문서, 대조 기록
code_plan/      Figma와 코드 대조 자료
figma_scripts/  Figma 내보내기와 수정 스크립트
figma_png/      Figma 화면 내보내기
screenshots/    배포본 화면 캡처
audits/         대조 원장
docs/           개발 안내, 이미지
```

## 문서

- 제품 정의: [PRD.md](PRD.md)(기능 F-01~F-39, 화면 목록)
- 개발 안내: [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md)(기술 스택, 실행, 서버, 인증, 배포)
- 공통 부품: [docs/COMPONENTS.md](docs/COMPONENTS.md)
- Figma 부품 대응: [docs/FIGMA_COMPONENTS.md](docs/FIGMA_COMPONENTS.md)
- UI 실행 규칙: [UI.md](UI.md)
- 화면 설계, 대조 기록: [UX](UX)
- API 계약: [api/openapi.yaml](api/openapi.yaml)
- 작업 기록: [PROGRESS.md](PROGRESS.md)

## 로드맵

- 3차 활동: 임베딩 업무 검색, 소개 카드 AI 생성, MCP 서버 연결, 공개 준비 점검
- 이후: 법제처 연동 법령 변경 알림, 공공데이터 연결, 기관 인증

## 팀

- 활동: 청년 공공 AX 서포터즈 2차 활동
- 팀원: 한은진, 장준호, 주현호, 김민우, 박만재
- 문의: 저장소 이슈

## 출처

- 디자인 시스템: 행정안전부 [KRDS](https://www.krds.go.kr/), 공공누리 제1유형(출처 표시), 공식 HTML과 CSS 저작권 고지 유지
- 자료: AI 정부 실험실 공공 GitLab 공개 API
- 아이콘: KRDS 아이콘, 공공 GitLab Pajamas 아이콘(MIT)의 KRDS 규격 확장 아이콘, 파일 종류 아이콘 @gitlab/svgs(MIT)
- 로고: 행정안전부 공식 SVG, 상단 바 상징은 태극 엠블럼만
