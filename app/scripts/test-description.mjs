// D-21 설명 전체를 보존하고 화면에서만 두 줄 말줄임한다.
import assert from 'node:assert/strict';
import { cleanDescription } from '../src/components/Layout/description.js';
assert.equal(cleanDescription('[공공행정] 첫 문장.\r\n\r\n둘째 문장.'), '첫 문장. 둘째 문장.');
assert.equal(cleanDescription('[공공행정] 첫 문장.\n둘째 문장.'), '첫 문장. 둘째 문장.');
assert.equal(cleanDescription('한국어 설명 | English description'), '한국어 설명');
assert.equal(cleanDescription('한국어 설명 | 한국어 부연'), '한국어 설명 / 한국어 부연');
assert.equal(cleanDescription(null), '');
console.log('PASS: description 5 cases (multiline preserved, bilingual cleanup retained)');
