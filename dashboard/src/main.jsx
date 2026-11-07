import { createRoot } from 'react-dom/client';
import './styles/fonts.css';
import './styles/dash.tokens.css';
import './styles/app.css';
import { App } from './App';

// 선명한 화면 모드: 운영체제의 대비 높임 설정을 따른다(KRDS 두 모드 지원)
const more = matchMedia('(prefers-contrast: more)');
const applyMode = () => { document.documentElement.dataset.krdsMode = more.matches ? 'high-contrast' : 'light'; };
applyMode();
more.addEventListener('change', applyMode);

createRoot(document.getElementById('root')).render(<App />);
