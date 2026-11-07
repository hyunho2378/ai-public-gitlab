# M-14 담당 C1+C2 작업 목록

- 생성: M-14 측정(코드 20ed235, 개발 서버 5994, 고정 시각 now=2026-11-07T10:00:00+09:00, 스크롤 막대 0, 비동기 대기) 대 Figma 합본 figma_full.json 2026-11-07 17:32(598 변형, 요소 7,158)
- 판정은 행 단위로 가장 최근 판정표(M8_decision_rows.json, M9_decision_rows.json, M10_active_decisions.json, M11_active_decisions.json)를 이어받았다. 행에 판정이 없으면 '신규, 판정 필요'. 판정 완료는 수정 완료가 아니다
- 판정 쪽별 합계(이 담당): 코드 203, Figma 89, 신규 판정 필요 73, 둘 다 2, 매핑 2

## 문구 · section-title (49건, M-13 43건)
- 고칠 쪽: **Figma(M11)** 39건, **신규 판정 필요** 10건
- 근거 예: UX/07; D-19; R07 활성 브랜치 제목과 새 브랜치 CTA의 역할을 섞지 않음. R25 실제 copy/work 문자열/공개 API 기준. 측정 이름표를 헤더 안 단추와 본문 제목 사이에서 혼용하지 않음
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-02_1024_Guest | section-title | 코드 "src" / Figma ["파일 찾기", "코드"]  | 신규 |
| C1 | R-02_1024_Signed-in | section-title | 코드 "src" / Figma ["파일 찾기", "코드"]  | 신규 |
| C1 | R-02_1440_Guest | section-title | 코드 "src" / Figma ["파일 찾기", "코드"]  | 신규 |
| C1 | R-02_1440_Signed-in | section-title | 코드 "src" / Figma ["파일 찾기", "코드"]  | 신규 |
| C1 | R-02_1920_Guest | section-title | 코드 "src" / Figma ["파일 찾기", "코드"]  | 신규 |
| C1 | R-02_1920_Signed-in | section-title | 코드 "src" / Figma ["파일 찾기", "코드"]  | 신규 |
| … | 나머지 43건 | | 화면별: R-25 30, R-02 10, R-26 5, R-07 4 | |

## 위치/크기 · filter-search · x (34건, M-13 34건)
- 고칠 쪽: **코드(M11)** 24건, **신규 판정 필요** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-11_1024_Guest | filter-search | x: 코드 851 / Figma 857 | 코드 |
| C2 | R-11_1024_Signed-in | filter-search | x: 코드 851 / Figma 857 | 코드 |
| C2 | R-11_1440_Guest | filter-search | x: 코드 1251 / Figma 1257 | 코드 |
| C2 | R-11_1440_Signed-in | filter-search | x: 코드 1251 / Figma 1257 | 코드 |
| C2 | R-11_1920_Guest | filter-search | x: 코드 1547 / Figma 1553 | 코드 |
| C2 | R-11_1920_Signed-in | filter-search | x: 코드 1547 / Figma 1553 | 코드 |
| … | 나머지 28건 | | 화면별: R-14 10, R-11 8, R-20 8, R-23 8 | |

## Figma에만 · tabs (5건, M-13 25건)
- 고칠 쪽: **신규 판정 필요** 5건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-27_1024_Signed-in | tabs | Figma에만 {"x": 40, "y": 351, "w": 944, "h": 40} | 신규 |
| C1 | R-27_1440_Signed-in | tabs | Figma에만 {"x": 296, "y": 351, "w": 1088, "h": 40} | 신규 |
| C1 | R-27_1920_Signed-in | tabs | Figma에만 {"x": 480, "y": 351, "w": 1200, "h": 40} | 신규 |
| C1 | R-27_360_Signed-in | tabs | Figma에만 {"x": 16, "y": 365, "w": 328, "h": 40} | 신규 |
| C1 | R-27_768_Signed-in | tabs | Figma에만 {"x": 32, "y": 351, "w": 704, "h": 40} | 신규 |

## 위치/크기 · sidebar-nav · h (20건, M-13 24건)
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

## 위치/크기 · section-title · y (12건, M-13 20건)
- 고칠 쪽: **코드(M11)** 10건, **신규 판정 필요** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-02_360_Guest | section-title | y: 코드 209 / Figma 169 | 신규 |
| C1 | R-02_360_Signed-in | section-title | y: 코드 209 / Figma 169 | 신규 |
| C1 | R-25_1024_Guest | section-title#2 | y: 코드 588 / Figma 556 | 코드 |
| C1 | R-25_1024_Signed-in | section-title#2 | y: 코드 588 / Figma 556 | 코드 |
| C1 | R-25_1440_Guest | section-title#2 | y: 코드 588 / Figma 556 | 코드 |
| C1 | R-25_1440_Signed-in | section-title#2 | y: 코드 588 / Figma 556 | 코드 |
| … | 나머지 6건 | | 화면별: R-25 10, R-02 2 | |

## 모서리·안쪽·간격 · profile-activity (10건, M-13 13건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선; 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-17_1024_Guest | profile-activity | 코드 null / Figma null 간격 16→0 | 코드 |
| C2 | R-17_1024_Signed-in | profile-activity | 코드 null / Figma null 간격 16→0 | 코드 |
| C2 | R-17_1440_Guest | profile-activity | 코드 null / Figma null 간격 16→0 | 코드 |
| C2 | R-17_1440_Signed-in | profile-activity | 코드 null / Figma null 간격 16→0 | 코드 |
| C2 | R-17_1920_Guest | profile-activity | 코드 null / Figma null 간격 16→0 | 코드 |
| C2 | R-17_1920_Signed-in | profile-activity | 코드 null / Figma null 간격 16→0 | 코드 |
| … | 나머지 4건 | | 화면별: R-17 10 | |

## 위치/크기 · filter-search · y (12건, M-13 2건)
- 고칠 쪽: **신규 판정 필요** 10건, **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-14_1024_Guest | filter-search | y: 코드 125 / Figma 130 | 신규 |
| C2 | R-14_1024_Signed-in | filter-search | y: 코드 125 / Figma 130 | 신규 |
| C2 | R-14_1440_Guest | filter-search | y: 코드 125 / Figma 130 | 신규 |
| C2 | R-14_1440_Signed-in | filter-search | y: 코드 125 / Figma 130 | 신규 |
| C2 | R-14_1920_Guest | filter-search | y: 코드 125 / Figma 130 | 신규 |
| C2 | R-14_1920_Signed-in | filter-search | y: 코드 125 / Figma 130 | 신규 |
| … | 나머지 6건 | | 화면별: R-14 10, R-16 2 | |

## 아이콘 · section-title (10건, M-13 0건)
- 고칠 쪽: **신규 판정 필요** 10건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-02_1024_Guest | section-title | 코드 ["folder"] / Figma ["arrow-down", "ellipsis-vertical", "folder"]  | 신규 |
| C1 | R-02_1024_Signed-in | section-title | 코드 ["folder"] / Figma ["arrow-down", "ellipsis-vertical", "folder"]  | 신규 |
| C1 | R-02_1440_Guest | section-title | 코드 ["folder"] / Figma ["arrow-down", "ellipsis-vertical", "folder"]  | 신규 |
| C1 | R-02_1440_Signed-in | section-title | 코드 ["folder"] / Figma ["arrow-down", "ellipsis-vertical", "folder"]  | 신규 |
| C1 | R-02_1920_Guest | section-title | 코드 ["folder"] / Figma ["arrow-down", "ellipsis-vertical", "folder"]  | 신규 |
| C1 | R-02_1920_Signed-in | section-title | 코드 ["folder"] / Figma ["arrow-down", "ellipsis-vertical", "folder"]  | 신규 |
| … | 나머지 4건 | | 화면별: R-02 10 | |

## 위치/크기 · preview · h (10건, M-13 10건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-03_1024_Guest | preview | h: 코드 5118 / Figma 5134 | 코드 |
| C1 | R-03_1024_Signed-in | preview | h: 코드 5118 / Figma 5134 | 코드 |
| C1 | R-03_1440_Guest | preview | h: 코드 4977 / Figma 4958 | 코드 |
| C1 | R-03_1440_Signed-in | preview | h: 코드 4977 / Figma 4958 | 코드 |
| C1 | R-03_1920_Guest | preview | h: 코드 4885 / Figma 4826 | 코드 |
| C1 | R-03_1920_Signed-in | preview | h: 코드 4885 / Figma 4826 | 코드 |
| … | 나머지 4건 | | 화면별: R-03 10 | |

## 색 · gl-filter (10건, M-13 10건)
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

## 모서리·안쪽·간격 · gl-filter (10건, M-13 10건)
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

## 위치/크기 · diff-area · h (10건, M-13 10건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-05_1024_Guest | diff-area | h: 코드 6633 / Figma 1389 | 코드 |
| C1 | R-05_1024_Signed-in | diff-area | h: 코드 6633 / Figma 1389 | 코드 |
| C1 | R-05_1440_Guest | diff-area | h: 코드 6633 / Figma 1389 | 코드 |
| C1 | R-05_1440_Signed-in | diff-area | h: 코드 6633 / Figma 1389 | 코드 |
| C1 | R-05_1920_Guest | diff-area | h: 코드 6633 / Figma 1389 | 코드 |
| C1 | R-05_1920_Signed-in | diff-area | h: 코드 6633 / Figma 1389 | 코드 |
| … | 나머지 4건 | | 화면별: R-05 10 | |

## 아이콘 · diff-area (10건, M-13 10건)
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

## 위치/크기 · diff-file · h (10건, M-13 10건)
- 고칠 쪽: **코드(M11)** 10건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-05_1024_Guest | diff-file | h: 코드 549 / Figma 723 | 코드 |
| C1 | R-05_1024_Signed-in | diff-file | h: 코드 549 / Figma 723 | 코드 |
| C1 | R-05_1440_Guest | diff-file | h: 코드 549 / Figma 723 | 코드 |
| C1 | R-05_1440_Signed-in | diff-file | h: 코드 549 / Figma 723 | 코드 |
| C1 | R-05_1920_Guest | diff-file | h: 코드 549 / Figma 723 | 코드 |
| C1 | R-05_1920_Signed-in | diff-file | h: 코드 549 / Figma 723 | 코드 |
| … | 나머지 4건 | | 화면별: R-05 10 | |

## 아이콘 · diff-file (10건, M-13 10건)
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

## Figma에만 · profile-activity (10건, M-13 10건)
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

## 모서리·안쪽·간격 · gl-tabs (10건, M-13 0건)
- 고칠 쪽: **신규 판정 필요** 10건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-14_1024_Guest | gl-tabs | 코드 null / Figma null 간격 8→0 | 신규 |
| C2 | R-14_1024_Signed-in | gl-tabs | 코드 null / Figma null 간격 8→0 | 신규 |
| C2 | R-14_1440_Guest | gl-tabs | 코드 null / Figma null 간격 8→0 | 신규 |
| C2 | R-14_1440_Signed-in | gl-tabs | 코드 null / Figma null 간격 8→0 | 신규 |
| C2 | R-14_1920_Guest | gl-tabs | 코드 null / Figma null 간격 8→0 | 신규 |
| C2 | R-14_1920_Signed-in | gl-tabs | 코드 null / Figma null 간격 8→0 | 신규 |
| … | 나머지 4건 | | 화면별: R-14 10 | |

## 모서리·안쪽·간격 · code-button (10건, M-13 0건)
- 고칠 쪽: **신규 판정 필요** 10건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-17_1024_Guest | code-button | 코드 null / Figma null 안쪽 0 12 0 12→0 8 0 8 | 신규 |
| C2 | R-17_1024_Signed-in | code-button | 코드 null / Figma null 안쪽 0 12 0 12→0 8 0 8 | 신규 |
| C2 | R-17_1440_Guest | code-button | 코드 null / Figma null 안쪽 0 12 0 12→0 8 0 8 | 신규 |
| C2 | R-17_1440_Signed-in | code-button | 코드 null / Figma null 안쪽 0 12 0 12→0 8 0 8 | 신규 |
| C2 | R-17_1920_Guest | code-button | 코드 null / Figma null 안쪽 0 12 0 12→0 8 0 8 | 신규 |
| C2 | R-17_1920_Signed-in | code-button | 코드 null / Figma null 안쪽 0 12 0 12→0 8 0 8 | 신규 |
| … | 나머지 4건 | | 화면별: R-17 10 | |

## 문구 · profile-activity (10건, M-13 10건)
- 고칠 쪽: **Figma(M11)** 10건
- 근거 예: UX/07 5·10·11·13절; P20_MergeRequests notes
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-17_1024_Guest | profile-activity | 코드 "활동 모든 활동 오래된 순 서울특별시 광진구 류승인 closed 3 개월 전 회신하려면 등록 또는 로그인  / Figma ["회신하려면 등록 또는 로그인하십시오"]  | Figma |
| C2 | R-17_1024_Signed-in | profile-activity | 코드 "활동 모든 활동 오래된 순 서울특별시 광진구 류승인 closed 3 개월 전 회신하려면 등록 또는 로그인  / Figma ["회신하려면 등록 또는 로그인하십시오"]  | Figma |
| C2 | R-17_1440_Guest | profile-activity | 코드 "활동 모든 활동 오래된 순 서울특별시 광진구 류승인 closed 3 개월 전 회신하려면 등록 또는 로그인  / Figma ["회신하려면 등록 또는 로그인하십시오"]  | Figma |
| C2 | R-17_1440_Signed-in | profile-activity | 코드 "활동 모든 활동 오래된 순 서울특별시 광진구 류승인 closed 3 개월 전 회신하려면 등록 또는 로그인  / Figma ["회신하려면 등록 또는 로그인하십시오"]  | Figma |
| C2 | R-17_1920_Guest | profile-activity | 코드 "활동 모든 활동 오래된 순 서울특별시 광진구 류승인 closed 3 개월 전 회신하려면 등록 또는 로그인  / Figma ["회신하려면 등록 또는 로그인하십시오"]  | Figma |
| C2 | R-17_1920_Signed-in | profile-activity | 코드 "활동 모든 활동 오래된 순 서울특별시 광진구 류승인 closed 3 개월 전 회신하려면 등록 또는 로그인  / Figma ["회신하려면 등록 또는 로그인하십시오"]  | Figma |
| … | 나머지 4건 | | 화면별: R-17 10 | |

## 위치/크기 · diff-area · y (8건, M-13 10건)
- 고칠 쪽: **코드(M11)** 8건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-05_1024_Guest | diff-area | y: 코드 574 / Figma 525 | 코드 |
| C1 | R-05_1024_Signed-in | diff-area | y: 코드 574 / Figma 525 | 코드 |
| C1 | R-05_1440_Guest | diff-area | y: 코드 574 / Figma 525 | 코드 |
| C1 | R-05_1440_Signed-in | diff-area | y: 코드 574 / Figma 525 | 코드 |
| C1 | R-05_1920_Guest | diff-area | y: 코드 574 / Figma 525 | 코드 |
| C1 | R-05_1920_Signed-in | diff-area | y: 코드 574 / Figma 525 | 코드 |
| … | 나머지 2건 | | 화면별: R-05 8 | |

## 위치/크기 · diff-file · y (8건, M-13 10건)
- 고칠 쪽: **코드(M11)** 8건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-05_1024_Guest | diff-file | y: 코드 574 / Figma 525 | 코드 |
| C1 | R-05_1024_Signed-in | diff-file | y: 코드 574 / Figma 525 | 코드 |
| C1 | R-05_1440_Guest | diff-file | y: 코드 574 / Figma 525 | 코드 |
| C1 | R-05_1440_Signed-in | diff-file | y: 코드 574 / Figma 525 | 코드 |
| C1 | R-05_1920_Guest | diff-file | y: 코드 574 / Figma 525 | 코드 |
| C1 | R-05_1920_Signed-in | diff-file | y: 코드 574 / Figma 525 | 코드 |
| … | 나머지 2건 | | 화면별: R-05 8 | |

## 위치/크기 · filter-clear · x (8건, M-13 8건)
- 고칠 쪽: **코드(M11)** 8건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-11_1024_Guest | filter-clear | x: 코드 819 / Figma 825 | 코드 |
| C2 | R-11_1024_Signed-in | filter-clear | x: 코드 819 / Figma 825 | 코드 |
| C2 | R-11_1440_Guest | filter-clear | x: 코드 1219 / Figma 1225 | 코드 |
| C2 | R-11_1440_Signed-in | filter-clear | x: 코드 1219 / Figma 1225 | 코드 |
| C2 | R-11_1920_Guest | filter-clear | x: 코드 1515 / Figma 1521 | 코드 |
| C2 | R-11_1920_Signed-in | filter-clear | x: 코드 1515 / Figma 1521 | 코드 |
| … | 나머지 2건 | | 화면별: R-11 8 | |

## 위치/크기 · gl-tabs · h (8건, M-13 8건)
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

## 아이콘 · gitlab-sidebar (8건, M-13 8건)
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

## 아이콘 · sidebar-nav (8건, M-13 8건)
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

## 위치/크기 · section-title · h (4건, M-13 9건)
- 고칠 쪽: **신규 판정 필요** 2건, **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-02_360_Guest | section-title | h: 코드 40 / Figma 32 | 신규 |
| C1 | R-02_360_Signed-in | section-title | h: 코드 40 / Figma 32 | 신규 |
| C1 | R-25_360_Guest | section-title#2 | h: 코드 28 / Figma 56 | 코드 |
| C1 | R-25_360_Signed-in | section-title#2 | h: 코드 28 / Figma 56 | 코드 |

## 모서리·안쪽·간격 · page-head (2건, M-13 15건)
- 고칠 쪽: **신규 판정 필요** 2건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-05_360_Guest | page-head | 코드 null / Figma null 간격 8→12 | 신규 |
| C1 | R-05_360_Signed-in | page-head | 코드 null / Figma null 간격 8→12 | 신규 |

## 위치/크기 · tabs · y (4건, M-13 12건)
- 고칠 쪽: **코드(M11)** 4건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma); 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-17_360_Guest | tabs | y: 코드 297 / Figma 233 | 코드 |
| C2 | R-17_360_Signed-in | tabs | y: 코드 297 / Figma 233 | 코드 |
| C2 | R-17_768_Guest | tabs | y: 코드 237 / Figma 209 | 코드 |
| C2 | R-17_768_Signed-in | tabs | y: 코드 237 / Figma 209 | 코드 |

## 위치/크기 · diff-file · x (6건, M-13 6건)
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

## 위치/크기 · diff-file · w (6건, M-13 6건)
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

## 위치/크기 · profile-activity · w (6건, M-13 6건)
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

## Figma에만 · comment-editor (5건, M-13 5건)
- 고칠 쪽: **코드(M11)** 5건
- 근거 예: UX/handson/gitlab/20_이슈목록.png; code_plan/figma_full.json
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-12_1024_Signed-in | comment-editor | Figma에만 {"x": 40, "y": 717, "w": 944, "h": 122} | 코드 |
| C2 | R-12_1440_Signed-in | comment-editor | Figma에만 {"x": 296, "y": 717, "w": 808, "h": 122} | 코드 |
| C2 | R-12_1920_Signed-in | comment-editor | Figma에만 {"x": 480, "y": 717, "w": 920, "h": 122} | 코드 |
| C2 | R-12_360_Signed-in | comment-editor | Figma에만 {"x": 16, "y": 1115, "w": 328, "h": 122} | 코드 |
| C2 | R-12_768_Signed-in | comment-editor | Figma에만 {"x": 32, "y": 801, "w": 704, "h": 122} | 코드 |

## 위치/크기 · commit-bar · y (4건, M-13 20건)
- 고칠 쪽: **코드(M11)** 4건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-02_360_Guest | commit-bar | y: 코드 265 / Figma 217 | 코드 |
| C1 | R-02_360_Signed-in | commit-bar | y: 코드 265 / Figma 217 | 코드 |
| C1 | R-03_360_Guest | commit-bar | y: 코드 263 / Figma 217 | 코드 |
| C1 | R-03_360_Signed-in | commit-bar | y: 코드 263 / Figma 217 | 코드 |

## 문구 · page-head (4건, M-13 14건)
- 고칠 쪽: **Figma(M11)** 4건
- 근거 예: UX/07_밀도_문구_기준.md 5/10/11/13절; D-19
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-23_1024_Signed-in | page-head | 코드 "프로젝트 구성원" / Figma ["멤버 초대"]  | Figma |
| C2 | R-23_1440_Signed-in | page-head | 코드 "프로젝트 구성원" / Figma ["멤버 초대"]  | Figma |
| C2 | R-23_1920_Signed-in | page-head | 코드 "프로젝트 구성원" / Figma ["멤버 초대"]  | Figma |
| C2 | R-23_768_Signed-in | page-head | 코드 "프로젝트 구성원" / Figma ["멤버 초대"]  | Figma |

## 위치/크기 · file-table · y (2건, M-13 18건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-02_360_Guest | file-table | y: 코드 329 / Figma 281 | 코드 |
| C1 | R-02_360_Signed-in | file-table | y: 코드 329 / Figma 281 | 코드 |

## 위치/크기 · commit-bar · h (2건, M-13 2건)
- 고칠 쪽: **둘 다(M11)** 2건
- 근거 예: 실제 공공 GitLab 2026-11-07 10시대360 실측48, hash/시간/설명 토글/이력. Figma66과 코드154 모두 수정
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-03_360_Guest | commit-bar | h: 코드 118 / Figma 48 | 둘 다 |
| C1 | R-03_360_Signed-in | commit-bar | h: 코드 118 / Figma 48 | 둘 다 |

## 모서리·안쪽·간격 · commit-bar (2건, M-13 2건)
- 고칠 쪽: **신규 판정 필요** 2건
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-03_360_Guest | commit-bar | 코드 null / Figma null 안쪽 8 12 8 12→12 12 12 12 | 신규 |
| C1 | R-03_360_Signed-in | commit-bar | 코드 null / Figma null 안쪽 8 12 8 12→12 12 12 12 | 신규 |

## 아이콘 · commit-bar (2건, M-13 10건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma); 동일 원인 묶음 판정 상속(복수 고칠 쪽은 임의 선택하지 않음)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-03_360_Guest | commit-bar | 코드 ["copy", "ellipsis-horizontal"] / Figma ["ellipsis-vertical"]  | 코드 |
| C1 | R-03_360_Signed-in | commit-bar | 코드 ["copy", "ellipsis-horizontal"] / Figma ["ellipsis-vertical"]  | 코드 |

## 위치/크기 · preview · y (2건, M-13 10건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-03_360_Guest | preview | y: 코드 503 / Figma 401 | 코드 |
| C1 | R-03_360_Signed-in | preview | y: 코드 503 / Figma 401 | 코드 |

## 모서리·안쪽·간격 · diff-area (2건, M-13 2건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C1 | R-05_360_Guest | diff-area | 코드 null / Figma null 간격 24→16 | 코드 |
| C1 | R-05_360_Signed-in | diff-area | 코드 null / Figma null 간격 24→16 | 코드 |

## 위치/크기 · gl-filter · y (2건, M-13 2건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-16_360_Guest | gl-filter | y: 코드 218 / Figma 170 | 코드 |
| C2 | R-16_360_Signed-in | gl-filter | y: 코드 218 / Figma 170 | 코드 |

## 위치/크기 · tabs · h (2건, M-13 2건)
- 고칠 쪽: **코드(M11)** 2건
- 근거 예: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-17_360_Guest | tabs | h: 코드 49 / Figma 104 | 코드 |
| C2 | R-17_360_Signed-in | tabs | h: 코드 49 / Figma 104 | 코드 |

## 아이콘 · topbar (2건, M-13 2건)
- 고칠 쪽: **매핑(M11)** 2건
- 근거 예: D-10; UX/17_사이드바_실측.md; app/src/components/Identity/useAuth.js
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 | 판정 |
|---|---|---|---|---|
| C2 | R-26_1024_Guest | topbar | 코드 ["panel-open", "search"] / Figma ["search"]  | 매핑 |
| C2 | R-26_1024_Signed-in | topbar | 코드 ["bell", "issues", "merge-request", "panel-open", "plus", "s / Figma ["bell", "issues", "merge-request", "plus", "search"]  | 매핑 |
