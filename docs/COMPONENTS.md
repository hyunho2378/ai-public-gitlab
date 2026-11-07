# 공통 부품 대응표

코드 `data-figma` 이름표를 기준으로 정리한다. Figma 컴포넌트 실물 미확인 항목은 미등록으로 남긴다. 이름표만으로 실제 인스턴스 일치를 주장하지 않는다.

| 부품 | 파일 | data-figma | Figma 이름(이름표 기준) | 속성 / 변형 | 쓰는 화면 |
|---|---|---|---|---|---|
| Button, LinkButton | `app/src/components/Action/Button.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | children, Type = 'primary', Size = 'small', type = 'button', ...props | components/Feedback/Status.jsx, screens/P04_Project.jsx, screens/P07_Usage.jsx, screens/P08_Feedback.jsx, screens/P09_Publish.jsx, screens/P10_MyProjects.jsx, screens/P13_Error.jsx, screens/P15_Requests.jsx, screens/P19_Issues.jsx, screens/parts/ReuseAction.jsx |
| iconBtnClass, IconButton | `app/src/components/Action/IconButton.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | icon, label, size = 'small', to, className = '', buttonRef, ...rest | components/Code/RepoParts.jsx, components/Help/RunSteps.jsx, components/Identity/GlobalBar.jsx, screens/P06_Changes.jsx, screens/P16_Code.jsx, screens/P18_Refs.jsx, screens/P19_Issues.jsx, screens/P20_MergeRequests.jsx, screens/P22_RepoSections.jsx, screens/P25_Compare.jsx, screens/gl/GlDiff.jsx, screens/gl/GlFile.jsx, screens/gl/parts.jsx |
| CodeView | `app/src/components/Code/CodeView.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | lines, lang, blame, wrap | 내부 / 현재 호출 없음 |
| parseHunks, diffStat, DiffView | `app/src/components/Code/DiffView.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | file, mode, index | screens/P20_MergeRequests.jsx |
| DownloadMenu | `app/src/components/Code/DownloadMenu.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | zipUrl, cloneUrl | 내부 / 현재 호출 없음 |
| Drop | `app/src/components/Code/Drop.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | 본문 참조 | 내부 / 현재 호출 없음 |
| FileIcon | `app/src/components/Code/FileIcon.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | name, label | components/Code/DiffView.jsx, components/Code/FileTreePanel.jsx, components/Code/RepoParts.jsx, screens/gl/GlDiff.jsx, screens/gl/GlFile.jsx |
| FileTreePanel | `app/src/components/Code/FileTreePanel.jsx` | file-tree | `file-tree` | id, item, current, refQuery, depth, filter | screens/P16_Code.jsx |
| Icon | `app/src/components/Code/Icon.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | name, label | components/Action/IconButton.jsx, components/Code/DiffView.jsx, components/Code/DownloadMenu.jsx, components/Code/FileTreePanel.jsx, components/Code/ListTools.jsx, components/Code/RepoParts.jsx, components/Help/Markdown.jsx, components/Identity/GlobalBar.jsx, components/Layout/ProjectFrame.jsx, components/Layout/ProjectInfo.jsx, components/Layout/ProjectRow.jsx, components/Navigation/Menu.jsx, components/Navigation/Sidebar.jsx, screens/P01_Home.jsx, screens/P02_Search.jsx, screens/P06_Changes.jsx, screens/P11_Organizations.jsx, screens/P16_Code.jsx, screens/P17_Commit.jsx, screens/P18_Refs.jsx, screens/P19_Issues.jsx, screens/P20_MergeRequests.jsx, screens/P21_Contributors.jsx, screens/P22_RepoSections.jsx, screens/P23_Write.jsx, screens/P25_Compare.jsx, screens/P29_Explore.jsx, screens/P32_RepoAnalytics.jsx, screens/P33_Profile.jsx, screens/gl/GlDiff.jsx, screens/gl/GlFile.jsx, screens/gl/parts.jsx, screens/parts/FilterSearch.jsx, screens/parts/HistoryButton.jsx |
| SORTS, sortItems, matchTitle, SearchBox, ListBox | `app/src/components/Code/ListTools.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | value, onChange, label = u.List_searchLabel, placeholder = u.List_search | 내부 / 현재 호출 없음 |
| enc, Ago, BranchSelect, AddFileMenu, CodeMenu, FileFind, CommitBar, FileTable, ReadmeBox, About, RepoMenuList | `app/src/components/Code/RepoParts.jsx` | commit-bar, file-table, readme, about | `commit-bar`, `file-table`, `readme`, `about` | iso | screens/P16_Code.jsx, screens/gl/GlFile.jsx |
| RepoSubNav | `app/src/components/Code/RepoSubNav.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | id, active | 내부 / 현재 호출 없음 |
| LoginRequiredModal | `app/src/components/Feedback/LoginRequiredModal.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | action, onClose | components/Layout/ProjectFrame.jsx, screens/P08_Feedback.jsx, screens/P09_Publish.jsx, screens/P15_Requests.jsx, screens/parts/ReuseAction.jsx |
| NoticeBanner | `app/src/components/Feedback/NoticeBanner.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | message | app/App.jsx |
| ShortcutsDialog | `app/src/components/Feedback/ShortcutsDialog.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | onClose | app/App.jsx |
| Skeleton, Status, EmptyState | `app/src/components/Feedback/Status.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | widths = SKEL_WIDTHS, inline = false | components/Code/RepoParts.jsx, components/Layout/ProjectFrame.jsx, screens/P01_Home.jsx, screens/P02_Search.jsx, screens/P03_Fields.jsx, screens/P04_Project.jsx, screens/P06_Changes.jsx, screens/P07_Usage.jsx, screens/P09_Publish.jsx, screens/P10_MyProjects.jsx, screens/P11_Organizations.jsx, screens/P15_Requests.jsx, screens/P16_Code.jsx, screens/P17_Commit.jsx, screens/P18_Refs.jsx, screens/P19_Issues.jsx, screens/P20_MergeRequests.jsx, screens/P21_Contributors.jsx, screens/P22_RepoSections.jsx, screens/P24_NewIssue.jsx, screens/P25_Compare.jsx, screens/P26_Insights.jsx, screens/P27_Account.jsx, screens/P29_Explore.jsx, screens/P30_Jobs.jsx, screens/P31_PublishCheck.jsx, screens/P33_Profile.jsx |
| toast, Toasts | `app/src/components/Feedback/Toast.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | 본문 참조 | app/App.jsx |
| Markdown | `app/src/components/Help/Markdown.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | node, base | components/Help/Readme.jsx |
| plain, phrase | `app/src/components/Help/Phrase.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | 본문 참조 | 내부 / 현재 호출 없음 |
| splitReadme, readmeCommands, sectionLines, Readme | `app/src/components/Help/Readme.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | source, base | components/Code/CodeView.jsx, components/Code/RepoParts.jsx, screens/P04_Project.jsx, screens/P07_Usage.jsx, screens/P18_Refs.jsx, screens/P19_Issues.jsx, screens/P20_MergeRequests.jsx, screens/P23_Write.jsx, screens/P24_NewIssue.jsx, screens/gl/GlFile.jsx |
| buildSteps, RunSteps | `app/src/components/Help/RunSteps.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | value | screens/P07_Usage.jsx |
| Footer | `app/src/components/Identity/Footer.jsx` | footer | `footer` | 본문 참조 | app/App.jsx |
| SERVICE_NAME, GlobalBar | `app/src/components/Identity/GlobalBar.jsx` | global-search, topbar | `global-search`, `topbar` | onToggleNav, navOpen, hasNav = true, drawer = false, sideHidden = false, onShowSide, area | app/App.jsx |
| SERVICE_NAME, MAIN_MENU, Header | `app/src/components/Identity/Header.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | mode, setMode | 내부 / 현재 호출 없음 |
| Logo | `app/src/components/Identity/Logo.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | size | components/Identity/GlobalBar.jsx |
| Masthead | `app/src/components/Identity/Masthead.jsx` | snapshot-band, system-band | `snapshot-band`, `system-band` | 본문 참조 | app/App.jsx |
| MoisLogo, MoisLogoHorizontal | `app/src/components/Identity/MoisLogo.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | label, figma | components/Identity/Footer.jsx, screens/P12_Login.jsx |
| useScreenMode, useFontSize, useMotion, ScreenModeOptions, ScreenModeItems | `app/src/components/Identity/ScreenMode.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | name, mode, setMode | components/Identity/GlobalBar.jsx, components/Identity/Header.jsx, screens/P27_Account.jsx |
| FieldsetTitle | `app/src/components/Input/FieldsetTitle.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | children, className = 'krds-text-body-small-bold' | components/Identity/ScreenMode.jsx, screens/P07_Usage.jsx, screens/P08_Feedback.jsx |
| FormField, requireFields | `app/src/components/Input/FormField.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | id, label, required = false, hint, error, multiline = false, figma, ...props | components/Write/CommitDialog.jsx, screens/P08_Feedback.jsx, screens/P09_Publish.jsx, screens/P12_Login.jsx, screens/P12b_LoginStates.jsx, screens/P15_Requests.jsx, screens/P23_Write.jsx, screens/P24_NewIssue.jsx, screens/P28_NewProject.jsx, screens/parts/ReuseAction.jsx |
| TaskSearch | `app/src/components/Input/TaskSearch.jsx` | search | `search` | initial = '', keep | 내부 / 현재 호출 없음 |
| buildCalendar, ActivityCalendar | `app/src/components/Layout/ActivityCalendar.jsx` | activity-calendar | `activity-calendar` | cal, caption, cellLabel, aria, less, more | screens/P33_Profile.jsx |
| avatarUrl, avatarTone, Avatar | `app/src/components/Layout/Avatar.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | src, name, seed, className = '' | components/Code/RepoParts.jsx, components/Identity/GlobalBar.jsx, components/Layout/ProjectFrame.jsx, components/Layout/ProjectRow.jsx, components/Navigation/Sidebar.jsx, screens/P06_Changes.jsx, screens/P11_Organizations.jsx, screens/P17_Commit.jsx, screens/P18_Refs.jsx, screens/P20_MergeRequests.jsx, screens/P22_RepoSections.jsx, screens/P25_Compare.jsx, screens/P29_Explore.jsx, screens/P33_Profile.jsx, screens/gl/parts.jsx |
| decisionRows, DecisionList, DecisionBlock, DecisionPanel | `app/src/components/Layout/DecisionPanel.jsx` | decision-panel | `decision-panel` | rows, id | 내부 / 현재 호출 없음 |
| FoldText, InfoPair | `app/src/components/Layout/FoldText.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | children, lines = 3, className = '', extra = null | components/Layout/DecisionPanel.jsx, components/Layout/ProjectInfo.jsx, screens/P14_Help.jsx |
| Page | `app/src/components/Layout/Page.jsx` | page-head | `page-head` | id, title, state, children, noFigma = false | components/Layout/ProjectFrame.jsx, screens/P01_Home.jsx, screens/P02_Search.jsx, screens/P03_Fields.jsx, screens/P09_Publish.jsx, screens/P10_MyProjects.jsx, screens/P11_Organizations.jsx, screens/P12_Login.jsx, screens/P12b_LoginStates.jsx, screens/P13_Error.jsx, screens/P14_Help.jsx, screens/P15_Requests.jsx, screens/P26_Insights.jsx, screens/P27_Account.jsx, screens/P28_NewProject.jsx, screens/P29_Explore.jsx, screens/P33_Profile.jsx |
| organizationOf, useProject, ProjectFrame | `app/src/components/Layout/ProjectFrame.jsx` | page-head, repo-actions, extra-reuse, main | `page-head`, `repo-actions`, `extra-reuse`, `main` | project, id | screens/P04_Project.jsx, screens/P06_Changes.jsx, screens/P07_Usage.jsx, screens/P08_Feedback.jsx, screens/P16_Code.jsx, screens/P17_Commit.jsx, screens/P18_Refs.jsx, screens/P19_Issues.jsx, screens/P20_MergeRequests.jsx, screens/P21_Contributors.jsx, screens/P22_RepoSections.jsx, screens/P23_Write.jsx, screens/P24_NewIssue.jsx, screens/P25_Compare.jsx, screens/P26_Insights.jsx, screens/P27_Account.jsx, screens/P30_Jobs.jsx, screens/P31_PublishCheck.jsx, screens/P32_RepoAnalytics.jsx |
| ProjectInfo | `app/src/components/Layout/ProjectInfo.jsx` | language-bar, project-info, extra-field, intro-card | `language-bar`, `project-info`, `extra-field`, `intro-card` | languages | components/Layout/ProjectFrame.jsx |
| ProjectRow | `app/src/components/Layout/ProjectRow.jsx` | project-row | `project-row` | icon, label, n, href | screens/P01_Home.jsx, screens/P02_Search.jsx, screens/P33_Profile.jsx |
| ProjectList | `app/src/components/Layout/StructuredList.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | items, cards = false | screens/P09_Publish.jsx |
| Breadcrumb | `app/src/components/Navigation/Breadcrumb.jsx` | breadcrumb | `breadcrumb` | items, home = true | app/App.jsx, components/Layout/ProjectFrame.jsx, screens/P33_Profile.jsx |
| Menu | `app/src/components/Navigation/Menu.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | label, button, btnClass = 'krds-btn small tertiary', btnProps = { | components/Code/DownloadMenu.jsx, components/Identity/GlobalBar.jsx, components/Identity/Header.jsx, components/Layout/ProjectRow.jsx, screens/P01_Home.jsx, screens/P06_Changes.jsx, screens/P11_Organizations.jsx, screens/P17_Commit.jsx, screens/P25_Compare.jsx, screens/gl/GlDiff.jsx, screens/gl/GlFile.jsx, screens/gl/parts.jsx |
| Pagination | `app/src/components/Navigation/Pagination.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | page, total, size, onChange | 내부 / 현재 호출 없음 |
| ProjectTabs | `app/src/components/Navigation/ProjectTabs.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | id, active | 내부 / 현재 호출 없음 |
| globalMenu, profileMenu, projectMenu, Sidebar | `app/src/components/Navigation/Sidebar.jsx` | gitlab-sidebar, sidebar-nav | `gitlab-sidebar`, `sidebar-nav` | signedIn | app/App.jsx |
| Steps | `app/src/components/Navigation/StepIndicator.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | labels, current, label | screens/P07_Usage.jsx, screens/P09_Publish.jsx |
| CommitDialog | `app/src/components/Write/CommitDialog.jsx` | 호출부 전달 / 내부 부품 | 미등록(실제 Figma 확인 필요) | open, onClose, defaultMessage, branch, onSubmit, submitLabel | screens/P23_Write.jsx |

| HistoryButton | `app/src/components/Action/HistoryButton.jsx` | history / arrow-down | history-button (실물 미확인) | label, onClick | 프로젝트 / 그룹 / 작업 항목 목록 |

## Figma 부품 실명 대응(M-8)

`data-figma`는 Figma 부품 실명이다. `data-figma-key`는 기존 화면 상자 이름을 보존한다. 빈 key는 화면 내 비교 상자가 아닌 부품 내부 이름표다. 측정기는 이 이름 분리를 읽으며 기존 화면 원장을 삭제하거나 허용하지 않는다.

| 부품 | 파일 | data-figma | Figma 컴포넌트 이름 | 속성 / 변형 | 쓰는 화면 |
|---|---|---|---|---|---|
| product/brand_logo | app/src/components/Identity/Logo.jsx | product/brand_logo | product/brand_logo | Size | 전역 |
| product/brand_mois | app/src/components/Identity/MoisLogo.jsx | product/brand_mois | product/brand_mois | 상하 | 로그인 |
| product/brand_mois_horizontal | app/src/components/Identity/MoisLogo.jsx | product/brand_mois_horizontal | product/brand_mois_horizontal | 좌우 | 바닥글 |
| product/app_header | app/src/components/Identity/Header.jsx | product/app_header | product/app_header | Auth, Breakpoint | 구형 머리글 |
| product/repo_tabs | app/src/components/Navigation/ProjectTabs.jsx | product/repo_tabs | product/repo_tabs | Current | 현재 호출 없음 |
| product/dock_panel | app/src/components/Layout/ProjectInfo.jsx | product/dock_panel | product/dock_panel | State | 저장소 |
| product/global_sidebar | app/src/components/Navigation/Sidebar.jsx | product/global_sidebar | product/global_sidebar | Auth | 전역 |
| product/gitlab_topbar | app/src/components/Identity/GlobalBar.jsx | product/gitlab_topbar | product/gitlab_topbar | Auth, Breakpoint | 전역 |
| product/sidebar_item | app/src/components/Navigation/Sidebar.jsx | product/sidebar_item | product/sidebar_item | Current, Interaction | 사이드바 |
| product/menu | app/src/components/Navigation/Menu.jsx | product/menu | product/menu | Kind | 전역 |
| product/branch_menu | app/src/components/Code/RepoParts.jsx | product/branch_menu | product/branch_menu | current | 저장소 |
| product/code_dropdown | app/src/components/Code/RepoParts.jsx | product/code_dropdown | product/code_dropdown | cloneUrl | 저장소 |
| product/file_row | app/src/components/Code/RepoParts.jsx | product/file_row | product/file_row | Type | 파일 표 |
| product/issue_row | app/src/screens/P19_Issues.jsx | product/issue_row | product/issue_row | State | 작업 항목 |
| product/mr_row | app/src/screens/P20_MergeRequests.jsx | product/mr_row | product/mr_row | State | MR |
| product/result_row | app/src/components/Layout/ProjectRow.jsx | product/result_row | product/result_row | compact=true | 검색 |
| product/explore_row | app/src/components/Layout/ProjectRow.jsx | product/explore_row | product/explore_row | compact=false | 탐색 |
| product/status_block | app/src/components/Feedback/Status.jsx | product/status_block | product/status_block | Loading, Error | 전역 |
| product/empty_state | app/src/components/Feedback/Status.jsx | product/empty_state | product/empty_state | Empty | 전역 |

`product/notify_row`는 공통 부품으로 등록한다. 현재 알림 화면은 빈 상태이므로 가짜 자료를 만들어 호출하지 않는다.

| product/notify_row | app/src/components/Feedback/NotifyRow.jsx | product/notify_row | product/notify_row | read=false/true, to, children | 실제 알림 자료 연결 전. 가짜 행 생성 없음 |

| ProjectStateTabs | app/src/components/Navigation/ProjectStateTabs.jsx | tabs | tabs | archived, onChange | 프로젝트 탐색 / 그룹 탐색 |
