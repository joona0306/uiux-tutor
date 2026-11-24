# 30. Day 01. JavaScript 첫걸음 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **콘솔과 script 연결**: HTML 에 `<script src="main.js"></script>` 를 `</body>` 바로 위에 넣으면 JS 파일이 실행돼요. F12 → Console 에서 `console.log()` 로 찍은 값과 빨간 오류 메시지를 볼 수 있어요. 오류가 나면 그 줄 아래 코드가 멈추니, 빨간 글씨부터 읽어요.
  - **변수 `const` / `let`**: 값에 붙이는 이름표예요. `const` 는 한 번 붙이면 다른 값으로 못 바꾸고, `let` 은 바꿀 수 있어요. 기본은 `const`, 값이 바뀔 때만 `let` 을 써요. Figma 에서 색에 이름을 붙여 두고 가져다 쓰는 것과 비슷해요.
  - **자료형과 `===`**: 숫자 `100`, 문자열 `'100'`, 불리언 `true`/`false` 는 서로 다른 종류예요. `'5' + 3` 은 이어 붙여서 `'53'` 이 되고, 같은지 비교할 때는 종류까지 보는 `===` 를 써요.
- 작은 따라 치기 (사이트와 상관없이 `main.js` 에 직접 쳐요)
  ```js
  const shopName = '여행 마켓';
  let visitors = 120;
  visitors = visitors + 1;
  console.log(shopName, visitors);
  console.log(typeof visitors, typeof shopName);
  console.log('5' + 3, 5 + 3);
  console.log(visitors === '121');
  ```
- 예상해 보기: `console.log('5' + 3, 5 + 3)` 에서 `'5'` 의 따옴표를 지워 `5 + 3, 5 + 3` 으로 바꾸면 첫 값은 무엇이 될까요? — 답: `8` (숫자끼리 더해요). 따옴표가 있을 때는 `'53'` 이에요.
- 공식 문서: [let (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let) · [const (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const) · [typeof (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/typeof)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| JS01-1 기본 구조 | 고른 사이트 `clone/index.html` 에 `main.js` 를 연결하고, 카드 하나(예: 여행지 카드)의 이름·가격·남은 자리 수·마감 여부를 변수 4개로 만들어 `console.log` 한 번에 찍어요(내가 만든 가상 값) | `<script src="main.js">` 가 `</body>` 바로 위에 있음 / 이름은 문자열, 가격·남은 자리는 숫자(따옴표 없음), 마감 여부는 `true`/`false` / 콘솔에 4개 값이 한 줄로 나오고 빨간 오류 없음 |
| JS01-2 개념 적용 | 가격과 인원 수로 합계와 10% 할인 가격을 계산하고 `'합계: ' + total + '원'` 처럼 문장으로 출력해요. 인원 수를 한 명 늘려서 다시 계산해요 | 바뀌는 값(인원 수)만 `let`, 나머지는 `const` / 인원을 바꾼 뒤 합계가 달라진 것이 콘솔에 보임 / `typeof` 로 가격은 `number`, 이름은 `string` 이 찍힘 |
| JS01-3 응용 | 고른 사이트의 "무료 배송(또는 무료 예약) 기준 금액"을 변수로 두고, 합계가 기준 이상인지를 `true`/`false` 변수로 만들어 출력해요(`if` 는 아직 안 배웠어요). `'100'` 과 `100` 을 `===` 로 비교해 결과를 적어요 | 기준 금액이 변수(숫자를 코드 곳곳에 직접 쓰지 않음) / 합계를 두 가지로 바꿔 `true` 와 `false` 를 둘 다 확인 / 비교에 `===` 사용, `'100' === 100` 결과(`false`)와 이유를 한 줄로 적음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- JS01-1: 해당 없음 (콘솔 결과)
- JS01-2: 해당 없음 (콘솔 결과)
- JS01-3: 해당 없음 (콘솔 결과)

## 힌트 재료
- 1단계: MDN `let`, `const`, `typeof` 문서 — https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const
- 2단계: 값마다 이름을 먼저 정하고(`const 이름 = 값;`), 바뀌는 값만 `let`. 문자열은 따옴표, 숫자는 따옴표 없이. 마지막에 `console.log(변수1, 변수2, …)` 로 묶어 찍기.
- 3단계 예시(다른 이름·다른 값):
  ```js
  const roomPrice = 80000;
  let nights = 2;
  const total = roomPrice * nights;
  const isFree = total >= 150000;
  console.log('합계: ' + total + '원', isFree);
  ```

## 자주 막히는 곳
- 콘솔에 아무것도 안 나옴 → `<script src>` 의 파일 이름 오타, 저장 안 함, 또는 빨간 `SyntaxError` 하나가 파일 전체를 멈춤
- `Assignment to constant variable.` → `const` 로 만든 값을 다시 바꿈. 바뀌어야 하는 값이면 `let`
- `Identifier 'price' has already been declared` → 같은 이름으로 변수를 두 번 만듦. 값만 바꿀 때는 `let`/`const` 없이 `price = …`
