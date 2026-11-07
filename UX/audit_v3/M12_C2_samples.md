# M12 C2 정체 원인 표본 20행

M12_owner_C.md의 C2 행에서 원인 묶음마다 첫 행을 뽑았다. 동일 인증/폭 반복20개가 아니라20개 원인 묶음 표본이다. 원장 값은 M12가 기록한6d45848 기준이다.

## 정체 원인

M12 측정 선언: `코드 6d45848, 개발 서버5994`. 이후 c3a2136은 RepoParts/Code CSS/P16 도구 줄 메뉴만 바꿨다. C2 화면별 코드는 그대로였다. 따라서 C2 279가 유지된 주원인은 **아직 C2 수정을 하지 않았기 때문**이다. D21 반영 후보260을 C2 해소로 해석한 것이 잘못이었다.

표본에서 이미 수정했는데 측정 이름표 때문에 남았다고 확인된 행은0이다. 아래 Figma 담당 행도 C2 소유 화면에서 검출된 차이일 뿐 코드 수정 책임은 아니다. 소유자별279는 코드 미수정279라는 뜻이 아니다.

|#|원인|프레임|요소|M12 코드/Figma|판정|근거|
|---|---|---|---|---|---|---|
|1|위치/크기 · filter-search · x (32건, M-11 34건)|R-11_1024_Guest|filter-search|x: 코드 855 / Figma 867|미수정|6d45848 이후 이 C2 구성/간격을 수정한 커밋이 없다. 현재 값은 M12와 같은 구현이다.|
|2|위치/크기 · page-head · h (8건, M-11 25건)|R-10_360_Guest|page-head|h: 코드 84 / Figma 76|미수정|6d45848 이후 이 C2 구성/간격을 수정한 커밋이 없다. 현재 값은 M12와 같은 구현이다.|
|3|위치/크기 · sidebar-nav · h (20건, M-11 24건)|R-10_1440_Guest|sidebar-nav|h: 코드 720 / Figma 625|Figma 담당|M12 원문 자체가 Figma 20으로 판정한다. UX/17의 항목 수/Hug 높이720을 고정625로 자르지 않는다.|
|4|위치/크기 · filter-search · y (22건, M-11 22건)|R-16_360_Guest|filter-search|y: 코드 234 / Figma 187|미수정|6d45848 이후 이 C2 구성/간격을 수정한 커밋이 없다. 현재 값은 M12와 같은 구현이다.|
|5|위치/크기 · gl-tabs · w (10건, M-11 30건)|R-14_1024_Guest|gl-tabs|w: 코드 641 / Figma 309|미수정|6d45848 이후 이 C2 구성/간격을 수정한 커밋이 없다. 현재 값은 M12와 같은 구현이다.|
|6|위치/크기 · tabs · y (15건, M-11 17건)|R-17_1024_Guest|tabs|y: 코드 231 / Figma 221|미수정|6d45848 이후 이 C2 구성/간격을 수정한 커밋이 없다. 현재 값은 M12와 같은 구현이다.|
|7|모서리·안쪽·간격 · profile-activity (10건, M-11 13건)|R-17_1024_Guest|profile-activity|코드 null / Figma null 간격 8→0|미수정|6d45848 이후 이 C2 구성/간격을 수정한 커밋이 없다. 현재 값은 M12와 같은 구현이다.|
|8|위치/크기 · section-title · x (1건, M-11 11건)|R-26_1024_Signed-in|section-title|x: 코드 40 / Figma 280|Figma 담당|R26 1024만 사이드바240을 남긴 Figma 변형이다. 같은 폭 다른 프로젝트 화면과 app/prefs의1280 메뉴 전환 및 D21 판 안 여백을 따른 코드x40 유지. Figma280을40으로.|
|9|위치/크기 · profile-activity · h (10건, M-11 11건)|R-17_1024_Guest|profile-activity|h: 코드 142 / Figma 96|미수정|6d45848 이후 이 C2 구성/간격을 수정한 커밋이 없다. 현재 값은 M12와 같은 구현이다.|
|10|색 · filter-clear (10건, M-11 10건)|R-11_1024_Guest|filter-clear|코드 "null " / Figma "#33363d color/layout/panel-border"|미수정|6d45848 이후 이 C2 구성/간격을 수정한 커밋이 없다. 현재 값은 M12와 같은 구현이다.|
|11|Figma에만 · profile-activity (10건, M-11 10건)|R-12_1024_Guest|profile-activity|Figma에만 {"x": 40, "y": 557, "w": 944, "h": 144}|미수정|6d45848 이후 이 C2 구성/간격을 수정한 커밋이 없다. 현재 값은 M12와 같은 구현이다.|
|12|코드에만 · filter-search (10건, M-11 10건)|R-14_1024_Guest|filter-search|코드에만 있음|미수정|6d45848 이후 이 C2 구성/간격을 수정한 커밋이 없다. 현재 값은 M12와 같은 구현이다.|
|13|위치/크기 · code-button · x (10건, M-11 10건)|R-17_1024_Guest|code-button|x: 코드 920 / Figma 922|미수정|6d45848 이후 이 C2 구성/간격을 수정한 커밋이 없다. 현재 값은 M12와 같은 구현이다.|
|14|위치/크기 · code-button · w (10건, M-11 10건)|R-17_1024_Guest|code-button|w: 코드 64 / Figma 62|미수정|6d45848 이후 이 C2 구성/간격을 수정한 커밋이 없다. 현재 값은 M12와 같은 구현이다.|
|15|문구 · profile-activity (10건, M-11 10건)|R-17_1024_Guest|profile-activity|코드 "활동 모든 활동 오래된 순 서울특별시 광진구 류승인 closed 3 개월 전 회신하려면 등록 또는 로그인  / Figma ["서울특별시 광진구 류승인이 변경사항 1개 커밋을 추가함 · 3개월 전", "서울특별시 광진구 류승인이 머|Figma 담당|M12 문구 판정은 현재 copy 및 같은 API 자료가 기준이다. MR 활동 원문을 가공해 Figma 견본 문장으로 만들지 않는다.|
|16|위치/크기 · filter-clear · x (8건, M-11 8건)|R-11_1024_Guest|filter-clear|x: 코드 823 / Figma 835|미수정|6d45848 이후 이 C2 구성/간격을 수정한 커밋이 없다. 현재 값은 M12와 같은 구현이다.|
|17|아이콘 · gitlab-sidebar (8건, M-11 8건)|R-26_1440_Guest|gitlab-sidebar|코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou|미수정|6d45848 이후 이 C2 구성/간격을 수정한 커밋이 없다. 현재 값은 M12와 같은 구현이다.|
|18|아이콘 · sidebar-nav (8건, M-11 8건)|R-26_1440_Guest|sidebar-nav|코드 ["analytics", "arrow-down", "arrow-right", "calendar", "clou / Figma ["analytics", "arrow-down", "arrow-right", "calendar", "clou|미수정|6d45848 이후 이 C2 구성/간격을 수정한 커밋이 없다. 현재 값은 M12와 같은 구현이다.|
|19|위치/크기 · profile-activity · w (6건, M-11 6건)|R-17_1024_Guest|profile-activity|w: 코드 624 / Figma 944|미수정|6d45848 이후 이 C2 구성/간격을 수정한 커밋이 없다. 현재 값은 M12와 같은 구현이다.|
|20|Figma에만 · comment-editor (5건, M-11 5건)|R-12_1024_Signed-in|comment-editor|Figma에만 {"x": 40, "y": 717, "w": 944, "h": 122}|미수정|6d45848 이후 이 C2 구성/간격을 수정한 커밋이 없다. 현재 값은 M12와 같은 구현이다.|

표본 집계: {"미수정":17,"Figma 담당":3}。 이 비율을279 전체로 외삽하지 않는다.
