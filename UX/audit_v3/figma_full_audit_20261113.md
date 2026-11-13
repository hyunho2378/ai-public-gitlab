# Figma 파일 전체 점검 (읽기 전용) 2026-11-13

범위: 페이지 0~14(Cover, Read me, Getting Started, Overview, Foundations, Components / Product, Screens 7개, Prototype, Decisions). 제외: KRDS Original 참조 페이지(15~35), Archive(36~50). 인스턴스 안쪽은 내려가지 않고 부품 정의와 화면 프레임 구조만 점검했다(인스턴스 12669개는 개수만). 수정 없음.

한계: 아이콘 내부와 이름이 icon으로 시작하는 노드 아래는 제외. 건수는 노드 수이고 같은 원인이 여러 변형에 반복되어 부풀려질 수 있다. id는 항목당 앞 6개. 점검 도중 한 번 스크립트 오류로 재집계했다.

## 1. 정중앙 정렬 (자식 하나인 가로 400, 세로 80 이하 상자)

| 항목 | 건수 | 노드 id 예 | 페이지별 |
|---|---|---|---|
| 점검 대상 상자 | 4182 | | |
| 오토레이아웃인데 primary/counter 중 하나라도 CENTER 아님 | 2391 | 11061:316341 Auth=Guest, Breakp MIN/MIN; 11061:316329 Header actions MIN/CENTER; 11061:316525 Auth=Signed-in, Br MIN/MIN; 11061:316465 Header actions MIN/CENTER; 11061:316518 내 계정 MIN/CENTER; 11115:452065 item text MIN/MIN | Product:520, Getting Started:471, R1 Repository (R-0:495, R1b Repository (R-:83, R2 Repository (R-1:393, G Global:147, A Add-ons:274, D Dashboard:8 |
| 자식 중심과 부모 중심 오차 0.5px 초과 | 980 | 11115:452065 item text dx76.5 dy0.0; 11115:452079 item text dx83.5 dy0.0; 11115:452083 item text dx50.5 dy0.0; 11115:452100 item text dx66.5 dy0.0; 11115:452110 item text dx76.5 dy0.0; 11115:452124 item text dx83.5 dy0.0 | Product:434, Getting Started:186, R1 Repository (R-0:135, R1b Repository (R-:21, R2 Repository (R-1:105, G Global:25, A Add-ons:68, D Dashboard:6 |
| 오토레이아웃 아님 | 4 | 11117:966517 Size=24; 11117:966523 Size=20; 11129:610119 product/brand_mois; 5282:36419 logo/KRDS-full | Product:3, Getting Started:1 |

오차 상위 이름: Frame #(182), md line(108), month slot(45), Page head(44), scope header(40), menu item(33), item / 멤버(27), item / 작업 항목(27)

정렬 미설정 상위 이름: Frame #(427), md line(368), cell(250), badge image(185), label row(74), tab wrap(65), bar wrap(56), Page head(48), nav row(48), month slot(45)

주의: 정렬 미설정 다수는 중앙이 필요 없는 래퍼일 수 있다. 오차는 실제 어긋남이다.

## 2. 크기 정책

| 항목 | 건수 | 노드 id 예 | 페이지별 |
|---|---|---|---|
| 부품 정의 홀수/소수 너비·높이 | 290 | 11117:966517 25x24; 11117:966523 21x20; 11061:316304 1920x65; 11061:316341 360x65; 11061:316440 1920x65; 11061:316525 360x65 | Product:48, Getting Started:1, R1 Repository (R-0:48, R1b Repository (R-:34, R2 Repository (R-1:70, G Global:36, A Add-ons:52, D Dashboard:1 |
| 부품·화면 안 프레임 홀수/소수 크기 | 10694 | 11117:966512 25x24; 11117:966518 21x20; 11061:316243 1920x65; 11061:316306 360x65; 11061:316343 1920x65; 11061:316379 289x36 | Product:136, Cover:1, Getting Started:5, R1 Repository (R-0:4589, R1b Repository (R-:2009, R2 Repository (R-1:1636, G Global:1028, A Add-ons:1268, D Dashboard:22 |
| 화면 최상위 프레임 홀수/소수 | 0 |  |  |
| icon 부품이 Hug | 3 | 11337:366128 icon grid; 11337:366943 icon grid; 11337:367143 icon grid | Foundations:3 |
| 글 상자 고정인데 렌더가 박스 밖으로 넘침 | 11 | 11337:366310; 11337:366598; 11337:366728; 11337:366742; 11337:366842; 11337:366907 | Foundations:7, R1 Repository (R-0:2, A Add-ons:2 |

홀수 프레임 상위 이름: diff line(2020), row(996), md row(708), footer spacer(465), md line(373), Body(242), Content panel(242), spacer(237)

## 3. 컴포넌트 목록 (화면 세트 제외, 페이지 0~5·14)

- 메인 컴포넌트/세트 총 255개: {"C":230,"S":25} (S=세트, 나머지=단독 컴포넌트)
- 페이지별: {"Getting Started":1,"Components / Pro":254}
- 속성 합계: variant 39, boolean 5, instance swap 0, text 7
- 설명 없음: 2개 / 있음 253
- 인스턴스 0개(쓰이지 않음): 5개 (Archive 포함 파일 전체 기준)
- 한글만 이름: 0개
- 같은 이름 중복: 0쌍 
- 같은 크기·같은 자식 구조 중복 후보: 2묶음

### 쓰이지 않는 부품

- 11115:452163 product/global_sidebar (변형 2)
- 11117:521649 product/menu (변형 9)
- 11141:691397 product/sidebar_item (변형 8)
- 11061:89755 product/issue_row (변형 2)
- 11061:89776 product/mr_row (변형 2)


### 설명 없는 부품 (인스턴스 많은 순 15)

- 4828:141030 .page_header 인스턴스 68
- 11328:50503 registration-calendar 인스턴스 7

### 한글만 이름



### 중복 후보 (크기+자식 동일)

- 11061:89755 product/issue_row = 11061:89776 product/mr_row
- 11129:732859 icon-ext/branch = 11129:732865 icon-ext/commit = 11129:732869 icon-ext/file-text = 11129:732873 icon-ext/file = 11129:732877 icon-ext/folder = 11129:732881 icon-ext/fork = 11129:732887 icon-ext/issues = 11129:732891 icon-ext/merge-request = 11129:732897 icon-ext/pipeline = 11129:732902 icon-ext/rocket = 11129:732907 icon-ext/star = 11129:732910 icon-ext/tag = 11171:4466 icon-ext/catalog = 11171:4471 icon-ext/cloud = 11171:4476 icon-ext/code = 11171:4479 icon-ext/deploy = 11171:4482 icon-ext/group = 11171:4487 icon-ext/history = 11171:4490 icon-ext/monitor = 11171:4494 icon-ext/pin = 11171:4497 icon-ext/project = 11171:4501 icon-ext/rocket-launch = 11171:4506 icon-ext/rss = 11171:4511 icon-ext/scale = 11171:4517 icon-ext/snippet = 11171:4522 icon-ext/sort-asc = 11171:4525 icon-ext/sort-desc = 11171:4528 icon-ext/sparkle = 11171:4532 icon-ext/users = 11213:150052 icon/plus = 11213:150055 icon/bell = 11245:713687 icon-ext/sliders = 11245:713697 icon-ext/expand = 11183:4356 icon-file/actionscript = 11183:4359 icon-file/android = 11183:4362 icon-file/angular-component = 11183:4365 icon-file/angular-directive = 11183:4368 icon-file/angular-guard = 11183:4371 icon-file/angular-pipe = 11183:4374 icon-file/angular-resolver = 11183:4377 icon-file/angular-service = 11183:4380 icon-file/angular = 11183:4383 icon-file/apiblueprint = 11183:4386 icon-file/applescript = 11183:4389 icon-file/appveyor = 11183:4393 icon-file/assembly = 11183:4396 icon-file/astro = 11183:4399 icon-file/audio = 11183:4402 icon-file/aurelia = 11183:4421 icon-file/autohotkey = 11183:4424 icon-file/autoit = 11183:4427 icon-file/babel = 11183:4430 icon-file/bithound = 11183:4435 icon-file/blink = 11183:4439 icon-file/bower = 11183:4451 icon-file/browserlist = 11183:4454 icon-file/bucklescript = 11183:4457 icon-file/c = 11183:4460 icon-file/cabal = 11183:4466 icon-file/cake = 11183:4469 icon-file/certificate = 11183:4472 icon-file/changelog = 11183:4475 icon-file/clojure = 11183:4481 icon-file/cmake = 11183:4486 icon-file/code-climate = 11183:4489 icon-file/coffee = 11183:4492 icon-file/coldfusion = 11183:4496 icon-file/conduct = 11183:4499 icon-file/console = 11183:4502 icon-file/contributing = 11183:4505 icon-file/cpp = 11183:4508 icon-file/credits = 11183:4511 icon-file/crystal = 11183:4514 icon-file/csharp = 11183:4517 icon-file/css-map = 11183:4521 icon-file/css = 11183:4524 icon-file/cucumber = 11183:4527 icon-file/cuda = 11183:4530 icon-file/dart = 11183:4536 icon-file/database = 11183:4539 icon-file/docker = 11183:4542 icon-file/document = 11183:4545 icon-file/drone = 11183:4550 icon-file/editorconfig = 11183:4561 icon-file/elixir = 11183:4564 icon-file/elm = 11183:4572 icon-file/email = 11183:4575 icon-file/erlang = 11183:4578 icon-file/eslint = 11183:4582 icon-file/exe = 11183:4585 icon-file/favicon = 11183:4588 icon-file/file = 11183:4591 icon-file/firebase = 11183:4594 icon-file/flash = 11183:4597 icon-file/flow = 11183:4600 icon-file/folder-git = 11183:4604 icon-file/font = 11183:4607 icon-file/fsharp = 11183:4612 icon-file/fusebox = 11183:4623 icon-file/git = 11183:4626 icon-file/gitlab = 11183:4632 icon-file/go = 11183:4637 icon-file/gradle = 11183:4640 icon-file/graphcool = 11183:4643 icon-file/graphql = 11183:4653 icon-file/groovy = 11183:4656 icon-file/gulp = 11183:4659 icon-file/h = 11183:4662 icon-file/hack = 11183:4668 icon-file/haml = 11183:4671 icon-file/handlebars = 11183:4674 icon-file/haskell = 11183:4680 icon-file/haxe = 11183:4695 icon-file/heroku = 11183:4698 icon-file/hpp = 11183:4702 icon-file/html = 11183:4705 icon-file/http = 11183:4708 icon-file/image = 11183:4711 icon-file/ionic = 11183:4716 icon-file/java = 11183:4719 icon-file/javascript-map = 11183:4724 icon-file/javascript = 11183:4727 icon-file/jenkins = 11183:4778 icon-file/json = 11183:4781 icon-file/julia = 11183:4787 icon-file/karma = 11183:4791 icon-file/key = 11183:4794 icon-file/kivy = 11183:4797 icon-file/kl = 11183:4800 icon-file/kotlin = 11183:4803 icon-file/laravel = 11183:4806 icon-file/less = 11183:4809 icon-file/lib = 11183:4812 icon-file/livescript = 11183:4820 icon-file/lock = 11183:4823 icon-file/log = 11183:4826 icon-file/lua = 11183:4832 icon-file/markdown = 11183:4835 icon-file/markojs = 11183:4843 icon-file/mathematica = 11183:4846 icon-file/matlab = 11183:4852 icon-file/mdx = 11183:4855 icon-file/merlin = 11183:4858 icon-file/mocha = 11183:4863 icon-file/mxml = 11183:4866 icon-file/ngrx-actions = 11183:4869 icon-file/ngrx-effects = 11183:4872 icon-file/ngrx-reducer = 11183:4875 icon-file/ngrx-state = 11183:4878 icon-file/nim = 11183:4881 icon-file/nix = 11183:4886 icon-file/nodejs = 11183:4889 icon-file/nodemon = 11183:4892 icon-file/npm = 11183:4895 icon-file/nunjucks = 11183:4898 icon-file/ocaml = 11183:4902 icon-file/pdf = 11183:4905 icon-file/perl = 11183:4908 icon-file/postcss = 11183:4915 icon-file/powerpoint = 11183:4918 icon-file/powershell = 11183:4921 icon-file/prettier = 11183:4947 icon-file/protractor = 11183:4957 icon-file/pug = 11183:5000 icon-file/puppet = 11183:5006 icon-file/purescript = 11183:5011 icon-file/python = 11183:5015 icon-file/r = 11183:5018 icon-file/raml = 11183:5021 icon-file/react = 11183:5024 icon-file/readme = 11183:5027 icon-file/reason = 11183:5030 icon-file/restql = 11183:5037 icon-file/riot = 11183:5042 icon-file/robot = 11183:5045 icon-file/rollup = 11183:5048 icon-file/ruby = 11183:5051 icon-file/rust = 11183:5054 icon-file/sass = 11183:5057 icon-file/sbt = 11183:5060 icon-file/settings = 11183:5063 icon-file/slim = 11183:5066 icon-file/smarty = 11183:5069 icon-file/snyk = 11183:5081 icon-file/solidity = 11183:5086 icon-file/stylelint = 11183:5095 icon-file/stylus = 11183:5098 icon-file/swc = 11183:5101 icon-file/swift = 11183:5104 icon-file/table = 11183:5107 icon-file/terraform = 11183:5112 icon-file/test-js = 11183:5115 icon-file/test-jsx = 11183:5118 icon-file/test-ts = 11183:5121 icon-file/tex = 11183:5127 icon-file/todo = 11183:5130 icon-file/travis = 11183:5156 icon-file/tune = 11183:5159 icon-file/twig = 11183:5162 icon-file/typescript-def = 11183:5167 icon-file/typescript = 11183:5170 icon-file/url = 11183:5173 icon-file/verilog = 11183:5176 icon-file/vfl = 11183:5182 icon-file/video = 11183:5185 icon-file/virtual = 11183:5188 icon-file/visualstudio = 11183:5191 icon-file/vscode = 11183:5194 icon-file/vue = 11183:5198 icon-file/watchman = 11183:5202 icon-file/webpack = 11183:5207 icon-file/wolframlanguage = 11183:5213 icon-file/word = 11183:5216 icon-file/xaml = 11183:5219 icon-file/xml = 11183:5222 icon-file/yaml = 11183:5225 icon-file/yang = 11183:5228 icon-file/yarn = 11183:5231 icon-file/zip

### 속성 많은 부품 상위 10

- 4828:141030 .page_header V0 B2 I0 T5 인스턴스 68
- 11061:316526 product/app_header V2 B1 I0 T2 인스턴스 727
- 11129:707539 product/gitlab_topbar V2 B2 I0 T0 인스턴스 1184
- 11061:89605 product/file_row V4 B0 I0 T0 인스턴스 3904
- 11129:707797 product/gitlab_sidebar V3 B0 I0 T0 인스턴스 519
- 11129:724081 product/explore_row V3 B0 I0 T0 인스턴스 587
- 11117:1000160 product/footer V2 B0 I0 T0 인스턴스 2029
- 11115:608531 product/dock_panel V2 B0 I0 T0 인스턴스 3
- 11141:691397 product/sidebar_item V2 B0 I0 T0 인스턴스 0
- 11061:89695 product/commit_bar V2 B0 I0 T0 인스턴스 155

## 4. 화면

| 페이지 | 세트 | 변형 | 프레임 | 기타 |
|---|---|---|---|---|
| Screens / R1 Repository (R-01~ | 7 | 81 | 0 | 0 |
| Screens / R1b Repository (R-08 | 8 | 86 | 0 | 0 |
| Screens / R2 Repository (R-16~ | 15 | 162 | 0 | 0 |
| Screens / G Global | 16 | 156 | 0 | 0 |
| Screens / A Add-ons | 11 | 110 | 0 | 0 |
| Screens / D Dashboard | 1 | 3 | 0 | 0 |
| Screens / P-09 New project and | 0 | 0 | 0 | 1 |
| Prototype / Task flows | 0 | 0 | 0 | 11 |
| 합계 | 58 | 598 | | |

| 항목 | 건수 | 노드 id 예 | 페이지별 |
|---|---|---|---|
| 풀린 그룹(GROUP 노드) | 77 | 11117:1129739 group; 11117:1129751 Clip path group; 11117:1129749 clip_1; 11117:1129740 group; 11129:610121 group; 11129:610133 Clip path group | Product:62, Getting Started:15 |
| 부품 이름과 같은 일반 프레임(풀린 인스턴스 추정) | 0 |  |  |
| 같은 구조 프레임 3개 이상 반복(부모 수) | 571 | 11117:521574 menu item x8; 11117:521591 menu item x4; 11117:521605 menu item x3; 11117:521612 menu item x3; 11117:521619 menu item x3; 11117:521626 menu item x3 | Product:21, Getting Started:7, Foundations:1, R1 Repository (R-0:287, R1b Repository (R-:24, R2 Repository (R-1:80, G Global:58, A Add-ons:92, D Dashboard:1 |
| 반복에 속한 프레임 합계 | 7156 | | |

반복 상위 이름: md table(111), Diff file(100), README(51), Preview(42), comment(28), Tabs(24), image row group(23), Events(20), Changed file(14), tree list(12)

P-09와 Prototype 페이지는 컴포넌트 세트가 아닌 일반 프레임이다.

## 5. 금지 양식

| 항목 | 건수 | 노드 id 예 | 페이지별 |
|---|---|---|---|
| 가운뎃점(·) 일반 글 | 1981 | 11351:481043 "product/brand_logo ·"; 11115:608491 "모두 파싱해버리겠다 — HWP·HWP"; 11115:750729 "모두 파싱해버리겠다 — HWP·HWP"; 11126:608822 "모두 파싱해버리겠다 — HWP·HWP"; 11126:608881 "모두 파싱해버리겠다 — HWP·HWP"; 11126:608941 "모두 파싱해버리겠다 — HWP·HWP" | Product:44, Read me:1, R1 Repository (R-0:750, R1b Repository (R-:631, R2 Repository (R-1:414, G Global:91, A Add-ons:50 |
| 가운뎃점 README/마크다운 예시 원문 | 2322 | 11129:748407 "HWP 3.x·5.x, HWPX, H"; 11129:748409 "English · 상세 사용법 · 벤"; 11129:748412 "같은 법령 별표를 HWP·HWPX·P"; 11129:748414 "같은 법령 별표 한 건을 HWP·HW"; 11129:748416 "·"; 11129:748419 "·" | R1 Repository (R-0:1660, R1b Repository (R-:42, A Add-ons:620 |
| 이모지 | 59 | 11129:610163; 11129:610193; 11222:94311; 11222:94328; 11047:2566; 11047:2568 | Product:4, Getting Started:5, R1 Repository (R-0:10, R1b Repository (R-:40 |
| 이모지 README 원문 | 111 | 11129:748417; 11129:748422; 11129:748550; 11129:751319; 11129:751324; 11129:751452 | R1 Repository (R-0:81, A Add-ons:30 |
| 줄표(— –) | 647 | 11115:608491 "모두 파싱해버리겠다 — HWP·HWP"; 11115:750729 "모두 파싱해버리겠다 — HWP·HWP"; 11126:608822 "모두 파싱해버리겠다 — HWP·HWP"; 11126:608881 "모두 파싱해버리겠다 — HWP·HWP"; 11126:608941 "모두 파싱해버리겠다 — HWP·HWP"; 11126:609001 "모두 파싱해버리겠다 — HWP·HWP" | Product:6, R1 Repository (R-0:203, R1b Repository (R-:418, R2 Repository (R-1:10, A Add-ons:10 |
| 줄표 README 원문 | 107 | 11129:748524 "우리 기관 문서 몇 건으로 서식 묶음"; 11129:751426 "우리 기관 문서 몇 건으로 서식 묶음"; 11129:753326 "우리 기관 문서 몇 건으로 서식 묶음"; 11129:754338 "우리 기관 문서 몇 건으로 서식 묶음"; 11129:755363 "우리 기관 문서 몇 건으로 서식 묶음"; 11129:756375 "우리 기관 문서 몇 건으로 서식 묶음" | R1 Repository (R-0:27, R1b Repository (R-:42, R2 Repository (R-1:28, A Add-ons:10 |
| 알약(반지름이 높이 절반 이상, 이름 예외 제외) | 5 | 11115:750768 sheet handle 40x4 r2; 11126:608937 sheet handle 40x4 r2; 11126:608997 sheet handle 40x4 r2; 5218:2092 image 99x60 r2571.42822265625; 5218:2098 image 99x60 r2571.42822265625 | Product:3, Getting Started:2 |
| 용도 불명 프레임 테두리(장식 추정) | 912 | 11129:707396 key; 11129:707439 key; 11222:8079 key; 11222:8104 key; 11351:460507 Diff file; 11047:3109 Frame 1430105400 | Product:4, Cover:1, Getting Started:72, Overview / At a gl:56, R1 Repository (R-0:177, R1b Repository (R-:347, R2 Repository (R-1:159, G Global:50, A Add-ons:46 |
| 불투명도 1 미만 채움(연한 채움 추정) | 1017 | 11061:316246; 11115:724520; 11061:316307; 11061:316322; 11061:316330; 11061:316346 | Product:106, Cover:2, Getting Started:21, R1 Repository (R-0:152, R1b Repository (R-:272, R2 Repository (R-1:277, G Global:112, A Add-ons:75 |
| 변수 미연결 채움 | 53 | 11047:2550; 11047:2554; 11047:2565; 11047:2583; 11047:2593; 11047:2594 | Getting Started:36, R1 Repository (R-0:10, R1b Repository (R-:7 |
| 변수 미연결 테두리 | 0 |  |  |
| 변수 미연결 글자색 | 10 | 11347:920367; 11347:920371; 11347:920375; 11347:920379; 11347:920383; 11347:920387 | R1 Repository (R-0:10 |
| 글자 스타일 미연결 | 72 | 11353:486749; 11047:2555; 11047:2557; 11047:2562; 11047:2566; 11047:2568 | Product:1, Getting Started:35, R1 Repository (R-0:13, G Global:7, A Add-ons:16 |
| 글자 스타일 혼합 | 715 | 11129:748414; 11129:748417; 11129:748420; 11129:748428; 11129:748436; 11129:748446 | R1 Repository (R-0:457, R1b Repository (R-:14, R2 Repository (R-1:14, G Global:40, A Add-ons:190 |
| 소수 좌표/크기 프레임 | 1716 | 11117:983830; 11117:983832; 11117:983834; 11117:983836; 11117:983838; 11117:983842 | Product:719, Cover:1, Getting Started:37, Overview / At a gl:22, Foundations:1, R1 Repository (R-0:631, R1b Repository (R-:36, R2 Repository (R-1:52, G Global:51, A Add-ons:166 |
| 소수 좌표/크기 글 | 2307 | 11047:2784; 11047:2512; 11047:2508; 11047:2537; 11047:2541; 11337:366119 | Getting Started:5, Foundations:1, R1 Repository (R-0:1462, R1b Repository (R-:4, R2 Repository (R-1:10, G Global:33, A Add-ons:792 |

상위 이름
- 가운뎃점: meta(848), code(420), text(120), desc(108), message(70), name(60)
- 테두리: Release v#.#.#(200), Diff file(101), sort direction(75), Frame #(72), sort(65), shot(56), vote(30), comment(28)
- 연한 채움: button(335), tab(290), tab__atomic(169), file button / 편집(14), code-button(14), button / 표시(12), button / 파일 찾아보기(10), button / 옵션(10)
- 소수 좌표(프레임): badge image(147), fold button(100), copy button(100), spacer(100), more button(100), image row(69), screenshot image(35), Login columns(30)
- 변수 미연결 채움: Frame #(15), avatar(10), group(9), Rectangle #(7), pill(7), box(3)

## 6. 이름

| 항목 | 건수 | 노드 id 예 | 페이지별 |
|---|---|---|---|
| 기본 이름 프레임/부품 | 584 | 11047:2561 Frame 1430105343; 11047:2564 Frame 1430105343; 11047:2565 Frame 1430105322; 11047:2567 Frame 1430105325; 11047:2569 Frame 1430105324; 11047:2571 Frame 1430105323 | Getting Started:584 |
| 기본 이름 도형 | 164 | 11047:2560 Line 174; 11047:2587 Line 174; 11047:2594 Rectangle 20041; 11047:2600 Line 177; 11047:2604 Line 175; 11047:2638 Line 176 | Getting Started:124, R2 Repository (R-1:40 |

기본 이름 상위: Frame #(554), Group (26), Group #(3), Frame(1)

한글만 이름 부품, 같은 이름 중복 부품은 3절.
