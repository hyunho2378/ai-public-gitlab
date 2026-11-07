// 현황판 공개 API를 한 번 받아 public/data/dashboard.json 으로 저장한다(시안과 피그마 기준 자료).
import fs from 'node:fs';
import { trimDashboard } from '../src/data/trim.js';
const src = process.argv[2];
const raw = src ? JSON.parse(fs.readFileSync(src, 'utf8')) : await (await fetch('https://axboard.aigov.go.kr/api/dashboard')).json();
const out = trimDashboard(raw);
fs.writeFileSync(new URL('../public/data/dashboard.json', import.meta.url), JSON.stringify(out));
console.log('saved', out.generatedAt, out.projects.length, 'projects');
