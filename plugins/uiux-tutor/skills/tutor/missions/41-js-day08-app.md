# 41. Day 08. 종합 실습 — 카드 목록 앱 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **상태 변수**: 앱이 기억해야 할 값을 변수로 정해요. 카드 목록 앱이라면 `items`(전체 목록), `searchText`(검색어), `selectedCategory`(고른 분류) 세 가지예요. 화면은 이 값들의 결과물이에요. Figma 의 변수(Variables)를 바꾸면 화면이 달라지는 것과 비슷해요.
  - **`render()` — 상태를 보고 화면 전체를 다시 그리기**: 거르기(`filter`) → 목록 비우기(`innerHTML = ''`) → 카드 만들어 `append` → 개수 문구 → "없어요" 문구(`hidden`) → 선택된 버튼 모양까지 한 함수에서 해요. 한 번 비우고 다시 그려야 카드가 계속 쌓이지 않아요.
  - **이벤트는 "상태 바꾸기 → `render()`"만**: 검색창 `input`, 분류 버튼 `click`, 좋아요 `click` 의 리스너는 상태만 바꾸고 `render()` 를 불러요. 두 조건은 `&&` 로 묶어 거르고(`분류가 맞고 && 검색어가 들어 있고`), 좋아요는 `{ ...item, liked: !item.liked }` 로 새 배열을 만들어요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. HTML 에 `<input class="search">`, `<ul class="list"></ul>`, `<p class="count"></p>` 를 넣어요)
  ```js
  const fruits = ['사과', '사탕수수', '배', '귤'];
  let searchText = '';
  const list = document.querySelector('.list');
  function render() {
    const visible = fruits.filter((name) => name.includes(searchText));
    list.innerHTML = '';
    list.append(...visible.map((name) => {
      const li = document.createElement('li');
      li.textContent = name;
      return li;
    }));
    document.querySelector('.count').textContent = `${visible.length}개`;
  }
  document.querySelector('.search').addEventListener('input', (event) => {
    searchText = event.target.value;
    render();
  });
  render();
  ```
- 예상해 보기: `input` 리스너 안에서 `render();` 한 줄을 지우면 검색창에 글자를 쳐도 화면은 어떻게 될까요? — 답: 변수 `searchText` 는 바뀌지만 화면이 그대로예요(그릴 때가 되지 않아서). 다음에 `render()` 가 불릴 때야 반영돼요.
- 공식 문서: [Array.prototype.filter (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) · [String.prototype.includes (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/includes) · [fetch 사용하기 (MDN)](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| JS41-1 기본 구조 | 앞 회차의 `data/items.json` 으로 고른 사이트의 카드 목록 구역을 앱으로 만들어요. 상태 변수 3개를 정하고, 상태를 보고 그리는 `render()` 를 만들어요(개수 문구, 결과가 없을 때 `hidden` 이 풀리는 안내 문구 포함) | `items`·`searchText`·`selectedCategory` 세 상태 변수가 있고 각각 언제 바뀌는지 말함 / `render()` 안에서 `innerHTML = ''` 로 비운 뒤 다시 그림 / 처음 화면에 카드와 `N개` 문구가 보임 / Live Server 로 열었음 |
| JS41-2 개념 적용 | 검색창 `input` 과 분류 버튼 `click` 을 연결해요. 두 조건을 `&&` 로 묶어 거르고, 선택된 분류 버튼에 `is-active` 를 붙여요 | 리스너 안에는 "상태 바꾸기 → `render()`" 두 가지만 있음 / 분류와 검색어를 **동시에** 걸어도 두 조건이 모두 적용됨 / 결과 0개일 때 안내 문구가 보이고 다시 지우면 사라짐 / 선택된 분류 버튼 하나만 `is-active` |
| JS41-3 응용 | 카드마다 좋아요(♡/♥) 버튼을 달아 눌러요. `toggleLike(id)` 는 원본을 고치지 않고 새 배열을 만들고, 누른 뒤 `render()` 로 다시 그려요 | `map` + `{ ...item, liked: !item.liked }` 사용(`item.liked = …` 로 직접 고치지 않음) / 좋아요를 눌러도 현재 검색·분류 상태가 유지됨 / 하트 모양이 눌렀다 다시 누르면 되돌아옴 / (선택) 헤더에 `♥ 2` 처럼 개수 표시 |

## 힌트 재료
- 1단계: MDN `Array.prototype.filter` — https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- 2단계: 상태 변수는 파일 맨 위에 `let` 으로 하나씩, `render()` 는 맨 아래에서 한 번 불러 첫 화면을 그려요. `loadItems()` 안에서는 `let` 을 또 쓰지 않고 `items = await response.json();` 로 **위쪽 변수에 넣어요**.
- 3단계 예시(다른 이름·다른 값):
  ```js
  const visible = places.filter((place) => {
    const matchCategory = selectedCategory === '전체' || place.category === selectedCategory;
    const matchSearch = place.name.includes(searchText);
    return matchCategory && matchSearch;
  });
  places = places.map((place) => (place.id === id ? { ...place, liked: !place.liked } : place));
  ```

## 자주 막히는 곳
- 검색·버튼을 눌러도 화면이 안 바뀜(콘솔에는 값이 바뀜) → 상태만 바꾸고 `render()` 를 안 부름
- 누를 때마다 카드가 계속 늘어남 → `render()` 에서 `innerHTML = ''` 로 비우지 않음
- `0개` + `조건에 맞는 상품이 없어요` 만 보이고 오류 없음 → `loadItems` 안에서 `let items = …` 로 새 변수를 또 만들어 위쪽 상태가 비어 있음. `let` 을 빼요
- 열자마자 CORS·`Failed to fetch` → 더블클릭으로 열었어요. Live Server 로 열어요
