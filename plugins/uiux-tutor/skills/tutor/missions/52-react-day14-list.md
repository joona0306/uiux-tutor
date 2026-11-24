# 52. Day 14. 조건부 렌더링과 목록 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **조건부 렌더링**: 둘 중 하나는 `조건 ? A : B`, 있을 때만 보이려면 `조건 && A` 로 써요. `&&` 왼쪽에 숫자를 두면 `0` 이 화면에 찍힐 수 있어요.
  - **목록 그리기**: 배열을 `map` 으로 JSX 로 바꾸고, 줄마다 `key={데이터의 id}` 를 붙여요(순서 번호 index 는 순서가 바뀌면 헷갈려요). Figma 에서 반복 그리드로 같은 카드를 늘어놓는 것과 비슷해요.
  - **거르기**: state 에는 "사용자가 고른 조건"만 두고, 보여 줄 목록은 `filter` 로 매번 계산해요. 결과가 0개일 때 안내 문구를 보여 줘요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요)
  ```tsx
  import { useState } from 'react';

  type Fruit = { id: number; name: string; stock: number };
  const fruits: Fruit[] = [
    { id: 1, name: '사과', stock: 3 },
    { id: 2, name: '배', stock: 0 },
  ];

  function FruitList() {
    const [onlyStock, setOnlyStock] = useState(false);
    const visible = fruits.filter((f) => (onlyStock ? f.stock > 0 : true));
    return (
      <div>
        <button onClick={() => setOnlyStock(!onlyStock)}>재고 있는 것만</button>
        <ul>{visible.map((f) => <li key={f.id}>{f.name} {f.stock > 0 ? '있음' : '품절'}</li>)}</ul>
      </div>
    );
  }
  export default FruitList;
  ```
- 예상해 보기: `<p>{fruits.length && <b>목록 있음</b>}</p>` 에서 `fruits` 가 빈 배열이면 화면에 무엇이 보일까요? — 답: `0` 이 찍혀요(`0 && ...` 은 `0` 을 돌려줘서). `fruits.length > 0 && ...` 로 써요.
- 공식 문서: [조건부 렌더링 (React)](https://ko.react.dev/learn/conditional-rendering) · [목록 렌더링 (React)](https://ko.react.dev/learn/rendering-lists)

| 미션 | 할 일 | 완료 기준 |
|---|---|---|
| R14-1 기본 구조 | 고른 사이트의 카드 목록을 React 컴포넌트로 만들어요(가상 데이터 배열, `src/types.ts` 에 타입) | `type`(또는 interface)으로 카드 데이터 모양 정의, `import type` 으로 가져옴 / `배열.map` 으로 카드 그림 / `key` 에 데이터의 `id` (index 아님) |
| R14-2 개념 적용 | 분류(예: 지역) 버튼으로 목록을 걸러요 | state에는 **거르기 조건만** / 보여 줄 목록은 `filter` 로 계산 / 결과가 0개면 안내 문구(`? :` 또는 `&&`) |
| R14-3 응용 | "찜한 것만 보기" 같은 두 번째 조건을 더해요 | 조건 두 개를 함께 계산 / `&&` 왼쪽에 숫자를 두지 않음(0이 찍히는 문제) / `npm run build` 와 `npm run lint` 오류 없음 |

## 힌트 재료
- 1단계: React 공식 문서 "목록 렌더링" — https://ko.react.dev/learn/rendering-lists
- 2단계: state = 사용자가 고른 것, 화면에 보일 목록 = 매번 계산한 값
- 3단계 예시(다른 이름):
  ```tsx
  const visible = tasks.filter((t) => (onlyDone ? t.done : true));
  return visible.length === 0 ? <p>없어요</p> : <ul>{visible.map((t) => <li key={t.id}>{t.title}</li>)}</ul>;
  ```

## 자주 막히는 곳
- key 경고 → index 대신 id
- 거른 목록을 state에 또 넣음 → 계산 값으로
