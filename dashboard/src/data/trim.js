// 현황판 API 응답에서 화면에 쓰는 항목만 남긴다. 이메일, 커밋 메시지, 이슈 본문은 버린다.
export function trimDashboard(d) {
  const projects = (d.projects || []).map((p) => ({
    id: p.id,
    name: p.name,
    description: p.description || '',
    owner: p.namespace?.name || '',
    web_url: p.web_url,
    star_count: p.star_count || 0,
    forks_count: p.forks_count || 0,
    created_at: p.created_at,
    last_activity_at: p.last_activity_at,
    visibility: p.visibility,
  }));
  const projectStats = {};
  for (const [id, s] of Object.entries(d.projectStats || {})) {
    projectStats[id] = {
      openedIssues: s.openedIssues || 0,
      closedIssues: s.closedIssues || 0,
      totalCommits: s.totalCommits ?? s.recentCommits ?? 0,
      languages: s.languages || {},
    };
  }
  return {
    generatedAt: d.generatedAt,
    totalProjects: d.totalProjects,
    activeProjects: d.activeProjects,
    publicProjectCount: d.publicProjectCount,
    privateProjectCount: d.privateProjectCount,
    internalProjectCount: d.internalProjectCount,
    totalUsers: d.totalUsers,
    projects,
    projectStats,
    recentIssues: (d.recentIssues || []).map((i) => ({ id: i.id, iid: i.iid, project_id: i.project_id, title: i.title, created_at: i.created_at, web_url: i.web_url })),
    recentCommitDates: (d.recentCommits || []).map((c) => c.created_at),
  };
}
