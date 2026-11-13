# Figma 부품 대응(Components / Product)

- 기준일: 2026. 11. 13.
- 짝 규칙: 코드 data-figma는 Figma 부품 실명, data-figma-key는 측정용 화면 상자 이름
- 공통 부품 목록: [COMPONENTS.md](COMPONENTS.md)

## Product

- product/brand_logo: Identity/Logo.jsx, 속성 Size, 행정안전부 상징(태극 엠블럼만, 2026. 11. 13. 변경)
- product/brand_mois: Identity/MoisLogo.jsx, 상하 조합, 로그인 화면 왼쪽 열
- product/brand_mois_horizontal: Identity/MoisLogo.jsx, 좌우 조합, 바닥글

## Layout

- product/app_header: Identity/Header.jsx, 속성 Repo path, Owner, Repo name, Auth, Breakpoint, 현재 미사용
- product/repo_tabs: Navigation/ProjectTabs.jsx, 속성 Current, 현재 미사용
- product/footer: Identity/Footer.jsx, 속성 Size, Context, 화면 상자 footer
- product/dock_panel: Layout/ProjectInfo.jsx, 속성 Panel, State, 화면 상자 project-info
- product/global_sidebar: Navigation/Sidebar.jsx, 속성 Auth, 화면 상자 gitlab-sidebar
- product/gitlab_sidebar: Navigation/Sidebar.jsx, 속성 Scope, State, Current, 화면 상자 gitlab-sidebar
- product/system_band: Identity/Masthead.jsx, 화면 상자 system-band
- product/gitlab_topbar: Identity/GlobalBar.jsx, 속성 Sidebar button, Drawer button, Breakpoint, Auth, 화면 상자 topbar
- activity-calendar: Layout/ActivityCalendar.jsx, 속성 Width

## Navigation

- product/menu: Navigation/Menu.jsx, 속성 Kind
- product/sidebar_item: Navigation/Sidebar.jsx, 속성 Current, Interaction
- product/code_dropdown: Code/RepoParts.jsx(CodeMenu)
- product/branch_menu: Code/RepoParts.jsx(BranchSelect)
- tabs: Navigation/ProjectStateTabs.jsx 안 gl-tabs, 프로젝트와 그룹 탐색의 활성 상태 탭

## Data display

- product/file_row: Code/RepoParts.jsx(FileTable), 속성 Type, State, Layout, Interaction, 화면 상자 file-table
- product/issue_row: screens/P19_Issues.jsx, 속성 State
- product/mr_row: screens/P20_MergeRequests.jsx, 속성 State
- product/notify_row: Feedback/NotifyRow.jsx, 속성 State, 실제 알림 자료 연결 전 미사용
- product/commit_bar: Code/RepoParts.jsx(CommitBar), 화면 상자 commit-bar
- product/result_row: Layout/ProjectRow.jsx(compact), 화면 상자 project-row
- product/explore_row: Layout/ProjectRow.jsx, 화면 상자 project-row

## Feedback

- product/status_block: Feedback/Status.jsx, 속성 State(Empty, Loading, Error)
- product/empty_state: Feedback/Status.jsx(EmptyState), 속성 Kind
- comment-editor: screens/parts/CommentBox.jsx, 작업 항목 의견 작성란(로그인 상태)

## Dashboard(dashboard/)

- dash/stat: dashboard/src/components/Metrics.jsx, 화면 상자 metric
- dash/rank row: dashboard/src/components/RankList.jsx, 화면 상자 rank-row
- dash/tabs: dashboard/src/components/Activity.jsx, 화면 상자 activity-tabs
- dash/pagination: dashboard/src/components/Pagination.jsx, 화면 상자 pagination
- dash/header: dashboard/src/components/Header.jsx, 속성 Width, 화면 상자 header
- dash/bar chart: dashboard/src/components/Activity.jsx, 속성 Width, 화면 상자 activity-chart, chart-col
- dash/issue row: dashboard/src/components/RecentIssues.jsx, 속성 Layout, 화면 상자 issue-row
- dash/table row: dashboard/src/components/ProjectTable.jsx, 속성 Layout, 화면 상자 project-row
- dash/filter field: dashboard/src/components/Fields.jsx, 속성 Kind, 화면 상자 filters
- registration-calendar: dashboard/src/components/Heatmap.jsx, 화면 상자 calendar-grid

## 예외

- 이름 형식 유지: product/ 부품과 변형 이름(Breakpoint=, Auth= 등), 내보내기 도구(export_full.js, figma_name_map.json)의 읽기 대상
- 이름 차이: Figma 부품 이름과 코드 화면 상자 이름이 다른 짝은 위 각 줄의 '화면 상자'
