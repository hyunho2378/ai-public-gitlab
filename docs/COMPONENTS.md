# 공통 부품 대응

- 기준: 코드 이름표 data-figma, 측정용 화면 상자 이름 data-figma-key
- 미등록: Figma 컴포넌트 실물 미확인 부품, 이름표 기준 인스턴스 일치 판정 제외
- 생성: 부품 파일의 내보내기 이름, 이름표, 가져다 쓰는 파일(2026. 11. 13. 기준)


## components/Action

- Button, LinkButton: app/src/components/Action/Button.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: components/Feedback/Status.jsx, screens/P04_Project.jsx, screens/P07_Usage.jsx, screens/P08_Feedback.jsx, screens/P09_Publish.jsx, screens/P10_MyProjects.jsx, screens/P13_Error.jsx, screens/P15_Requests.jsx, screens/P19_Issues.jsx, screens/parts/ReuseAction.jsx
- HistoryButton: app/src/components/Action/HistoryButton.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: screens/P19_Issues.jsx, screens/P20_MergeRequests.jsx, screens/P22_RepoSections.jsx, screens/parts/HistoryButton.jsx
- iconBtnClass, IconButton: app/src/components/Action/IconButton.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: components/Code/RepoParts.jsx, components/Help/Markdown.jsx, components/Help/RunSteps.jsx, components/Identity/GlobalBar.jsx, components/Layout/ProjectFrame.jsx, components/Layout/ProjectRow.jsx, screens/P06_Changes.jsx, screens/P11_Organizations.jsx, screens/P16_Code.jsx, screens/P18_Refs.jsx, screens/P19_Issues.jsx, screens/P20_MergeRequests.jsx, screens/P22_RepoSections.jsx, screens/P25_Compare.jsx, screens/gl/GlDiff.jsx, screens/gl/GlFile.jsx, screens/gl/parts.jsx

## components/Code

- CodeView: app/src/components/Code/CodeView.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: 현재 미사용
- parseHunks, diffStat, DiffView: app/src/components/Code/DiffView.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: screens/P20_MergeRequests.jsx, screens/gl/GlDiff.jsx
- DownloadMenu: app/src/components/Code/DownloadMenu.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: 현재 미사용
- Drop: app/src/components/Code/Drop.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: components/Code/ListTools.jsx, components/Code/RepoParts.jsx, components/Layout/ProjectFrame.jsx, screens/P19_Issues.jsx, screens/P20_MergeRequests.jsx
- FileIcon: app/src/components/Code/FileIcon.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: components/Code/DiffView.jsx, components/Code/FileTreePanel.jsx, components/Code/RepoParts.jsx, screens/gl/GlDiff.jsx, screens/gl/GlFile.jsx
- FileTreePanel: app/src/components/Code/FileTreePanel.jsx
  - 이름표: file-tree
  - 쓰는 파일: screens/P16_Code.jsx
- Icon: app/src/components/Code/Icon.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: components/Action/HistoryButton.jsx, components/Action/IconButton.jsx, components/Code/DiffView.jsx, components/Code/DownloadMenu.jsx, components/Code/FileTreePanel.jsx, components/Code/ListTools.jsx, components/Code/RepoParts.jsx, components/Help/Markdown.jsx, components/Help/RunSteps.jsx, components/Identity/GlobalBar.jsx, components/Layout/ProjectFrame.jsx, components/Layout/ProjectInfo.jsx, components/Layout/ProjectRow.jsx, components/Navigation/Menu.jsx, components/Navigation/Sidebar.jsx, screens/P01_Home.jsx, screens/P02_Search.jsx, screens/P06_Changes.jsx, screens/P11_Organizations.jsx, screens/P16_Code.jsx, screens/P17_Commit.jsx, screens/P18_Refs.jsx, screens/P19_Issues.jsx, screens/P20_MergeRequests.jsx, screens/P21_Contributors.jsx, screens/P22_RepoSections.jsx, screens/P23_Write.jsx, screens/P25_Compare.jsx, screens/P29_Explore.jsx, screens/P30_Jobs.jsx, screens/P32_RepoAnalytics.jsx, screens/P33_Profile.jsx, screens/gl/GlDiff.jsx, screens/gl/GlFile.jsx, screens/gl/parts.jsx, screens/parts/FilterSearch.jsx
- SORTS, sortItems, matchTitle, SearchBox, ListBox: app/src/components/Code/ListTools.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: screens/P19_Issues.jsx, screens/P20_MergeRequests.jsx
- enc, Ago, BranchSelect, AddFileMenu, CodeMenu, RepoMoreMenu, FileFind, CommitBar, FileTable, ReadmeBox, About, RepoMenuList: app/src/components/Code/RepoParts.jsx
  - 이름표: about, commit-bar, file-table, product/file_row, readme
  - 쓰는 파일: screens/P16_Code.jsx, screens/gl/GlFile.jsx
- RepoSubNav: app/src/components/Code/RepoSubNav.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: 현재 미사용

## components/Feedback

- LoginRequiredModal: app/src/components/Feedback/LoginRequiredModal.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: components/Layout/ProjectFrame.jsx, screens/P08_Feedback.jsx, screens/P09_Publish.jsx, screens/P15_Requests.jsx, screens/parts/ReuseAction.jsx
- NoticeBanner: app/src/components/Feedback/NoticeBanner.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: app/App.jsx
- NotifyRow: app/src/components/Feedback/NotifyRow.jsx
  - 이름표: product/notify_row
  - 쓰는 파일: 현재 미사용
- ShortcutsDialog: app/src/components/Feedback/ShortcutsDialog.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: app/App.jsx
- Skeleton, Status, EmptyState: app/src/components/Feedback/Status.jsx
  - 이름표: product/empty_state, product/status_block
  - 쓰는 파일: components/Code/RepoParts.jsx, components/Layout/ProjectFrame.jsx, screens/P01_Home.jsx, screens/P02_Search.jsx, screens/P03_Fields.jsx, screens/P04_Project.jsx, screens/P06_Changes.jsx, screens/P07_Usage.jsx, screens/P09_Publish.jsx, screens/P10_MyProjects.jsx, screens/P11_Organizations.jsx, screens/P15_Requests.jsx, screens/P16_Code.jsx, screens/P17_Commit.jsx, screens/P18_Refs.jsx, screens/P19_Issues.jsx, screens/P20_MergeRequests.jsx, screens/P21_Contributors.jsx, screens/P22_RepoSections.jsx, screens/P24_NewIssue.jsx, screens/P25_Compare.jsx, screens/P26_Insights.jsx, screens/P27_Account.jsx, screens/P29_Explore.jsx, screens/P30_Jobs.jsx, screens/P31_PublishCheck.jsx, screens/P33_Profile.jsx
- toast, Toasts: app/src/components/Feedback/Toast.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: app/App.jsx, components/Code/RepoParts.jsx

## components/Help

- Markdown: app/src/components/Help/Markdown.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: components/Help/Readme.jsx
- plain, phrase: app/src/components/Help/Phrase.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: components/Feedback/LoginRequiredModal.jsx, components/Feedback/Status.jsx, components/Identity/Header.jsx, components/Layout/Page.jsx, screens/P03_Fields.jsx, screens/P09_Publish.jsx, screens/P10_MyProjects.jsx, screens/P12_Login.jsx, screens/P12b_LoginStates.jsx, screens/P13_Error.jsx, screens/P14_Help.jsx, screens/P15_Requests.jsx, screens/P31_PublishCheck.jsx
- splitReadme, readmeCommands, sectionLines, Readme: app/src/components/Help/Readme.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: components/Code/CodeView.jsx, components/Code/RepoParts.jsx, components/Help/RunSteps.jsx, screens/P04_Project.jsx, screens/P07_Usage.jsx, screens/P18_Refs.jsx, screens/P19_Issues.jsx, screens/P20_MergeRequests.jsx, screens/P23_Write.jsx, screens/P24_NewIssue.jsx, screens/gl/GlFile.jsx, screens/parts/CommentBox.jsx
- buildSteps, RunSteps: app/src/components/Help/RunSteps.jsx
  - 이름표: steps
  - 쓰는 파일: screens/P07_Usage.jsx

## components/Identity

- Footer: app/src/components/Identity/Footer.jsx
  - 이름표: footer
  - 쓰는 파일: app/App.jsx
- SERVICE_NAME, GlobalBar: app/src/components/Identity/GlobalBar.jsx
  - 이름표: global-search, product/gitlab_topbar
  - 쓰는 파일: app/App.jsx
- SERVICE_NAME, MAIN_MENU, Header: app/src/components/Identity/Header.jsx
  - 이름표: product/app_header
  - 쓰는 파일: components/Identity/Footer.jsx
- Logo: app/src/components/Identity/Logo.jsx
  - 이름표: product/brand_logo
  - 쓰는 파일: components/Identity/GlobalBar.jsx
- Masthead: app/src/components/Identity/Masthead.jsx
  - 이름표: snapshot-band, system-band
  - 쓰는 파일: app/App.jsx
- MoisLogo, MoisLogoHorizontal: app/src/components/Identity/MoisLogo.jsx
  - 이름표: product/brand_mois, product/brand_mois_horizontal
  - 쓰는 파일: components/Identity/Footer.jsx, screens/P12_Login.jsx
- useScreenMode, useFontSize, useMotion, ScreenModeOptions, ScreenModeItems: app/src/components/Identity/ScreenMode.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: components/Identity/GlobalBar.jsx, components/Identity/Header.jsx, screens/P27_Account.jsx

## components/Input

- FieldsetTitle: app/src/components/Input/FieldsetTitle.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: components/Identity/ScreenMode.jsx, screens/P07_Usage.jsx, screens/P08_Feedback.jsx
- FormField, requireFields: app/src/components/Input/FormField.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: components/Write/CommitDialog.jsx, screens/P08_Feedback.jsx, screens/P09_Publish.jsx, screens/P12_Login.jsx, screens/P12b_LoginStates.jsx, screens/P15_Requests.jsx, screens/P23_Write.jsx, screens/P24_NewIssue.jsx, screens/P28_NewProject.jsx, screens/parts/ReuseAction.jsx
- TaskSearch: app/src/components/Input/TaskSearch.jsx
  - 이름표: search
  - 쓰는 파일: 현재 미사용

## components/Layout

- buildCalendar, ActivityCalendar: app/src/components/Layout/ActivityCalendar.jsx
  - 이름표: activity-calendar
  - 쓰는 파일: screens/P33_Profile.jsx
- avatarUrl, avatarTone, Avatar: app/src/components/Layout/Avatar.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: components/Code/RepoParts.jsx, components/Identity/GlobalBar.jsx, components/Layout/ProjectFrame.jsx, components/Layout/ProjectRow.jsx, components/Navigation/Sidebar.jsx, screens/P06_Changes.jsx, screens/P11_Organizations.jsx, screens/P17_Commit.jsx, screens/P18_Refs.jsx, screens/P20_MergeRequests.jsx, screens/P22_RepoSections.jsx, screens/P25_Compare.jsx, screens/P29_Explore.jsx, screens/P33_Profile.jsx, screens/gl/parts.jsx, screens/parts/ActivityNotes.jsx
- decisionRows, DecisionList, DecisionBlock, DecisionPanel: app/src/components/Layout/DecisionPanel.jsx
  - 이름표: decision-panel
  - 쓰는 파일: components/Layout/ProjectInfo.jsx
- FoldText, InfoPair: app/src/components/Layout/FoldText.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: components/Layout/DecisionPanel.jsx, components/Layout/ProjectInfo.jsx, components/Layout/ProjectRow.jsx, screens/P14_Help.jsx
- Page: app/src/components/Layout/Page.jsx
  - 이름표: main, page-head
  - 쓰는 파일: components/Layout/ProjectFrame.jsx, screens/P01_Home.jsx, screens/P02_Search.jsx, screens/P03_Fields.jsx, screens/P09_Publish.jsx, screens/P10_MyProjects.jsx, screens/P11_Organizations.jsx, screens/P12_Login.jsx, screens/P12b_LoginStates.jsx, screens/P13_Error.jsx, screens/P14_Help.jsx, screens/P15_Requests.jsx, screens/P26_Insights.jsx, screens/P27_Account.jsx, screens/P28_NewProject.jsx, screens/P29_Explore.jsx, screens/P33_Profile.jsx
- organizationOf, useProject, ProjectFrame: app/src/components/Layout/ProjectFrame.jsx
  - 이름표: extra-reuse, main, page-head, repo-actions
  - 쓰는 파일: screens/P04_Project.jsx, screens/P06_Changes.jsx, screens/P07_Usage.jsx, screens/P08_Feedback.jsx, screens/P16_Code.jsx, screens/P17_Commit.jsx, screens/P18_Refs.jsx, screens/P19_Issues.jsx, screens/P20_MergeRequests.jsx, screens/P21_Contributors.jsx, screens/P22_RepoSections.jsx, screens/P23_Write.jsx, screens/P24_NewIssue.jsx, screens/P25_Compare.jsx, screens/P26_Insights.jsx, screens/P27_Account.jsx, screens/P30_Jobs.jsx, screens/P31_PublishCheck.jsx, screens/P32_RepoAnalytics.jsx
- ProjectInfo: app/src/components/Layout/ProjectInfo.jsx
  - 이름표: extra-field, intro-card, language-bar, product/dock_panel
  - 쓰는 파일: components/Layout/ProjectFrame.jsx
- ProjectRow: app/src/components/Layout/ProjectRow.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: screens/P01_Home.jsx, screens/P02_Search.jsx, screens/P10_MyProjects.jsx, screens/P33_Profile.jsx
- ProjectList: app/src/components/Layout/StructuredList.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: components/Code/RepoParts.jsx, components/Layout/ProjectFrame.jsx, screens/P04_Project.jsx, screens/P09_Publish.jsx

## components/Navigation

- Breadcrumb: app/src/components/Navigation/Breadcrumb.jsx
  - 이름표: breadcrumb
  - 쓰는 파일: app/App.jsx, components/Layout/ProjectFrame.jsx, screens/P09_Publish.jsx, screens/P14_Help.jsx, screens/P15_Requests.jsx, screens/P33_Profile.jsx
- Menu: app/src/components/Navigation/Menu.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: components/Code/DownloadMenu.jsx, components/Code/Drop.jsx, components/Identity/GlobalBar.jsx, components/Identity/Header.jsx, components/Layout/ProjectRow.jsx, screens/P01_Home.jsx, screens/P06_Changes.jsx, screens/P11_Organizations.jsx, screens/P17_Commit.jsx, screens/P25_Compare.jsx, screens/gl/GlDiff.jsx, screens/gl/GlFile.jsx, screens/gl/parts.jsx
- Pagination: app/src/components/Navigation/Pagination.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: 현재 미사용
- ProjectStateTabs: app/src/components/Navigation/ProjectStateTabs.jsx
  - 이름표: gl-tabs
  - 쓰는 파일: screens/P01_Home.jsx, screens/P11_Organizations.jsx
- ProjectTabs: app/src/components/Navigation/ProjectTabs.jsx
  - 이름표: product/repo_tabs
  - 쓰는 파일: 현재 미사용
- globalMenu, profileMenu, projectMenu, Sidebar: app/src/components/Navigation/Sidebar.jsx
  - 이름표: product/gitlab_sidebar, product/global_sidebar, sidebar-nav
  - 쓰는 파일: app/App.jsx
- Steps: app/src/components/Navigation/StepIndicator.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: 현재 미사용

## components/Write

- CommitDialog: app/src/components/Write/CommitDialog.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: screens/P23_Write.jsx

## screens/parts

- ActivityNotes: app/src/screens/parts/ActivityNotes.jsx
  - 이름표: profile-activity
  - 쓰는 파일: screens/P19_Issues.jsx
- CommentBox: app/src/screens/parts/CommentBox.jsx
  - 이름표: comment-editor
  - 쓰는 파일: screens/P19_Issues.jsx
- dailyCounts, CommitChart: app/src/screens/parts/CommitChart.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: screens/P21_Contributors.jsx
- EmptyArt: app/src/screens/parts/EmptyArt.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: screens/P19_Issues.jsx, screens/P20_MergeRequests.jsx, screens/P22_RepoSections.jsx
- FilterSearch: app/src/screens/parts/FilterSearch.jsx
  - 이름표: filter-search
  - 쓰는 파일: screens/P19_Issues.jsx, screens/P20_MergeRequests.jsx, screens/P22_RepoSections.jsx, screens/P30_Jobs.jsx
- ReuseAction: app/src/screens/parts/ReuseAction.jsx
  - 이름표: 호출부 전달 또는 미지정
  - 쓰는 파일: components/Layout/ProjectFrame.jsx
