# M-8 측정 매핑 수정

| 화면 | 폭 | 요소 | 오류 | 정답 | 근거 |
|---|---|---|---|---|---|
| A-02 | 1920/1440/1024/768/360, Guest/Signed-in | 화면 전체 | /projects/150/about는 소개 상세, Figma는 홈 + AI 소개 카드 | /projects/150?fixture=kordoc | figma_full.json A-02 elements에 toolbar/commit-bar/file-table/readme/project-info/intro-card. P16_Code.jsx는 info=true로 ProjectInfo 포함 |

A-02 104건은 다른 화면끼리의 비교에서 나온 후보이며 이름별 코드 추가로 해결하지 않는다. 코드 경로만 올바르게 고치고 재측정한다.
