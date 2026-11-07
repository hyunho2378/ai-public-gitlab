# M-10 실행

## 판정

신규157 + 요청 재확인104 =261행 판정. 코드112/Figma141/매핑8. sidebar-nav40은 UX/17의224−실제막대11=213으로 코드 유지. project-row y64는 G-01 36(Figma, 필터→첫행 실측8)과 A-01 28(코드, 업무 검색 상위 간격)로 분리했다. 원문/근거는 M10_decisions.md와 행별JSON.

## 변경 전후

- 전 repo.css `.rb-taskfind { … padding-bottom: var(--rb-filter-gap); … }`, results gap8, compact 모바일 row-gap2였다. 후 아래 안쪽0/results gap12/compact 행 사이0. Figma 업무 검색248/284를 근거로 공통 부품에서 수정했다.1440 taskfind h256→248,360 h298→284.360 간단 행 h71→69, y243/322/401→243/320/397.1440 첫 일반 결과 y441→437,360 y519→509(상위 상자와 간격에서 계산, 전체 원장 재측정 대기).
- 전 `.rb-x-search { … order:3 }` 때문에 모바일 탐색 필터3줄145였다. 후 공통 rb-x-filter grid에서 입력 먼저/정렬 다음. 업무 분야가 있어도2줄105. 근거는 v3 README의 실제 모바일 입력/정렬 순서.360 탐색 search y310→230, 업무 분야230→270, sort270→270. 그룹 search330→290, sort290→330.1440 필터65와 모든 가로 상자는 유지.
- 전 ProjectStateTabs 내부136.898/gap8. 후 두 칸 min-width80/gap0.1440·360 모두160/h48. G-01 Figma160/gap0 기준이며 G-04에도 같은 부품을 적용했다. G-04 Figma 바깥 FILL 이름은 Figma 쪽에 전달했다.
- 전 언어 막대 반경4/gap2. 후 반경0/gap4(최신 Figma와 D-16, 간격2는 선 두께 예외가 아님).8 높이와296/328 폭은 유지. 비율 글자는 막대 안이 아닌 기존 범례에 있으므로 Figma text20은 범례 이름을 분리해야 한다.
- R-25 기존 두 h2에 section-title 이름표를 연결했다. 상자/글자/기능 변화 없음.1440 y576/713,360 y590/749가 전후 같다. Figma520/955와 남은 위치 차이를 고정 높이로 숨기지 않았다.

## 회귀와 상태

- 5경로×1440/360 스크롤바0 조건 전후 측정. 가로 넘침0. 세션tmp M10-before.json / M10-after.json, M10-taskfind-360.png.
- audit:code PASS. build PASS(기존 큰 청크 경고). 로그인1440 bad=[]/cyDiff0,360 bad=[]/cyDiff415.8로 기존과 같다. M10-login.json.
- 로그인·main 이름표·D-xx·검사/허용 규칙·main 브랜치·배포 변경 없음. 작업 탭 닫음.
- 현재 원장 상태는 M10_code_queue.md를 본다. 공통 수정 후보160행이며 아직 공식 해소160으로 주장하지 않는다. 전체 코드 큐는 미완료다. 이전 M8/M9 큐를 현재 미수정 수에 다시 더하지 않는다.
- 200건 판정 경과 부모 알림 발송. 코드 커밋1a4cdb9,396c2b8; 판정7d7cb0c와 후속 기록.
