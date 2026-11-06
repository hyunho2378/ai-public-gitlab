# C1/C2 국소 처리 기록

| 원인 | 원문 코드 → Figma | 변경 / 판정 | 후보 수 |
|---|---|---|---:|
| R-02 commit-bar padding/gap | 8/12/8/12, 8 → 원본12/12/12/12,12 | 코드 padding12 gap12. 1440 높이58→66, 360 138→154. 모바일 높이66 강제 금지 | 20 |
| R-05 page-head padding/gap | 0/0/8/0,16 → 원본8/0/8/0,12 | 코드 padding8/0/8/0 gap12. 내부 버튼40→32. 1440 높이49 유지, 360 119→123 | 20 |
| R-04 gl-filter y | 1440 229→213, 360 221→205 | 제목줄과 첫 필터 사이24→8. 다른 목록 간격 유지 | 10 |
| R-08 gl-filter h | 코드74, Figma PC65/모바일101 | D-21 조작32 적용. PC65, 모바일105. 모바일 Figma2건 전달 | 10 |
| sidebar-nav w | 213→Figma224 | UX/17 스크롤바 축소가 정상. 코드 유지, Figma36건 전달 | 36 |

## 검증

- 4화면 × 1440/360 상자 전후 JSON: 세션 tmp M7-before.json / M7-final.json. 문서 가로 넘침0. 기본 거터가 포함된 관찰이며 원장의 scrollbar 숨김 export와 폭 자체는 직접 비교하지 않는다.
- 캡처: 세션 tmp M7-R-02-1440-after.png 등, 총8개.
- D-21 구간, audit-code 검사 규칙은 수정하지 않았다.
- code_plan/measured_full.json의 base는 로컬5994다. 공공 깃랩 실측 원본으로 사용하지 않는다.
- sidebar-nav의 조건부 폭은 UX/17 실측 근거로만 판정했다.

## 남은 원인

이번에는 90개 원인 묶음 전부를 해소하지 않았다. filter-search x/y, R-17 page-head, 나머지 gl-filter 색/안쪽, section-title, diff/preview 등은 미판정이다. 원장 합계에서 위 후보96건만 검토했고 코드 직접 수정 속성58건, Figma 전달38건으로 분리한다. 이는 새 parity 재측정의 해소 건수가 아니다. R-02 모바일 높이와 R-05 모바일 높이는 별도 미해소로 남긴다.
