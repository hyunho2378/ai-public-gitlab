# Figma 부품 대응표 (Components / Product)

2026. 11. 1. 생성. Figma 부품 이름, 속성, 코드 파일, 코드 data-figma 이름표, 코드 문서(docs/COMPONENTS.md)와의 차이.

| Figma 이름 | 섹션 | 속성 | 코드 파일 | 코드 data-figma | 차이 |
|---|---|---|---|---|---|
| dash/stat | Dashboard | - | 3차_현황판/src/components/Metrics.jsx | metric | 이름 다름 |
| dash/rank row | Dashboard | - | 3차_현황판/src/components/RankList.jsx | rank-row | 같음 |
| dash/tabs | Dashboard | - | 3차_현황판/src/components/Activity.jsx | activity-tabs | 이름 다름 |
| dash/pagination | Dashboard | - | 3차_현황판/src/components/Pagination.jsx | pagination | 같음 |
| dash/header | Dashboard | Width=1440|768|360 | 3차_현황판/src/components/Header.jsx | header | 같음 |
| dash/bar chart | Dashboard | Width=1440|768|360 | 3차_현황판/src/components/Activity.jsx | activity-chart, chart-col | 이름 다름 |
| dash/issue row | Dashboard | Layout=Row|Stacked | 3차_현황판/src/components/RecentIssues.jsx | issue-row | 같음 |
| dash/table row | Dashboard | Layout=Wide|Stacked | 3차_현황판/src/components/ProjectTable.jsx | project-row | 이름 다름 |
| dash/filter field | Dashboard | Kind=Search|Select | 3차_현황판/src/components/Fields.jsx (filters) | filters | 이름 다름 |
| registration-calendar | Dashboard | - | 3차_현황판/src/components/Heatmap.jsx | calendar-grid | 이름 다름 |

## 이름이 다르거나 문서에 없는 항목

- product/brand_logo ↔ (미등록) (코드 문서는 미등록)
- product/brand_mois ↔ (미등록) (코드 문서는 미등록)
- product/brand_mois_horizontal ↔ (미등록) (코드 문서는 미등록)
- product/app_header ↔ (미등록) (코드 문서는 미등록)
- product/repo_tabs ↔ (미등록, 현재 호출 없음) (코드 문서는 미등록)
- product/dock_panel ↔ project-info (이름 다름)
- product/global_sidebar ↔ gitlab-sidebar (이름 다름)
- product/gitlab_topbar ↔ topbar (이름 다름)
- product/menu ↔ (미등록) (코드 문서는 미등록)
- product/sidebar_item ↔ gitlab-sidebar (이름 다름)
- product/code_dropdown ↔ (미등록) (코드 문서는 미등록)
- product/branch_menu ↔ (미등록) (코드 문서는 미등록)
- product/file_row ↔ file-table (이름 다름)
- product/issue_row ↔ (미등록) (코드 문서는 미등록)
- product/mr_row ↔ (미등록) (코드 문서는 미등록)
- product/notify_row ↔ (미등록) (코드 문서는 미등록)
- product/result_row ↔ project-row (이름 다름)
- product/explore_row ↔ project-row (이름 다름)
- product/status_block ↔ (미등록) (코드 문서는 미등록)
- product/empty_state ↔ (미등록) (코드 문서는 미등록)
- dash/stat ↔ metric (이름 다름)
- dash/tabs ↔ activity-tabs (이름 다름)
- dash/bar chart ↔ activity-chart, chart-col (이름 다름)
- dash/table row ↔ project-row (이름 다름)
- dash/filter field ↔ filters (이름 다름)
- registration-calendar ↔ calendar-grid (이름 다름)

## 예외

- product/… 부품과 변형 이름(Breakpoint=…, Auth=… 등)은 내보내기 도구(export_full.js, figma_name_map.json)가 읽으므로 'Category/Name' 형식으로 바꾸지 않는다.
- 코드 문서는 Figma 이름을 data-figma 이름표 기준으로 적는다(예: 화면 안 요소). 부품 이름(Figma)과 이름표(코드)가 달라도 위 표의 같은 줄이 짝이다.
