# 현황판 수치 파일 계약(F6)

- 작성일: 2026. 11. 14.
- 작성: 주현호
- 만드는 쪽: 김민우 `scripts/cards/build.mjs`
- 읽는 쪽: 주현호 `dashboard/src/data/loadMetrics.js`, `dashboard/src/components/CardMetrics.jsx`
- 화면 설계: [UX/20_3차_추가화면_설계.md](../UX/20_3차_추가화면_설계.md) 11장
- 기준 문서: 공공 GitLab 탐색 및 재사용 지원 기능기획안(2026. 11. 13.) 2장 현황판 지표, F6

## 1. 파일 경로 결정

- 경로: `dashboard/public/data/metrics.json`
- 배포 주소: `/ai-public-gitlab/dashboard/data/metrics.json`(현황판 `build:pages`가 `app/dist/dashboard`로 복사)
- 선택 이유 1: 현황판 개발 서버(`npm run dev`, 5801)와 배포본이 같은 상대 경로(`import.meta.env.BASE_URL + 'data/metrics.json'`)로 읽기
- 선택 이유 2: 기존 저장 자료 `dashboard/public/data/dashboard.json`과 같은 폴더, 읽기 코드 방식 동일
- 선택 이유 3: `app/public/data/`에 두면 현황판 개발 서버에서 읽히지 않고 배포 경로 조합(`VITE_GITLAB_URL`)이 필요
- 탈락안: `app/public/data/metrics.json`
- 폴더 담당 예외: `dashboard/`는 주현호 담당, 이 파일 하나만 김민우 `build.mjs`가 기록(CONTRIBUTING.md 파일 담당 표에 한 줄 추가)

## 2. 만드는 순서

1. `fetch.mjs`: 재수집, `data/cards/_meta.json` 수집일 갱신
2. 카드 생성과 검수: `prepare.mjs`, AI 정리, `apply.mjs`, `progress.mjs`
3. 자료 버전 부여: 검수 끝난 뒤 `_meta.json`에 `dataVersion` 기록
4. `build.mjs` 한 번 실행: `app/public/data/cards.min.json`과 `dashboard/public/data/metrics.json`을 같은 실행에서 함께 기록
5. PR 검사: 두 파일의 `dataVersion`과 `fetchedDate`가 같은지 확인(검사 스크립트 추가 제안, 결정 필요 3)

- 금지: 한쪽 파일만 다시 만들기, 손으로 수치 고치기, 이전 수집본 수치와 섞기

## 3. 공통 규칙

- 집계 단위: 프로젝트 하나당 한 번, 공공 깃랩 프로젝트 번호(id) 기준 중복 제거
- 전체 수: 수집 대상 고유 프로젝트 수, 카드 생성 실패 포함, 삭제 예약 제외
- count: 정수, 실제 0이면 0
- null: 집계 불가(자료 누락 또는 계산 불가), 0으로 변경 금지
- denominator: 비율의 분모 정수, 분모가 0이면 ratio는 null(화면 "산정 불가")
- ratio: count ÷ denominator, 소수 넷째 자리 반올림, 화면은 백분율 소수 첫째 자리
- 비율 합: 반올림 때문에 합이 1이 아닐 수 있음, 검사는 count 합으로
- reason: null 값이 있을 때만 집계 불가 이유 글자(화면 미표시, 검수용)
- 이름 표기: 분야 이름은 화면과 같은 빗금 표기, 가운뎃점 금지
- 시연 자료: F7 예시 문서, F8 임시 기록과 사전 예시, F9 예시 점검표는 계산 대상 아님

## 4. 필드 정의

### 4-1. 머리 칸

- schemaVersion: 계약 판 번호, 지금 1
- dataVersion: 검수한 자료 버전 글자, `cards.min.json`의 `meta.dataVersion`과 같은 값
- fetchedDate: 수집일(YYYY-MM-DD), 화면 "수집" 날짜, 원본 최신성 보장 날짜 아님
- builtAt: 파일 생성 시각(ISO), 화면 미표시
- scope.source: 수집 대상 이름, 글자
- scope.total: 전체 수(3장 정의)
- scope.excluded: 제외 기준별 건수 객체(예 삭제 예약)
- scope.complete: 수집 실패 구간이 없으면 true, 하나라도 있으면 false
- scope.missing: 수집 못 한 구간 설명 글자 배열, 없으면 빈 배열

### 4-2. total

- 뜻: 전체 공개 프로젝트
- count: scope.total과 같은 값
- 정의: 실제 수집한 고유 프로젝트 수, 생성 실패 포함

### 4-3. sourceField(분류 전, 원천 분야 표시)

- 뜻: 수집 원문에 분야 표시가 있는지
- present: 분야 표시 있음 확인 건수
- absent: 분야 표시 없음 확인 건수
- unknown: 표시 여부 미확인 건수(원문 접근 실패 포함), 분모 밖
- denominator: present.count + absent.count
- 대표 비율: absent.ratio = absent.count ÷ denominator
- 판정 원천: 설명 앞 분야 표기와 주제(topics), README 분야 줄(`taxonomy.mjs` 규칙) 중 확정안(결정 필요 1)
- 검사: present + absent + unknown = total

### 4-4. fieldAfter(분류 후)

- 뜻: 서비스가 부여한 업무 분야 상태
- confirmed: 확정 분야 배열, 항목 `{name, count, ratio}`, 건수 많은 순
- confirmedTotal: 확정 분야 건수 합 `{count, ratio}`
- check: 분류 확인 필요 `{count, ratio}`
- none: 미분류 `{count, ratio}`
- denominator: total.count
- 카드 칸 대응: 확정은 `fields.v` 있음과 `fields.check` 없음, 확인 필요는 `fields.check=true`, 미분류는 `fields.v=null`과 check 없음
- 검사: confirmed 합 + check + none = total

### 4-5. basis(하는 일 근거)

- 뜻: 소개 카드 하는 일 항목의 근거 구분
- readme: README 기반 `{count, ratio}`
- code: 코드 추정 `{count, ratio}`
- none: 정보 부족 `{count, ratio}`, 생성 실패 카드 포함
- denominator: total.count
- 카드 칸 대응: 카드 `basis`(= `oneLine.b`)
- 금지: 다른 항목(실행 형태, 이용 조건 등) 근거 수 더하기
- 검사: readme + code + none = total

### 4-6. cardStatus(카드 생성 상태)

- 뜻: 카드 생성 처리 결과
- ok: 정상 생성, 근거 있는 항목 1개 이상 `{count, ratio}`
- thin: 자료 부족, 처리 끝, 모든 항목 정보 부족 `{count, ratio}`
- failed: 생성 실패 `{count, ratio}`
- denominator: total.count
- 근거 있는 항목: `b`가 readme 또는 code이고 값이 null 아닌 항목
- 검사: ok + thin + failed = total

### 4-7. readmeState(README 원천 상태)

- 뜻: README 존재 여부
- present: 있음 확인(기본 템플릿 포함, 결정 필요 2) `{count}`
- absent: 없음 확인 `{count}`
- unknown: 미확인(원문 접근 실패 포함) `{count}`
- 검사: present + absent + unknown = total
- 화면: 현황판 E 지표 계산 바탕, 별도 구역 없음

### 4-8. noReadmeCards(README 없는 카드 생성)

- 뜻: README 없음 확인 프로젝트 중 근거 있는 카드 생성 수
- withEvidence: README 없음 확인이면서 cardStatus ok `{count, ratio}`, 대표 수치
- thin: README 없음 확인이면서 자료 부족 `{count, ratio}`
- failed: README 없음 확인이면서 생성 실패 `{count, ratio}`
- denominator: readmeState.absent.count
- readmeUnknown: README 미확인 건수, 분모 밖 별도 표시
- 검사: withEvidence + thin + failed = readmeState.absent
- 금지: 실제 이용, 기관 도입, 예산 절감 실적으로 표시

## 5. 예시 JSON(예시 값, 실제 수치 아님)

```json
{
  "schemaVersion": 1,
  "dataVersion": "2026-10-30-r1",
  "fetchedDate": "2026-10-30",
  "builtAt": "2026-11-15T09:00:00.000Z",
  "scope": {
    "source": "공공 깃랩 공개 프로젝트",
    "total": 728,
    "excluded": { "deletionScheduled": 0 },
    "complete": true,
    "missing": []
  },
  "total": { "count": 728 },
  "sourceField": {
    "present": { "count": 160, "ratio": 0.2614 },
    "absent": { "count": 452, "ratio": 0.7386 },
    "unknown": { "count": 116 },
    "denominator": 612
  },
  "fieldAfter": {
    "confirmed": [
      { "name": "생성형 AI/챗봇", "count": 98, "ratio": 0.1346 },
      { "name": "문서/보고서", "count": 96, "ratio": 0.1319 },
      { "name": "데이터/분석", "count": 88, "ratio": 0.1209 },
      { "name": "사무 자동화", "count": 82, "ratio": 0.1126 },
      { "name": "민원/복지", "count": 62, "ratio": 0.0852 },
      { "name": "출장/회계", "count": 58, "ratio": 0.0797 },
      { "name": "시설/안전", "count": 50, "ratio": 0.0687 },
      { "name": "인사/교육", "count": 44, "ratio": 0.0604 },
      { "name": "개발/인프라", "count": 32, "ratio": 0.044 },
      { "name": "법령/감사", "count": 30, "ratio": 0.0412 }
    ],
    "confirmedTotal": { "count": 640, "ratio": 0.8791 },
    "check": { "count": 52, "ratio": 0.0714 },
    "none": { "count": 36, "ratio": 0.0495 },
    "denominator": 728
  },
  "basis": {
    "readme": { "count": 520, "ratio": 0.7143 },
    "code": { "count": 96, "ratio": 0.1319 },
    "none": { "count": 112, "ratio": 0.1538 },
    "denominator": 728
  },
  "cardStatus": {
    "ok": { "count": 690, "ratio": 0.9478 },
    "thin": { "count": 26, "ratio": 0.0357 },
    "failed": { "count": 12, "ratio": 0.0165 },
    "denominator": 728
  },
  "readmeState": {
    "present": { "count": 572 },
    "absent": { "count": 128 },
    "unknown": { "count": 28 }
  },
  "noReadmeCards": {
    "withEvidence": { "count": 94, "ratio": 0.7344 },
    "thin": { "count": 22, "ratio": 0.1719 },
    "failed": { "count": 12, "ratio": 0.0938 },
    "denominator": 128,
    "readmeUnknown": 28
  }
}
```

- 예시 합 확인: sourceField 160 + 452 + 116 = 728, fieldAfter 640 + 52 + 36 = 728, basis 520 + 96 + 112 = 728, cardStatus 690 + 26 + 12 = 728, readmeState 572 + 128 + 28 = 728, noReadmeCards 94 + 22 + 12 = 128

### 5-1. 집계 불가와 산정 불가 예시

```json
{
  "sourceField": {
    "present": { "count": 0, "ratio": null },
    "absent": { "count": 0, "ratio": null },
    "unknown": { "count": 728 },
    "denominator": 0
  },
  "noReadmeCards": null,
  "reason": { "noReadmeCards": "README 상태 칸 누락" }
}
```

- 분모 0: 화면 "산정 불가"
- 지표 null: 화면 "{지표 이름} 집계 불가", reason은 검수용

## 6. 시연 자료 분리

- 계산 입력: `data/cards/*.json`과 `_meta.json`만
- 계산 제외: `app/public/demo/` 전체(README 예시, 써 봤어요 예시, 공개 준비 점검 예시), 브라우저 임시 기록
- 화면 조회 수, 원문 복제 수: 지표 아님

## 7. 화면 대응(UX/20 11장)

| 화면 지표 | 읽는 칸 | 제목 수치 | aside |
|---|---|---|---|
| A 분류 전 | sourceField | absent.count, absent.ratio | denominator, unknown.count |
| B 분류 후 | fieldAfter | confirmedTotal | denominator |
| C 하는 일 근거 | basis | readme | denominator |
| D 카드 생성 상태 | cardStatus | ok | denominator |
| E README 없는 카드 생성 | noReadmeCards | withEvidence.count | denominator, readmeUnknown |
| 구역 기준 줄 | fetchedDate, scope.total, dataVersion | 없음 | 없음 |

- 화면 재계산 금지: 파일 값 그대로 표시, 합 검사만 화면에서 수행(불일치 시 "합계 불일치 / 자료 확인")

## 8. 결정 필요

1. 원천 분야 표시 판정 원천: 설명 앞 분야 표기(현 현황판 방식), 주제(topics), README 분야 줄 중 무엇을 "있음"으로 볼지
2. README 기본 템플릿: present로 셀지
3. PR 검사에 두 파일 버전 대조 스크립트 추가 여부(`app/scripts/` 쪽, 주현호)
4. 삭제 예약 26개 제외 처리: 재수집 시점 공개 목록 기준 수치 확정(박만재 수치표와 맞춤)
