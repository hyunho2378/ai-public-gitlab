# M-13 담당 D21 작업 목록

- 생성: M-13 측정(시작 HEAD 68d475b, 대조 시점 594722c, 개발 서버 5994, 고정 시각 now=2026-11-07T10:00:00+09:00, 스크롤 막대 0, 비동기 대기) 대 Figma 합본 figma_full.json 2026-11-07 10:58(598 변형)
- 판정은 행 단위(화면·폭·요소·속성)로 M11>M10>M9>M8 판정(side)을 이어받았다. 행에 판정이 없으면 '신규, 판정 필요'. 판정 완료는 수정 완료가 아니다
- 판정 쪽별 합계(이 담당): 코드 476, 신규 판정 필요 204, Figma 116, 사용자확인 5, 둘 다 4

## 위치/크기 · project-row · y (44건, M-12 36건)
- 고칠 쪽: **Figma(M11)** 36건, **신규 판정 필요** 8건
- 근거 예: UX/gitlab_compare/v2/measure.md: 필터→첫 행8; v3: 모바일 입력 먼저/정렬 다음
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-01_1024_Guest | project-row | y: 코드 294 / Figma 298 | Figma |
| D21 | G-01_1024_Guest | project-row#2 | y: 코드 363 / Figma 367 | Figma |
| D21 | G-01_1024_Guest | project-row#3 | y: 코드 432 / Figma 436 | Figma |
| D21 | G-01_1024_Guest | project-row#4 | y: 코드 551 / Figma 555 | Figma |
| D21 | G-01_1024_Signed-in | project-row | y: 코드 294 / Figma 298 | Figma |
| D21 | G-01_1024_Signed-in | project-row#2 | y: 코드 363 / Figma 367 | Figma |
| … | 나머지 38건 | | 화면별: G-01 36, G-02 8 | |

## 문구 · section-title (4건, M-12 43건)
- 고칠 쪽: **Figma(M11)** 4건
- 근거 예: UX/07; D-19; R07 활성 브랜치 제목과 새 브랜치 CTA의 역할을 섞지 않음. R25 실제 copy/work 문자열/공개 API 기준. 측정 이름표를 헤더 안 단추와 본문 제목 사이에서 혼용하지 않음
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-06_1024_Signed-in | section-title | 코드 "로그인 후 내 도구/받은 의견" / Figma ["새 프로젝트"]  | Figma |
| D21 | G-06_1440_Signed-in | section-title | 코드 "로그인 후 내 도구/받은 의견" / Figma ["새 프로젝트"]  | Figma |
| D21 | G-06_1920_Signed-in | section-title | 코드 "로그인 후 내 도구/받은 의견" / Figma ["새 프로젝트"]  | Figma |
| D21 | G-06_768_Signed-in | section-title | 코드 "로그인 후 내 도구/받은 의견" / Figma ["새 프로젝트"]  | Figma |

## 색 · extra-field (40건, M-12 0건)
- 고칠 쪽: **신규 판정 필요** 40건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1024_Guest | extra-field | 코드 "#f4f5f6 gray-5" / Figma "#131416 color/layout/pill-text"  | 신규 |
| D21 | A-02_1024_Guest | extra-field | 코드 "#000000 gray-100" / Figma "#b1b8be color/layout/pill-bg"  | 신규 |
| D21 | A-02_1024_Signed-in | extra-field | 코드 "#f4f5f6 gray-5" / Figma "#131416 color/layout/pill-text"  | 신규 |
| D21 | A-02_1024_Signed-in | extra-field | 코드 "#000000 gray-100" / Figma "#b1b8be color/layout/pill-bg"  | 신규 |
| D21 | A-02_1440_Guest | extra-field | 코드 "#f4f5f6 gray-5" / Figma "#131416 color/layout/pill-text"  | 신규 |
| D21 | A-02_1440_Guest | extra-field | 코드 "#000000 gray-100" / Figma "#b1b8be color/layout/pill-bg"  | 신규 |
| … | 나머지 34건 | | 화면별: A-02 20, R-01 20 | |

## 모서리·안쪽·간격 · extra-field (40건, M-12 0건)
- 고칠 쪽: **신규 판정 필요** 40건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1024_Guest | extra-field | 코드 null / Figma null 모서리 10→24 | 신규 |
| D21 | A-02_1024_Guest | extra-field | 코드 null / Figma null 안쪽 0 8 0 8→8 8 8 8 | 신규 |
| D21 | A-02_1024_Signed-in | extra-field | 코드 null / Figma null 모서리 10→24 | 신규 |
| D21 | A-02_1024_Signed-in | extra-field | 코드 null / Figma null 안쪽 0 8 0 8→8 8 8 8 | 신규 |
| D21 | A-02_1440_Guest | extra-field | 코드 null / Figma null 모서리 10→24 | 신규 |
| D21 | A-02_1440_Guest | extra-field | 코드 null / Figma null 안쪽 0 8 0 8→8 8 8 8 | 신규 |
| … | 나머지 34건 | | 화면별: A-02 20, R-01 20 | |

## 위치/크기 · sidebar-nav · w (4건, M-12 40건)
- 고칠 쪽: **Figma(M11)** 4건
- 근거 예: UX/17 1절 스크롤; D-16; sidebar-spec.json
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-04_1440_Guest | sidebar-nav | w: 코드 213 / Figma 224 | Figma |
| D21 | A-04_1440_Signed-in | sidebar-nav | w: 코드 213 / Figma 224 | Figma |
| D21 | A-04_1920_Guest | sidebar-nav | w: 코드 213 / Figma 224 | Figma |
| D21 | A-04_1920_Signed-in | sidebar-nav | w: 코드 213 / Figma 224 | Figma |

## 위치/크기 · filter-search · x (2건, M-12 34건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma); 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-01_360_Guest | filter-search | x: 코드 283 / Figma 295 | 코드 |
| D21 | G-01_360_Signed-in | filter-search | x: 코드 283 / Figma 295 | 코드 |

## 위치/크기 · page-head · w (28건, M-12 20건)
- 고칠 쪽: **코드(M11)** 20건, **신규 판정 필요** 8건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1440_Guest | page-head | w: 코드 1088 / Figma 768 | 신규 |
| D21 | A-02_1440_Signed-in | page-head | w: 코드 1088 / Figma 768 | 신규 |
| D21 | A-02_1920_Guest | page-head | w: 코드 1200 / Figma 880 | 신규 |
| D21 | A-02_1920_Signed-in | page-head | w: 코드 1200 / Figma 880 | 신규 |
| D21 | G-05_1024_Guest | page-head | w: 코드 640 / Figma 944 | 코드 |
| D21 | G-05_1024_Signed-in | page-head | w: 코드 640 / Figma 944 | 코드 |
| … | 나머지 22건 | | 화면별: G-05 8, G-09 8, A-02 4, G-10 4, R-01 4 | |

## Figma에만 · tabs (20건, M-12 20건)
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

## 위치/크기 · sidebar-nav · h (4건, M-12 24건)
- 고칠 쪽: **Figma(M11)** 4건
- 근거 예: UX/17_사이드바_실측.md; D-16
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | R-30_1440_Guest | sidebar-nav | h: 코드 560 / Figma 817 | Figma |
| D21 | R-30_1440_Signed-in | sidebar-nav | h: 코드 560 / Figma 817 | Figma |
| D21 | R-30_1920_Guest | sidebar-nav | h: 코드 560 / Figma 817 | Figma |
| D21 | R-30_1920_Signed-in | sidebar-nav | h: 코드 560 / Figma 817 | Figma |

## 위치/크기 · page-head · h (19건, M-12 25건)
- 고칠 쪽: **코드(M11)** 17건, **신규 판정 필요** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_360_Guest | page-head | h: 코드 100 / Figma 96 | 신규 |
| D21 | A-02_360_Signed-in | page-head | h: 코드 100 / Figma 96 | 신규 |
| D21 | G-04_1024_Guest | page-head | h: 코드 40 / Figma 46 | 코드 |
| D21 | G-04_1024_Signed-in | page-head | h: 코드 40 / Figma 46 | 코드 |
| D21 | G-04_1440_Guest | page-head | h: 코드 40 / Figma 46 | 코드 |
| D21 | G-04_1440_Signed-in | page-head | h: 코드 40 / Figma 46 | 코드 |
| … | 나머지 13건 | | 화면별: G-04 10, G-07 5, A-02 2, R-01 2 | |

## 위치/크기 · repo-actions · w (20건, M-12 10건)
- 고칠 쪽: **신규 판정 필요** 10건, **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1024_Guest | repo-actions | w: 코드 222 / Figma 234 | 신규 |
| D21 | A-02_1024_Signed-in | repo-actions | w: 코드 222 / Figma 234 | 신규 |
| D21 | A-02_1440_Guest | repo-actions | w: 코드 222 / Figma 234 | 신규 |
| D21 | A-02_1440_Signed-in | repo-actions | w: 코드 222 / Figma 234 | 신규 |
| D21 | A-02_1920_Guest | repo-actions | w: 코드 222 / Figma 234 | 신규 |
| D21 | A-02_1920_Signed-in | repo-actions | w: 코드 222 / Figma 234 | 신규 |
| … | 나머지 14건 | | 화면별: A-02 10, R-01 10 | |

## 문구 · toolbar (20건, M-12 20건)
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

## 아이콘 · file-table (20건, M-12 20건)
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

## 아이콘 · readme (20건, M-12 20건)
- 고칠 쪽: **코드(M11)** 20건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma); 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1024_Guest | readme | 코드 ["file:markdown"] / Figma ["copy"]  | 코드 |
| D21 | A-02_1024_Signed-in | readme | 코드 ["file:markdown"] / Figma ["copy"]  | 코드 |
| D21 | A-02_1440_Guest | readme | 코드 ["file:markdown"] / Figma ["copy"]  | 코드 |
| D21 | A-02_1440_Signed-in | readme | 코드 ["file:markdown"] / Figma ["copy"]  | 코드 |
| D21 | A-02_1920_Guest | readme | 코드 ["file:markdown"] / Figma ["copy"]  | 코드 |
| D21 | A-02_1920_Signed-in | readme | 코드 ["file:markdown"] / Figma ["copy"]  | 코드 |
| … | 나머지 14건 | | 화면별: A-02 10, R-01 10 | |

## 위치/크기 · extra-field · w (20건, M-12 0건)
- 고칠 쪽: **신규 판정 필요** 20건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1024_Guest | extra-field | w: 코드 107 / Figma 105 | 신규 |
| D21 | A-02_1024_Signed-in | extra-field | w: 코드 107 / Figma 105 | 신규 |
| D21 | A-02_1440_Guest | extra-field | w: 코드 107 / Figma 105 | 신규 |
| D21 | A-02_1440_Signed-in | extra-field | w: 코드 107 / Figma 105 | 신규 |
| D21 | A-02_1920_Guest | extra-field | w: 코드 107 / Figma 105 | 신규 |
| D21 | A-02_1920_Signed-in | extra-field | w: 코드 107 / Figma 105 | 신규 |
| … | 나머지 14건 | | 화면별: A-02 10, R-01 10 | |

## 글자 속성 · extra-field (20건, M-12 0건)
- 고칠 쪽: **신규 판정 필요** 20건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1024_Guest | extra-field | 코드 null / Figma null 줄 높이 20→13 | 신규 |
| D21 | A-02_1024_Signed-in | extra-field | 코드 null / Figma null 줄 높이 20→13 | 신규 |
| D21 | A-02_1440_Guest | extra-field | 코드 null / Figma null 줄 높이 20→13 | 신규 |
| D21 | A-02_1440_Signed-in | extra-field | 코드 null / Figma null 줄 높이 20→13 | 신규 |
| D21 | A-02_1920_Guest | extra-field | 코드 null / Figma null 줄 높이 20→13 | 신규 |
| D21 | A-02_1920_Signed-in | extra-field | 코드 null / Figma null 줄 높이 20→13 | 신규 |
| … | 나머지 14건 | | 화면별: A-02 10, R-01 10 | |

## 위치/크기 · commit-bar · y (8건, M-12 20건)
- 고칠 쪽: **코드(M11)** 8건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma); 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1440_Guest | commit-bar | y: 코드 241 / Figma 233 | 코드 |
| D21 | A-02_1440_Signed-in | commit-bar | y: 코드 241 / Figma 233 | 코드 |
| D21 | A-02_1920_Guest | commit-bar | y: 코드 241 / Figma 233 | 코드 |
| D21 | A-02_1920_Signed-in | commit-bar | y: 코드 241 / Figma 233 | 코드 |
| D21 | R-01_1440_Guest | commit-bar | y: 코드 241 / Figma 233 | 코드 |
| D21 | R-01_1440_Signed-in | commit-bar | y: 코드 241 / Figma 233 | 코드 |
| … | 나머지 2건 | | 화면별: A-02 4, R-01 4 | |

## 모서리·안쪽·간격 · extra-field-filter (20건, M-12 20건)
- 고칠 쪽: **코드(M11)** 20건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-01_1024_Guest | extra-field-filter | 코드 null / Figma null 모서리 8→0 | 코드 |
| D21 | G-01_1024_Guest | extra-field-filter | 코드 null / Figma null 안쪽 0 12 0 12→0 0 0 0 | 코드 |
| D21 | G-01_1024_Signed-in | extra-field-filter | 코드 null / Figma null 모서리 8→0 | 코드 |
| D21 | G-01_1024_Signed-in | extra-field-filter | 코드 null / Figma null 안쪽 0 12 0 12→0 0 0 0 | 코드 |
| D21 | G-01_1440_Guest | extra-field-filter | 코드 null / Figma null 모서리 8→0 | 코드 |
| D21 | G-01_1440_Guest | extra-field-filter | 코드 null / Figma null 안쪽 0 12 0 12→0 0 0 0 | 코드 |
| … | 나머지 14건 | | 화면별: G-01 20 | |

## 코드에만 · tabs (20건, M-12 25건)
- 고칠 쪽: **코드(M11)** 20건
- 근거 예: UX/audit_v3/capture_map.md; UX/14_팀기능_배치.md; 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-01_1024_Guest | tabs | 코드에만 있음 | 코드 |
| D21 | G-01_1024_Signed-in | tabs | 코드에만 있음 | 코드 |
| D21 | G-01_1440_Guest | tabs | 코드에만 있음 | 코드 |
| D21 | G-01_1440_Signed-in | tabs | 코드에만 있음 | 코드 |
| D21 | G-01_1920_Guest | tabs | 코드에만 있음 | 코드 |
| D21 | G-01_1920_Signed-in | tabs | 코드에만 있음 | 코드 |
| … | 나머지 14건 | | 화면별: G-01 10, G-04 10 | |

## 위치/크기 · project-row · h (20건, M-12 16건)
- 고칠 쪽: **코드(M11)** 16건, **신규 판정 필요** 4건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-01_1440_Guest | project-row#4 | h: 코드 99 / Figma 119 | 코드 |
| D21 | G-01_1440_Guest | project-row#7 | h: 코드 71 / Figma 91 | 코드 |
| D21 | G-01_1440_Signed-in | project-row#4 | h: 코드 99 / Figma 119 | 코드 |
| D21 | G-01_1440_Signed-in | project-row#7 | h: 코드 71 / Figma 91 | 코드 |
| D21 | G-01_1920_Guest | project-row#4 | h: 코드 99 / Figma 119 | 코드 |
| D21 | G-01_1920_Guest | project-row#7 | h: 코드 71 / Figma 91 | 코드 |
| … | 나머지 14건 | | 화면별: G-01 16, G-02 4 | |

## 위치/크기 · gl-tabs · w (10건, M-12 20건)
- 고칠 쪽: **Figma(M11)** 10건
- 근거 예: ProjectStateTabs 동일 부품; 1440/360 내부160 실측; 화면별 패치 금지
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-04_1024_Guest | gl-tabs | w: 코드 168 / Figma 137 | Figma |
| D21 | G-04_1024_Signed-in | gl-tabs | w: 코드 168 / Figma 137 | Figma |
| D21 | G-04_1440_Guest | gl-tabs | w: 코드 168 / Figma 137 | Figma |
| D21 | G-04_1440_Signed-in | gl-tabs | w: 코드 168 / Figma 137 | Figma |
| D21 | G-04_1920_Guest | gl-tabs | w: 코드 168 / Figma 137 | Figma |
| D21 | G-04_1920_Signed-in | gl-tabs | w: 코드 168 / Figma 137 | Figma |
| … | 나머지 4건 | | 화면별: G-04 10 | |

## Figma에만 · tabbar (20건, M-12 20건)
- 고칠 쪽: **코드(M11)** 20건
- 근거 예: UX/handson/gitlab/40_탐색_그룹.png; code_plan/figma_full.json
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-04_1024_Guest | tabbar | Figma에만 {"x": 40, "y": 249, "w": 64, "h": 2} | 코드 |
| D21 | G-04_1024_Guest | tabbar#2 | Figma에만 {"x": 112, "y": 249, "w": 65, "h": 2} | 코드 |
| D21 | G-04_1024_Signed-in | tabbar | Figma에만 {"x": 40, "y": 249, "w": 64, "h": 2} | 코드 |
| D21 | G-04_1024_Signed-in | tabbar#2 | Figma에만 {"x": 112, "y": 249, "w": 65, "h": 2} | 코드 |
| D21 | G-04_1440_Guest | tabbar | Figma에만 {"x": 296, "y": 249, "w": 64, "h": 2} | 코드 |
| D21 | G-04_1440_Guest | tabbar#2 | Figma에만 {"x": 368, "y": 249, "w": 65, "h": 2} | 코드 |
| … | 나머지 14건 | | 화면별: G-04 20 | |

## 위치/크기 · section-title · y (10건, M-12 30건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-06_1024_Guest | section-title | y: 코드 205 / Figma 169 | 코드 |
| D21 | G-06_1024_Signed-in | section-title | y: 코드 205 / Figma 169 | 코드 |
| D21 | G-06_1440_Guest | section-title | y: 코드 205 / Figma 169 | 코드 |
| D21 | G-06_1440_Signed-in | section-title | y: 코드 205 / Figma 169 | 코드 |
| D21 | G-06_1920_Guest | section-title | y: 코드 205 / Figma 169 | 코드 |
| D21 | G-06_1920_Signed-in | section-title | y: 코드 205 / Figma 169 | 코드 |
| … | 나머지 4건 | | 화면별: G-06 10 | |

## 위치/크기 · file-table · y (8건, M-12 18건)
- 고칠 쪽: **코드(M11)** 8건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma); 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1440_Guest | file-table | y: 코드 307 / Figma 315 | 코드 |
| D21 | A-02_1440_Signed-in | file-table | y: 코드 307 / Figma 315 | 코드 |
| D21 | A-02_1920_Guest | file-table | y: 코드 307 / Figma 315 | 코드 |
| D21 | A-02_1920_Signed-in | file-table | y: 코드 307 / Figma 315 | 코드 |
| D21 | R-01_1440_Guest | file-table | y: 코드 307 / Figma 315 | 코드 |
| D21 | R-01_1440_Signed-in | file-table | y: 코드 307 / Figma 315 | 코드 |
| … | 나머지 2건 | | 화면별: A-02 4, R-01 4 | |

## 위치/크기 · repo-actions · x (16건, M-12 8건)
- 고칠 쪽: **신규 판정 필요** 8건, **코드(M11)** 8건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1024_Guest | repo-actions | x: 코드 762 / Figma 750 | 신규 |
| D21 | A-02_1024_Signed-in | repo-actions | x: 코드 762 / Figma 750 | 신규 |
| D21 | A-02_1440_Guest | repo-actions | x: 코드 1162 / Figma 830 | 신규 |
| D21 | A-02_1440_Signed-in | repo-actions | x: 코드 1162 / Figma 830 | 신규 |
| D21 | A-02_1920_Guest | repo-actions | x: 코드 1458 / Figma 1126 | 신규 |
| D21 | A-02_1920_Signed-in | repo-actions | x: 코드 1458 / Figma 1126 | 신규 |
| … | 나머지 10건 | | 화면별: A-02 8, R-01 8 | |

## 위치/크기 · readme · h (16건, M-12 16건)
- 고칠 쪽: **코드(M11)** 16건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma); 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1024_Guest | readme | h: 코드 5152 / Figma 5897 | 코드 |
| D21 | A-02_1024_Signed-in | readme | h: 코드 5152 / Figma 5897 | 코드 |
| D21 | A-02_1440_Guest | readme | h: 코드 5488 / Figma 5494 | 코드 |
| D21 | A-02_1440_Signed-in | readme | h: 코드 5488 / Figma 5494 | 코드 |
| D21 | A-02_1920_Guest | readme | h: 코드 5262 / Figma 5270 | 코드 |
| D21 | A-02_1920_Signed-in | readme | h: 코드 5263 / Figma 5270 | 코드 |
| … | 나머지 10건 | | 화면별: A-02 8, R-01 8 | |

## 위치/크기 · project-info · y (16건, M-12 16건)
- 고칠 쪽: **코드(M11)** 16건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma); 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1440_Guest | project-info | y: 코드 193 / Figma 121 | 코드 |
| D21 | A-02_1440_Signed-in | project-info | y: 코드 193 / Figma 121 | 코드 |
| D21 | A-02_1920_Guest | project-info | y: 코드 193 / Figma 121 | 코드 |
| D21 | A-02_1920_Signed-in | project-info | y: 코드 193 / Figma 121 | 코드 |
| D21 | A-02_360_Guest | project-info | y: 코드 245 / Figma 233 | 코드 |
| D21 | A-02_360_Signed-in | project-info | y: 코드 245 / Figma 233 | 코드 |
| … | 나머지 10건 | | 화면별: A-02 8, R-01 8 | |

## 위치/크기 · project-info · h (16건, M-12 16건)
- 고칠 쪽: **코드(M11)** 16건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma); 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1440_Guest | project-info | h: 코드 910 / Figma 967 | 코드 |
| D21 | A-02_1440_Signed-in | project-info | h: 코드 910 / Figma 967 | 코드 |
| D21 | A-02_1920_Guest | project-info | h: 코드 910 / Figma 967 | 코드 |
| D21 | A-02_1920_Signed-in | project-info | h: 코드 910 / Figma 967 | 코드 |
| D21 | A-02_360_Guest | project-info | h: 코드 774 / Figma 945 | 코드 |
| D21 | A-02_360_Signed-in | project-info | h: 코드 774 / Figma 945 | 코드 |
| … | 나머지 10건 | | 화면별: A-02 8, R-01 8 | |

## 위치/크기 · extra-field · y (16건, M-12 0건)
- 고칠 쪽: **신규 판정 필요** 16건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1440_Guest | extra-field | y: 코드 335 / Figma 263 | 신규 |
| D21 | A-02_1440_Signed-in | extra-field | y: 코드 335 / Figma 263 | 신규 |
| D21 | A-02_1920_Guest | extra-field | y: 코드 335 / Figma 263 | 신규 |
| D21 | A-02_1920_Signed-in | extra-field | y: 코드 335 / Figma 263 | 신규 |
| D21 | A-02_360_Guest | extra-field | y: 코드 365 / Figma 353 | 신규 |
| D21 | A-02_360_Signed-in | extra-field | y: 코드 365 / Figma 353 | 신규 |
| … | 나머지 10건 | | 화면별: A-02 8, R-01 8 | |

## 위치/크기 · language-bar · y (16건, M-12 16건)
- 고칠 쪽: **코드(M11)** 16건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1440_Guest | language-bar | y: 코드 375 / Figma 327 | 코드 |
| D21 | A-02_1440_Signed-in | language-bar | y: 코드 375 / Figma 327 | 코드 |
| D21 | A-02_1920_Guest | language-bar | y: 코드 375 / Figma 327 | 코드 |
| D21 | A-02_1920_Signed-in | language-bar | y: 코드 375 / Figma 327 | 코드 |
| D21 | A-02_360_Guest | language-bar | y: 코드 405 / Figma 417 | 코드 |
| D21 | A-02_360_Signed-in | language-bar | y: 코드 405 / Figma 417 | 코드 |
| … | 나머지 10건 | | 화면별: A-02 8, R-01 8 | |

## 모서리·안쪽·간격 · page-head (15건, M-12 15건)
- 고칠 쪽: **코드(M11)** 15건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-04_1024_Guest | page-head | 코드 null / Figma null 안쪽 0 0 6 0→0 0 0 0 | 코드 |
| D21 | G-04_1024_Signed-in | page-head | 코드 null / Figma null 안쪽 0 0 6 0→0 0 0 0 | 코드 |
| D21 | G-04_1440_Guest | page-head | 코드 null / Figma null 안쪽 0 0 6 0→0 0 0 0 | 코드 |
| D21 | G-04_1440_Signed-in | page-head | 코드 null / Figma null 안쪽 0 0 6 0→0 0 0 0 | 코드 |
| D21 | G-04_1920_Guest | page-head | 코드 null / Figma null 안쪽 0 0 6 0→0 0 0 0 | 코드 |
| D21 | G-04_1920_Signed-in | page-head | 코드 null / Figma null 안쪽 0 0 6 0→0 0 0 0 | 코드 |
| … | 나머지 9건 | | 화면별: G-04 10, G-07 5 | |

## 위치/크기 · results · h (14건, M-12 10건)
- 고칠 쪽: **코드(M11)** 10건, **신규 판정 필요** 4건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-01_1024_Guest | results | h: 코드 754 / Figma 683 | 코드 |
| D21 | A-01_1024_Signed-in | results | h: 코드 754 / Figma 683 | 코드 |
| D21 | A-01_1440_Guest | results | h: 코드 714 / Figma 643 | 코드 |
| D21 | A-01_1440_Signed-in | results | h: 코드 714 / Figma 643 | 코드 |
| D21 | A-01_1920_Guest | results | h: 코드 714 / Figma 643 | 코드 |
| D21 | A-01_1920_Signed-in | results | h: 코드 714 / Figma 643 | 코드 |
| … | 나머지 8건 | | 화면별: A-01 10, G-02 4 | |

## 모서리·안쪽·간격 · profile-activity (3건, M-12 13건)
- 고칠 쪽: **코드(M11)** 3건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선; 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-12_1440_Guest | profile-activity | 코드 null / Figma null 간격 12→0 | 코드 |
| D21 | G-12_360_Guest | profile-activity | 코드 null / Figma null 간격 12→0 | 코드 |
| D21 | G-12_768_Guest | profile-activity | 코드 null / Figma null 간격 12→0 | 코드 |

## 색 · filters (12건, M-12 12건)
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

## 위치/크기 · extra-reuse · x (12건, M-12 6건)
- 고칠 쪽: **신규 판정 필요** 6건, **코드(M11)** 6건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1440_Guest | extra-reuse | x: 코드 1266 / Figma 946 | 신규 |
| D21 | A-02_1440_Signed-in | extra-reuse | x: 코드 1266 / Figma 946 | 신규 |
| D21 | A-02_1920_Guest | extra-reuse | x: 코드 1562 / Figma 1242 | 신규 |
| D21 | A-02_1920_Signed-in | extra-reuse | x: 코드 1562 / Figma 1242 | 신규 |
| D21 | A-02_360_Guest | extra-reuse | x: 코드 120 / Figma 132 | 신규 |
| D21 | A-02_360_Signed-in | extra-reuse | x: 코드 120 / Figma 132 | 신규 |
| … | 나머지 6건 | | 화면별: A-02 6, R-01 6 | |

## 위치/크기 · tabs · y (2건, M-12 17건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-05_360_Guest | tabs | y: 코드 187 / Figma 191 | 코드 |
| D21 | A-05_360_Signed-in | tabs | y: 코드 187 / Figma 191 | 코드 |

## 문구 · group-row (12건, M-12 8건)
- 고칠 쪽: **Figma(M11)** 11건, **Figma(M10)** 1건
- 근거 예: UX/07 5·10·11·13절; P11_Organizations useCounts; P33_Profile ago
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-04_1440_Guest | group-row#9 | 코드 "S sparrow8dast2text4 - - - 생성됨 3주 전" / Figma ["0", "0"]  | Figma |
| D21 | G-04_1440_Guest | group-row#10 | 코드 "S sparrow8dast2text4 - - - 생성됨 3주 전" / Figma ["0", "0"]  | Figma |
| D21 | G-04_1440_Guest | group-row#11 | 코드 "S sparrow8dast2text4 - - - 생성됨 3주 전" / Figma ["0", "0"]  | Figma |
| D21 | G-04_1920_Guest | group-row#6 | 코드 "S sparrow8dast2text4 - - - 생성됨 3주 전" / Figma ["0", "0"]  | Figma |
| D21 | G-04_1920_Guest | group-row#7 | 코드 "S sparrow8dast2text4 - - - 생성됨 3주 전" / Figma ["0", "0"]  | Figma |
| D21 | G-04_1920_Guest | group-row#8 | 코드 "S sparrow8dast2text4 - - - 생성됨 3주 전" / Figma ["0", "0"]  | Figma |
| … | 나머지 6건 | | 화면별: G-04 12 | |

## 아이콘 · gl-filter (2건, M-12 12건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-04_360_Guest | gl-filter | 코드 ["arrow-down", "search", "sort-desc"] / Figma ["arrow-down", "search"]  | 코드 |
| D21 | G-04_360_Signed-in | gl-filter | 코드 ["arrow-down", "search", "sort-desc"] / Figma ["arrow-down", "search"]  | 코드 |

## 위치/크기 · section-title · x (10건, M-12 11건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-06_1024_Guest | section-title | x: 코드 64 / Figma 40 | 코드 |
| D21 | G-06_1024_Signed-in | section-title | x: 코드 64 / Figma 40 | 코드 |
| D21 | G-06_1440_Guest | section-title | x: 코드 320 / Figma 296 | 코드 |
| D21 | G-06_1440_Signed-in | section-title | x: 코드 320 / Figma 296 | 코드 |
| D21 | G-06_1920_Guest | section-title | x: 코드 504 / Figma 480 | 코드 |
| D21 | G-06_1920_Signed-in | section-title | x: 코드 504 / Figma 480 | 코드 |
| … | 나머지 4건 | | 화면별: G-06 10 | |

## 위치/크기 · section-title · w (10건, M-12 21건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-06_1024_Guest | section-title | w: 코드 896 / Figma 944 | 코드 |
| D21 | G-06_1024_Signed-in | section-title | w: 코드 896 / Figma 944 | 코드 |
| D21 | G-06_1440_Guest | section-title | w: 코드 1040 / Figma 1088 | 코드 |
| D21 | G-06_1440_Signed-in | section-title | w: 코드 1040 / Figma 1088 | 코드 |
| D21 | G-06_1920_Guest | section-title | w: 코드 1152 / Figma 1200 | 코드 |
| D21 | G-06_1920_Signed-in | section-title | w: 코드 1152 / Figma 1200 | 코드 |
| … | 나머지 4건 | | 화면별: G-06 10 | |

## 위치/크기 · profile-activity · h (1건, M-12 11건)
- 고칠 쪽: **코드(M11)** 1건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-12_360_Guest | profile-activity | h: 코드 189 / Figma 174 | 코드 |

## 색 · filter-search (10건, M-12 10건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: capture_map.md; 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-01_1024_Guest | filter-search | 코드 "#8a949e gray-40" / Figma "#33363d color/layout/panel-border"  | 코드 |
| D21 | G-01_1024_Signed-in | filter-search | 코드 "#8a949e gray-40" / Figma "#33363d color/layout/panel-border"  | 코드 |
| D21 | G-01_1440_Guest | filter-search | 코드 "#8a949e gray-40" / Figma "#33363d color/layout/panel-border"  | 코드 |
| D21 | G-01_1440_Signed-in | filter-search | 코드 "#8a949e gray-40" / Figma "#33363d color/layout/panel-border"  | 코드 |
| D21 | G-01_1920_Guest | filter-search | 코드 "#8a949e gray-40" / Figma "#33363d color/layout/panel-border"  | 코드 |
| D21 | G-01_1920_Signed-in | filter-search | 코드 "#8a949e gray-40" / Figma "#33363d color/layout/panel-border"  | 코드 |
| … | 나머지 4건 | | 화면별: G-01 10 | |

## 위치/크기 · steps · y (10건, M-12 10건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | R-30_1024_Guest | steps | y: 코드 686 / Figma 313 | 코드 |
| D21 | R-30_1024_Signed-in | steps | y: 코드 686 / Figma 313 | 코드 |
| D21 | R-30_1440_Guest | steps | y: 코드 686 / Figma 313 | 코드 |
| D21 | R-30_1440_Signed-in | steps | y: 코드 686 / Figma 313 | 코드 |
| D21 | R-30_1920_Guest | steps | y: 코드 686 / Figma 311 | 코드 |
| D21 | R-30_1920_Signed-in | steps | y: 코드 686 / Figma 313 | 코드 |
| … | 나머지 4건 | | 화면별: R-30 10 | |

## 위치/크기 · steps · h (10건, M-12 10건)
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

## 순서 · (화면) (9건, M-12 9건)
- 고칠 쪽: **코드(M11)** 9건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma); 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1440_Guest | (화면) | 코드 "system-band > topbar > global-search > body > gitlab-sideba / Figma "system-band > topbar > global-search > body > gitlab-sideba  | 코드 |
| D21 | A-02_1440_Signed-in | (화면) | 코드 "system-band > topbar > global-search > body > gitlab-sideba / Figma "system-band > topbar > global-search > body > gitlab-sideba  | 코드 |
| D21 | A-02_1920_Guest | (화면) | 코드 "system-band > topbar > global-search > body > gitlab-sideba / Figma "system-band > topbar > global-search > body > gitlab-sideba  | 코드 |
| D21 | A-02_1920_Signed-in | (화면) | 코드 "system-band > topbar > global-search > body > gitlab-sideba / Figma "system-band > topbar > global-search > body > gitlab-sideba  | 코드 |
| D21 | G-12_1440_Guest | (화면) | 코드 "system-band > topbar > global-search > body > gitlab-sideba / Figma "system-band > topbar > global-search > body > gitlab-sideba  | 코드 |
| D21 | R-01_1440_Guest | (화면) | 코드 "system-band > topbar > global-search > body > gitlab-sideba / Figma "system-band > topbar > global-search > body > gitlab-sideba  | 코드 |
| … | 나머지 3건 | | 화면별: A-02 4, R-01 4, G-12 1 | |

## 위치/크기 · section-title · h (7건, M-12 9건)
- 고칠 쪽: **코드(M11)** 7건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-06_1024_Guest | section-title | h: 코드 22 / Figma 2 | 코드 |
| D21 | G-06_1024_Signed-in | section-title | h: 코드 22 / Figma 40 | 코드 |
| D21 | G-06_1440_Guest | section-title | h: 코드 22 / Figma 2 | 코드 |
| D21 | G-06_1440_Signed-in | section-title | h: 코드 22 / Figma 40 | 코드 |
| D21 | G-06_1920_Guest | section-title | h: 코드 22 / Figma 2 | 코드 |
| D21 | G-06_1920_Signed-in | section-title | h: 코드 22 / Figma 40 | 코드 |
| … | 나머지 1건 | | 화면별: G-06 7 | |

## 색 · search-filter (8건, M-12 8건)
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

## 모서리·안쪽·간격 · readme (8건, M-12 8건)
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

## 위치/크기 · toolbar · y (8건, M-12 8건)
- 고칠 쪽: **코드(M11)** 8건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma); 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1440_Guest | toolbar | y: 코드 193 / Figma 185 | 코드 |
| D21 | A-02_1440_Signed-in | toolbar | y: 코드 193 / Figma 185 | 코드 |
| D21 | A-02_1920_Guest | toolbar | y: 코드 193 / Figma 185 | 코드 |
| D21 | A-02_1920_Signed-in | toolbar | y: 코드 193 / Figma 185 | 코드 |
| D21 | R-01_1440_Guest | toolbar | y: 코드 193 / Figma 185 | 코드 |
| D21 | R-01_1440_Signed-in | toolbar | y: 코드 193 / Figma 185 | 코드 |
| … | 나머지 2건 | | 화면별: A-02 4, R-01 4 | |

## 위치/크기 · footer · w (6건, M-12 4건)
- 고칠 쪽: **신규 판정 필요** 4건, **Figma(M11)** 2건
- 근거 예: D-21 7-1/7-2; D-20; UX/07 7절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-03_1440_Guest | footer | w: 코드 1088 / Figma 1136 | Figma |
| D21 | G-03_1440_Signed-in | footer | w: 코드 1088 / Figma 1136 | Figma |
| D21 | G-10_1024_Signed-in | footer | w: 코드 929 / Figma 944 | 신규 |
| D21 | G-10_1440_Signed-in | footer | w: 코드 1073 / Figma 1088 | 신규 |
| D21 | G-10_360_Signed-in | footer | w: 코드 313 / Figma 328 | 신규 |
| D21 | G-10_768_Signed-in | footer | w: 코드 689 / Figma 704 | 신규 |

## 모서리·안쪽·간격 · search (8건, M-12 8건)
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

## 위치/크기 · main · y (3건, M-12 5건)
- 고칠 쪽: **Figma(M11)** 3건
- 근거 예: D-21 7-1/7-2; D-20; UX/07 7절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-12_1440_Guest | main | y: 코드 81 / Figma 121 | Figma |
| D21 | G-12_360_Guest | main | y: 코드 81 / Figma 121 | Figma |
| D21 | G-12_768_Guest | main | y: 코드 81 / Figma 121 | Figma |

## 위치/크기 · file-table · h (4건, M-12 6건)
- 고칠 쪽: **둘 다(M11)** 4건
- 근거 예: 정정: D-21 실제 파일 행42가 정답. v3의40 유지 판정은 취소. tbody42/thead40, fixture root35/src44+상위1. parent 원문재확인; UX/audit_v3/02_프로젝트홈_파
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_768_Guest | file-table | h: 코드 1511 / Figma 1470 | 둘 다 |
| D21 | A-02_768_Signed-in | file-table | h: 코드 1511 / Figma 1470 | 둘 다 |
| D21 | R-01_768_Guest | file-table | h: 코드 1511 / Figma 1470 | 둘 다 |
| D21 | R-01_768_Signed-in | file-table | h: 코드 1511 / Figma 1470 | 둘 다 |

## 문구 · filters (6건, M-12 6건)
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

## 위치/크기 · group-row · y (6건, M-12 6건)
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

## 위치/크기 · main · w (4건, M-12 2건)
- 고칠 쪽: **신규 판정 필요** 4건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-10_1024_Signed-in | main | w: 코드 929 / Figma 944 | 신규 |
| D21 | G-10_1440_Signed-in | main | w: 코드 1073 / Figma 1088 | 신규 |
| D21 | G-10_360_Signed-in | main | w: 코드 313 / Figma 328 | 신규 |
| D21 | G-10_768_Signed-in | main | w: 코드 689 / Figma 704 | 신규 |

## 코드에만 · checks (5건, M-12 5건)
- 고칠 쪽: **Figma(M11)** 5건
- 근거 예: UX/14_팀기능_배치.md 1/3절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-03_1024_Guest | checks | 코드에만 있음 | Figma |
| D21 | A-03_1440_Guest | checks | 코드에만 있음 | Figma |
| D21 | A-03_1920_Guest | checks | 코드에만 있음 | Figma |
| D21 | A-03_360_Guest | checks | 코드에만 있음 | Figma |
| D21 | A-03_768_Guest | checks | 코드에만 있음 | Figma |

## 위치/크기 · checks · y (5건, M-12 5건)
- 고칠 쪽: **코드(M11)** 5건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-03_1024_Signed-in | checks | y: 코드 205 / Figma 169 | 코드 |
| D21 | A-03_1440_Signed-in | checks | y: 코드 205 / Figma 169 | 코드 |
| D21 | A-03_1920_Signed-in | checks | y: 코드 205 / Figma 169 | 코드 |
| D21 | A-03_360_Signed-in | checks | y: 코드 197 / Figma 161 | 코드 |
| D21 | A-03_768_Signed-in | checks | y: 코드 205 / Figma 169 | 코드 |

## Figma에만 · project-row (5건, M-12 5건)
- 고칠 쪽: **사용자확인(M11)** 5건
- 근거 예: UX/audit_v3/parity_ledger.md pending
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-06_1024_Signed-in | project-row | Figma에만 {"x": 41, "y": 266, "w": 942, "h": 97} | 사용자확인 |
| D21 | G-06_1440_Signed-in | project-row | Figma에만 {"x": 297, "y": 266, "w": 1086, "h": 97} | 사용자확인 |
| D21 | G-06_1920_Signed-in | project-row | Figma에만 {"x": 481, "y": 266, "w": 1198, "h": 97} | 사용자확인 |
| D21 | G-06_360_Signed-in | project-row | Figma에만 {"x": 17, "y": 288, "w": 326, "h": 97} | 사용자확인 |
| D21 | G-06_768_Signed-in | project-row | Figma에만 {"x": 33, "y": 266, "w": 702, "h": 97} | 사용자확인 |

## 색 · intro-card (4건, M-12 4건)
- 고칠 쪽: **신규 판정 필요** 4건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_1024_Guest | intro-card | 코드 "#33363d gray-80" / Figma "#464c53 color/layout/divider"  | 신규 |
| D21 | A-02_1024_Signed-in | intro-card | 코드 "#33363d gray-80" / Figma "#464c53 color/layout/divider"  | 신규 |
| D21 | R-01_1024_Guest | intro-card | 코드 "#33363d gray-80" / Figma "#464c53 color/layout/divider"  | 신규 |
| D21 | R-01_1024_Signed-in | intro-card | 코드 "#33363d gray-80" / Figma "#464c53 color/layout/divider"  | 신규 |

## 아이콘 · toolbar (4건, M-12 12건)
- 고칠 쪽: **코드(M11)** 4건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma); 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음); D-21 6장 
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_360_Guest | toolbar | 코드 ["arrow-down", "branch", "download", "ellipsis-vertical"] / Figma ["arrow-down", "branch", "ellipsis-vertical"]  | 코드 |
| D21 | A-02_360_Signed-in | toolbar | 코드 ["arrow-down", "branch", "download", "ellipsis-vertical"] / Figma ["arrow-down", "branch", "ellipsis-vertical"]  | 코드 |
| D21 | R-01_360_Guest | toolbar | 코드 ["arrow-down", "branch", "download", "ellipsis-vertical"] / Figma ["arrow-down", "branch", "ellipsis-vertical"]  | 코드 |
| D21 | R-01_360_Signed-in | toolbar | 코드 ["arrow-down", "branch", "download", "ellipsis-vertical"] / Figma ["arrow-down", "branch", "ellipsis-vertical"]  | 코드 |

## 위치/크기 · repo-actions · y (4건, M-12 2건)
- 고칠 쪽: **신규 판정 필요** 2건, **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_360_Guest | repo-actions | y: 코드 181 / Figma 177 | 신규 |
| D21 | A-02_360_Signed-in | repo-actions | y: 코드 181 / Figma 177 | 신규 |
| D21 | R-01_360_Guest | repo-actions | y: 코드 181 / Figma 177 | 코드 |
| D21 | R-01_360_Signed-in | repo-actions | y: 코드 181 / Figma 177 | 코드 |

## 위치/크기 · extra-reuse · y (4건, M-12 2건)
- 고칠 쪽: **신규 판정 필요** 2건, **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_360_Guest | extra-reuse | y: 코드 181 / Figma 177 | 신규 |
| D21 | A-02_360_Signed-in | extra-reuse | y: 코드 181 / Figma 177 | 신규 |
| D21 | R-01_360_Guest | extra-reuse | y: 코드 181 / Figma 177 | 코드 |
| D21 | R-01_360_Signed-in | extra-reuse | y: 코드 181 / Figma 177 | 코드 |

## 위치/크기 · extra-reuse · w (4건, M-12 2건)
- 고칠 쪽: **신규 판정 필요** 2건, **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_360_Guest | extra-reuse | w: 코드 188 / Figma 82 | 신규 |
| D21 | A-02_360_Signed-in | extra-reuse | w: 코드 188 / Figma 82 | 신규 |
| D21 | R-01_360_Guest | extra-reuse | w: 코드 188 / Figma 82 | 코드 |
| D21 | R-01_360_Signed-in | extra-reuse | w: 코드 188 / Figma 82 | 코드 |

## 위치/크기 · intro-card · h (4건, M-12 4건)
- 고칠 쪽: **코드(M11)** 4건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma); 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-02_768_Guest | intro-card | h: 코드 305 / Figma 331 | 코드 |
| D21 | A-02_768_Signed-in | intro-card | h: 코드 305 / Figma 331 | 코드 |
| D21 | R-01_768_Guest | intro-card | h: 코드 305 / Figma 331 | 코드 |
| D21 | R-01_768_Signed-in | intro-card | h: 코드 305 / Figma 331 | 코드 |

## 위치/크기 · footer · x (2건, M-12 4건)
- 고칠 쪽: **Figma(M11)** 2건
- 근거 예: D-21 7-1/7-2; D-20; UX/07 7절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-03_1440_Guest | footer | x: 코드 296 / Figma 272 | Figma |
| D21 | G-03_1440_Signed-in | footer | x: 코드 296 / Figma 272 | Figma |

## 글자 속성 · section-title (4건, M-12 4건)
- 고칠 쪽: **Figma(M11)** 4건
- 근거 예: D-16; UX/07 4절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-06_1024_Signed-in | section-title | 코드 null / Figma null 굵기 400→700 | Figma |
| D21 | G-06_1440_Signed-in | section-title | 코드 null / Figma null 굵기 400→700 | Figma |
| D21 | G-06_1920_Signed-in | section-title | 코드 null / Figma null 굵기 400→700 | Figma |
| D21 | G-06_768_Signed-in | section-title | 코드 null / Figma null 굵기 400→700 | Figma |

## 색 · section-title (4건, M-12 4건)
- 고칠 쪽: **Figma(M11)** 4건
- 근거 예: D-15; v2/measure.md 제목 글자
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-06_1024_Signed-in | section-title | 코드 "#f4f5f6 gray-5" / Figma "#ffffff color/text/inverse-static"  | Figma |
| D21 | G-06_1440_Signed-in | section-title | 코드 "#f4f5f6 gray-5" / Figma "#ffffff color/text/inverse-static"  | Figma |
| D21 | G-06_1920_Signed-in | section-title | 코드 "#f4f5f6 gray-5" / Figma "#ffffff color/text/inverse-static"  | Figma |
| D21 | G-06_768_Signed-in | section-title | 코드 "#f4f5f6 gray-5" / Figma "#ffffff color/text/inverse-static"  | Figma |

## 코드에만 · page-head (3건, M-12 11건)
- 고칠 쪽: **Figma(M11)** 3건
- 근거 예: UX/handson/gitlab/01_탐색_프로젝트목록_기본.png; UX/14_팀기능_배치.md; UX/handson/gitlab/48_그룹_사용자페이지.png; UX/14_팀기능_배치.md; UX/handson/
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-12_1440_Guest | page-head | 코드에만 있음 | Figma |
| D21 | G-12_360_Guest | page-head | 코드에만 있음 | Figma |
| D21 | G-12_768_Guest | page-head | 코드에만 있음 | Figma |

## 코드에만 · activity-calendar (3건, M-12 3건)
- 고칠 쪽: **Figma(M11)** 3건
- 근거 예: code_plan/measured_G-12_codeonly.json; UX/handson/gitlab/48_그룹_사용자페이지.png; 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-12_1440_Guest | activity-calendar | 코드에만 있음 | Figma |
| D21 | G-12_360_Guest | activity-calendar | 코드에만 있음 | Figma |
| D21 | G-12_768_Guest | activity-calendar | 코드에만 있음 | Figma |

## 위치/크기 · extra-field-filter · w (2건, M-12 2건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-01_360_Guest | extra-field-filter | w: 코드 102 / Figma 107 | 코드 |
| D21 | G-01_360_Signed-in | extra-field-filter | w: 코드 102 / Figma 107 | 코드 |

## 모서리·안쪽·간격 · filter-search (2건, M-12 2건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-01_360_Guest | filter-search | 코드 null / Figma null 안쪽 0 0 0 0→0 4 0 4 | 코드 |
| D21 | G-01_360_Signed-in | filter-search | 코드 null / Figma null 안쪽 0 0 0 0→0 4 0 4 | 코드 |

## 위치/크기 · gl-filter · h (2건, M-12 2건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-04_360_Guest | gl-filter | h: 코드 105 / Figma 65 | 코드 |
| D21 | G-04_360_Signed-in | gl-filter | h: 코드 105 / Figma 65 | 코드 |

## 위치/크기 · search · w (2건, M-12 2건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-04_360_Guest | search | w: 코드 296 / Figma 183 | 코드 |
| D21 | G-04_360_Signed-in | search | w: 코드 296 / Figma 183 | 코드 |

## 색 · search (2건, M-12 2건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: capture_map.md; 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-04_360_Guest | search | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  | 코드 |
| D21 | G-04_360_Signed-in | search | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  | 코드 |

## 위치/크기 · checks · h (1건, M-12 1건)
- 고칠 쪽: **코드(M11)** 1건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-03_360_Signed-in | checks | h: 코드 508 / Figma 540 | 코드 |

## 모서리·안쪽·간격 · checks (1건, M-12 1건)
- 고칠 쪽: **코드(M11)** 1건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | A-03_360_Signed-in | checks | 코드 null / Figma null 간격 20→12 | 코드 |

## 위치/크기 · profile-event · h (1건, M-12 1건)
- 고칠 쪽: **코드(M11)** 1건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| D21 | G-12_360_Guest | profile-event#19 | h: 코드 122 / Figma 144 | 코드 |
