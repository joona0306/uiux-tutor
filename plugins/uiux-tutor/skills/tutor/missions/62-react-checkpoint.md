# 62. React 점검 (보충·평가) — 미션 예시

> 점검 회차: 힌트는 1단계까지만

## 배우기 재료
- 핵심 개념 (React 단원 종합 복습 — Day 11~Day 19)
  - **코드 읽고 결과 예상**: 같은 렌더 안의 state 는 그 순간의 값(`setN(n + 1)` 두 번 → 1), `&&` 왼쪽 숫자 `0` 은 화면에 찍힘, 개발 모드에서는 `useEffect` 가 두 번 보임, `useParams<'id'>()` 는 `string | undefined`.
  - **오류 읽는 순서**: `error TS…` 는 `파일:줄:칸` 부터. 화면이 하얗다면 F12 Console 의 첫 빨간 줄(무엇이·어디서). 오류 없이 이상한 "조용한 버그"는 사양표를 한 줄씩 직접 눌러 비교해요.
  - **하나 고치고 하나 확인**: 한 번에 여러 곳을 고치지 않고, 고칠 때마다 저장 → 확인 → 기록표 한 줄.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요 — 오류 없는 버그 찾기 연습. `App.tsx` 에 치고 화면을 보면서 "무엇이 이상한지" 먼저 말해 봐요)
  ```tsx
  import { useState } from 'react';

  function App() {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <button onClick={() => setOpen(!open)}>상세</button>
        {open ? <p>상세 설명</p> : null}
        <p className="p-2 sm:p-4">반응형 글</p>
      </div>
    );
  }
  export default App;
  ```
- 예상해 보기: 버튼 글자가 "상세"로 계속 같은데, 열렸을 때 "닫기"로 바뀌게 하려면 무엇을 고치나요? — 답: 버튼 안 글자를 `{open ? '닫기' : '상세'}` 로 바꿔요. 오류는 없지만 사양과 다른 "조용한 버그"의 예예요.
- 공식 문서: [스냅샷으로서의 state (React)](https://ko.react.dev/learn/state-as-a-snapshot) · [조건부 렌더링 (React)](https://ko.react.dev/learn/conditional-rendering) · [반응형 디자인 (Tailwind)](https://tailwindcss.com/docs/responsive-design)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| RCP-1 종합 문제 ① 예상 | 코드를 **실행하지 않고** 손(종이)으로 결과를 적어요. 1) `onClick` 안에 `setN(n + 1); setN(n + 1);` 두 줄, `n` 은 0 에서 시작, 한 번 누르면 2) `{items.length && <p>있어요</p>}`, `items` 가 `[]` 일 때 3) `useEffect(() => { console.log('hi'); }, []);` 를 개발 모드(StrictMode)에서 처음 열면 콘솔에 몇 번 4) 숫자 `id` 배열에서 `useParams<'id'>()` 로 받은 값을 `i.id === id` 로 비교하고 `npm run build` 5) `className="p-2 sm:p-4"` 가 화면 500px 일 때와 700px 일 때 padding 6) `styles.actvie`(오타)로 쓴 `className` 을 `npm run build` | 6문제 모두 답을 적음 / 답마다 한 줄 이유(스냅샷·0 이 찍힘·두 번 실행·`TS2367`·640px 기준·오류 없이 스타일만 안 먹음)가 있음 / 실행해 보지 않고 적었음을 밝히고, 나중에 실행해 확인한 것과 못 한 것을 구분해 적음 |
| RCP-2 종합 문제 ② 작은 앱 | 고른 사이트의 [카드 목록] 구역을 혼자 만들어요: `public/items.json`(가상 8개)을 `fetch` 로 불러오고, 분류로 거르고, 카드를 누르면 `/items/:id` 상세, 그 밖의 주소는 404, Tailwind 로 반응형 | `type Item` 과 `useState<Item[]>([])`, 불러오는 중·오류 문구 / 분류를 고르면 목록과 `N개` 가 바뀌고 0개면 안내 문구 / `/items/1` 상세, `/items/999` 는 없음 안내, `/hello` 는 404 / 375px 1열 · 640px 이상 2열 · 1024px 이상 3열 / `npm run build` 와 `npm run lint` 오류 없음 |
| RCP-3 종합 문제 ③ 사양 점검 + 기록 | RCP-2 앱을 사양표(분류 거르기, 빈 결과 문구, 상세·없음·404 주소, 375px 가로 스크롤 없음, Console 오류 없음)의 줄마다 **직접 눌러** 확인하고, 찾은 버그를 기록표로 정리한 뒤 보충 계획을 세워요 | 사양표의 모든 줄에 "통과/실패" 표시 / 버그마다 증상·원인·고친 방법 한 줄(고칠 때마다 한 곳씩 고침) / 틀린 필기 문제마다 이유 한 줄 / 보충 자료 4개를 정하고 그중 한 개 이상을 오늘 다시 함(다시 볼 회차 번호 적음) |

## 힌트 재료
- 1단계(점검 회차는 여기까지만): 공식 문서 — [스냅샷으로서의 state (React)](https://ko.react.dev/learn/state-as-a-snapshot) · [조건부 렌더링 (React)](https://ko.react.dev/learn/conditional-rendering) · [Fetch 사용하기 (MDN)](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch) · [반응형 디자인 (Tailwind)](https://tailwindcss.com/docs/responsive-design)
- 정답 확인용(튜터용 — **RCP-1 을 제출한 뒤에만** 보여 줘요): 1) `1`(같은 렌더의 `n` 은 0 이라 두 줄 다 `0 + 1`) 2) `0` 이 찍힘 3) `hi` 가 두 번(개발 모드 점검 실행) 4) `TS2367`(숫자와 `string | undefined` 비교, `Number(id)` 필요) 5) 500px 에서 `p-2`(8px), 700px 에서 `p-4`(16px) 6) 오류 없이 빌드되고 스타일만 안 먹음(TS 가 `styles` 이름 오타를 못 잡음)

## 자주 막히는 곳
- 앱이 `fetch` 에서 막힘(404) → `items.json` 이 `public/` 안에 없어요
- 화면이 하얗고 "useRoutes() may be used only in the context of a <Router>" → `main.tsx` 에서 `<BrowserRouter>` 로 감싸지 않았어요
- 틀린 문제·못 한 항목마다 다시 볼 곳을 적지 않음 → JSX·props·key 는 Day 12·14, state·입력창은 Day 13·15·React 복습 ①, 불러오기는 Day 16, 주소는 Day 17, CSS Modules 는 Day 18, Tailwind·반응형은 Day 19·React 복습 ②
