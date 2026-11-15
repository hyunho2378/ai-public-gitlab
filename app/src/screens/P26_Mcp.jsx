// A-07 AI 코딩 도구 연결(F5, UX/23 3-5). 3단계 안내: 도구 선택, 설정 복사, 질문으로 확인. 서버 호출 없음(도구 3개 이름은 server/src/mcp-tools.js TOOLS와 같은 고정 글자)
// 개인 경로와 인증정보 없음(<저장소 경로> 자리 글자). 연결 성공이나 자동 검색을 뜻하는 표시 없음
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { a } from '../copy/ai';
import { loadCards } from '../api/cards';
import { useData } from '../api/useData';
import { Page } from '../components/Layout/Page';
import { DataBasis } from '../components/Layout/DataBasis';
import { CopyBlock } from '../components/Code/CopyBlock';
import { Icon } from '../components/Code/Icon';
import { useAssistant } from '../components/Assistant/AssistantContext';
import './parts/a02.css';
import './parts/a03.css';
import './parts/a07.css';

const EXAMPLE_ID = 615;
const PATH_MARK = a.Mcp_pathMark;
const CONFIG = `{
  "mcpServers": {
    "public-gitlab": {
      "command": "node",
      "args": ["${PATH_MARK}/server/src/mcp-stdio.js"]
    }
  }
}`;
const TOOLS = [
  { name: 'search_projects', fn: a.Mcp_fnSearch, ask: a.Mcp_ask1, mode: 'task' },
  { name: 'get_project', fn: a.Mcp_fnGet, ask: a.Mcp_ask2(EXAMPLE_ID), mode: null },
  { name: 'find_similar', fn: a.Mcp_fnSimilar, ask: a.Mcp_ask3, mode: 'similar' },
];

export default function Mcp() {
  const store = useData(loadCards, []).data;
  const meta = store?.meta || {};
  const ai = useAssistant();
  const [statusOpen, setStatusOpen] = useState(false);
  const parts = CONFIG.split(PATH_MARK);
  return (
    <Page id="A-07" title={a.Mcp_title} state="Ideal">
      <div className="rb-one-col rb-a07" data-figma="mcp-guide">
        <div>
          <h1 className="krds-text-heading-small rb-q-title">{a.Mcp_title}</h1>
          <p className="krds-text-body-xsmall rb-subtle">{a.Mcp_hint}</p>
        </div>
        {store ? <DataBasis>{a.Mcp_basis(meta.fetchedDate, meta.count, meta.version)}</DataBasis> : null}
        <ol className="rb-mcp-steps" aria-label={a.Mcp_steps} data-figma="Navigation/Steps">
          <li className="rb-mcp-step">
            <h2 className="krds-text-body-medium-bold"><span className="rb-mcp-num">1</span>{a.Mcp_step1}</h2>
            <fieldset className="rb-reuse-stages">
              <legend className="krds-text-body-xsmall-bold">{a.Mcp_toolLabel}</legend>
              <div className="krds-form-check"><input id="rb-mcp-claude" type="radio" name="rb-mcp-tool" checked readOnly /><label htmlFor="rb-mcp-claude">{a.Mcp_toolClaude}</label></div>
            </fieldset>
            <p className="krds-text-body-xsmall-bold">{a.Mcp_readyTitle}</p>
            <ul className="rb-mcp-ready krds-text-body-small">{a.Mcp_ready.map((x) => <li key={x}>{x}</li>)}</ul>
          </li>
          <li className="rb-mcp-step">
            <h2 className="krds-text-body-medium-bold"><span className="rb-mcp-num">2</span>{a.Mcp_step2}</h2>
            <CopyBlock text={CONFIG} label={a.Mcp_step2} toastText={a.Mcp_copied}>{parts[0]}<b>{PATH_MARK}</b>{parts[1]}</CopyBlock>
            <p className="krds-text-body-xsmall rb-subtle">{a.Mcp_edit}</p>
          </li>
          <li className="rb-mcp-step">
            <h2 className="krds-text-body-medium-bold"><span className="rb-mcp-num">3</span>{a.Mcp_step3}</h2>
            <ul className="rb-mcp-tools">
              {TOOLS.map((tool, i) => (
                <li key={tool.name} className="rb-mcp-tool">
                  <p className="rb-mcp-toolhead"><code>{tool.name}</code><span className="krds-text-body-small-bold">{tool.fn}</span></p>
                  <CopyBlock text={tool.ask} label={tool.fn} />
                  <p className="krds-text-body-xsmall"><b>{a.Mcp_check}</b> {a.Mcp_checks[i]}</p>
                  <p className="krds-text-body-xsmall"><b>{a.Mcp_source}</b> {a.Mcp_sources[i]}</p>
                  {tool.mode ? <p><button type="button" className="krds-btn text small" onClick={() => ai.prefill(tool.ask, tool.mode)}>{a.A_askWeb}</button></p> : <p><Link className="krds-btn text small" to={`/projects/${EXAMPLE_ID}/about`}>{a.A_askWeb}</Link></p>}
                </li>
              ))}
            </ul>
          </li>
        </ol>
        <section className="rb-pc-group">
          <ul className="rb-pc-list">
            <li className="rb-pc-item">
              <button type="button" className="rb-pc-head" aria-expanded={statusOpen} aria-controls="rb-mcp-status" onClick={() => setStatusOpen(!statusOpen)}>
                <span className="krds-text-body-small-bold">{a.Mcp_statusTitle}</span>
                <Icon name="arrow-down" />
              </button>
              {statusOpen ? (
                <div id="rb-mcp-status" className="rb-md-scroll rb-pc-body" tabIndex={0}>
                  <table className="tbl data rb-mcp-table">
                    <thead><tr>{a.Mcp_statusHead.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
                    <tbody>{a.Mcp_status.map(([k, m, w]) => <tr key={k}><td><code>{k}</code></td><td>{m}</td><td>{w}</td></tr>)}</tbody>
                  </table>
                </div>
              ) : null}
            </li>
          </ul>
        </section>
        <section className="rb-demo">
          <h2 className="krds-text-body-small-bold">{a.Mcp_demoTitle} <span className="rb-subtle krds-text-body-xsmall">{a.D_example}</span></h2>
          <CopyBlock text={a.Mcp_demoAsk} label={a.Mcp_demoTitle} />
          <ol className="rb-mcp-ready krds-text-body-small">{a.Mcp_demoSteps.map((x) => <li key={x}>{x}</li>)}</ol>
        </section>
        <p className="krds-text-body-xsmall"><Link className="krds-link" to="/search">{a.Mcp_webSearch}</Link> <Link className="krds-link" to="/help">{a.Mcp_help}</Link></p>
      </div>
    </Page>
  );
}
