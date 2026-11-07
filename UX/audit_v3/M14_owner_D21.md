# M-14 담당 D21 작업 목록

- 생성: M-14 측정(코드 20ed235, 개발 서버 5994, 고정 시각 now=2026-11-07T10:00:00+09:00, 스크롤 막대 0, 비동기 대기) 대 Figma 합본 figma_full.json 2026-11-07 17:32(598 변형, 요소 7,158)
- 판정은 행 단위로 가장 최근 판정표(M8_decision_rows.json, M9_decision_rows.json, M10_active_decisions.json, M11_active_decisions.json)를 이어받았다. 행에 판정이 없으면 '신규, 판정 필요'. 판정 완료는 수정 완료가 아니다
- 판정 쪽별 합계(이 담당): 코드 280, 신규 판정 필요 170, Figma 101, 사용자확인 5

## 문구 · profile-event (60건, M-13 0건)
- 고칠 쪽: **신규 판정 필요** 48건, **Figma(M11)** 12건
- 근거 예: UX/07 5·10·11·13절; P11_Organizations useCounts; P33_Profile ago; 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-12_1440_Guest | profile-event | 코드 "Pushed new tag v4.24.50 at 서울특별시 광진구 류승인 / kordoc 1da168a0  / Figma ["Pushed new tag v4.24.49 at 서울특별시 광진구 류승인 / kordoc", "3f9b3  | Figma |
| D21 | G-12_1440_Guest | profile-event#2 | 코드 "Pushed to branch main at 서울특별시 광진구 류승인 / kordoc 1da168a0 ·  / Figma ["3f9b3c4a · release: 4.24.49", "... and 6 more commits.", "  | Figma |
| D21 | G-12_1440_Guest | profile-event#3 | 코드 "Pushed new tag v4.24.49 at 서울특별시 광진구 류승인 / kordoc 3f9b3c4a  / Figma ["Pushed new tag v4.24.48 at 서울특별시 광진구 류승인 / kordoc", "004ff  | Figma |
| D21 | G-12_1440_Guest | profile-event#4 | 코드 "Pushed to branch main at 서울특별시 광진구 류승인 / kordoc 3f9b3c4a ·  / Figma ["004ff792 · release: 4.24.48", "... and 7 more commits.", "  | Figma |
| D21 | G-12_1440_Guest | profile-event#5 | 코드 "Pushed new tag v4.24.48 at 서울특별시 광진구 류승인 / kordoc 004ff792  / Figma ["Pushed new tag v4.24.47 at 서울특별시 광진구 류승인 / kordoc", "69f3d  | 신규 |
| D21 | G-12_1440_Guest | profile-event#6 | 코드 "Pushed to branch main at 서울특별시 광진구 류승인 / kordoc 004ff792 ·  / Figma ["69f3dfa4 · release: 4.24.47", "... and 5 more commits.", "  | 신규 |
| … | 나머지 54건 | | 화면별: G-12 60 | |

## 위치/크기 · project-row · y (52건, M-13 44건)
- 고칠 쪽: **Figma(M11)** 34건, **신규 판정 필요** 18건
- 근거 예: UX/gitlab_compare/v2/measure.md: 필터→첫 행8; v3: 모바일 입력 먼저/정렬 다음
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-01_1024_Guest | project-row | y: 코드 294 / Figma 298 | Figma |
| D21 | G-01_1024_Guest | project-row#2 | y: 코드 363 / Figma 367 | Figma |
| D21 | G-01_1024_Guest | project-row#3 | y: 코드 432 / Figma 436 | Figma |
| D21 | G-01_1024_Guest | project-row#4 | y: 코드 551 / Figma 575 | Figma |
| D21 | G-01_1024_Signed-in | project-row | y: 코드 294 / Figma 298 | Figma |
| D21 | G-01_1024_Signed-in | project-row#2 | y: 코드 363 / Figma 367 | Figma |
| … | 나머지 46건 | | 화면별: G-01 34, G-02 18 | |

## 위치/크기 · project-row · h (48건, M-13 20건)
- 고칠 쪽: **신규 판정 필요** 32건, **코드(M11)** 16건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-01_1024_Guest | project-row#3 | h: 코드 119 / Figma 139 | 신규 |
| D21 | G-01_1024_Guest | project-row#7 | h: 코드 91 / Figma 111 | 신규 |
| D21 | G-01_1024_Signed-in | project-row#3 | h: 코드 119 / Figma 139 | 신규 |
| D21 | G-01_1024_Signed-in | project-row#7 | h: 코드 91 / Figma 111 | 신규 |
| D21 | G-01_1440_Guest | project-row#3 | h: 코드 119 / Figma 139 | 신규 |
| D21 | G-01_1440_Guest | project-row#4 | h: 코드 99 / Figma 119 | 코드 |
| … | 나머지 42건 | | 화면별: G-01 34, G-02 14 | |

## 위치/크기 · filter-search · x (2건, M-13 34건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma); 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-01_360_Guest | filter-search | x: 코드 283 / Figma 295 | 코드 |
| D21 | G-01_360_Signed-in | filter-search | x: 코드 283 / Figma 295 | 코드 |

## 문구 · group-row (29건, M-13 12건)
- 고칠 쪽: **Figma(M10)** 23건, **Figma(M11)** 6건
- 근거 예: UX/07 5·10·11·13절; P11_Organizations useCounts; P33_Profile ago
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-04_1440_Guest | group-row#14 | 코드 "R rei-lab - - - 생성됨 3주 전" / Figma ["0", "0"]  | Figma |
| D21 | G-04_1440_Guest | group-row#15 | 코드 "I IT여객정보부 - - - 생성됨 4주 전" / Figma ["0", "0"]  | Figma |
| D21 | G-04_1440_Guest | group-row#16 | 코드 "그 그랜드코리아레저 박관태 - - - 생성됨 4주 전" / Figma ["0", "0"]  | Figma |
| D21 | G-04_1440_Guest | group-row#17 | 코드 "모 모닝커피 - - - 생성됨 1개월 전" / Figma ["0"]  | Figma |
| D21 | G-04_1440_Guest | group-row#18 | 코드 "서 서명키즈 - - - 생성됨 1개월 전" / Figma ["0"]  | Figma |
| D21 | G-04_1440_Signed-in | group-row#15 | 코드 "I IT여객정보부 - - - 생성됨 4주 전" / Figma ["0", "0"]  | Figma |
| … | 나머지 23건 | | 화면별: G-04 29 | |

## Figma에만 · tabs (20건, M-13 25건)
- 고칠 쪽: **코드(M11)** 20건
- 근거 예: UX/audit_v3/capture_map.md; code_plan/figma_full.json
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-09_1024_Guest | tabs | Figma에만 {"x": 40, "y": 199, "w": 944, "h": 40} | 코드 |
| D21 | A-09_1024_Signed-in | tabs | Figma에만 {"x": 40, "y": 199, "w": 944, "h": 40} | 코드 |
| D21 | A-09_1440_Guest | tabs | Figma에만 {"x": 296, "y": 199, "w": 1088, "h": 40} | 코드 |
| D21 | A-09_1440_Signed-in | tabs | Figma에만 {"x": 296, "y": 199, "w": 1088, "h": 40} | 코드 |
| D21 | A-09_1920_Guest | tabs | Figma에만 {"x": 480, "y": 199, "w": 1200, "h": 40} | 코드 |
| D21 | A-09_1920_Signed-in | tabs | Figma에만 {"x": 480, "y": 199, "w": 1200, "h": 40} | 코드 |
| … | 나머지 14건 | | 화면별: A-09 10, G-06 5, G-07 5 | |

## 위치/크기 · sidebar-nav · h (4건, M-13 24건)
- 고칠 쪽: **Figma(M11)** 4건
- 근거 예: UX/17_사이드바_실측.md; D-16
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | R-30_1440_Guest | sidebar-nav | h: 코드 560 / Figma 817 | Figma |
| D21 | R-30_1440_Signed-in | sidebar-nav | h: 코드 560 / Figma 817 | Figma |
| D21 | R-30_1920_Guest | sidebar-nav | h: 코드 560 / Figma 817 | Figma |
| D21 | R-30_1920_Signed-in | sidebar-nav | h: 코드 560 / Figma 817 | Figma |

## 위치/크기 · results · h (20건, M-13 14건)
- 고칠 쪽: **코드(M11)** 10건, **신규 판정 필요** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-01_1024_Guest | results | h: 코드 754 / Figma 683 | 코드 |
| D21 | A-01_1024_Signed-in | results | h: 코드 754 / Figma 683 | 코드 |
| D21 | A-01_1440_Guest | results | h: 코드 714 / Figma 643 | 코드 |
| D21 | A-01_1440_Signed-in | results | h: 코드 714 / Figma 643 | 코드 |
| D21 | A-01_1920_Guest | results | h: 코드 714 / Figma 643 | 코드 |
| D21 | A-01_1920_Signed-in | results | h: 코드 714 / Figma 643 | 코드 |
| … | 나머지 14건 | | 화면별: A-01 10, G-02 10 | |

## 문구 · toolbar (20건, M-13 20건)
- 고칠 쪽: **Figma(M11)** 20건
- 근거 예: UX/07_밀도_문구_기준.md 5/10/11/13절; D-19; 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1024_Guest | toolbar | 코드 "main kordoc 파일 찾기" / Figma ["코드"]  | Figma |
| D21 | A-02_1024_Signed-in | toolbar | 코드 "main kordoc 파일 찾기" / Figma ["코드"]  | Figma |
| D21 | A-02_1440_Guest | toolbar | 코드 "main kordoc 파일 찾기" / Figma ["코드"]  | Figma |
| D21 | A-02_1440_Signed-in | toolbar | 코드 "main kordoc 파일 찾기" / Figma ["코드"]  | Figma |
| D21 | A-02_1920_Guest | toolbar | 코드 "main kordoc 파일 찾기" / Figma ["코드"]  | Figma |
| D21 | A-02_1920_Signed-in | toolbar | 코드 "main kordoc 파일 찾기" / Figma ["코드"]  | Figma |
| … | 나머지 14건 | | 화면별: A-02 10, R-01 10 | |

## 아이콘 · file-table (20건, M-13 20건)
- 고칠 쪽: **코드(M11)** 20건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma); 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1024_Guest | file-table | 코드 ["file:git", "file:markdown", "folder"] / Figma ["folder", "icon-file/git", "icon-file/markdown"]  | 코드 |
| D21 | A-02_1024_Signed-in | file-table | 코드 ["file:git", "file:markdown", "folder"] / Figma ["folder", "icon-file/git", "icon-file/markdown"]  | 코드 |
| D21 | A-02_1440_Guest | file-table | 코드 ["file:git", "file:markdown", "folder"] / Figma ["folder", "icon-file/git", "icon-file/markdown"]  | 코드 |
| D21 | A-02_1440_Signed-in | file-table | 코드 ["file:git", "file:markdown", "folder"] / Figma ["folder", "icon-file/git", "icon-file/markdown"]  | 코드 |
| D21 | A-02_1920_Guest | file-table | 코드 ["file:git", "file:markdown", "folder"] / Figma ["folder", "icon-file/git", "icon-file/markdown"]  | 코드 |
| D21 | A-02_1920_Signed-in | file-table | 코드 ["file:git", "file:markdown", "folder"] / Figma ["folder", "icon-file/git", "icon-file/markdown"]  | 코드 |
| … | 나머지 14건 | | 화면별: A-02 10, R-01 10 | |

## 위치/크기 · readme · h (20건, M-13 16건)
- 고칠 쪽: **코드(M11)** 16건, **신규 판정 필요** 2건, **코드(M8)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma); 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1024_Guest | readme | h: 코드 5152 / Figma 5897 | 코드 |
| D21 | A-02_1024_Signed-in | readme | h: 코드 5152 / Figma 5897 | 코드 |
| D21 | A-02_1440_Guest | readme | h: 코드 5473 / Figma 5494 | 코드 |
| D21 | A-02_1440_Signed-in | readme | h: 코드 5473 / Figma 5494 | 코드 |
| D21 | A-02_1920_Guest | readme | h: 코드 5247 / Figma 5270 | 코드 |
| D21 | A-02_1920_Signed-in | readme | h: 코드 5248 / Figma 5270 | 코드 |
| … | 나머지 14건 | | 화면별: A-02 10, R-01 10 | |

## 아이콘 · readme (20건, M-13 20건)
- 고칠 쪽: **코드(M11)** 20건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma); 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1024_Guest | readme | 코드 ["copy", "file:markdown"] / Figma ["copy", "icon-file/markdown"]  | 코드 |
| D21 | A-02_1024_Signed-in | readme | 코드 ["copy", "file:markdown"] / Figma ["copy", "icon-file/markdown"]  | 코드 |
| D21 | A-02_1440_Guest | readme | 코드 ["copy", "file:markdown"] / Figma ["copy", "icon-file/markdown"]  | 코드 |
| D21 | A-02_1440_Signed-in | readme | 코드 ["copy", "file:markdown"] / Figma ["copy", "icon-file/markdown"]  | 코드 |
| D21 | A-02_1920_Guest | readme | 코드 ["copy", "file:markdown"] / Figma ["copy", "icon-file/markdown"]  | 코드 |
| D21 | A-02_1920_Signed-in | readme | 코드 ["copy", "file:markdown"] / Figma ["copy", "icon-file/markdown"]  | 코드 |
| … | 나머지 14건 | | 화면별: A-02 10, R-01 10 | |

## 모서리·안쪽·간격 · extra-field (20건, M-13 40건)
- 고칠 쪽: **신규 판정 필요** 20건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1024_Guest | extra-field | 코드 null / Figma null 안쪽 0 8 0 8→8 8 8 8 | 신규 |
| D21 | A-02_1024_Signed-in | extra-field | 코드 null / Figma null 안쪽 0 8 0 8→8 8 8 8 | 신규 |
| D21 | A-02_1440_Guest | extra-field | 코드 null / Figma null 안쪽 0 8 0 8→8 8 8 8 | 신규 |
| D21 | A-02_1440_Signed-in | extra-field | 코드 null / Figma null 안쪽 0 8 0 8→8 8 8 8 | 신규 |
| D21 | A-02_1920_Guest | extra-field | 코드 null / Figma null 안쪽 0 8 0 8→8 8 8 8 | 신규 |
| D21 | A-02_1920_Signed-in | extra-field | 코드 null / Figma null 안쪽 0 8 0 8→8 8 8 8 | 신규 |
| … | 나머지 14건 | | 화면별: A-02 10, R-01 10 | |

## Figma에만 · tabbar (20건, M-13 20건)
- 고칠 쪽: **코드(M11)** 20건
- 근거 예: UX/handson/gitlab/40_탐색_그룹.png; code_plan/figma_full.json
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-04_1024_Guest | tabbar | Figma에만 {"x": 40, "y": 249, "w": 80, "h": 2} | 코드 |
| D21 | G-04_1024_Guest | tabbar#2 | Figma에만 {"x": 128, "y": 249, "w": 80, "h": 2} | 코드 |
| D21 | G-04_1024_Signed-in | tabbar | Figma에만 {"x": 40, "y": 249, "w": 80, "h": 2} | 코드 |
| D21 | G-04_1024_Signed-in | tabbar#2 | Figma에만 {"x": 128, "y": 249, "w": 80, "h": 2} | 코드 |
| D21 | G-04_1440_Guest | tabbar | Figma에만 {"x": 296, "y": 249, "w": 80, "h": 2} | 코드 |
| D21 | G-04_1440_Guest | tabbar#2 | Figma에만 {"x": 384, "y": 249, "w": 80, "h": 2} | 코드 |
| … | 나머지 14건 | | 화면별: G-04 20 | |

## 위치/크기 · section-title · y (5건, M-13 20건)
- 고칠 쪽: **코드(M11)** 5건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-06_1024_Guest | section-title | y: 코드 205 / Figma 169 | 코드 |
| D21 | G-06_1440_Guest | section-title | y: 코드 205 / Figma 169 | 코드 |
| D21 | G-06_1920_Guest | section-title | y: 코드 205 / Figma 169 | 코드 |
| D21 | G-06_360_Guest | section-title | y: 코드 193 / Figma 161 | 코드 |
| D21 | G-06_768_Guest | section-title | y: 코드 205 / Figma 169 | 코드 |

## 위치/크기 · project-info · h (16건, M-13 16건)
- 고칠 쪽: **코드(M11)** 16건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma); 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1440_Guest | project-info | h: 코드 910 / Figma 943 | 코드 |
| D21 | A-02_1440_Signed-in | project-info | h: 코드 910 / Figma 943 | 코드 |
| D21 | A-02_1920_Guest | project-info | h: 코드 910 / Figma 943 | 코드 |
| D21 | A-02_1920_Signed-in | project-info | h: 코드 910 / Figma 943 | 코드 |
| D21 | A-02_360_Guest | project-info | h: 코드 774 / Figma 921 | 코드 |
| D21 | A-02_360_Signed-in | project-info | h: 코드 774 / Figma 921 | 코드 |
| … | 나머지 10건 | | 화면별: A-02 8, R-01 8 | |

## 모서리·안쪽·간격 · profile-activity (3건, M-13 13건)
- 고칠 쪽: **코드(M11)** 3건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선; 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-12_1440_Guest | profile-activity | 코드 null / Figma null 간격 12→0 | 코드 |
| D21 | G-12_360_Guest | profile-activity | 코드 null / Figma null 간격 12→0 | 코드 |
| D21 | G-12_768_Guest | profile-activity | 코드 null / Figma null 간격 12→0 | 코드 |

## 색 · filters (12건, M-13 12건)
- 고칠 쪽: **코드(M11)** 12건
- 근거 예: capture_map.md; 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-01_1024_Guest | filters | 코드 "없음 " / Figma "#1e2124 color/layout/raised-bg"  | 코드 |
| D21 | A-01_1024_Signed-in | filters | 코드 "없음 " / Figma "#1e2124 color/layout/raised-bg"  | 코드 |
| D21 | A-01_1440_Guest | filters | 코드 "없음 " / Figma "#1e2124 color/layout/raised-bg"  | 코드 |
| D21 | A-01_1440_Signed-in | filters | 코드 "없음 " / Figma "#1e2124 color/layout/raised-bg"  | 코드 |
| D21 | A-01_1920_Guest | filters | 코드 "없음 " / Figma "#1e2124 color/layout/raised-bg"  | 코드 |
| D21 | A-01_1920_Signed-in | filters | 코드 "없음 " / Figma "#1e2124 color/layout/raised-bg"  | 코드 |
| … | 나머지 6건 | | 화면별: A-01 6, G-02 6 | |

## 위치/크기 · steps · y (10건, M-13 10건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | R-30_1024_Guest | steps | y: 코드 462 / Figma 313 | 코드 |
| D21 | R-30_1024_Signed-in | steps | y: 코드 462 / Figma 313 | 코드 |
| D21 | R-30_1440_Guest | steps | y: 코드 462 / Figma 313 | 코드 |
| D21 | R-30_1440_Signed-in | steps | y: 코드 462 / Figma 313 | 코드 |
| D21 | R-30_1920_Guest | steps | y: 코드 462 / Figma 311 | 코드 |
| D21 | R-30_1920_Signed-in | steps | y: 코드 462 / Figma 313 | 코드 |
| … | 나머지 4건 | | 화면별: R-30 10 | |

## 위치/크기 · steps · h (10건, M-13 10건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | R-30_1024_Guest | steps | h: 코드 614 / Figma 558 | 코드 |
| D21 | R-30_1024_Signed-in | steps | h: 코드 614 / Figma 558 | 코드 |
| D21 | R-30_1440_Guest | steps | h: 코드 614 / Figma 558 | 코드 |
| D21 | R-30_1440_Signed-in | steps | h: 코드 614 / Figma 558 | 코드 |
| D21 | R-30_1920_Guest | steps | h: 코드 614 / Figma 558 | 코드 |
| D21 | R-30_1920_Signed-in | steps | h: 코드 614 / Figma 558 | 코드 |
| … | 나머지 4건 | | 화면별: R-30 10 | |

## 색 · search-filter (8건, M-13 8건)
- 고칠 쪽: **코드(M11)** 8건
- 근거 예: capture_map.md; 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-01_360_Guest | search-filter | 코드 "없음 " / Figma "#33363d color/layout/btn-fill-bg"  | 코드 |
| D21 | A-01_360_Signed-in | search-filter | 코드 "없음 " / Figma "#33363d color/layout/btn-fill-bg"  | 코드 |
| D21 | A-01_768_Guest | search-filter | 코드 "없음 " / Figma "#33363d color/layout/btn-fill-bg"  | 코드 |
| D21 | A-01_768_Signed-in | search-filter | 코드 "없음 " / Figma "#33363d color/layout/btn-fill-bg"  | 코드 |
| D21 | G-02_360_Guest | search-filter | 코드 "없음 " / Figma "#33363d color/layout/btn-fill-bg"  | 코드 |
| D21 | G-02_360_Signed-in | search-filter | 코드 "없음 " / Figma "#33363d color/layout/btn-fill-bg"  | 코드 |
| … | 나머지 2건 | | 화면별: A-01 4, G-02 4 | |

## 모서리·안쪽·간격 · readme (8건, M-13 8건)
- 고칠 쪽: **코드(M11)** 8건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma); 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1024_Guest | readme | 코드 null / Figma null 안쪽 12 12 14 12→12 12 16 12 | 코드 |
| D21 | A-02_1024_Signed-in | readme | 코드 null / Figma null 안쪽 12 12 14 12→12 12 16 12 | 코드 |
| D21 | A-02_360_Guest | readme | 코드 null / Figma null 안쪽 12 12 10 12→12 12 16 12 | 코드 |
| D21 | A-02_360_Signed-in | readme | 코드 null / Figma null 안쪽 12 12 10 12→12 12 16 12 | 코드 |
| D21 | R-01_1024_Guest | readme | 코드 null / Figma null 안쪽 12 12 14 12→12 12 16 12 | 코드 |
| D21 | R-01_1024_Signed-in | readme | 코드 null / Figma null 안쪽 12 12 14 12→12 12 16 12 | 코드 |
| … | 나머지 2건 | | 화면별: A-02 4, R-01 4 | |

## 위치/크기 · project-info · y (8건, M-13 16건)
- 고칠 쪽: **코드(M11)** 8건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma); 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_360_Guest | project-info | y: 코드 245 / Figma 237 | 코드 |
| D21 | A-02_360_Signed-in | project-info | y: 코드 245 / Figma 237 | 코드 |
| D21 | A-02_768_Guest | project-info | y: 코드 193 / Figma 185 | 코드 |
| D21 | A-02_768_Signed-in | project-info | y: 코드 193 / Figma 185 | 코드 |
| D21 | R-01_360_Guest | project-info | y: 코드 245 / Figma 237 | 코드 |
| D21 | R-01_360_Signed-in | project-info | y: 코드 245 / Figma 237 | 코드 |
| … | 나머지 2건 | | 화면별: A-02 4, R-01 4 | |

## 위치/크기 · extra-field · y (8건, M-13 16건)
- 고칠 쪽: **신규 판정 필요** 8건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_360_Guest | extra-field | y: 코드 365 / Figma 357 | 신규 |
| D21 | A-02_360_Signed-in | extra-field | y: 코드 365 / Figma 357 | 신규 |
| D21 | A-02_768_Guest | extra-field | y: 코드 291 / Figma 283 | 신규 |
| D21 | A-02_768_Signed-in | extra-field | y: 코드 291 / Figma 283 | 신규 |
| D21 | R-01_360_Guest | extra-field | y: 코드 365 / Figma 357 | 신규 |
| D21 | R-01_360_Signed-in | extra-field | y: 코드 365 / Figma 357 | 신규 |
| … | 나머지 2건 | | 화면별: A-02 4, R-01 4 | |

## 위치/크기 · language-bar · y (8건, M-13 16건)
- 고칠 쪽: **코드(M11)** 8건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_360_Guest | language-bar | y: 코드 405 / Figma 397 | 코드 |
| D21 | A-02_360_Signed-in | language-bar | y: 코드 405 / Figma 397 | 코드 |
| D21 | A-02_768_Guest | language-bar | y: 코드 331 / Figma 323 | 코드 |
| D21 | A-02_768_Signed-in | language-bar | y: 코드 331 / Figma 323 | 코드 |
| D21 | R-01_360_Guest | language-bar | y: 코드 405 / Figma 397 | 코드 |
| D21 | R-01_360_Signed-in | language-bar | y: 코드 405 / Figma 397 | 코드 |
| … | 나머지 2건 | | 화면별: A-02 4, R-01 4 | |

## 모서리·안쪽·간격 · search (8건, M-13 8건)
- 고칠 쪽: **코드(M11)** 8건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-04_1024_Guest | search | 코드 null / Figma null 안쪽 0 0 0 12→0 12 0 12 | 코드 |
| D21 | G-04_1024_Signed-in | search | 코드 null / Figma null 안쪽 0 0 0 12→0 12 0 12 | 코드 |
| D21 | G-04_1440_Guest | search | 코드 null / Figma null 안쪽 0 0 0 12→0 12 0 12 | 코드 |
| D21 | G-04_1440_Signed-in | search | 코드 null / Figma null 안쪽 0 0 0 12→0 12 0 12 | 코드 |
| D21 | G-04_1920_Guest | search | 코드 null / Figma null 안쪽 0 0 0 12→0 12 0 12 | 코드 |
| D21 | G-04_1920_Signed-in | search | 코드 null / Figma null 안쪽 0 0 0 12→0 12 0 12 | 코드 |
| … | 나머지 2건 | | 화면별: G-04 8 | |

## 위치/크기 · section-title · h (3건, M-13 9건)
- 고칠 쪽: **코드(M11)** 3건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-06_1024_Guest | section-title | h: 코드 22 / Figma 2 | 코드 |
| D21 | G-06_1440_Guest | section-title | h: 코드 22 / Figma 2 | 코드 |
| D21 | G-06_1920_Guest | section-title | h: 코드 22 / Figma 2 | 코드 |

## 모서리·안쪽·간격 · page-head (5건, M-13 15건)
- 고칠 쪽: **코드(M11)** 5건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-07_1024_Signed-in | page-head | 코드 null / Figma null 안쪽 0 0 4 0→0 0 0 0 | 코드 |
| D21 | G-07_1440_Signed-in | page-head | 코드 null / Figma null 안쪽 0 0 4 0→0 0 0 0 | 코드 |
| D21 | G-07_1920_Signed-in | page-head | 코드 null / Figma null 안쪽 0 0 4 0→0 0 0 0 | 코드 |
| D21 | G-07_360_Signed-in | page-head | 코드 null / Figma null 안쪽 0 0 4 0→0 0 0 0 | 코드 |
| D21 | G-07_768_Signed-in | page-head | 코드 null / Figma null 안쪽 0 0 4 0→0 0 0 0 | 코드 |

## 위치/크기 · tabs · y (2건, M-13 12건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-05_360_Guest | tabs | y: 코드 187 / Figma 191 | 코드 |
| D21 | A-05_360_Signed-in | tabs | y: 코드 187 / Figma 191 | 코드 |

## 문구 · filters (6건, M-13 6건)
- 고칠 쪽: **코드(M11)** 6건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-02_1024_Guest | filters | 코드 "프로젝트 3 작업 항목 머지 리퀘스트 마일스톤 사용자들 아카이빙됨 아카이빙된 항목 포함 적용" / Figma ["6"]  | 코드 |
| D21 | G-02_1024_Signed-in | filters | 코드 "프로젝트 3 작업 항목 머지 리퀘스트 마일스톤 사용자들 아카이빙됨 아카이빙된 항목 포함 적용" / Figma ["6"]  | 코드 |
| D21 | G-02_1440_Guest | filters | 코드 "프로젝트 3 작업 항목 머지 리퀘스트 마일스톤 사용자들 아카이빙됨 아카이빙된 항목 포함 적용" / Figma ["6"]  | 코드 |
| D21 | G-02_1440_Signed-in | filters | 코드 "프로젝트 3 작업 항목 머지 리퀘스트 마일스톤 사용자들 아카이빙됨 아카이빙된 항목 포함 적용" / Figma ["6"]  | 코드 |
| D21 | G-02_1920_Guest | filters | 코드 "프로젝트 3 작업 항목 머지 리퀘스트 마일스톤 사용자들 아카이빙됨 아카이빙된 항목 포함 적용" / Figma ["6"]  | 코드 |
| D21 | G-02_1920_Signed-in | filters | 코드 "프로젝트 3 작업 항목 머지 리퀘스트 마일스톤 사용자들 아카이빙됨 아카이빙된 항목 포함 적용" / Figma ["6"]  | 코드 |

## 위치/크기 · group-row · y (6건, M-13 6건)
- 고칠 쪽: **코드(M11)** 6건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-04_360_Guest | group-row | y: 코드 386 / Figma 346 | 코드 |
| D21 | G-04_360_Guest | group-row#2 | y: 코드 491 / Figma 451 | 코드 |
| D21 | G-04_360_Guest | group-row#3 | y: 코드 596 / Figma 556 | 코드 |
| D21 | G-04_360_Signed-in | group-row | y: 코드 386 / Figma 346 | 코드 |
| D21 | G-04_360_Signed-in | group-row#2 | y: 코드 491 / Figma 451 | 코드 |
| D21 | G-04_360_Signed-in | group-row#3 | y: 코드 596 / Figma 556 | 코드 |

## 위치/크기 · profile-event · y (6건, M-13 0건)
- 고칠 쪽: **신규 판정 필요** 6건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-12_1440_Guest | profile-event | y: 코드 445 / Figma 457 | 신규 |
| D21 | G-12_1440_Guest | profile-event#2 | y: 코드 523 / Figma 535 | 신규 |
| D21 | G-12_360_Guest | profile-event | y: 코드 399 / Figma 426 | 신규 |
| D21 | G-12_360_Guest | profile-event#2 | y: 코드 499 / Figma 526 | 신규 |
| D21 | G-12_768_Guest | profile-event | y: 코드 431 / Figma 443 | 신규 |
| D21 | G-12_768_Guest | profile-event#2 | y: 코드 509 / Figma 521 | 신규 |

## 위치/크기 · section-title · x (5건, M-13 11건)
- 고칠 쪽: **코드(M11)** 5건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-06_1024_Guest | section-title | x: 코드 64 / Figma 40 | 코드 |
| D21 | G-06_1440_Guest | section-title | x: 코드 320 / Figma 296 | 코드 |
| D21 | G-06_1920_Guest | section-title | x: 코드 504 / Figma 480 | 코드 |
| D21 | G-06_360_Guest | section-title | x: 코드 40 / Figma 16 | 코드 |
| D21 | G-06_768_Guest | section-title | x: 코드 56 / Figma 32 | 코드 |

## 위치/크기 · section-title · w (5건, M-13 11건)
- 고칠 쪽: **코드(M11)** 5건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-06_1024_Guest | section-title | w: 코드 896 / Figma 944 | 코드 |
| D21 | G-06_1440_Guest | section-title | w: 코드 1040 / Figma 1088 | 코드 |
| D21 | G-06_1920_Guest | section-title | w: 코드 1152 / Figma 1200 | 코드 |
| D21 | G-06_360_Guest | section-title | w: 코드 280 / Figma 328 | 코드 |
| D21 | G-06_768_Guest | section-title | w: 코드 656 / Figma 704 | 코드 |

## Figma에만 · toolbar (5건, M-13 0건)
- 고칠 쪽: **신규 판정 필요** 5건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-06_1024_Signed-in | toolbar | Figma에만 {"x": 40, "y": 169, "w": 944, "h": 40} | 신규 |
| D21 | G-06_1440_Signed-in | toolbar | Figma에만 {"x": 296, "y": 169, "w": 1088, "h": 40} | 신규 |
| D21 | G-06_1920_Signed-in | toolbar | Figma에만 {"x": 480, "y": 169, "w": 1200, "h": 40} | 신규 |
| D21 | G-06_360_Signed-in | toolbar | Figma에만 {"x": 16, "y": 161, "w": 328, "h": 22} | 신규 |
| D21 | G-06_768_Signed-in | toolbar | Figma에만 {"x": 32, "y": 169, "w": 704, "h": 40} | 신규 |

## Figma에만 · project-row (5건, M-13 5건)
- 고칠 쪽: **사용자확인(M11)** 5건
- 근거 예: UX/audit_v3/parity_ledger.md pending
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-06_1024_Signed-in | project-row | Figma에만 {"x": 41, "y": 266, "w": 942, "h": 97} | 사용자확인 |
| D21 | G-06_1440_Signed-in | project-row | Figma에만 {"x": 297, "y": 266, "w": 1086, "h": 97} | 사용자확인 |
| D21 | G-06_1920_Signed-in | project-row | Figma에만 {"x": 481, "y": 266, "w": 1198, "h": 97} | 사용자확인 |
| D21 | G-06_360_Signed-in | project-row | Figma에만 {"x": 17, "y": 288, "w": 326, "h": 97} | 사용자확인 |
| D21 | G-06_768_Signed-in | project-row | Figma에만 {"x": 33, "y": 266, "w": 702, "h": 97} | 사용자확인 |

## 위치/크기 · page-head · h (5건, M-13 21건)
- 고칠 쪽: **코드(M11)** 5건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-07_1024_Signed-in | page-head | h: 코드 40 / Figma 44 | 코드 |
| D21 | G-07_1440_Signed-in | page-head | h: 코드 40 / Figma 44 | 코드 |
| D21 | G-07_1920_Signed-in | page-head | h: 코드 40 / Figma 44 | 코드 |
| D21 | G-07_360_Signed-in | page-head | h: 코드 32 / Figma 36 | 코드 |
| D21 | G-07_768_Signed-in | page-head | h: 코드 40 / Figma 44 | 코드 |

## 아이콘 · toolbar (4건, M-13 4건)
- 고칠 쪽: **코드(M11)** 4건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma); 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음); D-21 6장 
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_360_Guest | toolbar | 코드 ["arrow-down", "branch", "download", "ellipsis-vertical"] / Figma ["arrow-down", "branch", "ellipsis-vertical"]  | 코드 |
| D21 | A-02_360_Signed-in | toolbar | 코드 ["arrow-down", "branch", "download", "ellipsis-vertical"] / Figma ["arrow-down", "branch", "ellipsis-vertical"]  | 코드 |
| D21 | R-01_360_Guest | toolbar | 코드 ["arrow-down", "branch", "download", "ellipsis-vertical"] / Figma ["arrow-down", "branch", "ellipsis-vertical"]  | 코드 |
| D21 | R-01_360_Signed-in | toolbar | 코드 ["arrow-down", "branch", "download", "ellipsis-vertical"] / Figma ["arrow-down", "branch", "ellipsis-vertical"]  | 코드 |

## 위치/크기 · intro-card · h (4건, M-13 4건)
- 고칠 쪽: **코드(M11)** 4건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma); 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_768_Guest | intro-card | h: 코드 305 / Figma 331 | 코드 |
| D21 | A-02_768_Signed-in | intro-card | h: 코드 305 / Figma 331 | 코드 |
| D21 | R-01_768_Guest | intro-card | h: 코드 305 / Figma 331 | 코드 |
| D21 | R-01_768_Signed-in | intro-card | h: 코드 305 / Figma 331 | 코드 |

## 위치/크기 · profile-event · h (4건, M-13 1건)
- 고칠 쪽: **신규 판정 필요** 3건, **코드(M11)** 1건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-12_1440_Guest | profile-event#20 | h: 코드 100 / Figma 78 | 신규 |
| D21 | G-12_360_Guest | profile-event#19 | h: 코드 100 / Figma 144 | 코드 |
| D21 | G-12_360_Guest | profile-event#20 | h: 코드 122 / Figma 100 | 신규 |
| D21 | G-12_768_Guest | profile-event#20 | h: 코드 100 / Figma 78 | 신규 |

## 위치/크기 · profile-head · y (3건, M-13 0건)
- 고칠 쪽: **신규 판정 필요** 3건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-12_1440_Guest | profile-head | y: 코드 121 / Figma 125 | 신규 |
| D21 | G-12_360_Guest | profile-head | y: 코드 121 / Figma 125 | 신규 |
| D21 | G-12_768_Guest | profile-head | y: 코드 121 / Figma 125 | 신규 |

## 위치/크기 · page-head · y (3건, M-13 0건)
- 고칠 쪽: **신규 판정 필요** 3건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-12_1440_Guest | page-head | y: 코드 134 / Figma 138 | 신규 |
| D21 | G-12_360_Guest | page-head | y: 코드 122 / Figma 126 | 신규 |
| D21 | G-12_768_Guest | page-head | y: 코드 134 / Figma 138 | 신규 |

## 위치/크기 · profile-activity · y (3건, M-13 0건)
- 고칠 쪽: **신규 판정 필요** 3건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-12_1440_Guest | profile-activity | y: 코드 241 / Figma 245 | 신규 |
| D21 | G-12_360_Guest | profile-activity | y: 코드 209 / Figma 213 | 신규 |
| D21 | G-12_768_Guest | profile-activity | y: 코드 241 / Figma 245 | 신규 |

## 위치/크기 · activity-calendar · y (3건, M-13 0건)
- 고칠 쪽: **신규 판정 필요** 3건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-12_1440_Guest | activity-calendar | y: 코드 279 / Figma 283 | 신규 |
| D21 | G-12_360_Guest | activity-calendar | y: 코드 247 / Figma 251 | 신규 |
| D21 | G-12_768_Guest | activity-calendar | y: 코드 279 / Figma 283 | 신규 |

## 모서리·안쪽·간격 · activity-calendar (3건, M-13 0건)
- 고칠 쪽: **신규 판정 필요** 3건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-12_1440_Guest | activity-calendar | 코드 null / Figma null 간격 0→12 | 신규 |
| D21 | G-12_360_Guest | activity-calendar | 코드 null / Figma null 간격 0→12 | 신규 |
| D21 | G-12_768_Guest | activity-calendar | 코드 null / Figma null 간격 0→12 | 신규 |

## 위치/크기 · checks · h (2건, M-13 1건)
- 고칠 쪽: **신규 판정 필요** 1건, **코드(M11)** 1건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-03_360_Guest | checks | h: 코드 508 / Figma 540 | 신규 |
| D21 | A-03_360_Signed-in | checks | h: 코드 508 / Figma 540 | 코드 |

## 모서리·안쪽·간격 · checks (2건, M-13 1건)
- 고칠 쪽: **신규 판정 필요** 1건, **코드(M11)** 1건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-03_360_Guest | checks | 코드 null / Figma null 간격 20→12 | 신규 |
| D21 | A-03_360_Signed-in | checks | 코드 null / Figma null 간격 20→12 | 코드 |

## 모서리·안쪽·간격 · filter-search (2건, M-13 2건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-01_360_Guest | filter-search | 코드 null / Figma null 안쪽 0 0 0 0→0 4 0 4 | 코드 |
| D21 | G-01_360_Signed-in | filter-search | 코드 null / Figma null 안쪽 0 0 0 0→0 4 0 4 | 코드 |

## 위치/크기 · footer · w (2건, M-13 8건)
- 고칠 쪽: **Figma(M11)** 2건
- 근거 예: D-21 7-1/7-2; D-20; UX/07 7절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-03_1440_Guest | footer | w: 코드 1088 / Figma 1086 | Figma |
| D21 | G-03_1440_Signed-in | footer | w: 코드 1088 / Figma 1086 | Figma |

## 위치/크기 · gl-filter · h (2건, M-13 2건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-04_360_Guest | gl-filter | h: 코드 105 / Figma 65 | 코드 |
| D21 | G-04_360_Signed-in | gl-filter | h: 코드 105 / Figma 65 | 코드 |

## 아이콘 · gl-filter (2건, M-13 12건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-04_360_Guest | gl-filter | 코드 ["arrow-down", "search", "sort-desc"] / Figma ["arrow-down", "search"]  | 코드 |
| D21 | G-04_360_Signed-in | gl-filter | 코드 ["arrow-down", "search", "sort-desc"] / Figma ["arrow-down", "search"]  | 코드 |

## 위치/크기 · search · w (2건, M-13 2건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-04_360_Guest | search | w: 코드 296 / Figma 183 | 코드 |
| D21 | G-04_360_Signed-in | search | w: 코드 296 / Figma 183 | 코드 |

## 색 · search (2건, M-13 2건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: capture_map.md; 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-04_360_Guest | search | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  | 코드 |
| D21 | G-04_360_Signed-in | search | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  | 코드 |

## 위치/크기 · profile-info · y (1건, M-13 0건)
- 고칠 쪽: **신규 판정 필요** 1건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-12_1440_Guest | profile-info | y: 코드 241 / Figma 245 | 신규 |
