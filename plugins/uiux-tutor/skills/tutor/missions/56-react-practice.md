# 56. React 실습 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **select·range 도 제어 컴포넌트**: `<select value={state} onChange>` 와 `<input type="range" value={state} onChange>` 로 만들어요. HTML 의 `selected` 대신 state 의 처음 값을 쓰고, range 값은 글자라서 `Number()` 로 바꿔요.
  - **정렬은 복사 먼저**: `sort` 는 원래 배열을 바꿔 버려요. `[...배열].sort(...)` 로 복사한 뒤 정렬해요.
  - **담기는 배열 state**: `type CartItem = { id: number; quantity: number }` 와 `useState<CartItem[]>([])`. 개수·금액은 state 로 따로 두지 않고 계산해요. `find` 는 못 찾으면 `undefined` 라서 `if` 로 먼저 확인해요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요)
  ```tsx
  import { useState } from 'react';

  const prices = [30, 10, 20];

  function SortDemo() {
    const [sort, setSort] = useState('low');
    const sorted = [...prices].sort((a, b) => (sort === 'low' ? a - b : b - a));
    return (
      <div>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="low">낮은 순</option>
          <option value="high">높은 순</option>
        </select>
        <p>{sorted.join(', ')}</p>
      </div>
    );
  }
  export default SortDemo;
  ```
- 예상해 보기: `[...prices].sort(...)` 를 `prices.sort(...)` 로 바꾸면 무엇이 달라질까요? — 답: 화면 순서는 비슷해 보여도 원래 `prices` 배열 자체가 바뀌어요. 원본 순서가 필요한 다른 곳(예: 기본 목록)이 같이 바뀌는 문제가 생겨요.
- 공식 문서: [select (React)](https://ko.react.dev/reference/react-dom/components/select) · [input type="range" (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/range) · [배열 state 업데이트하기 (React)](https://ko.react.dev/learn/updating-arrays-in-state)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| R16A-1 기본 구조 | 연습용 브랜치(예: `practice`)를 만들고, 고른 사이트의 [카드 목록] 에 가격(또는 평점) 정렬 `select` 를 더해요 | `git branch` 에 연습용 브랜치가 보이고 그 위에서 작업 / `select` 가 `value` + `onChange` 로 제어됨(`selected` 속성 안 씀) / 정렬 전에 `[...배열]` 로 복사 |
| R16A-2 개념 적용 | 최대 가격 `range` 슬라이더를 더하고, 검색·분류·가격 조건을 함께 적용해요 | range 값을 `Number()` 로 바꿔 state 에 넣음 / 거르기 조건이 `const matchXxx` 와 `&&` 로 합쳐짐 / 슬라이더를 움직이면 카드 수가 바뀜 |
| R16A-3 응용 | 카드에 "담기" 버튼을 달고 머리 영역에 담은 개수·금액을 보여 줘요. 끝나면 커밋하고 `main` 으로 돌아와요 | `type CartItem` 과 `useState<CartItem[]>([])` / 개수·금액은 계산한 값(state 아님) / `find` 결과를 `if` 로 확인 후 사용 / `git log` 에 `feat: …` 형식 커밋, `git switch main` 으로 돌아옴 / `npm run build` 와 `npm run lint` 오류 없음 |

## 힌트 재료
- 1단계: React 공식 문서 "select" — https://ko.react.dev/reference/react-dom/components/select
- 2단계: 정렬·가격·검색 값은 각자 state 로 두고, 화면에 그릴 목록은 `filter` 한 결과를 복사해 `sort` 한 값으로 계산해요. 담기 버튼은 이미 담긴 것이면 `quantity` 를 올리고, 아니면 새 줄을 더해요.
- 3단계 예시(다른 이름·다른 값):
  ```tsx
  const matchPrice = place.price <= maxPrice;
  const matchText = place.name.includes(search);
  const visible = places.filter((p) => matchText && matchPrice);
  const sorted = [...visible].sort((a, b) => a.price - b.price);
  ```

## 자주 막히는 곳
- `select` 의 기본 선택이 안 바뀜 → `selected` 를 썼어요. `value={state}` 로 정해요
- 슬라이더를 올려도 숫자 비교가 이상함 → range 값은 글자예요. `Number(e.target.value)` 로 바꿔요
- 정렬하면 원래 목록 순서도 변함 → `sort` 전에 `[...배열]` 로 복사하지 않았어요
