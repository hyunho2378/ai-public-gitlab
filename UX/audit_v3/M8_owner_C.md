# M-8 담당 C1+C2 작업 목록

- 생성: M-8 측정(코드 ffdbc40, 개발 서버 5994) 대 Figma 합본 figma_full.json 2026-11-07 07:51(598 변형)
- 해소 규칙: D-xx > 공공 깃랩 실측(UX/gitlab_compare, UX/handson, UX/17) > Figma(실측 없는 덧붙임). measured_full.json은 코드 측정이라 실측으로 쓰지 않았다
- 확정도: 확인함 = 이번에 캡처를 열어 봄 / 기록 인용 = 기존 문서·커밋 문구를 인용 / 규칙 적용 = 규칙만 적용 / 미판정 = 실측 대조 필요
- 이 담당 차이 건수 기준 고칠 쪽: 미판정 773건, Figma 64건, 보류 14건

## 문구 · page-head (14건)
- 고칠 쪽: **보류** / 확정도: 기록 인용(문서·커밋 문구, 직접 재확인 안 함)
- 근거: G-06 제목 '내 작업' 대 '내 프로젝트'는 원장 pending: 사용자 캡처 대기(실제 /dashboard/projects, 로그인 필요)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-05_1024_Guest | page-head | 코드 "커밋 03f9484e 작성됨 8일 전 작성자 C 서울특별시 광진구 류승인 파일 찾아보기 옵션" / Figma ["작성됨 11시간 전 · 서울특별시 광진구 류승인"]  |
| C1 | R-05_1024_Signed-in | page-head | 코드 "커밋 03f9484e 작성됨 8일 전 작성자 C 서울특별시 광진구 류승인 파일 찾아보기 옵션" / Figma ["작성됨 11시간 전 · 서울특별시 광진구 류승인"]  |
| C1 | R-05_1440_Guest | page-head | 코드 "커밋 03f9484e 작성됨 8일 전 작성자 C 서울특별시 광진구 류승인 파일 찾아보기 옵션" / Figma ["작성됨 11시간 전 · 서울특별시 광진구 류승인"]  |
| C1 | R-05_1440_Signed-in | page-head | 코드 "커밋 03f9484e 작성됨 8일 전 작성자 C 서울특별시 광진구 류승인 파일 찾아보기 옵션" / Figma ["작성됨 11시간 전 · 서울특별시 광진구 류승인"]  |
| C1 | R-05_1920_Guest | page-head | 코드 "커밋 03f9484e 작성됨 8일 전 작성자 C 서울특별시 광진구 류승인 파일 찾아보기 옵션" / Figma ["작성됨 11시간 전 · 서울특별시 광진구 류승인"]  |
| C1 | R-05_1920_Signed-in | page-head | 코드 "커밋 03f9484e 작성됨 8일 전 작성자 C 서울특별시 광진구 류승인 파일 찾아보기 옵션" / Figma ["작성됨 11시간 전 · 서울특별시 광진구 류승인"]  |
| C1 | R-05_360_Guest | page-head | 코드 "커밋 03f9484e 작성됨 8일 전 작성자 C 서울특별시 광진구 류승인 파일 찾아보기 옵션" / Figma ["작성됨 11시간 전 · 서울특별시 광진구 류승인"]  |
| C1 | R-05_360_Signed-in | page-head | 코드 "커밋 03f9484e 작성됨 8일 전 작성자 C 서울특별시 광진구 류승인 파일 찾아보기 옵션" / Figma ["작성됨 11시간 전 · 서울특별시 광진구 류승인"]  |
| … | 나머지 6건 | | 화면별: R-05 10, R-23 4 |

## 위치/크기 · sidebar-nav · w (36건)
- 고칠 쪽: **Figma** / 확정도: 기록 인용(문서·커밋 문구, 직접 재확인 안 함)
- 근거: UX/17_사이드바_실측.md 1절: 스크롤이 생기면 목록 폭 224→209(코드 thin 막대 11). UX/audit_v3/M7_to_figma.md·M7_C_resolution.md에서 Figma 고정 224 비교 금지로 이미 전달
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-06_1440_Guest | sidebar-nav | w: 코드 213 / Figma 224 |
| C1 | R-06_1440_Signed-in | sidebar-nav | w: 코드 213 / Figma 224 |
| C1 | R-06_1920_Guest | sidebar-nav | w: 코드 213 / Figma 224 |
| C1 | R-06_1920_Signed-in | sidebar-nav | w: 코드 213 / Figma 224 |
| C1 | R-07_1440_Guest | sidebar-nav | w: 코드 213 / Figma 224 |
| C1 | R-07_1440_Signed-in | sidebar-nav | w: 코드 213 / Figma 224 |
| C1 | R-07_1920_Guest | sidebar-nav | w: 코드 213 / Figma 224 |
| C1 | R-07_1920_Signed-in | sidebar-nav | w: 코드 213 / Figma 224 |
| … | 나머지 28건 | | 화면별: R-06 4, R-07 4, R-13 4, R-15 4, R-18 4, R-21 4, R-22 4, R-23 4, R-29 4 |

## 위치/크기 · filter-search · x (36건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-11_1024_Guest | filter-search | x: 코드 855 / Figma 867 |
| C2 | R-11_1024_Signed-in | filter-search | x: 코드 855 / Figma 867 |
| C2 | R-11_1440_Guest | filter-search | x: 코드 1255 / Figma 1267 |
| C2 | R-11_1440_Signed-in | filter-search | x: 코드 1255 / Figma 1267 |
| C2 | R-11_1920_Guest | filter-search | x: 코드 1551 / Figma 1563 |
| C2 | R-11_1920_Signed-in | filter-search | x: 코드 1551 / Figma 1563 |
| C2 | R-11_360_Guest | filter-search | x: 코드 316 / Figma 295 |
| C2 | R-11_360_Signed-in | filter-search | x: 코드 316 / Figma 295 |
| … | 나머지 28건 | | 화면별: R-11 10, R-20 10, R-16 8, R-23 8 |

## 위치/크기 · section-title · y (25건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-07_1024_Guest | section-title | y: 코드 227 / Figma 243 |
| C1 | R-07_1024_Signed-in | section-title | y: 코드 227 / Figma 243 |
| C1 | R-07_1440_Guest | section-title | y: 코드 227 / Figma 243 |
| C1 | R-07_1440_Signed-in | section-title | y: 코드 227 / Figma 243 |
| C1 | R-07_1920_Guest | section-title | y: 코드 227 / Figma 243 |
| C1 | R-07_1920_Signed-in | section-title | y: 코드 227 / Figma 243 |
| C1 | R-07_360_Guest | section-title | y: 코드 227 / Figma 243 |
| C1 | R-07_360_Signed-in | section-title | y: 코드 227 / Figma 243 |
| … | 나머지 17건 | | 화면별: R-07 10, R-25 10, R-26 5 |

## 문구 · commit-bar (20건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-02_1024_Guest | commit-bar | 코드 "release: 4.24.21 서울특별시 광진구 류승인가 8일 전에 작성 03f9484e 이력" / Figma ["서울특별시 광진구 류승인가 11시간 전에 작성"]  |
| C1 | R-02_1024_Signed-in | commit-bar | 코드 "release: 4.24.21 서울특별시 광진구 류승인가 8일 전에 작성 03f9484e 이력" / Figma ["서울특별시 광진구 류승인가 11시간 전에 작성"]  |
| C1 | R-02_1440_Guest | commit-bar | 코드 "release: 4.24.21 서울특별시 광진구 류승인가 8일 전에 작성 03f9484e 이력" / Figma ["서울특별시 광진구 류승인가 11시간 전에 작성"]  |
| C1 | R-02_1440_Signed-in | commit-bar | 코드 "release: 4.24.21 서울특별시 광진구 류승인가 8일 전에 작성 03f9484e 이력" / Figma ["서울특별시 광진구 류승인가 11시간 전에 작성"]  |
| C1 | R-02_1920_Guest | commit-bar | 코드 "release: 4.24.21 서울특별시 광진구 류승인가 8일 전에 작성 03f9484e 이력" / Figma ["서울특별시 광진구 류승인가 11시간 전에 작성"]  |
| C1 | R-02_1920_Signed-in | commit-bar | 코드 "release: 4.24.21 서울특별시 광진구 류승인가 8일 전에 작성 03f9484e 이력" / Figma ["서울특별시 광진구 류승인가 11시간 전에 작성"]  |
| C1 | R-02_360_Guest | commit-bar | 코드 "release: 4.24.21 서울특별시 광진구 류승인가 8일 전에 작성 03f9484e 이력" / Figma ["서울특별시 광진구 류승인가 11시간 전에 작성"]  |
| C1 | R-02_360_Signed-in | commit-bar | 코드 "release: 4.24.21 서울특별시 광진구 류승인가 8일 전에 작성 03f9484e 이력" / Figma ["서울특별시 광진구 류승인가 11시간 전에 작성"]  |
| … | 나머지 12건 | | 화면별: R-02 10, R-03 10 |

## 위치/크기 · gl-filter · y (14건)
- 고칠 쪽: **Figma** / 확정도: 기록 인용(문서·커밋 문구, 직접 재확인 안 함)
- 근거: UX/audit_v3/M7_to_figma.md·M7_C_resolution.md: D-21 조작 32 적용으로 코드 쪽은 처리됨. 남은 차이는 Figma 전달 항목
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-07_1024_Guest | gl-filter | y: 코드 161 / Figma 170 |
| C1 | R-07_1024_Signed-in | gl-filter | y: 코드 161 / Figma 170 |
| C1 | R-07_1440_Guest | gl-filter | y: 코드 161 / Figma 170 |
| C1 | R-07_1440_Signed-in | gl-filter | y: 코드 161 / Figma 170 |
| C1 | R-07_1920_Guest | gl-filter | y: 코드 161 / Figma 170 |
| C1 | R-07_1920_Signed-in | gl-filter | y: 코드 161 / Figma 170 |
| C1 | R-07_360_Guest | gl-filter | y: 코드 161 / Figma 170 |
| C1 | R-07_360_Signed-in | gl-filter | y: 코드 161 / Figma 170 |
| … | 나머지 6건 | | 화면별: R-07 10, R-16 2, R-23 2 |

## 위치/크기 · page-head · h (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-05_360_Guest | page-head | h: 코드 123 / Figma 111 |
| C1 | R-05_360_Signed-in | page-head | h: 코드 123 / Figma 111 |
| C1 | R-09_360_Guest | page-head | h: 코드 40 / Figma 32 |
| C1 | R-09_360_Signed-in | page-head | h: 코드 40 / Figma 32 |
| C2 | R-10_360_Guest | page-head | h: 코드 84 / Figma 76 |
| C2 | R-10_360_Signed-in | page-head | h: 코드 84 / Figma 76 |
| C2 | R-17_360_Guest | page-head | h: 코드 48 / Figma 72 |
| C2 | R-17_360_Signed-in | page-head | h: 코드 48 / Figma 72 |
| … | 나머지 2건 | | 화면별: R-05 2, R-09 2, R-10 2, R-17 2, R-23 2 |

## 모서리·안쪽·간격 · page-head (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-17_1024_Guest | page-head | 코드 null / Figma null 간격 8→16 |
| C2 | R-17_1024_Signed-in | page-head | 코드 null / Figma null 간격 8→16 |
| C2 | R-17_1440_Guest | page-head | 코드 null / Figma null 간격 8→16 |
| C2 | R-17_1440_Signed-in | page-head | 코드 null / Figma null 간격 8→16 |
| C2 | R-17_1920_Guest | page-head | 코드 null / Figma null 간격 8→16 |
| C2 | R-17_1920_Signed-in | page-head | 코드 null / Figma null 간격 8→16 |
| C2 | R-17_360_Guest | page-head | 코드 null / Figma null 간격 8→16 |
| C2 | R-17_360_Signed-in | page-head | 코드 null / Figma null 간격 8→16 |
| … | 나머지 2건 | | 화면별: R-17 10 |

## 위치/크기 · section-title · w (15건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-07_1024_Guest | section-title | w: 코드 942 / Figma 944 |
| C1 | R-07_1024_Signed-in | section-title | w: 코드 942 / Figma 944 |
| C1 | R-07_1440_Guest | section-title | w: 코드 1086 / Figma 1088 |
| C1 | R-07_1440_Signed-in | section-title | w: 코드 1086 / Figma 1088 |
| C1 | R-07_1920_Guest | section-title | w: 코드 1198 / Figma 1200 |
| C1 | R-07_1920_Signed-in | section-title | w: 코드 1198 / Figma 1200 |
| C1 | R-07_360_Guest | section-title | w: 코드 326 / Figma 328 |
| C1 | R-07_360_Signed-in | section-title | w: 코드 326 / Figma 328 |
| … | 나머지 7건 | | 화면별: R-07 10, R-26 5 |

## 위치/크기 · sidebar-nav · h (16건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-10_1440_Guest | sidebar-nav | h: 코드 720 / Figma 625 |
| C2 | R-10_1440_Signed-in | sidebar-nav | h: 코드 720 / Figma 625 |
| C2 | R-10_1920_Guest | sidebar-nav | h: 코드 720 / Figma 625 |
| C2 | R-10_1920_Signed-in | sidebar-nav | h: 코드 720 / Figma 625 |
| C1 | R-25_1440_Guest | sidebar-nav | h: 코드 720 / Figma 625 |
| C1 | R-25_1440_Signed-in | sidebar-nav | h: 코드 720 / Figma 625 |
| C1 | R-25_1920_Guest | sidebar-nav | h: 코드 720 / Figma 625 |
| C1 | R-25_1920_Signed-in | sidebar-nav | h: 코드 720 / Figma 625 |
| … | 나머지 8건 | | 화면별: R-10 4, R-25 4, R-27 4, R-28 4 |

## 문구 · section-title (19건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: G-06 Signed-in 등 문구 차이 24건: 실측 캡처 없음
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-07_1024_Signed-in | section-title | 코드 "활성 브랜치" / Figma ["새 브랜치"]  |
| C1 | R-07_1440_Signed-in | section-title | 코드 "활성 브랜치" / Figma ["새 브랜치"]  |
| C1 | R-07_1920_Signed-in | section-title | 코드 "활성 브랜치" / Figma ["새 브랜치"]  |
| C1 | R-07_768_Signed-in | section-title | 코드 "활성 브랜치" / Figma ["새 브랜치"]  |
| C1 | R-25_1024_Guest | section-title | 코드 "이 리포지토리에 사용된 프로그래밍 언어" / Figma ["이 리포지토리에 사용 된 프로그래밍 언어"]  |
| C1 | R-25_1024_Signed-in | section-title | 코드 "이 리포지토리에 사용된 프로그래밍 언어" / Figma ["이 리포지토리에 사용 된 프로그래밍 언어"]  |
| C1 | R-25_1440_Guest | section-title | 코드 "이 리포지토리에 사용된 프로그래밍 언어" / Figma ["이 리포지토리에 사용 된 프로그래밍 언어"]  |
| C1 | R-25_1440_Signed-in | section-title | 코드 "이 리포지토리에 사용된 프로그래밍 언어" / Figma ["이 리포지토리에 사용 된 프로그래밍 언어"]  |
| … | 나머지 11건 | | 화면별: R-25 10, R-26 5, R-07 4 |

## 위치/크기 · main · y (10건)
- 고칠 쪽: **Figma** / 확정도: 규칙 적용(실측 대조 안 함)
- 근거: 코드는 전 화면 main y 81로 같고(560개 중 이 항목 차이는 A-02·G-12에만), Figma 121은 A-02·G-12에 breadcrumb 줄을 따로 둔 구조. 공통 판 구조(breadcrumb y 81 일치)에 Figma가 맞춘다
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | main | y: 코드 121 / Figma 137 |
| C2 | R-26_1024_Signed-in | main | y: 코드 121 / Figma 137 |
| C2 | R-26_1440_Guest | main | y: 코드 121 / Figma 137 |
| C2 | R-26_1440_Signed-in | main | y: 코드 121 / Figma 137 |
| C2 | R-26_1920_Guest | main | y: 코드 121 / Figma 137 |
| C2 | R-26_1920_Signed-in | main | y: 코드 121 / Figma 137 |
| C2 | R-26_360_Guest | main | y: 코드 121 / Figma 137 |
| C2 | R-26_360_Signed-in | main | y: 코드 121 / Figma 137 |
| … | 나머지 2건 | | 화면별: R-26 10 |

## Figma에만 · section-title (20건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-25_1024_Guest | section-title#2 | Figma에만 {"x": 40, "y": 520, "w": 944, "h": 28} |
| C1 | R-25_1024_Guest | section-title#3 | Figma에만 {"x": 40, "y": 955, "w": 944, "h": 28} |
| C1 | R-25_1024_Signed-in | section-title#2 | Figma에만 {"x": 40, "y": 520, "w": 944, "h": 28} |
| C1 | R-25_1024_Signed-in | section-title#3 | Figma에만 {"x": 40, "y": 955, "w": 944, "h": 28} |
| C1 | R-25_1440_Guest | section-title#2 | Figma에만 {"x": 296, "y": 520, "w": 1088, "h": 28} |
| C1 | R-25_1440_Guest | section-title#3 | Figma에만 {"x": 296, "y": 955, "w": 1088, "h": 28} |
| C1 | R-25_1440_Signed-in | section-title#2 | Figma에만 {"x": 296, "y": 520, "w": 1088, "h": 28} |
| C1 | R-25_1440_Signed-in | section-title#3 | Figma에만 {"x": 296, "y": 955, "w": 1088, "h": 28} |
| … | 나머지 12건 | | 화면별: R-25 20 |

## 위치/크기 · filter-search · y (22건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-16_360_Guest | filter-search | y: 코드 234 / Figma 194 |
| C2 | R-16_360_Signed-in | filter-search | y: 코드 234 / Figma 194 |
| C2 | R-19_1024_Guest | filter-search | y: 코드 185 / Figma 187 |
| C2 | R-19_1024_Signed-in | filter-search | y: 코드 185 / Figma 187 |
| C2 | R-19_1440_Guest | filter-search | y: 코드 185 / Figma 187 |
| C2 | R-19_1440_Signed-in | filter-search | y: 코드 185 / Figma 187 |
| C2 | R-19_1920_Guest | filter-search | y: 코드 185 / Figma 187 |
| C2 | R-19_1920_Signed-in | filter-search | y: 코드 185 / Figma 187 |
| … | 나머지 14건 | | 화면별: R-19 10, R-23 10, R-16 2 |

## 모서리·안쪽·간격 · global-search (22건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | global-search | 코드 null / Figma null 모서리 0→12 |
| C2 | R-26_1024_Guest | global-search | 코드 null / Figma null 안쪽 0 0 0 0→0 4 0 8 |
| C2 | R-26_1024_Guest | global-search | 코드 null / Figma null 간격 0→8 |
| C2 | R-26_1024_Signed-in | global-search | 코드 null / Figma null 모서리 0→12 |
| C2 | R-26_1024_Signed-in | global-search | 코드 null / Figma null 안쪽 0 0 0 0→0 4 0 8 |
| C2 | R-26_1024_Signed-in | global-search | 코드 null / Figma null 간격 0→8 |
| C2 | R-26_1440_Guest | global-search | 코드 null / Figma null 모서리 0→12 |
| C2 | R-26_1440_Guest | global-search | 코드 null / Figma null 안쪽 0 0 0 0→0 4 0 8 |
| … | 나머지 14건 | | 화면별: R-26 22 |

## Figma에만 · filter-search (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-04_1024_Guest | filter-search | Figma에만 {"x": 951, "y": 213, "w": 32, "h": 32} |
| C1 | R-04_1024_Signed-in | filter-search | Figma에만 {"x": 951, "y": 213, "w": 32, "h": 32} |
| C1 | R-04_1440_Guest | filter-search | Figma에만 {"x": 1351, "y": 213, "w": 32, "h": 32} |
| C1 | R-04_1440_Signed-in | filter-search | Figma에만 {"x": 1351, "y": 213, "w": 32, "h": 32} |
| C1 | R-04_1920_Guest | filter-search | Figma에만 {"x": 1647, "y": 213, "w": 32, "h": 32} |
| C1 | R-04_1920_Signed-in | filter-search | Figma에만 {"x": 1647, "y": 213, "w": 32, "h": 32} |
| C1 | R-04_360_Guest | filter-search | Figma에만 {"x": 311, "y": 205, "w": 32, "h": 32} |
| C1 | R-04_360_Signed-in | filter-search | Figma에만 {"x": 311, "y": 205, "w": 32, "h": 32} |
| … | 나머지 2건 | | 화면별: R-04 10 |

## 아이콘 · gl-filter (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-04_1024_Guest | gl-filter | 코드 ["history", "search"] / Figma ["arrow-down", "history", "search"]  |
| C1 | R-04_1024_Signed-in | gl-filter | 코드 ["history", "search"] / Figma ["arrow-down", "history", "search"]  |
| C1 | R-04_1440_Guest | gl-filter | 코드 ["history", "search"] / Figma ["arrow-down", "history", "search"]  |
| C1 | R-04_1440_Signed-in | gl-filter | 코드 ["history", "search"] / Figma ["arrow-down", "history", "search"]  |
| C1 | R-04_1920_Guest | gl-filter | 코드 ["history", "search"] / Figma ["arrow-down", "history", "search"]  |
| C1 | R-04_1920_Signed-in | gl-filter | 코드 ["history", "search"] / Figma ["arrow-down", "history", "search"]  |
| C1 | R-04_360_Guest | gl-filter | 코드 ["history", "search"] / Figma ["arrow-down", "history", "search"]  |
| C1 | R-04_360_Signed-in | gl-filter | 코드 ["history", "search"] / Figma ["arrow-down", "history", "search"]  |
| … | 나머지 2건 | | 화면별: R-04 10 |

## 아이콘 · commit-bar (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-02_1024_Guest | commit-bar | 코드 ["copy"] / Figma ["copy", "ellipsis-horizontal"]  |
| C1 | R-02_1024_Signed-in | commit-bar | 코드 ["copy"] / Figma ["copy", "ellipsis-horizontal"]  |
| C1 | R-02_1440_Guest | commit-bar | 코드 ["copy"] / Figma ["copy", "ellipsis-horizontal"]  |
| C1 | R-02_1440_Signed-in | commit-bar | 코드 ["copy"] / Figma ["copy", "ellipsis-horizontal"]  |
| C1 | R-02_1920_Guest | commit-bar | 코드 ["copy"] / Figma ["copy", "ellipsis-horizontal"]  |
| C1 | R-02_1920_Signed-in | commit-bar | 코드 ["copy"] / Figma ["copy", "ellipsis-horizontal"]  |
| C1 | R-02_360_Guest | commit-bar | 코드 ["copy"] / Figma ["copy", "ellipsis-horizontal"]  |
| C1 | R-02_360_Signed-in | commit-bar | 코드 ["copy"] / Figma ["copy", "ellipsis-horizontal"]  |
| … | 나머지 2건 | | 화면별: R-02 10 |

## 위치/크기 · file-table · h (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-02_1024_Guest | file-table | h: 코드 1841 / Figma 926 |
| C1 | R-02_1024_Signed-in | file-table | h: 코드 1841 / Figma 926 |
| C1 | R-02_1440_Guest | file-table | h: 코드 1841 / Figma 926 |
| C1 | R-02_1440_Signed-in | file-table | h: 코드 1841 / Figma 926 |
| C1 | R-02_1920_Guest | file-table | h: 코드 1841 / Figma 926 |
| C1 | R-02_1920_Signed-in | file-table | h: 코드 1841 / Figma 926 |
| C1 | R-02_360_Guest | file-table | h: 코드 1800 / Figma 883 |
| C1 | R-02_360_Signed-in | file-table | h: 코드 1800 / Figma 883 |
| … | 나머지 2건 | | 화면별: R-02 10 |

## 색 · gl-filter (20건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-04_1024_Guest | gl-filter | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  |
| C1 | R-04_1024_Signed-in | gl-filter | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  |
| C1 | R-04_1440_Guest | gl-filter | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  |
| C1 | R-04_1440_Signed-in | gl-filter | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  |
| C1 | R-04_1920_Guest | gl-filter | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  |
| C1 | R-04_1920_Signed-in | gl-filter | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  |
| C1 | R-04_360_Guest | gl-filter | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  |
| C1 | R-04_360_Signed-in | gl-filter | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  |
| … | 나머지 12건 | | 화면별: R-04 10, R-07 10 |

## Figma에만 · header (20건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | header | Figma에만 {"x": 0, "y": 0, "w": 1024, "h": 65} |
| C2 | R-26_1024_Guest | header#2 | Figma에만 {"x": 0, "y": 0, "w": 1024, "h": 65} |
| C2 | R-26_1024_Signed-in | header | Figma에만 {"x": 0, "y": 0, "w": 1024, "h": 65} |
| C2 | R-26_1024_Signed-in | header#2 | Figma에만 {"x": 0, "y": 0, "w": 1024, "h": 65} |
| C2 | R-26_1440_Guest | header | Figma에만 {"x": 0, "y": 0, "w": 1440, "h": 65} |
| C2 | R-26_1440_Guest | header#2 | Figma에만 {"x": 0, "y": 0, "w": 1440, "h": 65} |
| C2 | R-26_1440_Signed-in | header | Figma에만 {"x": 0, "y": 0, "w": 1440, "h": 65} |
| C2 | R-26_1440_Signed-in | header#2 | Figma에만 {"x": 0, "y": 0, "w": 1440, "h": 65} |
| … | 나머지 12건 | | 화면별: R-26 20 |

## 위치/크기 · commit-bar · y (12건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-02_1024_Guest | commit-bar | y: 코드 233 / Figma 225 |
| C1 | R-02_1024_Signed-in | commit-bar | y: 코드 233 / Figma 225 |
| C1 | R-02_1440_Guest | commit-bar | y: 코드 233 / Figma 225 |
| C1 | R-02_1440_Signed-in | commit-bar | y: 코드 233 / Figma 225 |
| C1 | R-02_1920_Guest | commit-bar | y: 코드 233 / Figma 225 |
| C1 | R-02_1920_Signed-in | commit-bar | y: 코드 233 / Figma 225 |
| C1 | R-02_360_Guest | commit-bar | y: 코드 273 / Figma 217 |
| C1 | R-02_360_Signed-in | commit-bar | y: 코드 273 / Figma 217 |
| … | 나머지 4건 | | 화면별: R-02 10, R-03 2 |

## 위치/크기 · gl-filter · h (4건)
- 고칠 쪽: **Figma** / 확정도: 기록 인용(문서·커밋 문구, 직접 재확인 안 함)
- 근거: UX/audit_v3/M7_to_figma.md·M7_C_resolution.md: D-21 조작 32, PC 65, 모바일 105 확정. Figma 모바일 2건 전달
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-16_360_Guest | gl-filter | h: 코드 105 / Figma 119 |
| C2 | R-16_360_Signed-in | gl-filter | h: 코드 105 / Figma 119 |
| C2 | R-20_360_Guest | gl-filter | h: 코드 105 / Figma 65 |
| C2 | R-20_360_Signed-in | gl-filter | h: 코드 105 / Figma 65 |

## 위치/크기 · file-table · y (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-02_1024_Guest | file-table | y: 코드 299 / Figma 307 |
| C1 | R-02_1024_Signed-in | file-table | y: 코드 299 / Figma 307 |
| C1 | R-02_1440_Guest | file-table | y: 코드 299 / Figma 307 |
| C1 | R-02_1440_Signed-in | file-table | y: 코드 299 / Figma 307 |
| C1 | R-02_1920_Guest | file-table | y: 코드 299 / Figma 307 |
| C1 | R-02_1920_Signed-in | file-table | y: 코드 299 / Figma 307 |
| C1 | R-02_360_Guest | file-table | y: 코드 427 / Figma 299 |
| C1 | R-02_360_Signed-in | file-table | y: 코드 427 / Figma 299 |
| … | 나머지 2건 | | 화면별: R-02 10 |

## 위치/크기 · gl-tabs · h (16건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-14_1024_Guest | gl-tabs | h: 코드 47 / Figma 49 |
| C2 | R-14_1024_Signed-in | gl-tabs | h: 코드 47 / Figma 49 |
| C2 | R-14_1440_Guest | gl-tabs | h: 코드 47 / Figma 49 |
| C2 | R-14_1440_Signed-in | gl-tabs | h: 코드 47 / Figma 49 |
| C2 | R-14_1920_Guest | gl-tabs | h: 코드 47 / Figma 49 |
| C2 | R-14_1920_Signed-in | gl-tabs | h: 코드 47 / Figma 49 |
| C2 | R-14_360_Guest | gl-tabs | h: 코드 47 / Figma 49 |
| C2 | R-14_360_Signed-in | gl-tabs | h: 코드 47 / Figma 49 |
| … | 나머지 8건 | | 화면별: R-14 10, R-24 4, R-16 2 |

## 위치/크기 · tabs · y (13건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-17_1024_Guest | tabs | y: 코드 231 / Figma 221 |
| C2 | R-17_1024_Signed-in | tabs | y: 코드 231 / Figma 221 |
| C2 | R-17_1440_Guest | tabs | y: 코드 231 / Figma 221 |
| C2 | R-17_1440_Signed-in | tabs | y: 코드 231 / Figma 221 |
| C2 | R-17_1920_Guest | tabs | y: 코드 231 / Figma 221 |
| C2 | R-17_1920_Signed-in | tabs | y: 코드 231 / Figma 221 |
| C2 | R-17_768_Guest | tabs | y: 코드 259 / Figma 243 |
| C2 | R-17_768_Signed-in | tabs | y: 코드 259 / Figma 243 |
| … | 나머지 5건 | | 화면별: R-17 8, R-27 5 |

## 위치/크기 · section-title · x (4건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Signed-in | section-title | x: 코드 40 / Figma 24 |
| C2 | R-26_1440_Signed-in | section-title | x: 코드 296 / Figma 240 |
| C2 | R-26_360_Signed-in | section-title | x: 코드 16 / Figma 24 |
| C2 | R-26_768_Signed-in | section-title | x: 코드 32 / Figma 24 |

## 위치/크기 · footer · x (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | footer | x: 코드 40 / Figma 0 |
| C2 | R-26_1024_Signed-in | footer | x: 코드 40 / Figma 0 |
| C2 | R-26_1440_Guest | footer | x: 코드 296 / Figma 0 |
| C2 | R-26_1440_Signed-in | footer | x: 코드 296 / Figma 0 |
| C2 | R-26_1920_Guest | footer | x: 코드 480 / Figma 0 |
| C2 | R-26_1920_Signed-in | footer | x: 코드 480 / Figma 0 |
| C2 | R-26_360_Guest | footer | x: 코드 16 / Figma 0 |
| C2 | R-26_360_Signed-in | footer | x: 코드 16 / Figma 0 |
| … | 나머지 2건 | | 화면별: R-26 10 |

## 위치/크기 · footer · w (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | footer | w: 코드 944 / Figma 1024 |
| C2 | R-26_1024_Signed-in | footer | w: 코드 944 / Figma 1024 |
| C2 | R-26_1440_Guest | footer | w: 코드 1088 / Figma 1440 |
| C2 | R-26_1440_Signed-in | footer | w: 코드 1088 / Figma 1440 |
| C2 | R-26_1920_Guest | footer | w: 코드 1200 / Figma 1920 |
| C2 | R-26_1920_Signed-in | footer | w: 코드 1200 / Figma 1920 |
| C2 | R-26_360_Guest | footer | w: 코드 328 / Figma 360 |
| C2 | R-26_360_Signed-in | footer | w: 코드 328 / Figma 360 |
| … | 나머지 2건 | | 화면별: R-26 10 |

## 위치/크기 · preview · y (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-03_1024_Guest | preview | y: 코드 357 / Figma 364 |
| C1 | R-03_1024_Signed-in | preview | y: 코드 357 / Figma 364 |
| C1 | R-03_1440_Guest | preview | y: 코드 357 / Figma 364 |
| C1 | R-03_1440_Signed-in | preview | y: 코드 357 / Figma 364 |
| C1 | R-03_1920_Guest | preview | y: 코드 357 / Figma 364 |
| C1 | R-03_1920_Signed-in | preview | y: 코드 357 / Figma 364 |
| C1 | R-03_360_Guest | preview | y: 코드 503 / Figma 426 |
| C1 | R-03_360_Signed-in | preview | y: 코드 503 / Figma 426 |
| … | 나머지 2건 | | 화면별: R-03 10 |

## 위치/크기 · preview · h (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-03_1024_Guest | preview | h: 코드 5118 / Figma 5256 |
| C1 | R-03_1024_Signed-in | preview | h: 코드 5118 / Figma 5256 |
| C1 | R-03_1440_Guest | preview | h: 코드 4977 / Figma 5054 |
| C1 | R-03_1440_Signed-in | preview | h: 코드 4977 / Figma 5054 |
| C1 | R-03_1920_Guest | preview | h: 코드 4885 / Figma 4922 |
| C1 | R-03_1920_Signed-in | preview | h: 코드 4885 / Figma 4922 |
| C1 | R-03_360_Guest | preview | h: 코드 6245 / Figma 9050 |
| C1 | R-03_360_Signed-in | preview | h: 코드 6245 / Figma 9050 |
| … | 나머지 2건 | | 화면별: R-03 10 |

## 아이콘 · preview (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-03_1024_Guest | preview | 코드 [] / Figma ["bell", "copy"]  |
| C1 | R-03_1024_Signed-in | preview | 코드 [] / Figma ["bell", "copy"]  |
| C1 | R-03_1440_Guest | preview | 코드 [] / Figma ["bell", "copy"]  |
| C1 | R-03_1440_Signed-in | preview | 코드 [] / Figma ["bell", "copy"]  |
| C1 | R-03_1920_Guest | preview | 코드 [] / Figma ["bell", "copy"]  |
| C1 | R-03_1920_Signed-in | preview | 코드 [] / Figma ["bell", "copy"]  |
| C1 | R-03_360_Guest | preview | 코드 [] / Figma ["bell", "copy"]  |
| C1 | R-03_360_Signed-in | preview | 코드 [] / Figma ["bell", "copy"]  |
| … | 나머지 2건 | | 화면별: R-03 10 |

## 모서리·안쪽·간격 · gl-filter (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-04_1024_Guest | gl-filter | 코드 null / Figma null 간격 8→0 |
| C1 | R-04_1024_Signed-in | gl-filter | 코드 null / Figma null 간격 8→0 |
| C1 | R-04_1440_Guest | gl-filter | 코드 null / Figma null 간격 8→0 |
| C1 | R-04_1440_Signed-in | gl-filter | 코드 null / Figma null 간격 8→0 |
| C1 | R-04_1920_Guest | gl-filter | 코드 null / Figma null 간격 8→0 |
| C1 | R-04_1920_Signed-in | gl-filter | 코드 null / Figma null 간격 8→0 |
| C1 | R-04_360_Guest | gl-filter | 코드 null / Figma null 간격 8→0 |
| C1 | R-04_360_Signed-in | gl-filter | 코드 null / Figma null 간격 8→0 |
| … | 나머지 2건 | | 화면별: R-04 10 |

## 위치/크기 · diff-area · y (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-05_1024_Guest | diff-area | y: 코드 574 / Figma 525 |
| C1 | R-05_1024_Signed-in | diff-area | y: 코드 574 / Figma 525 |
| C1 | R-05_1440_Guest | diff-area | y: 코드 574 / Figma 525 |
| C1 | R-05_1440_Signed-in | diff-area | y: 코드 574 / Figma 525 |
| C1 | R-05_1920_Guest | diff-area | y: 코드 574 / Figma 525 |
| C1 | R-05_1920_Signed-in | diff-area | y: 코드 574 / Figma 525 |
| C1 | R-05_360_Guest | diff-area | y: 코드 730 / Figma 593 |
| C1 | R-05_360_Signed-in | diff-area | y: 코드 730 / Figma 593 |
| … | 나머지 2건 | | 화면별: R-05 10 |

## 위치/크기 · diff-area · h (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-05_1024_Guest | diff-area | h: 코드 6783 / Figma 1389 |
| C1 | R-05_1024_Signed-in | diff-area | h: 코드 6783 / Figma 1389 |
| C1 | R-05_1440_Guest | diff-area | h: 코드 6783 / Figma 1389 |
| C1 | R-05_1440_Signed-in | diff-area | h: 코드 6783 / Figma 1389 |
| C1 | R-05_1920_Guest | diff-area | h: 코드 6768 / Figma 1389 |
| C1 | R-05_1920_Signed-in | diff-area | h: 코드 6768 / Figma 1389 |
| C1 | R-05_360_Guest | diff-area | h: 코드 7396 / Figma 1239 |
| C1 | R-05_360_Signed-in | diff-area | h: 코드 7396 / Figma 1239 |
| … | 나머지 2건 | | 화면별: R-05 10 |

## 아이콘 · diff-area (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-05_1024_Guest | diff-area | 코드 ["arrow-down", "file:json", "file:markdown", "file:nodejs",  / Figma ["expand-less", "expand-more"]  |
| C1 | R-05_1024_Signed-in | diff-area | 코드 ["arrow-down", "file:json", "file:markdown", "file:nodejs",  / Figma ["expand-less", "expand-more"]  |
| C1 | R-05_1440_Guest | diff-area | 코드 ["arrow-down", "file:json", "file:markdown", "file:nodejs",  / Figma ["expand-less", "expand-more", "icon-file/json", "icon-file/  |
| C1 | R-05_1440_Signed-in | diff-area | 코드 ["arrow-down", "file:json", "file:markdown", "file:nodejs",  / Figma ["expand-less", "expand-more", "icon-file/json", "icon-file/  |
| C1 | R-05_1920_Guest | diff-area | 코드 ["arrow-down", "file:json", "file:markdown", "file:nodejs",  / Figma ["expand-less", "expand-more", "icon-file/json", "icon-file/  |
| C1 | R-05_1920_Signed-in | diff-area | 코드 ["arrow-down", "file:json", "file:markdown", "file:nodejs",  / Figma ["expand-less", "expand-more", "icon-file/json", "icon-file/  |
| C1 | R-05_360_Guest | diff-area | 코드 ["arrow-down", "file:json", "file:markdown", "file:nodejs",  / Figma ["expand-less", "expand-more"]  |
| C1 | R-05_360_Signed-in | diff-area | 코드 ["arrow-down", "file:json", "file:markdown", "file:nodejs",  / Figma ["expand-less", "expand-more"]  |
| … | 나머지 2건 | | 화면별: R-05 10 |

## 위치/크기 · diff-file · y (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-05_1024_Guest | diff-file | y: 코드 574 / Figma 525 |
| C1 | R-05_1024_Signed-in | diff-file | y: 코드 574 / Figma 525 |
| C1 | R-05_1440_Guest | diff-file | y: 코드 574 / Figma 525 |
| C1 | R-05_1440_Signed-in | diff-file | y: 코드 574 / Figma 525 |
| C1 | R-05_1920_Guest | diff-file | y: 코드 574 / Figma 525 |
| C1 | R-05_1920_Signed-in | diff-file | y: 코드 574 / Figma 525 |
| C1 | R-05_360_Guest | diff-file | y: 코드 1343 / Figma 593 |
| C1 | R-05_360_Signed-in | diff-file | y: 코드 1343 / Figma 593 |
| … | 나머지 2건 | | 화면별: R-05 10 |

## 위치/크기 · diff-file · h (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-05_1024_Guest | diff-file | h: 코드 564 / Figma 723 |
| C1 | R-05_1024_Signed-in | diff-file | h: 코드 564 / Figma 723 |
| C1 | R-05_1440_Guest | diff-file | h: 코드 564 / Figma 723 |
| C1 | R-05_1440_Signed-in | diff-file | h: 코드 564 / Figma 723 |
| C1 | R-05_1920_Guest | diff-file | h: 코드 564 / Figma 723 |
| C1 | R-05_1920_Signed-in | diff-file | h: 코드 564 / Figma 723 |
| C1 | R-05_360_Guest | diff-file | h: 코드 564 / Figma 735 |
| C1 | R-05_360_Signed-in | diff-file | h: 코드 564 / Figma 735 |
| … | 나머지 2건 | | 화면별: R-05 10 |

## 아이콘 · diff-file (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-05_1024_Guest | diff-file | 코드 ["arrow-down", "copy", "download", "ellipsis-vertical", "upl / Figma ["expand-less"]  |
| C1 | R-05_1024_Signed-in | diff-file | 코드 ["arrow-down", "copy", "download", "ellipsis-vertical", "upl / Figma ["expand-less"]  |
| C1 | R-05_1440_Guest | diff-file | 코드 ["arrow-down", "copy", "download", "ellipsis-vertical", "upl / Figma ["expand-less"]  |
| C1 | R-05_1440_Signed-in | diff-file | 코드 ["arrow-down", "copy", "download", "ellipsis-vertical", "upl / Figma ["expand-less"]  |
| C1 | R-05_1920_Guest | diff-file | 코드 ["arrow-down", "copy", "download", "ellipsis-vertical", "upl / Figma ["expand-less"]  |
| C1 | R-05_1920_Signed-in | diff-file | 코드 ["arrow-down", "copy", "download", "ellipsis-vertical", "upl / Figma ["expand-less"]  |
| C1 | R-05_360_Guest | diff-file | 코드 ["arrow-down", "copy", "download", "ellipsis-vertical", "upl / Figma ["expand-less"]  |
| C1 | R-05_360_Signed-in | diff-file | 코드 ["arrow-down", "copy", "download", "ellipsis-vertical", "upl / Figma ["expand-less"]  |
| … | 나머지 2건 | | 화면별: R-05 10 |

## 위치/크기 · filter-clear · x (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-11_1024_Guest | filter-clear | x: 코드 815 / Figma 835 |
| C2 | R-11_1024_Signed-in | filter-clear | x: 코드 815 / Figma 835 |
| C2 | R-11_1440_Guest | filter-clear | x: 코드 1215 / Figma 1235 |
| C2 | R-11_1440_Signed-in | filter-clear | x: 코드 1215 / Figma 1235 |
| C2 | R-11_1920_Guest | filter-clear | x: 코드 1511 / Figma 1531 |
| C2 | R-11_1920_Signed-in | filter-clear | x: 코드 1511 / Figma 1531 |
| C2 | R-11_360_Guest | filter-clear | x: 코드 276 / Figma 263 |
| C2 | R-11_360_Signed-in | filter-clear | x: 코드 276 / Figma 263 |
| … | 나머지 2건 | | 화면별: R-11 10 |

## 색 · filter-clear (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-11_1024_Guest | filter-clear | 코드 "null " / Figma "#33363d color/layout/panel-border"  |
| C2 | R-11_1024_Signed-in | filter-clear | 코드 "null " / Figma "#33363d color/layout/panel-border"  |
| C2 | R-11_1440_Guest | filter-clear | 코드 "null " / Figma "#33363d color/layout/panel-border"  |
| C2 | R-11_1440_Signed-in | filter-clear | 코드 "null " / Figma "#33363d color/layout/panel-border"  |
| C2 | R-11_1920_Guest | filter-clear | 코드 "null " / Figma "#33363d color/layout/panel-border"  |
| C2 | R-11_1920_Signed-in | filter-clear | 코드 "null " / Figma "#33363d color/layout/panel-border"  |
| C2 | R-11_360_Guest | filter-clear | 코드 "null " / Figma "#33363d color/layout/panel-border"  |
| C2 | R-11_360_Signed-in | filter-clear | 코드 "null " / Figma "#33363d color/layout/panel-border"  |
| … | 나머지 2건 | | 화면별: R-11 10 |

## 모서리·안쪽·간격 · filter-clear (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-11_1024_Guest | filter-clear | 코드 null / Figma null 모서리 0→8 |
| C2 | R-11_1024_Signed-in | filter-clear | 코드 null / Figma null 모서리 0→8 |
| C2 | R-11_1440_Guest | filter-clear | 코드 null / Figma null 모서리 0→8 |
| C2 | R-11_1440_Signed-in | filter-clear | 코드 null / Figma null 모서리 0→8 |
| C2 | R-11_1920_Guest | filter-clear | 코드 null / Figma null 모서리 0→8 |
| C2 | R-11_1920_Signed-in | filter-clear | 코드 null / Figma null 모서리 0→8 |
| C2 | R-11_360_Guest | filter-clear | 코드 null / Figma null 모서리 0→8 |
| C2 | R-11_360_Signed-in | filter-clear | 코드 null / Figma null 모서리 0→8 |
| … | 나머지 2건 | | 화면별: R-11 10 |

## 모서리·안쪽·간격 · filter-display (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-13_1024_Guest | filter-display | 코드 null / Figma null 모서리 0→8 |
| C2 | R-13_1024_Signed-in | filter-display | 코드 null / Figma null 모서리 0→8 |
| C2 | R-13_1440_Guest | filter-display | 코드 null / Figma null 모서리 0→8 |
| C2 | R-13_1440_Signed-in | filter-display | 코드 null / Figma null 모서리 0→8 |
| C2 | R-13_1920_Guest | filter-display | 코드 null / Figma null 모서리 0→8 |
| C2 | R-13_1920_Signed-in | filter-display | 코드 null / Figma null 모서리 0→8 |
| C2 | R-13_360_Guest | filter-display | 코드 null / Figma null 모서리 0→8 |
| C2 | R-13_360_Signed-in | filter-display | 코드 null / Figma null 모서리 0→8 |
| … | 나머지 2건 | | 화면별: R-13 10 |

## 모서리·안쪽·간격 · filter-settings (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-13_1024_Guest | filter-settings | 코드 null / Figma null 모서리 0→8 |
| C2 | R-13_1024_Signed-in | filter-settings | 코드 null / Figma null 모서리 0→8 |
| C2 | R-13_1440_Guest | filter-settings | 코드 null / Figma null 모서리 0→8 |
| C2 | R-13_1440_Signed-in | filter-settings | 코드 null / Figma null 모서리 0→8 |
| C2 | R-13_1920_Guest | filter-settings | 코드 null / Figma null 모서리 0→8 |
| C2 | R-13_1920_Signed-in | filter-settings | 코드 null / Figma null 모서리 0→8 |
| C2 | R-13_360_Guest | filter-settings | 코드 null / Figma null 모서리 0→8 |
| C2 | R-13_360_Signed-in | filter-settings | 코드 null / Figma null 모서리 0→8 |
| … | 나머지 2건 | | 화면별: R-13 10 |

## 모서리·안쪽·간격 · filter-expand (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-13_1024_Guest | filter-expand | 코드 null / Figma null 모서리 0→8 |
| C2 | R-13_1024_Signed-in | filter-expand | 코드 null / Figma null 모서리 0→8 |
| C2 | R-13_1440_Guest | filter-expand | 코드 null / Figma null 모서리 0→8 |
| C2 | R-13_1440_Signed-in | filter-expand | 코드 null / Figma null 모서리 0→8 |
| C2 | R-13_1920_Guest | filter-expand | 코드 null / Figma null 모서리 0→8 |
| C2 | R-13_1920_Signed-in | filter-expand | 코드 null / Figma null 모서리 0→8 |
| C2 | R-13_360_Guest | filter-expand | 코드 null / Figma null 모서리 0→8 |
| C2 | R-13_360_Signed-in | filter-expand | 코드 null / Figma null 모서리 0→8 |
| … | 나머지 2건 | | 화면별: R-13 10 |

## 위치/크기 · gl-tabs · w (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-14_1024_Guest | gl-tabs | w: 코드 641 / Figma 309 |
| C2 | R-14_1024_Signed-in | gl-tabs | w: 코드 641 / Figma 309 |
| C2 | R-14_1440_Guest | gl-tabs | w: 코드 785 / Figma 385 |
| C2 | R-14_1440_Signed-in | gl-tabs | w: 코드 785 / Figma 381 |
| C2 | R-14_1920_Guest | gl-tabs | w: 코드 897 / Figma 437 |
| C2 | R-14_1920_Signed-in | gl-tabs | w: 코드 897 / Figma 437 |
| C2 | R-14_360_Guest | gl-tabs | w: 코드 25 / Figma 1 |
| C2 | R-14_360_Signed-in | gl-tabs | w: 코드 25 / Figma 1 |
| … | 나머지 2건 | | 화면별: R-14 10 |

## 코드에만 · filter-search (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-14_1024_Guest | filter-search | 코드에만 있음 |
| C2 | R-14_1024_Signed-in | filter-search | 코드에만 있음 |
| C2 | R-14_1440_Guest | filter-search | 코드에만 있음 |
| C2 | R-14_1440_Signed-in | filter-search | 코드에만 있음 |
| C2 | R-14_1920_Guest | filter-search | 코드에만 있음 |
| C2 | R-14_1920_Signed-in | filter-search | 코드에만 있음 |
| C2 | R-14_360_Guest | filter-search | 코드에만 있음 |
| C2 | R-14_360_Signed-in | filter-search | 코드에만 있음 |
| … | 나머지 2건 | | 화면별: R-14 10 |

## 위치/크기 · code-button · x (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-17_1024_Guest | code-button | x: 코드 920 / Figma 922 |
| C2 | R-17_1024_Signed-in | code-button | x: 코드 920 / Figma 922 |
| C2 | R-17_1440_Guest | code-button | x: 코드 1320 / Figma 1322 |
| C2 | R-17_1440_Signed-in | code-button | x: 코드 1320 / Figma 1322 |
| C2 | R-17_1920_Guest | code-button | x: 코드 1616 / Figma 1618 |
| C2 | R-17_1920_Signed-in | code-button | x: 코드 1616 / Figma 1618 |
| C2 | R-17_360_Guest | code-button | x: 코드 280 / Figma 282 |
| C2 | R-17_360_Signed-in | code-button | x: 코드 280 / Figma 282 |
| … | 나머지 2건 | | 화면별: R-17 10 |

## 위치/크기 · code-button · y (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-17_1024_Guest | code-button | y: 코드 121 / Figma 125 |
| C2 | R-17_1024_Signed-in | code-button | y: 코드 121 / Figma 125 |
| C2 | R-17_1440_Guest | code-button | y: 코드 121 / Figma 125 |
| C2 | R-17_1440_Signed-in | code-button | y: 코드 121 / Figma 125 |
| C2 | R-17_1920_Guest | code-button | y: 코드 121 / Figma 125 |
| C2 | R-17_1920_Signed-in | code-button | y: 코드 121 / Figma 125 |
| C2 | R-17_360_Guest | code-button | y: 코드 121 / Figma 137 |
| C2 | R-17_360_Signed-in | code-button | y: 코드 121 / Figma 137 |
| … | 나머지 2건 | | 화면별: R-17 10 |

## 위치/크기 · code-button · w (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-17_1024_Guest | code-button | w: 코드 64 / Figma 62 |
| C2 | R-17_1024_Signed-in | code-button | w: 코드 64 / Figma 62 |
| C2 | R-17_1440_Guest | code-button | w: 코드 64 / Figma 62 |
| C2 | R-17_1440_Signed-in | code-button | w: 코드 64 / Figma 62 |
| C2 | R-17_1920_Guest | code-button | w: 코드 64 / Figma 62 |
| C2 | R-17_1920_Signed-in | code-button | w: 코드 64 / Figma 62 |
| C2 | R-17_360_Guest | code-button | w: 코드 64 / Figma 62 |
| C2 | R-17_360_Signed-in | code-button | w: 코드 64 / Figma 62 |
| … | 나머지 2건 | | 화면별: R-17 10 |

## Figma에만 · repo-tabs (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | repo-tabs | Figma에만 {"x": 0, "y": 65, "w": 1024, "h": 48} |
| C2 | R-26_1024_Signed-in | repo-tabs | Figma에만 {"x": 0, "y": 65, "w": 1024, "h": 48} |
| C2 | R-26_1440_Guest | repo-tabs | Figma에만 {"x": 0, "y": 65, "w": 1440, "h": 48} |
| C2 | R-26_1440_Signed-in | repo-tabs | Figma에만 {"x": 0, "y": 65, "w": 1440, "h": 48} |
| C2 | R-26_1920_Guest | repo-tabs | Figma에만 {"x": 0, "y": 65, "w": 1920, "h": 48} |
| C2 | R-26_1920_Signed-in | repo-tabs | Figma에만 {"x": 0, "y": 65, "w": 1920, "h": 48} |
| C2 | R-26_360_Guest | repo-tabs | Figma에만 {"x": 0, "y": 65, "w": 360, "h": 48} |
| C2 | R-26_360_Signed-in | repo-tabs | Figma에만 {"x": 0, "y": 65, "w": 360, "h": 48} |
| … | 나머지 2건 | | 화면별: R-26 10 |

## 색 · footer (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | footer | 코드 "없음 " / Figma "#1e2124 color/surface/gray-subtler"  |
| C2 | R-26_1024_Signed-in | footer | 코드 "없음 " / Figma "#1e2124 color/surface/gray-subtler"  |
| C2 | R-26_1440_Guest | footer | 코드 "없음 " / Figma "#1e2124 color/surface/gray-subtler"  |
| C2 | R-26_1440_Signed-in | footer | 코드 "없음 " / Figma "#1e2124 color/surface/gray-subtler"  |
| C2 | R-26_1920_Guest | footer | 코드 "없음 " / Figma "#1e2124 color/surface/gray-subtler"  |
| C2 | R-26_1920_Signed-in | footer | 코드 "없음 " / Figma "#1e2124 color/surface/gray-subtler"  |
| C2 | R-26_360_Guest | footer | 코드 "없음 " / Figma "#1e2124 color/surface/gray-subtler"  |
| C2 | R-26_360_Signed-in | footer | 코드 "없음 " / Figma "#1e2124 color/surface/gray-subtler"  |
| … | 나머지 2건 | | 화면별: R-26 10 |

## 위치/크기 · body · y (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | body | y: 코드 72 / Figma 113 |
| C2 | R-26_1024_Signed-in | body | y: 코드 72 / Figma 113 |
| C2 | R-26_1440_Guest | body | y: 코드 72 / Figma 113 |
| C2 | R-26_1440_Signed-in | body | y: 코드 72 / Figma 113 |
| C2 | R-26_1920_Guest | body | y: 코드 72 / Figma 113 |
| C2 | R-26_1920_Signed-in | body | y: 코드 72 / Figma 113 |
| C2 | R-26_360_Guest | body | y: 코드 72 / Figma 113 |
| C2 | R-26_360_Signed-in | body | y: 코드 72 / Figma 113 |
| … | 나머지 2건 | | 화면별: R-26 10 |

## 위치/크기 · main · w (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | main | w: 코드 944 / Figma 960 |
| C2 | R-26_1024_Signed-in | main | w: 코드 944 / Figma 960 |
| C2 | R-26_1440_Guest | main | w: 코드 1088 / Figma 960 |
| C2 | R-26_1440_Signed-in | main | w: 코드 1088 / Figma 960 |
| C2 | R-26_1920_Guest | main | w: 코드 1200 / Figma 960 |
| C2 | R-26_1920_Signed-in | main | w: 코드 1200 / Figma 960 |
| C2 | R-26_360_Guest | main | w: 코드 328 / Figma 312 |
| C2 | R-26_360_Signed-in | main | w: 코드 328 / Figma 312 |
| … | 나머지 2건 | | 화면별: R-26 10 |

## 위치/크기 · global-search · x (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | global-search | x: 코드 390 / Figma 328 |
| C2 | R-26_1024_Signed-in | global-search | x: 코드 390 / Figma 328 |
| C2 | R-26_1440_Guest | global-search | x: 코드 548 / Figma 400 |
| C2 | R-26_1440_Signed-in | global-search | x: 코드 548 / Figma 400 |
| C2 | R-26_1920_Guest | global-search | x: 코드 740 / Figma 640 |
| C2 | R-26_1920_Signed-in | global-search | x: 코드 740 / Figma 640 |
| C2 | R-26_360_Guest | global-search | x: 코드 248 / Figma 244 |
| C2 | R-26_360_Signed-in | global-search | x: 코드 196 / Figma 252 |
| … | 나머지 2건 | | 화면별: R-26 10 |

## 위치/크기 · global-search · y (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | global-search | y: 코드 32 / Figma 8 |
| C2 | R-26_1024_Signed-in | global-search | y: 코드 32 / Figma 8 |
| C2 | R-26_1440_Guest | global-search | y: 코드 32 / Figma 8 |
| C2 | R-26_1440_Signed-in | global-search | y: 코드 32 / Figma 8 |
| C2 | R-26_1920_Guest | global-search | y: 코드 32 / Figma 8 |
| C2 | R-26_1920_Signed-in | global-search | y: 코드 32 / Figma 8 |
| C2 | R-26_360_Guest | global-search | y: 코드 26 / Figma 12 |
| C2 | R-26_360_Signed-in | global-search | y: 코드 26 / Figma 12 |
| … | 나머지 2건 | | 화면별: R-26 10 |

## 위치/크기 · global-search · h (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | global-search | h: 코드 32 / Figma 48 |
| C2 | R-26_1024_Signed-in | global-search | h: 코드 32 / Figma 48 |
| C2 | R-26_1440_Guest | global-search | h: 코드 32 / Figma 48 |
| C2 | R-26_1440_Signed-in | global-search | h: 코드 32 / Figma 48 |
| C2 | R-26_1920_Guest | global-search | h: 코드 32 / Figma 48 |
| C2 | R-26_1920_Signed-in | global-search | h: 코드 32 / Figma 48 |
| C2 | R-26_360_Guest | global-search | h: 코드 44 / Figma 40 |
| C2 | R-26_360_Signed-in | global-search | h: 코드 44 / Figma 40 |
| … | 나머지 2건 | | 화면별: R-26 10 |

## 코드에만 · system-band (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | system-band | 코드에만 있음 |
| C2 | R-26_1024_Signed-in | system-band | 코드에만 있음 |
| C2 | R-26_1440_Guest | system-band | 코드에만 있음 |
| C2 | R-26_1440_Signed-in | system-band | 코드에만 있음 |
| C2 | R-26_1920_Guest | system-band | 코드에만 있음 |
| C2 | R-26_1920_Signed-in | system-band | 코드에만 있음 |
| C2 | R-26_360_Guest | system-band | 코드에만 있음 |
| C2 | R-26_360_Signed-in | system-band | 코드에만 있음 |
| … | 나머지 2건 | | 화면별: R-26 10 |

## 코드에만 · topbar (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | topbar | 코드에만 있음 |
| C2 | R-26_1024_Signed-in | topbar | 코드에만 있음 |
| C2 | R-26_1440_Guest | topbar | 코드에만 있음 |
| C2 | R-26_1440_Signed-in | topbar | 코드에만 있음 |
| C2 | R-26_1920_Guest | topbar | 코드에만 있음 |
| C2 | R-26_1920_Signed-in | topbar | 코드에만 있음 |
| C2 | R-26_360_Guest | topbar | 코드에만 있음 |
| C2 | R-26_360_Signed-in | topbar | 코드에만 있음 |
| … | 나머지 2건 | | 화면별: R-26 10 |

## 코드에만 · breadcrumb (10건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | breadcrumb | 코드에만 있음 |
| C2 | R-26_1024_Signed-in | breadcrumb | 코드에만 있음 |
| C2 | R-26_1440_Guest | breadcrumb | 코드에만 있음 |
| C2 | R-26_1440_Signed-in | breadcrumb | 코드에만 있음 |
| C2 | R-26_1920_Guest | breadcrumb | 코드에만 있음 |
| C2 | R-26_1920_Signed-in | breadcrumb | 코드에만 있음 |
| C2 | R-26_360_Guest | breadcrumb | 코드에만 있음 |
| C2 | R-26_360_Signed-in | breadcrumb | 코드에만 있음 |
| … | 나머지 2건 | | 화면별: R-26 10 |

## 위치/크기 · main · x (9건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | main | x: 코드 40 / Figma 24 |
| C2 | R-26_1024_Signed-in | main | x: 코드 40 / Figma 24 |
| C2 | R-26_1440_Guest | main | x: 코드 296 / Figma 240 |
| C2 | R-26_1440_Signed-in | main | x: 코드 296 / Figma 240 |
| C2 | R-26_1920_Guest | main | x: 코드 480 / Figma 488 |
| C2 | R-26_360_Guest | main | x: 코드 16 / Figma 24 |
| C2 | R-26_360_Signed-in | main | x: 코드 16 / Figma 24 |
| C2 | R-26_768_Guest | main | x: 코드 32 / Figma 24 |
| … | 나머지 1건 | | 화면별: R-26 9 |

## 아이콘 · gitlab-sidebar (4건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-28_1440_Guest | gitlab-sidebar | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| C1 | R-28_1440_Signed-in | gitlab-sidebar | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| C1 | R-28_1920_Guest | gitlab-sidebar | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| C1 | R-28_1920_Signed-in | gitlab-sidebar | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |

## 아이콘 · sidebar-nav (4건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-28_1440_Guest | sidebar-nav | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| C1 | R-28_1440_Signed-in | sidebar-nav | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| C1 | R-28_1920_Guest | sidebar-nav | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| C1 | R-28_1920_Signed-in | sidebar-nav | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |

## 위치/크기 · commit-bar · h (4건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-02_360_Guest | commit-bar | h: 코드 154 / Figma 66 |
| C1 | R-02_360_Signed-in | commit-bar | h: 코드 154 / Figma 66 |
| C1 | R-03_360_Guest | commit-bar | h: 코드 118 / Figma 66 |
| C1 | R-03_360_Signed-in | commit-bar | h: 코드 118 / Figma 66 |

## 위치/크기 · diff-file · x (6건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-05_1024_Guest | diff-file | x: 코드 294 / Figma 40 |
| C1 | R-05_1024_Signed-in | diff-file | x: 코드 294 / Figma 40 |
| C1 | R-05_1440_Guest | diff-file | x: 코드 586 / Figma 580 |
| C1 | R-05_1440_Signed-in | diff-file | x: 코드 586 / Figma 580 |
| C1 | R-05_1920_Guest | diff-file | x: 코드 798 / Figma 764 |
| C1 | R-05_1920_Signed-in | diff-file | x: 코드 798 / Figma 764 |

## 위치/크기 · diff-file · w (6건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-05_1024_Guest | diff-file | w: 코드 690 / Figma 944 |
| C1 | R-05_1024_Signed-in | diff-file | w: 코드 690 / Figma 944 |
| C1 | R-05_1440_Guest | diff-file | w: 코드 798 / Figma 804 |
| C1 | R-05_1440_Signed-in | diff-file | w: 코드 798 / Figma 804 |
| C1 | R-05_1920_Guest | diff-file | w: 코드 882 / Figma 916 |
| C1 | R-05_1920_Signed-in | diff-file | w: 코드 882 / Figma 916 |

## 위치/크기 · global-search · w (6건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | global-search | w: 코드 244 / Figma 368 |
| C2 | R-26_1024_Signed-in | global-search | w: 코드 244 / Figma 364 |
| C2 | R-26_1440_Guest | global-search | w: 코드 344 / Figma 640 |
| C2 | R-26_1440_Signed-in | global-search | w: 코드 344 / Figma 640 |
| C2 | R-26_1920_Guest | global-search | w: 코드 440 / Figma 640 |
| C2 | R-26_1920_Signed-in | global-search | w: 코드 440 / Figma 640 |

## 문구 · global-search (6건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | global-search | 코드 "검색 또는 이동… /" / Figma ["검색 또는 이동... /"]  |
| C2 | R-26_1024_Signed-in | global-search | 코드 "검색 또는 이동… /" / Figma ["검색 또는 이동... /"]  |
| C2 | R-26_1440_Guest | global-search | 코드 "검색 또는 이동… /" / Figma ["검색 또는 이동... /"]  |
| C2 | R-26_1440_Signed-in | global-search | 코드 "검색 또는 이동… /" / Figma ["검색 또는 이동... /"]  |
| C2 | R-26_1920_Guest | global-search | 코드 "검색 또는 이동… /" / Figma ["검색 또는 이동... /"]  |
| C2 | R-26_1920_Signed-in | global-search | 코드 "검색 또는 이동… /" / Figma ["검색 또는 이동... /"]  |

## 글자 속성 · global-search (6건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | global-search | 코드 null / Figma null 크기 17→15, 줄 높이 26→22 |
| C2 | R-26_1024_Signed-in | global-search | 코드 null / Figma null 크기 17→15, 줄 높이 26→22 |
| C2 | R-26_1440_Guest | global-search | 코드 null / Figma null 크기 17→15, 줄 높이 26→22 |
| C2 | R-26_1440_Signed-in | global-search | 코드 null / Figma null 크기 17→15, 줄 높이 26→22 |
| C2 | R-26_1920_Guest | global-search | 코드 null / Figma null 크기 17→15, 줄 높이 26→22 |
| C2 | R-26_1920_Signed-in | global-search | 코드 null / Figma null 크기 17→15, 줄 높이 26→22 |

## Figma에만 · repo-path (6건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | repo-path | Figma에만 {"x": 138, "y": 21, "w": 49, "h": 22} |
| C2 | R-26_1024_Signed-in | repo-path | Figma에만 {"x": 138, "y": 21, "w": 49, "h": 22} |
| C2 | R-26_1440_Guest | repo-path | Figma에만 {"x": 138, "y": 21, "w": 222, "h": 22} |
| C2 | R-26_1440_Signed-in | repo-path | Figma에만 {"x": 138, "y": 21, "w": 222, "h": 22} |
| C2 | R-26_1920_Guest | repo-path | Figma에만 {"x": 138, "y": 21, "w": 222, "h": 22} |
| C2 | R-26_1920_Signed-in | repo-path | Figma에만 {"x": 138, "y": 21, "w": 222, "h": 22} |

## Figma에만 · comment-editor (5건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-12_1024_Signed-in | comment-editor | Figma에만 {"x": 40, "y": 717, "w": 944, "h": 122} |
| C2 | R-12_1440_Signed-in | comment-editor | Figma에만 {"x": 296, "y": 717, "w": 808, "h": 122} |
| C2 | R-12_1920_Signed-in | comment-editor | Figma에만 {"x": 480, "y": 717, "w": 920, "h": 122} |
| C2 | R-12_360_Signed-in | comment-editor | Figma에만 {"x": 16, "y": 1115, "w": 328, "h": 122} |
| C2 | R-12_768_Signed-in | comment-editor | Figma에만 {"x": 32, "y": 801, "w": 704, "h": 122} |

## 글자 속성 · main (5건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-22_1024_Guest | main | 코드 null / Figma null 크기 24→19, 줄 높이 32→28 |
| C2 | R-22_1440_Guest | main | 코드 null / Figma null 크기 24→19, 줄 높이 32→28 |
| C2 | R-22_1920_Guest | main | 코드 null / Figma null 크기 24→19, 줄 높이 32→28 |
| C2 | R-22_360_Guest | main | 코드 null / Figma null 크기 24→19, 줄 높이 32→28 |
| C2 | R-22_768_Guest | main | 코드 null / Figma null 크기 24→19, 줄 높이 32→28 |

## 코드에만 · tabs (5건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-27_1024_Guest | tabs | 코드에만 있음 |
| C1 | R-27_1440_Guest | tabs | 코드에만 있음 |
| C1 | R-27_1920_Guest | tabs | 코드에만 있음 |
| C1 | R-27_360_Guest | tabs | 코드에만 있음 |
| C1 | R-27_768_Guest | tabs | 코드에만 있음 |

## 문구 · tabs (5건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-27_1024_Signed-in | tabs | 코드 "파일 편집" / Figma ["미리보기"]  |
| C1 | R-27_1440_Signed-in | tabs | 코드 "파일 편집" / Figma ["미리보기"]  |
| C1 | R-27_1920_Signed-in | tabs | 코드 "파일 편집" / Figma ["미리보기"]  |
| C1 | R-27_360_Signed-in | tabs | 코드 "파일 편집" / Figma ["미리보기"]  |
| C1 | R-27_768_Signed-in | tabs | 코드 "파일 편집" / Figma ["미리보기"]  |

## 코드에만 · gitlab-sidebar (4건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1440_Guest | gitlab-sidebar | 코드에만 있음 |
| C2 | R-26_1440_Signed-in | gitlab-sidebar | 코드에만 있음 |
| C2 | R-26_1920_Guest | gitlab-sidebar | 코드에만 있음 |
| C2 | R-26_1920_Signed-in | gitlab-sidebar | 코드에만 있음 |

## 코드에만 · sidebar-nav (4건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1440_Guest | sidebar-nav | 코드에만 있음 |
| C2 | R-26_1440_Signed-in | sidebar-nav | 코드에만 있음 |
| C2 | R-26_1920_Guest | sidebar-nav | 코드에만 있음 |
| C2 | R-26_1920_Signed-in | sidebar-nav | 코드에만 있음 |

## 모서리·안쪽·간격 · diff-area (2건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-05_360_Guest | diff-area | 코드 null / Figma null 간격 24→16 |
| C1 | R-05_360_Signed-in | diff-area | 코드 null / Figma null 간격 24→16 |

## 위치/크기 · tabs · h (2건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-17_360_Guest | tabs | h: 코드 48 / Figma 104 |
| C2 | R-17_360_Signed-in | tabs | h: 코드 48 / Figma 104 |

## 글자 속성 · page-head (2건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-23_360_Guest | page-head | 코드 null / Figma null 크기 24→32, 줄 높이 32→40 |
| C2 | R-23_360_Signed-in | page-head | 코드 null / Figma null 크기 24→32, 줄 높이 32→40 |

## 위치/크기 · gl-tabs · y (2건)
- 고칠 쪽: **미판정** / 확정도: 미판정
- 근거: 실측 파일과 대조하지 못했다(원인 묶음 158개 중 이 묶음은 이번에 판정하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-23_360_Guest | gl-tabs | y: 코드 241 / Figma 233 |
| C2 | R-23_360_Signed-in | gl-tabs | y: 코드 241 / Figma 233 |
