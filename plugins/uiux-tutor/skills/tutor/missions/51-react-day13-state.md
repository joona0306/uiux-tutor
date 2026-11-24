# 51. Day 13. state와 이벤트 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **이벤트**: `onClick={handleClick}` 처럼 함수를 연결해요. 괄호를 붙인 `onClick={handleClick()}` 은 누르기 전에 그려질 때 바로 실행돼 버려요.
  - **state**: `const [count, setCount] = useState(0);` — 화면이 기억하는 값이에요. 일반 변수는 바꿔도 화면이 다시 그려지지 않지만, set 함수로 바꾸면 React 가 화면을 다시 그려요(Figma 의 변수 값을 바꾸면 화면이 따라 바뀌는 것과 비슷해요).
  - **컴포넌트마다 따로**: 같은 컴포넌트를 여러 개 놓으면 state 도 각자 따로예요. 부모가 가진 state 는 `onClick: () => void` 같은 함수 props 로 자식이 바꿀 수 있어요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요)
  ```tsx
  import { useState } from 'react';

  function Counter() {
    const [count, setCount] = useState(0);
    const [liked, setLiked] = useState(false);

    function handleAdd() {
      setCount(count + 1);
    }

    return (
      <div>
        <button onClick={handleAdd}>+1</button>
        <button onClick={() => setLiked(!liked)}>{liked ? '♥' : '♡'}</button>
        <p>{count}번</p>
      </div>
    );
  }
  export default Counter;
  ```
- 예상해 보기: `handleAdd` 안에 `setCount(count + 1);` 을 두 줄 쓰고 버튼을 한 번 누르면 숫자는 얼마가 될까요? — 답: 1 이에요. 한 번 그리는 동안 `count` 는 그 순간의 값(0)으로 고정돼 있어서, 두 줄 다 `0 + 1` 이에요.
- 공식 문서: [이벤트에 응답하기 (React)](https://ko.react.dev/learn/responding-to-events) · [state: 컴포넌트의 기억 (React)](https://ko.react.dev/learn/state-a-components-memory) · [스냅샷으로서의 state (React)](https://ko.react.dev/learn/state-as-a-snapshot)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| R13-1 기본 구조 | 고른 사이트의 [카드] 에 있는 하트(찜) 버튼을 만들어요. 누를 때마다 켜짐/꺼짐이 바뀌어요 | `onClick={함수}` 로 연결(함수 뒤에 `()` 없음) / `useState(false)` 와 `!` 로 토글 / 누르면 글자(예: ♡ ↔ ♥)가 바뀜 |
| R13-2 개념 적용 | 같은 카드 컴포넌트를 3장 놓고, 선택한 카드만 하트가 켜지는지 확인해요. 일반 변수로 먼저 해 보고 안 바뀌는 것도 확인해요 | 한 장을 눌러도 나머지 두 장은 그대로 / state 가 카드 컴포넌트 안에 있음 / 일반 변수 버전은 화면이 안 바뀌는 것을 확인하고 지움 |
| R13-3 응용 | [수량 선택기] 숫자 state 는 부모에 두고, `+` / `−` 버튼은 별도 컴포넌트로 빼서 `onClick: () => void` 로 연결해요(0 아래로는 안 내려가요) | 버튼 컴포넌트 props 타입에 `onClick: () => void` / 숫자 state 는 부모 컴포넌트에만 있음 / 0 에서 `−` 를 눌러도 0 / `npm run build` 와 `npm run lint` 오류 없음 |

## 힌트 재료
- 1단계: React 공식 문서 "state: 컴포넌트의 기억" — https://ko.react.dev/learn/state-a-components-memory
- 2단계: 카드 컴포넌트 맨 위에서 `useState` 를 부르고, 버튼의 `onClick` 에 값을 뒤집는 함수를 연결해요. 보이는 글자는 state 값에 따라 `? :` 로 골라요.
- 3단계 예시(다른 이름·다른 값):
  ```tsx
  const [open, setOpen] = useState(false);
  return <button onClick={() => setOpen(!open)}>{open ? '접기' : '펼치기'}</button>;
  ```

## 자주 막히는 곳
- 버튼을 누르지 않았는데 "Too many re-renders" → `onClick={handleClick()}` 처럼 괄호를 붙였어요. `onClick={handleClick}` 으로 고쳐요
- 값은 바뀌는 것 같은데(콘솔엔 보임) 화면이 그대로 → 일반 변수를 바꿨어요. `useState` 의 set 함수로 바꿔요
- 한 카드의 하트를 누르니 전부 켜져요 → state 를 카드들의 부모에 두었어요. 카드 컴포넌트 안으로 옮겨요
