# M-8 담당 D21 작업 목록

- 생성: M-8 측정(코드 ffdbc40, 개발 서버 5994) 대 Figma 합본 figma_full.json 2026-11-07 07:51(598 변형)
- 해소 규칙: D-xx > 공공 깃랩 실측(UX/gitlab_compare, UX/handson, UX/17) > Figma(실측 없는 덧붙임). measured_full.json은 코드 측정이라 실측으로 쓰지 않았다
- 확정도: 확인함 = 이번에 캡처를 열어 봄 / 기록 인용 = 기존 문서·커밋 문구를 인용 / 규칙 적용 = 규칙만 적용 / 미판정 = 실측 대조 필요
- 이 담당 차이 건수 기준 고칠 쪽: 미판정 996건, Figma 325건, 코드 38건, 보류 30건

## 코드에만 · group-row (200건)
- 고칠 쪽: **Figma** / 확정도: 확인함(캡처를 열어 봄)
- 근거: UX/gitlab_compare/40_그룹_실제대우리_1440.png 왼쪽(실제 공공 깃랩)에 그룹 행(아바타, 이름, 통계, 점 세 개)이 있고 Figma G-04에는 group-row 요소가 없다. 실측 있음 → Figma에 행 추가·이름표
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-04_1024_Guest | group-row | 코드에만 있음 |
| D21 | G-04_1024_Guest | group-row#2 | 코드에만 있음 |
| D21 | G-04_1024_Guest | group-row#3 | 코드에만 있음 |
| D21 | G-04_1024_Guest | group-row#4 | 코드에만 있음 |
| D21 | G-04_1024_Guest | group-row#5 | 코드에만 있음 |
| D21 | G-04_1024_Guest | group-row#6 | 코드에만 있음 |
| D21 | G-04_1024_Guest | group-row#7 | 코드에만 있음 |
| D21 | G-04_1024_Guest | group-row#8 | 코드에만 있음 |
| … | 나머지 192건 | | 화면별: G-04 200 |

## 문구 · page-head (30건)
- 고칠 쪽: **보류** / 확정도: 기록 인용(문서·커밋 문구, 직접 재확인 안 함)
- 근거: G-06 제목 '내 작업' 대 '내 프로젝트'는 원장 pending: 사용자 캡처 대기(실제 /dashboard/projects, 로그인 필요)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-06_1024_Guest | page-head | 코드 "내 프로젝트" / Figma ["내 작업"]  |
| D21 | G-06_1024_Signed-in | page-head | 코드 "내 프로젝트" / Figma ["내 작업"]  |
| D21 | G-06_1440_Guest | page-head | 코드 "내 프로젝트" / Figma ["내 작업"]  |
| D21 | G-06_1440_Signed-in | page-head | 코드 "내 프로젝트" / Figma ["내 작업"]  |
| D21 | G-06_1920_Guest | page-head | 코드 "내 프로젝트" / Figma ["내 작업"]  |
| D21 | G-06_1920_Signed-in | page-head | 코드 "내 프로젝트" / Figma ["내 작업"]  |
| D21 | G-06_360_Guest | page-head | 코드 "내 프로젝트" / Figma ["내 작업"]  |
| D21 | G-06_360_Signed-in | page-head | 코드 "내 프로젝트" / Figma ["내 작업"]  |
| … | 나머지 22건 | | 화면별: G-06 10, G-09 10, G-11 10 |

## 위치/크기 · project-row · h (40건)
- 고칠 쪽: **Figma** / 확정도: 기록 인용(문서·커밋 문구, 직접 재확인 안 함)
- 근거: 코드 설명 최대 폭 704는 실측으로 기록(커밋 5830de2). 줄 수와 행 높이는 폭에서 결정되므로 Figma 행(91/119) 줄 수를 704 기준으로 다시 계산
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-01_1440_Guest | project-row#4 | h: 코드 71 / Figma 91 |
| D21 | A-01_1440_Signed-in | project-row#4 | h: 코드 71 / Figma 91 |
| D21 | A-01_1920_Guest | project-row#4 | h: 코드 71 / Figma 91 |
| D21 | A-01_1920_Signed-in | project-row#4 | h: 코드 71 / Figma 91 |
| D21 | A-01_360_Guest | project-row#8 | h: 코드 139 / Figma 161 |
| D21 | A-01_360_Signed-in | project-row#8 | h: 코드 139 / Figma 161 |
| D21 | A-01_768_Guest | project-row | h: 코드 71 / Figma 69 |
| D21 | A-01_768_Guest | project-row#2 | h: 코드 71 / Figma 69 |
| … | 나머지 32건 | | 화면별: G-01 26, A-01 14 |

## Figma에만 · tabs (40건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-09_1024_Guest | tabs | Figma에만 {"x": 40, "y": 199, "w": 944, "h": 40} |
| D21 | A-09_1024_Signed-in | tabs | Figma에만 {"x": 40, "y": 199, "w": 944, "h": 40} |
| D21 | A-09_1440_Guest | tabs | Figma에만 {"x": 296, "y": 199, "w": 1088, "h": 40} |
| D21 | A-09_1440_Signed-in | tabs | Figma에만 {"x": 296, "y": 199, "w": 1088, "h": 40} |
| D21 | A-09_1920_Guest | tabs | Figma에만 {"x": 480, "y": 199, "w": 1200, "h": 40} |
| D21 | A-09_1920_Signed-in | tabs | Figma에만 {"x": 480, "y": 199, "w": 1200, "h": 40} |
| D21 | A-09_360_Guest | tabs | Figma에만 {"x": 16, "y": 213, "w": 328, "h": 40} |
| D21 | A-09_360_Signed-in | tabs | Figma에만 {"x": 16, "y": 213, "w": 328, "h": 40} |
| … | 나머지 32건 | | 화면별: A-09 10, G-01 10, G-04 10, G-06 5, G-07 5 |

## 아이콘 · project-row (38건)
- 고칠 쪽: **코드** / 확정도: 확인함(캡처를 열어 봄)
- 근거: UX/gitlab_compare/01_탐색_프로젝트목록_1440.png: 실제 행에 왼쪽 프로젝트 아이콘과 이름 옆 지구본(공개) 아이콘이 있다. Figma 아이콘 목록(globe, project)이 실측과 같고 코드 이름표/아이콘이 빠졌다
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-01_360_Guest | project-row | 코드 ["ellipsis-vertical", "fork", "issues", "merge-request", "st / Figma ["ellipsis-vertical", "fork", "globe", "issues", "merge-requ  |
| D21 | A-01_360_Guest | project-row#2 | 코드 ["ellipsis-vertical", "fork", "globe", "issues", "merge-requ / Figma ["ellipsis-vertical", "fork", "globe", "issues", "merge-requ  |
| D21 | A-01_360_Guest | project-row#3 | 코드 ["ellipsis-vertical", "fork", "globe", "issues", "merge-requ / Figma ["ellipsis-vertical", "fork", "globe", "issues", "merge-requ  |
| D21 | A-01_360_Guest | project-row#4 | 코드 ["ellipsis-vertical", "fork", "globe", "issues", "merge-requ / Figma ["ellipsis-vertical", "fork", "globe", "issues", "merge-requ  |
| D21 | A-01_360_Guest | project-row#5 | 코드 ["ellipsis-vertical", "fork", "globe", "issues", "merge-requ / Figma ["ellipsis-vertical", "fork", "globe", "issues", "merge-requ  |
| D21 | A-01_360_Guest | project-row#6 | 코드 ["ellipsis-vertical", "fork", "globe", "issues", "merge-requ / Figma ["ellipsis-vertical", "fork", "globe", "issues", "merge-requ  |
| D21 | A-01_360_Guest | project-row#7 | 코드 ["ellipsis-vertical", "fork", "globe", "issues", "merge-requ / Figma ["ellipsis-vertical", "fork", "globe", "issues", "merge-requ  |
| D21 | A-01_360_Guest | project-row#8 | 코드 ["ellipsis-vertical", "fork", "globe", "issues", "merge-requ / Figma ["ellipsis-vertical", "fork", "globe", "issues", "merge-requ  |
| … | 나머지 30건 | | 화면별: A-01 16, G-01 16, G-02 6 |

## 위치/크기 · section-title · y (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-06_1024_Guest | section-title | y: 코드 205 / Figma 169 |
| D21 | G-06_1024_Signed-in | section-title | y: 코드 205 / Figma 169 |
| D21 | G-06_1440_Guest | section-title | y: 코드 205 / Figma 169 |
| D21 | G-06_1440_Signed-in | section-title | y: 코드 205 / Figma 169 |
| D21 | G-06_1920_Guest | section-title | y: 코드 205 / Figma 169 |
| D21 | G-06_1920_Signed-in | section-title | y: 코드 205 / Figma 169 |
| D21 | G-06_360_Guest | section-title | y: 코드 193 / Figma 161 |
| D21 | G-06_360_Signed-in | section-title | y: 코드 193 / Figma 161 |
| … | 나머지 2건 | | 화면별: G-06 10 |

## 위치/크기 · login-card · h (32건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-08b_360_Guest | login-card | h: 코드 530 / Figma 552 |
| D21 | G-08b_360_Signed-in | login-card | h: 코드 530 / Figma 552 |
| D21 | G-08c_1024_Guest | login-card | h: 코드 338 / Figma 366 |
| D21 | G-08c_1024_Signed-in | login-card | h: 코드 338 / Figma 366 |
| D21 | G-08c_1440_Guest | login-card | h: 코드 338 / Figma 366 |
| D21 | G-08c_1440_Signed-in | login-card | h: 코드 338 / Figma 366 |
| D21 | G-08c_1920_Guest | login-card | h: 코드 338 / Figma 406 |
| D21 | G-08c_1920_Signed-in | login-card | h: 코드 338 / Figma 366 |
| … | 나머지 24건 | | 화면별: G-08c 10, G-08d 10, G-08e 10, G-08b 2 |

## 문구 · login-card (30건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-08b_1024_Guest | login-card | 코드 "로그인 아이디/비밀번호 확인, 5회 오류 시 잠금 아이디 또는 이메일 (필수) 비밀번호 (필수) 로그인 상 / Figma ["아이디 또는 비밀번호가 맞지 않습니다. 다시 입력해 주세요."]  |
| D21 | G-08b_1024_Signed-in | login-card | 코드 "로그인 아이디/비밀번호 확인, 5회 오류 시 잠금 아이디 또는 이메일 (필수) 비밀번호 (필수) 로그인 상 / Figma ["아이디 또는 비밀번호가 맞지 않습니다. 다시 입력해 주세요."]  |
| D21 | G-08b_1440_Guest | login-card | 코드 "로그인 아이디/비밀번호 확인, 5회 오류 시 잠금 아이디 또는 이메일 (필수) 비밀번호 (필수) 로그인 상 / Figma ["아이디 또는 비밀번호가 맞지 않습니다. 다시 입력해 주세요."]  |
| D21 | G-08b_1440_Signed-in | login-card | 코드 "로그인 아이디/비밀번호 확인, 5회 오류 시 잠금 아이디 또는 이메일 (필수) 비밀번호 (필수) 로그인 상 / Figma ["아이디 또는 비밀번호가 맞지 않습니다. 다시 입력해 주세요."]  |
| D21 | G-08b_1920_Guest | login-card | 코드 "로그인 아이디/비밀번호 확인, 5회 오류 시 잠금 아이디 또는 이메일 (필수) 비밀번호 (필수) 로그인 상 / Figma ["아이디 또는 비밀번호가 맞지 않습니다. 다시 입력해 주세요."]  |
| D21 | G-08b_1920_Signed-in | login-card | 코드 "로그인 아이디/비밀번호 확인, 5회 오류 시 잠금 아이디 또는 이메일 (필수) 비밀번호 (필수) 로그인 상 / Figma ["아이디 또는 비밀번호가 맞지 않습니다. 다시 입력해 주세요."]  |
| D21 | G-08b_360_Guest | login-card | 코드 "로그인 아이디/비밀번호 확인, 5회 오류 시 잠금 아이디 또는 이메일 (필수) 비밀번호 (필수) 로그인 상 / Figma ["아이디 또는 비밀번호가 맞지 않습니다. 다시 입력해 주세요."]  |
| D21 | G-08b_360_Signed-in | login-card | 코드 "로그인 아이디/비밀번호 확인, 5회 오류 시 잠금 아이디 또는 이메일 (필수) 비밀번호 (필수) 로그인 상 / Figma ["아이디 또는 비밀번호가 맞지 않습니다. 다시 입력해 주세요."]  |
| … | 나머지 22건 | | 화면별: G-08b 10, G-08c 10, G-08e 10 |

## Figma에만 · login-fact (30건)
- 고칠 쪽: **미판정** / 확정도: 규칙 적용(실측 대조 안 함)
- 근거: UX/gitlab_compare/46_로그인_1440.png 실제 로그인엔 '비밀번호 미수집, 로그인은 공공 저장소에서 처리' 문구가 없는 덧붙임. 로그인 2열 유지 결정(UX/13_공공깃랩_화면_대조표.md 78행) 안의 덧붙임이라 Figma가 정답(규칙 2)이면 코드에 추가
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-08c_1024_Guest | login-fact | Figma에만 {"x": 541, "y": 393, "w": 400, "h": 20} |
| D21 | G-08c_1024_Signed-in | login-fact | Figma에만 {"x": 541, "y": 393, "w": 400, "h": 20} |
| D21 | G-08c_1440_Guest | login-fact | Figma에만 {"x": 749, "y": 393, "w": 400, "h": 20} |
| D21 | G-08c_1440_Signed-in | login-fact | Figma에만 {"x": 749, "y": 393, "w": 400, "h": 20} |
| D21 | G-08c_1920_Guest | login-fact | Figma에만 {"x": 989, "y": 433, "w": 400, "h": 20} |
| D21 | G-08c_1920_Signed-in | login-fact | Figma에만 {"x": 989, "y": 393, "w": 400, "h": 20} |
| D21 | G-08c_360_Guest | login-fact | Figma에만 {"x": 16, "y": 733, "w": 328, "h": 20} |
| D21 | G-08c_360_Signed-in | login-fact | Figma에만 {"x": 16, "y": 733, "w": 328, "h": 20} |
| … | 나머지 22건 | | 화면별: G-08c 10, G-08d 10, G-08e 10 |

## 문구 · commit-bar (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | commit-bar | 코드 "release: 4.24.21 서울특별시 광진구 류승인가 8일 전에 작성 03f9484e 이력" / Figma ["서울특별시 광진구 류승인가 11시간 전에 작성"]  |
| D21 | R-01_1024_Signed-in | commit-bar | 코드 "release: 4.24.21 서울특별시 광진구 류승인가 8일 전에 작성 03f9484e 이력" / Figma ["서울특별시 광진구 류승인가 11시간 전에 작성"]  |
| D21 | R-01_1440_Guest | commit-bar | 코드 "release: 4.24.21 서울특별시 광진구 류승인가 8일 전에 작성 03f9484e 이력" / Figma ["서울특별시 광진구 류승인가 11시간 전에 작성"]  |
| D21 | R-01_1440_Signed-in | commit-bar | 코드 "release: 4.24.21 서울특별시 광진구 류승인가 8일 전에 작성 03f9484e 이력" / Figma ["서울특별시 광진구 류승인가 11시간 전에 작성"]  |
| D21 | R-01_1920_Guest | commit-bar | 코드 "release: 4.24.21 서울특별시 광진구 류승인가 8일 전에 작성 03f9484e 이력" / Figma ["서울특별시 광진구 류승인가 11시간 전에 작성"]  |
| D21 | R-01_1920_Signed-in | commit-bar | 코드 "release: 4.24.21 서울특별시 광진구 류승인가 8일 전에 작성 03f9484e 이력" / Figma ["서울특별시 광진구 류승인가 11시간 전에 작성"]  |
| D21 | R-01_360_Guest | commit-bar | 코드 "release: 4.24.21 서울특별시 광진구 류승인가 8일 전에 작성 03f9484e 이력" / Figma ["서울특별시 광진구 류승인가 11시간 전에 작성"]  |
| D21 | R-01_360_Signed-in | commit-bar | 코드 "release: 4.24.21 서울특별시 광진구 류승인가 8일 전에 작성 03f9484e 이력" / Figma ["서울특별시 광진구 류승인가 11시간 전에 작성"]  |
| … | 나머지 2건 | | 화면별: R-01 10 |

## 모서리·안쪽·간격 · readme (30건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | readme | 코드 null / Figma null 모서리 0→8 |
| D21 | R-01_1024_Guest | readme | 코드 null / Figma null 안쪽 16 16 16 16→0 0 0 0 |
| D21 | R-01_1024_Guest | readme | 코드 null / Figma null 간격 12→0 |
| D21 | R-01_1024_Signed-in | readme | 코드 null / Figma null 모서리 0→8 |
| D21 | R-01_1024_Signed-in | readme | 코드 null / Figma null 안쪽 16 16 16 16→0 0 0 0 |
| D21 | R-01_1024_Signed-in | readme | 코드 null / Figma null 간격 12→0 |
| D21 | R-01_1440_Guest | readme | 코드 null / Figma null 모서리 0→8 |
| D21 | R-01_1440_Guest | readme | 코드 null / Figma null 안쪽 16 16 16 16→0 0 0 0 |
| … | 나머지 22건 | | 화면별: R-01 30 |

## 위치/크기 · project-row · y (28건)
- 고칠 쪽: **Figma** / 확정도: 규칙 적용(실측 대조 안 함)
- 근거: 위 project-row h 차이가 아래 행 y에 누적된 값. h를 고치면 같이 해소
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-01_1024_Guest | project-row#4 | y: 코드 441 / Figma 437 |
| D21 | A-01_1024_Guest | project-row#5 | y: 코드 532 / Figma 528 |
| D21 | A-01_1024_Signed-in | project-row#4 | y: 코드 441 / Figma 437 |
| D21 | A-01_1024_Signed-in | project-row#5 | y: 코드 532 / Figma 528 |
| D21 | A-01_1440_Guest | project-row#4 | y: 코드 441 / Figma 437 |
| D21 | A-01_1440_Guest | project-row#5 | y: 코드 512 / Figma 528 |
| D21 | A-01_1440_Guest | project-row#6 | y: 코드 583 / Figma 599 |
| D21 | A-01_1440_Signed-in | project-row#4 | y: 코드 441 / Figma 437 |
| … | 나머지 20건 | | 화면별: A-01 24, G-01 4 |

## 위치/크기 · gl-filter · y (12건)
- 고칠 쪽: **Figma** / 확정도: 기록 인용(문서·커밋 문구, 직접 재확인 안 함)
- 근거: UX/audit_v3/M7_to_figma.md·M7_C_resolution.md: D-21 조작 32 적용으로 코드 쪽은 처리됨. 남은 차이는 Figma 전달 항목
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-01_360_Guest | gl-filter | y: 코드 213 / Figma 245 |
| D21 | G-01_360_Signed-in | gl-filter | y: 코드 213 / Figma 245 |
| D21 | G-04_1024_Guest | gl-filter | y: 코드 259 / Figma 206 |
| D21 | G-04_1024_Signed-in | gl-filter | y: 코드 259 / Figma 206 |
| D21 | G-04_1440_Guest | gl-filter | y: 코드 259 / Figma 206 |
| D21 | G-04_1440_Signed-in | gl-filter | y: 코드 259 / Figma 206 |
| D21 | G-04_1920_Guest | gl-filter | y: 코드 259 / Figma 206 |
| D21 | G-04_1920_Signed-in | gl-filter | y: 코드 259 / Figma 206 |
| … | 나머지 4건 | | 화면별: G-04 10, G-01 2 |

## 위치/크기 · page-head · h (15건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-04_1024_Guest | page-head | h: 코드 40 / Figma 44 |
| D21 | G-04_1024_Signed-in | page-head | h: 코드 40 / Figma 44 |
| D21 | G-04_1440_Guest | page-head | h: 코드 40 / Figma 44 |
| D21 | G-04_1440_Signed-in | page-head | h: 코드 40 / Figma 44 |
| D21 | G-04_1920_Guest | page-head | h: 코드 40 / Figma 44 |
| D21 | G-04_1920_Signed-in | page-head | h: 코드 40 / Figma 44 |
| D21 | G-04_360_Guest | page-head | h: 코드 32 / Figma 36 |
| D21 | G-04_360_Signed-in | page-head | h: 코드 32 / Figma 36 |
| … | 나머지 7건 | | 화면별: G-04 10, G-07 5 |

## 모서리·안쪽·간격 · page-head (15건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-04_1024_Guest | page-head | 코드 null / Figma null 안쪽 0 0 4 0→0 0 0 0 |
| D21 | G-04_1024_Signed-in | page-head | 코드 null / Figma null 안쪽 0 0 4 0→0 0 0 0 |
| D21 | G-04_1440_Guest | page-head | 코드 null / Figma null 안쪽 0 0 4 0→0 0 0 0 |
| D21 | G-04_1440_Signed-in | page-head | 코드 null / Figma null 안쪽 0 0 4 0→0 0 0 0 |
| D21 | G-04_1920_Guest | page-head | 코드 null / Figma null 안쪽 0 0 4 0→0 0 0 0 |
| D21 | G-04_1920_Signed-in | page-head | 코드 null / Figma null 안쪽 0 0 4 0→0 0 0 0 |
| D21 | G-04_360_Guest | page-head | 코드 null / Figma null 안쪽 0 0 4 0→0 0 0 0 |
| D21 | G-04_360_Signed-in | page-head | 코드 null / Figma null 안쪽 0 0 4 0→0 0 0 0 |
| … | 나머지 7건 | | 화면별: G-04 10, G-07 5 |

## 위치/크기 · section-title · w (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-06_1024_Guest | section-title | w: 코드 896 / Figma 944 |
| D21 | G-06_1024_Signed-in | section-title | w: 코드 896 / Figma 944 |
| D21 | G-06_1440_Guest | section-title | w: 코드 1040 / Figma 1088 |
| D21 | G-06_1440_Signed-in | section-title | w: 코드 1040 / Figma 1088 |
| D21 | G-06_1920_Guest | section-title | w: 코드 1152 / Figma 1200 |
| D21 | G-06_1920_Signed-in | section-title | w: 코드 1152 / Figma 1200 |
| D21 | G-06_360_Guest | section-title | w: 코드 280 / Figma 328 |
| D21 | G-06_360_Signed-in | section-title | w: 코드 280 / Figma 328 |
| … | 나머지 2건 | | 화면별: G-06 10 |

## 위치/크기 · sidebar-nav · h (8건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1440_Guest | sidebar-nav | h: 코드 352 / Figma 561 |
| D21 | A-02_1440_Signed-in | sidebar-nav | h: 코드 352 / Figma 561 |
| D21 | A-02_1920_Guest | sidebar-nav | h: 코드 352 / Figma 561 |
| D21 | A-02_1920_Signed-in | sidebar-nav | h: 코드 352 / Figma 561 |
| D21 | R-30_1440_Guest | sidebar-nav | h: 코드 560 / Figma 817 |
| D21 | R-30_1440_Signed-in | sidebar-nav | h: 코드 560 / Figma 817 |
| D21 | R-30_1920_Guest | sidebar-nav | h: 코드 560 / Figma 817 |
| D21 | R-30_1920_Signed-in | sidebar-nav | h: 코드 560 / Figma 817 |

## 문구 · section-title (5건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: G-06 Signed-in 등 문구 차이 24건: 실측 캡처 없음
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-06_1024_Signed-in | section-title | 코드 "로그인 후 내 도구/받은 의견" / Figma ["새 프로젝트"]  |
| D21 | G-06_1440_Signed-in | section-title | 코드 "로그인 후 내 도구/받은 의견" / Figma ["새 프로젝트"]  |
| D21 | G-06_1920_Signed-in | section-title | 코드 "로그인 후 내 도구/받은 의견" / Figma ["새 프로젝트"]  |
| D21 | G-06_768_Signed-in | section-title | 코드 "로그인 후 내 도구/받은 의견" / Figma ["새 프로젝트"]  |
| D21 | G-12_360_Guest | section-title | 코드 "활동" / Figma ["정보"]  |

## 위치/크기 · main · y (13건)
- 고칠 쪽: **Figma** / 확정도: 규칙 적용(실측 대조 안 함)
- 근거: 코드는 전 화면 main y 81로 같고(560개 중 이 항목 차이는 A-02·G-12에만), Figma 121은 A-02·G-12에 breadcrumb 줄을 따로 둔 구조. 공통 판 구조(breadcrumb y 81 일치)에 Figma가 맞춘다
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | main | y: 코드 81 / Figma 121 |
| D21 | A-02_1024_Signed-in | main | y: 코드 81 / Figma 121 |
| D21 | A-02_1440_Guest | main | y: 코드 81 / Figma 121 |
| D21 | A-02_1440_Signed-in | main | y: 코드 81 / Figma 121 |
| D21 | A-02_1920_Guest | main | y: 코드 81 / Figma 121 |
| D21 | A-02_1920_Signed-in | main | y: 코드 81 / Figma 121 |
| D21 | A-02_360_Guest | main | y: 코드 81 / Figma 121 |
| D21 | A-02_360_Signed-in | main | y: 코드 81 / Figma 121 |
| … | 나머지 5건 | | 화면별: A-02 10, G-12 3 |

## Figma에만 · section-title (2건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-12_1440_Guest | section-title | Figma에만 {"x": 1088, "y": 241, "w": 30, "h": 26} |
| D21 | G-12_768_Guest | section-title | Figma에만 {"x": 32, "y": 989, "w": 30, "h": 26} |

## 코드에만 · page-head (21건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-01_1024_Guest | page-head | 코드에만 있음 |
| D21 | G-01_1024_Signed-in | page-head | 코드에만 있음 |
| D21 | G-01_1440_Guest | page-head | 코드에만 있음 |
| D21 | G-01_1440_Signed-in | page-head | 코드에만 있음 |
| D21 | G-01_1920_Guest | page-head | 코드에만 있음 |
| D21 | G-01_1920_Signed-in | page-head | 코드에만 있음 |
| D21 | G-01_360_Guest | page-head | 코드에만 있음 |
| D21 | G-01_360_Signed-in | page-head | 코드에만 있음 |
| … | 나머지 13건 | | 화면별: G-01 10, R-01 10, G-12 1 |

## Figma에만 · results (20건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-01_1024_Guest | results | Figma에만 {"x": 320, "y": 177, "w": 664, "h": 695} |
| D21 | A-01_1024_Signed-in | results | Figma에만 {"x": 320, "y": 177, "w": 664, "h": 695} |
| D21 | A-01_1440_Guest | results | Figma에만 {"x": 400, "y": 177, "w": 920, "h": 635} |
| D21 | A-01_1440_Signed-in | results | Figma에만 {"x": 400, "y": 177, "w": 920, "h": 635} |
| D21 | A-01_1920_Guest | results | Figma에만 {"x": 640, "y": 177, "w": 920, "h": 635} |
| D21 | A-01_1920_Signed-in | results | Figma에만 {"x": 640, "y": 177, "w": 920, "h": 635} |
| D21 | A-01_360_Guest | results | Figma에만 {"x": 16, "y": 213, "w": 328, "h": 1057} |
| D21 | A-01_360_Signed-in | results | Figma에만 {"x": 16, "y": 213, "w": 328, "h": 1057} |
| … | 나머지 12건 | | 화면별: A-01 10, G-02 10 |

## 위치/크기 · search-clear · x (20건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-01_1024_Guest | search-clear | x: 코드 955 / Figma 883 |
| D21 | A-01_1024_Signed-in | search-clear | x: 코드 955 / Figma 883 |
| D21 | A-01_1440_Guest | search-clear | x: 코드 1291 / Figma 1219 |
| D21 | A-01_1440_Signed-in | search-clear | x: 코드 1291 / Figma 1219 |
| D21 | A-01_1920_Guest | search-clear | x: 코드 1531 / Figma 1459 |
| D21 | A-01_1920_Signed-in | search-clear | x: 코드 1531 / Figma 1459 |
| D21 | A-01_360_Guest | search-clear | x: 코드 315 / Figma 243 |
| D21 | A-01_360_Signed-in | search-clear | x: 코드 315 / Figma 243 |
| … | 나머지 12건 | | 화면별: A-01 10, G-02 10 |

## Figma에만 · project-info (20건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | project-info | Figma에만 {"x": 688, "y": 121, "w": 296, "h": 792} |
| D21 | A-02_1024_Signed-in | project-info | Figma에만 {"x": 688, "y": 121, "w": 296, "h": 792} |
| D21 | A-02_1440_Guest | project-info | Figma에만 {"x": 1088, "y": 121, "w": 296, "h": 792} |
| D21 | A-02_1440_Signed-in | project-info | Figma에만 {"x": 1088, "y": 121, "w": 296, "h": 792} |
| D21 | A-02_1920_Guest | project-info | Figma에만 {"x": 1384, "y": 121, "w": 296, "h": 792} |
| D21 | A-02_1920_Signed-in | project-info | Figma에만 {"x": 1384, "y": 121, "w": 296, "h": 792} |
| D21 | A-02_360_Guest | project-info | Figma에만 {"x": 16, "y": 225, "w": 328, "h": 746} |
| D21 | A-02_360_Signed-in | project-info | Figma에만 {"x": 16, "y": 225, "w": 328, "h": 746} |
| … | 나머지 12건 | | 화면별: A-02 10, A-04 10 |

## Figma에만 · toolbar (20건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | toolbar | Figma에만 {"x": 40, "y": 185, "w": 624, "h": 32} |
| D21 | A-02_1024_Signed-in | toolbar | Figma에만 {"x": 40, "y": 185, "w": 624, "h": 32} |
| D21 | A-02_1440_Guest | toolbar | Figma에만 {"x": 296, "y": 185, "w": 768, "h": 32} |
| D21 | A-02_1440_Signed-in | toolbar | Figma에만 {"x": 296, "y": 185, "w": 768, "h": 32} |
| D21 | A-02_1920_Guest | toolbar | Figma에만 {"x": 480, "y": 185, "w": 880, "h": 32} |
| D21 | A-02_1920_Signed-in | toolbar | Figma에만 {"x": 480, "y": 185, "w": 880, "h": 32} |
| D21 | A-02_360_Guest | toolbar | Figma에만 {"x": 16, "y": 987, "w": 328, "h": 72} |
| D21 | A-02_360_Signed-in | toolbar | Figma에만 {"x": 16, "y": 987, "w": 328, "h": 72} |
| … | 나머지 12건 | | 화면별: A-02 10, A-04 10 |

## Figma에만 · commit-bar (20건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | commit-bar | Figma에만 {"x": 40, "y": 233, "w": 624, "h": 66} |
| D21 | A-02_1024_Signed-in | commit-bar | Figma에만 {"x": 40, "y": 233, "w": 624, "h": 66} |
| D21 | A-02_1440_Guest | commit-bar | Figma에만 {"x": 296, "y": 233, "w": 768, "h": 66} |
| D21 | A-02_1440_Signed-in | commit-bar | Figma에만 {"x": 296, "y": 233, "w": 768, "h": 66} |
| D21 | A-02_1920_Guest | commit-bar | Figma에만 {"x": 480, "y": 233, "w": 880, "h": 66} |
| D21 | A-02_1920_Signed-in | commit-bar | Figma에만 {"x": 480, "y": 233, "w": 880, "h": 66} |
| D21 | A-02_360_Guest | commit-bar | Figma에만 {"x": 16, "y": 1075, "w": 328, "h": 66} |
| D21 | A-02_360_Signed-in | commit-bar | Figma에만 {"x": 16, "y": 1075, "w": 328, "h": 66} |
| … | 나머지 12건 | | 화면별: A-02 10, A-04 10 |

## Figma에만 · file-table (20건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | file-table | Figma에만 {"x": 40, "y": 315, "w": 624, "h": 1262} |
| D21 | A-02_1024_Signed-in | file-table | Figma에만 {"x": 40, "y": 315, "w": 624, "h": 1262} |
| D21 | A-02_1440_Guest | file-table | Figma에만 {"x": 296, "y": 315, "w": 768, "h": 1262} |
| D21 | A-02_1440_Signed-in | file-table | Figma에만 {"x": 296, "y": 315, "w": 768, "h": 1262} |
| D21 | A-02_1920_Guest | file-table | Figma에만 {"x": 480, "y": 315, "w": 880, "h": 1262} |
| D21 | A-02_1920_Signed-in | file-table | Figma에만 {"x": 480, "y": 315, "w": 880, "h": 1262} |
| D21 | A-02_360_Guest | file-table | Figma에만 {"x": 16, "y": 1157, "w": 328, "h": 1219} |
| D21 | A-02_360_Signed-in | file-table | Figma에만 {"x": 16, "y": 1157, "w": 328, "h": 1219} |
| … | 나머지 12건 | | 화면별: A-02 10, A-04 10 |

## Figma에만 · readme (20건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | readme | Figma에만 {"x": 40, "y": 1593, "w": 624, "h": 6176} |
| D21 | A-02_1024_Signed-in | readme | Figma에만 {"x": 40, "y": 1593, "w": 624, "h": 6176} |
| D21 | A-02_1440_Guest | readme | Figma에만 {"x": 296, "y": 1593, "w": 768, "h": 5640} |
| D21 | A-02_1440_Signed-in | readme | Figma에만 {"x": 296, "y": 1593, "w": 768, "h": 5640} |
| D21 | A-02_1920_Guest | readme | Figma에만 {"x": 480, "y": 1593, "w": 880, "h": 5464} |
| D21 | A-02_1920_Signed-in | readme | Figma에만 {"x": 480, "y": 1593, "w": 880, "h": 5464} |
| D21 | A-02_360_Guest | readme | Figma에만 {"x": 16, "y": 2392, "w": 328, "h": 9104} |
| D21 | A-02_360_Signed-in | readme | Figma에만 {"x": 16, "y": 2392, "w": 328, "h": 9104} |
| … | 나머지 12건 | | 화면별: A-02 10, A-04 10 |

## Figma에만 · filter-search (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-01_1024_Guest | filter-search | Figma에만 {"x": 603, "y": 238, "w": 32, "h": 32} |
| D21 | G-01_1024_Signed-in | filter-search | Figma에만 {"x": 603, "y": 238, "w": 32, "h": 32} |
| D21 | G-01_1440_Guest | filter-search | Figma에만 {"x": 1003, "y": 238, "w": 32, "h": 32} |
| D21 | G-01_1440_Signed-in | filter-search | Figma에만 {"x": 1003, "y": 238, "w": 32, "h": 32} |
| D21 | G-01_1920_Guest | filter-search | Figma에만 {"x": 1299, "y": 238, "w": 32, "h": 32} |
| D21 | G-01_1920_Signed-in | filter-search | Figma에만 {"x": 1299, "y": 238, "w": 32, "h": 32} |
| D21 | G-01_360_Guest | filter-search | Figma에만 {"x": 295, "y": 269, "w": 32, "h": 32} |
| D21 | G-01_360_Signed-in | filter-search | Figma에만 {"x": 295, "y": 269, "w": 32, "h": 32} |
| … | 나머지 2건 | | 화면별: G-01 10 |

## 코드에만 · gl-tabs (20건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-01_1024_Guest | gl-tabs | 코드에만 있음 |
| D21 | G-01_1024_Signed-in | gl-tabs | 코드에만 있음 |
| D21 | G-01_1440_Guest | gl-tabs | 코드에만 있음 |
| D21 | G-01_1440_Signed-in | gl-tabs | 코드에만 있음 |
| D21 | G-01_1920_Guest | gl-tabs | 코드에만 있음 |
| D21 | G-01_1920_Signed-in | gl-tabs | 코드에만 있음 |
| D21 | G-01_360_Guest | gl-tabs | 코드에만 있음 |
| D21 | G-01_360_Signed-in | gl-tabs | 코드에만 있음 |
| … | 나머지 12건 | | 화면별: G-01 10, G-04 10 |

## 아이콘 · gl-filter (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-04_1024_Guest | gl-filter | 코드 ["arrow-down", "search", "sort-desc"] / Figma ["arrow-down", "search"]  |
| D21 | G-04_1024_Signed-in | gl-filter | 코드 ["arrow-down", "search", "sort-desc"] / Figma ["arrow-down", "search"]  |
| D21 | G-04_1440_Guest | gl-filter | 코드 ["arrow-down", "search", "sort-desc"] / Figma ["arrow-down", "search"]  |
| D21 | G-04_1440_Signed-in | gl-filter | 코드 ["arrow-down", "search", "sort-desc"] / Figma ["arrow-down", "search"]  |
| D21 | G-04_1920_Guest | gl-filter | 코드 ["arrow-down", "search", "sort-desc"] / Figma ["arrow-down", "search"]  |
| D21 | G-04_1920_Signed-in | gl-filter | 코드 ["arrow-down", "search", "sort-desc"] / Figma ["arrow-down", "search"]  |
| D21 | G-04_360_Guest | gl-filter | 코드 ["arrow-down", "search", "sort-desc"] / Figma ["arrow-down", "search"]  |
| D21 | G-04_360_Signed-in | gl-filter | 코드 ["arrow-down", "search", "sort-desc"] / Figma ["arrow-down", "search"]  |
| … | 나머지 2건 | | 화면별: G-04 10 |

## Figma에만 · tabbar (20건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-04_1024_Guest | tabbar | Figma에만 {"x": 40, "y": 203, "w": 26, "h": 2} |
| D21 | G-04_1024_Guest | tabbar#2 | Figma에만 {"x": 90, "y": 203, "w": 39, "h": 2} |
| D21 | G-04_1024_Signed-in | tabbar | Figma에만 {"x": 40, "y": 203, "w": 26, "h": 2} |
| D21 | G-04_1024_Signed-in | tabbar#2 | Figma에만 {"x": 90, "y": 203, "w": 39, "h": 2} |
| D21 | G-04_1440_Guest | tabbar | Figma에만 {"x": 296, "y": 203, "w": 26, "h": 2} |
| D21 | G-04_1440_Guest | tabbar#2 | Figma에만 {"x": 346, "y": 203, "w": 39, "h": 2} |
| D21 | G-04_1440_Signed-in | tabbar | Figma에만 {"x": 296, "y": 203, "w": 26, "h": 2} |
| D21 | G-04_1440_Signed-in | tabbar#2 | Figma에만 {"x": 346, "y": 203, "w": 39, "h": 2} |
| … | 나머지 12건 | | 화면별: G-04 20 |

## 위치/크기 · notice-block · x (20건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-08_360_Guest | notice-block | x: 코드 16 / Figma 36 |
| D21 | G-08_360_Signed-in | notice-block | x: 코드 16 / Figma 36 |
| D21 | G-08_768_Guest | notice-block | x: 코드 24 / Figma 240 |
| D21 | G-08_768_Signed-in | notice-block | x: 코드 24 / Figma 240 |
| D21 | G-08b_360_Guest | notice-block | x: 코드 16 / Figma 36 |
| D21 | G-08b_360_Signed-in | notice-block | x: 코드 16 / Figma 36 |
| D21 | G-08b_768_Guest | notice-block | x: 코드 24 / Figma 240 |
| D21 | G-08b_768_Signed-in | notice-block | x: 코드 24 / Figma 240 |
| … | 나머지 12건 | | 화면별: G-08 4, G-08b 4, G-08c 4, G-08d 4, G-08e 4 |

## 위치/크기 · notice-block · w (20건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-08_360_Guest | notice-block | w: 코드 328 / Figma 289 |
| D21 | G-08_360_Signed-in | notice-block | w: 코드 328 / Figma 289 |
| D21 | G-08_768_Guest | notice-block | w: 코드 720 / Figma 289 |
| D21 | G-08_768_Signed-in | notice-block | w: 코드 720 / Figma 289 |
| D21 | G-08b_360_Guest | notice-block | w: 코드 328 / Figma 289 |
| D21 | G-08b_360_Signed-in | notice-block | w: 코드 328 / Figma 289 |
| D21 | G-08b_768_Guest | notice-block | w: 코드 720 / Figma 289 |
| D21 | G-08b_768_Signed-in | notice-block | w: 코드 720 / Figma 289 |
| … | 나머지 12건 | | 화면별: G-08 4, G-08b 4, G-08c 4, G-08d 4, G-08e 4 |

## 코드에만 · profile-event (20건)
- 고칠 쪽: **Figma** / 확정도: 규칙 적용(실측 대조 안 함)
- 근거: G-12 360 변형만 profile-event가 없다(1440·768 Figma는 같은 요소 있음, 코드 1440·768 차이 0). 같은 Figma 안의 360 변형 누락
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-12_360_Guest | profile-event | 코드에만 있음 |
| D21 | G-12_360_Guest | profile-event#2 | 코드에만 있음 |
| D21 | G-12_360_Guest | profile-event#3 | 코드에만 있음 |
| D21 | G-12_360_Guest | profile-event#4 | 코드에만 있음 |
| D21 | G-12_360_Guest | profile-event#5 | 코드에만 있음 |
| D21 | G-12_360_Guest | profile-event#6 | 코드에만 있음 |
| D21 | G-12_360_Guest | profile-event#7 | 코드에만 있음 |
| D21 | G-12_360_Guest | profile-event#8 | 코드에만 있음 |
| … | 나머지 12건 | | 화면별: G-12 20 |

## 아이콘 · commit-bar (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | commit-bar | 코드 ["copy"] / Figma ["copy", "ellipsis-horizontal"]  |
| D21 | R-01_1024_Signed-in | commit-bar | 코드 ["copy"] / Figma ["copy", "ellipsis-horizontal"]  |
| D21 | R-01_1440_Guest | commit-bar | 코드 ["copy"] / Figma ["copy", "ellipsis-horizontal"]  |
| D21 | R-01_1440_Signed-in | commit-bar | 코드 ["copy"] / Figma ["copy", "ellipsis-horizontal"]  |
| D21 | R-01_1920_Guest | commit-bar | 코드 ["copy"] / Figma ["copy", "ellipsis-horizontal"]  |
| D21 | R-01_1920_Signed-in | commit-bar | 코드 ["copy"] / Figma ["copy", "ellipsis-horizontal"]  |
| D21 | R-01_360_Guest | commit-bar | 코드 ["copy"] / Figma ["copy", "ellipsis-horizontal"]  |
| D21 | R-01_360_Signed-in | commit-bar | 코드 ["copy"] / Figma ["copy", "ellipsis-horizontal"]  |
| … | 나머지 2건 | | 화면별: R-01 10 |

## 위치/크기 · file-table · h (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | file-table | h: 코드 1441 / Figma 1262 |
| D21 | R-01_1024_Signed-in | file-table | h: 코드 1441 / Figma 1262 |
| D21 | R-01_1440_Guest | file-table | h: 코드 1441 / Figma 1262 |
| D21 | R-01_1440_Signed-in | file-table | h: 코드 1441 / Figma 1262 |
| D21 | R-01_1920_Guest | file-table | h: 코드 1441 / Figma 1262 |
| D21 | R-01_1920_Signed-in | file-table | h: 코드 1441 / Figma 1262 |
| D21 | R-01_360_Guest | file-table | h: 코드 1400 / Figma 1219 |
| D21 | R-01_360_Signed-in | file-table | h: 코드 1400 / Figma 1219 |
| … | 나머지 2건 | | 화면별: R-01 10 |

## 위치/크기 · login-divider · h (18건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-08c_1024_Guest | login-divider | h: 코드 338 / Figma 366 |
| D21 | G-08c_1024_Signed-in | login-divider | h: 코드 338 / Figma 366 |
| D21 | G-08c_1440_Guest | login-divider | h: 코드 338 / Figma 366 |
| D21 | G-08c_1440_Signed-in | login-divider | h: 코드 338 / Figma 366 |
| D21 | G-08c_1920_Guest | login-divider | h: 코드 338 / Figma 406 |
| D21 | G-08c_1920_Signed-in | login-divider | h: 코드 338 / Figma 366 |
| D21 | G-08d_1024_Guest | login-divider | h: 코드 526 / Figma 602 |
| D21 | G-08d_1024_Signed-in | login-divider | h: 코드 526 / Figma 602 |
| … | 나머지 10건 | | 화면별: G-08c 6, G-08d 6, G-08e 6 |

## 위치/크기 · commit-bar · y (6건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | commit-bar | y: 코드 241 / Figma 233 |
| D21 | R-01_1024_Signed-in | commit-bar | y: 코드 241 / Figma 233 |
| D21 | R-01_1440_Guest | commit-bar | y: 코드 241 / Figma 233 |
| D21 | R-01_1440_Signed-in | commit-bar | y: 코드 241 / Figma 233 |
| D21 | R-01_1920_Guest | commit-bar | y: 코드 241 / Figma 233 |
| D21 | R-01_1920_Signed-in | commit-bar | y: 코드 241 / Figma 233 |

## 위치/크기 · gl-filter · h (12건)
- 고칠 쪽: **Figma** / 확정도: 기록 인용(문서·커밋 문구, 직접 재확인 안 함)
- 근거: UX/audit_v3/M7_to_figma.md·M7_C_resolution.md: D-21 조작 32, PC 65, 모바일 105 확정. Figma 모바일 2건 전달
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-01_360_Guest | gl-filter | h: 코드 145 / Figma 159 |
| D21 | G-01_360_Signed-in | gl-filter | h: 코드 145 / Figma 159 |
| D21 | G-04_1024_Guest | gl-filter | h: 코드 65 / Figma 73 |
| D21 | G-04_1024_Signed-in | gl-filter | h: 코드 65 / Figma 73 |
| D21 | G-04_1440_Guest | gl-filter | h: 코드 65 / Figma 73 |
| D21 | G-04_1440_Signed-in | gl-filter | h: 코드 65 / Figma 73 |
| D21 | G-04_1920_Guest | gl-filter | h: 코드 65 / Figma 73 |
| D21 | G-04_1920_Signed-in | gl-filter | h: 코드 65 / Figma 73 |
| … | 나머지 4건 | | 화면별: G-04 10, G-01 2 |

## 위치/크기 · page-head · w (16건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-05_1024_Guest | page-head | w: 코드 640 / Figma 944 |
| D21 | G-05_1024_Signed-in | page-head | w: 코드 640 / Figma 944 |
| D21 | G-05_1440_Guest | page-head | w: 코드 640 / Figma 1088 |
| D21 | G-05_1440_Signed-in | page-head | w: 코드 640 / Figma 1088 |
| D21 | G-05_1920_Guest | page-head | w: 코드 640 / Figma 1200 |
| D21 | G-05_1920_Signed-in | page-head | w: 코드 640 / Figma 1200 |
| D21 | G-05_768_Guest | page-head | w: 코드 640 / Figma 704 |
| D21 | G-05_768_Signed-in | page-head | w: 코드 640 / Figma 704 |
| … | 나머지 8건 | | 화면별: G-05 8, G-09 8 |

## 위치/크기 · file-table · y (6건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | file-table | y: 코드 307 / Figma 315 |
| D21 | R-01_1024_Signed-in | file-table | y: 코드 307 / Figma 315 |
| D21 | R-01_1440_Guest | file-table | y: 코드 307 / Figma 315 |
| D21 | R-01_1440_Signed-in | file-table | y: 코드 307 / Figma 315 |
| D21 | R-01_1920_Guest | file-table | y: 코드 307 / Figma 315 |
| D21 | R-01_1920_Signed-in | file-table | y: 코드 307 / Figma 315 |

## 위치/크기 · tabs · y (2건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-05_360_Guest | tabs | y: 코드 187 / Figma 191 |
| D21 | A-05_360_Signed-in | tabs | y: 코드 187 / Figma 191 |

## 위치/크기 · section-title · x (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-06_1024_Guest | section-title | x: 코드 64 / Figma 40 |
| D21 | G-06_1024_Signed-in | section-title | x: 코드 64 / Figma 40 |
| D21 | G-06_1440_Guest | section-title | x: 코드 320 / Figma 296 |
| D21 | G-06_1440_Signed-in | section-title | x: 코드 320 / Figma 296 |
| D21 | G-06_1920_Guest | section-title | x: 코드 504 / Figma 480 |
| D21 | G-06_1920_Signed-in | section-title | x: 코드 504 / Figma 480 |
| D21 | G-06_360_Guest | section-title | x: 코드 40 / Figma 16 |
| D21 | G-06_360_Signed-in | section-title | x: 코드 40 / Figma 16 |
| … | 나머지 2건 | | 화면별: G-06 10 |

## 순서 · (화면) (13건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-08c_1024_Guest | (화면) | 코드 "system-band > body > login-notice > login-logo > login-divi / Figma "system-band > body > login-divider > login-card > login-not  |
| D21 | G-08c_1024_Signed-in | (화면) | 코드 "system-band > body > login-notice > login-logo > login-divi / Figma "system-band > body > login-divider > login-card > login-not  |
| D21 | G-08c_1440_Guest | (화면) | 코드 "system-band > body > login-notice > login-logo > login-divi / Figma "system-band > body > login-divider > login-card > login-not  |
| D21 | G-08c_1440_Signed-in | (화면) | 코드 "system-band > body > login-notice > login-logo > login-divi / Figma "system-band > body > login-divider > login-card > login-not  |
| D21 | G-08c_1920_Guest | (화면) | 코드 "system-band > body > login-notice > login-logo > login-divi / Figma "system-band > body > login-divider > login-card > login-not  |
| D21 | G-08c_1920_Signed-in | (화면) | 코드 "system-band > body > login-notice > login-logo > login-divi / Figma "system-band > body > login-divider > login-card > login-not  |
| D21 | G-12_1440_Guest | (화면) | 코드 "system-band > topbar > global-search > body > gitlab-sideba / Figma "system-band > topbar > global-search > body > gitlab-sideba  |
| D21 | R-01_1024_Guest | (화면) | 코드 "system-band > topbar > global-search > body > content-panel / Figma "system-band > topbar > global-search > body > content-panel  |
| … | 나머지 5건 | | 화면별: G-08c 6, R-01 6, G-12 1 |

## Figma에만 · filters (12건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-01_1024_Guest | filters | Figma에만 {"x": 40, "y": 177, "w": 264, "h": 358} |
| D21 | A-01_1024_Signed-in | filters | Figma에만 {"x": 40, "y": 177, "w": 264, "h": 358} |
| D21 | A-01_1440_Guest | filters | Figma에만 {"x": 120, "y": 177, "w": 264, "h": 358} |
| D21 | A-01_1440_Signed-in | filters | Figma에만 {"x": 120, "y": 177, "w": 264, "h": 358} |
| D21 | A-01_1920_Guest | filters | Figma에만 {"x": 360, "y": 177, "w": 264, "h": 358} |
| D21 | A-01_1920_Signed-in | filters | Figma에만 {"x": 360, "y": 177, "w": 264, "h": 358} |
| D21 | G-02_1024_Guest | filters | Figma에만 {"x": 40, "y": 177, "w": 264, "h": 358} |
| D21 | G-02_1024_Signed-in | filters | Figma에만 {"x": 40, "y": 177, "w": 264, "h": 358} |
| … | 나머지 4건 | | 화면별: A-01 6, G-02 6 |

## 위치/크기 · footer · x (2건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-03_1440_Guest | footer | x: 코드 296 / Figma 272 |
| D21 | G-03_1440_Signed-in | footer | x: 코드 296 / Figma 272 |

## 위치/크기 · footer · w (2건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-03_1440_Guest | footer | w: 코드 1088 / Figma 1136 |
| D21 | G-03_1440_Signed-in | footer | w: 코드 1088 / Figma 1136 |

## 위치/크기 · login-notice · y (12건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-08c_1024_Guest | login-notice | y: 코드 48 / Figma 61 |
| D21 | G-08c_1024_Signed-in | login-notice | y: 코드 48 / Figma 61 |
| D21 | G-08c_1440_Guest | login-notice | y: 코드 48 / Figma 61 |
| D21 | G-08c_1440_Signed-in | login-notice | y: 코드 48 / Figma 61 |
| D21 | G-08c_1920_Guest | login-notice | y: 코드 48 / Figma 81 |
| D21 | G-08c_1920_Signed-in | login-notice | y: 코드 48 / Figma 61 |
| D21 | G-08d_1024_Guest | login-notice | y: 코드 142 / Figma 179 |
| D21 | G-08d_1024_Signed-in | login-notice | y: 코드 142 / Figma 179 |
| … | 나머지 4건 | | 화면별: G-08c 6, G-08d 6 |

## 위치/크기 · login-logo · y (12건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-08c_1024_Guest | login-logo | y: 코드 48 / Figma 61 |
| D21 | G-08c_1024_Signed-in | login-logo | y: 코드 48 / Figma 61 |
| D21 | G-08c_1440_Guest | login-logo | y: 코드 48 / Figma 61 |
| D21 | G-08c_1440_Signed-in | login-logo | y: 코드 48 / Figma 61 |
| D21 | G-08c_1920_Guest | login-logo | y: 코드 48 / Figma 81 |
| D21 | G-08c_1920_Signed-in | login-logo | y: 코드 48 / Figma 61 |
| D21 | G-08d_1024_Guest | login-logo | y: 코드 142 / Figma 179 |
| D21 | G-08d_1024_Signed-in | login-logo | y: 코드 142 / Figma 179 |
| … | 나머지 4건 | | 화면별: G-08c 6, G-08d 6 |

## 위치/크기 · notice-block · y (12건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-08c_1024_Guest | notice-block | y: 코드 256 / Figma 269 |
| D21 | G-08c_1024_Signed-in | notice-block | y: 코드 256 / Figma 269 |
| D21 | G-08c_1440_Guest | notice-block | y: 코드 256 / Figma 269 |
| D21 | G-08c_1440_Signed-in | notice-block | y: 코드 256 / Figma 269 |
| D21 | G-08c_1920_Guest | notice-block | y: 코드 256 / Figma 289 |
| D21 | G-08c_1920_Signed-in | notice-block | y: 코드 256 / Figma 269 |
| D21 | G-08d_1024_Guest | notice-block | y: 코드 350 / Figma 387 |
| D21 | G-08d_1024_Signed-in | notice-block | y: 코드 350 / Figma 387 |
| … | 나머지 4건 | | 화면별: G-08c 6, G-08d 6 |

## 위치/크기 · task-search · h (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-01_1024_Guest | task-search | h: 코드 256 / Figma 248 |
| D21 | A-01_1024_Signed-in | task-search | h: 코드 256 / Figma 248 |
| D21 | A-01_1440_Guest | task-search | h: 코드 256 / Figma 248 |
| D21 | A-01_1440_Signed-in | task-search | h: 코드 256 / Figma 248 |
| D21 | A-01_1920_Guest | task-search | h: 코드 256 / Figma 248 |
| D21 | A-01_1920_Signed-in | task-search | h: 코드 256 / Figma 248 |
| D21 | A-01_360_Guest | task-search | h: 코드 292 / Figma 284 |
| D21 | A-01_360_Signed-in | task-search | h: 코드 292 / Figma 284 |
| … | 나머지 2건 | | 화면별: A-01 10 |

## 문구 · task-search (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-01_1024_Guest | task-search | 코드 "업무로 찾기 한 한글 AI 도우미 ： 로컬LLM + 웹한글 기반의 보고서 도우미 7 0 - - 온AI Wo / Figma ["AI 정리"]  |
| D21 | A-01_1024_Signed-in | task-search | 코드 "업무로 찾기 한 한글 AI 도우미 ： 로컬LLM + 웹한글 기반의 보고서 도우미 7 0 - - 온AI Wo / Figma ["AI 정리"]  |
| D21 | A-01_1440_Guest | task-search | 코드 "업무로 찾기 한 한글 AI 도우미 ： 로컬LLM + 웹한글 기반의 보고서 도우미 7 0 - - 온AI Wo / Figma ["AI 정리"]  |
| D21 | A-01_1440_Signed-in | task-search | 코드 "업무로 찾기 한 한글 AI 도우미 ： 로컬LLM + 웹한글 기반의 보고서 도우미 7 0 - - 온AI Wo / Figma ["AI 정리"]  |
| D21 | A-01_1920_Guest | task-search | 코드 "업무로 찾기 한 한글 AI 도우미 ： 로컬LLM + 웹한글 기반의 보고서 도우미 7 0 - - 온AI Wo / Figma ["AI 정리"]  |
| D21 | A-01_1920_Signed-in | task-search | 코드 "업무로 찾기 한 한글 AI 도우미 ： 로컬LLM + 웹한글 기반의 보고서 도우미 7 0 - - 온AI Wo / Figma ["AI 정리"]  |
| D21 | A-01_360_Guest | task-search | 코드 "업무로 찾기 한 한글 AI 도우미 ： 로컬LLM + 웹한글 기반의 보고서 도우미 7 0 - - 온AI Wo / Figma ["AI 정리"]  |
| D21 | A-01_360_Signed-in | task-search | 코드 "업무로 찾기 한 한글 AI 도우미 ： 로컬LLM + 웹한글 기반의 보고서 도우미 7 0 - - 온AI Wo / Figma ["AI 정리"]  |
| … | 나머지 2건 | | 화면별: A-01 10 |

## 모서리·안쪽·간격 · task-search (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-01_1024_Guest | task-search | 코드 null / Figma null 안쪽 0 0 0 0→0 0 8 0 |
| D21 | A-01_1024_Signed-in | task-search | 코드 null / Figma null 안쪽 0 0 0 0→0 0 8 0 |
| D21 | A-01_1440_Guest | task-search | 코드 null / Figma null 안쪽 0 0 0 0→0 0 8 0 |
| D21 | A-01_1440_Signed-in | task-search | 코드 null / Figma null 안쪽 0 0 0 0→0 0 8 0 |
| D21 | A-01_1920_Guest | task-search | 코드 null / Figma null 안쪽 0 0 0 0→0 0 8 0 |
| D21 | A-01_1920_Signed-in | task-search | 코드 null / Figma null 안쪽 0 0 0 0→0 0 8 0 |
| D21 | A-01_360_Guest | task-search | 코드 null / Figma null 안쪽 0 0 0 0→0 0 8 0 |
| D21 | A-01_360_Signed-in | task-search | 코드 null / Figma null 안쪽 0 0 0 0→0 0 8 0 |
| … | 나머지 2건 | | 화면별: A-01 10 |

## Figma에만 · breadcrumb (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | breadcrumb | Figma에만 {"x": 40, "y": 81, "w": 944, "h": 20} |
| D21 | A-02_1024_Signed-in | breadcrumb | Figma에만 {"x": 40, "y": 81, "w": 944, "h": 20} |
| D21 | A-02_1440_Guest | breadcrumb | Figma에만 {"x": 296, "y": 81, "w": 1088, "h": 20} |
| D21 | A-02_1440_Signed-in | breadcrumb | Figma에만 {"x": 296, "y": 81, "w": 1088, "h": 20} |
| D21 | A-02_1920_Guest | breadcrumb | Figma에만 {"x": 480, "y": 81, "w": 1200, "h": 20} |
| D21 | A-02_1920_Signed-in | breadcrumb | Figma에만 {"x": 480, "y": 81, "w": 1200, "h": 20} |
| D21 | A-02_360_Guest | breadcrumb | Figma에만 {"x": 16, "y": 81, "w": 328, "h": 20} |
| D21 | A-02_360_Signed-in | breadcrumb | Figma에만 {"x": 16, "y": 81, "w": 328, "h": 20} |
| … | 나머지 2건 | | 화면별: A-02 10 |

## Figma에만 · intro-card (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | intro-card | Figma에만 {"x": 688, "y": 741, "w": 296, "h": 172} |
| D21 | A-02_1024_Signed-in | intro-card | Figma에만 {"x": 688, "y": 741, "w": 296, "h": 172} |
| D21 | A-02_1440_Guest | intro-card | Figma에만 {"x": 1088, "y": 741, "w": 296, "h": 172} |
| D21 | A-02_1440_Signed-in | intro-card | Figma에만 {"x": 1088, "y": 741, "w": 296, "h": 172} |
| D21 | A-02_1920_Guest | intro-card | Figma에만 {"x": 1384, "y": 741, "w": 296, "h": 172} |
| D21 | A-02_1920_Signed-in | intro-card | Figma에만 {"x": 1384, "y": 741, "w": 296, "h": 172} |
| D21 | A-02_360_Guest | intro-card | Figma에만 {"x": 16, "y": 799, "w": 328, "h": 172} |
| D21 | A-02_360_Signed-in | intro-card | Figma에만 {"x": 16, "y": 799, "w": 328, "h": 172} |
| … | 나머지 2건 | | 화면별: A-02 10 |

## 문구 · gl-filter (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-01_1024_Guest | gl-filter | 코드 "전체 분야 업데이트 날짜 필터링 또는 검색 (최소 3자)" / Figma ["업무 분야: 전체"]  |
| D21 | G-01_1024_Signed-in | gl-filter | 코드 "전체 분야 업데이트 날짜 필터링 또는 검색 (최소 3자)" / Figma ["업무 분야: 전체"]  |
| D21 | G-01_1440_Guest | gl-filter | 코드 "전체 분야 업데이트 날짜 필터링 또는 검색 (최소 3자)" / Figma ["업무 분야: 전체"]  |
| D21 | G-01_1440_Signed-in | gl-filter | 코드 "전체 분야 업데이트 날짜 필터링 또는 검색 (최소 3자)" / Figma ["업무 분야: 전체"]  |
| D21 | G-01_1920_Guest | gl-filter | 코드 "전체 분야 업데이트 날짜 필터링 또는 검색 (최소 3자)" / Figma ["업무 분야: 전체"]  |
| D21 | G-01_1920_Signed-in | gl-filter | 코드 "전체 분야 업데이트 날짜 필터링 또는 검색 (최소 3자)" / Figma ["업무 분야: 전체"]  |
| D21 | G-01_360_Guest | gl-filter | 코드 "전체 분야 업데이트 날짜 필터링 또는 검색 (최소 3자)" / Figma ["업무 분야: 전체"]  |
| D21 | G-01_360_Signed-in | gl-filter | 코드 "전체 분야 업데이트 날짜 필터링 또는 검색 (최소 3자)" / Figma ["업무 분야: 전체"]  |
| … | 나머지 2건 | | 화면별: G-01 10 |

## 코드에만 · extra-field-filter (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-01_1024_Guest | extra-field-filter | 코드에만 있음 |
| D21 | G-01_1024_Signed-in | extra-field-filter | 코드에만 있음 |
| D21 | G-01_1440_Guest | extra-field-filter | 코드에만 있음 |
| D21 | G-01_1440_Signed-in | extra-field-filter | 코드에만 있음 |
| D21 | G-01_1920_Guest | extra-field-filter | 코드에만 있음 |
| D21 | G-01_1920_Signed-in | extra-field-filter | 코드에만 있음 |
| D21 | G-01_360_Guest | extra-field-filter | 코드에만 있음 |
| D21 | G-01_360_Signed-in | extra-field-filter | 코드에만 있음 |
| … | 나머지 2건 | | 화면별: G-01 10 |

## Figma에만 · search (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-04_1024_Guest | search | Figma에만 {"x": 56, "y": 223, "w": 799, "h": 40} |
| D21 | G-04_1024_Signed-in | search | Figma에만 {"x": 56, "y": 223, "w": 799, "h": 40} |
| D21 | G-04_1440_Guest | search | Figma에만 {"x": 312, "y": 223, "w": 943, "h": 40} |
| D21 | G-04_1440_Signed-in | search | Figma에만 {"x": 312, "y": 223, "w": 943, "h": 40} |
| D21 | G-04_1920_Guest | search | Figma에만 {"x": 496, "y": 223, "w": 1055, "h": 40} |
| D21 | G-04_1920_Signed-in | search | Figma에만 {"x": 496, "y": 223, "w": 1055, "h": 40} |
| D21 | G-04_360_Guest | search | Figma에만 {"x": 32, "y": 215, "w": 183, "h": 40} |
| D21 | G-04_360_Signed-in | search | Figma에만 {"x": 32, "y": 215, "w": 183, "h": 40} |
| … | 나머지 2건 | | 화면별: G-04 10 |

## 문구 · login-field (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-08c_1024_Guest | login-field | 코드 "인증 번호 (필수) 3분 안에 입력 000000" / Figma ["3분 안에 입력해 주세요"]  |
| D21 | G-08c_1024_Signed-in | login-field | 코드 "인증 번호 (필수) 3분 안에 입력 000000" / Figma ["3분 안에 입력해 주세요"]  |
| D21 | G-08c_1440_Guest | login-field | 코드 "인증 번호 (필수) 3분 안에 입력 000000" / Figma ["3분 안에 입력해 주세요"]  |
| D21 | G-08c_1440_Signed-in | login-field | 코드 "인증 번호 (필수) 3분 안에 입력 000000" / Figma ["3분 안에 입력해 주세요"]  |
| D21 | G-08c_1920_Guest | login-field | 코드 "인증 번호 (필수) 3분 안에 입력 000000" / Figma ["3분 안에 입력해 주세요"]  |
| D21 | G-08c_1920_Signed-in | login-field | 코드 "인증 번호 (필수) 3분 안에 입력 000000" / Figma ["3분 안에 입력해 주세요"]  |
| D21 | G-08c_360_Guest | login-field | 코드 "인증 번호 (필수) 3분 안에 입력 000000" / Figma ["3분 안에 입력해 주세요"]  |
| D21 | G-08c_360_Signed-in | login-field | 코드 "인증 번호 (필수) 3분 안에 입력 000000" / Figma ["3분 안에 입력해 주세요"]  |
| … | 나머지 2건 | | 화면별: G-08c 10 |

## 코드에만 · login-field (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-08d_1024_Guest | login-field#4 | 코드에만 있음 |
| D21 | G-08d_1024_Signed-in | login-field#4 | 코드에만 있음 |
| D21 | G-08d_1440_Guest | login-field#4 | 코드에만 있음 |
| D21 | G-08d_1440_Signed-in | login-field#4 | 코드에만 있음 |
| D21 | G-08d_1920_Guest | login-field#4 | 코드에만 있음 |
| D21 | G-08d_1920_Signed-in | login-field#4 | 코드에만 있음 |
| D21 | G-08d_360_Guest | login-field#4 | 코드에만 있음 |
| D21 | G-08d_360_Signed-in | login-field#4 | 코드에만 있음 |
| … | 나머지 2건 | | 화면별: G-08d 10 |

## 위치/크기 · project-info · y (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | project-info | y: 코드 193 / Figma 121 |
| D21 | R-01_1024_Signed-in | project-info | y: 코드 193 / Figma 121 |
| D21 | R-01_1440_Guest | project-info | y: 코드 193 / Figma 121 |
| D21 | R-01_1440_Signed-in | project-info | y: 코드 193 / Figma 121 |
| D21 | R-01_1920_Guest | project-info | y: 코드 193 / Figma 121 |
| D21 | R-01_1920_Signed-in | project-info | y: 코드 193 / Figma 121 |
| D21 | R-01_360_Guest | project-info | y: 코드 245 / Figma 225 |
| D21 | R-01_360_Signed-in | project-info | y: 코드 245 / Figma 225 |
| … | 나머지 2건 | | 화면별: R-01 10 |

## 위치/크기 · project-info · h (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | project-info | h: 코드 910 / Figma 792 |
| D21 | R-01_1024_Signed-in | project-info | h: 코드 910 / Figma 792 |
| D21 | R-01_1440_Guest | project-info | h: 코드 910 / Figma 792 |
| D21 | R-01_1440_Signed-in | project-info | h: 코드 910 / Figma 792 |
| D21 | R-01_1920_Guest | project-info | h: 코드 910 / Figma 792 |
| D21 | R-01_1920_Signed-in | project-info | h: 코드 910 / Figma 792 |
| D21 | R-01_360_Guest | project-info | h: 코드 774 / Figma 746 |
| D21 | R-01_360_Signed-in | project-info | h: 코드 774 / Figma 746 |
| … | 나머지 2건 | | 화면별: R-01 10 |

## 문구 · toolbar (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | toolbar | 코드 "main kordoc 파일 찾기" / Figma ["코드"]  |
| D21 | R-01_1024_Signed-in | toolbar | 코드 "main kordoc 파일 찾기" / Figma ["코드"]  |
| D21 | R-01_1440_Guest | toolbar | 코드 "main kordoc 파일 찾기" / Figma ["코드"]  |
| D21 | R-01_1440_Signed-in | toolbar | 코드 "main kordoc 파일 찾기" / Figma ["코드"]  |
| D21 | R-01_1920_Guest | toolbar | 코드 "main kordoc 파일 찾기" / Figma ["코드"]  |
| D21 | R-01_1920_Signed-in | toolbar | 코드 "main kordoc 파일 찾기" / Figma ["코드"]  |
| D21 | R-01_360_Guest | toolbar | 코드 "main kordoc 파일 찾기" / Figma ["코드"]  |
| D21 | R-01_360_Signed-in | toolbar | 코드 "main kordoc 파일 찾기" / Figma ["코드"]  |
| … | 나머지 2건 | | 화면별: R-01 10 |

## 아이콘 · toolbar (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | toolbar | 코드 ["arrow-down", "branch"] / Figma ["arrow-down", "branch", "ellipsis-vertical"]  |
| D21 | R-01_1024_Signed-in | toolbar | 코드 ["arrow-down", "branch"] / Figma ["arrow-down", "branch", "ellipsis-vertical"]  |
| D21 | R-01_1440_Guest | toolbar | 코드 ["arrow-down", "branch"] / Figma ["arrow-down", "branch", "ellipsis-vertical"]  |
| D21 | R-01_1440_Signed-in | toolbar | 코드 ["arrow-down", "branch"] / Figma ["arrow-down", "branch", "ellipsis-vertical"]  |
| D21 | R-01_1920_Guest | toolbar | 코드 ["arrow-down", "branch"] / Figma ["arrow-down", "branch", "ellipsis-vertical"]  |
| D21 | R-01_1920_Signed-in | toolbar | 코드 ["arrow-down", "branch"] / Figma ["arrow-down", "branch", "ellipsis-vertical"]  |
| D21 | R-01_360_Guest | toolbar | 코드 ["arrow-down", "branch", "download"] / Figma ["arrow-down", "branch", "ellipsis-vertical"]  |
| D21 | R-01_360_Signed-in | toolbar | 코드 ["arrow-down", "branch", "download"] / Figma ["arrow-down", "branch", "ellipsis-vertical"]  |
| … | 나머지 2건 | | 화면별: R-01 10 |

## 아이콘 · file-table (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | file-table | 코드 ["file:git", "file:markdown", "folder"] / Figma ["folder", "icon-file/git", "icon-file/markdown"]  |
| D21 | R-01_1024_Signed-in | file-table | 코드 ["file:git", "file:markdown", "folder"] / Figma ["folder", "icon-file/git", "icon-file/markdown"]  |
| D21 | R-01_1440_Guest | file-table | 코드 ["file:git", "file:markdown", "folder"] / Figma ["folder", "icon-file/git", "icon-file/markdown"]  |
| D21 | R-01_1440_Signed-in | file-table | 코드 ["file:git", "file:markdown", "folder"] / Figma ["folder", "icon-file/git", "icon-file/markdown"]  |
| D21 | R-01_1920_Guest | file-table | 코드 ["file:git", "file:markdown", "folder"] / Figma ["folder", "icon-file/git", "icon-file/markdown"]  |
| D21 | R-01_1920_Signed-in | file-table | 코드 ["file:git", "file:markdown", "folder"] / Figma ["folder", "icon-file/git", "icon-file/markdown"]  |
| D21 | R-01_360_Guest | file-table | 코드 ["file:git", "file:markdown", "folder"] / Figma ["folder", "icon-file/git", "icon-file/markdown"]  |
| D21 | R-01_360_Signed-in | file-table | 코드 ["file:git", "file:markdown", "folder"] / Figma ["folder", "icon-file/git", "icon-file/markdown"]  |
| … | 나머지 2건 | | 화면별: R-01 10 |

## 위치/크기 · readme · h (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | readme | h: 코드 5919 / Figma 6176 |
| D21 | R-01_1024_Signed-in | readme | h: 코드 5919 / Figma 6176 |
| D21 | R-01_1440_Guest | readme | h: 코드 5495 / Figma 5640 |
| D21 | R-01_1440_Signed-in | readme | h: 코드 5495 / Figma 5640 |
| D21 | R-01_1920_Guest | readme | h: 코드 5270 / Figma 5464 |
| D21 | R-01_1920_Signed-in | readme | h: 코드 5270 / Figma 5464 |
| D21 | R-01_360_Guest | readme | h: 코드 6234 / Figma 9104 |
| D21 | R-01_360_Signed-in | readme | h: 코드 6234 / Figma 9104 |
| … | 나머지 2건 | | 화면별: R-01 10 |

## 아이콘 · readme (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | readme | 코드 ["file:markdown"] / Figma ["bell", "copy"]  |
| D21 | R-01_1024_Signed-in | readme | 코드 ["file:markdown"] / Figma ["bell", "copy"]  |
| D21 | R-01_1440_Guest | readme | 코드 ["file:markdown"] / Figma ["bell", "copy"]  |
| D21 | R-01_1440_Signed-in | readme | 코드 ["file:markdown"] / Figma ["bell", "copy"]  |
| D21 | R-01_1920_Guest | readme | 코드 ["file:markdown"] / Figma ["bell", "copy"]  |
| D21 | R-01_1920_Signed-in | readme | 코드 ["file:markdown"] / Figma ["bell", "copy"]  |
| D21 | R-01_360_Guest | readme | 코드 ["file:markdown"] / Figma ["bell", "copy"]  |
| D21 | R-01_360_Signed-in | readme | 코드 ["file:markdown"] / Figma ["bell", "copy"]  |
| … | 나머지 2건 | | 화면별: R-01 10 |

## 위치/크기 · intro-card · h (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | intro-card | h: 코드 331 / Figma 172 |
| D21 | R-01_1024_Signed-in | intro-card | h: 코드 331 / Figma 172 |
| D21 | R-01_1440_Guest | intro-card | h: 코드 331 / Figma 172 |
| D21 | R-01_1440_Signed-in | intro-card | h: 코드 331 / Figma 172 |
| D21 | R-01_1920_Guest | intro-card | h: 코드 331 / Figma 172 |
| D21 | R-01_1920_Signed-in | intro-card | h: 코드 331 / Figma 172 |
| D21 | R-01_360_Guest | intro-card | h: 코드 331 / Figma 172 |
| D21 | R-01_360_Signed-in | intro-card | h: 코드 331 / Figma 172 |
| … | 나머지 2건 | | 화면별: R-01 10 |

## 문구 · intro-card (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | intro-card | 코드 "소개 카드 하는 일AI 정리 한글·PDF·엑셀·워드 문서를 표 구조까지 살려 마크다운으로 바꿔 주는 도구  / Figma ["HWP·PDF 문서를 Markdown으로 바꾼다", "설치 필요(Node.js, CLI)", "코드 MI  |
| D21 | R-01_1024_Signed-in | intro-card | 코드 "소개 카드 하는 일AI 정리 한글·PDF·엑셀·워드 문서를 표 구조까지 살려 마크다운으로 바꿔 주는 도구  / Figma ["HWP·PDF 문서를 Markdown으로 바꾼다", "설치 필요(Node.js, CLI)", "코드 MI  |
| D21 | R-01_1440_Guest | intro-card | 코드 "소개 카드 하는 일AI 정리 한글·PDF·엑셀·워드 문서를 표 구조까지 살려 마크다운으로 바꿔 주는 도구  / Figma ["HWP·PDF 문서를 Markdown으로 바꾼다", "설치 필요(Node.js, CLI)", "코드 MI  |
| D21 | R-01_1440_Signed-in | intro-card | 코드 "소개 카드 하는 일AI 정리 한글·PDF·엑셀·워드 문서를 표 구조까지 살려 마크다운으로 바꿔 주는 도구  / Figma ["HWP·PDF 문서를 Markdown으로 바꾼다", "설치 필요(Node.js, CLI)", "코드 MI  |
| D21 | R-01_1920_Guest | intro-card | 코드 "소개 카드 하는 일AI 정리 한글·PDF·엑셀·워드 문서를 표 구조까지 살려 마크다운으로 바꿔 주는 도구  / Figma ["HWP·PDF 문서를 Markdown으로 바꾼다", "설치 필요(Node.js, CLI)", "코드 MI  |
| D21 | R-01_1920_Signed-in | intro-card | 코드 "소개 카드 하는 일AI 정리 한글·PDF·엑셀·워드 문서를 표 구조까지 살려 마크다운으로 바꿔 주는 도구  / Figma ["HWP·PDF 문서를 Markdown으로 바꾼다", "설치 필요(Node.js, CLI)", "코드 MI  |
| D21 | R-01_360_Guest | intro-card | 코드 "소개 카드 하는 일AI 정리 한글·PDF·엑셀·워드 문서를 표 구조까지 살려 마크다운으로 바꿔 주는 도구  / Figma ["HWP·PDF 문서를 Markdown으로 바꾼다", "설치 필요(Node.js, CLI)", "코드 MI  |
| D21 | R-01_360_Signed-in | intro-card | 코드 "소개 카드 하는 일AI 정리 한글·PDF·엑셀·워드 문서를 표 구조까지 살려 마크다운으로 바꿔 주는 도구  / Figma ["HWP·PDF 문서를 Markdown으로 바꾼다", "설치 필요(Node.js, CLI)", "코드 MI  |
| … | 나머지 2건 | | 화면별: R-01 10 |

## 모서리·안쪽·간격 · intro-card (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | intro-card | 코드 null / Figma null 안쪽 0 0 0 0→12 0 0 0 |
| D21 | R-01_1024_Signed-in | intro-card | 코드 null / Figma null 안쪽 0 0 0 0→12 0 0 0 |
| D21 | R-01_1440_Guest | intro-card | 코드 null / Figma null 안쪽 0 0 0 0→12 0 0 0 |
| D21 | R-01_1440_Signed-in | intro-card | 코드 null / Figma null 안쪽 0 0 0 0→12 0 0 0 |
| D21 | R-01_1920_Guest | intro-card | 코드 null / Figma null 안쪽 0 0 0 0→12 0 0 0 |
| D21 | R-01_1920_Signed-in | intro-card | 코드 null / Figma null 안쪽 0 0 0 0→12 0 0 0 |
| D21 | R-01_360_Guest | intro-card | 코드 null / Figma null 안쪽 0 0 0 0→12 0 0 0 |
| D21 | R-01_360_Signed-in | intro-card | 코드 null / Figma null 안쪽 0 0 0 0→12 0 0 0 |
| … | 나머지 2건 | | 화면별: R-01 10 |

## 코드에만 · repo-actions (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | repo-actions | 코드에만 있음 |
| D21 | R-01_1024_Signed-in | repo-actions | 코드에만 있음 |
| D21 | R-01_1440_Guest | repo-actions | 코드에만 있음 |
| D21 | R-01_1440_Signed-in | repo-actions | 코드에만 있음 |
| D21 | R-01_1920_Guest | repo-actions | 코드에만 있음 |
| D21 | R-01_1920_Signed-in | repo-actions | 코드에만 있음 |
| D21 | R-01_360_Guest | repo-actions | 코드에만 있음 |
| D21 | R-01_360_Signed-in | repo-actions | 코드에만 있음 |
| … | 나머지 2건 | | 화면별: R-01 10 |

## 코드에만 · extra-reuse (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | extra-reuse | 코드에만 있음 |
| D21 | R-01_1024_Signed-in | extra-reuse | 코드에만 있음 |
| D21 | R-01_1440_Guest | extra-reuse | 코드에만 있음 |
| D21 | R-01_1440_Signed-in | extra-reuse | 코드에만 있음 |
| D21 | R-01_1920_Guest | extra-reuse | 코드에만 있음 |
| D21 | R-01_1920_Signed-in | extra-reuse | 코드에만 있음 |
| D21 | R-01_360_Guest | extra-reuse | 코드에만 있음 |
| D21 | R-01_360_Signed-in | extra-reuse | 코드에만 있음 |
| … | 나머지 2건 | | 화면별: R-01 10 |

## 코드에만 · extra-field (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | extra-field | 코드에만 있음 |
| D21 | R-01_1024_Signed-in | extra-field | 코드에만 있음 |
| D21 | R-01_1440_Guest | extra-field | 코드에만 있음 |
| D21 | R-01_1440_Signed-in | extra-field | 코드에만 있음 |
| D21 | R-01_1920_Guest | extra-field | 코드에만 있음 |
| D21 | R-01_1920_Signed-in | extra-field | 코드에만 있음 |
| D21 | R-01_360_Guest | extra-field | 코드에만 있음 |
| D21 | R-01_360_Signed-in | extra-field | 코드에만 있음 |
| … | 나머지 2건 | | 화면별: R-01 10 |

## 코드에만 · language-bar (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | language-bar | 코드에만 있음 |
| D21 | R-01_1024_Signed-in | language-bar | 코드에만 있음 |
| D21 | R-01_1440_Guest | language-bar | 코드에만 있음 |
| D21 | R-01_1440_Signed-in | language-bar | 코드에만 있음 |
| D21 | R-01_1920_Guest | language-bar | 코드에만 있음 |
| D21 | R-01_1920_Signed-in | language-bar | 코드에만 있음 |
| D21 | R-01_360_Guest | language-bar | 코드에만 있음 |
| D21 | R-01_360_Signed-in | language-bar | 코드에만 있음 |
| … | 나머지 2건 | | 화면별: R-01 10 |

## Figma에만 · steps (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-30_1024_Guest | steps | Figma에만 {"x": 40, "y": 313, "w": 944, "h": 558} |
| D21 | R-30_1024_Signed-in | steps | Figma에만 {"x": 40, "y": 313, "w": 944, "h": 558} |
| D21 | R-30_1440_Guest | steps | Figma에만 {"x": 296, "y": 313, "w": 1088, "h": 558} |
| D21 | R-30_1440_Signed-in | steps | Figma에만 {"x": 296, "y": 313, "w": 1088, "h": 558} |
| D21 | R-30_1920_Guest | steps | Figma에만 {"x": 480, "y": 311, "w": 1200, "h": 558} |
| D21 | R-30_1920_Signed-in | steps | Figma에만 {"x": 480, "y": 313, "w": 1200, "h": 558} |
| D21 | R-30_360_Guest | steps | Figma에만 {"x": 16, "y": 349, "w": 328, "h": 580} |
| D21 | R-30_360_Signed-in | steps | Figma에만 {"x": 16, "y": 349, "w": 328, "h": 580} |
| … | 나머지 2건 | | 화면별: R-30 10 |

## 위치/크기 · login-field · y (9건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-08b_360_Guest | login-field | y: 코드 474 / Figma 497 |
| D21 | G-08b_360_Guest | login-field#2 | y: 코드 564 / Figma 587 |
| D21 | G-08b_360_Signed-in | login-field | y: 코드 474 / Figma 497 |
| D21 | G-08b_360_Signed-in | login-field#2 | y: 코드 564 / Figma 587 |
| D21 | G-08c_1920_Guest | login-field | y: 코드 134 / Figma 149 |
| D21 | G-08c_360_Guest | login-field | y: 코드 450 / Figma 473 |
| D21 | G-08c_360_Signed-in | login-field | y: 코드 450 / Figma 473 |
| D21 | G-08e_360_Guest | login-field | y: 코드 450 / Figma 473 |
| … | 나머지 1건 | | 화면별: G-08b 4, G-08c 3, G-08e 2 |

## 색 · search-filter (8건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-01_360_Guest | search-filter | 코드 "없음 " / Figma "#33363d color/layout/btn-fill-bg"  |
| D21 | A-01_360_Signed-in | search-filter | 코드 "없음 " / Figma "#33363d color/layout/btn-fill-bg"  |
| D21 | A-01_768_Guest | search-filter | 코드 "없음 " / Figma "#33363d color/layout/btn-fill-bg"  |
| D21 | A-01_768_Signed-in | search-filter | 코드 "없음 " / Figma "#33363d color/layout/btn-fill-bg"  |
| D21 | G-02_360_Guest | search-filter | 코드 "없음 " / Figma "#33363d color/layout/btn-fill-bg"  |
| D21 | G-02_360_Signed-in | search-filter | 코드 "없음 " / Figma "#33363d color/layout/btn-fill-bg"  |
| D21 | G-02_768_Guest | search-filter | 코드 "없음 " / Figma "#33363d color/layout/btn-fill-bg"  |
| D21 | G-02_768_Signed-in | search-filter | 코드 "없음 " / Figma "#33363d color/layout/btn-fill-bg"  |

## 아이콘 · gitlab-sidebar (4건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1440_Guest | gitlab-sidebar | 코드 ["analytics", "catalog", "group", "help", "inquiry", "multi" / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| D21 | A-02_1440_Signed-in | gitlab-sidebar | 코드 ["analytics", "catalog", "group", "help", "inquiry", "multi" / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| D21 | A-02_1920_Guest | gitlab-sidebar | 코드 ["analytics", "catalog", "group", "help", "inquiry", "multi" / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| D21 | A-02_1920_Signed-in | gitlab-sidebar | 코드 ["analytics", "catalog", "group", "help", "inquiry", "multi" / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |

## 아이콘 · sidebar-nav (4건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1440_Guest | sidebar-nav | 코드 ["analytics", "catalog", "group", "inquiry", "multi", "proje / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| D21 | A-02_1440_Signed-in | sidebar-nav | 코드 ["analytics", "catalog", "group", "inquiry", "multi", "proje / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| D21 | A-02_1920_Guest | sidebar-nav | 코드 ["analytics", "catalog", "group", "inquiry", "multi", "proje / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| D21 | A-02_1920_Signed-in | sidebar-nav | 코드 ["analytics", "catalog", "group", "inquiry", "multi", "proje / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |

## 위치/크기 · section-title · h (7건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-06_1024_Guest | section-title | h: 코드 22 / Figma 2 |
| D21 | G-06_1024_Signed-in | section-title | h: 코드 22 / Figma 40 |
| D21 | G-06_1440_Guest | section-title | h: 코드 22 / Figma 2 |
| D21 | G-06_1440_Signed-in | section-title | h: 코드 22 / Figma 40 |
| D21 | G-06_1920_Guest | section-title | h: 코드 22 / Figma 2 |
| D21 | G-06_1920_Signed-in | section-title | h: 코드 22 / Figma 40 |
| D21 | G-06_768_Signed-in | section-title | h: 코드 22 / Figma 40 |

## 위치/크기 · toolbar · y (6건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | toolbar | y: 코드 193 / Figma 185 |
| D21 | R-01_1024_Signed-in | toolbar | y: 코드 193 / Figma 185 |
| D21 | R-01_1440_Guest | toolbar | y: 코드 193 / Figma 185 |
| D21 | R-01_1440_Signed-in | toolbar | y: 코드 193 / Figma 185 |
| D21 | R-01_1920_Guest | toolbar | y: 코드 193 / Figma 185 |
| D21 | R-01_1920_Signed-in | toolbar | y: 코드 193 / Figma 185 |

## 위치/크기 · commit-bar · h (2건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_360_Guest | commit-bar | h: 코드 154 / Figma 66 |
| D21 | R-01_360_Signed-in | commit-bar | h: 코드 154 / Figma 66 |

## 코드에만 · checks (5건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-03_1024_Guest | checks | 코드에만 있음 |
| D21 | A-03_1440_Guest | checks | 코드에만 있음 |
| D21 | A-03_1920_Guest | checks | 코드에만 있음 |
| D21 | A-03_360_Guest | checks | 코드에만 있음 |
| D21 | A-03_768_Guest | checks | 코드에만 있음 |

## 위치/크기 · checks · y (5건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-03_1024_Signed-in | checks | y: 코드 221 / Figma 277 |
| D21 | A-03_1440_Signed-in | checks | y: 코드 221 / Figma 277 |
| D21 | A-03_1920_Signed-in | checks | y: 코드 221 / Figma 277 |
| D21 | A-03_360_Signed-in | checks | y: 코드 213 / Figma 313 |
| D21 | A-03_768_Signed-in | checks | y: 코드 221 / Figma 277 |

## 위치/크기 · checks · h (5건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-03_1024_Signed-in | checks | h: 코드 540 / Figma 589 |
| D21 | A-03_1440_Signed-in | checks | h: 코드 540 / Figma 589 |
| D21 | A-03_1920_Signed-in | checks | h: 코드 540 / Figma 589 |
| D21 | A-03_360_Signed-in | checks | h: 코드 508 / Figma 1245 |
| D21 | A-03_768_Signed-in | checks | h: 코드 540 / Figma 589 |

## 문구 · checks (5건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-03_1024_Signed-in | checks | 코드 "자동 점검 7/8 통과 공개 승인 아님 기관 확인 별도 있음 올리지 않을 파일 목록(.gitignore)  / Figma ["올리면 안 되는 파일을 걸러 줍니다", "설명 파일이 있습니다", "README에 하는 일이 적혀 있습니  |
| D21 | A-03_1440_Signed-in | checks | 코드 "자동 점검 7/8 통과 공개 승인 아님 기관 확인 별도 있음 올리지 않을 파일 목록(.gitignore)  / Figma ["올리면 안 되는 파일을 걸러 줍니다", "설명 파일이 있습니다", "README에 하는 일이 적혀 있습니  |
| D21 | A-03_1920_Signed-in | checks | 코드 "자동 점검 7/8 통과 공개 승인 아님 기관 확인 별도 있음 올리지 않을 파일 목록(.gitignore)  / Figma ["올리면 안 되는 파일을 걸러 줍니다", "설명 파일이 있습니다", "README에 하는 일이 적혀 있습니  |
| D21 | A-03_360_Signed-in | checks | 코드 "자동 점검 7/8 통과 공개 승인 아님 기관 확인 별도 있음 올리지 않을 파일 목록(.gitignore)  / Figma ["올리면 안 되는 파일을 걸러 줍니다", "설명 파일이 있습니다", "README에 하는 일이 적혀 있습니  |
| D21 | A-03_768_Signed-in | checks | 코드 "자동 점검 7/8 통과 공개 승인 아님 기관 확인 별도 있음 올리지 않을 파일 목록(.gitignore)  / Figma ["올리면 안 되는 파일을 걸러 줍니다", "설명 파일이 있습니다", "README에 하는 일이 적혀 있습니  |

## 모서리·안쪽·간격 · checks (5건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-03_1024_Signed-in | checks | 코드 null / Figma null 간격 0→20 |
| D21 | A-03_1440_Signed-in | checks | 코드 null / Figma null 간격 0→20 |
| D21 | A-03_1920_Signed-in | checks | 코드 null / Figma null 간격 0→20 |
| D21 | A-03_360_Signed-in | checks | 코드 null / Figma null 간격 0→12 |
| D21 | A-03_768_Signed-in | checks | 코드 null / Figma null 간격 0→20 |

## 아이콘 · checks (5건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-03_1024_Signed-in | checks | 코드 [] / Figma ["check-circle"]  |
| D21 | A-03_1440_Signed-in | checks | 코드 [] / Figma ["check-circle"]  |
| D21 | A-03_1920_Signed-in | checks | 코드 [] / Figma ["check-circle"]  |
| D21 | A-03_360_Signed-in | checks | 코드 [] / Figma ["check-circle"]  |
| D21 | A-03_768_Signed-in | checks | 코드 [] / Figma ["check-circle"]  |

## Figma에만 · project-row (5건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-06_1024_Signed-in | project-row | Figma에만 {"x": 41, "y": 266, "w": 942, "h": 97} |
| D21 | G-06_1440_Signed-in | project-row | Figma에만 {"x": 297, "y": 266, "w": 1086, "h": 97} |
| D21 | G-06_1920_Signed-in | project-row | Figma에만 {"x": 481, "y": 266, "w": 1198, "h": 97} |
| D21 | G-06_360_Signed-in | project-row | Figma에만 {"x": 17, "y": 288, "w": 326, "h": 97} |
| D21 | G-06_768_Signed-in | project-row | Figma에만 {"x": 33, "y": 266, "w": 702, "h": 97} |

## 문구 · gitlab-sidebar (4건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1440_Guest | gitlab-sidebar | 코드 "탐색 프로젝트 그룹 CI/CD 카탈로그 AI 카탈로그 주제 스니펫 덧붙인 기능 업무로 찾기 요청 보드 운영 / Figma ["K", "kordoc", "고정됨", "멤버"]  |
| D21 | A-02_1440_Signed-in | gitlab-sidebar | 코드 "탐색 프로젝트 그룹 CI/CD 카탈로그 AI 카탈로그 주제 스니펫 덧붙인 기능 업무로 찾기 요청 보드 운영 / Figma ["K", "kordoc", "고정됨", "멤버"]  |
| D21 | A-02_1920_Guest | gitlab-sidebar | 코드 "탐색 프로젝트 그룹 CI/CD 카탈로그 AI 카탈로그 주제 스니펫 덧붙인 기능 업무로 찾기 요청 보드 운영 / Figma ["K", "kordoc", "고정됨", "멤버"]  |
| D21 | A-02_1920_Signed-in | gitlab-sidebar | 코드 "탐색 프로젝트 그룹 CI/CD 카탈로그 AI 카탈로그 주제 스니펫 덧붙인 기능 업무로 찾기 요청 보드 운영 / Figma ["K", "kordoc", "고정됨", "멤버"]  |

## 위치/크기 · sidebar-nav · y (4건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1440_Guest | sidebar-nav | y: 코드 118 / Figma 154 |
| D21 | A-02_1440_Signed-in | sidebar-nav | y: 코드 118 / Figma 154 |
| D21 | A-02_1920_Guest | sidebar-nav | y: 코드 118 / Figma 154 |
| D21 | A-02_1920_Signed-in | sidebar-nav | y: 코드 118 / Figma 154 |

## 문구 · sidebar-nav (4건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1440_Guest | sidebar-nav | 코드 "프로젝트 그룹 CI/CD 카탈로그 AI 카탈로그 주제 스니펫 덧붙인 기능 업무로 찾기 요청 보드 운영 현황 / Figma ["고정됨", "멤버", "작업 항목", "브랜치"]  |
| D21 | A-02_1440_Signed-in | sidebar-nav | 코드 "프로젝트 그룹 CI/CD 카탈로그 AI 카탈로그 주제 스니펫 덧붙인 기능 업무로 찾기 요청 보드 운영 현황 / Figma ["고정됨", "멤버", "작업 항목", "브랜치"]  |
| D21 | A-02_1920_Guest | sidebar-nav | 코드 "프로젝트 그룹 CI/CD 카탈로그 AI 카탈로그 주제 스니펫 덧붙인 기능 업무로 찾기 요청 보드 운영 현황 / Figma ["고정됨", "멤버", "작업 항목", "브랜치"]  |
| D21 | A-02_1920_Signed-in | sidebar-nav | 코드 "프로젝트 그룹 CI/CD 카탈로그 AI 카탈로그 주제 스니펫 덧붙인 기능 업무로 찾기 요청 보드 운영 현황 / Figma ["고정됨", "멤버", "작업 항목", "브랜치"]  |

## 글자 속성 · section-title (4건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-06_1024_Signed-in | section-title | 코드 null / Figma null 굵기 400→700 |
| D21 | G-06_1440_Signed-in | section-title | 코드 null / Figma null 굵기 400→700 |
| D21 | G-06_1920_Signed-in | section-title | 코드 null / Figma null 굵기 400→700 |
| D21 | G-06_768_Signed-in | section-title | 코드 null / Figma null 굵기 400→700 |

## 색 · section-title (4건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-06_1024_Signed-in | section-title | 코드 "#f4f5f6 gray-5" / Figma "#ffffff color/text/inverse-static"  |
| D21 | G-06_1440_Signed-in | section-title | 코드 "#f4f5f6 gray-5" / Figma "#ffffff color/text/inverse-static"  |
| D21 | G-06_1920_Signed-in | section-title | 코드 "#f4f5f6 gray-5" / Figma "#ffffff color/text/inverse-static"  |
| D21 | G-06_768_Signed-in | section-title | 코드 "#f4f5f6 gray-5" / Figma "#ffffff color/text/inverse-static"  |

## 아이콘 · task-search (2건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-01_360_Guest | task-search | 코드 ["ellipsis-vertical", "fork", "globe", "issues", "merge-requ / Figma ["ellipsis-vertical", "fork", "globe", "issues", "merge-requ  |
| D21 | A-01_360_Signed-in | task-search | 코드 ["ellipsis-vertical", "fork", "globe", "issues", "merge-requ / Figma ["ellipsis-vertical", "fork", "globe", "issues", "merge-requ  |

## 문구 · breadcrumb (2건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-12_1440_Guest | breadcrumb | 코드 "chrisryugj" / Figma ["서울특별시 광진구 류승인"]  |
| D21 | G-12_768_Guest | breadcrumb | 코드 "chrisryugj" / Figma ["서울특별시 광진구 류승인"]  |

## 색 · page-head (1건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-03_1920_Guest | page-head | 코드 "#f4f5f6 gray-5" / Figma "#1e2124 color/text/basic"  |

## 모서리·안쪽·간격 · login-card (1건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-08c_1920_Guest | login-card | 코드 null / Figma null 간격 24→16 |

## 코드에만 · profile-head (1건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-12_360_Guest | profile-head | 코드에만 있음 |

## 코드에만 · profile-activity (1건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-12_360_Guest | profile-activity | 코드에만 있음 |

## 코드에만 · activity-calendar (1건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-12_360_Guest | activity-calendar | 코드에만 있음 |

## 코드에만 · profile-info (1건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-12_360_Guest | profile-info | 코드에만 있음 |
