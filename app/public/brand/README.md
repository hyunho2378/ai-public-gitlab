# 로고

## 상단 바 상징(2026. 11. 13. 변경)
- mois-emblem.svg: 행정안전부 상징 태극 엠블럼만, 글자 없음. mois-logo.svg의 원 둘레, 정부청색, 정부적색 세 도형, 보기 상자 60.16 정사각
- 화면 부품: app/src/components/Identity/Logo.jsx(같은 도형 인라인)
- 자리: 상단 바 왼쪽 홈 링크, 상징 높이 24 + '공공 깃랩' 글자(KRDS 본문 15 굵게, 줄 높이 22), 사이 8, 세로 가운데 정렬
- 이전 로고: GitLab 여우 로고와 영역 이름('탐색'), 상단 바에서 제외

## 행정안전부 로고 원본
- 출처: 행정안전부 누리집 기관소개 > 기관문양(MI) 내려받기, https://www.mois.go.kr/frt/sub/a07/miBanner/screen.do, 2026. 10. 30. 확인
- 변환: 공식 .ai 파일 '행정안전부_국_상하.ai', '행정안전부_국_좌우.ai'에서 PyMuPDF로 SVG 추출, 여백 제거
- mois-logo.svg: 상하 조합(위 태극, 아래 글자), 80x88, 글자 색 #575756
- mois-logo-inline.svg: 같은 그림, 글자 부분만 currentColor
- mois-logo-horizontal*.svg: 좌우 조합, 213x61
- 색: 정부청색 #023863, 정부적색 #e4042e, 정부회색 #575756, 태극 둘레 흰색 #ffffff, KRDS 팔레트 규칙의 예외(상징 고유색)
- 로그인 화면 자리: 왼쪽 열 가운데(D-12), 판이나 흰 상자 없이 어두운 화면 위

## GitLab 로고(보관)
- gitlab-logo.svg: 공공 깃랩(https://gitlab.aigov.go.kr) 머리글 로고 추출본, 출처 gitlab-logo.source.html(2026. 10. 30. 확인)
- 쓰임: 없음(상단 바 상징 변경 뒤 보관만)
