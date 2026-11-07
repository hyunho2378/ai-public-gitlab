# M-13 담당 C1+C2 작업 목록

- 생성: M-13 측정(시작 HEAD 68d475b, 대조 시점 594722c, 개발 서버 5994, 고정 시각 now=2026-11-07T10:00:00+09:00, 스크롤 막대 0, 비동기 대기) 대 Figma 합본 figma_full.json 2026-11-07 10:58(598 변형)
- 판정은 행 단위(화면·폭·요소·속성)로 M11>M10>M9>M8 판정(side)을 이어받았다. 행에 판정이 없으면 '신규, 판정 필요'. 판정 완료는 수정 완료가 아니다
- 판정 쪽별 합계(이 담당): 코드 317, Figma 168, 신규 판정 필요 25, 매핑 12, 둘 다 4

## 문구 · section-title (39건, M-12 43건)
- 고칠 쪽: **Figma(M11)** 39건
- 근거 예: UX/07; D-19; R07 활성 브랜치 제목과 새 브랜치 CTA의 역할을 섞지 않음. R25 실제 copy/work 문자열/공개 API 기준. 측정 이름표를 헤더 안 단추와 본문 제목 사이에서 혼용하지 않음
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-07_1024_Signed-in | section-title | 코드 "활성 브랜치" / Figma ["새 브랜치"]  | Figma |
| C1 | R-07_1440_Signed-in | section-title | 코드 "활성 브랜치" / Figma ["새 브랜치"]  | Figma |
| C1 | R-07_1920_Signed-in | section-title | 코드 "활성 브랜치" / Figma ["새 브랜치"]  | Figma |
| C1 | R-07_768_Signed-in | section-title | 코드 "활성 브랜치" / Figma ["새 브랜치"]  | Figma |
| C1 | R-25_1024_Guest | section-title | 코드 "이 리포지토리에 사용된 프로그래밍 언어" / Figma ["이 리포지토리에 사용 된 프로그래밍 언어"]  | Figma |
| C1 | R-25_1024_Guest | section-title#2 | 코드 "코드 커버리지 통계" / Figma ["main Aug 01 - Oct 30 기간의 코드 커버리지 통계"]  | Figma |
| … | 나머지 33건 | | 화면별: R-25 30, R-26 5, R-07 4 | |

## 위치/크기 · sidebar-nav · w (36건, M-12 40건)
- 고칠 쪽: **Figma(M11)** 36건
- 근거 예: UX/17 1절 스크롤; D-16; sidebar-spec.json
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-06_1440_Guest | sidebar-nav | w: 코드 213 / Figma 224 | Figma |
| C1 | R-06_1440_Signed-in | sidebar-nav | w: 코드 213 / Figma 224 | Figma |
| C1 | R-06_1920_Guest | sidebar-nav | w: 코드 213 / Figma 224 | Figma |
| C1 | R-06_1920_Signed-in | sidebar-nav | w: 코드 213 / Figma 224 | Figma |
| C1 | R-07_1440_Guest | sidebar-nav | w: 코드 213 / Figma 224 | Figma |
| C1 | R-07_1440_Signed-in | sidebar-nav | w: 코드 213 / Figma 224 | Figma |
| … | 나머지 30건 | | 화면별: R-06 4, R-07 4, R-13 4, R-15 4, R-18 4, R-21 4, R-22 4, R-23 4, R-29 4 | |

## 위치/크기 · filter-search · x (32건, M-12 34건)
- 고칠 쪽: **코드(M11)** 32건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-11_1024_Guest | filter-search | x: 코드 855 / Figma 867 | 코드 |
| C2 | R-11_1024_Signed-in | filter-search | x: 코드 855 / Figma 867 | 코드 |
| C2 | R-11_1440_Guest | filter-search | x: 코드 1255 / Figma 1267 | 코드 |
| C2 | R-11_1440_Signed-in | filter-search | x: 코드 1255 / Figma 1267 | 코드 |
| C2 | R-11_1920_Guest | filter-search | x: 코드 1551 / Figma 1563 | 코드 |
| C2 | R-11_1920_Signed-in | filter-search | x: 코드 1551 / Figma 1563 | 코드 |
| … | 나머지 26건 | | 화면별: R-11 8, R-16 8, R-20 8, R-23 8 | |

## Figma에만 · tabs (5건, M-12 20건)
- 고칠 쪽: **신규 판정 필요** 5건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-27_1024_Signed-in | tabs | Figma에만 {"x": 40, "y": 351, "w": 944, "h": 40} | 신규 |
| C1 | R-27_1440_Signed-in | tabs | Figma에만 {"x": 296, "y": 351, "w": 1088, "h": 40} | 신규 |
| C1 | R-27_1920_Signed-in | tabs | Figma에만 {"x": 480, "y": 351, "w": 1200, "h": 40} | 신규 |
| C1 | R-27_360_Signed-in | tabs | Figma에만 {"x": 16, "y": 365, "w": 328, "h": 40} | 신규 |
| C1 | R-27_768_Signed-in | tabs | Figma에만 {"x": 32, "y": 351, "w": 704, "h": 40} | 신규 |

## 위치/크기 · sidebar-nav · h (20건, M-12 24건)
- 고칠 쪽: **Figma(M11)** 20건
- 근거 예: UX/17_사이드바_실측.md; D-16
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-10_1440_Guest | sidebar-nav | h: 코드 720 / Figma 625 | Figma |
| C2 | R-10_1440_Signed-in | sidebar-nav | h: 코드 720 / Figma 625 | Figma |
| C2 | R-10_1920_Guest | sidebar-nav | h: 코드 720 / Figma 625 | Figma |
| C2 | R-10_1920_Signed-in | sidebar-nav | h: 코드 720 / Figma 625 | Figma |
| C1 | R-25_1440_Guest | sidebar-nav | h: 코드 720 / Figma 625 | Figma |
| C1 | R-25_1440_Signed-in | sidebar-nav | h: 코드 720 / Figma 625 | Figma |
| … | 나머지 14건 | | 화면별: R-10 4, R-25 4, R-26 4, R-27 4, R-28 4 | |

## 위치/크기 · page-head · h (2건, M-12 25건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-05_360_Guest | page-head | h: 코드 123 / Figma 111 | 코드 |
| C1 | R-05_360_Signed-in | page-head | h: 코드 123 / Figma 111 | 코드 |

## 위치/크기 · commit-bar · y (12건, M-12 20건)
- 고칠 쪽: **코드(M11)** 12건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-02_1024_Guest | commit-bar | y: 코드 233 / Figma 225 | 코드 |
| C1 | R-02_1024_Signed-in | commit-bar | y: 코드 233 / Figma 225 | 코드 |
| C1 | R-02_1440_Guest | commit-bar | y: 코드 233 / Figma 225 | 코드 |
| C1 | R-02_1440_Signed-in | commit-bar | y: 코드 233 / Figma 225 | 코드 |
| C1 | R-02_1920_Guest | commit-bar | y: 코드 233 / Figma 225 | 코드 |
| C1 | R-02_1920_Signed-in | commit-bar | y: 코드 233 / Figma 225 | 코드 |
| … | 나머지 6건 | | 화면별: R-02 10, R-03 2 | |

## 위치/크기 · gl-tabs · w (10건, M-12 20건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-14_1024_Guest | gl-tabs | w: 코드 944 / Figma 641 | 코드 |
| C2 | R-14_1024_Signed-in | gl-tabs | w: 코드 944 / Figma 641 | 코드 |
| C2 | R-14_1440_Guest | gl-tabs | w: 코드 1088 / Figma 785 | 코드 |
| C2 | R-14_1440_Signed-in | gl-tabs | w: 코드 1088 / Figma 785 | 코드 |
| C2 | R-14_1920_Guest | gl-tabs | w: 코드 1200 / Figma 897 | 코드 |
| C2 | R-14_1920_Signed-in | gl-tabs | w: 코드 1200 / Figma 897 | 코드 |
| … | 나머지 4건 | | 화면별: R-14 10 | |

## 위치/크기 · section-title · y (10건, M-12 30건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-25_1024_Guest | section-title#2 | y: 코드 588 / Figma 520 | 코드 |
| C1 | R-25_1024_Signed-in | section-title#2 | y: 코드 588 / Figma 520 | 코드 |
| C1 | R-25_1440_Guest | section-title#2 | y: 코드 588 / Figma 520 | 코드 |
| C1 | R-25_1440_Signed-in | section-title#2 | y: 코드 588 / Figma 520 | 코드 |
| C1 | R-25_1920_Guest | section-title#2 | y: 코드 588 / Figma 520 | 코드 |
| C1 | R-25_1920_Signed-in | section-title#2 | y: 코드 588 / Figma 520 | 코드 |
| … | 나머지 4건 | | 화면별: R-25 10 | |

## 위치/크기 · file-table · y (10건, M-12 18건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-02_1024_Guest | file-table | y: 코드 299 / Figma 307 | 코드 |
| C1 | R-02_1024_Signed-in | file-table | y: 코드 299 / Figma 307 | 코드 |
| C1 | R-02_1440_Guest | file-table | y: 코드 299 / Figma 307 | 코드 |
| C1 | R-02_1440_Signed-in | file-table | y: 코드 299 / Figma 307 | 코드 |
| C1 | R-02_1920_Guest | file-table | y: 코드 299 / Figma 307 | 코드 |
| C1 | R-02_1920_Signed-in | file-table | y: 코드 299 / Figma 307 | 코드 |
| … | 나머지 4건 | | 화면별: R-02 10 | |

## 문구 · page-head (14건, M-12 14건)
- 고칠 쪽: **Figma(M11)** 14건
- 근거 예: UX/07_밀도_문구_기준.md 5/10/11/13절; D-19
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-05_1024_Guest | page-head | 코드 "커밋 03f9484e 작성됨 8일 전 작성자 C 서울특별시 광진구 류승인 파일 찾아보기 옵션" / Figma ["작성됨 8일 전 · 서울특별시 광진구 류승인"]  | Figma |
| C1 | R-05_1024_Signed-in | page-head | 코드 "커밋 03f9484e 작성됨 8일 전 작성자 C 서울특별시 광진구 류승인 파일 찾아보기 옵션" / Figma ["작성됨 8일 전 · 서울특별시 광진구 류승인"]  | Figma |
| C1 | R-05_1440_Guest | page-head | 코드 "커밋 03f9484e 작성됨 8일 전 작성자 C 서울특별시 광진구 류승인 파일 찾아보기 옵션" / Figma ["작성됨 8일 전 · 서울특별시 광진구 류승인"]  | Figma |
| C1 | R-05_1440_Signed-in | page-head | 코드 "커밋 03f9484e 작성됨 8일 전 작성자 C 서울특별시 광진구 류승인 파일 찾아보기 옵션" / Figma ["작성됨 8일 전 · 서울특별시 광진구 류승인"]  | Figma |
| C1 | R-05_1920_Guest | page-head | 코드 "커밋 03f9484e 작성됨 8일 전 작성자 C 서울특별시 광진구 류승인 파일 찾아보기 옵션" / Figma ["작성됨 8일 전 · 서울특별시 광진구 류승인"]  | Figma |
| C1 | R-05_1920_Signed-in | page-head | 코드 "커밋 03f9484e 작성됨 8일 전 작성자 C 서울특별시 광진구 류승인 파일 찾아보기 옵션" / Figma ["작성됨 8일 전 · 서울특별시 광진구 류승인"]  | Figma |
| … | 나머지 8건 | | 화면별: R-05 10, R-23 4 | |

## 모서리·안쪽·간격 · profile-activity (10건, M-12 13건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선; 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-17_1024_Guest | profile-activity | 코드 null / Figma null 간격 8→0 | 코드 |
| C2 | R-17_1024_Signed-in | profile-activity | 코드 null / Figma null 간격 8→0 | 코드 |
| C2 | R-17_1440_Guest | profile-activity | 코드 null / Figma null 간격 8→0 | 코드 |
| C2 | R-17_1440_Signed-in | profile-activity | 코드 null / Figma null 간격 8→0 | 코드 |
| C2 | R-17_1920_Guest | profile-activity | 코드 null / Figma null 간격 8→0 | 코드 |
| C2 | R-17_1920_Signed-in | profile-activity | 코드 null / Figma null 간격 8→0 | 코드 |
| … | 나머지 4건 | | 화면별: R-17 10 | |

## 위치/크기 · tabs · y (10건, M-12 17건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-17_1024_Guest | tabs | y: 코드 231 / Figma 221 | 코드 |
| C2 | R-17_1024_Signed-in | tabs | y: 코드 231 / Figma 221 | 코드 |
| C2 | R-17_1440_Guest | tabs | y: 코드 231 / Figma 221 | 코드 |
| C2 | R-17_1440_Signed-in | tabs | y: 코드 231 / Figma 221 | 코드 |
| C2 | R-17_1920_Guest | tabs | y: 코드 231 / Figma 221 | 코드 |
| C2 | R-17_1920_Signed-in | tabs | y: 코드 231 / Figma 221 | 코드 |
| … | 나머지 4건 | | 화면별: R-17 10 | |

## 아이콘 · gl-filter (10건, M-12 12건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-04_1024_Guest | gl-filter | 코드 ["history", "search"] / Figma ["arrow-down", "history", "search"]  | 코드 |
| C1 | R-04_1024_Signed-in | gl-filter | 코드 ["history", "search"] / Figma ["arrow-down", "history", "search"]  | 코드 |
| C1 | R-04_1440_Guest | gl-filter | 코드 ["history", "search"] / Figma ["arrow-down", "history", "search"]  | 코드 |
| C1 | R-04_1440_Signed-in | gl-filter | 코드 ["history", "search"] / Figma ["arrow-down", "history", "search"]  | 코드 |
| C1 | R-04_1920_Guest | gl-filter | 코드 ["history", "search"] / Figma ["arrow-down", "history", "search"]  | 코드 |
| C1 | R-04_1920_Signed-in | gl-filter | 코드 ["history", "search"] / Figma ["arrow-down", "history", "search"]  | 코드 |
| … | 나머지 4건 | | 화면별: R-04 10 | |

## 위치/크기 · section-title · x (1건, M-12 11건)
- 고칠 쪽: **코드(M11)** 1건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-26_1024_Signed-in | section-title | x: 코드 40 / Figma 280 | 코드 |

## 위치/크기 · section-title · w (1건, M-12 21건)
- 고칠 쪽: **코드(M11)** 1건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-26_1024_Signed-in | section-title | w: 코드 944 / Figma 704 | 코드 |

## 위치/크기 · profile-activity · h (10건, M-12 11건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선; 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-17_1024_Guest | profile-activity | h: 코드 142 / Figma 96 | 코드 |
| C2 | R-17_1024_Signed-in | profile-activity | h: 코드 142 / Figma 96 | 코드 |
| C2 | R-17_1440_Guest | profile-activity | h: 코드 142 / Figma 96 | 코드 |
| C2 | R-17_1440_Signed-in | profile-activity | h: 코드 142 / Figma 96 | 코드 |
| C2 | R-17_1920_Guest | profile-activity | h: 코드 142 / Figma 96 | 코드 |
| C2 | R-17_1920_Signed-in | profile-activity | h: 코드 142 / Figma 96 | 코드 |
| … | 나머지 4건 | | 화면별: R-17 10 | |

## 아이콘 · commit-bar (10건, M-12 10건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma); 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-03_1024_Guest | commit-bar | 코드 ["copy", "ellipsis-horizontal"] / Figma ["copy"]  | 코드 |
| C1 | R-03_1024_Signed-in | commit-bar | 코드 ["copy", "ellipsis-horizontal"] / Figma ["copy"]  | 코드 |
| C1 | R-03_1440_Guest | commit-bar | 코드 ["copy", "ellipsis-horizontal"] / Figma ["copy"]  | 코드 |
| C1 | R-03_1440_Signed-in | commit-bar | 코드 ["copy", "ellipsis-horizontal"] / Figma ["copy"]  | 코드 |
| C1 | R-03_1920_Guest | commit-bar | 코드 ["copy", "ellipsis-horizontal"] / Figma ["copy"]  | 코드 |
| C1 | R-03_1920_Signed-in | commit-bar | 코드 ["copy", "ellipsis-horizontal"] / Figma ["copy"]  | 코드 |
| … | 나머지 4건 | | 화면별: R-03 10 | |

## 위치/크기 · preview · y (10건, M-12 10건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-03_1024_Guest | preview | y: 코드 357 / Figma 364 | 코드 |
| C1 | R-03_1024_Signed-in | preview | y: 코드 357 / Figma 364 | 코드 |
| C1 | R-03_1440_Guest | preview | y: 코드 357 / Figma 364 | 코드 |
| C1 | R-03_1440_Signed-in | preview | y: 코드 357 / Figma 364 | 코드 |
| C1 | R-03_1920_Guest | preview | y: 코드 357 / Figma 364 | 코드 |
| C1 | R-03_1920_Signed-in | preview | y: 코드 357 / Figma 364 | 코드 |
| … | 나머지 4건 | | 화면별: R-03 10 | |

## 위치/크기 · preview · h (10건, M-12 10건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-03_1024_Guest | preview | h: 코드 5118 / Figma 5210 | 코드 |
| C1 | R-03_1024_Signed-in | preview | h: 코드 5118 / Figma 5210 | 코드 |
| C1 | R-03_1440_Guest | preview | h: 코드 4977 / Figma 5034 | 코드 |
| C1 | R-03_1440_Signed-in | preview | h: 코드 4977 / Figma 5034 | 코드 |
| C1 | R-03_1920_Guest | preview | h: 코드 4885 / Figma 4902 | 코드 |
| C1 | R-03_1920_Signed-in | preview | h: 코드 4885 / Figma 4902 | 코드 |
| … | 나머지 4건 | | 화면별: R-03 10 | |

## 아이콘 · preview (10건, M-12 10건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-03_1024_Guest | preview | 코드 [] / Figma ["bell", "copy"]  | 코드 |
| C1 | R-03_1024_Signed-in | preview | 코드 [] / Figma ["bell", "copy"]  | 코드 |
| C1 | R-03_1440_Guest | preview | 코드 [] / Figma ["bell", "copy"]  | 코드 |
| C1 | R-03_1440_Signed-in | preview | 코드 [] / Figma ["bell", "copy"]  | 코드 |
| C1 | R-03_1920_Guest | preview | 코드 [] / Figma ["bell", "copy"]  | 코드 |
| C1 | R-03_1920_Signed-in | preview | 코드 [] / Figma ["bell", "copy"]  | 코드 |
| … | 나머지 4건 | | 화면별: R-03 10 | |

## 색 · gl-filter (10건, M-12 20건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: capture_map.md; 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-04_1024_Guest | gl-filter | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  | 코드 |
| C1 | R-04_1024_Signed-in | gl-filter | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  | 코드 |
| C1 | R-04_1440_Guest | gl-filter | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  | 코드 |
| C1 | R-04_1440_Signed-in | gl-filter | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  | 코드 |
| C1 | R-04_1920_Guest | gl-filter | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  | 코드 |
| C1 | R-04_1920_Signed-in | gl-filter | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  | 코드 |
| … | 나머지 4건 | | 화면별: R-04 10 | |

## 모서리·안쪽·간격 · gl-filter (10건, M-12 10건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-04_1024_Guest | gl-filter | 코드 null / Figma null 간격 8→0 | 코드 |
| C1 | R-04_1024_Signed-in | gl-filter | 코드 null / Figma null 간격 8→0 | 코드 |
| C1 | R-04_1440_Guest | gl-filter | 코드 null / Figma null 간격 8→0 | 코드 |
| C1 | R-04_1440_Signed-in | gl-filter | 코드 null / Figma null 간격 8→0 | 코드 |
| C1 | R-04_1920_Guest | gl-filter | 코드 null / Figma null 간격 8→0 | 코드 |
| C1 | R-04_1920_Signed-in | gl-filter | 코드 null / Figma null 간격 8→0 | 코드 |
| … | 나머지 4건 | | 화면별: R-04 10 | |

## 위치/크기 · diff-area · y (10건, M-12 10건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-05_1024_Guest | diff-area | y: 코드 574 / Figma 525 | 코드 |
| C1 | R-05_1024_Signed-in | diff-area | y: 코드 574 / Figma 525 | 코드 |
| C1 | R-05_1440_Guest | diff-area | y: 코드 574 / Figma 525 | 코드 |
| C1 | R-05_1440_Signed-in | diff-area | y: 코드 574 / Figma 525 | 코드 |
| C1 | R-05_1920_Guest | diff-area | y: 코드 574 / Figma 525 | 코드 |
| C1 | R-05_1920_Signed-in | diff-area | y: 코드 574 / Figma 525 | 코드 |
| … | 나머지 4건 | | 화면별: R-05 10 | |

## 위치/크기 · diff-area · h (10건, M-12 10건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-05_1024_Guest | diff-area | h: 코드 6783 / Figma 1389 | 코드 |
| C1 | R-05_1024_Signed-in | diff-area | h: 코드 6783 / Figma 1389 | 코드 |
| C1 | R-05_1440_Guest | diff-area | h: 코드 6783 / Figma 1389 | 코드 |
| C1 | R-05_1440_Signed-in | diff-area | h: 코드 6783 / Figma 1389 | 코드 |
| C1 | R-05_1920_Guest | diff-area | h: 코드 6768 / Figma 1389 | 코드 |
| C1 | R-05_1920_Signed-in | diff-area | h: 코드 6768 / Figma 1389 | 코드 |
| … | 나머지 4건 | | 화면별: R-05 10 | |

## 아이콘 · diff-area (10건, M-12 10건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-05_1024_Guest | diff-area | 코드 ["arrow-down", "file:json", "file:markdown", "file:nodejs",  / Figma ["expand-less", "expand-more"]  | 코드 |
| C1 | R-05_1024_Signed-in | diff-area | 코드 ["arrow-down", "file:json", "file:markdown", "file:nodejs",  / Figma ["expand-less", "expand-more"]  | 코드 |
| C1 | R-05_1440_Guest | diff-area | 코드 ["arrow-down", "file:json", "file:markdown", "file:nodejs",  / Figma ["expand-less", "expand-more", "icon-file/json", "icon-file/  | 코드 |
| C1 | R-05_1440_Signed-in | diff-area | 코드 ["arrow-down", "file:json", "file:markdown", "file:nodejs",  / Figma ["expand-less", "expand-more", "icon-file/json", "icon-file/  | 코드 |
| C1 | R-05_1920_Guest | diff-area | 코드 ["arrow-down", "file:json", "file:markdown", "file:nodejs",  / Figma ["expand-less", "expand-more", "icon-file/json", "icon-file/  | 코드 |
| C1 | R-05_1920_Signed-in | diff-area | 코드 ["arrow-down", "file:json", "file:markdown", "file:nodejs",  / Figma ["expand-less", "expand-more", "icon-file/json", "icon-file/  | 코드 |
| … | 나머지 4건 | | 화면별: R-05 10 | |

## 위치/크기 · diff-file · y (10건, M-12 10건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-05_1024_Guest | diff-file | y: 코드 574 / Figma 525 | 코드 |
| C1 | R-05_1024_Signed-in | diff-file | y: 코드 574 / Figma 525 | 코드 |
| C1 | R-05_1440_Guest | diff-file | y: 코드 574 / Figma 525 | 코드 |
| C1 | R-05_1440_Signed-in | diff-file | y: 코드 574 / Figma 525 | 코드 |
| C1 | R-05_1920_Guest | diff-file | y: 코드 574 / Figma 525 | 코드 |
| C1 | R-05_1920_Signed-in | diff-file | y: 코드 574 / Figma 525 | 코드 |
| … | 나머지 4건 | | 화면별: R-05 10 | |

## 위치/크기 · diff-file · h (10건, M-12 10건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-05_1024_Guest | diff-file | h: 코드 564 / Figma 723 | 코드 |
| C1 | R-05_1024_Signed-in | diff-file | h: 코드 564 / Figma 723 | 코드 |
| C1 | R-05_1440_Guest | diff-file | h: 코드 564 / Figma 723 | 코드 |
| C1 | R-05_1440_Signed-in | diff-file | h: 코드 564 / Figma 723 | 코드 |
| C1 | R-05_1920_Guest | diff-file | h: 코드 564 / Figma 723 | 코드 |
| C1 | R-05_1920_Signed-in | diff-file | h: 코드 564 / Figma 723 | 코드 |
| … | 나머지 4건 | | 화면별: R-05 10 | |

## 아이콘 · diff-file (10건, M-12 10건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-05_1024_Guest | diff-file | 코드 ["arrow-down", "copy", "download", "ellipsis-vertical", "upl / Figma ["expand-less"]  | 코드 |
| C1 | R-05_1024_Signed-in | diff-file | 코드 ["arrow-down", "copy", "download", "ellipsis-vertical", "upl / Figma ["expand-less"]  | 코드 |
| C1 | R-05_1440_Guest | diff-file | 코드 ["arrow-down", "copy", "download", "ellipsis-vertical", "upl / Figma ["expand-less"]  | 코드 |
| C1 | R-05_1440_Signed-in | diff-file | 코드 ["arrow-down", "copy", "download", "ellipsis-vertical", "upl / Figma ["expand-less"]  | 코드 |
| C1 | R-05_1920_Guest | diff-file | 코드 ["arrow-down", "copy", "download", "ellipsis-vertical", "upl / Figma ["expand-less"]  | 코드 |
| C1 | R-05_1920_Signed-in | diff-file | 코드 ["arrow-down", "copy", "download", "ellipsis-vertical", "upl / Figma ["expand-less"]  | 코드 |
| … | 나머지 4건 | | 화면별: R-05 10 | |

## 색 · filter-clear (10건, M-12 10건)
- 고칠 쪽: **Figma(M11)** 10건
- 근거 예: IconButton.jsx; D-21; 기존 필터 테두리 안 지우기 조작
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-11_1024_Guest | filter-clear | 코드 "null " / Figma "#33363d color/layout/panel-border"  | Figma |
| C2 | R-11_1024_Signed-in | filter-clear | 코드 "null " / Figma "#33363d color/layout/panel-border"  | Figma |
| C2 | R-11_1440_Guest | filter-clear | 코드 "null " / Figma "#33363d color/layout/panel-border"  | Figma |
| C2 | R-11_1440_Signed-in | filter-clear | 코드 "null " / Figma "#33363d color/layout/panel-border"  | Figma |
| C2 | R-11_1920_Guest | filter-clear | 코드 "null " / Figma "#33363d color/layout/panel-border"  | Figma |
| C2 | R-11_1920_Signed-in | filter-clear | 코드 "null " / Figma "#33363d color/layout/panel-border"  | Figma |
| … | 나머지 4건 | | 화면별: R-11 10 | |

## Figma에만 · profile-activity (10건, M-12 10건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-12_1024_Guest | profile-activity | Figma에만 {"x": 40, "y": 557, "w": 944, "h": 144} | 코드 |
| C2 | R-12_1024_Signed-in | profile-activity | Figma에만 {"x": 40, "y": 557, "w": 944, "h": 144} | 코드 |
| C2 | R-12_1440_Guest | profile-activity | Figma에만 {"x": 296, "y": 557, "w": 808, "h": 144} | 코드 |
| C2 | R-12_1440_Signed-in | profile-activity | Figma에만 {"x": 296, "y": 557, "w": 808, "h": 144} | 코드 |
| C2 | R-12_1920_Guest | profile-activity | Figma에만 {"x": 480, "y": 557, "w": 920, "h": 144} | 코드 |
| C2 | R-12_1920_Signed-in | profile-activity | Figma에만 {"x": 480, "y": 557, "w": 920, "h": 144} | 코드 |
| … | 나머지 4건 | | 화면별: R-12 10 | |

## 코드에만 · filter-search (10건, M-12 10건)
- 고칠 쪽: **Figma(M11)** 10건
- 근거 예: UX/handson/gitlab/26_라벨.png; UX/14_팀기능_배치.md
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-14_1024_Guest | filter-search | 코드에만 있음 | Figma |
| C2 | R-14_1024_Signed-in | filter-search | 코드에만 있음 | Figma |
| C2 | R-14_1440_Guest | filter-search | 코드에만 있음 | Figma |
| C2 | R-14_1440_Signed-in | filter-search | 코드에만 있음 | Figma |
| C2 | R-14_1920_Guest | filter-search | 코드에만 있음 | Figma |
| C2 | R-14_1920_Signed-in | filter-search | 코드에만 있음 | Figma |
| … | 나머지 4건 | | 화면별: R-14 10 | |

## 위치/크기 · code-button · x (10건, M-12 10건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-17_1024_Guest | code-button | x: 코드 920 / Figma 922 | 코드 |
| C2 | R-17_1024_Signed-in | code-button | x: 코드 920 / Figma 922 | 코드 |
| C2 | R-17_1440_Guest | code-button | x: 코드 1320 / Figma 1322 | 코드 |
| C2 | R-17_1440_Signed-in | code-button | x: 코드 1320 / Figma 1322 | 코드 |
| C2 | R-17_1920_Guest | code-button | x: 코드 1616 / Figma 1618 | 코드 |
| C2 | R-17_1920_Signed-in | code-button | x: 코드 1616 / Figma 1618 | 코드 |
| … | 나머지 4건 | | 화면별: R-17 10 | |

## 위치/크기 · code-button · w (10건, M-12 10건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-17_1024_Guest | code-button | w: 코드 64 / Figma 62 | 코드 |
| C2 | R-17_1024_Signed-in | code-button | w: 코드 64 / Figma 62 | 코드 |
| C2 | R-17_1440_Guest | code-button | w: 코드 64 / Figma 62 | 코드 |
| C2 | R-17_1440_Signed-in | code-button | w: 코드 64 / Figma 62 | 코드 |
| C2 | R-17_1920_Guest | code-button | w: 코드 64 / Figma 62 | 코드 |
| C2 | R-17_1920_Signed-in | code-button | w: 코드 64 / Figma 62 | 코드 |
| … | 나머지 4건 | | 화면별: R-17 10 | |

## 문구 · profile-activity (10건, M-12 10건)
- 고칠 쪽: **Figma(M11)** 10건
- 근거 예: UX/07 5·10·11·13절; P20_MergeRequests notes
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-17_1024_Guest | profile-activity | 코드 "활동 모든 활동 오래된 순 서울특별시 광진구 류승인 closed 3 개월 전 회신하려면 등록 또는 로그인  / Figma ["서울특별시 광진구 류승인이 변경사항 1개 커밋을 추가함 · 3 개월 전", "서울특별시 광진구 류승인이   | Figma |
| C2 | R-17_1024_Signed-in | profile-activity | 코드 "활동 모든 활동 오래된 순 서울특별시 광진구 류승인 closed 3 개월 전 회신하려면 등록 또는 로그인  / Figma ["서울특별시 광진구 류승인이 변경사항 1개 커밋을 추가함 · 3 개월 전", "서울특별시 광진구 류승인이   | Figma |
| C2 | R-17_1440_Guest | profile-activity | 코드 "활동 모든 활동 오래된 순 서울특별시 광진구 류승인 closed 3 개월 전 회신하려면 등록 또는 로그인  / Figma ["서울특별시 광진구 류승인이 변경사항 1개 커밋을 추가함 · 3 개월 전", "서울특별시 광진구 류승인이   | Figma |
| C2 | R-17_1440_Signed-in | profile-activity | 코드 "활동 모든 활동 오래된 순 서울특별시 광진구 류승인 closed 3 개월 전 회신하려면 등록 또는 로그인  / Figma ["서울특별시 광진구 류승인이 변경사항 1개 커밋을 추가함 · 3 개월 전", "서울특별시 광진구 류승인이   | Figma |
| C2 | R-17_1920_Guest | profile-activity | 코드 "활동 모든 활동 오래된 순 서울특별시 광진구 류승인 closed 3 개월 전 회신하려면 등록 또는 로그인  / Figma ["서울특별시 광진구 류승인이 변경사항 1개 커밋을 추가함 · 3 개월 전", "서울특별시 광진구 류승인이   | Figma |
| C2 | R-17_1920_Signed-in | profile-activity | 코드 "활동 모든 활동 오래된 순 서울특별시 광진구 류승인 closed 3 개월 전 회신하려면 등록 또는 로그인  / Figma ["서울특별시 광진구 류승인이 변경사항 1개 커밋을 추가함 · 3 개월 전", "서울특별시 광진구 류승인이   | Figma |
| … | 나머지 4건 | | 화면별: R-17 10 | |

## 위치/크기 · section-title · h (2건, M-12 9건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-25_360_Guest | section-title#2 | h: 코드 28 / Figma 56 | 코드 |
| C1 | R-25_360_Signed-in | section-title#2 | h: 코드 28 / Figma 56 | 코드 |

## 위치/크기 · footer · w (2건, M-12 4건)
- 고칠 쪽: **Figma(M11)** 2건
- 근거 예: D-21 7-1/7-2; D-20; UX/07 7절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-26_1024_Guest | footer | w: 코드 944 / Figma 704 | Figma |
| C2 | R-26_1024_Signed-in | footer | w: 코드 944 / Figma 704 | Figma |

## 위치/크기 · filter-clear · x (8건, M-12 8건)
- 고칠 쪽: **코드(M11)** 8건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-11_1024_Guest | filter-clear | x: 코드 823 / Figma 835 | 코드 |
| C2 | R-11_1024_Signed-in | filter-clear | x: 코드 823 / Figma 835 | 코드 |
| C2 | R-11_1440_Guest | filter-clear | x: 코드 1223 / Figma 1235 | 코드 |
| C2 | R-11_1440_Signed-in | filter-clear | x: 코드 1223 / Figma 1235 | 코드 |
| C2 | R-11_1920_Guest | filter-clear | x: 코드 1519 / Figma 1531 | 코드 |
| C2 | R-11_1920_Signed-in | filter-clear | x: 코드 1519 / Figma 1531 | 코드 |
| … | 나머지 2건 | | 화면별: R-11 8 | |

## 위치/크기 · gl-tabs · h (8건, M-12 26건)
- 고칠 쪽: **코드(M11)** 8건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-14_360_Guest | gl-tabs | h: 코드 91 / Figma 49 | 코드 |
| C2 | R-14_360_Signed-in | gl-tabs | h: 코드 91 / Figma 49 | 코드 |
| C2 | R-16_360_Guest | gl-tabs | h: 코드 97 / Figma 49 | 코드 |
| C2 | R-16_360_Signed-in | gl-tabs | h: 코드 97 / Figma 49 | 코드 |
| C2 | R-24_360_Guest | gl-tabs | h: 코드 49 / Figma 145 | 코드 |
| C2 | R-24_360_Signed-in | gl-tabs | h: 코드 49 / Figma 145 | 코드 |
| … | 나머지 2건 | | 화면별: R-24 4, R-14 2, R-16 2 | |

## 아이콘 · gitlab-sidebar (8건, M-12 8건)
- 고칠 쪽: **Figma(M11)** 8건
- 근거 예: UX/audit_v3/M8_mapping.md; UX/17_사이드바_실측.md; D-16; 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-26_1440_Guest | gitlab-sidebar | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  | Figma |
| C2 | R-26_1440_Signed-in | gitlab-sidebar | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  | Figma |
| C2 | R-26_1920_Guest | gitlab-sidebar | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  | Figma |
| C2 | R-26_1920_Signed-in | gitlab-sidebar | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  | Figma |
| C1 | R-28_1440_Guest | gitlab-sidebar | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  | Figma |
| C1 | R-28_1440_Signed-in | gitlab-sidebar | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  | Figma |
| … | 나머지 2건 | | 화면별: R-26 4, R-28 4 | |

## 아이콘 · sidebar-nav (8건, M-12 8건)
- 고칠 쪽: **Figma(M11)** 8건
- 근거 예: UX/audit_v3/M8_mapping.md; UX/17_사이드바_실측.md; D-16; 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-26_1440_Guest | sidebar-nav | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  | Figma |
| C2 | R-26_1440_Signed-in | sidebar-nav | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  | Figma |
| C2 | R-26_1920_Guest | sidebar-nav | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  | Figma |
| C2 | R-26_1920_Signed-in | sidebar-nav | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  | Figma |
| C1 | R-28_1440_Guest | sidebar-nav | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  | Figma |
| C1 | R-28_1440_Signed-in | sidebar-nav | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  | Figma |
| … | 나머지 2건 | | 화면별: R-26 4, R-28 4 | |

## 위치/크기 · main · y (4건, M-12 5건)
- 고칠 쪽: **신규 판정 필요** 4건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-02_360_Guest | main | y: 코드 121 / Figma 130 | 신규 |
| C1 | R-02_360_Signed-in | main | y: 코드 121 / Figma 130 | 신규 |
| C2 | R-14_360_Guest | main | y: 코드 121 / Figma 101 | 신규 |
| C2 | R-14_360_Signed-in | main | y: 코드 121 / Figma 101 | 신규 |

## 위치/크기 · file-table · h (2건, M-12 6건)
- 고칠 쪽: **둘 다(M11)** 2건
- 근거 예: 정정: D-21 실제 파일 행42가 정답. v3의40 유지 판정은 취소. tbody42/thead40, fixture root35/src44+상위1. parent 원문재확인; UX/audit_v3/02_프로젝트홈_파
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-02_768_Guest | file-table | h: 코드 1931 / Figma 1890 | 둘 다 |
| C1 | R-02_768_Signed-in | file-table | h: 코드 1931 / Figma 1890 | 둘 다 |

## 위치/크기 · main · w (2건, M-12 2건)
- 고칠 쪽: **Figma(M11)** 2건
- 근거 예: D-21 7-1/7-2; D-20; UX/07 7절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-26_1024_Guest | main | w: 코드 944 / Figma 704 | Figma |
| C2 | R-26_1024_Signed-in | main | w: 코드 944 / Figma 704 | Figma |

## 위치/크기 · diff-file · x (6건, M-12 6건)
- 고칠 쪽: **코드(M11)** 6건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-05_1024_Guest | diff-file | x: 코드 294 / Figma 40 | 코드 |
| C1 | R-05_1024_Signed-in | diff-file | x: 코드 294 / Figma 40 | 코드 |
| C1 | R-05_1440_Guest | diff-file | x: 코드 586 / Figma 580 | 코드 |
| C1 | R-05_1440_Signed-in | diff-file | x: 코드 586 / Figma 580 | 코드 |
| C1 | R-05_1920_Guest | diff-file | x: 코드 798 / Figma 764 | 코드 |
| C1 | R-05_1920_Signed-in | diff-file | x: 코드 798 / Figma 764 | 코드 |

## 위치/크기 · diff-file · w (6건, M-12 6건)
- 고칠 쪽: **코드(M11)** 6건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-05_1024_Guest | diff-file | w: 코드 690 / Figma 944 | 코드 |
| C1 | R-05_1024_Signed-in | diff-file | w: 코드 690 / Figma 944 | 코드 |
| C1 | R-05_1440_Guest | diff-file | w: 코드 798 / Figma 804 | 코드 |
| C1 | R-05_1440_Signed-in | diff-file | w: 코드 798 / Figma 804 | 코드 |
| C1 | R-05_1920_Guest | diff-file | w: 코드 882 / Figma 916 | 코드 |
| C1 | R-05_1920_Signed-in | diff-file | w: 코드 882 / Figma 916 | 코드 |

## 위치/크기 · profile-activity · w (6건, M-12 6건)
- 고칠 쪽: **코드(M11)** 6건
- 근거 예: capture_map.md; 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-17_1024_Guest | profile-activity | w: 코드 624 / Figma 944 | 코드 |
| C2 | R-17_1024_Signed-in | profile-activity | w: 코드 624 / Figma 944 | 코드 |
| C2 | R-17_1440_Guest | profile-activity | w: 코드 768 / Figma 772 | 코드 |
| C2 | R-17_1440_Signed-in | profile-activity | w: 코드 768 / Figma 772 | 코드 |
| C2 | R-17_1920_Guest | profile-activity | w: 코드 880 / Figma 884 | 코드 |
| C2 | R-17_1920_Signed-in | profile-activity | w: 코드 880 / Figma 884 | 코드 |

## Figma에만 · comment-editor (5건, M-12 5건)
- 고칠 쪽: **코드(M11)** 5건
- 근거 예: UX/handson/gitlab/20_이슈목록.png; code_plan/figma_full.json
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-12_1024_Signed-in | comment-editor | Figma에만 {"x": 40, "y": 717, "w": 944, "h": 122} | 코드 |
| C2 | R-12_1440_Signed-in | comment-editor | Figma에만 {"x": 296, "y": 717, "w": 808, "h": 122} | 코드 |
| C2 | R-12_1920_Signed-in | comment-editor | Figma에만 {"x": 480, "y": 717, "w": 920, "h": 122} | 코드 |
| C2 | R-12_360_Signed-in | comment-editor | Figma에만 {"x": 16, "y": 1115, "w": 328, "h": 122} | 코드 |
| C2 | R-12_768_Signed-in | comment-editor | Figma에만 {"x": 32, "y": 801, "w": 704, "h": 122} | 코드 |

## 글자 속성 · main (5건, M-12 5건)
- 고칠 쪽: **Figma(M11)** 5건
- 근거 예: D-21 7-1/7-2; D-20; UX/07 7절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-22_1024_Guest | main | 코드 null / Figma null 크기 24→19, 줄 높이 32→28 | Figma |
| C2 | R-22_1440_Guest | main | 코드 null / Figma null 크기 24→19, 줄 높이 32→28 | Figma |
| C2 | R-22_1920_Guest | main | 코드 null / Figma null 크기 24→19, 줄 높이 32→28 | Figma |
| C2 | R-22_360_Guest | main | 코드 null / Figma null 크기 24→19, 줄 높이 32→28 | Figma |
| C2 | R-22_768_Guest | main | 코드 null / Figma null 크기 24→19, 줄 높이 32→28 | Figma |

## 위치/크기 · footer · x (2건, M-12 4건)
- 고칠 쪽: **Figma(M11)** 2건
- 근거 예: D-21 7-1/7-2; D-20; UX/07 7절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-26_1024_Guest | footer | x: 코드 40 / Figma 280 | Figma |
| C2 | R-26_1024_Signed-in | footer | x: 코드 40 / Figma 280 | Figma |

## 위치/크기 · body · y (4건, M-12 2건)
- 고칠 쪽: **신규 판정 필요** 4건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-02_360_Guest | body | y: 코드 72 / Figma 81 | 신규 |
| C1 | R-02_360_Signed-in | body | y: 코드 72 / Figma 81 | 신규 |
| C2 | R-14_360_Guest | body | y: 코드 72 / Figma 52 | 신규 |
| C2 | R-14_360_Signed-in | body | y: 코드 72 / Figma 52 | 신규 |

## 위치/크기 · content-panel · y (4건, M-12 2건)
- 고칠 쪽: **신규 판정 필요** 4건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-02_360_Guest | content-panel | y: 코드 72 / Figma 81 | 신규 |
| C1 | R-02_360_Signed-in | content-panel | y: 코드 72 / Figma 81 | 신규 |
| C2 | R-14_360_Guest | content-panel | y: 코드 72 / Figma 52 | 신규 |
| C2 | R-14_360_Signed-in | content-panel | y: 코드 72 / Figma 52 | 신규 |

## 위치/크기 · breadcrumb · y (4건, M-12 2건)
- 고칠 쪽: **신규 판정 필요** 4건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-02_360_Guest | breadcrumb | y: 코드 81 / Figma 90 | 신규 |
| C1 | R-02_360_Signed-in | breadcrumb | y: 코드 81 / Figma 90 | 신규 |
| C2 | R-14_360_Guest | breadcrumb | y: 코드 81 / Figma 61 | 신규 |
| C2 | R-14_360_Signed-in | breadcrumb | y: 코드 81 / Figma 61 | 신규 |

## 위치/크기 · commit-bar · h (2건, M-12 2건)
- 고칠 쪽: **둘 다(M11)** 2건
- 근거 예: 실제 공공 GitLab 2026-11-07 10시대360 실측48, hash/시간/설명 토글/이력. Figma66과 코드154 모두 수정
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-03_360_Guest | commit-bar | h: 코드 118 / Figma 48 | 둘 다 |
| C1 | R-03_360_Signed-in | commit-bar | h: 코드 118 / Figma 48 | 둘 다 |

## 모서리·안쪽·간격 · commit-bar (2건, M-12 6건)
- 고칠 쪽: **신규 판정 필요** 2건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-03_360_Guest | commit-bar | 코드 null / Figma null 안쪽 8 12 8 12→12 12 12 12 | 신규 |
| C1 | R-03_360_Signed-in | commit-bar | 코드 null / Figma null 안쪽 8 12 8 12→12 12 12 12 | 신규 |

## 모서리·안쪽·간격 · diff-area (2건, M-12 2건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-05_360_Guest | diff-area | 코드 null / Figma null 간격 24→16 | 코드 |
| C1 | R-05_360_Signed-in | diff-area | 코드 null / Figma null 간격 24→16 | 코드 |

## 위치/크기 · gl-tabs · y (2건, M-12 2건)
- 고칠 쪽: **신규 판정 필요** 2건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-14_360_Guest | gl-tabs | y: 코드 121 / Figma 101 | 신규 |
| C2 | R-14_360_Signed-in | gl-tabs | y: 코드 121 / Figma 101 | 신규 |

## 위치/크기 · gl-filter · y (2건, M-12 4건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-16_360_Guest | gl-filter | y: 코드 218 / Figma 170 | 코드 |
| C2 | R-16_360_Signed-in | gl-filter | y: 코드 218 / Figma 170 | 코드 |

## 위치/크기 · filter-search · y (2건, M-12 22건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-16_360_Guest | filter-search | y: 코드 234 / Figma 187 | 코드 |
| C2 | R-16_360_Signed-in | filter-search | y: 코드 234 / Figma 187 | 코드 |

## 위치/크기 · tabs · h (2건, M-12 2건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-17_360_Guest | tabs | h: 코드 49 / Figma 104 | 코드 |
| C2 | R-17_360_Signed-in | tabs | h: 코드 49 / Figma 104 | 코드 |

## 아이콘 · topbar (2건, M-12 2건)
- 고칠 쪽: **매핑(M11)** 2건
- 근거 예: D-10; UX/17_사이드바_실측.md; app/src/components/Identity/useAuth.js
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-26_1024_Guest | topbar | 코드 ["panel-open", "search"] / Figma ["search"]  | 매핑 |
| C2 | R-26_1024_Signed-in | topbar | 코드 ["bell", "issues", "merge-request", "panel-open", "plus", "s / Figma ["bell", "issues", "merge-request", "plus", "search"]  | 매핑 |

## Figma에만 · gitlab-sidebar (2건, M-12 2건)
- 고칠 쪽: **매핑(M11)** 2건
- 근거 예: D-10; UX/17_사이드바_실측.md; app/src/components/Identity/useAuth.js
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-26_1024_Guest | gitlab-sidebar | Figma에만 {"x": 0, "y": 72, "w": 240, "h": 820} | 매핑 |
| C2 | R-26_1024_Signed-in | gitlab-sidebar | Figma에만 {"x": 0, "y": 72, "w": 240, "h": 820} | 매핑 |

## 위치/크기 · content-panel · x (2건, M-12 2건)
- 고칠 쪽: **매핑(M11)** 2건
- 근거 예: D-10; UX/17_사이드바_실측.md; app/src/components/Identity/useAuth.js
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-26_1024_Guest | content-panel | x: 코드 8 / Figma 248 | 매핑 |
| C2 | R-26_1024_Signed-in | content-panel | x: 코드 8 / Figma 248 | 매핑 |

## 위치/크기 · content-panel · w (2건, M-12 2건)
- 고칠 쪽: **매핑(M11)** 2건
- 근거 예: D-10; UX/17_사이드바_실측.md; app/src/components/Identity/useAuth.js
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-26_1024_Guest | content-panel | w: 코드 1008 / Figma 768 | 매핑 |
| C2 | R-26_1024_Signed-in | content-panel | w: 코드 1008 / Figma 768 | 매핑 |

## 위치/크기 · breadcrumb · x (2건, M-12 2건)
- 고칠 쪽: **매핑(M11)** 2건
- 근거 예: D-10; UX/17_사이드바_실측.md; app/src/components/Identity/useAuth.js
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-26_1024_Guest | breadcrumb | x: 코드 40 / Figma 280 | 매핑 |
| C2 | R-26_1024_Signed-in | breadcrumb | x: 코드 40 / Figma 280 | 매핑 |

## 위치/크기 · main · x (2건, M-12 2건)
- 고칠 쪽: **Figma(M11)** 2건
- 근거 예: D-21 7-1/7-2; D-20; UX/07 7절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-26_1024_Guest | main | x: 코드 40 / Figma 280 | Figma |
| C2 | R-26_1024_Signed-in | main | x: 코드 40 / Figma 280 | Figma |

## Figma에만 · sidebar-nav (2건, M-12 2건)
- 고칠 쪽: **매핑(M11)** 2건
- 근거 예: D-10; UX/17_사이드바_실측.md; app/src/components/Identity/useAuth.js
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-26_1024_Guest | sidebar-nav | Figma에만 {"x": 8, "y": 154, "w": 224, "h": 625} | 매핑 |
| C2 | R-26_1024_Signed-in | sidebar-nav | Figma에만 {"x": 8, "y": 154, "w": 224, "h": 625} | 매핑 |
