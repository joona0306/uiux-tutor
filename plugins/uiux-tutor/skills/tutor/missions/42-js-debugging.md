# 42. JS 디버깅 연습 (DevTools·오류 읽기) — 미션 예시

## 배우기 재료
- 핵심 개념
  - **오류 메시지는 안내문**: `ReferenceError: emptyMesage is not defined` 와 `at render (main.js:18:3)` 처럼 ① 오류 이름(`ReferenceError`=그런 이름 없음, `TypeError`=그 값으로 그 일을 못 함, `SyntaxError`=문법 틀림) ② 내용 ③ 파일·줄 번호 ④ 아래로 이어지는 `at` 줄(누가 불렀는지, 호출 순서)로 읽어요. 오류가 **난** 줄과 **원인** 줄은 다를 수 있어요.
  - **패널마다 맡은 질문**: 빨간 오류는 Console, 화면의 HTML·클래스는 Elements(레이어 패널과 비슷), 파일·데이터를 받았는지는 Network 의 Status(200/404), 코드가 그 순간 들고 있는 값은 Sources 의 **중단점**(Step over 로 한 줄씩, 오른쪽 Scope 에서 값 보기)이에요.
  - **오류가 안 나는 버그**: 값을 직접 봐요. `console.log` 로 찍고, 배열은 `console.table` 로 표처럼 봐요. 글자 앞뒤 공백은 `JSON.stringify(값)` 으로 찍으면 보여요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. 아래를 `main.js` 에 일부러 이렇게 치고 콘솔을 읽어요)
  ```js
  const prices = [{ name: '노트', price: 3000 }, { name: '펜', price: 1500 }];
  console.table(prices);
  const found = prices.find((p) => p.name === '가위');
  console.log(found);
  console.log(found.price);
  ```
- 예상해 보기: 마지막 줄 `found.price` 에서 나는 오류는 `ReferenceError`, `TypeError`, `SyntaxError` 중 무엇일까요? — 답: `TypeError`(`Cannot read properties of undefined (reading 'price')`). `find` 가 못 찾아 `undefined` 를 돌려줬고, 그 값으로 `.price` 를 읽는 일을 못 해서요.
- 공식 문서: [무엇이 잘못됐나요? JavaScript 문제 해결 (MDN)](https://developer.mozilla.org/ko/docs/Learn_web_development/Core/Scripting/What_went_wrong) · [console.table (MDN)](https://developer.mozilla.org/ko/docs/Web/API/console/table_static)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| JS42-1 기본 구조 | 앞에서 만든 카드 목록 앱을 `debug-practice/` 폴더로 **복사**하고, 일부러 오류 3가지(없는 변수 이름 오타 → `ReferenceError`, `null` 에 `addEventListener` → `TypeError`, 괄호 하나 빼기 → `SyntaxError`)를 하나씩 만들어 콘솔 메시지를 읽어요. `debug-log.md` 에 오류 이름·내용·파일과 줄 번호·`at` 줄을 적어요 | `debug-log.md` 파일이 있고 오류 3종 모두 이름·내용·줄 번호가 적혀 있음 / 각 오류의 원인 줄과 실제로 오류가 난 줄이 같은지 다른지 적음 / 하나씩 고친 뒤 콘솔 빨간 줄이 없어짐 |
| JS42-2 개념 적용 | Network 패널에서 `items.json` 과 사진 파일의 Status 를 확인하고, 파일 이름을 일부러 틀려 `404` 를 만들어 봐요. 중단점을 `render()` 안에 걸고 Step over 로 한 줄씩 가며 Scope 에서 `searchText`·`visible` 값을 확인해요. 배열은 `console.table` 로 찍어요 | `debug-log.md` 에 정상 `200` 과 틀린 이름의 `404` 가 각각 적혀 있음 / 중단점에서 멈춘 순간의 변수 값 2개를 적음 / `console.table(items)` 가 표로 나옴 / 404 를 고쳐 정상으로 되돌림 |
| JS42-3 응용 | 오류 메시지가 **안 나는** 버그 2개를 심고 가설-검증으로 찾아요: ① 분류 값에 공백이 붙어(`'국내 '`) 결과가 0개 ② `sort` 를 원본 배열에 바로 써서 순서가 안 돌아옴. 가설을 먼저 쓰고 `console.log`·중단점으로 확인한 뒤 고쳐요 | 각 버그마다 `debug-log.md` 에 "증상 → 가설 → 확인한 방법 → 원인 → 고친 줄" 5칸이 있음 / ①은 `JSON.stringify` 로 공백을 확인, ②는 `[...배열].sort(...)` 로 복사본에 정렬 / 고친 뒤 증상이 사라짐 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- JS42-1: 해당 없음 (디버깅 연습)
- JS42-2: 해당 없음 (디버깅 연습)
- JS42-3: 해당 없음 (디버깅 연습)

## 힌트 재료
- 1단계: MDN 문제 해결 안내 — https://developer.mozilla.org/ko/docs/Learn_web_development/Core/Scripting/What_went_wrong
- 2단계: 순서는 항상 같아요. ① Console 빨간 줄이 있나 → 있으면 오류 이름·줄 번호부터 ② 오류가 없는데 이상하면 값을 직접 보기(`console.log`, `console.table`, 중단점) ③ 데이터·사진이 안 오면 Network 의 Status. 중단점은 Sources 패널에서 줄 번호를 눌러요.
- 3단계 예시(다른 이름·다른 값):
  ```js
  console.log(JSON.stringify(selectedCategory));   // "국내 " 처럼 공백이 보여요
  console.table(visibleItems);
  const sorted = [...visibleItems].sort((a, b) => a.price - b.price);
  ```

## 자주 막히는 곳
- 오류를 고쳤더니 다른 오류가 나옴 → 앞 오류가 뒤 오류를 가리고 있었어요. 위에서부터 하나씩 고치고 매번 새로고침해요
- 빨간 오류가 없는데 화면이 그대로 → `querySelector` 가 못 찾으면 오류 없이 `null` 이 와요. 선택자 이름을 `console.log` 로 확인해요
- 중단점을 걸었는데 안 멈춤 → 그 줄이 실행되기 전에 파일이 먼저 끝났거나, 다른 파일(`main.js` 가 아닌 것)에 걸었어요. 새로고침 후 다시 확인해요
