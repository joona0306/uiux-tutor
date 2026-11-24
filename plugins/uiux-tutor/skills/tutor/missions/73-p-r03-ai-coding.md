# 73. R03. AI 코딩 도구 활용 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **질문에 스펙을 담기**: AI 는 내 화면과 폴더를 몰라요. 시안을 넘길 때 크기·색·상태를 같이 주듯, 상황(기술·버전)·파일·코드·오류 전체·원하는 결과·지킬 규칙·답 모양을 같이 줘요.
  - **AI 코드는 검증하고 넣기**: 읽기(모르는 줄은 되묻기) → 위험한 줄(`any`·`!`·`as`·`@ts-ignore`, 비밀 값) → 실행 → `npm run lint`·`npm run build` → 키보드 → 팀 규칙 → 공식 문서. 설명할 수 없는 코드는 넣지 않아요.
  - **AI 사용 기록**: "무엇을 맡겼나 / 무엇으로 확인했나 / 무엇을 고쳤나"를 남겨요. 많이 썼는지가 아니라 확인했는지를 보여 줘요. 이 튜터도 AI 라서, 정답 코드는 "정답 보여 줘"라고 할 때만 주고 학습자 파일은 읽기만 해요 — 코드 검증과 기록은 학습자가 해요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `docs/ai-log.md` 에 질문 틀을 만들어요)
  ```markdown
  - 상황: Next.js 16 App Router, TypeScript, Tailwind CSS 4
  - 파일: (파일 경로)
  - 코드: (관련 코드 전체)
  - 오류: (메시지 전체, 줄 번호 포함)
  - 원하는 결과: (화면에서 무엇이 어떻게 되어야 하는지)
  - 규칙: 토큰 클래스만, 새 패키지 설치 없이
  - 답 모양: 바뀐 부분만 + 이유 한 줄씩
  ```
- 예상해 보기: AI 가 준 컴포넌트가 `window.location.href` 를 컴포넌트 본문에서 바로 읽어요. 서버에서 그리면 어떤 오류가 날까요? — 답: `window is not defined`. 서버에는 `window` 가 없으니 `'use client'` 를 붙이고, 읽는 일은 클릭 함수나 `useEffect` 안으로 옮겨요.
- 공식 문서: [Server and Client Components (Next.js)](https://nextjs.org/docs/app/getting-started/server-and-client-components) · [Everyday Types (TypeScript 핸드북)](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| P03-1 기본 구조 | 고른 사이트의 한 구역에 쓸 작은 컴포넌트(예: 링크 복사 버튼·맨 위로 가기 버튼)를 질문 틀로 AI 에게 부탁해 초안을 받아요 | `docs/ai-log.md` 에 질문 틀(상황·파일·코드·오류·원하는 결과·규칙·답 모양)이 있음 / 질문에 비밀 키·이름·이메일 같은 개인정보가 없음 / 받은 초안 원문을 따로 저장해 둠 |
| P03-2 개념 적용 | 초안을 내 프로젝트에 넣기 전에 검증 순서대로 확인하고 고쳐요 | `npm run lint` 와 `npm run build` 결과(오류·경고 개수)를 적음 / 초안에서 `any`·`!`·`as`·`@ts-ignore`·`window`·비밀 값 중 찾은 것을 줄 번호와 함께 적고 고침 / 클릭 대상이 `<div>` 가 아니라 `<button>` 이고 `Tab`·`Enter` 로 눌림 / 고친 뒤 lint·build 가 통과 |
| P03-3 응용 | 내가 고친 부분을 한 줄씩 직접 설명하고 AI 사용 기록을 남겨요 | 기록 2건 이상(맡긴 일 / 무엇으로 확인했나 / 고친 것 / 파일) / 튜터가 고른 줄을 물으면 설명함(예: "이 줄이 없으면 어떤 오류가 나요?") / `git status` 에 `.env.local` 이 보이지 않음 / 커밋 메시지가 `docs: AI 사용 기록 추가` 같은 `type: 무엇을` 모양 |

## 힌트 재료
- 1단계: Next.js "Server and Client Components" — https://nextjs.org/docs/app/getting-started/server-and-client-components
- 2단계: 오류가 나면 메시지를 줄여 쓰지 말고 **전체**를 질문에 붙여요. 서버에 없는 값(`window`·`document`)은 클릭 함수 안으로 옮겨요. `any` 는 구체적인 타입이나 `unknown` + 좁히기로 바꿔요.
- 3단계 예시(다른 이름·다른 값):
  ```markdown
  | 11/24 | 대화형 AI | 맨 위로 가기 버튼 초안 | build 오류 1개, 키보드, 토큰 | window 위치 이동, div→button | components/TopButton.tsx | 개인정보 없음 |
  ```

## 자주 막히는 곳
- `window is not defined` → 서버에서 그리는 동안 `window` 가 없어요. `'use client'` + 읽는 일을 이벤트 함수 안으로
- lint 는 통과했는데 build 가 실패함 → 타입 오류는 build 가 잡아요. 오류 메시지의 `파일:줄:칸` 부터 읽어요
- 기록이 "AI 가 알려 줌"뿐임 → "무엇으로 확인했나"(build 통과·lint 0·키보드)가 비면 근거가 없어요
