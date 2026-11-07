# 공통 부품 대응표

코드 `data-figma` 이름표를 기준으로 정리한다. Figma 컴포넌트 실물 미확인 항목은 미등록으로 남긴다. 이름표만으로 실제 인스턴스 일치를 주장하지 않는다.

| 부품 | 파일 | data-figma | Figma 이름(이름표 기준) | 속성 / 변형 | 쓰는 화면 |
|---|---|---|---|---|---|
| Activity | `src/components/Activity.jsx` | activity-tabs, activity-chart, chart-col | `activity-tabs`, `activity-chart`, `chart-col` | a | App.jsx |
| Fields | `src/components/Fields.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | f | App.jsx |
| Footer | `src/components/Footer.jsx` | footer, footer-top, footer-logo, footer-info, footer-bottom | `footer`, `footer-top`, `footer-logo`, `footer-info`, `footer-bottom` | 본문 참조 | App.jsx |
| Header | `src/components/Header.jsx` | header | `header` | 본문 참조 | App.jsx |
| Heatmap | `src/components/Heatmap.jsx` | calendar-grid | `calendar-grid` | cal | App.jsx |
| Icon | `src/components/Icon.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | name, size = 'medium' | components/PageHead.jsx |
| Languages | `src/components/Languages.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | langs | App.jsx |
| Metrics | `src/components/Metrics.jsx` | metrics, metric | `metrics`, `metric` | m | App.jsx |
| PageHead | `src/components/PageHead.jsx` | page-head, refresh | `page-head`, `refresh` | generatedAt, source, onRefresh, busy | App.jsx |
| Pagination | `src/components/Pagination.jsx` | pagination | `pagination` | page, total, onPage | components/ProjectTable.jsx |
| ProjectTable | `src/components/ProjectTable.jsx` | filters, project-table, project-row | `filters`, `project-table`, `project-row` | data, now, fields | App.jsx |
| RankList | `src/components/RankList.jsx` | rank-row | `rank-row` | rows, caption, figma | components/Fields.jsx, components/Languages.jsx |
| RecentIssues | `src/components/RecentIssues.jsx` | issue-row | `issue-row` | data, now | App.jsx |
| Section | `src/components/Section.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | id, title, aside, children, figma | components/Activity.jsx, components/Fields.jsx, components/Heatmap.jsx, components/Languages.jsx, components/ProjectTable.jsx, components/RecentIssues.jsx |
| IconButton | `src/components/IconButton.jsx` | icon-button / refresh | icon-button (실물 미확인) | icon, label, figma, disabled, onClick | PageHead |

## Figma 실명(M-8)

| 부품 | 파일 | data-figma | Figma 이름 | 화면 상자 이름 |
|---|---|---|---|---|
| dash/stat | src/components/Metrics.jsx | dash/stat | dash/stat | metric |
| dash/tabs | src/components/Activity.jsx | dash/tabs | dash/tabs | activity-tabs |
| dash/bar chart | src/components/Activity.jsx | dash/bar chart | dash/bar chart | activity-chart |
| dash/table row | src/components/ProjectTable.jsx | dash/table row | dash/table row | project-row |
| dash/filter field | src/components/ProjectTable.jsx | dash/filter field | dash/filter field | filters |
| registration-calendar | src/components/Heatmap.jsx | registration-calendar | registration-calendar | calendar-grid |

기존 화면 상자 이름은 data-figma-key로 보존한다. FIGMA_COMPONENTS.md의 filters 파일 경로 Fields.jsx는 ProjectTable.jsx가 정답이다.
