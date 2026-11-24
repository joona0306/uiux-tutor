# 40. Day 07. 모듈과 fetch — 미션 예시

## 배우기 재료
- 핵심 개념
  - **모듈: `export` 와 `import`**: 코드를 파일로 나누고, 내보낼 것에 `export` 를 붙여요. 받는 쪽은 `import { formatPrice } from './utils.js';` 처럼 **같은 이름**을 중괄호 안에 써요(`export default` 는 중괄호 없이 받아요). HTML 에서는 `<script type="module" src="main.js"></script>` 로 연결하고, `import` 경로의 `./` 와 `.js` 는 빼먹지 않아요. Figma 에서 컴포넌트를 라이브러리 파일로 나눠 가져다 쓰는 것과 비슷해요.
  - **JSON 은 글자로 쓴 데이터**: JS 객체와 닮았지만 키와 문자열은 **큰따옴표**만, 마지막 쉼표·주석은 없어요. `fetch('./data/items.json')` 로 받아 `response.json()` 으로 JS 값으로 바꿔요.
  - **`fetch` 순서와 실패 대비**: `async` 함수 안에서 `const response = await fetch(주소);` → `if (!response.ok) throw new Error(...)`(404 여도 fetch 자체는 성공이라 `ok` 로 확인해요) → `const data = await response.json();`. 전체를 `try { } catch (error) { }` 로 감싸 실패하면 안내 문구를 보여요. **파일을 더블클릭(file://)으로 열면 막혀요 — VS Code Live Server 로 열어요.**
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `lab/` 폴더에 `index.html`, `main.js`, `utils.js`, `notes.json` 을 만들고 `index.html` 은 Live Server 로 열어요)
  ```json
  [{ "id": 1, "title": "첫 메모" }, { "id": 2, "title": "둘째 메모" }]
  ```
  ```js
  // utils.js
  export const countText = (list) => `총 ${list.length}개`;
  ```
  ```js
  // main.js  (index.html: <script type="module" src="main.js"></script>)
  import { countText } from './utils.js';
  async function loadNotes() {
    try {
      const response = await fetch('./notes.json');
      if (!response.ok) { throw new Error(`상태 코드 ${response.status}`); }
      const notes = await response.json();
      console.log(countText(notes), notes[0].title);
    } catch (error) {
      console.error('불러오지 못했어요', error);
    }
  }
  loadNotes();
  ```
- 예상해 보기: `fetch('./notes.json')` 의 파일 이름을 `./note.json` 으로 틀리게 쓰면 콘솔에 무엇이 나올까요? — 답: `404 (Not Found)` 요청 줄과 함께, 우리가 던진 `상태 코드 404` 오류가 `catch` 에서 `불러오지 못했어요` 와 함께 찍혀요(`ok` 확인을 안 하면 대신 JSON 읽기 오류가 나요).
- 공식 문서: [JavaScript 모듈 (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules) · [fetch 사용하기 (MDN)](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch) · [JSON (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| JS40-1 기본 구조 | 고른 사이트 카드 구역용 데이터를 Day 04 의 `items` 배열에서 **`data/items.json` 파일**로 옮겨요(내가 만든 가상 데이터 6개 이상). 가격 표시 함수 `formatPrice` 는 `utils.js` 로 내보내고(`export`) `main.js` 에서 가져와요(`import`) | `data/items.json` 이 JSON 규칙을 지킴(키·문자열 큰따옴표, 마지막 쉼표 없음) / `<script type="module" src="main.js">` / `import { formatPrice } from './utils.js'` 가 오류 없이 동작 / Live Server 주소(`http://127.0.0.1:5500/…`)로 열었음 |
| JS40-2 개념 적용 | `async` 함수 `loadItems` 로 `items.json` 을 받아 콘솔에 찍어요. `response.ok` 확인과 `try...catch` 로 실패에 대비해요 | `await fetch` → `if (!response.ok)` → `await response.json()` 순서 / 전체가 `try...catch` / 파일 이름을 일부러 틀리게 해 `catch` 에서 안내 문구가 나오는 것을 확인했다가 되돌림 / 콘솔에 배열이 나옴(`Promise {<pending>}` 아님) |
| JS40-3 응용 | 받은 데이터로 고른 사이트의 카드 목록을 화면에 그려요(Day 05 방식). 불러오는 동안 `불러오는 중...` 을 보이고, 실패하면 안내 문구와 **다시 시도** 버튼을 보여요 | 카드 개수 = JSON 항목 개수 / 사용자에게 보일 글자는 `textContent`(`innerHTML` 아님) / 성공하면 `불러오는 중...` 이 사라짐 / 실패 시 안내 문구 + 다시 시도 버튼, 누르면 다시 불러옴 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- JS40-1: 해당 없음 (데이터 파일)
- JS40-2: 해당 없음 (콘솔 결과)
- JS40-3: 카드 요소 순서·한 줄 카드 수가 원본과 같음, 불러오는 중·실패 문구 자리가 원본과 같은 종류 (원본에 없으면 그 부분 빼기)

## 힌트 재료
- 1단계: MDN `fetch` 사용하기 — https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch , 모듈 — https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules
- 2단계: ① JSON 파일 만들기(큰따옴표) ② `utils.js` 에서 `export` ③ `main.js` 맨 위에서 `import` ④ `async function` 안에서 `try { fetch → ok 확인 → json } catch { 안내 }`. 화면 그리기는 JSON 을 받은 **뒤** 같은 `try` 안에서 해요.
- 3단계 예시(다른 이름·다른 값):
  ```js
  async function loadPlaces() {
    const status = document.querySelector('.status');
    try {
      const response = await fetch('./data/places.json');
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const places = await response.json();
      status.textContent = `${places.length}곳`;
    } catch (error) {
      status.textContent = '불러오지 못했어요.';
    }
  }
  ```

## 자주 막히는 곳
- 콘솔에 `CORS policy`, `Failed to fetch`, 또는 `file:///` 오류 → HTML 을 더블클릭으로 열었어요. VS Code 에서 **Open with Live Server** 로 열어요
- `Cannot use import statement outside a module` → `<script>` 에 `type="module"` 이 없음
- `Unexpected token '<', "<!DOCTYPE "... is not valid JSON` → 없는 주소의 404 안내 페이지를 JSON 으로 읽음. `response.ok` 를 먼저 확인하고 파일 경로·이름을 봐요
- `Expected double-quoted property name in JSON` 같은 오류 → JSON 에 작은따옴표나 마지막 쉼표를 씀
- 콘솔에 `Promise {<pending>}` → `await` 를 빼먹음
