// Figma: Assistant/Turn question
// UX/23 3-10-4: 오른쪽 정렬, 최대 폭 85%, gray-5 면, 모서리 12, 위에 모드 라벨. 질문 등장 120ms
import { a } from '../../copy/ai';

export function TurnQuestion({ text, mode }) {
  return (
    <div className="rb-ai-q" data-figma="Assistant/Turn question" data-mode={mode === 'similar' ? 'Build' : 'Task'}>
      <span className="rb-ai-q-mode krds-text-body-xsmall">{mode === 'similar' ? a.A_modeBuild : a.A_modeTask}</span>
      <p className="rb-ai-q-text krds-text-body-small">{text}</p>
    </div>
  );
}
