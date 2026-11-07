# M-9 담당 C1+C2 작업 목록

- 생성: M-9 측정(코드 ed6076b, 개발 서버 5994, 스크롤 막대 0 방식: 측정 기록 참조) 대 Figma 합본 figma_full.json 2026-11-07 08:46(598 변형, 요소 7,146)
- 고칠 쪽은 UX/audit_v3/M8_decisions.md 판정을 그대로 이어받았다. M-8 판정에 없는 원인은 '신규'로 표시하고 근거를 적었다. 판정 완료는 수정 완료가 아니다
- 이번 매핑 정정: A-04 측정 경로 /projects/150/feedback → /projects/150(프로젝트 홈). A-02는 이미 /projects/150, A-01은 이미 /search?q=보고서 작성(fixture=kordoc)
- 이 담당 고칠 쪽(건수): 측정 매핑 오류 10 / Figma 13 280, 신규(M-8 판정 없음) 171, 코드 10 138, 코드 22 52, 코드 36 42, Figma 36 36, 코드 16 36, 코드 20 30, Figma 10 22, 코드 18 20, 코드 35 20, 측정 매핑 오류 4 / Figma 20 20, 코드 25 19, Figma 24 19, 코드 6 16, 측정 매핑 오류 4 / Figma 4 16, 코드 15 15, Figma 44 14, 코드 5 10, 코드 2 8, Figma 5 5, 측정 매핑 오류 4 4, Figma 12 4, 코드 26 4, Figma 2 2, Figma 9 2, 코드 14 1

## 위치/크기 · main · y (280건, M-8 23건)
- 고칠 쪽: **측정 매핑 오류 10 / Figma 13** (M-8 판정 이어받음) / 정답값: 홈 + AI 소개 카드 /projects/150?fixture=kordoc / 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 / 근거: UX/audit_v3/M8_mapping.md; D-21 7-1/7-2; D-20; UX/07 7절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-02_1024_Guest | main | y: 코드 121 / Figma 81 |
| C1 | R-02_1024_Signed-in | main | y: 코드 121 / Figma 81 |
| C1 | R-02_1440_Guest | main | y: 코드 121 / Figma 81 |
| C1 | R-02_1440_Signed-in | main | y: 코드 121 / Figma 81 |
| C1 | R-02_1920_Guest | main | y: 코드 121 / Figma 81 |
| C1 | R-02_1920_Signed-in | main | y: 코드 121 / Figma 81 |
| … | 나머지 274건 | | 화면별: R-02 10, R-03 10, R-04 10, R-05 10, R-06 10, R-07 10, R-08 10, R-09 10, R-10 10, R-11 10 |

## 위치/크기 · filter-search · x (42건, M-8 36건)
- 고칠 쪽: **코드 36** (M-8 판정 이어받음) / 정답값: 867 / 1267 / 1563 / 295 / 619 / 778 / 1178 / 1474 / 530 / 796 / 1196 / 1492 / 156 / 548 / 809 / 1209 / 1505 / 561 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-04_1024_Guest | filter-search | x: 코드 946 / Figma 951 |
| C1 | R-04_1024_Signed-in | filter-search | x: 코드 946 / Figma 951 |
| C1 | R-04_1440_Guest | filter-search | x: 코드 1346 / Figma 1351 |
| C1 | R-04_1440_Signed-in | filter-search | x: 코드 1346 / Figma 1351 |
| C1 | R-04_1920_Guest | filter-search | x: 코드 1642 / Figma 1647 |
| C1 | R-04_1920_Signed-in | filter-search | x: 코드 1642 / Figma 1647 |
| … | 나머지 36건 | | 화면별: R-04 10, R-11 8, R-16 8, R-20 8, R-23 8 |

## 문구 · page-head (14건, M-8 44건)
- 고칠 쪽: **Figma 44** (M-8 판정 이어받음) / 정답값: copy/ko.js,ui.js,gl.js,work.js의 현재 문구 / 사용자 원문·상대시간은 같은 자료 기준으로 재생성 / 근거: UX/07_밀도_문구_기준.md 5/10/11/13절; D-19
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-05_1024_Guest | page-head | 코드 "커밋 03f9484e 작성됨 8일 전 작성자 C 서울특별시 광진구 류승인 파일 찾아보기 옵션" / Figma ["작성됨 8일 전 · 서울특별시 광진구 류승인"]  |
| C1 | R-05_1024_Signed-in | page-head | 코드 "커밋 03f9484e 작성됨 8일 전 작성자 C 서울특별시 광진구 류승인 파일 찾아보기 옵션" / Figma ["작성됨 8일 전 · 서울특별시 광진구 류승인"]  |
| C1 | R-05_1440_Guest | page-head | 코드 "커밋 03f9484e 작성됨 8일 전 작성자 C 서울특별시 광진구 류승인 파일 찾아보기 옵션" / Figma ["작성됨 8일 전 · 서울특별시 광진구 류승인"]  |
| C1 | R-05_1440_Signed-in | page-head | 코드 "커밋 03f9484e 작성됨 8일 전 작성자 C 서울특별시 광진구 류승인 파일 찾아보기 옵션" / Figma ["작성됨 8일 전 · 서울특별시 광진구 류승인"]  |
| C1 | R-05_1920_Guest | page-head | 코드 "커밋 03f9484e 작성됨 8일 전 작성자 C 서울특별시 광진구 류승인 파일 찾아보기 옵션" / Figma ["작성됨 8일 전 · 서울특별시 광진구 류승인"]  |
| C1 | R-05_1920_Signed-in | page-head | 코드 "커밋 03f9484e 작성됨 8일 전 작성자 C 서울특별시 광진구 류승인 파일 찾아보기 옵션" / Figma ["작성됨 8일 전 · 서울특별시 광진구 류승인"]  |
| … | 나머지 8건 | | 화면별: R-05 10, R-23 4 |

## 위치/크기 · file-table · h (10건, M-8 20건)
- 고칠 쪽: **코드 20** (M-8 판정 이어받음) / 정답값: 1262 / 1219 / 926 / 883 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-02_1024_Guest | file-table | h: 코드 1841 / Figma 926 |
| C1 | R-02_1024_Signed-in | file-table | h: 코드 1841 / Figma 926 |
| C1 | R-02_1440_Guest | file-table | h: 코드 1841 / Figma 926 |
| C1 | R-02_1440_Signed-in | file-table | h: 코드 1841 / Figma 926 |
| C1 | R-02_1920_Guest | file-table | h: 코드 1841 / Figma 926 |
| C1 | R-02_1920_Signed-in | file-table | h: 코드 1841 / Figma 926 |
| … | 나머지 4건 | | 화면별: R-02 10 |

## 위치/크기 · commit-bar · y (20건, M-8 18건)
- 고칠 쪽: **코드 18** (M-8 판정 이어받음) / 정답값: 233 / 225 / 217 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-02_1024_Guest | commit-bar | y: 코드 233 / Figma 225 |
| C1 | R-02_1024_Signed-in | commit-bar | y: 코드 233 / Figma 225 |
| C1 | R-02_1440_Guest | commit-bar | y: 코드 233 / Figma 225 |
| C1 | R-02_1440_Signed-in | commit-bar | y: 코드 233 / Figma 225 |
| C1 | R-02_1920_Guest | commit-bar | y: 코드 233 / Figma 225 |
| C1 | R-02_1920_Signed-in | commit-bar | y: 코드 233 / Figma 225 |
| … | 나머지 14건 | | 화면별: R-02 10, R-03 10 |

## 위치/크기 · sidebar-nav · w (36건, M-8 36건)
- 고칠 쪽: **Figma 36** (M-8 판정 이어받음) / 정답값: 목록224−실제 스크롤바폭(현재213);사이드바240/접힘44 / 근거: UX/17_사이드바_실측.md; D-16
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-06_1440_Guest | sidebar-nav | w: 코드 213 / Figma 224 |
| C1 | R-06_1440_Signed-in | sidebar-nav | w: 코드 213 / Figma 224 |
| C1 | R-06_1920_Guest | sidebar-nav | w: 코드 213 / Figma 224 |
| C1 | R-06_1920_Signed-in | sidebar-nav | w: 코드 213 / Figma 224 |
| C1 | R-07_1440_Guest | sidebar-nav | w: 코드 213 / Figma 224 |
| C1 | R-07_1440_Signed-in | sidebar-nav | w: 코드 213 / Figma 224 |
| … | 나머지 30건 | | 화면별: R-06 4, R-07 4, R-13 4, R-15 4, R-18 4, R-21 4, R-22 4, R-23 4, R-29 4 |

## Figma에만 · section-title (30건, M-8 22건)
- 고칠 쪽: **코드 22** (M-8 판정 이어받음) / 정답값: {"x":1088,"y":241,"w":30,"h":26} / {"x":32,"y":989,"w":30,"h":26} / {"x":40,"y":520,"w":944,"h":28} / {"x":40,"y":955,"w":944,"h":28} / {"x":296,"y":520,"w":1088,"h":28} / {"x":296,"y":955,"w":1088,"h / 근거: UX/handson/gitlab/48_그룹_사용자페이지.png; code_plan/figma_full.json; UX/handson/gitlab/30_리포지토리분석.png; code_plan/figma_full.json
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-07_1024_Guest | section-title#2 | Figma에만 {"x": 48, "y": 243, "w": 70, "h": 22} |
| C1 | R-07_1024_Signed-in | section-title#2 | Figma에만 {"x": 48, "y": 243, "w": 70, "h": 22} |
| C1 | R-07_1440_Guest | section-title#2 | Figma에만 {"x": 304, "y": 243, "w": 70, "h": 22} |
| C1 | R-07_1440_Signed-in | section-title#2 | Figma에만 {"x": 304, "y": 243, "w": 70, "h": 22} |
| C1 | R-07_1920_Guest | section-title#2 | Figma에만 {"x": 488, "y": 243, "w": 70, "h": 22} |
| C1 | R-07_1920_Signed-in | section-title#2 | Figma에만 {"x": 488, "y": 243, "w": 70, "h": 22} |
| … | 나머지 24건 | | 화면별: R-25 20, R-07 10 |

## 위치/크기 · section-title · y (20건, M-8 35건)
- 고칠 쪽: **코드 35** (M-8 판정 이어받음) / 정답값: 169 / 161 / 243 / 137 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-07_1024_Guest | section-title | y: 코드 227 / Figma 234 |
| C1 | R-07_1024_Signed-in | section-title | y: 코드 227 / Figma 234 |
| C1 | R-07_1440_Guest | section-title | y: 코드 227 / Figma 234 |
| C1 | R-07_1440_Signed-in | section-title | y: 코드 227 / Figma 234 |
| C1 | R-07_1920_Guest | section-title | y: 코드 227 / Figma 234 |
| C1 | R-07_1920_Signed-in | section-title | y: 코드 227 / Figma 234 |
| … | 나머지 14건 | | 화면별: R-07 10, R-25 10 |

## 위치/크기 · file-table · y (10건, M-8 16건)
- 고칠 쪽: **코드 16** (M-8 판정 이어받음) / 정답값: 315 / 307 / 299 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-02_1024_Guest | file-table | y: 코드 299 / Figma 307 |
| C1 | R-02_1024_Signed-in | file-table | y: 코드 299 / Figma 307 |
| C1 | R-02_1440_Guest | file-table | y: 코드 299 / Figma 307 |
| C1 | R-02_1440_Signed-in | file-table | y: 코드 299 / Figma 307 |
| C1 | R-02_1920_Guest | file-table | y: 코드 299 / Figma 307 |
| C1 | R-02_1920_Signed-in | file-table | y: 코드 299 / Figma 307 |
| … | 나머지 4건 | | 화면별: R-02 10 |

## 위치/크기 · gl-tabs · h (26건, M-8 16건)
- 고칠 쪽: **코드 16** (M-8 판정 이어받음) / 정답값: 49 / 145 / 97 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-07_1024_Guest | gl-tabs | h: 코드 48 / Figma 40 |
| C1 | R-07_1024_Signed-in | gl-tabs | h: 코드 48 / Figma 40 |
| C1 | R-07_1440_Guest | gl-tabs | h: 코드 48 / Figma 40 |
| C1 | R-07_1440_Signed-in | gl-tabs | h: 코드 48 / Figma 40 |
| C1 | R-07_1920_Guest | gl-tabs | h: 코드 48 / Figma 40 |
| C1 | R-07_1920_Signed-in | gl-tabs | h: 코드 48 / Figma 40 |
| … | 나머지 20건 | | 화면별: R-07 10, R-14 10, R-24 4, R-16 2 |

## 코드에만 · tabs (5건, M-8 5건)
- 고칠 쪽: **코드 5** (M-8 판정 이어받음) / 정답값: Figma에 없는 미지정 요소 제거 또는 기존 Figma 요소에 이름표 통합 / 근거: UX/audit_v3/capture_map.md; UX/14_팀기능_배치.md
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-27_1024_Guest | tabs | 코드에만 있음 |
| C1 | R-27_1440_Guest | tabs | 코드에만 있음 |
| C1 | R-27_1920_Guest | tabs | 코드에만 있음 |
| C1 | R-27_360_Guest | tabs | 코드에만 있음 |
| C1 | R-27_768_Guest | tabs | 코드에만 있음 |

## 위치/크기 · page-head · h (8건, M-8 25건)
- 고칠 쪽: **코드 25** (M-8 판정 이어받음) / 정답값: 44 / 36 / 111 / 32 / 76 / 72 / 56 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-05_360_Guest | page-head | h: 코드 123 / Figma 111 |
| C1 | R-05_360_Signed-in | page-head | h: 코드 123 / Figma 111 |
| C1 | R-09_360_Guest | page-head | h: 코드 40 / Figma 32 |
| C1 | R-09_360_Signed-in | page-head | h: 코드 40 / Figma 32 |
| C2 | R-10_360_Guest | page-head | h: 코드 84 / Figma 76 |
| C2 | R-10_360_Signed-in | page-head | h: 코드 84 / Figma 76 |
| … | 나머지 2건 | | 화면별: R-05 2, R-09 2, R-10 2, R-23 2 |

## 위치/크기 · filter-search · y (22건, M-8 22건)
- 고칠 쪽: **코드 22** (M-8 판정 이어받음) / 정답값: 194 / 187 / 287 / 299 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-16_360_Guest | filter-search | y: 코드 234 / Figma 194 |
| C2 | R-16_360_Signed-in | filter-search | y: 코드 234 / Figma 194 |
| C2 | R-19_1024_Guest | filter-search | y: 코드 185 / Figma 187 |
| C2 | R-19_1024_Signed-in | filter-search | y: 코드 185 / Figma 187 |
| C2 | R-19_1440_Guest | filter-search | y: 코드 185 / Figma 187 |
| C2 | R-19_1440_Signed-in | filter-search | y: 코드 185 / Figma 187 |
| … | 나머지 16건 | | 화면별: R-19 10, R-23 10, R-16 2 |

## 문구 · section-title (19건, M-8 24건)
- 고칠 쪽: **Figma 24** (M-8 판정 이어받음) / 정답값: copy/ko.js,ui.js,gl.js,work.js의 현재 문구 / 사용자 원문·상대시간은 같은 자료 기준으로 재생성 / 근거: UX/07_밀도_문구_기준.md 5/10/11/13절; D-19
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-07_1024_Signed-in | section-title | 코드 "활성 브랜치" / Figma ["새 브랜치"]  |
| C1 | R-07_1440_Signed-in | section-title | 코드 "활성 브랜치" / Figma ["새 브랜치"]  |
| C1 | R-07_1920_Signed-in | section-title | 코드 "활성 브랜치" / Figma ["새 브랜치"]  |
| C1 | R-07_768_Signed-in | section-title | 코드 "활성 브랜치" / Figma ["새 브랜치"]  |
| C1 | R-25_1024_Guest | section-title | 코드 "이 리포지토리에 사용된 프로그래밍 언어" / Figma ["이 리포지토리에 사용 된 프로그래밍 언어"]  |
| C1 | R-25_1024_Signed-in | section-title | 코드 "이 리포지토리에 사용된 프로그래밍 언어" / Figma ["이 리포지토리에 사용 된 프로그래밍 언어"]  |
| … | 나머지 13건 | | 화면별: R-25 10, R-26 5, R-07 4 |

## 위치/크기 · sidebar-nav · h (20건, M-8 24건)
- 고칠 쪽: **측정 매핑 오류 4 / Figma 20** (M-8 판정 이어받음) / 정답값: 홈 + AI 소개 카드 /projects/150?fixture=kordoc / UX/17: 접힘/펼침 항목수 기반 Hug;피치32,화면 안 스크롤 / 근거: UX/audit_v3/M8_mapping.md; UX/17_사이드바_실측.md; D-16
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-10_1440_Guest | sidebar-nav | h: 코드 720 / Figma 625 |
| C2 | R-10_1440_Signed-in | sidebar-nav | h: 코드 720 / Figma 625 |
| C2 | R-10_1920_Guest | sidebar-nav | h: 코드 720 / Figma 625 |
| C2 | R-10_1920_Signed-in | sidebar-nav | h: 코드 720 / Figma 625 |
| C1 | R-25_1440_Guest | sidebar-nav | h: 코드 720 / Figma 625 |
| C1 | R-25_1440_Signed-in | sidebar-nav | h: 코드 720 / Figma 625 |
| … | 나머지 14건 | | 화면별: R-10 4, R-25 4, R-26 4, R-27 4, R-28 4 |

## 위치/크기 · body · y (10건, M-8 10건)
- 고칠 쪽: **Figma 10** (M-8 판정 이어받음) / 정답값: 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 / 근거: D-21 7-1/7-2; D-20; UX/07 7절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-03_1024_Guest | body | y: 코드 72 / Figma 95 |
| C1 | R-03_1024_Signed-in | body | y: 코드 72 / Figma 95 |
| C1 | R-03_1440_Guest | body | y: 코드 72 / Figma 82 |
| C1 | R-03_1440_Signed-in | body | y: 코드 72 / Figma 82 |
| C1 | R-03_1920_Guest | body | y: 코드 72 / Figma 82 |
| C1 | R-03_1920_Signed-in | body | y: 코드 72 / Figma 82 |
| … | 나머지 4건 | | 화면별: R-03 8, R-16 2 |

## 위치/크기 · content-panel · y (10건, M-8 0건)
- 고칠 쪽: **신규, 판정 필요** / 비고: M-8에 없던 원인(Figma 08:46 재내보내기·export 이름 상한 20·코드 변경으로 새로 나타남)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-03_1024_Guest | content-panel | y: 코드 72 / Figma 95 |
| C1 | R-03_1024_Signed-in | content-panel | y: 코드 72 / Figma 95 |
| C1 | R-03_1440_Guest | content-panel | y: 코드 72 / Figma 82 |
| C1 | R-03_1440_Signed-in | content-panel | y: 코드 72 / Figma 82 |
| C1 | R-03_1920_Guest | content-panel | y: 코드 72 / Figma 82 |
| C1 | R-03_1920_Signed-in | content-panel | y: 코드 72 / Figma 82 |
| … | 나머지 4건 | | 화면별: R-03 8, R-16 2 |

## 위치/크기 · breadcrumb · y (10건, M-8 0건)
- 고칠 쪽: **신규, 판정 필요** / 비고: M-8에 없던 원인(Figma 08:46 재내보내기·export 이름 상한 20·코드 변경으로 새로 나타남)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-03_1024_Guest | breadcrumb | y: 코드 81 / Figma 104 |
| C1 | R-03_1024_Signed-in | breadcrumb | y: 코드 81 / Figma 104 |
| C1 | R-03_1440_Guest | breadcrumb | y: 코드 81 / Figma 91 |
| C1 | R-03_1440_Signed-in | breadcrumb | y: 코드 81 / Figma 91 |
| C1 | R-03_1920_Guest | breadcrumb | y: 코드 81 / Figma 91 |
| C1 | R-03_1920_Signed-in | breadcrumb | y: 코드 81 / Figma 91 |
| … | 나머지 4건 | | 화면별: R-03 8, R-16 2 |

## Figma에만 · profile-activity (20건, M-8 0건)
- 고칠 쪽: **신규, 판정 필요** / 비고: M-8에 없던 원인(Figma 08:46 재내보내기·export 이름 상한 20·코드 변경으로 새로 나타남)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-12_1024_Guest | profile-activity | Figma에만 {"x": 40, "y": 557, "w": 944, "h": 144} |
| C2 | R-12_1024_Signed-in | profile-activity | Figma에만 {"x": 40, "y": 557, "w": 944, "h": 144} |
| C2 | R-12_1440_Guest | profile-activity | Figma에만 {"x": 296, "y": 557, "w": 808, "h": 144} |
| C2 | R-12_1440_Signed-in | profile-activity | Figma에만 {"x": 296, "y": 557, "w": 808, "h": 144} |
| C2 | R-12_1920_Guest | profile-activity | Figma에만 {"x": 480, "y": 557, "w": 920, "h": 144} |
| C2 | R-12_1920_Signed-in | profile-activity | Figma에만 {"x": 480, "y": 557, "w": 920, "h": 144} |
| … | 나머지 14건 | | 화면별: R-12 10, R-17 10 |

## 위치/크기 · section-title · w (11건, M-8 25건)
- 고칠 쪽: **코드 25** (M-8 판정 이어받음) / 정답값: 944 / 1088 / 1200 / 328 / 704 / 960 / 312 / 720 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-07_1024_Guest | section-title | w: 코드 942 / Figma 944 |
| C1 | R-07_1024_Signed-in | section-title | w: 코드 942 / Figma 944 |
| C1 | R-07_1440_Guest | section-title | w: 코드 1086 / Figma 1088 |
| C1 | R-07_1440_Signed-in | section-title | w: 코드 1086 / Figma 1088 |
| C1 | R-07_1920_Guest | section-title | w: 코드 1198 / Figma 1200 |
| C1 | R-07_1920_Signed-in | section-title | w: 코드 1198 / Figma 1200 |
| … | 나머지 5건 | | 화면별: R-07 10, R-26 1 |

## 색 · filter-search (10건, M-8 0건)
- 고칠 쪽: **신규, 판정 필요** / 비고: M-8에 없던 원인(Figma 08:46 재내보내기·export 이름 상한 20·코드 변경으로 새로 나타남)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-04_1024_Guest | filter-search | 코드 "#8a949e gray-40" / Figma "#33363d color/layout/panel-border"  |
| C1 | R-04_1024_Signed-in | filter-search | 코드 "#8a949e gray-40" / Figma "#33363d color/layout/panel-border"  |
| C1 | R-04_1440_Guest | filter-search | 코드 "#8a949e gray-40" / Figma "#33363d color/layout/panel-border"  |
| C1 | R-04_1440_Signed-in | filter-search | 코드 "#8a949e gray-40" / Figma "#33363d color/layout/panel-border"  |
| C1 | R-04_1920_Guest | filter-search | 코드 "#8a949e gray-40" / Figma "#33363d color/layout/panel-border"  |
| C1 | R-04_1920_Signed-in | filter-search | 코드 "#8a949e gray-40" / Figma "#33363d color/layout/panel-border"  |
| … | 나머지 4건 | | 화면별: R-04 10 |

## 모서리·안쪽·간격 · filter-search (10건, M-8 0건)
- 고칠 쪽: **신규, 판정 필요** / 비고: M-8에 없던 원인(Figma 08:46 재내보내기·export 이름 상한 20·코드 변경으로 새로 나타남)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-04_1024_Guest | filter-search | 코드 null / Figma null 안쪽 0 0 0 0→0 8 0 8 |
| C1 | R-04_1024_Signed-in | filter-search | 코드 null / Figma null 안쪽 0 0 0 0→0 8 0 8 |
| C1 | R-04_1440_Guest | filter-search | 코드 null / Figma null 안쪽 0 0 0 0→0 8 0 8 |
| C1 | R-04_1440_Signed-in | filter-search | 코드 null / Figma null 안쪽 0 0 0 0→0 8 0 8 |
| C1 | R-04_1920_Guest | filter-search | 코드 null / Figma null 안쪽 0 0 0 0→0 8 0 8 |
| C1 | R-04_1920_Signed-in | filter-search | 코드 null / Figma null 안쪽 0 0 0 0→0 8 0 8 |
| … | 나머지 4건 | | 화면별: R-04 10 |

## 아이콘 · gl-filter (10건, M-8 20건)
- 고칠 쪽: **코드 20** (M-8 판정 이어받음) / 정답값: ["arrow-down","search"] / ["arrow-down","history","search"] / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-04_1024_Guest | gl-filter | 코드 ["history", "search"] / Figma ["arrow-down", "history", "search"]  |
| C1 | R-04_1024_Signed-in | gl-filter | 코드 ["history", "search"] / Figma ["arrow-down", "history", "search"]  |
| C1 | R-04_1440_Guest | gl-filter | 코드 ["history", "search"] / Figma ["arrow-down", "history", "search"]  |
| C1 | R-04_1440_Signed-in | gl-filter | 코드 ["history", "search"] / Figma ["arrow-down", "history", "search"]  |
| C1 | R-04_1920_Guest | gl-filter | 코드 ["history", "search"] / Figma ["arrow-down", "history", "search"]  |
| C1 | R-04_1920_Signed-in | gl-filter | 코드 ["history", "search"] / Figma ["arrow-down", "history", "search"]  |
| … | 나머지 4건 | | 화면별: R-04 10 |

## 색 · gl-filter (20건, M-8 20건)
- 고칠 쪽: **신규, 판정 필요** / 비고: M-8에 없던 원인(Figma 08:46 재내보내기·export 이름 상한 20·코드 변경으로 새로 나타남)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-04_1024_Guest | gl-filter | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  |
| C1 | R-04_1024_Signed-in | gl-filter | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  |
| C1 | R-04_1440_Guest | gl-filter | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  |
| C1 | R-04_1440_Signed-in | gl-filter | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  |
| C1 | R-04_1920_Guest | gl-filter | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  |
| C1 | R-04_1920_Signed-in | gl-filter | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  |
| … | 나머지 14건 | | 화면별: R-04 10, R-07 10 |

## 위치/크기 · tabs · y (15건, M-8 15건)
- 고칠 쪽: **코드 15** (M-8 판정 이어받음) / 정답값: 191 / 221 / 243 / 351 / 365 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-17_1024_Guest | tabs | y: 코드 231 / Figma 221 |
| C2 | R-17_1024_Signed-in | tabs | y: 코드 231 / Figma 221 |
| C2 | R-17_1440_Guest | tabs | y: 코드 231 / Figma 221 |
| C2 | R-17_1440_Signed-in | tabs | y: 코드 231 / Figma 221 |
| C2 | R-17_1920_Guest | tabs | y: 코드 231 / Figma 221 |
| C2 | R-17_1920_Signed-in | tabs | y: 코드 231 / Figma 221 |
| … | 나머지 9건 | | 화면별: R-17 10, R-27 5 |

## 위치/크기 · section-title · x (1건, M-8 14건)
- 고칠 쪽: **코드 14** (M-8 판정 이어받음) / 정답값: 40 / 296 / 480 / 16 / 32 / 24 / 240 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Signed-in | section-title | x: 코드 40 / Figma 280 |

## 위치/크기 · commit-bar · h (4건, M-8 6건)
- 고칠 쪽: **코드 6** (M-8 판정 이어받음) / 정답값: 66 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-02_360_Guest | commit-bar | h: 코드 154 / Figma 66 |
| C1 | R-02_360_Signed-in | commit-bar | h: 코드 154 / Figma 66 |
| C1 | R-03_360_Guest | commit-bar | h: 코드 118 / Figma 66 |
| C1 | R-03_360_Signed-in | commit-bar | h: 코드 118 / Figma 66 |

## 위치/크기 · gitlab-sidebar · y (4건, M-8 0건)
- 고칠 쪽: **신규, 판정 필요** / 비고: M-8에 없던 원인(Figma 08:46 재내보내기·export 이름 상한 20·코드 변경으로 새로 나타남)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-03_1440_Guest | gitlab-sidebar | y: 코드 72 / Figma 82 |
| C1 | R-03_1440_Signed-in | gitlab-sidebar | y: 코드 72 / Figma 82 |
| C1 | R-03_1920_Guest | gitlab-sidebar | y: 코드 72 / Figma 82 |
| C1 | R-03_1920_Signed-in | gitlab-sidebar | y: 코드 72 / Figma 82 |

## 위치/크기 · sidebar-nav · y (4건, M-8 4건)
- 고칠 쪽: **측정 매핑 오류 4** (M-8 판정 이어받음) / 정답값: 홈 + AI 소개 카드 /projects/150?fixture=kordoc / 근거: UX/audit_v3/M8_mapping.md
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-03_1440_Guest | sidebar-nav | y: 코드 154 / Figma 164 |
| C1 | R-03_1440_Signed-in | sidebar-nav | y: 코드 154 / Figma 164 |
| C1 | R-03_1920_Guest | sidebar-nav | y: 코드 154 / Figma 164 |
| C1 | R-03_1920_Signed-in | sidebar-nav | y: 코드 154 / Figma 164 |

## 아이콘 · commit-bar (10건, M-8 20건)
- 고칠 쪽: **코드 20** (M-8 판정 이어받음) / 정답값: ["copy","ellipsis-horizontal"] / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-03_1024_Guest | commit-bar | 코드 ["copy", "ellipsis-horizontal"] / Figma ["copy"]  |
| C1 | R-03_1024_Signed-in | commit-bar | 코드 ["copy", "ellipsis-horizontal"] / Figma ["copy"]  |
| C1 | R-03_1440_Guest | commit-bar | 코드 ["copy", "ellipsis-horizontal"] / Figma ["copy"]  |
| C1 | R-03_1440_Signed-in | commit-bar | 코드 ["copy", "ellipsis-horizontal"] / Figma ["copy"]  |
| C1 | R-03_1920_Guest | commit-bar | 코드 ["copy", "ellipsis-horizontal"] / Figma ["copy"]  |
| C1 | R-03_1920_Signed-in | commit-bar | 코드 ["copy", "ellipsis-horizontal"] / Figma ["copy"]  |
| … | 나머지 4건 | | 화면별: R-03 10 |

## 위치/크기 · preview · y (10건, M-8 10건)
- 고칠 쪽: **코드 10** (M-8 판정 이어받음) / 정답값: 364 / 426 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-03_1024_Guest | preview | y: 코드 357 / Figma 387 |
| C1 | R-03_1024_Signed-in | preview | y: 코드 357 / Figma 387 |
| C1 | R-03_1440_Guest | preview | y: 코드 357 / Figma 374 |
| C1 | R-03_1440_Signed-in | preview | y: 코드 357 / Figma 374 |
| C1 | R-03_1920_Guest | preview | y: 코드 357 / Figma 374 |
| C1 | R-03_1920_Signed-in | preview | y: 코드 357 / Figma 374 |
| … | 나머지 4건 | | 화면별: R-03 10 |

## 위치/크기 · preview · h (10건, M-8 10건)
- 고칠 쪽: **코드 10** (M-8 판정 이어받음) / 정답값: 5256 / 5054 / 4922 / 9050 / 5788 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-03_1024_Guest | preview | h: 코드 5118 / Figma 5210 |
| C1 | R-03_1024_Signed-in | preview | h: 코드 5118 / Figma 5210 |
| C1 | R-03_1440_Guest | preview | h: 코드 4977 / Figma 5034 |
| C1 | R-03_1440_Signed-in | preview | h: 코드 4977 / Figma 5034 |
| C1 | R-03_1920_Guest | preview | h: 코드 4885 / Figma 4902 |
| C1 | R-03_1920_Signed-in | preview | h: 코드 4885 / Figma 4902 |
| … | 나머지 4건 | | 화면별: R-03 10 |

## 아이콘 · preview (10건, M-8 10건)
- 고칠 쪽: **코드 10** (M-8 판정 이어받음) / 정답값: ["bell","copy"] / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-03_1024_Guest | preview | 코드 [] / Figma ["bell", "copy"]  |
| C1 | R-03_1024_Signed-in | preview | 코드 [] / Figma ["bell", "copy"]  |
| C1 | R-03_1440_Guest | preview | 코드 [] / Figma ["bell", "copy"]  |
| C1 | R-03_1440_Signed-in | preview | 코드 [] / Figma ["bell", "copy"]  |
| C1 | R-03_1920_Guest | preview | 코드 [] / Figma ["bell", "copy"]  |
| C1 | R-03_1920_Signed-in | preview | 코드 [] / Figma ["bell", "copy"]  |
| … | 나머지 4건 | | 화면별: R-03 10 |

## 모서리·안쪽·간격 · gl-filter (10건, M-8 10건)
- 고칠 쪽: **코드 10** (M-8 판정 이어받음) / 정답값: 간격 8→0 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-04_1024_Guest | gl-filter | 코드 null / Figma null 간격 8→0 |
| C1 | R-04_1024_Signed-in | gl-filter | 코드 null / Figma null 간격 8→0 |
| C1 | R-04_1440_Guest | gl-filter | 코드 null / Figma null 간격 8→0 |
| C1 | R-04_1440_Signed-in | gl-filter | 코드 null / Figma null 간격 8→0 |
| C1 | R-04_1920_Guest | gl-filter | 코드 null / Figma null 간격 8→0 |
| C1 | R-04_1920_Signed-in | gl-filter | 코드 null / Figma null 간격 8→0 |
| … | 나머지 4건 | | 화면별: R-04 10 |

## 위치/크기 · filter-search · w (10건, M-8 0건)
- 고칠 쪽: **신규, 판정 필요** / 비고: M-8에 없던 원인(Figma 08:46 재내보내기·export 이름 상한 20·코드 변경으로 새로 나타남)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-04_1024_Guest | filter-search | w: 코드 37 / Figma 32 |
| C1 | R-04_1024_Signed-in | filter-search | w: 코드 37 / Figma 32 |
| C1 | R-04_1440_Guest | filter-search | w: 코드 37 / Figma 32 |
| C1 | R-04_1440_Signed-in | filter-search | w: 코드 37 / Figma 32 |
| C1 | R-04_1920_Guest | filter-search | w: 코드 37 / Figma 32 |
| C1 | R-04_1920_Signed-in | filter-search | w: 코드 37 / Figma 32 |
| … | 나머지 4건 | | 화면별: R-04 10 |

## 위치/크기 · filter-search · h (10건, M-8 0건)
- 고칠 쪽: **신규, 판정 필요** / 비고: M-8에 없던 원인(Figma 08:46 재내보내기·export 이름 상한 20·코드 변경으로 새로 나타남)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-04_1024_Guest | filter-search | h: 코드 30 / Figma 32 |
| C1 | R-04_1024_Signed-in | filter-search | h: 코드 30 / Figma 32 |
| C1 | R-04_1440_Guest | filter-search | h: 코드 30 / Figma 32 |
| C1 | R-04_1440_Signed-in | filter-search | h: 코드 30 / Figma 32 |
| C1 | R-04_1920_Guest | filter-search | h: 코드 30 / Figma 32 |
| C1 | R-04_1920_Signed-in | filter-search | h: 코드 30 / Figma 32 |
| … | 나머지 4건 | | 화면별: R-04 10 |

## 위치/크기 · diff-area · y (10건, M-8 10건)
- 고칠 쪽: **코드 10** (M-8 판정 이어받음) / 정답값: 525 / 593 / 549 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-05_1024_Guest | diff-area | y: 코드 574 / Figma 525 |
| C1 | R-05_1024_Signed-in | diff-area | y: 코드 574 / Figma 525 |
| C1 | R-05_1440_Guest | diff-area | y: 코드 574 / Figma 525 |
| C1 | R-05_1440_Signed-in | diff-area | y: 코드 574 / Figma 525 |
| C1 | R-05_1920_Guest | diff-area | y: 코드 574 / Figma 525 |
| C1 | R-05_1920_Signed-in | diff-area | y: 코드 574 / Figma 525 |
| … | 나머지 4건 | | 화면별: R-05 10 |

## 위치/크기 · diff-area · h (10건, M-8 10건)
- 고칠 쪽: **코드 10** (M-8 판정 이어받음) / 정답값: 1389 / 1239 / 1419 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-05_1024_Guest | diff-area | h: 코드 6783 / Figma 1389 |
| C1 | R-05_1024_Signed-in | diff-area | h: 코드 6783 / Figma 1389 |
| C1 | R-05_1440_Guest | diff-area | h: 코드 6783 / Figma 1389 |
| C1 | R-05_1440_Signed-in | diff-area | h: 코드 6783 / Figma 1389 |
| C1 | R-05_1920_Guest | diff-area | h: 코드 6768 / Figma 1389 |
| C1 | R-05_1920_Signed-in | diff-area | h: 코드 6768 / Figma 1389 |
| … | 나머지 4건 | | 화면별: R-05 10 |

## 아이콘 · diff-area (10건, M-8 10건)
- 고칠 쪽: **코드 10** (M-8 판정 이어받음) / 정답값: ["expand-less","expand-more"] / ["expand-less","expand-more","icon-file/json","icon-file/markdown","icon-file/nodejs"] / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-05_1024_Guest | diff-area | 코드 ["arrow-down", "file:json", "file:markdown", "file:nodejs",  / Figma ["expand-less", "expand-more"]  |
| C1 | R-05_1024_Signed-in | diff-area | 코드 ["arrow-down", "file:json", "file:markdown", "file:nodejs",  / Figma ["expand-less", "expand-more"]  |
| C1 | R-05_1440_Guest | diff-area | 코드 ["arrow-down", "file:json", "file:markdown", "file:nodejs",  / Figma ["expand-less", "expand-more", "icon-file/json", "icon-file/  |
| C1 | R-05_1440_Signed-in | diff-area | 코드 ["arrow-down", "file:json", "file:markdown", "file:nodejs",  / Figma ["expand-less", "expand-more", "icon-file/json", "icon-file/  |
| C1 | R-05_1920_Guest | diff-area | 코드 ["arrow-down", "file:json", "file:markdown", "file:nodejs",  / Figma ["expand-less", "expand-more", "icon-file/json", "icon-file/  |
| C1 | R-05_1920_Signed-in | diff-area | 코드 ["arrow-down", "file:json", "file:markdown", "file:nodejs",  / Figma ["expand-less", "expand-more", "icon-file/json", "icon-file/  |
| … | 나머지 4건 | | 화면별: R-05 10 |

## 위치/크기 · diff-file · y (10건, M-8 10건)
- 고칠 쪽: **코드 10** (M-8 판정 이어받음) / 정답값: 525 / 593 / 549 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-05_1024_Guest | diff-file | y: 코드 574 / Figma 525 |
| C1 | R-05_1024_Signed-in | diff-file | y: 코드 574 / Figma 525 |
| C1 | R-05_1440_Guest | diff-file | y: 코드 574 / Figma 525 |
| C1 | R-05_1440_Signed-in | diff-file | y: 코드 574 / Figma 525 |
| C1 | R-05_1920_Guest | diff-file | y: 코드 574 / Figma 525 |
| C1 | R-05_1920_Signed-in | diff-file | y: 코드 574 / Figma 525 |
| … | 나머지 4건 | | 화면별: R-05 10 |

## 위치/크기 · diff-file · h (10건, M-8 10건)
- 고칠 쪽: **코드 10** (M-8 판정 이어받음) / 정답값: 723 / 735 / 753 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-05_1024_Guest | diff-file | h: 코드 564 / Figma 723 |
| C1 | R-05_1024_Signed-in | diff-file | h: 코드 564 / Figma 723 |
| C1 | R-05_1440_Guest | diff-file | h: 코드 564 / Figma 723 |
| C1 | R-05_1440_Signed-in | diff-file | h: 코드 564 / Figma 723 |
| C1 | R-05_1920_Guest | diff-file | h: 코드 564 / Figma 723 |
| C1 | R-05_1920_Signed-in | diff-file | h: 코드 564 / Figma 723 |
| … | 나머지 4건 | | 화면별: R-05 10 |

## 아이콘 · diff-file (10건, M-8 10건)
- 고칠 쪽: **코드 10** (M-8 판정 이어받음) / 정답값: ["expand-less"] / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-05_1024_Guest | diff-file | 코드 ["arrow-down", "copy", "download", "ellipsis-vertical", "upl / Figma ["expand-less"]  |
| C1 | R-05_1024_Signed-in | diff-file | 코드 ["arrow-down", "copy", "download", "ellipsis-vertical", "upl / Figma ["expand-less"]  |
| C1 | R-05_1440_Guest | diff-file | 코드 ["arrow-down", "copy", "download", "ellipsis-vertical", "upl / Figma ["expand-less"]  |
| C1 | R-05_1440_Signed-in | diff-file | 코드 ["arrow-down", "copy", "download", "ellipsis-vertical", "upl / Figma ["expand-less"]  |
| C1 | R-05_1920_Guest | diff-file | 코드 ["arrow-down", "copy", "download", "ellipsis-vertical", "upl / Figma ["expand-less"]  |
| C1 | R-05_1920_Signed-in | diff-file | 코드 ["arrow-down", "copy", "download", "ellipsis-vertical", "upl / Figma ["expand-less"]  |
| … | 나머지 4건 | | 화면별: R-05 10 |

## 색 · filter-clear (10건, M-8 10건)
- 고칠 쪽: **신규, 판정 필요** / 비고: M-8에 없던 원인(Figma 08:46 재내보내기·export 이름 상한 20·코드 변경으로 새로 나타남)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-11_1024_Guest | filter-clear | 코드 "null " / Figma "#33363d color/layout/panel-border"  |
| C2 | R-11_1024_Signed-in | filter-clear | 코드 "null " / Figma "#33363d color/layout/panel-border"  |
| C2 | R-11_1440_Guest | filter-clear | 코드 "null " / Figma "#33363d color/layout/panel-border"  |
| C2 | R-11_1440_Signed-in | filter-clear | 코드 "null " / Figma "#33363d color/layout/panel-border"  |
| C2 | R-11_1920_Guest | filter-clear | 코드 "null " / Figma "#33363d color/layout/panel-border"  |
| C2 | R-11_1920_Signed-in | filter-clear | 코드 "null " / Figma "#33363d color/layout/panel-border"  |
| … | 나머지 4건 | | 화면별: R-11 10 |

## 위치/크기 · gl-tabs · w (10건, M-8 10건)
- 고칠 쪽: **코드 10** (M-8 판정 이어받음) / 정답값: 309 / 385 / 381 / 437 / 1 / 189 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-14_1024_Guest | gl-tabs | w: 코드 641 / Figma 309 |
| C2 | R-14_1024_Signed-in | gl-tabs | w: 코드 641 / Figma 309 |
| C2 | R-14_1440_Guest | gl-tabs | w: 코드 785 / Figma 385 |
| C2 | R-14_1440_Signed-in | gl-tabs | w: 코드 785 / Figma 381 |
| C2 | R-14_1920_Guest | gl-tabs | w: 코드 897 / Figma 437 |
| C2 | R-14_1920_Signed-in | gl-tabs | w: 코드 897 / Figma 437 |
| … | 나머지 4건 | | 화면별: R-14 10 |

## 코드에만 · filter-search (10건, M-8 10건)
- 고칠 쪽: **Figma 10** (M-8 판정 이어받음) / 정답값: 캡처에 있는 기존 기능: Figma에 코드 부품/이름표 추가 / 근거: UX/handson/gitlab/26_라벨.png; UX/14_팀기능_배치.md
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-14_1024_Guest | filter-search | 코드에만 있음 |
| C2 | R-14_1024_Signed-in | filter-search | 코드에만 있음 |
| C2 | R-14_1440_Guest | filter-search | 코드에만 있음 |
| C2 | R-14_1440_Signed-in | filter-search | 코드에만 있음 |
| C2 | R-14_1920_Guest | filter-search | 코드에만 있음 |
| C2 | R-14_1920_Signed-in | filter-search | 코드에만 있음 |
| … | 나머지 4건 | | 화면별: R-14 10 |

## 위치/크기 · code-button · x (10건, M-8 10건)
- 고칠 쪽: **코드 10** (M-8 판정 이어받음) / 정답값: 922 / 1322 / 1618 / 282 / 674 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-17_1024_Guest | code-button | x: 코드 920 / Figma 922 |
| C2 | R-17_1024_Signed-in | code-button | x: 코드 920 / Figma 922 |
| C2 | R-17_1440_Guest | code-button | x: 코드 1320 / Figma 1322 |
| C2 | R-17_1440_Signed-in | code-button | x: 코드 1320 / Figma 1322 |
| C2 | R-17_1920_Guest | code-button | x: 코드 1616 / Figma 1618 |
| C2 | R-17_1920_Signed-in | code-button | x: 코드 1616 / Figma 1618 |
| … | 나머지 4건 | | 화면별: R-17 10 |

## 위치/크기 · code-button · w (10건, M-8 10건)
- 고칠 쪽: **코드 10** (M-8 판정 이어받음) / 정답값: 62 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-17_1024_Guest | code-button | w: 코드 64 / Figma 62 |
| C2 | R-17_1024_Signed-in | code-button | w: 코드 64 / Figma 62 |
| C2 | R-17_1440_Guest | code-button | w: 코드 64 / Figma 62 |
| C2 | R-17_1440_Signed-in | code-button | w: 코드 64 / Figma 62 |
| C2 | R-17_1920_Guest | code-button | w: 코드 64 / Figma 62 |
| C2 | R-17_1920_Signed-in | code-button | w: 코드 64 / Figma 62 |
| … | 나머지 4건 | | 화면별: R-17 10 |

## 색 · body (10건, M-8 0건)
- 고칠 쪽: **신규, 판정 필요** / 비고: M-8에 없던 원인(Figma 08:46 재내보내기·export 이름 상한 20·코드 변경으로 새로 나타남)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | body | 코드 "#000000 gray-100" / Figma "#131416 color/background/white"  |
| C2 | R-26_1024_Signed-in | body | 코드 "#000000 gray-100" / Figma "#131416 color/background/white"  |
| C2 | R-26_1440_Guest | body | 코드 "#000000 gray-100" / Figma "#131416 color/background/white"  |
| C2 | R-26_1440_Signed-in | body | 코드 "#000000 gray-100" / Figma "#131416 color/background/white"  |
| C2 | R-26_1920_Guest | body | 코드 "#000000 gray-100" / Figma "#131416 color/background/white"  |
| C2 | R-26_1920_Signed-in | body | 코드 "#000000 gray-100" / Figma "#131416 color/background/white"  |
| … | 나머지 4건 | | 화면별: R-26 10 |

## 색 · content-panel (10건, M-8 0건)
- 고칠 쪽: **신규, 판정 필요** / 비고: M-8에 없던 원인(Figma 08:46 재내보내기·export 이름 상한 20·코드 변경으로 새로 나타남)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | content-panel | 코드 "#131416 gray-95" / Figma "#1e2124 color/surface/gray-subtler"  |
| C2 | R-26_1024_Signed-in | content-panel | 코드 "#131416 gray-95" / Figma "#1e2124 color/surface/gray-subtler"  |
| C2 | R-26_1440_Guest | content-panel | 코드 "#131416 gray-95" / Figma "#1e2124 color/surface/gray-subtler"  |
| C2 | R-26_1440_Signed-in | content-panel | 코드 "#131416 gray-95" / Figma "#1e2124 color/surface/gray-subtler"  |
| C2 | R-26_1920_Guest | content-panel | 코드 "#131416 gray-95" / Figma "#1e2124 color/surface/gray-subtler"  |
| C2 | R-26_1920_Signed-in | content-panel | 코드 "#131416 gray-95" / Figma "#1e2124 color/surface/gray-subtler"  |
| … | 나머지 4건 | | 화면별: R-26 10 |

## 색 · breadcrumb (10건, M-8 0건)
- 고칠 쪽: **신규, 판정 필요** / 비고: M-8에 없던 원인(Figma 08:46 재내보내기·export 이름 상한 20·코드 변경으로 새로 나타남)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | breadcrumb | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  |
| C2 | R-26_1024_Signed-in | breadcrumb | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  |
| C2 | R-26_1440_Guest | breadcrumb | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  |
| C2 | R-26_1440_Signed-in | breadcrumb | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  |
| C2 | R-26_1920_Guest | breadcrumb | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  |
| C2 | R-26_1920_Signed-in | breadcrumb | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  |
| … | 나머지 4건 | | 화면별: R-26 10 |

## 색 · footer (10건, M-8 10건)
- 고칠 쪽: **신규, 판정 필요** / 비고: M-8에 없던 원인(Figma 08:46 재내보내기·export 이름 상한 20·코드 변경으로 새로 나타남)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | footer | 코드 "없음 " / Figma "#1e2124 color/surface/gray-subtler"  |
| C2 | R-26_1024_Signed-in | footer | 코드 "없음 " / Figma "#1e2124 color/surface/gray-subtler"  |
| C2 | R-26_1440_Guest | footer | 코드 "없음 " / Figma "#1e2124 color/surface/gray-subtler"  |
| C2 | R-26_1440_Signed-in | footer | 코드 "없음 " / Figma "#1e2124 color/surface/gray-subtler"  |
| C2 | R-26_1920_Guest | footer | 코드 "없음 " / Figma "#1e2124 color/surface/gray-subtler"  |
| C2 | R-26_1920_Signed-in | footer | 코드 "없음 " / Figma "#1e2124 color/surface/gray-subtler"  |
| … | 나머지 4건 | | 화면별: R-26 10 |

## 위치/크기 · filter-clear · x (8건, M-8 10건)
- 고칠 쪽: **코드 10** (M-8 판정 이어받음) / 정답값: 835 / 1235 / 1531 / 263 / 587 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-11_1024_Guest | filter-clear | x: 코드 823 / Figma 835 |
| C2 | R-11_1024_Signed-in | filter-clear | x: 코드 823 / Figma 835 |
| C2 | R-11_1440_Guest | filter-clear | x: 코드 1223 / Figma 1235 |
| C2 | R-11_1440_Signed-in | filter-clear | x: 코드 1223 / Figma 1235 |
| C2 | R-11_1920_Guest | filter-clear | x: 코드 1519 / Figma 1531 |
| C2 | R-11_1920_Signed-in | filter-clear | x: 코드 1519 / Figma 1531 |
| … | 나머지 2건 | | 화면별: R-11 8 |

## 아이콘 · gitlab-sidebar (8건, M-8 8건)
- 고칠 쪽: **측정 매핑 오류 4 / Figma 4** (M-8 판정 이어받음) / 정답값: 홈 + AI 소개 카드 /projects/150?fixture=kordoc / UX/17: 접힘/펼침 항목수 기반 Hug;피치32,화면 안 스크롤 / 근거: UX/audit_v3/M8_mapping.md; UX/17_사이드바_실측.md; D-16
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1440_Guest | gitlab-sidebar | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| C2 | R-26_1440_Signed-in | gitlab-sidebar | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| C2 | R-26_1920_Guest | gitlab-sidebar | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| C2 | R-26_1920_Signed-in | gitlab-sidebar | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| C1 | R-28_1440_Guest | gitlab-sidebar | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| C1 | R-28_1440_Signed-in | gitlab-sidebar | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| … | 나머지 2건 | | 화면별: R-26 4, R-28 4 |

## 아이콘 · sidebar-nav (8건, M-8 8건)
- 고칠 쪽: **측정 매핑 오류 4 / Figma 4** (M-8 판정 이어받음) / 정답값: 홈 + AI 소개 카드 /projects/150?fixture=kordoc / UX/17: 접힘/펼침 항목수 기반 Hug;피치32,화면 안 스크롤 / 근거: UX/audit_v3/M8_mapping.md; UX/17_사이드바_실측.md; D-16
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1440_Guest | sidebar-nav | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| C2 | R-26_1440_Signed-in | sidebar-nav | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| C2 | R-26_1920_Guest | sidebar-nav | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| C2 | R-26_1920_Signed-in | sidebar-nav | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| C1 | R-28_1440_Guest | sidebar-nav | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| C1 | R-28_1440_Signed-in | sidebar-nav | 코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou  |
| … | 나머지 2건 | | 화면별: R-26 4, R-28 4 |

## 위치/크기 · diff-file · x (6건, M-8 6건)
- 고칠 쪽: **코드 6** (M-8 판정 이어받음) / 정답값: 40 / 580 / 764 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-05_1024_Guest | diff-file | x: 코드 294 / Figma 40 |
| C1 | R-05_1024_Signed-in | diff-file | x: 코드 294 / Figma 40 |
| C1 | R-05_1440_Guest | diff-file | x: 코드 586 / Figma 580 |
| C1 | R-05_1440_Signed-in | diff-file | x: 코드 586 / Figma 580 |
| C1 | R-05_1920_Guest | diff-file | x: 코드 798 / Figma 764 |
| C1 | R-05_1920_Signed-in | diff-file | x: 코드 798 / Figma 764 |

## 위치/크기 · diff-file · w (6건, M-8 6건)
- 고칠 쪽: **코드 6** (M-8 판정 이어받음) / 정답값: 944 / 804 / 916 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-05_1024_Guest | diff-file | w: 코드 690 / Figma 944 |
| C1 | R-05_1024_Signed-in | diff-file | w: 코드 690 / Figma 944 |
| C1 | R-05_1440_Guest | diff-file | w: 코드 798 / Figma 804 |
| C1 | R-05_1440_Signed-in | diff-file | w: 코드 798 / Figma 804 |
| C1 | R-05_1920_Guest | diff-file | w: 코드 882 / Figma 916 |
| C1 | R-05_1920_Signed-in | diff-file | w: 코드 882 / Figma 916 |

## Figma에만 · comment-editor (5건, M-8 5건)
- 고칠 쪽: **코드 5** (M-8 판정 이어받음) / 정답값: {"x":40,"y":717,"w":944,"h":122} / {"x":296,"y":717,"w":808,"h":122} / {"x":480,"y":717,"w":920,"h":122} / {"x":16,"y":1115,"w":328,"h":122} / {"x":32,"y":801,"w":704,"h":122} / 근거: UX/handson/gitlab/20_이슈목록.png; code_plan/figma_full.json
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-12_1024_Signed-in | comment-editor | Figma에만 {"x": 40, "y": 717, "w": 944, "h": 122} |
| C2 | R-12_1440_Signed-in | comment-editor | Figma에만 {"x": 296, "y": 717, "w": 808, "h": 122} |
| C2 | R-12_1920_Signed-in | comment-editor | Figma에만 {"x": 480, "y": 717, "w": 920, "h": 122} |
| C2 | R-12_360_Signed-in | comment-editor | Figma에만 {"x": 16, "y": 1115, "w": 328, "h": 122} |
| C2 | R-12_768_Signed-in | comment-editor | Figma에만 {"x": 32, "y": 801, "w": 704, "h": 122} |

## 글자 속성 · main (5건, M-8 5건)
- 고칠 쪽: **Figma 5** (M-8 판정 이어받음) / 정답값: 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 / 근거: D-21 7-1/7-2; D-20; UX/07 7절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-22_1024_Guest | main | 코드 null / Figma null 크기 24→19, 줄 높이 32→28 |
| C2 | R-22_1440_Guest | main | 코드 null / Figma null 크기 24→19, 줄 높이 32→28 |
| C2 | R-22_1920_Guest | main | 코드 null / Figma null 크기 24→19, 줄 높이 32→28 |
| C2 | R-22_360_Guest | main | 코드 null / Figma null 크기 24→19, 줄 높이 32→28 |
| C2 | R-22_768_Guest | main | 코드 null / Figma null 크기 24→19, 줄 높이 32→28 |

## 글자 속성 · tabs (5건, M-8 0건)
- 고칠 쪽: **신규, 판정 필요** / 비고: M-8에 없던 원인(Figma 08:46 재내보내기·export 이름 상한 20·코드 변경으로 새로 나타남)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-27_1024_Signed-in | tabs | 코드 null / Figma null 크기 17→15, 줄 높이 26→22 |
| C1 | R-27_1440_Signed-in | tabs | 코드 null / Figma null 크기 17→15, 줄 높이 26→22 |
| C1 | R-27_1920_Signed-in | tabs | 코드 null / Figma null 크기 17→15, 줄 높이 26→22 |
| C1 | R-27_360_Signed-in | tabs | 코드 null / Figma null 크기 17→15, 줄 높이 26→22 |
| C1 | R-27_768_Signed-in | tabs | 코드 null / Figma null 크기 17→15, 줄 높이 26→22 |

## 위치/크기 · footer · x (2건, M-8 12건)
- 고칠 쪽: **Figma 12** (M-8 판정 이어받음) / 정답값: 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 / 근거: D-21 7-1/7-2; D-20; UX/07 7절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | footer | x: 코드 40 / Figma 280 |
| C2 | R-26_1024_Signed-in | footer | x: 코드 40 / Figma 280 |

## 위치/크기 · footer · w (2건, M-8 12건)
- 고칠 쪽: **Figma 12** (M-8 판정 이어받음) / 정답값: 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 / 근거: D-21 7-1/7-2; D-20; UX/07 7절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | footer | w: 코드 944 / Figma 704 |
| C2 | R-26_1024_Signed-in | footer | w: 코드 944 / Figma 704 |

## 위치/크기 · gl-tabs · y (4건, M-8 2건)
- 고칠 쪽: **코드 2** (M-8 판정 이어받음) / 정답값: 233 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-16_360_Guest | gl-tabs | y: 코드 121 / Figma 128 |
| C2 | R-16_360_Signed-in | gl-tabs | y: 코드 121 / Figma 128 |
| C2 | R-23_360_Guest | gl-tabs | y: 코드 241 / Figma 233 |
| C2 | R-23_360_Signed-in | gl-tabs | y: 코드 241 / Figma 233 |

## 위치/크기 · gl-filter · y (4건, M-8 26건)
- 고칠 쪽: **코드 26** (M-8 판정 이어받음) / 정답값: 245 / 206 / 198 / 170 / 282 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-16_360_Guest | gl-filter | y: 코드 218 / Figma 177 |
| C2 | R-16_360_Signed-in | gl-filter | y: 코드 218 / Figma 177 |
| C2 | R-23_360_Guest | gl-filter | y: 코드 289 / Figma 282 |
| C2 | R-23_360_Signed-in | gl-filter | y: 코드 289 / Figma 282 |

## 모서리·안쪽·간격 · diff-area (2건, M-8 2건)
- 고칠 쪽: **코드 2** (M-8 판정 이어받음) / 정답값: 간격 24→16 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C1 | R-05_360_Guest | diff-area | 코드 null / Figma null 간격 24→16 |
| C1 | R-05_360_Signed-in | diff-area | 코드 null / Figma null 간격 24→16 |

## 위치/크기 · tabs · h (2건, M-8 2건)
- 고칠 쪽: **코드 2** (M-8 판정 이어받음) / 정답값: 104 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-17_360_Guest | tabs | h: 코드 48 / Figma 104 |
| C2 | R-17_360_Signed-in | tabs | h: 코드 48 / Figma 104 |

## 글자 속성 · page-head (2건, M-8 2건)
- 고칠 쪽: **Figma 2** (M-8 판정 이어받음) / 정답값: D-16 KRDS 글자 단계와 짝수 행간. 현재 코드 글자 토큰 / 근거: D-16; UX/07 4절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-23_360_Guest | page-head | 코드 null / Figma null 크기 24→32, 줄 높이 32→40 |
| C2 | R-23_360_Signed-in | page-head | 코드 null / Figma null 크기 24→32, 줄 높이 32→40 |

## 아이콘 · topbar (2건, M-8 0건)
- 고칠 쪽: **신규, 판정 필요** / 비고: M-8에 없던 원인(Figma 08:46 재내보내기·export 이름 상한 20·코드 변경으로 새로 나타남)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | topbar | 코드 ["panel-open", "search"] / Figma ["search"]  |
| C2 | R-26_1024_Signed-in | topbar | 코드 ["bell", "issues", "merge-request", "panel-open", "plus", "s / Figma ["bell", "issues", "merge-request", "plus", "search"]  |

## Figma에만 · gitlab-sidebar (2건, M-8 0건)
- 고칠 쪽: **신규, 판정 필요** / 비고: M-8에 없던 원인(Figma 08:46 재내보내기·export 이름 상한 20·코드 변경으로 새로 나타남)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | gitlab-sidebar | Figma에만 {"x": 0, "y": 72, "w": 240, "h": 820} |
| C2 | R-26_1024_Signed-in | gitlab-sidebar | Figma에만 {"x": 0, "y": 72, "w": 240, "h": 820} |

## 위치/크기 · content-panel · x (2건, M-8 0건)
- 고칠 쪽: **신규, 판정 필요** / 비고: M-8에 없던 원인(Figma 08:46 재내보내기·export 이름 상한 20·코드 변경으로 새로 나타남)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | content-panel | x: 코드 8 / Figma 248 |
| C2 | R-26_1024_Signed-in | content-panel | x: 코드 8 / Figma 248 |

## 위치/크기 · content-panel · w (2건, M-8 0건)
- 고칠 쪽: **신규, 판정 필요** / 비고: M-8에 없던 원인(Figma 08:46 재내보내기·export 이름 상한 20·코드 변경으로 새로 나타남)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | content-panel | w: 코드 1008 / Figma 768 |
| C2 | R-26_1024_Signed-in | content-panel | w: 코드 1008 / Figma 768 |

## 위치/크기 · breadcrumb · x (2건, M-8 0건)
- 고칠 쪽: **신규, 판정 필요** / 비고: M-8에 없던 원인(Figma 08:46 재내보내기·export 이름 상한 20·코드 변경으로 새로 나타남)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | breadcrumb | x: 코드 40 / Figma 280 |
| C2 | R-26_1024_Signed-in | breadcrumb | x: 코드 40 / Figma 280 |

## 위치/크기 · main · x (2건, M-8 9건)
- 고칠 쪽: **Figma 9** (M-8 판정 이어받음) / 정답값: 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 / 근거: D-21 7-1/7-2; D-20; UX/07 7절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | main | x: 코드 40 / Figma 280 |
| C2 | R-26_1024_Signed-in | main | x: 코드 40 / Figma 280 |

## 위치/크기 · main · w (2건, M-8 10건)
- 고칠 쪽: **Figma 10** (M-8 판정 이어받음) / 정답값: 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 / 근거: D-21 7-1/7-2; D-20; UX/07 7절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | main | w: 코드 944 / Figma 704 |
| C2 | R-26_1024_Signed-in | main | w: 코드 944 / Figma 704 |

## Figma에만 · sidebar-nav (2건, M-8 0건)
- 고칠 쪽: **신규, 판정 필요** / 비고: M-8에 없던 원인(Figma 08:46 재내보내기·export 이름 상한 20·코드 변경으로 새로 나타남)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| C2 | R-26_1024_Guest | sidebar-nav | Figma에만 {"x": 8, "y": 154, "w": 224, "h": 625} |
| C2 | R-26_1024_Signed-in | sidebar-nav | Figma에만 {"x": 8, "y": 154, "w": 224, "h": 625} |
