# 34. JS 복습 ① 배열·객체 집중 — 미션 예시

## 배우기 재료
- 핵심 개념 (Day 01~04 종합)
  - **코드 읽고 결과 예측하기**: 실행 전에 종이에 값을 적어 보는 습관이에요. `'3' + 4 + 5` 는 왼쪽부터 계산해서 `'345'`, `3 + 4 + '5'` 는 `7` 이 먼저 되고 `'75'` 가 돼요. `return` 을 만나면 함수가 끝나고, `return` 이 없으면 `undefined` 예요.
  - **데이터 가공 도구 고르기**: 개수는 `filter` + `length`, 이름만 모으기는 `map`, 하나 찾기는 `find`, 합계·평균은 `for...of` 와 `let` 으로 더해요.
  - **합쳐서 영수증 만들기**: 장바구니는 `{ id, quantity }` 만 기억하고, 이름·가격은 `find` 로 상품 데이터에서 찾아 붙여서 합계를 구해요. 담을 때는 원본 배열을 고치지 않고 새 배열을 만들어요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요)
  ```js
  const goods = [{ id: 1, name: '노트', price: 3000 }, { id: 2, name: '펜', price: 1500 }];
  const cart = [{ id: 2, quantity: 3 }, { id: 1, quantity: 1 }];
  let total = 0;
  for (const line of cart) {
    const good = goods.find((g) => g.id === line.id);
    total += good.price * line.quantity;
  }
  console.log(total);
  ```
- 예상해 보기: `cart` 의 첫 줄을 `{ id: 2, quantity: 4 }` 로 바꾸면 `total` 은? — 답: `9000` (펜 1,500 × 4 = 6,000, 노트 3,000 을 더해서).
- 공식 문서: [Array.prototype.find (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find) · [for...of (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| JSR1-1 기본 구조 | 코드를 **실행하기 전에** 결과를 예측해요. 내가 만든 짧은 코드 5개(문자열+숫자 이어 붙이기, `else if` 갈림길, `return` 없는 함수, `map` 결과, `{ ...a }` 와 `= a` 의 차이)를 `predict.js` 주석에 예측을 먼저 쓰고 실행해 맞춰요 | 예측 5개가 코드 실행 **전에** 주석으로 적혀 있음 / 실행 결과와 비교해 맞음·틀림 표시 / 틀린 것마다 이유 한 줄 |
| JSR1-2 개념 적용 | 고른 사이트의 카드 데이터(`items`, 8개 이상 가상 데이터)로 카테고리별 개수(`forEach` + `filter` + `length`), 평균 가격(`for...of`), 가장 비싼 항목을 찾아요 | 카테고리마다 개수가 콘솔에 한 줄씩 / 평균을 `let` 합계로 계산(결과를 직접 손으로 계산한 값과 대조) / 가장 비싼 항목 이름이 맞음 |
| JSR1-3 응용 | 장바구니 `{ id, quantity }` 배열과 `addToCart(cart, id)`(원본 그대로, **새 배열** 돌려주기), `getCartTotal`, 영수증 출력 함수를 만들어요. 합계가 기준 금액 이상이면 배송비를 0으로 해요 | `addToCart` 호출 전후로 원래 `cart` 가 변하지 않음 / 같은 항목을 두 번 담으면 수량이 2가 됨 / 영수증에 줄별 금액·배송비·결제 금액이 나옴(손계산과 같음) |

## 힌트 재료
- 1단계: MDN `Array.prototype.find` — https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find
- 2단계: 장바구니는 `id` 와 `quantity` 만 담고, 계산할 때 `items.find` 로 가격을 가져와요. 담기는 이미 있으면 `map` 으로 수량을 올린 새 배열, 없으면 `[...cart, { id, quantity: 1 }]`.
- 3단계 예시(다른 이름·다른 값):
  ```js
  const addLine = (list, id) => {
    const exists = list.find((line) => line.id === id);
    return exists
      ? list.map((line) => (line.id === id ? { ...line, quantity: line.quantity + 1 } : line))
      : [...list, { id, quantity: 1 }];
  };
  ```

## 자주 막히는 곳
- 같은 항목을 담았는데 줄이 두 개로 나뉨 → 이미 담겼는지 먼저 확인하지 않고 항상 `[...cart, 새줄]` 만 함
- `Assignment to constant variable.` → 합계를 `const subtotal = 0;` 으로 만들고 `+=` 함. 바뀌는 값은 `let`
- 원본 `cart` 까지 바뀜 → `cart.push(...)` 나 `line.quantity += 1` 로 원본을 직접 고침. `map`·전개로 새 것을 만들어요
