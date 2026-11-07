# M-11 담당 D21 작업 목록

- 생성: M-11 측정(코드 048cbbc, 개발 서버 5994, 스크롤 막대 0, 비동기 대기) 대 Figma 합본 figma_full.json 2026-11-07 09:34(598 변형)
- 판정은 M10_decisions.md > M9_decisions.md > M8_decisions.md 순으로 이어받았다. 셋 다 없는 원인만 '신규, 판정 필요'. 판정 완료는 수정 완료가 아니다
- 건수 기준: M8 판정 이어받음 612, M9 판정 이어받음 270, 신규 판정 필요 192, M10 판정 이어받음 112

## 색 · profile-event (60건, M-10 0건)
- 고칠 쪽: **신규, 판정 필요** (M-10에도 없던 원인)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-12_1440_Guest | profile-event | 코드 "#464c53 gray-70" / Figma "#b1b8be color/layout/divider"  |
| D21 | G-12_1440_Guest | profile-event#2 | 코드 "#464c53 gray-70" / Figma "#b1b8be color/layout/divider"  |
| D21 | G-12_1440_Guest | profile-event#3 | 코드 "#464c53 gray-70" / Figma "#b1b8be color/layout/divider"  |
| D21 | G-12_1440_Guest | profile-event#4 | 코드 "#464c53 gray-70" / Figma "#b1b8be color/layout/divider"  |
| D21 | G-12_1440_Guest | profile-event#5 | 코드 "#464c53 gray-70" / Figma "#b1b8be color/layout/divider"  |
| D21 | G-12_1440_Guest | profile-event#6 | 코드 "#464c53 gray-70" / Figma "#b1b8be color/layout/divider"  |
| … | 나머지 54건 | | 화면별: G-12 60 |

## 위치/크기 · project-row · y (52건, M-10 64건)
- 고칠 쪽: **코드** (M10 판정, 당시 28건) / 정답·조치: 437 / 528 / 599 / 320 / 397 / 509 / 근거: Figma A-01; rb-taskfind 아래8 제거/compact 행 사이2→0/results gap8→12의 공통 원인
- 고칠 쪽: **Figma** (M10 판정, 당시 36건) / 정답·조치: "실측 필터→첫 행8 간격. 모바일 필터2줄 복구 후 같은 자료로 재생성" / 근거: UX/gitlab_compare/v2/measure.md: 필터→첫 행8; v3: 모바일 입력 먼저/정렬 다음
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-01_1024_Guest | project-row#4 | y: 코드 437 / Figma 445 |
| D21 | A-01_1024_Guest | project-row#5 | y: 코드 528 / Figma 536 |
| D21 | A-01_1024_Signed-in | project-row#4 | y: 코드 437 / Figma 445 |
| D21 | A-01_1024_Signed-in | project-row#5 | y: 코드 528 / Figma 536 |
| D21 | A-01_1440_Guest | project-row#4 | y: 코드 437 / Figma 445 |
| D21 | A-01_1440_Guest | project-row#5 | y: 코드 528 / Figma 536 |
| … | 나머지 46건 | | 화면별: G-01 36, A-01 16 |

## 위치/크기 · project-row · x (48건, M-10 0건)
- 고칠 쪽: **신규, 판정 필요** (M-10에도 없던 원인)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-01_1024_Guest | project-row | x: 코드 320 / Figma 312 |
| D21 | A-01_1024_Guest | project-row#2 | x: 코드 320 / Figma 312 |
| D21 | A-01_1024_Guest | project-row#3 | x: 코드 320 / Figma 312 |
| D21 | A-01_1024_Guest | project-row#4 | x: 코드 320 / Figma 312 |
| D21 | A-01_1024_Guest | project-row#5 | x: 코드 320 / Figma 312 |
| D21 | A-01_1024_Guest | project-row#6 | x: 코드 320 / Figma 312 |
| … | 나머지 42건 | | 화면별: A-01 48 |

## 위치/크기 · project-row · w (48건, M-10 0건)
- 고칠 쪽: **신규, 판정 필요** (M-10에도 없던 원인)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-01_1024_Guest | project-row | w: 코드 664 / Figma 672 |
| D21 | A-01_1024_Guest | project-row#2 | w: 코드 664 / Figma 672 |
| D21 | A-01_1024_Guest | project-row#3 | w: 코드 664 / Figma 672 |
| D21 | A-01_1024_Guest | project-row#4 | w: 코드 664 / Figma 672 |
| D21 | A-01_1024_Guest | project-row#5 | w: 코드 664 / Figma 672 |
| D21 | A-01_1024_Guest | project-row#6 | w: 코드 664 / Figma 672 |
| … | 나머지 42건 | | 화면별: A-01 48 |

## 문구 · section-title (4건, M-10 26건)
- 고칠 쪽: **Figma 24** (M8 판정, 당시 24건) / 정답·조치: copy/ko.js,ui.js,gl.js,work.js의 현재 문구 / 사용자 원문·상대시간은 같은 자료 기준으로 재생성 / 근거: UX/07_밀도_문구_기준.md 5/10/11/13절; D-19
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-06_1024_Signed-in | section-title | 코드 "로그인 후 내 도구/받은 의견" / Figma ["새 프로젝트"]  |
| D21 | G-06_1440_Signed-in | section-title | 코드 "로그인 후 내 도구/받은 의견" / Figma ["새 프로젝트"]  |
| D21 | G-06_1920_Signed-in | section-title | 코드 "로그인 후 내 도구/받은 의견" / Figma ["새 프로젝트"]  |
| D21 | G-06_768_Signed-in | section-title | 코드 "로그인 후 내 도구/받은 의견" / Figma ["새 프로젝트"]  |

## 모서리·안쪽·간격 · language-bar (40건, M-10 40건)
- 고칠 쪽: **코드** (M9 판정, 당시 40건) / 정답·조치: 모서리 4→0 / 간격 2→4 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
- 고칠 쪽: **측정 매핑 오류** (M9 판정, 당시 20건) / 정답·조치: /projects/150/feedback으로 재측정. 의견 폼 Figma 재작성 뒤 대조 / 근거: 사용자 M-9 지시; UX/05; PRD; code_plan/figma_name_map.json
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | language-bar | 코드 null / Figma null 모서리 8→0 |
| D21 | A-02_1024_Guest | language-bar | 코드 null / Figma null 간격 2→4 |
| D21 | A-02_1024_Signed-in | language-bar | 코드 null / Figma null 모서리 8→0 |
| D21 | A-02_1024_Signed-in | language-bar | 코드 null / Figma null 간격 2→4 |
| D21 | A-02_1440_Guest | language-bar | 코드 null / Figma null 모서리 8→0 |
| D21 | A-02_1440_Guest | language-bar | 코드 null / Figma null 간격 2→4 |
| … | 나머지 34건 | | 화면별: A-02 20, R-01 20 |

## 위치/크기 · sidebar-nav · w (4건, M-10 40건)
- 고칠 쪽: **Figma** (M10 판정, 당시 40건) / 정답·조치: "224 − 실제 스크롤바폭. 현재213=224−11; 코드 유지" / 근거: UX/17 1절 스크롤; D-16; sidebar-spec.json
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-04_1440_Guest | sidebar-nav | w: 코드 213 / Figma 224 |
| D21 | A-04_1440_Signed-in | sidebar-nav | w: 코드 213 / Figma 224 |
| D21 | A-04_1920_Guest | sidebar-nav | w: 코드 213 / Figma 224 |
| D21 | A-04_1920_Signed-in | sidebar-nav | w: 코드 213 / Figma 224 |

## 위치/크기 · section-title · y (10건, M-10 30건)
- 고칠 쪽: **코드 35** (M8 판정, 당시 35건) / 정답·조치: 169 / 161 / 243 / 137 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-06_1024_Guest | section-title | y: 코드 205 / Figma 169 |
| D21 | G-06_1024_Signed-in | section-title | y: 코드 205 / Figma 169 |
| D21 | G-06_1440_Guest | section-title | y: 코드 205 / Figma 169 |
| D21 | G-06_1440_Signed-in | section-title | y: 코드 205 / Figma 169 |
| D21 | G-06_1920_Guest | section-title | y: 코드 205 / Figma 169 |
| D21 | G-06_1920_Signed-in | section-title | y: 코드 205 / Figma 169 |
| … | 나머지 4건 | | 화면별: G-06 10 |

## 위치/크기 · filter-search · x (2건, M-10 42건)
- 고칠 쪽: **코드 36** (M8 판정, 당시 36건) / 정답·조치: 867 / 1267 / 1563 / 295 / 619 / 778 / 1178 / 1474 / 530 / 796 / 1196 / 1492 / 156 / 548 / 809 / 1209 / 1505 / 561 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-01_360_Guest | filter-search | x: 코드 283 / Figma 295 |
| D21 | G-01_360_Signed-in | filter-search | x: 코드 283 / Figma 295 |

## 위치/크기 · file-table · h (20건, M-10 30건)
- 고칠 쪽: **코드 20** (M8 판정, 당시 20건) / 정답·조치: 1262 / 1219 / 926 / 883 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | file-table | h: 코드 1441 / Figma 1262 |
| D21 | A-02_1024_Signed-in | file-table | h: 코드 1441 / Figma 1262 |
| D21 | A-02_1440_Guest | file-table | h: 코드 1441 / Figma 1262 |
| D21 | A-02_1440_Signed-in | file-table | h: 코드 1441 / Figma 1262 |
| D21 | A-02_1920_Guest | file-table | h: 코드 1441 / Figma 1262 |
| D21 | A-02_1920_Signed-in | file-table | h: 코드 1441 / Figma 1262 |
| … | 나머지 14건 | | 화면별: A-02 10, R-01 10 |

## 위치/크기 · gl-tabs · w (20건, M-10 30건)
- 고칠 쪽: **코드 10** (M8 판정, 당시 10건) / 정답·조치: 309 / 385 / 381 / 437 / 1 / 189 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-01_1024_Guest | gl-tabs | w: 코드 160 / Figma 168 |
| D21 | G-01_1024_Signed-in | gl-tabs | w: 코드 160 / Figma 168 |
| D21 | G-01_1440_Guest | gl-tabs | w: 코드 160 / Figma 168 |
| D21 | G-01_1440_Signed-in | gl-tabs | w: 코드 160 / Figma 168 |
| D21 | G-01_1920_Guest | gl-tabs | w: 코드 160 / Figma 168 |
| D21 | G-01_1920_Signed-in | gl-tabs | w: 코드 160 / Figma 168 |
| … | 나머지 14건 | | 화면별: G-01 10, G-04 10 |

## 코드에만 · tabs (20건, M-10 25건)
- 고칠 쪽: **코드 5** (M8 판정, 당시 5건) / 정답·조치: Figma에 없는 미지정 요소 제거 또는 기존 Figma 요소에 이름표 통합 / 근거: UX/audit_v3/capture_map.md; UX/14_팀기능_배치.md
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-01_1024_Guest | tabs | 코드에만 있음 |
| D21 | G-01_1024_Signed-in | tabs | 코드에만 있음 |
| D21 | G-01_1440_Guest | tabs | 코드에만 있음 |
| D21 | G-01_1440_Signed-in | tabs | 코드에만 있음 |
| D21 | G-01_1920_Guest | tabs | 코드에만 있음 |
| D21 | G-01_1920_Signed-in | tabs | 코드에만 있음 |
| … | 나머지 14건 | | 화면별: G-01 10, G-04 10 |

## 위치/크기 · page-head · h (17건, M-10 25건)
- 고칠 쪽: **코드 25** (M8 판정, 당시 25건) / 정답·조치: 44 / 36 / 111 / 32 / 76 / 72 / 56 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-04_1024_Guest | page-head | h: 코드 40 / Figma 46 |
| D21 | G-04_1024_Signed-in | page-head | h: 코드 40 / Figma 46 |
| D21 | G-04_1440_Guest | page-head | h: 코드 40 / Figma 46 |
| D21 | G-04_1440_Signed-in | page-head | h: 코드 40 / Figma 46 |
| D21 | G-04_1920_Guest | page-head | h: 코드 40 / Figma 46 |
| D21 | G-04_1920_Signed-in | page-head | h: 코드 40 / Figma 46 |
| … | 나머지 11건 | | 화면별: G-04 10, G-07 5, R-01 2 |

## 위치/크기 · commit-bar · y (12건, M-10 24건)
- 고칠 쪽: **코드 18** (M8 판정, 당시 18건) / 정답·조치: 233 / 225 / 217 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | commit-bar | y: 코드 241 / Figma 233 |
| D21 | A-02_1024_Signed-in | commit-bar | y: 코드 241 / Figma 233 |
| D21 | A-02_1440_Guest | commit-bar | y: 코드 241 / Figma 233 |
| D21 | A-02_1440_Signed-in | commit-bar | y: 코드 241 / Figma 233 |
| D21 | A-02_1920_Guest | commit-bar | y: 코드 241 / Figma 233 |
| D21 | A-02_1920_Signed-in | commit-bar | y: 코드 241 / Figma 233 |
| … | 나머지 6건 | | 화면별: A-02 6, R-01 6 |

## 문구 · page-head (10건, M-10 34건)
- 고칠 쪽: **Figma 44** (M8 판정, 당시 44건) / 정답·조치: copy/ko.js,ui.js,gl.js,work.js의 현재 문구 / 사용자 원문·상대시간은 같은 자료 기준으로 재생성 / 근거: UX/07_밀도_문구_기준.md 5/10/11/13절; D-19
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-11_1024_Guest | page-head | 코드 "설정" / Figma ["프로필"]  |
| D21 | G-11_1024_Signed-in | page-head | 코드 "설정" / Figma ["프로필"]  |
| D21 | G-11_1440_Guest | page-head | 코드 "설정" / Figma ["프로필"]  |
| D21 | G-11_1440_Signed-in | page-head | 코드 "설정" / Figma ["프로필"]  |
| D21 | G-11_1920_Guest | page-head | 코드 "설정" / Figma ["프로필"]  |
| D21 | G-11_1920_Signed-in | page-head | 코드 "설정" / Figma ["프로필"]  |
| … | 나머지 4건 | | 화면별: G-11 10 |

## 위치/크기 · sidebar-nav · h (4건, M-10 24건)
- 고칠 쪽: **측정 매핑 오류 4 / Figma 20** (M8 판정, 당시 24건) / 정답·조치: 홈 + AI 소개 카드 /projects/150?fixture=kordoc / UX/17: 접힘/펼침 항목수 기반 Hug;피치32,화면 안 스크롤 / 근거: UX/audit_v3/M8_mapping.md; UX/17_사이드바_실측.md; D-16
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-30_1440_Guest | sidebar-nav | h: 코드 560 / Figma 817 |
| D21 | R-30_1440_Signed-in | sidebar-nav | h: 코드 560 / Figma 817 |
| D21 | R-30_1920_Guest | sidebar-nav | h: 코드 560 / Figma 817 |
| D21 | R-30_1920_Signed-in | sidebar-nav | h: 코드 560 / Figma 817 |

## 위치/크기 · file-table · y (12건, M-10 22건)
- 고칠 쪽: **코드 16** (M8 판정, 당시 16건) / 정답·조치: 315 / 307 / 299 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | file-table | y: 코드 307 / Figma 315 |
| D21 | A-02_1024_Signed-in | file-table | y: 코드 307 / Figma 315 |
| D21 | A-02_1440_Guest | file-table | y: 코드 307 / Figma 315 |
| D21 | A-02_1440_Signed-in | file-table | y: 코드 307 / Figma 315 |
| D21 | A-02_1920_Guest | file-table | y: 코드 307 / Figma 315 |
| D21 | A-02_1920_Signed-in | file-table | y: 코드 307 / Figma 315 |
| … | 나머지 6건 | | 화면별: A-02 6, R-01 6 |

## 위치/크기 · page-head · w (22건, M-10 22건)
- 고칠 쪽: **코드 16** (M8 판정, 당시 16건) / 정답·조치: 944 / 1088 / 1200 / 704 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-05_1024_Guest | page-head | w: 코드 640 / Figma 944 |
| D21 | G-05_1024_Signed-in | page-head | w: 코드 640 / Figma 944 |
| D21 | G-05_1440_Guest | page-head | w: 코드 640 / Figma 1088 |
| D21 | G-05_1440_Signed-in | page-head | w: 코드 640 / Figma 1088 |
| D21 | G-05_1920_Guest | page-head | w: 코드 640 / Figma 1200 |
| D21 | G-05_1920_Signed-in | page-head | w: 코드 640 / Figma 1200 |
| … | 나머지 16건 | | 화면별: G-05 8, G-09 8, R-01 6 |

## 위치/크기 · section-title · w (10건, M-10 21건)
- 고칠 쪽: **코드 25** (M8 판정, 당시 25건) / 정답·조치: 944 / 1088 / 1200 / 328 / 704 / 960 / 312 / 720 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-06_1024_Guest | section-title | w: 코드 896 / Figma 944 |
| D21 | G-06_1024_Signed-in | section-title | w: 코드 896 / Figma 944 |
| D21 | G-06_1440_Guest | section-title | w: 코드 1040 / Figma 1088 |
| D21 | G-06_1440_Signed-in | section-title | w: 코드 1040 / Figma 1088 |
| D21 | G-06_1920_Guest | section-title | w: 코드 1152 / Figma 1200 |
| D21 | G-06_1920_Signed-in | section-title | w: 코드 1152 / Figma 1200 |
| … | 나머지 4건 | | 화면별: G-06 10 |

## 위치/크기 · project-info · y (20건, M-10 20건)
- 고칠 쪽: **코드 10** (M8 판정, 당시 10건) / 정답·조치: 121 / 225 / 185 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | project-info | y: 코드 193 / Figma 121 |
| D21 | A-02_1024_Signed-in | project-info | y: 코드 193 / Figma 121 |
| D21 | A-02_1440_Guest | project-info | y: 코드 193 / Figma 121 |
| D21 | A-02_1440_Signed-in | project-info | y: 코드 193 / Figma 121 |
| D21 | A-02_1920_Guest | project-info | y: 코드 193 / Figma 121 |
| D21 | A-02_1920_Signed-in | project-info | y: 코드 193 / Figma 121 |
| … | 나머지 14건 | | 화면별: A-02 10, R-01 10 |

## 위치/크기 · project-info · h (20건, M-10 20건)
- 고칠 쪽: **코드 10** (M8 판정, 당시 10건) / 정답·조치: 792 / 746 / 724 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | project-info | h: 코드 910 / Figma 780 |
| D21 | A-02_1024_Signed-in | project-info | h: 코드 910 / Figma 780 |
| D21 | A-02_1440_Guest | project-info | h: 코드 910 / Figma 780 |
| D21 | A-02_1440_Signed-in | project-info | h: 코드 910 / Figma 780 |
| D21 | A-02_1920_Guest | project-info | h: 코드 910 / Figma 780 |
| D21 | A-02_1920_Signed-in | project-info | h: 코드 910 / Figma 780 |
| … | 나머지 14건 | | 화면별: A-02 10, R-01 10 |

## 문구 · toolbar (20건, M-10 20건)
- 고칠 쪽: **Figma 10** (M8 판정, 당시 10건) / 정답·조치: copy/ko.js,ui.js,gl.js,work.js의 현재 문구 / 사용자 원문·상대시간은 같은 자료 기준으로 재생성 / 근거: UX/07_밀도_문구_기준.md 5/10/11/13절; D-19
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | toolbar | 코드 "main kordoc 파일 찾기" / Figma ["코드"]  |
| D21 | A-02_1024_Signed-in | toolbar | 코드 "main kordoc 파일 찾기" / Figma ["코드"]  |
| D21 | A-02_1440_Guest | toolbar | 코드 "main kordoc 파일 찾기" / Figma ["코드"]  |
| D21 | A-02_1440_Signed-in | toolbar | 코드 "main kordoc 파일 찾기" / Figma ["코드"]  |
| D21 | A-02_1920_Guest | toolbar | 코드 "main kordoc 파일 찾기" / Figma ["코드"]  |
| D21 | A-02_1920_Signed-in | toolbar | 코드 "main kordoc 파일 찾기" / Figma ["코드"]  |
| … | 나머지 14건 | | 화면별: A-02 10, R-01 10 |

## 아이콘 · toolbar (20건, M-10 20건)
- 고칠 쪽: **코드 10** (M8 판정, 당시 10건) / 정답·조치: ["arrow-down","branch","ellipsis-vertical"] / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | toolbar | 코드 ["arrow-down", "branch"] / Figma ["arrow-down", "branch", "ellipsis-vertical"]  |
| D21 | A-02_1024_Signed-in | toolbar | 코드 ["arrow-down", "branch"] / Figma ["arrow-down", "branch", "ellipsis-vertical"]  |
| D21 | A-02_1440_Guest | toolbar | 코드 ["arrow-down", "branch"] / Figma ["arrow-down", "branch", "ellipsis-vertical"]  |
| D21 | A-02_1440_Signed-in | toolbar | 코드 ["arrow-down", "branch"] / Figma ["arrow-down", "branch", "ellipsis-vertical"]  |
| D21 | A-02_1920_Guest | toolbar | 코드 ["arrow-down", "branch"] / Figma ["arrow-down", "branch", "ellipsis-vertical"]  |
| D21 | A-02_1920_Signed-in | toolbar | 코드 ["arrow-down", "branch"] / Figma ["arrow-down", "branch", "ellipsis-vertical"]  |
| … | 나머지 14건 | | 화면별: A-02 10, R-01 10 |

## 아이콘 · file-table (20건, M-10 20건)
- 고칠 쪽: **코드 10** (M8 판정, 당시 10건) / 정답·조치: ["folder","icon-file/git","icon-file/markdown"] / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | file-table | 코드 ["file:git", "file:markdown", "folder"] / Figma ["folder", "icon-file/git", "icon-file/markdown"]  |
| D21 | A-02_1024_Signed-in | file-table | 코드 ["file:git", "file:markdown", "folder"] / Figma ["folder", "icon-file/git", "icon-file/markdown"]  |
| D21 | A-02_1440_Guest | file-table | 코드 ["file:git", "file:markdown", "folder"] / Figma ["folder", "icon-file/git", "icon-file/markdown"]  |
| D21 | A-02_1440_Signed-in | file-table | 코드 ["file:git", "file:markdown", "folder"] / Figma ["folder", "icon-file/git", "icon-file/markdown"]  |
| D21 | A-02_1920_Guest | file-table | 코드 ["file:git", "file:markdown", "folder"] / Figma ["folder", "icon-file/git", "icon-file/markdown"]  |
| D21 | A-02_1920_Signed-in | file-table | 코드 ["file:git", "file:markdown", "folder"] / Figma ["folder", "icon-file/git", "icon-file/markdown"]  |
| … | 나머지 14건 | | 화면별: A-02 10, R-01 10 |

## 아이콘 · readme (20건, M-10 20건)
- 고칠 쪽: **코드 10** (M8 판정, 당시 10건) / 정답·조치: ["bell","copy"] / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | readme | 코드 ["file:markdown"] / Figma ["copy"]  |
| D21 | A-02_1024_Signed-in | readme | 코드 ["file:markdown"] / Figma ["copy"]  |
| D21 | A-02_1440_Guest | readme | 코드 ["file:markdown"] / Figma ["copy"]  |
| D21 | A-02_1440_Signed-in | readme | 코드 ["file:markdown"] / Figma ["copy"]  |
| D21 | A-02_1920_Guest | readme | 코드 ["file:markdown"] / Figma ["copy"]  |
| D21 | A-02_1920_Signed-in | readme | 코드 ["file:markdown"] / Figma ["copy"]  |
| … | 나머지 14건 | | 화면별: A-02 10, R-01 10 |

## 위치/크기 · language-bar · y (20건, M-10 20건)
- 고칠 쪽: **코드** (M9 판정, 당시 20건) / 정답·조치: 299 / 381 / 319 / 389 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
- 고칠 쪽: **측정 매핑 오류** (M9 판정, 당시 10건) / 정답·조치: /projects/150/feedback으로 재측정. 의견 폼 Figma 재작성 뒤 대조 / 근거: 사용자 M-9 지시; UX/05; PRD; code_plan/figma_name_map.json
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | language-bar | y: 코드 375 / Figma 299 |
| D21 | A-02_1024_Signed-in | language-bar | y: 코드 375 / Figma 299 |
| D21 | A-02_1440_Guest | language-bar | y: 코드 375 / Figma 299 |
| D21 | A-02_1440_Signed-in | language-bar | y: 코드 375 / Figma 299 |
| D21 | A-02_1920_Guest | language-bar | y: 코드 375 / Figma 299 |
| D21 | A-02_1920_Signed-in | language-bar | y: 코드 375 / Figma 299 |
| … | 나머지 14건 | | 화면별: A-02 10, R-01 10 |

## 코드에만 · extra-field (20건, M-10 20건)
- 고칠 쪽: **Figma 10** (M8 판정, 당시 10건) / 정답·조치: UX/14 지정 자리의 기존 코드 부품 추가 / 근거: UX/14_팀기능_배치.md 1/3절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | extra-field | 코드에만 있음 |
| D21 | A-02_1024_Signed-in | extra-field | 코드에만 있음 |
| D21 | A-02_1440_Guest | extra-field | 코드에만 있음 |
| D21 | A-02_1440_Signed-in | extra-field | 코드에만 있음 |
| D21 | A-02_1920_Guest | extra-field | 코드에만 있음 |
| D21 | A-02_1920_Signed-in | extra-field | 코드에만 있음 |
| … | 나머지 14건 | | 화면별: A-02 10, R-01 10 |

## Figma에만 · tabs (20건, M-10 20건)
- 고칠 쪽: **코드 40** (M8 판정, 당시 40건) / 정답·조치: {"x":40,"y":199,"w":944,"h":40} / {"x":296,"y":199,"w":1088,"h":40} / {"x":480,"y":199,"w":1200,"h":40} / {"x":16,"y":213,"w":328,"h":40} / {"x":32,"y":199,"w":704,"h":40 / 근거: UX/audit_v3/capture_map.md; code_plan/figma_full.json; UX/handson/gitlab/01_탐색_프로젝트목록_기본.png; code_plan/figma_full.json; UX/handson/gitlab/40_탐색_그룹.pn
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-09_1024_Guest | tabs | Figma에만 {"x": 40, "y": 199, "w": 944, "h": 40} |
| D21 | A-09_1024_Signed-in | tabs | Figma에만 {"x": 40, "y": 199, "w": 944, "h": 40} |
| D21 | A-09_1440_Guest | tabs | Figma에만 {"x": 296, "y": 199, "w": 1088, "h": 40} |
| D21 | A-09_1440_Signed-in | tabs | Figma에만 {"x": 296, "y": 199, "w": 1088, "h": 40} |
| D21 | A-09_1920_Guest | tabs | Figma에만 {"x": 480, "y": 199, "w": 1200, "h": 40} |
| D21 | A-09_1920_Signed-in | tabs | Figma에만 {"x": 480, "y": 199, "w": 1200, "h": 40} |
| … | 나머지 14건 | | 화면별: A-09 10, G-06 5, G-07 5 |

## 모서리·안쪽·간격 · gl-tabs (20건, M-10 20건)
- 고칠 쪽: **코드** (M10 판정, 당시 20건) / 정답·조치: "간격 0→8" / "간격 24→8" / 근거: capture_map.md; 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-01_1024_Guest | gl-tabs | 코드 null / Figma null 간격 8→0 |
| D21 | G-01_1024_Signed-in | gl-tabs | 코드 null / Figma null 간격 8→0 |
| D21 | G-01_1440_Guest | gl-tabs | 코드 null / Figma null 간격 8→0 |
| D21 | G-01_1440_Signed-in | gl-tabs | 코드 null / Figma null 간격 8→0 |
| D21 | G-01_1920_Guest | gl-tabs | 코드 null / Figma null 간격 8→0 |
| D21 | G-01_1920_Signed-in | gl-tabs | 코드 null / Figma null 간격 8→0 |
| … | 나머지 14건 | | 화면별: G-01 10, G-04 10 |

## 모서리·안쪽·간격 · extra-field-filter (20건, M-10 20건)
- 고칠 쪽: **코드** (M9 판정, 당시 20건) / 정답·조치: 모서리 8→0 / 안쪽 0 12 0 12→0 0 0 0 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-01_1024_Guest | extra-field-filter | 코드 null / Figma null 모서리 8→0 |
| D21 | G-01_1024_Guest | extra-field-filter | 코드 null / Figma null 안쪽 0 12 0 12→0 0 0 0 |
| D21 | G-01_1024_Signed-in | extra-field-filter | 코드 null / Figma null 모서리 8→0 |
| D21 | G-01_1024_Signed-in | extra-field-filter | 코드 null / Figma null 안쪽 0 12 0 12→0 0 0 0 |
| D21 | G-01_1440_Guest | extra-field-filter | 코드 null / Figma null 모서리 8→0 |
| D21 | G-01_1440_Guest | extra-field-filter | 코드 null / Figma null 안쪽 0 12 0 12→0 0 0 0 |
| … | 나머지 14건 | | 화면별: G-01 20 |

## Figma에만 · tabbar (20건, M-10 20건)
- 고칠 쪽: **코드 20** (M8 판정, 당시 20건) / 정답·조치: {"x":40,"y":203,"w":26,"h":2} / {"x":90,"y":203,"w":39,"h":2} / {"x":296,"y":203,"w":26,"h":2} / {"x":346,"y":203,"w":39,"h":2} / {"x":480,"y":203,"w":26,"h":2} / {"x":53 / 근거: UX/handson/gitlab/40_탐색_그룹.png; code_plan/figma_full.json
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-04_1024_Guest | tabbar | Figma에만 {"x": 40, "y": 249, "w": 64, "h": 2} |
| D21 | G-04_1024_Guest | tabbar#2 | Figma에만 {"x": 112, "y": 249, "w": 65, "h": 2} |
| D21 | G-04_1024_Signed-in | tabbar | Figma에만 {"x": 40, "y": 249, "w": 64, "h": 2} |
| D21 | G-04_1024_Signed-in | tabbar#2 | Figma에만 {"x": 112, "y": 249, "w": 65, "h": 2} |
| D21 | G-04_1440_Guest | tabbar | Figma에만 {"x": 296, "y": 249, "w": 64, "h": 2} |
| D21 | G-04_1440_Guest | tabbar#2 | Figma에만 {"x": 368, "y": 249, "w": 65, "h": 2} |
| … | 나머지 14건 | | 화면별: G-04 20 |

## 위치/크기 · tabs · y (2건, M-10 17건)
- 고칠 쪽: **코드 15** (M8 판정, 당시 15건) / 정답·조치: 191 / 221 / 243 / 351 / 365 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-05_360_Guest | tabs | y: 코드 187 / Figma 191 |
| D21 | A-05_360_Signed-in | tabs | y: 코드 187 / Figma 191 |

## 문구 · group-row (17건, M-10 200건)
- 고칠 쪽: **Figma** (M9 판정, 당시 140건) / 정답·조치: 동일 API 자료/관찰시각으로 다시 생성. 미확인 수를0으로 채우지 않음 / 근거: UX/07 5·10·11·13절; P11_Organizations useCounts; P33_Profile ago
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-04_1440_Guest | group-row#10 | 코드 "S sparrow8dast2text4 - - - 생성됨 3주 전" / Figma ["0", "0"]  |
| D21 | G-04_1440_Guest | group-row#11 | 코드 "S sparrow8dast2text4 - - - 생성됨 3주 전" / Figma ["0", "0"]  |
| D21 | G-04_1440_Signed-in | group-row#9 | 코드 "S sparrow8dast2text4 - - - 생성됨 3주 전" / Figma ["0", "0"]  |
| D21 | G-04_1440_Signed-in | group-row#10 | 코드 "S sparrow8dast2text4 - - - 생성됨 3주 전" / Figma ["0", "0"]  |
| D21 | G-04_1440_Signed-in | group-row#11 | 코드 "S sparrow8dast2text4 - - - 생성됨 3주 전" / Figma ["0", "0"]  |
| D21 | G-04_1920_Guest | group-row#6 | 코드 "S sparrow8dast2text4 - - - 생성됨 3주 전" / Figma ["0", "0"]  |
| … | 나머지 11건 | | 화면별: G-04 17 |

## 위치/크기 · readme · h (16건, M-10 16건)
- 고칠 쪽: **코드 10** (M8 판정, 당시 10건) / 정답·조치: 6176 / 5640 / 5464 / 9104 / 5842 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | readme | h: 코드 5823 / Figma 5918 |
| D21 | A-02_1024_Signed-in | readme | h: 코드 5823 / Figma 5918 |
| D21 | A-02_1440_Guest | readme | h: 코드 5488 / Figma 5494 |
| D21 | A-02_1440_Signed-in | readme | h: 코드 5488 / Figma 5494 |
| D21 | A-02_1920_Guest | readme | h: 코드 5262 / Figma 5270 |
| D21 | A-02_1920_Signed-in | readme | h: 코드 5263 / Figma 5270 |
| … | 나머지 10건 | | 화면별: A-02 8, R-01 8 |

## 위치/크기 · project-row · h (16건, M-10 28건)
- 고칠 쪽: **코드 40** (M8 판정, 당시 40건) / 정답·조치: 91 / 161 / 69 / 119 / 189 / 95 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-01_1440_Guest | project-row#4 | h: 코드 99 / Figma 119 |
| D21 | G-01_1440_Guest | project-row#7 | h: 코드 71 / Figma 91 |
| D21 | G-01_1440_Signed-in | project-row#4 | h: 코드 99 / Figma 119 |
| D21 | G-01_1440_Signed-in | project-row#7 | h: 코드 71 / Figma 91 |
| D21 | G-01_1920_Guest | project-row#4 | h: 코드 99 / Figma 119 |
| D21 | G-01_1920_Guest | project-row#7 | h: 코드 71 / Figma 91 |
| … | 나머지 10건 | | 화면별: G-01 16 |

## 모서리·안쪽·간격 · page-head (15건, M-10 15건)
- 고칠 쪽: **코드 25** (M8 판정, 당시 25건) / 정답·조치: 안쪽 0 0 4 0→0 0 0 0 / 간격 8→16 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-04_1024_Guest | page-head | 코드 null / Figma null 안쪽 0 0 6 0→0 0 0 0 |
| D21 | G-04_1024_Signed-in | page-head | 코드 null / Figma null 안쪽 0 0 6 0→0 0 0 0 |
| D21 | G-04_1440_Guest | page-head | 코드 null / Figma null 안쪽 0 0 6 0→0 0 0 0 |
| D21 | G-04_1440_Signed-in | page-head | 코드 null / Figma null 안쪽 0 0 6 0→0 0 0 0 |
| D21 | G-04_1920_Guest | page-head | 코드 null / Figma null 안쪽 0 0 6 0→0 0 0 0 |
| D21 | G-04_1920_Signed-in | page-head | 코드 null / Figma null 안쪽 0 0 6 0→0 0 0 0 |
| … | 나머지 9건 | | 화면별: G-04 10, G-07 5 |

## 코드에만 · page-head (13건, M-10 13건)
- 고칠 쪽: **Figma 21** (M8 판정, 당시 21건) / 정답·조치: 캡처에 있는 기존 기능: Figma에 코드 부품/이름표 추가 / 근거: UX/handson/gitlab/01_탐색_프로젝트목록_기본.png; UX/14_팀기능_배치.md; UX/handson/gitlab/48_그룹_사용자페이지.png; UX/14_팀기능_배치.md; UX/handson/gitlab/02_프로젝트홈_기본.png; UX/14_
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | page-head | 코드에만 있음 |
| D21 | A-02_1024_Signed-in | page-head | 코드에만 있음 |
| D21 | A-02_1440_Guest | page-head | 코드에만 있음 |
| D21 | A-02_1440_Signed-in | page-head | 코드에만 있음 |
| D21 | A-02_1920_Guest | page-head | 코드에만 있음 |
| D21 | A-02_1920_Signed-in | page-head | 코드에만 있음 |
| … | 나머지 7건 | | 화면별: A-02 10, G-12 3 |

## 순서 · (화면) (13건, M-10 17건)
- 고칠 쪽: **코드 13** (M8 판정, 당시 13건) / 정답·조치: system-band > body > login-divider > login-card > login-notice > login-logo > login-field > notice-block > footer / system-band > topbar > global-search > body > gitlab-s / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | (화면) | 코드 "system-band > topbar > global-search > body > content-panel / Figma "system-band > topbar > global-search > body > content-panel  |
| D21 | A-02_1024_Signed-in | (화면) | 코드 "system-band > topbar > global-search > body > content-panel / Figma "system-band > topbar > global-search > body > content-panel  |
| D21 | A-02_1440_Guest | (화면) | 코드 "system-band > topbar > global-search > body > gitlab-sideba / Figma "system-band > topbar > global-search > body > gitlab-sideba  |
| D21 | A-02_1440_Signed-in | (화면) | 코드 "system-band > topbar > global-search > body > gitlab-sideba / Figma "system-band > topbar > global-search > body > gitlab-sideba  |
| D21 | A-02_1920_Guest | (화면) | 코드 "system-band > topbar > global-search > body > gitlab-sideba / Figma "system-band > topbar > global-search > body > gitlab-sideba  |
| D21 | A-02_1920_Signed-in | (화면) | 코드 "system-band > topbar > global-search > body > gitlab-sideba / Figma "system-band > topbar > global-search > body > gitlab-sideba  |
| … | 나머지 7건 | | 화면별: A-02 6, R-01 6, G-12 1 |

## 모서리·안쪽·간격 · profile-activity (3건, M-10 13건)
- 고칠 쪽: **코드** (M9 판정, 당시 1건) / 정답·조치: 간격 12→0 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-12_1440_Guest | profile-activity | 코드 null / Figma null 간격 12→0 |
| D21 | G-12_360_Guest | profile-activity | 코드 null / Figma null 간격 12→0 |
| D21 | G-12_768_Guest | profile-activity | 코드 null / Figma null 간격 12→0 |

## 색 · filters (12건, M-10 12건)
- 고칠 쪽: **코드** (M10 판정, 당시 12건) / 정답·조치: "#1e2124 color/layout/raised-bg" / 근거: capture_map.md; 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-01_1024_Guest | filters | 코드 "없음 " / Figma "#1e2124 color/layout/raised-bg"  |
| D21 | A-01_1024_Signed-in | filters | 코드 "없음 " / Figma "#1e2124 color/layout/raised-bg"  |
| D21 | A-01_1440_Guest | filters | 코드 "없음 " / Figma "#1e2124 color/layout/raised-bg"  |
| D21 | A-01_1440_Signed-in | filters | 코드 "없음 " / Figma "#1e2124 color/layout/raised-bg"  |
| D21 | A-01_1920_Guest | filters | 코드 "없음 " / Figma "#1e2124 color/layout/raised-bg"  |
| D21 | A-01_1920_Signed-in | filters | 코드 "없음 " / Figma "#1e2124 color/layout/raised-bg"  |
| … | 나머지 6건 | | 화면별: A-01 6, G-02 6 |

## 위치/크기 · toolbar · y (12건, M-10 12건)
- 고칠 쪽: **코드 6** (M8 판정, 당시 6건) / 정답·조치: 185 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | toolbar | y: 코드 193 / Figma 185 |
| D21 | A-02_1024_Signed-in | toolbar | y: 코드 193 / Figma 185 |
| D21 | A-02_1440_Guest | toolbar | y: 코드 193 / Figma 185 |
| D21 | A-02_1440_Signed-in | toolbar | y: 코드 193 / Figma 185 |
| D21 | A-02_1920_Guest | toolbar | y: 코드 193 / Figma 185 |
| D21 | A-02_1920_Signed-in | toolbar | y: 코드 193 / Figma 185 |
| … | 나머지 6건 | | 화면별: A-02 6, R-01 6 |

## 위치/크기 · intro-card · h (12건, M-10 12건)
- 고칠 쪽: **코드 10** (M8 판정, 당시 10건) / 정답·조치: 172 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | intro-card | h: 코드 331 / Figma 172 |
| D21 | A-02_1024_Signed-in | intro-card | h: 코드 331 / Figma 172 |
| D21 | A-02_1440_Guest | intro-card | h: 코드 331 / Figma 172 |
| D21 | A-02_1440_Signed-in | intro-card | h: 코드 331 / Figma 172 |
| D21 | A-02_1920_Guest | intro-card | h: 코드 331 / Figma 172 |
| D21 | A-02_1920_Signed-in | intro-card | h: 코드 331 / Figma 172 |
| … | 나머지 6건 | | 화면별: A-02 10, R-01 2 |

## 아이콘 · gl-filter (2건, M-10 12건)
- 고칠 쪽: **코드 20** (M8 판정, 당시 20건) / 정답·조치: ["arrow-down","search"] / ["arrow-down","history","search"] / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-04_360_Guest | gl-filter | 코드 ["arrow-down", "search", "sort-desc"] / Figma ["arrow-down", "search"]  |
| D21 | G-04_360_Signed-in | gl-filter | 코드 ["arrow-down", "search", "sort-desc"] / Figma ["arrow-down", "search"]  |

## 문구 · profile-event (12건, M-10 6건)
- 고칠 쪽: **Figma** (M9 판정, 당시 2건) / 정답·조치: 동일 API 자료/관찰시각으로 다시 생성. 미확인 수를0으로 채우지 않음 / 근거: UX/07 5·10·11·13절; P11_Organizations useCounts; P33_Profile ago
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-12_1440_Guest | profile-event | 코드 "Pushed new tag v4.24.49 at 서울특별시 광진구 류승인 / kordoc 3f9b3c4a  / Figma ["6 시간 전"]  |
| D21 | G-12_1440_Guest | profile-event#2 | 코드 "Pushed to branch main at 서울특별시 광진구 류승인 / kordoc 3f9b3c4a ·  / Figma ["6 시간 전"]  |
| D21 | G-12_1440_Guest | profile-event#3 | 코드 "Pushed new tag v4.24.48 at 서울특별시 광진구 류승인 / kordoc 004ff792  / Figma ["12 시간 전"]  |
| D21 | G-12_1440_Guest | profile-event#4 | 코드 "Pushed to branch main at 서울특별시 광진구 류승인 / kordoc 004ff792 ·  / Figma ["12 시간 전"]  |
| D21 | G-12_360_Guest | profile-event | 코드 "Pushed new tag v4.24.49 at 서울특별시 광진구 류승인 / kordoc 3f9b3c4a  / Figma ["6 시간 전"]  |
| D21 | G-12_360_Guest | profile-event#2 | 코드 "Pushed to branch main at 서울특별시 광진구 류승인 / kordoc 3f9b3c4a ·  / Figma ["6 시간 전"]  |
| … | 나머지 6건 | | 화면별: G-12 12 |

## 위치/크기 · section-title · x (10건, M-10 12건)
- 고칠 쪽: **코드 14** (M8 판정, 당시 14건) / 정답·조치: 40 / 296 / 480 / 16 / 32 / 24 / 240 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-06_1024_Guest | section-title | x: 코드 64 / Figma 40 |
| D21 | G-06_1024_Signed-in | section-title | x: 코드 64 / Figma 40 |
| D21 | G-06_1440_Guest | section-title | x: 코드 320 / Figma 296 |
| D21 | G-06_1440_Signed-in | section-title | x: 코드 320 / Figma 296 |
| D21 | G-06_1920_Guest | section-title | x: 코드 504 / Figma 480 |
| D21 | G-06_1920_Signed-in | section-title | x: 코드 504 / Figma 480 |
| … | 나머지 4건 | | 화면별: G-06 10 |

## 위치/크기 · profile-activity · h (1건, M-10 11건)
- 고칠 쪽: **코드** (M9 판정, 당시 1건) / 정답·조치: 174 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-12_360_Guest | profile-activity | h: 코드 189 / Figma 174 |

## 위치/크기 · results · h (10건, M-10 10건)
- 고칠 쪽: **코드** (M9 판정, 당시 10건) / 정답·조치: 695 / 635 / 1057 / 711 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-01_1024_Guest | results | h: 코드 766 / Figma 703 |
| D21 | A-01_1024_Signed-in | results | h: 코드 766 / Figma 703 |
| D21 | A-01_1440_Guest | results | h: 코드 706 / Figma 643 |
| D21 | A-01_1440_Signed-in | results | h: 코드 706 / Figma 643 |
| D21 | A-01_1920_Guest | results | h: 코드 706 / Figma 643 |
| D21 | A-01_1920_Signed-in | results | h: 코드 706 / Figma 643 |
| … | 나머지 4건 | | 화면별: A-01 10 |

## 위치/크기 · task-search · h (10건, M-10 10건)
- 고칠 쪽: **코드 10** (M8 판정, 당시 10건) / 정답·조치: 248 / 284 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-01_1024_Guest | task-search | h: 코드 248 / Figma 256 |
| D21 | A-01_1024_Signed-in | task-search | h: 코드 248 / Figma 256 |
| D21 | A-01_1440_Guest | task-search | h: 코드 248 / Figma 256 |
| D21 | A-01_1440_Signed-in | task-search | h: 코드 248 / Figma 256 |
| D21 | A-01_1920_Guest | task-search | h: 코드 248 / Figma 256 |
| D21 | A-01_1920_Signed-in | task-search | h: 코드 248 / Figma 256 |
| … | 나머지 4건 | | 화면별: A-01 10 |

## 모서리·안쪽·간격 · task-search (10건, M-10 10건)
- 고칠 쪽: **코드 10** (M8 판정, 당시 10건) / 정답·조치: 안쪽 0 0 0 0→0 0 8 0 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-01_1024_Guest | task-search | 코드 null / Figma null 안쪽 0 0 8 0→0 0 0 0 |
| D21 | A-01_1024_Signed-in | task-search | 코드 null / Figma null 안쪽 0 0 8 0→0 0 0 0 |
| D21 | A-01_1440_Guest | task-search | 코드 null / Figma null 안쪽 0 0 8 0→0 0 0 0 |
| D21 | A-01_1440_Signed-in | task-search | 코드 null / Figma null 안쪽 0 0 8 0→0 0 0 0 |
| D21 | A-01_1920_Guest | task-search | 코드 null / Figma null 안쪽 0 0 8 0→0 0 0 0 |
| D21 | A-01_1920_Signed-in | task-search | 코드 null / Figma null 안쪽 0 0 8 0→0 0 0 0 |
| … | 나머지 4건 | | 화면별: A-01 10 |

## 문구 · intro-card (10건, M-10 10건)
- 고칠 쪽: **Figma 10** (M8 판정, 당시 10건) / 정답·조치: copy/ko.js,ui.js,gl.js,work.js의 현재 문구 / 사용자 원문·상대시간은 같은 자료 기준으로 재생성 / 근거: UX/07_밀도_문구_기준.md 5/10/11/13절; D-19
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | intro-card | 코드 "소개 카드 하는 일AI 정리 한글·PDF·엑셀·워드 문서를 표 구조까지 살려 마크다운으로 바꿔 주는 도구  / Figma ["HWP·PDF 문서를 Markdown으로 바꾼다", "설치 필요(Node.js, CLI)", "코드 MI  |
| D21 | A-02_1024_Signed-in | intro-card | 코드 "소개 카드 하는 일AI 정리 한글·PDF·엑셀·워드 문서를 표 구조까지 살려 마크다운으로 바꿔 주는 도구  / Figma ["HWP·PDF 문서를 Markdown으로 바꾼다", "설치 필요(Node.js, CLI)", "코드 MI  |
| D21 | A-02_1440_Guest | intro-card | 코드 "소개 카드 하는 일AI 정리 한글·PDF·엑셀·워드 문서를 표 구조까지 살려 마크다운으로 바꿔 주는 도구  / Figma ["HWP·PDF 문서를 Markdown으로 바꾼다", "설치 필요(Node.js, CLI)", "코드 MI  |
| D21 | A-02_1440_Signed-in | intro-card | 코드 "소개 카드 하는 일AI 정리 한글·PDF·엑셀·워드 문서를 표 구조까지 살려 마크다운으로 바꿔 주는 도구  / Figma ["HWP·PDF 문서를 Markdown으로 바꾼다", "설치 필요(Node.js, CLI)", "코드 MI  |
| D21 | A-02_1920_Guest | intro-card | 코드 "소개 카드 하는 일AI 정리 한글·PDF·엑셀·워드 문서를 표 구조까지 살려 마크다운으로 바꿔 주는 도구  / Figma ["HWP·PDF 문서를 Markdown으로 바꾼다", "설치 필요(Node.js, CLI)", "코드 MI  |
| D21 | A-02_1920_Signed-in | intro-card | 코드 "소개 카드 하는 일AI 정리 한글·PDF·엑셀·워드 문서를 표 구조까지 살려 마크다운으로 바꿔 주는 도구  / Figma ["HWP·PDF 문서를 Markdown으로 바꾼다", "설치 필요(Node.js, CLI)", "코드 MI  |
| … | 나머지 4건 | | 화면별: A-02 10 |

## 모서리·안쪽·간격 · intro-card (10건, M-10 10건)
- 고칠 쪽: **코드 10** (M8 판정, 당시 10건) / 정답·조치: 안쪽 0 0 0 0→12 0 0 0 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | intro-card | 코드 null / Figma null 안쪽 0 0 0 0→12 0 0 0 |
| D21 | A-02_1024_Signed-in | intro-card | 코드 null / Figma null 안쪽 0 0 0 0→12 0 0 0 |
| D21 | A-02_1440_Guest | intro-card | 코드 null / Figma null 안쪽 0 0 0 0→12 0 0 0 |
| D21 | A-02_1440_Signed-in | intro-card | 코드 null / Figma null 안쪽 0 0 0 0→12 0 0 0 |
| D21 | A-02_1920_Guest | intro-card | 코드 null / Figma null 안쪽 0 0 0 0→12 0 0 0 |
| D21 | A-02_1920_Signed-in | intro-card | 코드 null / Figma null 안쪽 0 0 0 0→12 0 0 0 |
| … | 나머지 4건 | | 화면별: A-02 10 |

## 코드에만 · repo-actions (10건, M-10 10건)
- 고칠 쪽: **Figma 10** (M8 판정, 당시 10건) / 정답·조치: 캡처에 있는 기존 기능: Figma에 코드 부품/이름표 추가 / 근거: UX/handson/gitlab/02_프로젝트홈_기본.png; UX/14_팀기능_배치.md
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | repo-actions | 코드에만 있음 |
| D21 | A-02_1024_Signed-in | repo-actions | 코드에만 있음 |
| D21 | A-02_1440_Guest | repo-actions | 코드에만 있음 |
| D21 | A-02_1440_Signed-in | repo-actions | 코드에만 있음 |
| D21 | A-02_1920_Guest | repo-actions | 코드에만 있음 |
| D21 | A-02_1920_Signed-in | repo-actions | 코드에만 있음 |
| … | 나머지 4건 | | 화면별: A-02 10 |

## 코드에만 · extra-reuse (10건, M-10 10건)
- 고칠 쪽: **Figma 10** (M8 판정, 당시 10건) / 정답·조치: UX/14 지정 자리의 기존 코드 부품 추가 / 근거: UX/14_팀기능_배치.md 1/3절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | extra-reuse | 코드에만 있음 |
| D21 | A-02_1024_Signed-in | extra-reuse | 코드에만 있음 |
| D21 | A-02_1440_Guest | extra-reuse | 코드에만 있음 |
| D21 | A-02_1440_Signed-in | extra-reuse | 코드에만 있음 |
| D21 | A-02_1920_Guest | extra-reuse | 코드에만 있음 |
| D21 | A-02_1920_Signed-in | extra-reuse | 코드에만 있음 |
| … | 나머지 4건 | | 화면별: A-02 10 |

## 색 · filter-search (10건, M-10 10건)
- 고칠 쪽: **코드** (M10 판정, 당시 10건) / 정답·조치: "#33363d color/layout/panel-border" / 근거: capture_map.md; 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-01_1024_Guest | filter-search | 코드 "#8a949e gray-40" / Figma "#33363d color/layout/panel-border"  |
| D21 | G-01_1024_Signed-in | filter-search | 코드 "#8a949e gray-40" / Figma "#33363d color/layout/panel-border"  |
| D21 | G-01_1440_Guest | filter-search | 코드 "#8a949e gray-40" / Figma "#33363d color/layout/panel-border"  |
| D21 | G-01_1440_Signed-in | filter-search | 코드 "#8a949e gray-40" / Figma "#33363d color/layout/panel-border"  |
| D21 | G-01_1920_Guest | filter-search | 코드 "#8a949e gray-40" / Figma "#33363d color/layout/panel-border"  |
| D21 | G-01_1920_Signed-in | filter-search | 코드 "#8a949e gray-40" / Figma "#33363d color/layout/panel-border"  |
| … | 나머지 4건 | | 화면별: G-01 10 |

## 위치/크기 · search-clear · x (10건, M-10 20건)
- 고칠 쪽: **코드 20** (M8 판정, 당시 20건) / 정답·조치: 883 / 1219 / 1459 / 243 / 635 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-02_1024_Guest | search-clear | x: 코드 955 / Figma 883 |
| D21 | G-02_1024_Signed-in | search-clear | x: 코드 955 / Figma 883 |
| D21 | G-02_1440_Guest | search-clear | x: 코드 1291 / Figma 1219 |
| D21 | G-02_1440_Signed-in | search-clear | x: 코드 1291 / Figma 1219 |
| D21 | G-02_1920_Guest | search-clear | x: 코드 1531 / Figma 1459 |
| D21 | G-02_1920_Signed-in | search-clear | x: 코드 1531 / Figma 1459 |
| … | 나머지 4건 | | 화면별: G-02 10 |

## Figma에만 · login-fact (10건, M-10 10건)
- 고칠 쪽: **Figma 30** (M8 판정, 당시 30건) / 정답·조치: D-12 확정: 현재 코드 안내/로고 왼쪽 열 가운데/공지·폼 배치 유지. 추가 상태의 없는 안내를 임의 삽입하지 않음 / 근거: D-12; UX/07 7절; app/scripts/audit-login-logo.mjs
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-08d_1024_Guest | login-fact | Figma에만 {"x": 541, "y": 482, "w": 400, "h": 20} |
| D21 | G-08d_1024_Signed-in | login-fact | Figma에만 {"x": 541, "y": 482, "w": 400, "h": 20} |
| D21 | G-08d_1440_Guest | login-fact | Figma에만 {"x": 749, "y": 482, "w": 400, "h": 20} |
| D21 | G-08d_1440_Signed-in | login-fact | Figma에만 {"x": 749, "y": 482, "w": 400, "h": 20} |
| D21 | G-08d_1920_Guest | login-fact | Figma에만 {"x": 989, "y": 482, "w": 400, "h": 20} |
| D21 | G-08d_1920_Signed-in | login-fact | Figma에만 {"x": 989, "y": 482, "w": 400, "h": 20} |
| … | 나머지 4건 | | 화면별: G-08d 10 |

## 코드에만 · login-field (10건, M-10 10건)
- 고칠 쪽: **코드 10** (M8 판정, 당시 10건) / 정답·조치: Figma에 없는 미지정 요소 제거 또는 기존 Figma 요소에 이름표 통합 / 근거: UX/audit_v3/capture_map.md; UX/14_팀기능_배치.md
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-08d_1024_Guest | login-field#4 | 코드에만 있음 |
| D21 | G-08d_1024_Signed-in | login-field#4 | 코드에만 있음 |
| D21 | G-08d_1440_Guest | login-field#4 | 코드에만 있음 |
| D21 | G-08d_1440_Signed-in | login-field#4 | 코드에만 있음 |
| D21 | G-08d_1920_Guest | login-field#4 | 코드에만 있음 |
| D21 | G-08d_1920_Signed-in | login-field#4 | 코드에만 있음 |
| … | 나머지 4건 | | 화면별: G-08d 10 |

## 위치/크기 · repo-actions · w (10건, M-10 10건)
- 고칠 쪽: **코드** (M9 판정, 당시 10건) / 정답·조치: 234 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | repo-actions | w: 코드 222 / Figma 234 |
| D21 | R-01_1024_Signed-in | repo-actions | w: 코드 222 / Figma 234 |
| D21 | R-01_1440_Guest | repo-actions | w: 코드 222 / Figma 234 |
| D21 | R-01_1440_Signed-in | repo-actions | w: 코드 222 / Figma 234 |
| D21 | R-01_1920_Guest | repo-actions | w: 코드 222 / Figma 234 |
| D21 | R-01_1920_Signed-in | repo-actions | w: 코드 222 / Figma 234 |
| … | 나머지 4건 | | 화면별: R-01 10 |

## 모서리·안쪽·간격 · extra-reuse (10건, M-10 10건)
- 고칠 쪽: **코드** (M9 판정, 당시 10건) / 정답·조치: 모서리 0→8 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | extra-reuse | 코드 null / Figma null 모서리 0→8 |
| D21 | R-01_1024_Signed-in | extra-reuse | 코드 null / Figma null 모서리 0→8 |
| D21 | R-01_1440_Guest | extra-reuse | 코드 null / Figma null 모서리 0→8 |
| D21 | R-01_1440_Signed-in | extra-reuse | 코드 null / Figma null 모서리 0→8 |
| D21 | R-01_1920_Guest | extra-reuse | 코드 null / Figma null 모서리 0→8 |
| D21 | R-01_1920_Signed-in | extra-reuse | 코드 null / Figma null 모서리 0→8 |
| … | 나머지 4건 | | 화면별: R-01 10 |

## 위치/크기 · steps · y (10건, M-10 10건)
- 고칠 쪽: **코드** (M9 판정, 당시 10건) / 정답·조치: 313 / 311 / 349 / 335 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-30_1024_Guest | steps | y: 코드 702 / Figma 313 |
| D21 | R-30_1024_Signed-in | steps | y: 코드 702 / Figma 313 |
| D21 | R-30_1440_Guest | steps | y: 코드 702 / Figma 313 |
| D21 | R-30_1440_Signed-in | steps | y: 코드 702 / Figma 313 |
| D21 | R-30_1920_Guest | steps | y: 코드 702 / Figma 311 |
| D21 | R-30_1920_Signed-in | steps | y: 코드 702 / Figma 313 |
| … | 나머지 4건 | | 화면별: R-30 10 |

## 위치/크기 · steps · h (10건, M-10 10건)
- 고칠 쪽: **코드** (M9 판정, 당시 10건) / 정답·조치: 558 / 580 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-30_1024_Guest | steps | h: 코드 614 / Figma 558 |
| D21 | R-30_1024_Signed-in | steps | h: 코드 614 / Figma 558 |
| D21 | R-30_1440_Guest | steps | h: 코드 614 / Figma 558 |
| D21 | R-30_1440_Signed-in | steps | h: 코드 614 / Figma 558 |
| D21 | R-30_1920_Guest | steps | h: 코드 614 / Figma 558 |
| D21 | R-30_1920_Signed-in | steps | h: 코드 614 / Figma 558 |
| … | 나머지 4건 | | 화면별: R-30 10 |

## 위치/크기 · section-title · h (7건, M-10 7건)
- 고칠 쪽: **코드 7** (M8 판정, 당시 7건) / 정답·조치: 2 / 40 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-06_1024_Guest | section-title | h: 코드 22 / Figma 2 |
| D21 | G-06_1024_Signed-in | section-title | h: 코드 22 / Figma 40 |
| D21 | G-06_1440_Guest | section-title | h: 코드 22 / Figma 2 |
| D21 | G-06_1440_Signed-in | section-title | h: 코드 22 / Figma 40 |
| D21 | G-06_1920_Guest | section-title | h: 코드 22 / Figma 2 |
| D21 | G-06_1920_Signed-in | section-title | h: 코드 22 / Figma 40 |
| … | 나머지 1건 | | 화면별: G-06 7 |

## 위치/크기 · main · y (9건, M-10 3건)
- 고칠 쪽: **측정 매핑 오류 10 / Figma 13** (M8 판정, 당시 23건) / 정답·조치: 홈 + AI 소개 카드 /projects/150?fixture=kordoc / 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 / 근거: UX/audit_v3/M8_mapping.md; D-21 7-1/7-2; D-20; UX/07 7절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-09_1440_Guest | main | y: 코드 121 / Figma 132 |
| D21 | G-09_1440_Signed-in | main | y: 코드 121 / Figma 132 |
| D21 | G-09_1920_Guest | main | y: 코드 121 / Figma 132 |
| D21 | G-09_1920_Signed-in | main | y: 코드 121 / Figma 132 |
| D21 | G-09_360_Guest | main | y: 코드 121 / Figma 132 |
| D21 | G-09_360_Signed-in | main | y: 코드 121 / Figma 132 |
| … | 나머지 3건 | | 화면별: G-09 6, G-12 3 |

## 색 · search-filter (8건, M-10 8건)
- 고칠 쪽: **코드** (M10 판정, 당시 8건) / 정답·조치: "#33363d color/layout/btn-fill-bg" / 근거: capture_map.md; 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-01_360_Guest | search-filter | 코드 "없음 " / Figma "#33363d color/layout/btn-fill-bg"  |
| D21 | A-01_360_Signed-in | search-filter | 코드 "없음 " / Figma "#33363d color/layout/btn-fill-bg"  |
| D21 | A-01_768_Guest | search-filter | 코드 "없음 " / Figma "#33363d color/layout/btn-fill-bg"  |
| D21 | A-01_768_Signed-in | search-filter | 코드 "없음 " / Figma "#33363d color/layout/btn-fill-bg"  |
| D21 | G-02_360_Guest | search-filter | 코드 "없음 " / Figma "#33363d color/layout/btn-fill-bg"  |
| D21 | G-02_360_Signed-in | search-filter | 코드 "없음 " / Figma "#33363d color/layout/btn-fill-bg"  |
| … | 나머지 2건 | | 화면별: A-01 4, G-02 4 |

## 모서리·안쪽·간격 · readme (8건, M-10 8건)
- 고칠 쪽: **코드 30** (M8 판정, 당시 30건) / 정답·조치: 모서리 0→8 / 안쪽 16 16 16 16→0 0 0 0 / 간격 12→0 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_1024_Guest | readme | 코드 null / Figma null 안쪽 12 12 14 12→12 12 16 12 |
| D21 | A-02_1024_Signed-in | readme | 코드 null / Figma null 안쪽 12 12 14 12→12 12 16 12 |
| D21 | A-02_360_Guest | readme | 코드 null / Figma null 안쪽 12 12 10 12→12 12 16 12 |
| D21 | A-02_360_Signed-in | readme | 코드 null / Figma null 안쪽 12 12 10 12→12 12 16 12 |
| D21 | R-01_1024_Guest | readme | 코드 null / Figma null 안쪽 12 12 14 12→12 12 16 12 |
| D21 | R-01_1024_Signed-in | readme | 코드 null / Figma null 안쪽 12 12 14 12→12 12 16 12 |
| … | 나머지 2건 | | 화면별: A-02 4, R-01 4 |

## 위치/크기 · commit-bar · h (4건, M-10 8건)
- 고칠 쪽: **코드 6** (M8 판정, 당시 6건) / 정답·조치: 66 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-02_360_Guest | commit-bar | h: 코드 154 / Figma 66 |
| D21 | A-02_360_Signed-in | commit-bar | h: 코드 154 / Figma 66 |
| D21 | R-01_360_Guest | commit-bar | h: 코드 154 / Figma 66 |
| D21 | R-01_360_Signed-in | commit-bar | h: 코드 154 / Figma 66 |

## 모서리·안쪽·간격 · search (8건, M-10 8건)
- 고칠 쪽: **코드** (M9 판정, 당시 30건) / 정답·조치: 모서리 4→8 / 안쪽 0 12 0 12→0 0 0 0 / 간격 8→0 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-04_1024_Guest | search | 코드 null / Figma null 안쪽 0 0 0 12→0 12 0 12 |
| D21 | G-04_1024_Signed-in | search | 코드 null / Figma null 안쪽 0 0 0 12→0 12 0 12 |
| D21 | G-04_1440_Guest | search | 코드 null / Figma null 안쪽 0 0 0 12→0 12 0 12 |
| D21 | G-04_1440_Signed-in | search | 코드 null / Figma null 안쪽 0 0 0 12→0 12 0 12 |
| D21 | G-04_1920_Guest | search | 코드 null / Figma null 안쪽 0 0 0 12→0 12 0 12 |
| D21 | G-04_1920_Signed-in | search | 코드 null / Figma null 안쪽 0 0 0 12→0 12 0 12 |
| … | 나머지 2건 | | 화면별: G-04 8 |

## 위치/크기 · repo-actions · x (8건, M-10 8건)
- 고칠 쪽: **코드** (M9 판정, 당시 8건) / 정답·조치: 430 / 830 / 1126 / 502 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | repo-actions | x: 코드 762 / Figma 430 |
| D21 | R-01_1024_Signed-in | repo-actions | x: 코드 762 / Figma 430 |
| D21 | R-01_1440_Guest | repo-actions | x: 코드 1162 / Figma 830 |
| D21 | R-01_1440_Signed-in | repo-actions | x: 코드 1162 / Figma 830 |
| D21 | R-01_1920_Guest | repo-actions | x: 코드 1458 / Figma 1126 |
| D21 | R-01_1920_Signed-in | repo-actions | x: 코드 1458 / Figma 1126 |
| … | 나머지 2건 | | 화면별: R-01 8 |

## 위치/크기 · extra-reuse · x (8건, M-10 8건)
- 고칠 쪽: **코드** (M9 판정, 당시 8건) / 정답·조치: 546 / 946 / 1242 / 132 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_1024_Guest | extra-reuse | x: 코드 866 / Figma 546 |
| D21 | R-01_1024_Signed-in | extra-reuse | x: 코드 866 / Figma 546 |
| D21 | R-01_1440_Guest | extra-reuse | x: 코드 1266 / Figma 946 |
| D21 | R-01_1440_Signed-in | extra-reuse | x: 코드 1266 / Figma 946 |
| D21 | R-01_1920_Guest | extra-reuse | x: 코드 1562 / Figma 1242 |
| D21 | R-01_1920_Signed-in | extra-reuse | x: 코드 1562 / Figma 1242 |
| … | 나머지 2건 | | 화면별: R-01 8 |

## 위치/크기 · results · x (6건, M-10 0건)
- 고칠 쪽: **신규, 판정 필요** (M-10에도 없던 원인)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-01_1024_Guest | results | x: 코드 320 / Figma 312 |
| D21 | A-01_1024_Signed-in | results | x: 코드 320 / Figma 312 |
| D21 | A-01_1440_Guest | results | x: 코드 400 / Figma 392 |
| D21 | A-01_1440_Signed-in | results | x: 코드 400 / Figma 392 |
| D21 | A-01_1920_Guest | results | x: 코드 640 / Figma 632 |
| D21 | A-01_1920_Signed-in | results | x: 코드 640 / Figma 632 |

## 위치/크기 · results · w (6건, M-10 0건)
- 고칠 쪽: **신규, 판정 필요** (M-10에도 없던 원인)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-01_1024_Guest | results | w: 코드 664 / Figma 672 |
| D21 | A-01_1024_Signed-in | results | w: 코드 664 / Figma 672 |
| D21 | A-01_1440_Guest | results | w: 코드 920 / Figma 928 |
| D21 | A-01_1440_Signed-in | results | w: 코드 920 / Figma 928 |
| D21 | A-01_1920_Guest | results | w: 코드 920 / Figma 928 |
| D21 | A-01_1920_Signed-in | results | w: 코드 920 / Figma 928 |

## 위치/크기 · task-search · x (6건, M-10 0건)
- 고칠 쪽: **신규, 판정 필요** (M-10에도 없던 원인)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-01_1024_Guest | task-search | x: 코드 320 / Figma 312 |
| D21 | A-01_1024_Signed-in | task-search | x: 코드 320 / Figma 312 |
| D21 | A-01_1440_Guest | task-search | x: 코드 400 / Figma 392 |
| D21 | A-01_1440_Signed-in | task-search | x: 코드 400 / Figma 392 |
| D21 | A-01_1920_Guest | task-search | x: 코드 640 / Figma 632 |
| D21 | A-01_1920_Signed-in | task-search | x: 코드 640 / Figma 632 |

## 위치/크기 · task-search · w (6건, M-10 0건)
- 고칠 쪽: **신규, 판정 필요** (M-10에도 없던 원인)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-01_1024_Guest | task-search | w: 코드 664 / Figma 672 |
| D21 | A-01_1024_Signed-in | task-search | w: 코드 664 / Figma 672 |
| D21 | A-01_1440_Guest | task-search | w: 코드 920 / Figma 928 |
| D21 | A-01_1440_Signed-in | task-search | w: 코드 920 / Figma 928 |
| D21 | A-01_1920_Guest | task-search | w: 코드 920 / Figma 928 |
| D21 | A-01_1920_Signed-in | task-search | w: 코드 920 / Figma 928 |

## 위치/크기 · filters · w (6건, M-10 12건)
- 고칠 쪽: **코드** (M9 판정, 당시 12건) / 정답·조치: 264 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-02_1024_Guest | filters | w: 코드 256 / Figma 264 |
| D21 | G-02_1024_Signed-in | filters | w: 코드 256 / Figma 264 |
| D21 | G-02_1440_Guest | filters | w: 코드 256 / Figma 264 |
| D21 | G-02_1440_Signed-in | filters | w: 코드 256 / Figma 264 |
| D21 | G-02_1920_Guest | filters | w: 코드 256 / Figma 264 |
| D21 | G-02_1920_Signed-in | filters | w: 코드 256 / Figma 264 |

## 위치/크기 · filters · h (6건, M-10 12건)
- 고칠 쪽: **코드** (M9 판정, 당시 12건) / 정답·조치: 358 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-02_1024_Guest | filters | h: 코드 260 / Figma 358 |
| D21 | G-02_1024_Signed-in | filters | h: 코드 260 / Figma 358 |
| D21 | G-02_1440_Guest | filters | h: 코드 260 / Figma 358 |
| D21 | G-02_1440_Signed-in | filters | h: 코드 260 / Figma 358 |
| D21 | G-02_1920_Guest | filters | h: 코드 260 / Figma 358 |
| D21 | G-02_1920_Signed-in | filters | h: 코드 260 / Figma 358 |

## 문구 · filters (6건, M-10 12건)
- 고칠 쪽: **코드** (M9 판정, 당시 12건) / 정답·조치: ["그룹","Any","Any","27"] / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-02_1024_Guest | filters | 코드 "프로젝트 3 작업 항목 머지 리퀘스트 마일스톤 사용자들 아카이빙됨 아카이빙된 항목 포함 적용" / Figma ["그룹", "Any", "Any", "27"]  |
| D21 | G-02_1024_Signed-in | filters | 코드 "프로젝트 3 작업 항목 머지 리퀘스트 마일스톤 사용자들 아카이빙됨 아카이빙된 항목 포함 적용" / Figma ["그룹", "Any", "Any", "27"]  |
| D21 | G-02_1440_Guest | filters | 코드 "프로젝트 3 작업 항목 머지 리퀘스트 마일스톤 사용자들 아카이빙됨 아카이빙된 항목 포함 적용" / Figma ["그룹", "Any", "Any", "27"]  |
| D21 | G-02_1440_Signed-in | filters | 코드 "프로젝트 3 작업 항목 머지 리퀘스트 마일스톤 사용자들 아카이빙됨 아카이빙된 항목 포함 적용" / Figma ["그룹", "Any", "Any", "27"]  |
| D21 | G-02_1920_Guest | filters | 코드 "프로젝트 3 작업 항목 머지 리퀘스트 마일스톤 사용자들 아카이빙됨 아카이빙된 항목 포함 적용" / Figma ["그룹", "Any", "Any", "27"]  |
| D21 | G-02_1920_Signed-in | filters | 코드 "프로젝트 3 작업 항목 머지 리퀘스트 마일스톤 사용자들 아카이빙됨 아카이빙된 항목 포함 적용" / Figma ["그룹", "Any", "Any", "27"]  |

## 모서리·안쪽·간격 · filters (6건, M-10 12건)
- 고칠 쪽: **코드** (M9 판정, 당시 12건) / 정답·조치: 간격 12→16 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-02_1024_Guest | filters | 코드 null / Figma null 간격 12→16 |
| D21 | G-02_1024_Signed-in | filters | 코드 null / Figma null 간격 12→16 |
| D21 | G-02_1440_Guest | filters | 코드 null / Figma null 간격 12→16 |
| D21 | G-02_1440_Signed-in | filters | 코드 null / Figma null 간격 12→16 |
| D21 | G-02_1920_Guest | filters | 코드 null / Figma null 간격 12→16 |
| D21 | G-02_1920_Signed-in | filters | 코드 null / Figma null 간격 12→16 |

## 아이콘 · filters (6건, M-10 12건)
- 고칠 쪽: **코드** (M9 판정, 당시 12건) / 정답·조치: ["arrow-down","folder","fork","issues","merge-request","tag"] / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-02_1024_Guest | filters | 코드 ["calendar", "issues", "merge-request", "project", "users"] / Figma ["arrow-down", "folder", "fork", "issues", "merge-request",   |
| D21 | G-02_1024_Signed-in | filters | 코드 ["calendar", "issues", "merge-request", "project", "users"] / Figma ["arrow-down", "folder", "fork", "issues", "merge-request",   |
| D21 | G-02_1440_Guest | filters | 코드 ["calendar", "issues", "merge-request", "project", "users"] / Figma ["arrow-down", "folder", "fork", "issues", "merge-request",   |
| D21 | G-02_1440_Signed-in | filters | 코드 ["calendar", "issues", "merge-request", "project", "users"] / Figma ["arrow-down", "folder", "fork", "issues", "merge-request",   |
| D21 | G-02_1920_Guest | filters | 코드 ["calendar", "issues", "merge-request", "project", "users"] / Figma ["arrow-down", "folder", "fork", "issues", "merge-request",   |
| D21 | G-02_1920_Signed-in | filters | 코드 ["calendar", "issues", "merge-request", "project", "users"] / Figma ["arrow-down", "folder", "fork", "issues", "merge-request",   |

## 위치/크기 · group-row · y (6건, M-10 6건)
- 고칠 쪽: **코드** (M9 판정, 당시 38건) / 정답·조치: 339 / 408 / 477 / 546 / 353 / 458 / 563 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-04_360_Guest | group-row | y: 코드 386 / Figma 346 |
| D21 | G-04_360_Guest | group-row#2 | y: 코드 491 / Figma 451 |
| D21 | G-04_360_Guest | group-row#3 | y: 코드 596 / Figma 556 |
| D21 | G-04_360_Signed-in | group-row | y: 코드 386 / Figma 346 |
| D21 | G-04_360_Signed-in | group-row#2 | y: 코드 491 / Figma 451 |
| D21 | G-04_360_Signed-in | group-row#3 | y: 코드 596 / Figma 556 |

## 위치/크기 · body · y (6건, M-10 0건)
- 고칠 쪽: **Figma 10** (M8 판정, 당시 10건) / 정답·조치: 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 / 근거: D-21 7-1/7-2; D-20; UX/07 7절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-09_1440_Guest | body | y: 코드 72 / Figma 83 |
| D21 | G-09_1440_Signed-in | body | y: 코드 72 / Figma 83 |
| D21 | G-09_1920_Guest | body | y: 코드 72 / Figma 83 |
| D21 | G-09_1920_Signed-in | body | y: 코드 72 / Figma 83 |
| D21 | G-09_360_Guest | body | y: 코드 72 / Figma 83 |
| D21 | G-09_360_Signed-in | body | y: 코드 72 / Figma 83 |

## 위치/크기 · content-panel · y (6건, M-10 0건)
- 고칠 쪽: **측정 매핑 오류** (M9 판정, 당시 8건) / 정답·조치: /projects/150/feedback으로 재측정. 의견 폼 Figma 재작성 뒤 대조 / 근거: 사용자 M-9 지시; UX/05; PRD; code_plan/figma_name_map.json
- 고칠 쪽: **Figma** (M9 판정, 당시 15건) / 정답·조치: D-21 공통 틀의 현재 코드 y. main 이름표 변경 금지 / 근거: D-21; UX/gitlab_compare/v2/measure.md; capture_map.md
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-09_1440_Guest | content-panel | y: 코드 72 / Figma 83 |
| D21 | G-09_1440_Signed-in | content-panel | y: 코드 72 / Figma 83 |
| D21 | G-09_1920_Guest | content-panel | y: 코드 72 / Figma 83 |
| D21 | G-09_1920_Signed-in | content-panel | y: 코드 72 / Figma 83 |
| D21 | G-09_360_Guest | content-panel | y: 코드 72 / Figma 83 |
| D21 | G-09_360_Signed-in | content-panel | y: 코드 72 / Figma 83 |

## 위치/크기 · breadcrumb · y (6건, M-10 0건)
- 고칠 쪽: **측정 매핑 오류** (M9 판정, 당시 8건) / 정답·조치: /projects/150/feedback으로 재측정. 의견 폼 Figma 재작성 뒤 대조 / 근거: 사용자 M-9 지시; UX/05; PRD; code_plan/figma_name_map.json
- 고칠 쪽: **Figma** (M9 판정, 당시 15건) / 정답·조치: D-21 공통 틀의 현재 코드 y. main 이름표 변경 금지 / 근거: D-21; UX/gitlab_compare/v2/measure.md; capture_map.md
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-09_1440_Guest | breadcrumb | y: 코드 81 / Figma 92 |
| D21 | G-09_1440_Signed-in | breadcrumb | y: 코드 81 / Figma 92 |
| D21 | G-09_1920_Guest | breadcrumb | y: 코드 81 / Figma 92 |
| D21 | G-09_1920_Signed-in | breadcrumb | y: 코드 81 / Figma 92 |
| D21 | G-09_360_Guest | breadcrumb | y: 코드 81 / Figma 92 |
| D21 | G-09_360_Signed-in | breadcrumb | y: 코드 81 / Figma 92 |

## 위치/크기 · page-head · y (6건, M-10 0건)
- 고칠 쪽: **코드** (M9 판정, 당시 5건) / 정답·조치: 154 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-09_1440_Guest | page-head | y: 코드 121 / Figma 132 |
| D21 | G-09_1440_Signed-in | page-head | y: 코드 121 / Figma 132 |
| D21 | G-09_1920_Guest | page-head | y: 코드 121 / Figma 132 |
| D21 | G-09_1920_Signed-in | page-head | y: 코드 121 / Figma 132 |
| D21 | G-09_360_Guest | page-head | y: 코드 121 / Figma 132 |
| D21 | G-09_360_Signed-in | page-head | y: 코드 121 / Figma 132 |

## 코드에만 · checks (5건, M-10 5건)
- 고칠 쪽: **Figma 5** (M8 판정, 당시 5건) / 정답·조치: UX/14 지정 자리의 기존 코드 부품 추가 / 근거: UX/14_팀기능_배치.md 1/3절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-03_1024_Guest | checks | 코드에만 있음 |
| D21 | A-03_1440_Guest | checks | 코드에만 있음 |
| D21 | A-03_1920_Guest | checks | 코드에만 있음 |
| D21 | A-03_360_Guest | checks | 코드에만 있음 |
| D21 | A-03_768_Guest | checks | 코드에만 있음 |

## 위치/크기 · checks · y (5건, M-10 5건)
- 고칠 쪽: **코드 5** (M8 판정, 당시 5건) / 정답·조치: 277 / 313 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-03_1024_Signed-in | checks | y: 코드 221 / Figma 169 |
| D21 | A-03_1440_Signed-in | checks | y: 코드 221 / Figma 169 |
| D21 | A-03_1920_Signed-in | checks | y: 코드 221 / Figma 169 |
| D21 | A-03_360_Signed-in | checks | y: 코드 213 / Figma 161 |
| D21 | A-03_768_Signed-in | checks | y: 코드 221 / Figma 169 |

## Figma에만 · project-row (5건, M-10 5건)
- 고칠 쪽: **사용자 확인 5** (M8 판정, 당시 5건) / 정답·조치: 로그인 내 작업 목록의 실제 데이터와 캡처1건 필요 / 근거: UX/audit_v3/parity_ledger.md pending
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-06_1024_Signed-in | project-row | Figma에만 {"x": 41, "y": 266, "w": 942, "h": 97} |
| D21 | G-06_1440_Signed-in | project-row | Figma에만 {"x": 297, "y": 266, "w": 1086, "h": 97} |
| D21 | G-06_1920_Signed-in | project-row | Figma에만 {"x": 481, "y": 266, "w": 1198, "h": 97} |
| D21 | G-06_360_Signed-in | project-row | Figma에만 {"x": 17, "y": 288, "w": 326, "h": 97} |
| D21 | G-06_768_Signed-in | project-row | Figma에만 {"x": 33, "y": 266, "w": 702, "h": 97} |

## 색 · topbar (5건, M-10 0건)
- 고칠 쪽: **신규, 판정 필요** (M-10에도 없던 원인)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-12_1440_Guest | topbar | 코드 "#000000 gray-100" / Figma "#f4f5f6 color/layout/shell-bg"  |
| D21 | G-12_360_Guest | topbar | 코드 "#f4f5f6 gray-5" / Figma "#1e2124 color/text/basic"  |
| D21 | G-12_360_Guest | topbar | 코드 "#000000 gray-100" / Figma "#f4f5f6 color/layout/shell-bg"  |
| D21 | G-12_768_Guest | topbar | 코드 "#f4f5f6 gray-5" / Figma "#1e2124 color/text/basic"  |
| D21 | G-12_768_Guest | topbar | 코드 "#000000 gray-100" / Figma "#f4f5f6 color/layout/shell-bg"  |

## 위치/크기 · footer · x (2건, M-10 4건)
- 고칠 쪽: **Figma 12** (M8 판정, 당시 12건) / 정답·조치: 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 / 근거: D-21 7-1/7-2; D-20; UX/07 7절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-03_1440_Guest | footer | x: 코드 296 / Figma 272 |
| D21 | G-03_1440_Signed-in | footer | x: 코드 296 / Figma 272 |

## 위치/크기 · footer · w (2건, M-10 4건)
- 고칠 쪽: **Figma 12** (M8 판정, 당시 12건) / 정답·조치: 공통 틀 D-21:바깥8/안쪽48·32·24·16/최대1200,현재 코드 측정값. 로그인은 확정2열 배치 유지 / 근거: D-21 7-1/7-2; D-20; UX/07 7절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-03_1440_Guest | footer | w: 코드 1088 / Figma 1136 |
| D21 | G-03_1440_Signed-in | footer | w: 코드 1088 / Figma 1136 |

## 코드에만 · global-search (4건, M-10 0건)
- 고칠 쪽: **신규, 판정 필요** (M-10에도 없던 원인)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-04_360_Guest | global-search | 코드에만 있음 |
| D21 | G-04_360_Signed-in | global-search | 코드에만 있음 |
| D21 | G-04_768_Guest | global-search | 코드에만 있음 |
| D21 | G-04_768_Signed-in | global-search | 코드에만 있음 |

## 글자 속성 · section-title (4건, M-10 4건)
- 고칠 쪽: **Figma 4** (M8 판정, 당시 4건) / 정답·조치: D-16 KRDS 글자 단계와 짝수 행간. 현재 코드 글자 토큰 / 근거: D-16; UX/07 4절
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-06_1024_Signed-in | section-title | 코드 null / Figma null 굵기 400→700 |
| D21 | G-06_1440_Signed-in | section-title | 코드 null / Figma null 굵기 400→700 |
| D21 | G-06_1920_Signed-in | section-title | 코드 null / Figma null 굵기 400→700 |
| D21 | G-06_768_Signed-in | section-title | 코드 null / Figma null 굵기 400→700 |

## 색 · section-title (4건, M-10 4건)
- 고칠 쪽: **Figma** (M10 판정, 당시 4건) / 정답·조치: "--krds-color-text-basic" / 근거: D-15; v2/measure.md 제목 글자
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-06_1024_Signed-in | section-title | 코드 "#f4f5f6 gray-5" / Figma "#ffffff color/text/inverse-static"  |
| D21 | G-06_1440_Signed-in | section-title | 코드 "#f4f5f6 gray-5" / Figma "#ffffff color/text/inverse-static"  |
| D21 | G-06_1920_Signed-in | section-title | 코드 "#f4f5f6 gray-5" / Figma "#ffffff color/text/inverse-static"  |
| D21 | G-06_768_Signed-in | section-title | 코드 "#f4f5f6 gray-5" / Figma "#ffffff color/text/inverse-static"  |

## 위치/크기 · gitlab-sidebar · y (4건, M-10 0건)
- 고칠 쪽: **측정 매핑 오류** (M9 판정, 당시 4건) / 정답·조치: /projects/150/feedback으로 재측정. 의견 폼 Figma 재작성 뒤 대조 / 근거: 사용자 M-9 지시; UX/05; PRD; code_plan/figma_name_map.json
- 고칠 쪽: **Figma** (M9 판정, 당시 6건) / 정답·조치: D-21 공통 틀의 현재 코드 y. main 이름표 변경 금지 / 근거: D-21; UX/gitlab_compare/v2/measure.md; capture_map.md
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-09_1440_Guest | gitlab-sidebar | y: 코드 72 / Figma 83 |
| D21 | G-09_1440_Signed-in | gitlab-sidebar | y: 코드 72 / Figma 83 |
| D21 | G-09_1920_Guest | gitlab-sidebar | y: 코드 72 / Figma 83 |
| D21 | G-09_1920_Signed-in | gitlab-sidebar | y: 코드 72 / Figma 83 |

## 위치/크기 · sidebar-nav · y (4건, M-10 0건)
- 고칠 쪽: **측정 매핑 오류 4** (M8 판정, 당시 4건) / 정답·조치: 홈 + AI 소개 카드 /projects/150?fixture=kordoc / 근거: UX/audit_v3/M8_mapping.md
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-09_1440_Guest | sidebar-nav | y: 코드 118 / Figma 129 |
| D21 | G-09_1440_Signed-in | sidebar-nav | y: 코드 118 / Figma 129 |
| D21 | G-09_1920_Guest | sidebar-nav | y: 코드 118 / Figma 129 |
| D21 | G-09_1920_Signed-in | sidebar-nav | y: 코드 118 / Figma 129 |

## 색 · body (3건, M-10 0건)
- 고칠 쪽: **Figma** (M9 판정, 당시 10건) / 정답·조치: D-21 공통 shell/panel/text 토큰. 설정 화면만 별도 색을 만들지 않음 / 근거: D-21; UX/gitlab_compare/v2/measure.md 색 층
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-12_1440_Guest | body | 코드 "#000000 gray-100" / Figma "#f4f5f6 color/layout/shell-bg"  |
| D21 | G-12_360_Guest | body | 코드 "#000000 gray-100" / Figma "#f4f5f6 color/layout/shell-bg"  |
| D21 | G-12_768_Guest | body | 코드 "#000000 gray-100" / Figma "#f4f5f6 color/layout/shell-bg"  |

## 색 · content-panel (3건, M-10 0건)
- 고칠 쪽: **Figma** (M9 판정, 당시 10건) / 정답·조치: D-21 공통 shell/panel/text 토큰. 설정 화면만 별도 색을 만들지 않음 / 근거: D-21; UX/gitlab_compare/v2/measure.md 색 층
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-12_1440_Guest | content-panel | 코드 "#131416 gray-95" / Figma "#ffffff color/layout/panel-bg"  |
| D21 | G-12_360_Guest | content-panel | 코드 "#131416 gray-95" / Figma "#ffffff color/layout/panel-bg"  |
| D21 | G-12_768_Guest | content-panel | 코드 "#131416 gray-95" / Figma "#ffffff color/layout/panel-bg"  |

## 색 · breadcrumb (3건, M-10 0건)
- 고칠 쪽: **Figma** (M9 판정, 당시 10건) / 정답·조치: D-21 공통 shell/panel/text 토큰. 설정 화면만 별도 색을 만들지 않음 / 근거: D-21; UX/gitlab_compare/v2/measure.md 색 층
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-12_1440_Guest | breadcrumb | 코드 "#f4f5f6 gray-5" / Figma "#1e2124 color/text/basic"  |
| D21 | G-12_360_Guest | breadcrumb | 코드 "#f4f5f6 gray-5" / Figma "#1e2124 color/text/basic"  |
| D21 | G-12_768_Guest | breadcrumb | 코드 "#f4f5f6 gray-5" / Figma "#1e2124 color/text/basic"  |

## 색 · footer (3건, M-10 0건)
- 고칠 쪽: **Figma** (M9 판정, 당시 10건) / 정답·조치: D-21 공통 shell/panel/text 토큰. 설정 화면만 별도 색을 만들지 않음 / 근거: D-21; UX/gitlab_compare/v2/measure.md 색 층
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-12_1440_Guest | footer | 코드 "#33363d gray-80" / Figma "#cdd1d5 color/layout/panel-border"  |
| D21 | G-12_360_Guest | footer | 코드 "#33363d gray-80" / Figma "#cdd1d5 color/layout/panel-border"  |
| D21 | G-12_768_Guest | footer | 코드 "#33363d gray-80" / Figma "#cdd1d5 color/layout/panel-border"  |

## 코드에만 · activity-calendar (3건, M-10 3건)
- 고칠 쪽: **Figma 1** (M8 판정, 당시 1건) / 정답·조치: 새 프로필은 실제 자료 길이에 맞춘 기존 코드 구조;1440/768/360 상태 이름표 동기화 / 근거: code_plan/measured_G-12_codeonly.json; UX/handson/gitlab/48_그룹_사용자페이지.png
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-12_1440_Guest | activity-calendar | 코드에만 있음 |
| D21 | G-12_360_Guest | activity-calendar | 코드에만 있음 |
| D21 | G-12_768_Guest | activity-calendar | 코드에만 있음 |

## 위치/크기 · extra-field-filter · w (2건, M-10 2건)
- 고칠 쪽: **코드** (M9 판정, 당시 10건) / 정답·조치: 107 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-01_360_Guest | extra-field-filter | w: 코드 102 / Figma 107 |
| D21 | G-01_360_Signed-in | extra-field-filter | w: 코드 102 / Figma 107 |

## 모서리·안쪽·간격 · filter-search (2건, M-10 10건)
- 고칠 쪽: **코드** (M9 판정, 당시 20건) / 정답·조치: 안쪽 0 0 0 0→0 4 0 4 / 안쪽 0 0 0 0→0 8 0 8 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-01_360_Guest | filter-search | 코드 null / Figma null 안쪽 0 0 0 0→0 4 0 4 |
| D21 | G-01_360_Signed-in | filter-search | 코드 null / Figma null 안쪽 0 0 0 0→0 4 0 4 |

## 위치/크기 · gl-filter · h (2건, M-10 4건)
- 고칠 쪽: **코드 16** (M8 판정, 당시 16건) / 정답·조치: 159 / 73 / 119 / 65 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-04_360_Guest | gl-filter | h: 코드 105 / Figma 65 |
| D21 | G-04_360_Signed-in | gl-filter | h: 코드 105 / Figma 65 |

## 위치/크기 · search · w (2건, M-10 2건)
- 고칠 쪽: **코드** (M9 판정, 당시 10건) / 정답·조치: 799 / 943 / 1055 / 183 / 559 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-04_360_Guest | search | w: 코드 296 / Figma 183 |
| D21 | G-04_360_Signed-in | search | w: 코드 296 / Figma 183 |

## 색 · search (2건, M-10 8건)
- 고칠 쪽: **코드** (M10 판정, 당시 8건) / 정답·조치: "#f4f5f6 color/text/basic" / 근거: capture_map.md; 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-04_360_Guest | search | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  |
| D21 | G-04_360_Signed-in | search | 코드 "#f4f5f6 gray-5" / Figma "#cdd1d5 color/text/subtle"  |

## 색 · global-search (2건, M-10 0건)
- 고칠 쪽: **신규, 판정 필요** (M-10에도 없던 원인)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-12_1440_Guest | global-search | 코드 "#131416 gray-95" / Figma "#ffffff color/background/white"  |
| D21 | G-12_1440_Guest | global-search | 코드 "#33363d gray-80" / Figma "#cdd1d5 color/border/gray-light"  |

## 위치/크기 · repo-actions · y (2건, M-10 2건)
- 고칠 쪽: **코드** (M9 판정, 당시 2건) / 정답·조치: 177 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_360_Guest | repo-actions | y: 코드 181 / Figma 177 |
| D21 | R-01_360_Signed-in | repo-actions | y: 코드 181 / Figma 177 |

## 위치/크기 · extra-reuse · y (2건, M-10 2건)
- 고칠 쪽: **코드** (M9 판정, 당시 2건) / 정답·조치: 177 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_360_Guest | extra-reuse | y: 코드 181 / Figma 177 |
| D21 | R-01_360_Signed-in | extra-reuse | y: 코드 181 / Figma 177 |

## 위치/크기 · extra-reuse · w (2건, M-10 2건)
- 고칠 쪽: **코드** (M9 판정, 당시 2건) / 정답·조치: 82 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | R-01_360_Guest | extra-reuse | w: 코드 188 / Figma 82 |
| D21 | R-01_360_Signed-in | extra-reuse | w: 코드 188 / Figma 82 |

## 위치/크기 · checks · h (1건, M-10 1건)
- 고칠 쪽: **코드 5** (M8 판정, 당시 5건) / 정답·조치: 589 / 1245 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-03_360_Signed-in | checks | h: 코드 508 / Figma 540 |

## 모서리·안쪽·간격 · checks (1건, M-10 1건)
- 고칠 쪽: **코드 5** (M8 판정, 당시 5건) / 정답·조치: 간격 0→20 / 간격 0→12 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md(정량 실측 없는 속성은 Figma)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | A-03_360_Signed-in | checks | 코드 null / Figma null 간격 20→12 |

## 색 · gitlab-sidebar (1건, M-10 0건)
- 고칠 쪽: **신규, 판정 필요** (M-10에도 없던 원인)
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-12_1440_Guest | gitlab-sidebar | 코드 "#000000 gray-100" / Figma "#f4f5f6 color/layout/shell-bg"  |

## 위치/크기 · profile-event · h (1건, M-10 1건)
- 고칠 쪽: **코드** (M9 판정, 당시 1건) / 정답·조치: 144 / 근거: code_plan/figma_full.json; UX/audit_v3/capture_map.md: 직접 정량 실측 없는 세부 속성은 Figma. D-xx 우선
| 담당 | 화면_폭_인증 | 요소 | 코드값 / Figma값 |
|---|---|---|---|
| D21 | G-12_360_Guest | profile-event#19 | h: 코드 122 / Figma 144 |
