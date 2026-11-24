# 45. JS 점검 (보충·평가) — 미션 예시

> 점검 회차: 힌트는 1단계까지만

## 배우기 재료
- 핵심 개념 (JS 단원 종합 복습 — Day 01~Day 08)
  - **데이터 → 화면 → 이벤트 한 바퀴**: 배열을 `filter` 로 거르고(Day 04) → `createElement`·`append` 로 목록을 그리고(Day 05) → 고를 때마다 상태를 바꾸고 다시 그려요(Day 06·08). 같은지 비교는 `===`, 합치는 조건은 `&&`/`||` 예요.
  - **인터랙션의 약속**: 열고 닫는 UI 는 `aria-expanded` 와 보이는 상태를 같은 값으로, `<dialog>` 는 `showModal()` 로 열고 바깥 클릭 닫기는 `event.target === dialog`, 폼은 `preventDefault()` 후 `validity` 로 문구를 골라요.
  - **막혔을 때 순서**: 콘솔 빨간 줄 읽기 → `console.log` 로 값 보기 → 중단점. 안 풀리는 TODO 는 두고 다음으로 넘어가요(부분 점수).
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요 — 데이터 → 화면 → 이벤트 한 바퀴. HTML 에 `<select id="kind"><option>전체</option><option>과일</option><option>채소</option></select>` 와 `<ul class="out"></ul>` 를 넣어요)
  ```js
  const foods = [{ name: '사과', kind: '과일' }, { name: '당근', kind: '채소' }, { name: '배', kind: '과일' }];
  const out = document.querySelector('.out');
  const show = (kind) => {
    const visible = foods.filter((food) => kind === '전체' || food.kind === kind);
    out.innerHTML = '';
    visible.forEach((food) => {
      const li = document.createElement('li');
      li.textContent = food.name;
      out.append(li);
    });
  };
  document.querySelector('#kind').addEventListener('change', (event) => show(event.target.value));
  show('전체');
  ```
- 예상해 보기: `kind === '전체' || food.kind === kind` 에서 `||` 를 `&&` 로 바꾸면 처음 화면(`전체`)에 무엇이 보일까요? — 답: 아무것도 안 보여요(`food.kind` 는 `'전체'` 가 아니라서 `&&` 의 뒤쪽이 거짓).
- 공식 문서: [Array.prototype.filter (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) · [change 이벤트 (MDN)](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/change_event)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| JS45-1 종합 문제 ① 예상 | 코드를 **실행하지 않고** 손(종이)으로 콘솔 결과를 적어요. 1) `console.log('5' + 3 + 2); console.log(5 + 3 + '2');` 2) `total = 45000`, `hasCoupon = true` 일 때 `if (total >= 50000 && hasCoupon) 'A'`, `else if (total >= 40000 \|\| hasCoupon) 'B'`, `else 'C'` 3) `const f = (a, b) => { a + b; }; console.log(f(1, 2));` 4) `[{ n: 'a', price: 10 }, { n: 'b', price: 30 }].filter((x) => x.price >= 20).map((x) => x.n)` 5) `const a = { n: 1 }; const b = { ...a }; b.n = 2; const c = a; c.n = 3; console.log(a.n, b.n);` 6) `console.log('A'); button.addEventListener('click', () => console.log('B')); console.log('C');` 후 버튼을 한 번 누름 7) `async function load() { console.log(1); await fetch('./items.json'); console.log(2); } load(); console.log(3);` | 7문제 모두 답을 적음 / 답마다 한 줄 이유(계산 순서·규칙 이름)가 있음 / 실행해 보지 않고 적었음을 밝히고, 나중에 실행해 확인한 것과 못 한 것을 구분해 적음 |
| JS45-2 종합 문제 ② 작은 실습 | 고른 사이트 카드 데이터(가상 `items` 8개)로 `check-data.js`: ① `formatPrice` ② 한 카테고리의 이름 배열 ③ 가격 합계 ④ 가장 싼 항목 ⑤ `liked` 를 뒤집은 **새 배열**(원본 유지). 그리고 `check-ui.html`: ⑥ `aria-expanded` 아코디언 하나 ⑦ `<dialog>` 모달 열고 닫기 ⑧ 바깥 막 클릭으로 닫기 | ①~⑤ 결과가 콘솔에 나오고 손계산과 같음 / ⑤ 뒤 원본 `liked` 가 그대로 / ⑥ 열고 닫을 때마다 `aria-expanded` 가 `'true'`/`'false'` 로 바뀜 / ⑦⑧ `showModal()`·`close()`, 바깥 클릭 닫기는 `event.target === dialog`, 안쪽 클릭은 안 닫힘 |
| JS45-3 종합 문제 ③ 찾기 앱 + 자기 점검 | 고른 사이트의 카드 목록 구역을 앱으로 혼자 만들어요: `items.json` 을 `fetch`(`try...catch`·`response.ok`)로 불러오고, 분류 `<select>` 의 `change` 와 검색 폼(`required minlength="2"`, 오류 문구는 `textContent`)으로 거르고, 상태를 보고 `render()` 로 그려요. 끝나면 자기 점검표(변수·조건·반복·함수·배열 메서드·DOM·이벤트·인터랙션·폼 검사·모듈·fetch·디버깅 12항목)에 "예/아직"을 표시해요 | Live Server 로 열었을 때 콘솔에 빨간 오류가 없음 / 분류를 고르면 목록과 `N개` 문구가 바뀌고, 검색어 1글자면 오류 문구가 보임 / 파일 이름을 틀리게 하면 안내 문구가 나옴(확인 후 되돌림) / 점검표 12항목에 표시, "아직" 항목마다 다시 볼 회차(JS 번호)와 보충 계획 한 줄 |

## 힌트 재료
- 1단계(점검 회차는 여기까지만): MDN 문서 — [Array.prototype.filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) · [fetch 사용하기](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch) · [dialog 요소](https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements/dialog)
- 정답 확인용(튜터용 — **미션을 제출한 뒤에만** 보여 줘요): 1) `532`, `82` 2) `B` 3) `undefined`(`{ }` 를 썼는데 `return` 이 없음) 4) `['b']` 5) `3 2`(`c = a` 는 같은 객체라 `a.n` 도 3, `b` 는 복사본이라 2) 6) `A`, `C` 가 먼저, 버튼을 누를 때마다 `B` 가 한 줄씩 7) `1`, `3`, 그다음 `2`(`await` 아래 줄은 응답이 온 뒤)

## 자주 막히는 곳
- 예상 문제에서 `5 + 3 + '2'` 를 `'532'` 로 적음 → 왼쪽부터 계산해서 `5 + 3` 이 먼저 `8` 이 된 뒤 `'2'` 와 이어져 `'82'`(Day 01)
- 앱이 `fetch` 에서 막힘(CORS·`Failed to fetch`) → 더블클릭으로 열었어요. Live Server 로 열어요
- 틀린 문제·못 한 TODO 마다 다시 볼 곳을 적지 않음 → 계산·조건은 Day 01~02, 함수는 Day 03, 배열 메서드는 Day 04·JS 복습 ①, DOM 은 Day 05, 이벤트는 Day 06, 인터랙션은 JS 인터랙션 ①②·폼 검사, 불러오기는 Day 07, 앱 구조는 Day 08, 오류 찾기는 JS 디버깅
