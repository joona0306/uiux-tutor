# 39. JS 폼 검사 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **검사는 HTML 이, 보여 주기는 JS 가**: `required`(비면 안 됨), `type="email"`(이메일 모양), `minlength`(최소 글자), `pattern`(정규식 모양) 속성만으로 브라우저가 검사해요. JS 는 그 **결과**(`input.validity.valueMissing`, `typeMismatch`, `tooShort`, `patternMismatch`)를 읽어 우리말 문구를 칸마다 보여 줘요. 폼에 `novalidate` 를 붙이면 브라우저 기본 말풍선 대신 내 문구를 써요.
  - **오류 문구를 입력칸과 잇기**: 오류 문구 요소의 `id` 를 입력칸의 `aria-describedby` 로 이으면 화면 읽기 프로그램이 칸과 문구를 함께 읽어요. 틀린 칸에는 `aria-invalid="true"` 를 붙여요. Figma 에서 입력칸과 오류 텍스트를 한 컴포넌트로 묶어 두는 것과 비슷해요.
  - **제출 흐름**: 제출 이벤트에서 `preventDefault()` → 모든 칸 검사 → 틀린 칸이 있으면 첫 틀린 칸에 `focus()`, 없으면 완료 문구와 `form.reset()`. 한 번 틀린 칸은 `input` 이벤트로 고치는 즉시 다시 검사해요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요)
  ```html
  <form class="f" novalidate>
    <label for="nick">별명 (2자 이상)</label>
    <input id="nick" required minlength="2" aria-describedby="nick-error">
    <p id="nick-error" class="error"></p>
    <button type="submit">보내기</button>
  </form>
  ```
  ```js
  const form = document.querySelector('.f');
  const nick = document.querySelector('#nick');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const error = document.querySelector('#nick-error');
    if (nick.validity.valueMissing) { error.textContent = '별명을 입력해 주세요.'; }
    else if (nick.validity.tooShort) { error.textContent = '2자 이상 입력해 주세요.'; }
    else { error.textContent = ''; }
    nick.setAttribute('aria-invalid', String(error.textContent !== ''));
  });
  ```
- 예상해 보기: `<form>` 에서 `novalidate` 를 지우고 빈칸으로 제출하면 어떻게 될까요? — 답: 브라우저가 자기 말풍선을 띄우며 제출을 막아서, 내가 쓴 우리말 문구는 보이지 않아요.
- 공식 문서: [form 요소 (MDN)](https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements/form) · [ValidityState (MDN)](https://developer.mozilla.org/ko/docs/Web/API/ValidityState) · [aria-describedby (MDN)](https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| JS39-1 기본 구조 | 고른 사이트의 문의(또는 예약 문의) 폼을 HTML 로 만들어요: 이름, 이메일, 예약 코드(`AB-1234` 모양), 문의 내용(10자 이상). 개인 정보 대신 **가짜 값**으로 시험해요. 각 칸에 맞는 HTML 검사 속성을 걸어요 | 모든 칸에 `<label for>` 와 짝이 되는 `id` / 이름·이메일·코드·내용에 `required`, 이메일은 `type="email"`, 내용은 `minlength="10"`, 코드는 `pattern="[A-Z]{2}-[0-9]{4}"` / 폼에 `novalidate` / 속성마다 무엇을 검사하는지 한 줄씩 말함 |
| JS39-2 개념 적용 | 제출을 막고(`preventDefault`) `validity` 를 읽어 칸마다 다른 우리말 오류 문구를 그 칸 아래에 보여요. 오류 요소를 `aria-describedby` 로 잇고 틀린 칸에 `aria-invalid="true"` 를 붙여요 | `submit` 에서 `event.preventDefault()` / 빈칸·모양 틀림·너무 짧음마다 문구가 다름(`valueMissing`, `patternMismatch`, `tooShort` 등) / 틀린 칸에 `aria-invalid="true"`, 고치면 `"false"` / 오류 문구는 `textContent` 로 넣음 |
| JS39-3 응용 | 제출했을 때 첫 번째 틀린 칸으로 `focus()` 를 옮기고, 한 번 틀린 칸은 고치는 즉시(`input`) 다시 검사해요. 다 맞으면 완료 문구를 보이고 `form.reset()` 해요. 문의 내용에 `12/200` 같은 글자 수도 보이게 하고 `reset()` 뒤에는 `0/200` 으로 되돌려요 | 틀린 칸이 둘 이상일 때 **위쪽** 틀린 칸에 포커스가 감 / 틀린 칸을 고치면 제출을 다시 누르지 않아도 오류가 사라짐 / 성공 후 칸이 비고 글자 수가 `0/200` / 가짜 값으로 틀린 경우 3가지와 맞는 경우 1가지를 시험해 결과를 적음 |

## 힌트 재료
- 1단계: MDN `ValidityState` — https://developer.mozilla.org/ko/docs/Web/API/ValidityState
- 2단계: 오류 `<p>` 의 `id` 는 "입력칸 id + `-error`" 처럼 규칙을 정해 두면 한 함수(`showError(input)`)로 모든 칸을 처리할 수 있어요. 검사 함수는 문구(또는 빈 글자)를 **돌려주고**, 보여 주기는 따로 해요.
- 3단계 예시(다른 이름·다른 값):
  ```js
  const getMessage = (input) => {
    if (input.validity.valueMissing) return '빈칸이에요.';
    if (input.validity.patternMismatch) return 'AB-1234 모양으로 써 주세요.';
    return '';
  };
  const fields = [nameInput, emailInput, codeInput];
  const firstBad = fields.find((field) => getMessage(field) !== '');
  if (firstBad) { firstBad.focus(); }
  ```

## 자주 막히는 곳
- 제출하면 화면이 깜빡이고 칸이 비워짐 → `event.preventDefault()` 가 없음(`novalidate` 만으로는 막히지 않아요)
- 우리 문구 대신 브라우저 말풍선이 뜸 → `<form>` 에 `novalidate` 를 안 붙임
- `Cannot set properties of null (setting 'textContent')` → 오류 `<p>` 의 `id` 가 규칙(입력칸 id + `-error`)과 달라 못 찾음
- 짧은 글을 코드로 넣어 시험했는데 `tooShort` 가 안 뜸 → 코드로 넣은 값은 `tooShort` 검사에 안 걸려요. 키보드로 직접 쳐서 시험해요
