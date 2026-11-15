// Figma: Assistant/Suggestion row
// UX/23 3-10-3: 예시 질문 행(높이 40, 검색 아이콘 16, 오른쪽 모드 라벨). 누르면 모드 전환과 실제 검색
import { a } from '../../copy/ai';
import { Icon } from '../Code/Icon';

export function SuggestionRow({ label, mode, onPick }) {
  return (
    <li>
      <button type="button" className="rb-ai-suggest" data-figma="Assistant/Suggestion row" data-mode={mode === 'similar' ? 'Build' : 'Task'} onClick={() => onPick(label, mode)}>
        <Icon name="search" />
        <span className="rb-ai-suggest-text">{label}</span>
        <span className="rb-ai-suggest-mode krds-text-body-xsmall">{mode === 'similar' ? a.A_modeBuild : a.A_modeTask}</span>
      </button>
    </li>
  );
}
