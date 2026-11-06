# M-8 실행 기록

## 설명 원문 절단

- API `https://gitlab.aigov.go.kr/api/v4/projects/903`, `/1140`을1.1초 간격으로 직접 읽었다. 스냅샷과 설명 원문이 같다. 스냅샷 갱신은 필요하지 않다.
- 전: `.split(/\r?\n/)[0]`로 두 번째 문장 이후를 버렸다.
- 후: 줄바꿈을 공백으로 연결해 원문 전체를 보존한다. 영어 병기 정리와 앞 분류 표기 제거는 기존 규칙을 유지한다. 2줄 말줄임은 CSS에서만 처리한다.
- 1440 안정 상자: Watson 높이71→91. HWP99→99(문구는 전체 복원). 360: Watson139→139, HWP225→245. 미해소 크기를 강제로 맞추지 않았다.
- 전후 JSON: 세션tmp M8-description-before.json / M8-description-after.json. after1440은 폭 전환 과도 상태이므로 M8-description-1440-stable.json이 최종 증거다.
- 캡처: M8-description-1440-stable.png / M8-description-after-360.png.

## 상태 탭 공통화

- 프로젝트/그룹에 복제된 KRDS 탭을 components/Navigation/ProjectStateTabs.jsx 한 곳으로 묶었다. 기능·마크업·CSS 배치 유지, data-figma만 tabs로 일치시켰다.
- 프로젝트1440 탭 상자는 x296/y173/w1073/h48로 기존과 같다. 그룹1440 x296/y211/w1073/h48. 360은 각각 x16/y165/w313/h48, x16/y225/w313/h48.
- 기존 검색 버튼/검색 폼에 filter-search/search 이름표를 연결했다. 새 UI를 추가하지 않았다. 측정 매핑은 code_plan/figma_name_map.json에 기록했다.
- 두 화면 두 폭 가로 넘침0, 탭 수2, 검색 이름표1.

## 회귀

- description 5개 단위 검사 PASS.
- audit:code PASS(문구, 사이드바, 로그인 로고 포함).
- login-inspect: bad=[], cyDiff0. 로그인 코드 변경 없음.
- D-xx, 토큰 기준, 판정/허용 규칙 변경 없음.
- 후보 수와 재측정 해소 수는 구분한다. 코드108개 후보에 공통 원인을 반영했고 매핑156개는 기존 경로/이름표 수정 상태다. 전체 원장 재측정 전이다.
