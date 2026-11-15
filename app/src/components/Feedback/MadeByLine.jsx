// Figma: Feedback/Made by line
// UX/23 5-1: AI가 만든 자리 작성 주체 고지. Spark mark 16 + 'AI 정리, 원천' + 수집일(Layout/Data basis 짧은형)
import { SparkMark } from '../Assistant/SparkMark';
import './trust.css';

export function MadeByLine({ text, children }) {
  return (
    <p className="rb-madeby krds-text-body-xsmall" data-figma="Feedback/Made by line">
      <SparkMark />
      <span>{text}</span>
      {children}
    </p>
  );
}
