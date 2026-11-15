# UX-022 제미나이 느낌 KRDS 번역과 업무 도우미 패널

- 문서 번호: UX-022
- 작성일: 2026. 11. 15.
- 담당: 주현호(방향 결정), 시각과 상호작용 언어 정리
- 입력: UX-020 3차 추가 화면 설계, UX-021 3차 레퍼런스 리서치(안 1 원문 줄 근거 체계 채택 확정, 안 2 해석 줄은 업무 도우미 패널에 흡수), UX/07 밀도와 문구, UX/16 모션 표, UX/17 사이드바 실측, UX/18 실무 피그마 규칙, docs/METRICS.md, docs/COMPONENTS.md, `app/src/krds/layout.tokens.css`, `Navigation/Sidebar.jsx`, `Identity/GlobalBar.jsx`, 기능기획안(2026. 11. 13., F1~F9, 화면 G-01, A-01, A-02, A-03, A-07, 현황판)
- 바탕 결정: D-21(공공 깃랩 구조 유지, 디자인 시스템만 KRDS), D-15(연한 채움 금지), D-16(짝수, 4의 배수, 가운데 정렬), D-22(모션 값)
- 범위: 문서만, 코드 수정 없음
- 표기: `사실`은 화면 실측이나 공개 글에서 확인한 내용, `해석`은 우리 서비스로 옮길 때의 판단

## 0. 한 줄 요약

- 방향: 제미나이의 "넓은 여백, 큰 인사, 하단 입력칸, 반짝임 표시, 차례 등장" 다섯 요소를 KRDS 토큰으로 옮기고, 색 번짐과 알약 모양, 자유 문단 답변 세 요소는 버림
- 자리: 공공 깃랩(GitLab 18.8 이후)의 오른쪽 GitLab Duo 패널과 같은 자리에 `업무 도우미` 패널, 본문 화면 구조는 그대로
- 답변 재료: 수집 카드 자료와 F1, F4 검색 함수 결과만, 모든 AI 줄 끝에 원문 줄 근거 표식(UX-021 안 1)

## 1. 제미나이 느낌 요소 분해와 출처

### 1-1. 확인 범위

- Gemini 웹 첫 화면: https://gemini.google.com/app , 2026. 11. 15. Aside 브라우저 1440 x 900 실측, 사용자 브라우저라 로그인 상태로 열림. 첫 접속 연동 안내 대화상자는 Esc로 닫고 측정, 질문 전송 없음(대화 기록 생성 방지). 캡처 세션 tmp `gemini_home_1440.png`
- 답변 화면과 생각 중 화면: 직접 질문하지 않아 공개 글로만 확인
- 공개 글 확인 날짜: 모두 2026. 11. 15.

### 1-2. 출처 목록

| 번호 | 출처 | 주소 | 글 날짜 |
|---|---|---|---|
| S1 | Gemini 웹 첫 화면 실측 | https://gemini.google.com/app | 2026. 11. 15. 확인 |
| S2 | Google Design, Gemini AI Visual Design(Illustrating the Gemini App) | https://design.google/library/gemini-ai-visual-design | 날짜 표기 없음 |
| S3 | Google Design, Rise of the AI Sparkle Icon | https://design.google/library/ai-sparkle-icon-research-pozos-schmidt | 날짜 표기 없음 |
| S4 | Google 블로그, Gemini 앱 Neural Expressive 발표 | https://blog.google/innovation-and-ai/products/gemini-app/next-evolution-gemini-app | 2026. 5. 19. |
| S5 | 9to5Google, Gemini 앱 전면 개편 | https://9to5google.com/2026/05/03/gemini-full-redesign | 2026. 5. 3. |
| S6 | Android Authority, Neural Expressive 사용기 | https://www.androidauthority.com/gemini-neural-expressive-android-app-hands-on-3668985 | 2026. 5. 21. |
| S7 | Android Authority, Android 개편 배포 | https://www.androidauthority.com/gemini-app-android-redesign-3668250 | 2026. 5. 18. |
| S8 | Material 3 블로그, Start building with M3 Expressive | https://m3.material.io/blog/building-with-m3-expressive | 2025. 5. 13. |
| S9 | Material 3 Motion, How it works | https://m3.material.io/styles/motion/overview/how-it-works | 날짜 표기 없음 |
| S10 | Material 3 Shape | https://m3.material.io/styles/shape | 날짜 표기 없음 |
| S11 | Google 블로그, AI Mode 디자인 과정 | https://blog.google/products/search/ai-mode-development | 2025. 6. 5. |
| S12 | Google 검색 도움말, AI Mode | https://support.google.com/websearch/answer/16011537 | 날짜 표기 없음 |
| S13 | Google 블로그, AI Mode와 AI Overviews 링크 개선 | https://blog.google/products-and-platforms/products/search/updates-ai-mode-overviews-explore-web | 2026. 10. 15. |
| S14 | GitLab 문서, GitLab Duo Chat | https://docs.gitlab.com/user/gitlab_duo_chat | 날짜 표기 없음 |
| S15 | GitLab 블로그, Duo Agentic Chat 시작 | https://about.gitlab.com/blog/getting-started-with-gitlab-duo-agentic-chat | 날짜 표기 없음 |
| S16 | GitLab 문서, 인터페이스 개편 | https://docs.gitlab.com/user/interface_redesign | 날짜 표기 없음 |

- S5, S6, S7: 언론 사용기라 2차 자료, S1과 S2, S4로 교차 확인한 항목만 아래 표에 사실로 적음

### 1-3. 요소 분해

| 번호 | 요소 | 사실 | 출처 |
|---|---|---|---|
| G1 | 넓은 여백 | 1440 화면에서 인사와 입력칸만 가운데, 나머지 빈 면. 바탕 rgb(250, 249, 249) | S1 |
| G2 | 큰 인사 문구 | "무엇을 도와드릴까요?" 36px, 굵기 320, 행간 48, 가운데 정렬 | S1 |
| G3 | 큰 둥근 입력칸 | 폭 660, 높이 64, 모서리 32(완전한 반원 끝), 흰 면, 그림자 0 2px 8px -2px 검정 16% | S1 |
| G4 | 입력칸 아래 모드 전환 | `채팅`, `작업` 두 단추, 높이 36, 모서리 9999px(알약) | S1 |
| G5 | 제안 질문 칩 없음 | 첫 화면에 예시 칩 없음, 개편에서 칩을 지우고 인사를 키움 | S1, S6, S7 |
| G6 | 반짝임(스파크) 아이콘 | 왼쪽 위 네 갈래 반짝임 로고. Google은 2023년 반짝임을 전 제품 AI 표시로 표준화, 2024년 시스템 아이콘 약 100개에 사용 | S1, S3 |
| G7 | 색 번짐 바탕 | 입력칸 뒤 파랑 방사형 번짐. 그라데이션을 "에너지와 방향"으로 쓰고 앞쪽 가장자리는 진하고 꼬리는 흐림 | S1, S2 |
| G8 | 생각 중 표시 | 처리 중에 내부 움직임으로 생각 과정 표시, 개편판은 화면 위쪽 절반 번짐 빛으로 표시 | S2, S6 |
| G9 | 시작과 끝이 있는 움직임 | 모든 움직임에 정해진 시작점과 끝점, 사용자 동작 방향을 따름, 장식 움직임 아님 | S2 |
| G10 | 원형 기반 모양 | 버튼과 담는 틀 모서리가 원을 따름 | S2 |
| G11 | 얇은 위계 | 얇은 굵기의 큰 글자, 얇고 둥근 선 아이콘, 왼쪽 아이콘 열만 남긴 탐색 | S1, S5 |
| G12 | 기사형 답변 | 제목 크기 단계와 그림을 섞어 답변을 문서처럼 구성 | S6 |
| G13 | 하단 고정 입력과 이어 묻기 | AI Mode는 긴 입력을 권하고 입력칸을 아래에 두어 이어 묻기를 쉽게, 탐색용 링크 함께 제시 | S11, S12 |
| G14 | 출처 링크 강화 | AI Mode와 AI Overviews 본문 안 링크와 출처 맥락 표시 강화 | S13 |
| G15 | 표현형 모션 체계 | M3 Expressive는 스프링 모션(공간, 효과 두 종), 강조 글자 스타일, 모양 35종. 모션 방식 두 가지 중 `standard`는 튀어 오름이 적고 실무형 제품용 | S8, S9, S10 |
| G16 | 오른쪽 AI 패널 | GitLab Duo Chat은 화면 오른쪽 사이드바로 열리고 화면을 옮겨도 열린 채 유지, 폭 약 400 | S14, S15, S16 |

### 1-4. 느낌을 만드는 핵심(해석)

- 비움: 첫 상태에 요소가 셋(인사, 입력칸, 모드)뿐이라 화면이 조용함
- 단일 초점: 입력칸 하나가 가장 크고 유일하게 그림자가 있는 요소
- 표시 기호 하나: 반짝임 하나가 "AI가 만든 자리"를 알리는 유일한 기호
- 움직임 순서: 처리 중과 등장에 시작점과 끝점이 있는 짧은 움직임
- 대화 자리: 입력이 아래, 결과가 위로 쌓이는 순서

## 2. 우리 번역(KRDS 토큰과 부품)

### 2-1. 요소별 번역표

| 번호 | 제미나이 요소 | 우리 번역 | 토큰과 부품 | 금지 규칙 충돌 |
|---|---|---|---|---|
| G1 | 넓은 여백 | 패널 첫 상태에서만 인사 위아래 여백 40, 본문 화면 밀도는 UX/07 그대로 | `--layout-ai-empty-gap`(number-14, 40) | 없음 |
| G2 | 큰 인사 문구 | 패널 안 한 줄, heading-medium 24/32 굵기 bold, 왼쪽 정렬. 본문 화면 큰 안내 문장은 만들지 않음 | `--krds-pc-font-size-heading-medium`, `--rb-lh-24`, 키 `A_greet` | 정부 사이트식 큰 안내 문장 금지(UX/07 0장)와 충돌 피함: 패널 안 1줄 3어절, 본문 머리 아님 |
| G3 | 큰 둥근 입력칸 | 높이 56 시작, 최대 120까지 늘어남, 모서리 12, 흰 면, 입력칸 테두리 1 gray-30, 그림자 1단계(본문 진입칸만) | `--layout-ai-composer-*`, KRDS 입력 테두리 `--krds-color-border-gray` | 알약 금지: 모서리 32 대신 KRDS radius-xlarge1 12. 완전한 원 없음 |
| G4 | 모드 전환 | 입력칸 아래 KRDS 선형 탭 small 두 개 `도구 찾기`, `유사 프로젝트`, `/search` 두 탭과 같은 값 | Navigation/Tabs Size=Small | 알약 단추 대신 선형 탭 |
| G5 | 칩 없음 | 제안 질문은 칩이 아니라 전체 폭 글자 행 4개(아이콘 16과 글자) | Assistant/Suggestion row | 알약, 같은 크기 카드 나열 금지와 맞음 |
| G6 | 반짝임 | 기존 `ext/sparkle`(Pajamas 반짝임) 한 가지, 단색 primary-50, 크기 16과 24 두 단계. AI가 만든 자리에만 | Assistant/Spark mark, `--layout-ai-accent` | 이모지 아님(SVG 아이콘). 사이드바 AI 카탈로그 아이콘과 겹침은 결정 필요 3 |
| G7 | 색 번짐 바탕 | 사용 안 함. 바탕은 판 흰 면(어두운 화면 gray-95) | `--layout-panel-bg` | 보라 그라데이션 금지, 연한 채움 금지. 그라데이션 한 곳 허용 여부는 결정 필요 1 |
| G8 | 생각 중 표시 | 반짝임 16 등장 한 번(200ms) 다음 `찾는 중` 글자와 Feedback/Skeleton 3행(160ms 넘을 때만) | Feedback/Skeleton, 키 `A_thinking` | 깜빡이는 점 금지와 맞음(점 세 개 표시 없음). 반짝임 반복 회전은 결정 필요 2 |
| G9 | 시작과 끝 움직임 | 패널 열림, 질문 등장, 답변 두 박자 등장, 근거 줄 강조. 모두 transform과 opacity | 2-4 모션 표 | 없음 |
| G10 | 원형 모양 | 모서리 한 단계 체계 유지: 패널 12, 입력칸 12, 질문 덩어리 12, 행 호버 8 | `--layout-panel-radius`(12), `--krds-radius-medium3`(8) | 완전한 원 금지와 맞음. 아바타만 기존 원형 유지 |
| G11 | 얇은 위계 | 굵기 단계 추가 없음(H-02 Regular가 가장 얇음, H-04 중요도는 색). 위계는 크기 24와 15, 13 세 단계와 text/subtle 색 | KRDS 글자 스타일 | 굵기 320 같은 얇은 굵기 금지(H-02) |
| G12 | 기사형 답변 | 사용 안 함. 답변은 프로젝트 행 목록과 고정 문구 라벨만 | Layout/Project row | 지어낸 문장 금지 규칙 |
| G13 | 하단 고정 입력 | 패널 아래 입력칸 고정, 대화는 위로 쌓임 | Assistant/Composer | 없음 |
| G14 | 출처 링크 | 모든 AI 줄 끝 근거 표식 `README 3~5줄`, 누르면 원문 줄 이동(UX-021 안 1) | Feedback/Basis mark | 없음 |
| G15 | 표현형 모션 | 스프링과 튀어 오름 없음. M3의 `standard` 방식에 해당하는 실무형 곡선 cubic-bezier(0.2, 0, 0, 1) 하나 | `--rb-motion-ease` | 없음 |
| G16 | 오른쪽 패널 | 공공 깃랩 Duo 패널 자리 그대로, 폭 400 | `--layout-ai-panel-w` | D-21 구조 유지와 맞음 |

### 2-2. 색 규칙

- 반짝임 색: `--layout-ai-accent` = `--krds-color-light-primary-50`(#256ef4), 어두운 화면 primary-40(#4c87f6)
- 반짝임 쓰는 자리: 패널 머리 이름 앞, 패널 첫 상태 인사 위, AI 추천 묶음 제목 앞, 소개 카드 머리 작성 주체 줄 앞, 본문 진입칸 왼쪽, 사이드바와 상단 바 열기 단추. 이 여섯 자리 밖 사용 금지
- 사용자 질문 덩어리 면: `--krds-color-surface-gray-subtler`(gray-5), 회색 단계라 D-15 예외 범위
- 답변: 면 없음(제미나이처럼 말풍선 없음), 판 흰 면 위 글자와 행
- 행 호버 면: 기존 목록 행 호버와 같은 gray-5, 120ms
- 금지: primary-5 같은 연한 원색 면, 보라와 분홍 계열, 번짐 바탕, 반투명 유리 효과(G-03)

### 2-3. 그림자 단계(UX/18 G-03, G-04: 검정 고정, 불투명도만 다르게)

| 단계 | 값 | 쓰는 곳 | 토큰 |
|---|---|---|---|
| 0 | 없음 | 패널 안 입력칸, 질문 덩어리, 행 | 없음 |
| 1 | 0 2 8 검정 8%(`--krds-color-alpha-shadow2`) | 본문 진입칸(`/` 목록 위) | `--layout-ai-shadow-1` |
| 3 | 0 8 20 검정 12%(`--krds-color-alpha-shadow3`, 앱 기존 값) | 오른쪽 패널(본문 위에 떠 있음) | `--layout-ai-shadow-3` |

- 단계 2는 비워 둠(메뉴와 대화창 기존 값과 맞출 때 채움)
- 바텀 시트: 그림자 대신 KRDS 딤(기존 `--krds-color-background-dim`)

### 2-4. 모션 표(UX/16에 추가할 줄)

| 이름 | 시간 | 곡선 | 움직임 | 쓰는 곳 |
|---|---|---|---|---|
| 패널 열림 | 200ms | cubic-bezier(0.2, 0, 0, 1) | translateX(24에서 0)과 opacity(0에서 1) | 1440 오른쪽 패널 |
| 패널 닫힘 | 120ms | cubic-bezier(0.2, 0, 0, 1) | opacity(1에서 0)과 translateX(0에서 24) | 1440 오른쪽 패널 |
| 바텀 시트 열림 | 280ms | cubic-bezier(0.2, 0, 0, 1) | translateY(100%에서 0), 딤 opacity | 360 |
| 바텀 시트 닫힘 | 200ms | cubic-bezier(0.2, 0, 0, 1) | translateY(0에서 100%), 딤 opacity | 360 |
| 질문 등장 | 120ms | cubic-bezier(0.2, 0, 0, 1) | translateY(8에서 0)과 opacity | 질문 덩어리 |
| 반짝임 등장 | 200ms | cubic-bezier(0.2, 0, 0, 1) | scale(0.8에서 1)과 opacity, 한 번 | 처리 중 시작 |
| 답변 박자 1 | 200ms | cubic-bezier(0.2, 0, 0, 1) | translateY(8에서 0)과 opacity | 상태 머리와 해석 줄 |
| 답변 박자 2 | 200ms, 지연 120ms | cubic-bezier(0.2, 0, 0, 1) | translateY(8에서 0)과 opacity | 행 묶음 전체(행마다 지연 없음) |
| 제안 행과 결과 행 호버 | 120ms | cubic-bezier(0.2, 0, 0, 1) | 면 색(기존 호버 규칙) | 행 |
| 근거 줄 강조 | 유지 1.2초 다음 280ms | cubic-bezier(0.2, 0, 0, 1) | 강조 면 opacity(1에서 0) | README 원문 줄(UX-021 안 1) |

- 움직임 거리 8: 기존 `--rb-menu-rise`(number-5) 재사용, 24는 `--krds-number-10`
- 바뀌는 속성: transform과 opacity만. 폭, 높이, 여백, 위치 값 전환 없음. 호버 면 색은 기존 목록 규칙 유지(색 전환, 레이아웃 영향 없음)
- 움직임 줄이기(`prefers-reduced-motion`, `html.rb-reduce-motion`): 위 시간 모두 0, 반짝임 등장 없음, Skeleton 맥박 정지
- 예외 기록: Skeleton 맥박 1.4초 반복은 기존 skeleton.css 값, 이번 문서에서 새로 만들지 않음
- 글자 흐름(한 글자씩 나타남): 없음. 답변이 생성 문장이 아니라 행 자료라 박자 두 번으로 대신함

### 2-5. 글자 스타일

| 자리 | 스타일 | 크기와 행간 | 색 |
|---|---|---|---|
| 패널 이름 | heading-xxsmall bold | 15/22 | text/basic |
| 첫 상태 인사 | heading-medium bold | 24/32 | text/basic |
| 제안 질문 행 | body-small | 15/22 | text/basic |
| 질문 덩어리 | body-small | 15/22 | text/basic |
| 상태 머리(AI 추천 n) | heading-xxsmall bold | 15/22 | text/basic |
| 해석 줄 라벨 | body-xsmall bold | 13/20 | text/subtle |
| 행 제목 | body-small bold | 15/22 | 링크색 |
| 하는 일, 추천 이유 | body-xsmall | 13/20 | text/basic, 라벨은 bold |
| 근거 표식 | body-xsmall | 13/20 | text/subtle 링크 |
| 자료 기준 줄, 입력 기준 줄 | body-xsmall | 13/20 | text/subtle |

- 글자 크게 설정(`html.rb-font-large`): 기존 규칙대로 한 단계씩 올림, 인사 24는 그대로

## 3. 업무 도우미 패널 설계

### 3-1. 이름 후보

- 업무 도우미: 기본 추천, 사이드바 묶음 이름 `업무 지원`과 같은 결, 2어절
- 찾기 도우미: 하는 일(찾기)을 바로 드러냄, 2어절
- 프로젝트 길잡이: 대상(프로젝트)을 드러냄, 2어절
- 선택: 결정 필요 4, 아래 글은 `업무 도우미`로 씀

### 3-2. 위치와 크기

| 폭 | 형태 | 위치 | 크기 | 본문 영향 |
|---|---|---|---|---|
| 1280 이상(1440 기준) | 오른쪽 떠 있는 패널, 비모달 | 상단 바 아래 8, 오른쪽 8, 아래 8 | 폭 400(96 x 4 + 16), 높이 화면 - 상단 묶음 - 16, 모서리 12 | 본문 그대로, 패널이 본문 오른쪽 위를 덮음(화면 튕김 없음) |
| 768~1279 | 같은 패널 | 같은 자리 | 폭 400 | 같음 |
| 768 미만(360 기준) | KRDS 바텀 시트, 모달 | 화면 아래 | 폭 전체, 위 여백 80(`--krds-gap-12`), 위 모서리 12, 아래 안전 영역 | 뒤 딤, 본문 inert |

- 1440 계산: 오른쪽 패널 400과 사이 8이 본문 판 오른쪽 408을 덮음. 판 안 컨테이너 1200 가운데라 목록 오른쪽 개수 열 일부가 가려짐, 패널을 닫으면 그대로
- 본문 밀어내기(GitLab Duo 방식, 판 폭이 줄어듦): 판 폭 전환이 레이아웃 이동이라 이번 안에서 제외, 결정 필요 5
- 쌓임 순서: 패널 z 85(사이드바 서랍 딤 80 위, 서랍 90 아래), 토스트 120이 패널 위

### 3-3. 열기 단추 위치

| 자리 | 모양 | 동작 | 이름표 |
|---|---|---|---|
| 상단 바 오른쪽 묶음 첫 자리(만들기 + 단추 앞) | Action/Icon button 32, 아이콘 `ext/sparkle` 16, 접근성 이름 `업무 도우미` | 패널 열고 닫기, `aria-expanded`, `aria-controls="rb-assistant"` | `assistant-open-topbar` |
| 사이드바 `업무 지원` 묶음 첫 항목 | 기존 사이드바 항목 28, 아이콘 `ext/sparkle`, 글자 `업무 도우미`, 오른쪽 단축키 힌트 | 같음(링크가 아니라 단추) | `assistant-open-sidebar` |
| 첫 화면 목록 위 진입칸 | Assistant/Composer Context=Page | 보내면 패널 열고 그 질문 실행 | `assistant-entry-home` |
| 소개 카드 유사 프로젝트 구역 제목 오른쪽 | Action/Button Type=text Size=small `도우미로 이어 찾기` | 패널 열고 이 프로젝트 기준 F4 실행 | `assistant-open-similar` |
| A-07 질문 예시 옆 | Action/Button Type=text Size=small `웹에서 같은 질문` | 패널 열고 예시 질문 채움(전송은 사용자) | `assistant-open-mcp` |

- 360: 상단 바 아이콘 단추와 서랍 안 사이드바 항목 두 곳, 터치 영역 44(UX/17 5장)

### 3-4. 패널 구성(위에서 아래)

1. 머리 줄(높이 48, 좌우 16)
   - 왼쪽: Spark mark 16, 이름 `업무 도우미`
   - 오른쪽: 새 대화(Action/Icon button 32, 아이콘 `refresh` 계열, 이름 `새 대화`), 닫기(Icon button 32, `close`, 이름 `닫기`)
2. 자료 기준 줄(좌우 16, 아래 8): `2026. 10. 30. 수집, 공개 프로젝트 728개`(기존 키 `Q_condBasis(date, n)` 재사용), 목록과 `/search`, 현황판과 같은 값
3. 대화 영역(세로 스크롤, 좌우 16, 차례 사이 24)
4. 입력 묶음(아래 고정, 위 구분선 없음, 위아래 12)
   - Assistant/Composer Context=Panel
   - 모드 탭: Navigation/Tabs Size=Small `도구 찾기`, `유사 프로젝트`
   - 입력 기준 줄: `2~500자`(기존 `Q_rule`), 오류 때 같은 자리 오류 줄

### 3-5. 첫 상태

- 세로 배치: 대화 영역 안 위쪽 정렬(정중앙 아님, 입력칸과 가까운 아래쪽 1/3 지점은 결정 필요 6), 위 여백 40
- 구성
  1. Spark mark 24
  2. 인사 한 줄 `업무로 프로젝트 찾기`(`A_greet`), heading-medium 24/32
  3. 제안 질문 4행(Assistant/Suggestion row), 행 높이 40, 아이콘 16 `search`, 글자 body-small, 오른쪽 끝 모드 라벨 13 text/subtle
- 제안 질문 문구(UX-020 5-4 예시 검색어와 같은 원천 `Q_exTask`, `Q_exBuild`)

| 순서 | 화면 글자 | 모드 | 모드 라벨 | 키 |
|---|---|---|---|---|
| 1 | 출장비 정산 | 도구 찾기 | 업무 | `Q_exTask[0]` |
| 2 | 회의록 요약 | 도구 찾기 | 업무 | `Q_exTask[1]` |
| 3 | 민원 접수 챗봇 | 유사 프로젝트 | 기능 | `Q_exBuild[0]` |
| 4 | 엑셀 일괄 변환 | 유사 프로젝트 | 기능 | `Q_exBuild[1]` |

- 누르면: 모드 탭이 행 모드로 바뀌고 실제 검색 실행(고정 예시 결과 아님)
- 상황 문장형(정부24 "~할 때")으로 바꿀지 여부: UX-021 결정 항목 그대로 이어받음

### 3-6. 대화 흐름

차례 하나 = 질문 덩어리 + 답변 덩어리

1. 질문 덩어리(Assistant/Turn question)
   - 오른쪽 정렬, 최대 폭 패널 안쪽의 85%, gray-5 면, 모서리 12, 안쪽 12 16
   - 글자: 입력 원문 그대로, 위 13/20 text/subtle 모드 라벨(`도구 찾기` 또는 `유사 프로젝트`)
2. 답변 덩어리(Assistant/Turn answer), 면 없음, 왼쪽 정렬
   1. 상태 머리: Spark mark 16과 `AI 추천 n`(`Q_recTitle(n)`) 또는 `유사 프로젝트 n`(`Q_simTitle(n)`), 대체 검색이면 반짝임 없이 `일반 결과 n`(`Q_kwTitle(n)`)
   2. 해석 줄(Assistant/Reading line, UX-021 안 2 흡수)
      - 라벨 `해석`(`A_read`), 분야 태그 1개(기존 `krds-btn-tag`, 확정 분야 이름 또는 `전체`), 핵심어 태그 1~3개, 오른쪽 `고치기` 텍스트 단추(`A_edit`)
      - 값 원천: 분야는 F1 함수 응답의 분야 칸(확정 분야 10개 목록 안 값만), 핵심어는 함수 응답 칸 중 입력 원문에 들어 있는 단어만 표시
      - 대체 검색: 라벨 `일반 검색`(`A_readFallback`), 분야는 사용자가 고른 분야 또는 `전체`, 핵심어는 입력을 띄어쓰기로 나눈 앞 3단어
      - 고치기 누름: 해석 줄이 편집 상태로 바뀜, 분야 태그가 Navigation/Menu(확정 분야 10개와 전체), 핵심어 태그마다 지우기 아이콘 단추 16, 아래 `다시 찾기`(Action/Button tertiary small, `A_rerun`)와 `취소`(text small). 다시 찾기는 새 차례로 실행(질문 덩어리 글자 = 남은 핵심어, 모드 라벨 옆 `분야 {이름}`)
   3. 추천 행 목록: Layout/Project row Kind=Recommend Density=Compact Layout=Stacked, 최대 5행, 행 사이 구분선 1
      - 제목 줄: 이름(A-02 링크 `/projects/:id/about`), 공개 아이콘, Feedback/Basis badge
      - 하는 일 줄: 카드 `oneLine.v`
      - 추천 이유 줄: 라벨 `추천 이유`와 함수 응답 이유 글자, 끝에 Feedback/Basis mark `README 3~5줄`(링크 `/projects/:id/code/README.md#L3-5`) 또는 `package.json 외 1`
      - 동작 줄: `유사 프로젝트`(Action/Button Type=text Size=small, `A_similar`)
   4. 일반 결과 링크: `일반 결과 n건`(`A_moreResults(n)`), `/search?q=&mode=&field=`로 이동, 같은 요청의 일반 결과 묶음
3. 이어 묻기(유사 프로젝트)
   - 행의 `유사 프로젝트` 누름: 새 차례, 질문 덩어리 글자 `{이름} 유사 프로젝트`(`A_similarQ(name)`), 모드 라벨 `유사 프로젝트`
   - 답변: Kind=Similar 행 최대 5, 기준 프로젝트 제외, 행 오른쪽 위 유사 수준 글자(`Q_simHigh`, `Q_simMid`, `Q_simUnknown`), 관련 이유 줄과 차이 줄 끝마다 Basis mark, 차이 근거 없음은 `차이 정보 부족`과 Basis mark None
   - 함수: A-02 유사 프로젝트 구역(UX-020 7장)과 같은 함수 같은 결과
4. 자유 이어 묻기: 입력칸에 새 문장, 새 F1 또는 F4 요청(이전 차례 내용을 함수에 넘기지 않음, 이전 분야 유지 여부는 결정 필요 7)

### 3-7. 답변 재료 규칙

- 화면 글자 원천 세 가지만
  - 고정 문구 키(라벨, 상태 글자)
  - 수집 카드 칸(`oneLine`, `basis`, `e`, `fields.v`, 이름, 만든 곳)
  - F1, F4 함수 응답 칸(후보 id, 추천 이유, 관련 이유, 차이, 유사 수준, 해석 분야와 핵심어)
- 함수 응답 검증: UX-020 5-7 규칙 그대로(수집 목록 밖 id, 중복 id, 분야 조건 밖 후보가 하나라도 있으면 추천 묶음 폐기, 대체 검색으로 표시)
- 추천 이유와 관련 이유, 차이: 근거 위치(`e`)가 함께 오지 않으면 그 줄 숨김, 하는 일 줄만 표시
- 자유 문단 답변, 요약 문장, 인사말 답변, "도움이 되었나요" 같은 말 없음
- AI 함수 없음 또는 실패: 대체 검색 상태(3-8), 반짝임 없음
- 자료 기준: 패널 머리 자료 기준 줄 하나, 요청과 응답의 `dataVersion`이 화면 카드 자료와 다르면 자료 기준 불일치 상태
- 같은 기능: 패널과 `/search`는 같은 `api/search.js` 함수, 같은 질문과 분야면 같은 결과 순서

### 3-8. 상태

| 상태 | 입력칸 | 답변 덩어리 | 동작 | 키 |
|---|---|---|---|---|
| 최초 | 비움, 기준 줄 2~500자 | 첫 상태(3-5) | 제안 질문 4행 | `A_greet`, `Q_ex*` |
| 처리 중 | 값 비움(질문 덩어리로 옮김), 보내기 단추 누름 차단, 기준 줄 자리 `찾는 중` | 반짝임 등장 다음 Skeleton 3행(160ms 넘을 때만), `aria-busy` | 같은 요청 재실행 차단, Esc 누르면 요청 취소 | `A_thinking` |
| 정상 | 비움, 초점 유지 | 상태 머리, 해석 줄, 행 1~5, 일반 결과 링크 | 행 이동, 유사 프로젝트, 고치기 | 3-6 키 |
| 결과 없음 | 비움 | 상태 머리 `검색 결과 없음`(`Q_none`), 해석 줄, 본문 `분야 해제 / 다른 표현`(`Q_noneBody`) | `분야 전체로`(분야 선택 때만, `Q_allFields`), 해석 줄 고치기 | `Q_none` |
| 입력 오류 | 값 유지, 입력칸 State=Error, 오류 줄 | 새 차례 만들지 않음 | 입력칸 초점 | `Q_errEmpty`, `Q_errShort`, `Q_errLong(n)` |
| 처리 실패 | 비움 | Feedback/Status block State=Error, 제목 `검색 실패`(`Q_fail`), 본문 `AI 추천 실패 / 대체 검색 실패`(`Q_failBody`) | `다시 시도`(tertiary small, 같은 질문 새 차례) | `Q_fail` |
| 대체 검색 수행 | 비움 | Feedback/Status block State=Notice `AI 추천 실패 / 일반 검색 대체`(`Q_fbTask`) 또는 `유사 판단 실패 / 일반 검색 대체`(`Q_fbBuild`), 해석 줄 `일반 검색`, 일반 결과 행(Kind=Explore Compact) 최대 5, 유사 프로젝트 모드 행 오른쪽 `유사 판단 미수행` | 안내 줄 `AI 추천 다시 시도`(`Q_retryAi`) | `Q_fb*` |

추가 구분(기획안 A-01 상태 처리와 같음)

| 상태 | 표시 | 키 |
|---|---|---|
| 대체 검색 후 결과 없음 | 대체 검색 안내 줄과 `대체 검색 결과 없음` | `Q_fbNone` |
| 자료 기준 불일치 | 안내 줄 `자료 기준 불일치 / 일반 검색 대체`, 일반 결과만, 아래 `자료 갱신 필요` | `Q_versionMismatch`, `Q_versionNeed` |
| 기준 프로젝트 확인 불가(유사 프로젝트 이어 묻기) | Status block State=Error `현재 프로젝트 확인 불가` | `Q_baseMissing` |

- 실패와 결과 없음, 대체 검색 세 상태는 서로 다른 글자와 모양
- 최신 요청 유지: 차례마다 요청 번호, 처리 중에 새 질문을 보내면 이전 요청 취소 다음 새 차례

### 3-9. 대화 기록

- 저장 위치: React 상태만(패널 부품 위 공용 상태), localStorage와 sessionStorage, 서버 전송 없음
- 유지 범위: 같은 탭 안 화면 이동에는 유지(GitLab Duo처럼 화면을 옮겨도 패널 내용 유지), 새로고침과 탭 닫기에 소멸
- 새 대화 단추: 모든 차례 삭제, 첫 상태로, 확인 대화상자 없음(시스템 대화상자 금지)
- 개수 한도: 차례 20개, 넘으면 가장 오래된 차례부터 화면에서 제거
- 현황판 집계와 무관: metrics.json 계산 대상 아님(METRICS.md 6장 시연 자료 분리와 같은 원칙)
- 패널 안 안내 글자: 없음(저장 안 함 고지 문장 넣지 않음), 결정 필요 8

### 3-10. 키보드와 초점

| 키 | 동작 | 비고 |
|---|---|---|
| `a`(입력칸 밖) | 패널 열기, 열려 있으면 입력칸 초점 | 1순위 후보, 기존 단축키(/, ?, g c, g i, g p, t, b, y)와 겹치지 않음 |
| `Ctrl+.`(Mac `⌘.` 아님, Ctrl 고정) | 같은 동작 | 2순위 후보, 입력칸 안에서도 동작 |
| Alt+D | 사용 안 함 | Windows Chrome 주소창 키와 겹침(GitLab Web IDE 단축키) |
| Enter | 보내기 | 한글 조합 중(`isComposing`) Enter는 무시 |
| Shift+Enter | 줄바꿈 | 입력칸 최대 120까지 늘어남, 넘으면 입력칸 안 스크롤 |
| Esc | 메뉴나 해석 편집이 열려 있으면 그 메뉴부터 닫음, 처리 중이면 요청 취소, 그 밖에는 패널 닫기 | 닫으면 연 단추로 초점 복귀 |
| Tab | 머리(새 대화, 닫기), 대화 영역 링크와 단추, 입력칸, 모드 탭 순서 | 1440 비모달: 패널 끝에서 다음 Tab은 본문으로 |
| F6 | 본문과 패널 사이 초점 이동 | 후보, 결정 필요 9 |

- 1440 역할: `<aside id="rb-assistant" aria-label="업무 도우미">`, 초점 가두기 없음
- 360 역할: KRDS 바텀 시트 `role="dialog" aria-modal="true"`, 초점 가두기, 뒤 화면 inert
- 열 때 초점: 입력칸, 질문을 실어 열 때는 상태 머리
- 알림: 상태 머리만 `aria-live="polite"`(행 목록 전체를 읽지 않음), 오류 줄은 `aria-describedby`
- 단축키 목록 대화상자(`?`, ShortcutsDialog)에 열기 키 한 줄 추가

### 3-11. 360 바텀 시트 차이

- 머리 줄: KRDS bottom sheet head(위 24, 좌우 16), 이름과 닫기, 새 대화는 이름 오른쪽 아이콘
- 대화 영역: 시트 body, 세로 스크롤
- 입력 묶음: 시트 foot 자리, 화면 키보드가 올라오면 입력칸이 키보드 위에 붙음(`visualViewport` 높이 기준)
- 행: Layout=Stacked 그대로, 유사 수준은 제목 줄 아래 첫 줄(UX-020 5-8)
- 드래그로 닫기: 없음(닫기 단추와 딤 누름, Esc)

## 4. 화면별 적용

### 4-1. 첫 화면 `/`(G-01)

- 추가 자리: 정렬 줄 위, 필터 막대 아래 한 줄 진입칸(Assistant/Composer Context=Page), 폭 컨테이너 전체, 높이 48(`--krds-number-16`), 모서리 12, 그림자 1단계
- 진입칸 구성: 왼쪽 Spark mark 16, 안내 글자 `업무 설명 입력`(`Q_phTask`), 오른쪽 보내기 단추 32
- 동작: 보내면 패널이 열리고 그 질문을 `도구 찾기`로 실행, 목록과 분야 조건은 그대로(검색하기와 프로젝트 열기 구분, 기획안 G-01)
- 큰 인사와 안내 문장: 없음(UX/07 0장)
- 근거 범례 한 줄: UX-021 5장 그대로(`L_legend`)
- 360: 진입칸 폭 전체, 보내면 바텀 시트

### 4-2. `/search` 두 탭(A-01)

- 구조: UX-020 5장 그대로, 해석 줄은 넣지 않음(패널 전용)
- 입력칸: KRDS 입력칸 모서리 8 유지(본문 폼과 같은 모양), 반짝임 없음
- AI 추천 묶음 제목 앞: Spark mark 16(대체 검색이면 없음)
- 처리 중: 결과 묶음 1 자리 반짝임 등장과 Skeleton, 패널과 같은 표시
- 결과 등장: 답변 박자 1(조건 줄과 안내 줄), 박자 2(두 결과 묶음)
- 추천 이유와 관련 이유, 차이 줄 끝: Basis mark(UX-021 5장)
- 패널 연결: 결과 열 위 오른쪽 `도우미로 이어 찾기`(text small), 패널을 열고 같은 질문을 첫 차례로 넣음(재요청 없이 이 화면 결과 재사용)

### 4-3. 소개 카드 `/projects/:id/about`(A-02)

- 카드 머리 작성 주체 줄 앞 Spark mark 16(카드가 AI 생성이라는 표시, 기존 `AI 정리` 글자 대체)
- 근거 줄 누름: README 원문 구역 해당 줄로 이동, 줄 강조 1.2초 다음 280ms 사라짐(2-4)
- 유사 프로젝트 구역 제목 오른쪽 `도우미로 이어 찾기`: 이 프로젝트 기준 F4 차례로 패널 열림
- 시연 묶음(F7, F8): 반짝임 없음(AI 결과 아님), `시연용 예시` 표시 유지, 예시 초안 패널 열림은 패널 열림 모션 값(200ms) 재사용

### 4-4. 현황판 `/dashboard/`

- 업무 도우미 패널: 넣지 않음(별도 앱, 자료 집계 화면)
- 반짝임: 지표 C 하는 일 근거 제목 앞 없음(집계 수치는 AI 문장이 아님)
- 적용: 글자 위계와 그림자 단계, 모션 값만 같은 표
- 이동: 머리 메뉴 `업무 검색`은 앱 `/search`, 패널 바로 열기 주소 `/?assistant=1`은 결정 필요 10

### 4-5. A-07 MCP 안내

- 세 기능 질문 예시: 패널 제안 질문과 같은 문구 원천(한 곳에서 관리)
- 질문 예시마다 `웹에서 같은 질문`: 패널 열고 입력칸에 채움, 전송은 사용자가 누름(연결 성공으로 보이는 자동 실행 없음)
- 예시 응답 블록: `예시` 표시 유지, 반짝임 없음(실제 호출 결과 아님)
- 근거 표식 문자열: MCP 응답의 `근거: README 3~5줄` 형식과 패널 Basis mark 글자 같게(UX-021 결정 항목)

### 4-6. 시연 화면 3개(F7 README 초안, F8 써 봤어요, F9 공개 준비 점검)

- 반짝임과 업무 도우미 진입: 없음
- 모션: F7 예시 패널 열림 200ms, F8 입력 영역 펼침 200ms(opacity와 translateY만, 높이 전환 없음), F9 아코디언은 기존 200ms
- 도우미 답변에 시연 자료 섞임 없음: F7, F8, F9 예시 파일은 검색 대상 아님

### 4-7. 사이드바 `업무 지원` 묶음

- 현재 항목: 도구 찾기(`/search`), 도구 요청, 이용 현황, 공동 개발(Sidebar.jsx `extra`)
- 변경 제안: 맨 위에 `업무 도우미` 단추 항목(아이콘 `ext/sparkle`, 오른쪽 단축키 힌트 `a` 13 text/subtle), 패널이 열려 있으면 항목 현재 상태(gray-90 면은 어두운 화면 기준 기존 값)
- 접힌 사이드바(44 아이콘 열): 반짝임 아이콘만, 툴팁 `업무 도우미`
- 기존 `도구 찾기` 이름: UX-020 6장에서 `C_task` 삭제 예정, 사이드바 이름은 `업무 검색`으로 맞춤(결정 필요 11)

## 5. 새 토큰과 새 부품

### 5-1. layout.tokens.css 추가 토큰

| 이름 | 값 | KRDS 대응 | 쓰는 곳 |
|---|---|---|---|
| `--layout-ai-panel-w` | 400 | `calc(var(--krds-number-21) * 4 + var(--krds-number-8))` | 오른쪽 패널 폭 |
| `--layout-ai-panel-gap` | 8 | `var(--layout-panel-gap)` | 패널 바깥 여백 |
| `--layout-ai-panel-radius` | 12 | `var(--layout-panel-radius)`(radius-xlarge1) | 패널 모서리 |
| `--layout-ai-panel-pad-x` | 16 | `var(--krds-number-8)` | 패널 좌우 안쪽 |
| `--layout-ai-head-h` | 48 | `var(--krds-number-16)` | 패널 머리 줄 |
| `--layout-ai-turn-gap` | 24 | `var(--krds-number-10)` | 차례 사이 |
| `--layout-ai-block-gap` | 12 | `var(--krds-number-7)` | 질문과 답변 사이, 답변 안 묶음 사이 |
| `--layout-ai-empty-gap` | 40 | `var(--krds-number-14)` | 첫 상태 위 여백 |
| `--layout-ai-suggest-h` | 40 | `var(--krds-number-14)` | 제안 질문 행 |
| `--layout-ai-composer-h` | 56 | `var(--krds-number-17)` | 패널 입력칸 시작 높이 |
| `--layout-ai-composer-max-h` | 120 | `calc(var(--rb-lh-15) * 4 + var(--krds-number-8) * 2)` | 입력칸 최대(4줄) |
| `--layout-ai-entry-h` | 48 | `var(--krds-number-16)` | 첫 화면 진입칸 |
| `--layout-ai-composer-radius` | 12 | `var(--krds-radius-xlarge1)` | 입력칸, 질문 덩어리 |
| `--layout-ai-send` | 32 | `var(--krds-number-12)` | 보내기 단추(정사각, 모서리 8) |
| `--layout-ai-icon` | 16 | `var(--krds-number-8)` | 반짝임 작은 크기 |
| `--layout-ai-icon-lg` | 24 | `var(--krds-number-10)` | 첫 상태 반짝임 |
| `--layout-ai-accent` | primary-50 | `var(--krds-color-light-primary-50)`, 어두운 화면 primary-40 | 반짝임 색 |
| `--layout-ai-question-bg` | gray-5 | `var(--krds-color-surface-gray-subtler)`, 어두운 화면 `--layout-raised-bg` | 질문 덩어리 면 |
| `--layout-ai-shadow-1` | 0 2 8 검정 8% | `0 var(--krds-number-2) var(--krds-number-5) var(--krds-color-alpha-shadow2)` | 첫 화면 진입칸 |
| `--layout-ai-shadow-3` | 0 8 20 검정 12% | `0 var(--krds-number-5) var(--krds-number-9) var(--krds-color-alpha-shadow3)` | 오른쪽 패널 |
| `--layout-ai-rise` | 8 | `var(--rb-menu-rise)` | 질문과 답변 등장 거리 |
| `--layout-ai-slide` | 24 | `var(--krds-number-10)` | 패널 열림 거리 |
| `--layout-ai-sheet-top` | 80 | `var(--krds-gap-12)` | 바텀 시트 위 여백 |
| `--layout-ai-stagger` | 120ms | `var(--rb-motion-fast)` | 답변 박자 2 지연 |
| `--layout-ai-z` | 85 | 단위 없음 | 패널 쌓임 순서 |
| `--layout-ai-turn-max` | 20 | 단위 없음(자바스크립트가 읽음) | 차례 한도 |

- 모든 크기 짝수, 간격과 모서리 4의 배수
- 움직임 줄이기: `--layout-ai-stagger`도 0(기존 `--rb-motion-*` 0 규칙에 한 줄 추가)
- Figma 변수: 모음 `layout`에 같은 이름 `layout/ai-*`로 추가(D-21 7장 이름 규칙)

### 5-2. 새 부품

| Figma 이름 | 속성 | 코드 파일 | 비고 |
|---|---|---|---|
| Assistant/Panel | Layout=Side, Sheet / State=Empty, Conversation | `components/Assistant/AssistantPanel.jsx`, `components/Assistant/assistant.css` | props `open`, `onClose`; 이름표 `assistant-panel` |
| Assistant/Composer | Context=Panel, Page / State=Default, Focus, Busy, Error / Show mode tabs(boolean) | `components/Assistant/Composer.jsx` | props `value`, `mode`, `onSubmit`, `busy`, `error`, `max`(500); nested Navigation/Tabs, Action/Icon button |
| Assistant/Suggestion row | Mode=Task, Build / State=Default, Hover, Focus | `components/Assistant/SuggestionRow.jsx` | props `label`, `mode`, `onPick` |
| Assistant/Turn question | Mode=Task, Build / Show field(boolean) | `components/Assistant/TurnQuestion.jsx` | props `text`, `mode`, `field` |
| Assistant/Turn answer | State=Thinking, Ready, Empty, Error, Fallback, Mismatch / Kind=Recommend, Similar | `components/Assistant/TurnAnswer.jsx` | nested Reading line, Layout/Project row, Feedback/Status block, Feedback/Skeleton |
| Assistant/Reading line | Source=Ai, Fallback / State=View, Edit | `components/Assistant/ReadingLine.jsx` | props `field`, `keywords`, `source`, `onRerun` |
| Assistant/Spark mark | Size=16, 24 / Motion=Static, Enter | `components/Assistant/SparkMark.jsx` | `ext/sparkle` SVG 단색, `aria-hidden` |
| Feedback/Basis mark | Kind=Lines, Paths, None / Link(boolean) | `components/Feedback/BasisMark.jsx` | UX-021 5장 제안 그대로, 패널과 `/search`, A-02 공용 |

- 공용 상태: `components/Assistant/AssistantContext.jsx`(열기, 닫기, 차례 목록, 요청 번호), 앱 껍데기(`App.jsx`)에서 한 번 감쌈
- 검색 연결: 새 함수 없음, `api/search.js`의 F1, F4 함수와 후보 검증 재사용. 해석 칸(분야, 핵심어)만 응답 형식 추가(결정 필요 12)
- 확장 부품: Layout/Project row에 Layout=Stacked Density=Compact 조합으로 `similarAction`(boolean) 추가, Navigation/Tabs에 Size=Small
- 고칠 기존 파일: `components/Navigation/Sidebar.jsx`(업무 지원 첫 항목, 단추 항목 형식), `components/Identity/GlobalBar.jsx`(상단 바 열기 단추, `a` 단축키), `components/Feedback/ShortcutsDialog.jsx`(단축키 한 줄), `screens/P01_Home.jsx`(진입칸), `screens/P02_Search.jsx`(반짝임과 이어 찾기), `screens/P04_Project.jsx`(이어 찾기 단추), `copy/ui.js`(A_ 키)
- 문구 키 추가: `A_name`(업무 도우미), `A_greet`(업무로 프로젝트 찾기), `A_thinking`(찾는 중), `A_read`(해석), `A_readFallback`(일반 검색), `A_edit`(고치기), `A_rerun`(다시 찾기), `A_similar`(유사 프로젝트), `A_similarQ(name)`, `A_moreResults(n)`(일반 결과 n건), `A_new`(새 대화), `A_close`(닫기), `A_openSimilar`(도우미로 이어 찾기), `A_askWeb`(웹에서 같은 질문), `A_modeTask`(업무), `A_modeBuild`(기능)

### 5-3. 점검표(구현과 Figma 공통)

- 알약: 입력칸, 보내기 단추, 제안 행, 모드 탭 모두 모서리 12 이하
- 색: 반짝임 primary-50 단색, 질문 면 gray-5 외 면 색 0개, 그라데이션 0개(결정 필요 1 전까지)
- 테두리: 입력칸 테두리 1만, 패널 테두리는 어두운 화면 판 테두리 규칙과 같게
- 크기: 패널 400, 머리 48, 입력칸 56, 행 40, 아이콘 16과 24 실측
- 정렬: 아이콘과 글자 세로 가운데(D-16), 보내기 단추 입력칸 오른쪽 아래 기준 가운데
- 모션: transform과 opacity 외 전환 속성 0개, 움직임 줄이기에서 0
- 문구: 이모지와 가운뎃점, 줄표, 세로선 0건(audit:code)

## 6. 결정 필요

1. 그라데이션 한 곳 허용 여부: 허용하면 처리 중 2px 막대 하나에만 primary-40에서 primary-60(같은 원색 단계 사이) 한 방향, 막대는 translateX 이동만. 기본안은 허용 안 함
2. 반짝임 반복 움직임: 처리 중 반짝임 반복 회전(280ms 단위)을 넣을지, 기본안은 등장 한 번과 Skeleton 맥박
3. 반짝임 아이콘 겹침: 사이드바 `AI 카탈로그`(공공 깃랩 원문 링크)가 같은 `ext/sparkle` 사용 중, AI 카탈로그 아이콘을 `ext/catalog`로 바꿀지
4. 패널 이름: 업무 도우미, 찾기 도우미, 프로젝트 길잡이 중 선택
5. 1440 패널 방식: 본문 위에 뜨는 비모달(기본안, 튕김 없음) 또는 GitLab Duo처럼 본문 판을 밀어내는 방식
6. 첫 상태 세로 위치: 위쪽 정렬(기본안) 또는 입력칸 가까운 아래쪽
7. 자유 이어 묻기에서 이전 차례 분야 조건 유지 여부
8. 패널 안 고지 글자(`새로고침 시 대화 삭제`, AI 답변 오류 가능 고지) 넣을지
9. F6 본문과 패널 사이 이동 키 채택 여부
10. 현황판에서 패널 바로 열기 주소(`/?assistant=1`) 채택 여부
11. 사이드바 `도구 찾기` 이름을 `업무 검색`으로 바꿀지(UX-020 6장 `C_task` 삭제와 연동)
12. F1 함수 응답에 해석 칸(분야 1개, 핵심어 최대 3개, 입력 원문 안 단어만) 추가: 한은진과 김민우 합의
13. 열기 단축키: `a`(1순위)와 `Ctrl+.`(2순위) 중 선택 또는 둘 다
14. 첫 화면 진입칸 그림자 1단계 유지 여부(평면 금지 규칙과 목록 밀도 사이)
