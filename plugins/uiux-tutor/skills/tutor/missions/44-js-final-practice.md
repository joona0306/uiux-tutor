# 44. JS 마무리 실습 — 퍼블리싱 실습 페이지에 동작 붙이기 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **남이 만든 HTML 에 동작 붙이기**: 내가 앞 단원(W 단원)에서 만든 `clone/` 페이지의 HTML·CSS 는 그대로 두고, 클래스 이름을 **HTML 에서 한 글자씩 확인**해 `querySelector` 에 써요. 이름이 다르면 `null` 이라 오류가 나요. 먼저 CSS 에 열린 모양(`.site-nav.is-open` 등)이 있는지 보고, 없으면 CSS 에 더해요.
  - **이벤트 → 상태 바꾸기 → 화면 반영**: 메뉴는 `isOpen` 하나로 클래스·`aria-expanded`(`'true'`/`'false'`)를 함께 바꾸고, 슬라이드는 `currentIndex` 와 `%` 로 처음·끝에서 돌아가요. 키보드(Esc, ←/→)와 포커스(`focus()`)까지 챙기면 누구나 쓸 수 있어요.
  - **`showModal()` 이 해 주는 것**: HTML 의 `<dialog>` 에 `open` 속성이 남아 있으면 `showModal()` 이 `InvalidStateError` 를 내요. Esc 닫기·뒤쪽 막기·포커스 이동은 브라우저가 해 주고, 바깥 클릭 닫기는 직접 만들어요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. HTML 에 `<button class="menu-btn" aria-expanded="false">메뉴</button>` 와 `<nav class="menu"><a href="#">첫째</a></nav>` 를 넣어요)
  ```js
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  const setMenu = (isOpen) => {
    menu.classList.toggle('is-open', isOpen);
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  };
  menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { setMenu(false); menuBtn.focus(); }
  });
  ```
- 예상해 보기: HTML 의 클래스가 `menu-button` 인데 `querySelector('.menu-btn')` 로 쓰면 첫 줄 아래에서 어떤 오류가 날까요? — 답: `menuBtn` 이 `null` 이라 `Cannot read properties of null (reading 'addEventListener')` 가 나요.
- 공식 문서: [Element.classList (MDN)](https://developer.mozilla.org/ko/docs/Web/API/Element/classList) · [KeyboardEvent.key (MDN)](https://developer.mozilla.org/ko/docs/Web/API/KeyboardEvent/key) · [dialog 요소 (MDN)](https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements/dialog)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| JS44-1 기본 구조 | 내 `clone/` 페이지의 모바일 메뉴 구역에 JS 를 붙여요. 열고 닫기, 메뉴 안 링크를 누르거나 Esc 를 누르면 닫기(닫을 때 포커스는 메뉴 버튼으로) | HTML 의 클래스 이름을 확인해 `querySelector` 가 `null` 이 아님 / 클래스와 `aria-expanded` 가 같은 값(`'true'`/`'false'`) / 링크 클릭·Esc 로 닫히고 `focus()` 가 버튼으로 감 / 375px 에서 확인(넓으면 버튼이 숨어요) |
| JS44-2 개념 적용 | 같은 페이지의 슬라이드(배너·추천) 구역에 이전·다음 버튼과 ←/→ 키를 붙이고, 슬라이드 번호 문구(`2 / 4`)를 보여요 | 마지막에서 다음 → 첫 슬라이드, 첫 슬라이드에서 이전 → 마지막(`%` 사용) / 번호 문구가 슬라이드와 함께 바뀜 / `4 / 3` 같은 없는 번호가 안 나옴 / 키보드로 움직임 |
| JS44-3 응용 | 쿠폰·안내 모달을 `<dialog>` 와 `showModal()` 로 붙이고(닫기 버튼, 바깥 클릭 닫기), 자주 묻는 질문은 **하나만 열리게** 만들어요 | HTML 의 `<dialog>` 에 `open` 속성이 없음 / Esc 로 닫히고 뒤 페이지가 눌리지 않음(직접 확인해 적음) / 바깥 클릭 닫기는 `event.target === dialog` / 질문 하나를 열면 다른 질문이 닫히고 `aria-expanded` 도 맞게 바뀜 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- JS44-1: 메뉴 열린 모양이 원본 모바일 메뉴와 같음
- JS44-2: 슬라이드 번호·버튼 자리가 원본과 같음
- JS44-3: 해당 없음 (모달·질문 동작)

## 힌트 재료
- 1단계: MDN `classList`, `dialog` — https://developer.mozilla.org/ko/docs/Web/API/Element/classList
- 2단계: 먼저 HTML 에서 버튼·목록·슬라이드 요소의 클래스 이름을 종이에 적고, 상태 변수(`isOpen`, `currentIndex`) → "화면에 반영하는 함수" → 이벤트 연결 순서로 만들어요. 한 동작이 끝날 때마다 375px 에서 눌러 보고 키보드로도 써 봐요.
- 3단계 예시(다른 이름·다른 값):
  ```js
  const total = slides.length;
  const goTo = (index) => {
    currentIndex = (index + total) % total;
    slides.forEach((slide, i) => { slide.hidden = i !== currentIndex; });
    counter.textContent = `${currentIndex + 1} / ${total}`;
  };
  ```

## 자주 막히는 곳
- `Cannot read properties of null (reading 'addEventListener')` → `querySelector` 의 클래스 이름이 HTML 과 달라요. 한 글자씩 비교해요
- 메뉴 버튼을 눌러도 안 펼쳐짐(오류 없음) → 창이 넓어 버튼이 숨어 있거나, CSS 에 `.is-open` 모양이 없음
- `InvalidStateError` → `<dialog>` 에 `open` 속성이 붙은 채로 `showModal()` 을 불렀어요. HTML 의 `open` 을 지워요
- 모달 안쪽을 눌러도 닫힘 → `<dialog>` 자신에 `padding` 이 있음. 여백은 안쪽 상자에 줘요
