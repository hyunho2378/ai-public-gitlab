// Figma: Assistant/Spark mark
// UX/22 G6: ext/sparkle 단색 primary-50, 16과 24 두 크기. 회전 없음, 처리 중만 opacity 맥박(Pulse). AI 자리 6곳만
import '../Feedback/trust.css';

const BASE = import.meta.env.BASE_URL || '/';

export function SparkMark({ size = 16, pulse = false }) {
  const url = `url(${BASE}icons/ext/sparkle.svg)`;
  return (
    <span
      className={`rb-spark${size === 24 ? ' is-24' : ''}${pulse ? ' is-pulse' : ''}`}
      data-figma="Assistant/Spark mark"
      data-motion={pulse ? 'Pulse' : 'Static'}
      aria-hidden="true"
      style={{ WebkitMaskImage: url, maskImage: url }}
    />
  );
}
