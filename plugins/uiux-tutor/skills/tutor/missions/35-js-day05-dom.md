# 35. Day 05. DOM — 미션 예시

## 배우기 재료
- 핵심 개념
  - **DOM 은 HTML 의 레이어 패널**: 브라우저는 HTML 을 읽어 부모·자식으로 이어진 요소 나무(DOM)로 만들어요. `document.querySelector('.card')` 는 CSS 선택자로 요소 **하나**를, `querySelectorAll` 은 **여러 개**(목록)를 찾아요. 못 찾으면 오류 없이 `null` 이 와요.
  - **글자와 클래스 바꾸기**: `요소.textContent = '새 글'` 로 글자를 바꾸고, `요소.classList.add / remove / toggle('is-active')` 로 클래스를 붙이고 떼요(클래스 이름에 점 `.` 을 붙이지 않아요). 모양은 CSS 가 정하고 JS 는 클래스만 바꿔요.
  - **새 요소 만들어 넣기**: `createElement('li')` → `textContent` 로 내용 채우기 → `부모.append(자식)`. 배열은 `map` 으로 요소 배열로 바꾼 뒤 `append(...배열)` 로 한 번에 넣어요. 사용자가 입력한 글은 `innerHTML` 이 아니라 `textContent` 로 넣어요(`<img onerror>` 같은 코드가 실행될 수 있어요).
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. HTML 에 `<ul class="list"></ul>` 하나와 `<button class="btn">강조</button>` 를 넣어요)
  ```js
  const list = document.querySelector('.list');
  const names = ['사과', '배', '귤'];
  const items = names.map((name) => {
    const li = document.createElement('li');
    li.textContent = name;
    return li;
  });
  list.append(...items);
  document.querySelector('.btn').classList.toggle('is-active');
  ```
- 예상해 보기: `list.append(...items)` 에서 `...` 를 빼고 `list.append(items)` 로 쓰면 화면에는 무엇이 보일까요? — 답: 요소 대신 `[object HTMLLIElement],[object HTMLLIElement],…` 같은 글자가 보여요(배열 자체를 글자로 바꿔 넣어서).
- 공식 문서: [querySelector (MDN)](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector) · [textContent (MDN)](https://developer.mozilla.org/ko/docs/Web/API/Node/textContent) · [classList (MDN)](https://developer.mozilla.org/ko/docs/Web/API/Element/classList)

| 미션 | 할 일 | 완료 기준 |
|---|---|---|
| JS05-1 기본 구조 | 고른 사이트의 제목·안내 글 중 하나를 JavaScript로 바꿔요(예: "오늘의 추천 여행지" → 날짜가 들어간 문장) | `querySelector` 로 요소를 찾음 / `textContent` 로 글자를 바꿈 / `<script>` 위치 또는 `defer` 로 요소가 있을 때 실행됨 |
| JS05-2 개념 적용 | 카드 목록 구역을 **배열 데이터**로 그려요(카드 6개, 내가 만든 가상 데이터) | 객체 배열(이름·지역·사진 경로) / `createElement` → 내용 채우기 → `append` / 사용자에게 보일 글자는 `textContent` (innerHTML 아님) |
| JS05-3 응용 | 카드 하나를 누른 것처럼 강조하는 클래스를 붙였다 뗐다 해요(버튼 하나로) | `classList.toggle` 사용 / CSS에 강조 클래스 정의 / `querySelectorAll` 과 `querySelector` 차이를 말할 수 있음 |

## 힌트 재료
- 1단계: MDN `Document.querySelector()` — https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector
- 2단계: 찾기(querySelector) → 만들기(createElement) → 채우기(textContent) → 넣기(append)
- 3단계 예시(다른 이름):
  ```js
  const box = document.querySelector('.notice');
  const item = document.createElement('li');
  item.textContent = '새 소식';
  box.append(item);
  ```

## 자주 막히는 곳
- `null` 오류 → 선택자 오타, 또는 스크립트가 HTML보다 먼저 실행
- 사용자 입력을 innerHTML로 넣음 → 보안 문제, textContent로
