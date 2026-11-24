# 43. JS 종합 복습 — 미션 예시

## 배우기 재료
- 핵심 개념 (Day 05~08 종합)
  - **언제 실행되나**: 코드는 위에서 아래로 가지만 두 가지는 나중에 실행돼요. 이벤트 리스너 안의 함수는 그 이벤트가 **일어날 때마다**(Figma 프로토타입의 On click 연결), `async` 함수의 `await` **아래** 줄은 결과가 도착한 뒤(그동안 함수 밖의 다음 줄이 먼저)예요.
  - **이벤트 → 상태 바꾸기 → 다시 그리기**: 장바구니는 `{ productId, quantity }` 배열로 기억해요. 담기·빼기는 `map`·`filter`·전개(`...`)로 **새 배열**을 만들어 상태에 넣고 `render` 해요. 장바구니처럼 자주 바뀌는 부분만 다시 그리고, 한 번만 그리면 되는 상품 목록은 따로 둬요.
  - **`fetch` 는 404 여도 실패가 아니에요**: 그래서 `response.ok` 로 확인하고 직접 오류를 던져요. 막히면 콘솔 오류 읽기 → `console.log` → 중단점 순서로 원인을 찾아요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. HTML 에 `<button class="go">눌러요</button>` 를 넣고 `index.html` 은 Live Server 로 열어요)
  ```js
  console.log('A');
  document.querySelector('.go').addEventListener('click', () => {
    console.log('B');
  });
  async function load() {
    console.log('C');
    await fetch('./index.html');
    console.log('D');
  }
  load();
  console.log('E');
  ```
- 예상해 보기: 저장해서 처음 열었을 때 콘솔에 나오는 글자들을 순서대로 적고(버튼은 아직 안 누름), 버튼을 한 번 누르면 무엇이 더해지는지 적어 보세요. — 답: `A`, `C`, `E`, 그다음 `D`(await 뒤라서 늦게). 버튼을 누르면 `B` 가 한 줄 더해져요.
- 공식 문서: [async 함수 (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function) · [await (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/await) · [try...catch (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/try...catch)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| JS43-1 기본 구조 | 코드를 치기 **전에** 위 "작은 따라 치기"와 비슷한 내 코드 3개(이벤트 + 일반 줄, `async` + `await` 아래 줄, `fetch` 404)의 콘솔 출력 순서를 `order.md` 에 적고, 실행해서 맞춰요 | 3개 모두 실행 **전** 예측이 적혀 있음 / 실행 결과와 비교해 맞음·틀림 표시 / "이 줄이 늦게 실행되는 이유"를 줄마다 한 줄로 적음(`이벤트 예약`, `await 대기`) |
| JS43-2 개념 적용 | 고른 사이트의 카드 목록 구역에 장바구니를 붙여요. 상품 목록은 한 번만 그리고, 장바구니(담기·빼기·합계·배송비)는 바뀔 때마다 다시 그려요. 상태는 `{ productId, quantity }` 배열이에요 | 담기·빼기 함수가 원본 `cart` 를 고치지 않고 **새 배열**을 만듦 / 같은 상품을 또 담으면 수량이 늘고, 0 이 되면 줄이 사라짐 / 합계·배송비가 손계산과 같음 / 상품 목록 영역은 담기 때 다시 그려지지 않음 |
| JS43-3 응용 | `items.json` 을 `fetch` 로 불러오되 `response.ok` 를 확인하고 실패하면 안내 문구가 나오게 해요. 그다음 일부러 버그 하나(상태는 바뀌는데 화면이 그대로)를 만들어 스스로 찾고 `debug-note.md` 에 적어요 | 파일 이름을 틀리게 하면 `catch` 에서 안내 문구가 나오고 콘솔에 `404` 가 보임 / `debug-note.md` 에 증상·확인한 방법(콘솔 오류·`console.log`·중단점 중 하나 이상)·원인·고친 줄 / Live Server 로 열었음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- JS43-1: 해당 없음 (손으로 예상)
- JS43-2: 해당 없음 (장바구니는 연습용)
- JS43-3: 해당 없음 (디버깅 연습)

## 힌트 재료
- 1단계: MDN `async function` — https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function
- 2단계: 장바구니 상태는 `let cart = [];`. 담기는 이미 있는 줄이면 `map` 으로 수량을 올리고 없으면 `[...cart, 새줄]`, 빼기는 `map` 으로 수량을 줄인 뒤 `filter` 로 0 인 줄을 거르면 돼요. `renderCart()` 와 `renderProducts()` 를 나눠요.
- 3단계 예시(다른 이름·다른 값):
  ```js
  const removeOne = (list, productId) =>
    list
      .map((line) => (line.productId === productId ? { ...line, quantity: line.quantity - 1 } : line))
      .filter((line) => line.quantity > 0);
  cart = removeOne(cart, 3);
  renderCart();
  ```

## 자주 막히는 곳
- 담기를 눌러도 장바구니 화면이 그대로 → 상태(`cart`)만 바꾸고 `renderCart()` 를 안 부름
- 장바구니 합계가 `NaN` → `find` 가 못 찾은 상품(`undefined`)의 가격을 읽었거나 `quantity` 가 숫자가 아님. 점 앞의 값을 `console.log` 로 확인해요
- 불러오기가 안 되고 CORS 오류 → 더블클릭으로 열었어요. Live Server 로 열어요
