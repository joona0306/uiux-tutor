# 33. Day 04. 배열과 객체 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **객체와 배열**: 객체 `{ name: '제주', price: 80000 }` 는 이름표 붙은 값 묶음, 배열 `[...]` 은 줄 세운 값 목록이에요. 둘을 합친 "객체 배열"이 카드 목록의 데이터 모양이에요(Figma 컴포넌트 속성 값을 카드마다 한 줄씩 적은 표처럼). `items[0].name` 은 "첫 번째 카드의 이름"이에요.
  - **하나씩 꺼내기**: `for...of` 와 `forEach` 는 하나씩 돌며 일을 시키고, `map` 은 **바꾼 새 배열**, `filter` 는 **거른 새 배열**, `find` 는 **하나**(못 찾으면 `undefined`)를 돌려줘요. `const { name, price } = item;` 은 구조 분해예요.
  - **원본을 안 바꾸는 복사**: `{ ...item, liked: true }` 는 `item` 을 펼쳐서 새 객체를 만들고 `liked` 만 바꿔요. `const copy = item;` 은 복사가 아니라 같은 것을 가리켜서 한쪽을 고치면 원본도 바뀌어요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요)
  ```js
  const mugs = [
    { id: 1, name: '하얀 머그', price: 8000, liked: false },
    { id: 2, name: '검은 머그', price: 9000, liked: false },
    { id: 3, name: '큰 머그', price: 12000, liked: true },
  ];
  console.log(mugs[0].name, mugs.length);
  console.log(mugs.filter((mug) => mug.price >= 9000).map((mug) => mug.name));
  console.log(mugs.find((mug) => mug.id === 2));
  const liked = { ...mugs[0], liked: true };
  console.log(liked.liked, mugs[0].liked);
  ```
- 예상해 보기: `mugs.find((mug) => mug.id === 9).name` 처럼 없는 `id` 를 찾고 바로 `.name` 을 읽으면 어떻게 될까요? — 답: `find` 가 `undefined` 를 돌려줘서 `Cannot read properties of undefined (reading 'name')` 오류가 나요.
- 공식 문서: [Array.prototype.map (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) · [Array.prototype.filter (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) · [전개 구문 (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| JS04-1 기본 구조 | 고른 사이트의 카드 목록 구역(예: 여행지 6~8개)을 **내가 만든 가상 데이터**의 객체 배열 `items` 로 만들어요(`id`·`name`·`category`·`price`·`liked`). `for...of` 와 구조 분해로 `제주 한 달 살기 (국내) 80,000원` 모양을 줄마다 찍어요 | 객체 6개 이상, 모든 객체의 키 이름이 같음 / `items[0].name` 과 `items.length` 를 찍음 / `for...of` 와 `const { name, price } = item` 사용 / 줄 수가 데이터 개수와 같음 |
| JS04-2 개념 적용 | `filter` 로 한 카테고리만, `map` 으로 이름만 모은 배열, `find` 로 `id` 하나를 찾아 이름을 찍어요. 찾지 못할 때(없는 `id`)에도 오류 없이 안내 문구가 나오게 해요 | `filter`·`map`·`find` 각각 결과 한 줄 / 세 결과의 종류(배열·배열·하나)를 말로 적음 / 없는 `id` 로 불러도 빨간 오류 없이 문구 출력 |
| JS04-3 응용 | 5만 원 이상 항목의 이름 배열을 `filter` + `map` 으로 만들고, 첫 항목의 `liked` 만 `true` 로 바꾼 **복사본** 배열을 전개 연산자로 만들어 원본과 비교해요 | `filter` 뒤에 `map` 을 이어 씀 / 복사본의 `liked` 는 `true`, 원본 `items[0].liked` 는 그대로 `false` (콘솔에 둘 다 찍음) / `items[0].liked = true` 처럼 원본을 직접 고치는 줄이 없음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- JS04-1: 데이터 필드가 원본 카드에 보이는 정보 종류(이름·지역·가격 등)와 같음
- JS04-2: 해당 없음 (콘솔 결과)
- JS04-3: 해당 없음 (콘솔 결과)

## 힌트 재료
- 1단계: MDN `Array` 메서드 — https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- 2단계: 데이터는 `const items = [ {…}, {…} ];` 한 번만 만들고 아래에서 읽기만 해요. 거르기 → 바꾸기 순서로 점(`.`)으로 이어 쓰고, 원본을 고칠 때는 `map` 으로 새 배열을 만들어요.
- 3단계 예시(다른 이름·다른 값):
  ```js
  const rooms = [{ id: 1, name: '바다방', price: 90000, liked: false }, { id: 2, name: '숲방', price: 60000, liked: false }];
  const names = rooms.filter((room) => room.price >= 70000).map((room) => room.name);
  const next = rooms.map((room) => (room.id === 2 ? { ...room, liked: !room.liked } : room));
  console.log(names, next[1].liked, rooms[1].liked);
  ```

## 자주 막히는 곳
- `Cannot read properties of undefined (reading 'name')` → `find` 가 못 찾아 `undefined` 인데 `.name` 을 읽음. 점 앞의 값을 `console.log` 로 먼저 확인해요
- 객체나 배열 사이 쉼표를 빠뜨려 `Unexpected identifier` 가 나고 다른 출력도 모두 사라짐 → 속성 사이·항목 사이마다 `,`
- `filter` 안에서 `item.category = '국내'` 처럼 `=` 한 개를 써서 원본이 바뀜 → 비교는 `===`
