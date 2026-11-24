# 54. React 복습 ① state·props·폼 — 미션 예시

## 배우기 재료
- 핵심 개념 (Day 11~15 종합)
  - **먼저 예상, 나중에 실행**: 코드를 보고 화면·콘솔 결과를 먼저 적은 뒤 돌려서 맞춰 봐요. `setCount(count + 1)` 두 번 → 1만 오름, `onClick={함수()}` → 그릴 때 바로 실행, `&&` 왼쪽 숫자 → `0` 이 찍힘, `map` 의 `key` → 줄을 알아보는 이름표.
  - **state 는 최소로**: 여러 컴포넌트가 쓰는 데이터는 공통 부모에 한 군데만 두고, 계산할 수 있는 값(개수·합계)은 state 로 또 만들지 않아요.
  - **타입을 직접 적기**: 데이터 모양 `type Item`, props 타입, 함수 props 타입 `(id: number) => void`, 빈 배열 state `useState<Item[]>([])`. 숫자 입력창의 값은 글자라서 `Number()` 로 바꿔요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요 — 합계는 state 가 아니라 계산)
  ```tsx
  import { useState } from 'react';

  type Item = { id: number; name: string; price: number };

  function Basket() {
    const [items, setItems] = useState<Item[]>([]);
    const [price, setPrice] = useState('');

    function add() {
      setItems([...items, { id: Date.now(), name: '메모', price: Number(price) }]);
      setPrice('');
    }
    let total = 0;
    for (const item of items) {
      total += item.price;
    }

    return (
      <div>
        <input value={price} onChange={(e) => setPrice(e.target.value)} />
        <button onClick={add}>담기</button>
        <p>{items.length}개 · {total}원</p>
      </div>
    );
  }
  export default Basket;
  ```
- 예상해 보기: `Number(price)` 대신 `price` 를 그대로 `price: price` 로 넣으면 무슨 일이 생길까요? — 답: `price` 는 글자(`string`)인데 `Item.price` 는 숫자라서 `TS2322` 오류가 나요. 타입을 안 맞췄다면 합계가 `0` + `'3'` + `'4'` 처럼 글자 이어 붙이기가 돼요.
- 공식 문서: [React 로 사고하기 (React)](https://ko.react.dev/learn/thinking-in-react) · [state 구조 선택하기 (React)](https://ko.react.dev/learn/choosing-the-state-structure) · [스냅샷으로서의 state (React)](https://ko.react.dev/learn/state-as-a-snapshot)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| R15A-1 기본 구조 | 실행하지 않고 손으로 예상부터 적어요: ① `setCount(count + 1)` 두 줄을 쓴 버튼을 한 번 누르면 ② `{list.length && <p>있어요</p>}` 에서 `list` 가 빈 배열이면 ③ `<button onClick={add()}>` 이면 ④ `items.push(새것); setItems(items);` 로 추가하면 | 4문제 모두 답을 적음 / 답마다 한 줄 이유(스냅샷·0 이 찍힘·그릴 때 실행·같은 배열이라 안 그려짐) / 실행해 확인한 것과 못 한 것을 구분해 적음 |
| R15A-2 개념 적용 | 고른 사이트의 [담기·체크리스트] 구역을 작은 앱으로 만들어요(가상 `Item` 5개): 추가 폼(가격은 `Number()`), 체크, 삭제, `Summary` 컴포넌트(개수·합계), 빈 목록 문구 | `type Item` 과 `useState<Item[]>` / 개수·합계는 state 가 아니라 계산한 값 / 추가·체크는 `[...]`·`map`, 삭제는 `filter` / 목록이 비면 안내 문구, 줄마다 `key` 에 `id` |
| R15A-3 응용 | 일부러 `Number()` 를 빼서 오류를 읽고 고친 뒤, 자기 점검표(11항목)에 "예/아직"을 표시해요 | `npm run build` 의 오류 한 줄을 `파일:줄:칸`·`TS번호`·설명으로 나눠 적고 고침 / 점검표(props 기본값·children·스냅샷·`onClick` 괄호·`&&` 0·`key`·제어 입력·새 배열·끌어올리기·타입 적기·오류 읽기)에 표시 / "아직" 항목마다 다시 볼 회차(Day 번호) 한 줄 / `npm run build` 와 `npm run lint` 오류 없음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- R15A-1: 해당 없음 (손으로 예상)
- R15A-2: 해당 없음 (작은 앱)
- R15A-3: 해당 없음 (오류·자기 점검)

## 힌트 재료
- 1단계: React 공식 문서 "state 구조 선택하기" — https://ko.react.dev/learn/choosing-the-state-structure
- 정답 확인용(튜터용 — **R15A-1 을 제출한 뒤에만** 보여 줘요): ① `1`(같은 렌더 안의 `count` 는 같은 값) ② `0` 이 화면에 찍힘 ③ 그릴 때 `add()` 가 바로 실행됨(함수에서 state 를 바꾸면 "Too many re-renders") ④ 화면이 안 바뀜(같은 배열이라 React 가 바뀐 줄 모름)
- 2단계: 데이터(`items`)는 앱 맨 위 컴포넌트에 한 번만 두고, `Summary`·`List`·`Form` 에는 props 로 내려요. 개수·합계는 `items` 로 매번 계산해요.
- 3단계 예시(다른 이름·다른 값):
  ```tsx
  type Todo = { id: number; title: string; done: boolean };
  const toggle = (id: number) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  const doneCount = todos.filter((t) => t.done).length;
  ```

## 자주 막히는 곳
- 합계가 `0` + 글자가 이어진 이상한 숫자 → 입력창 값은 늘 글자예요. `Number(입력값)` 으로 바꿔 넣어요
- 개수를 `useState` 로 따로 만들었더니 목록과 어긋남 → 계산할 수 있는 값은 `items.length` 로 매번 계산해요
- 삭제하면 엉뚱한 줄이 지워짐 → `key` 나 삭제 기준에 index 를 썼어요. 데이터의 `id` 를 써요
