# 32. Day 03. 함수 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **함수 만들기와 부르기**: 자주 쓰는 코드에 이름을 붙여 두는 것이 "만들기", 이름 뒤에 `()` 를 붙여 실행하는 것이 "부르기"예요. 만들기만 하고 안 부르면 아무 일도 안 일어나요. Figma 컴포넌트를 만들어 두고 인스턴스로 가져다 쓰는 것과 비슷해요.
  - **매개변수와 `return`**: 매개변수는 함수가 받는 빈칸(`price`), 인수는 부를 때 넣는 실제 값(`39000`)이에요. `return` 으로 결과를 돌려줘야 밖에서 받아 쓸 수 있고, `return` 이 없으면 `undefined` 가 나와요. 콘솔에 찍는 것(`console.log`)과 돌려주는 것(`return`)은 달라요.
  - **화살표 함수와 템플릿 리터럴**: `(n) => n * 2` 는 `function` 과 같은 일을 짧게 쓴 것이에요. 백틱(`` ` ``)으로 감싸면 `${변수}` 로 값을 문장 속에 끼워 넣을 수 있어요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요)
  ```js
  function addTax(price) {
    return price * 1.1;
  }
  const double = (n) => n * 2;
  const label = (name, n) => `${name} ${n}개`;
  console.log(addTax(1000), double(4));
  console.log(label('머그컵', double(2)));
  ```
- 예상해 보기: `addTax` 안의 `return` 을 지우고 `price * 1.1;` 만 남기면 `console.log(addTax(1000))` 은 무엇을 찍을까요? — 답: `undefined` (값을 돌려주지 않아서).
- 공식 문서: [함수 (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions) · [화살표 함수 (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions) · [템플릿 리터럴 (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| JS03-1 기본 구조 | 고른 사이트의 가격 표시(예: `39,000원`)를 만드는 함수 `formatPrice` 를 **함수 선언식**으로 만들어요. 숫자 `39000` 을 받아 문자열 `'39,000원'` 을 돌려줘요 | `function formatPrice(price)` 모양 / `return` 으로 돌려줌(안에서 `console.log` 만 하지 않음) / 서로 다른 가격 두 개를 불러 `'39,000원'` 같은 결과가 콘솔에 나옴 |
| JS03-2 개념 적용 | 같은 사이트의 배송비(또는 수수료) 규칙을 **화살표 함수**와 삼항 연산자로 `getShippingFee(total)` 로 만들고, 할인가를 돌려주는 `getDiscountedPrice(price, percent)` 도 만들어요 | `=>` 사용 / 한 줄 화살표면 `{ }` 와 `return` 없이, `{ }` 를 쓰면 `return` 있음 / 두 함수를 각각 값 두 개 이상으로 불러 결과를 적음 |
| JS03-3 응용 | 함수끼리 이어 써서 고른 사이트의 "담기 완료 문장"과 "최종 결제 금액 문장"을 만들어요(예: `'린넨 셔츠 2개를 담았어요.'`, `'최종 결제 금액: 42,200원'`) | 문장 만드는 곳에 백틱과 `${}` 사용 / 한 함수 안에서 다른 함수(`formatPrice` 등)를 부름 / 함수 밖에서 함수 안 변수를 쓰지 않음 / 최종 문장이 콘솔에 나옴 |

## 힌트 재료
- 1단계: MDN 함수 가이드 — https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions
- 2단계: 이름·매개변수 → `{ }` 안에서 계산 → 마지막 줄에 `return`. 숫자에 쉼표를 넣을 때는 변수에 담은 뒤 `price.toLocaleString('ko-KR')` 를 써요.
- 3단계 예시(다른 이름·다른 값):
  ```js
  function formatWon(value) {
    return `${value.toLocaleString('ko-KR')}원`;
  }
  const getPoint = (price) => price / 100;
  console.log(`적립 ${formatWon(getPoint(52000))}`);
  ```

## 자주 막히는 곳
- 함수를 만들었는데 아무것도 안 나옴 → 만들기만 하고 **부르지** 않음. 아래에 `formatPrice(39000);` 처럼 불러요
- 결과가 `undefined` → `return` 을 빠뜨림, 또는 화살표 함수에 `{ }` 를 쓰고 `return` 을 안 씀
- `${name}` 이 글자 그대로 나옴 → 백틱 대신 작은따옴표를 씀. 키보드의 `` ` `` 로 감싸요
