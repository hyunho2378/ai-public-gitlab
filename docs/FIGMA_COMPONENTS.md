# Figma 부품 대응(Category/Name)

- 기준일: 2026. 11. 13.
- 짝 규칙: 코드 data-figma는 Figma 부품 이름, data-figma-key는 측정용 화면 상자 이름(옛 이름 보존)
- 옛 이름에서 새 이름: code_plan/component_name_map.json(35개)
- 원장 묶음: 대조기(app/scripts/compare-parity.mjs)는 화면 상자 이름(element.name)으로 행 묶음, 부품 이름(element.component) 변경과 무관
- 공통 부품 목록: [COMPONENTS.md](COMPONENTS.md)

## Identity

- Identity/Logo(옛 product/brand_logo): Identity/Logo.jsx, 속성 Size, 행정안전부 상징(태극 엠블럼만)
- Identity/MOIS logo(옛 product/brand_mois): Identity/MoisLogo.jsx, 상하 조합, 로그인 화면 왼쪽 열
- Identity/MOIS logo horizontal(옛 product/brand_mois_horizontal): Identity/MoisLogo.jsx, 좌우 조합, 바닥글
- Identity/App header(옛 product/app_header): Identity/Header.jsx, 현재 미사용
- Identity/Footer(옛 product/footer): Identity/Footer.jsx, dashboard/src/components/Footer.jsx, 속성 Size, Context, 화면 상자 footer
- Identity/System band(옛 product/system_band): Identity/Masthead.jsx, 화면 상자 system-band
- Identity/Topbar(옛 product/gitlab_topbar): Identity/GlobalBar.jsx, 속성 Breakpoint, Auth, 화면 상자 topbar

## Layout

- Layout/Project info(옛 product/dock_panel): Layout/ProjectInfo.jsx, 화면 상자 project-info
- Layout/Activity calendar(옛 activity-calendar): Layout/ActivityCalendar.jsx, 속성 Width, 화면 상자 activity-calendar
- Layout/Search result row(옛 product/result_row): Layout/ProjectRow.jsx(compact), 화면 상자 project-row
- Layout/Project row(옛 product/explore_row): Layout/ProjectRow.jsx, 화면 상자 project-row

## Navigation

- Navigation/Repo tabs(옛 product/repo_tabs): Navigation/ProjectTabs.jsx, 현재 미사용
- Navigation/Global sidebar(옛 product/global_sidebar): Navigation/Sidebar.jsx 안 nav
- Navigation/Sidebar(옛 product/gitlab_sidebar): Navigation/Sidebar.jsx, 속성 Scope, State, Current, 화면 상자 gitlab-sidebar
- Navigation/Sidebar item(옛 product/sidebar_item): Navigation/Sidebar.jsx, 속성 Current, Interaction
- Navigation/Menu(옛 product/menu): Navigation/Menu.jsx, 속성 Kind

## Code

- Code/Code dropdown(옛 product/code_dropdown): Code/RepoParts.jsx(CodeMenu)
- Code/Branch select(옛 product/branch_menu): Code/RepoParts.jsx(BranchSelect)
- Code/File row(옛 product/file_row): Code/RepoParts.jsx(FileTable), 속성 Type, State, Layout, Interaction
- Code/Commit bar(옛 product/commit_bar): Code/RepoParts.jsx(CommitBar), screens/gl/parts.jsx(GlCommitBar), 화면 상자 commit-bar

## Data

- Data/Issue row(옛 product/issue_row): screens/P19_Issues.jsx, 속성 State
- Data/Merge request row(옛 product/mr_row): screens/P20_MergeRequests.jsx, 속성 State
- Data/Notify row(옛 product/notify_row): Feedback/NotifyRow.jsx, 속성 State, 실제 알림 자료 연결 전 미사용

## Feedback

- Feedback/Status block(옛 product/status_block): Feedback/Status.jsx, 속성 State(Loading, Error)
- Feedback/Empty state(옛 product/empty_state): Feedback/Status.jsx(EmptyState), 속성 Kind
- comment-editor: screens/parts/CommentBox.jsx, 작업 항목 의견 작성란(로그인 상태), Figma 부품 미등록

## Dashboard(dashboard/)

- Dashboard/Stat(옛 dash/stat): Metrics.jsx, 화면 상자 metric
- Dashboard/Rank row(옛 dash/rank row): RankList.jsx, 화면 상자 rank-row
- Dashboard/Tabs(옛 dash/tabs): Activity.jsx, 화면 상자 activity-tabs
- Dashboard/Pagination(옛 dash/pagination): Pagination.jsx, 화면 상자 pagination
- Dashboard/Header(옛 dash/header): Header.jsx, 속성 Width, 화면 상자 header
- Dashboard/Bar chart(옛 dash/bar chart): Activity.jsx, 속성 Width, 화면 상자 activity-chart
- Dashboard/Issue row(옛 dash/issue row): RecentIssues.jsx, 속성 Layout, 화면 상자 issue-row
- Dashboard/Table row(옛 dash/table row): ProjectTable.jsx, 속성 Layout, 화면 상자 project-row
- Dashboard/Filter field(옛 dash/filter field): ProjectTable.jsx, 속성 Kind, 화면 상자 filters
- Dashboard/Registration calendar(옛 registration-calendar): Heatmap.jsx, 화면 상자 calendar-grid

## 예외

- 변형 이름 형식 유지: Breakpoint=, Auth= 등 속성 표기, 내보내기 도구(export_full.js, figma_name_map.json)의 읽기 대상
- 변수 모음 이름 dash/*: 부품이 아닌 Figma 변수 모음 이름, dashboard/src/styles/dash.tokens.css 그대로
