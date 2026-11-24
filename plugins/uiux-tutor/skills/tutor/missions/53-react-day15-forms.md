# 53. Day 15. 폼 다루기 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **제어 컴포넌트**: 입력창에 `value={state}` 와 `onChange` 를 함께 달아, 입력창의 값을 항상 state 가 쥐게 해요.
  - **폼 제출**: `<form onSubmit>` 안에서 `event.preventDefault()` 로 새로고침을 막아요. 배열 state 는 고치지 않고 **새 배열**로 바꿔요(추가 `[...목록, 새것]`, 수정 `map`, 삭제 `filter`).
  - **state 끌어올리기**: 여러 컴포넌트가 같은 데이터를 쓰면 가장 가까운 공통 부모에 state 를 두고, 바꾸는 함수를 props(`(text: string) => void`)로 내려 줘요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요)
  ```tsx
  import { useState } from 'react';
  import type { ChangeEvent, SubmitEvent } from 'react';

  function MemoBox() {
    const [text, setText] = useState('');
    const [memos, setMemos] = useState<string[]>([]);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
      setText(event.target.value);
    }
    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
      event.preventDefault();
      setMemos([...memos, text]);
      setText('');
    }

    return (
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={handleChange} />
        <button type="submit">추가</button>
        <p>{memos.length}개</p>
      </form>
    );
  }
  export default MemoBox;
  ```
- 예상해 보기: `<input value={text} onChange={handleChange} />` 에서 `onChange` 를 지우면 어떻게 될까요? — 답: 입력창에 글자가 써지지 않아요(값이 state 에 묶여 있는데 바꾸는 곳이 없어서). 콘솔에 "value 가 있는데 onChange 가 없다"는 경고도 떠요.
- 공식 문서: [input (React)](https://ko.react.dev/reference/react-dom/components/input) · [form (React)](https://ko.react.dev/reference/react-dom/components/form) · [배열 state 업데이트하기 (React)](https://ko.react.dev/learn/updating-arrays-in-state) · [컴포넌트 간 state 공유하기 (React)](https://ko.react.dev/learn/sharing-state-between-components)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| R15-1 기본 구조 | 고른 사이트의 [후기·댓글 남기기] 구역에서 글 입력창을 제어 컴포넌트로 만들어요(가상 글만, 개인정보 입력칸 없음) | `value` 와 `onChange` 가 함께 있음 / 입력한 글자가 입력창 아래에 바로 보임 / "지우기" 버튼을 누르면 입력창이 빔 |
| R15-2 개념 적용 | 제출하면 목록에 한 줄 추가되고, 줄마다 삭제 버튼이 있어요 | `type Review = { id: number; text: string }` 와 `useState<Review[]>([])` / `onSubmit` 에서 `event.preventDefault()` 로 새로고침 안 됨 / 추가는 `[...]`, 삭제는 `filter` 로 새 배열 |
| R15-3 응용 | 입력 폼과 목록을 `ReviewForm`·`ReviewList` 컴포넌트로 나누고, state 는 공통 부모에 둬요. 후기 개수는 계산해서 보여 줘요 | 폼 props 에 `onAdd: (text: string) => void` / 후기 개수를 state 로 따로 만들지 않고 `목록.length` 로 계산 / `npm run build` 와 `npm run lint` 오류 없음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- R15-1: 입력 구역 배치가 원본과 같음 (원본에 없으면 해당 없음)
- R15-2: 해당 없음 (목록 추가·삭제)
- R15-3: 해당 없음 (컴포넌트 나누기)

## 힌트 재료
- 1단계: React 공식 문서 "input" — https://ko.react.dev/reference/react-dom/components/input
- 2단계: 입력창 글은 `text` state, 제출된 글들은 `reviews` state 로 따로 둬요. 제출 함수에서 새 글 객체(`id` 포함)를 만들어 `reviews` 에 합치고 `text` 를 비워요. 삭제는 `id` 가 다른 것만 남겨요.
- 3단계 예시(다른 이름·다른 값):
  ```tsx
  const [notes, setNotes] = useState<Note[]>([]);
  const add = (title: string) => setNotes([...notes, { id: Date.now(), title }]);
  const remove = (id: number) => setNotes(notes.filter((n) => n.id !== id));
  ```

## 자주 막히는 곳
- 제출하면 화면이 깜빡이며 입력이 사라짐 → `event.preventDefault()` 가 빠졌어요(폼의 기본 동작은 새로고침)
- 추가했는데 화면이 안 바뀜 → `memos.push(...)` 처럼 원래 배열을 직접 고쳤어요. `setMemos([...memos, 새것])` 으로 새 배열을 넘겨요
- `Property 'onAdd' is missing` (`TS2741`) → 폼 컴포넌트를 쓰는 곳에서 함수 props 를 안 내려 줬어요
