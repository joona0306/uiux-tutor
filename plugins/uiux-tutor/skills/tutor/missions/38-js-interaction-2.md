# 38. JS 인터랙션 ② 슬라이드(캐러셀)·모달 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **번호 하나로 슬라이드 넘기기**: 지금 몇 번째인지를 `currentIndex` 변수 하나로 기억하고, `showSlide(index)` 가 그 번호만 보이게 해요. 다음은 `(currentIndex + 1) % 개수`, 이전은 `(currentIndex - 1 + 개수) % 개수` 라서 끝에서 처음으로 돌아가요. Figma 프로토타입에서 프레임 순서를 번호로 오가는 것과 비슷해요.
  - **자동 넘김은 기본 꺼짐 + 멈춤 버튼**: `setInterval(함수, 시간)` 이 돌려주는 타이머 번호를 변수에 받아 두면 `clearInterval(번호)` 로 멈출 수 있어요. 저절로 움직이는 화면은 읽는 데 방해가 되니 기본은 끄고, 사용자가 켜고 끌 버튼을 둬요. 켜기 전에 이미 켜져 있는지(`timerId === null`) 확인하지 않으면 타이머가 겹쳐 점점 빨라져요.
  - **`<dialog>` 모달**: `dialog.showModal()` 로 열면 브라우저가 Esc 로 닫기, 뒤 페이지 비활성, 안쪽으로 포커스 이동을 해 줘요. Day 06 의 클래스 모달은 이것을 전부 직접 만들어야 했어요. 바깥(막) 클릭 닫기는 `event.target === dialog` 로 직접 만들어요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. HTML 에 `.slide` 3개, `<button class="next">`, `<button class="stop">`, `<dialog class="box">…</dialog>`, `<button class="open">` 를 넣어요)
  ```js
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;
  const showSlide = (index) => {
    currentIndex = index;
    slides.forEach((slide, i) => { slide.hidden = i !== currentIndex; });
  };
  document.querySelector('.next').addEventListener('click', () => {
    showSlide((currentIndex + 1) % slides.length);
  });
  let timerId = setInterval(() => showSlide((currentIndex + 1) % slides.length), 2000);
  document.querySelector('.stop').addEventListener('click', () => clearInterval(timerId));
  document.querySelector('.open').addEventListener('click', () => document.querySelector('.box').showModal());
  showSlide(0);
  ```
- 예상해 보기: `(currentIndex + 1) % slides.length` 에서 `% slides.length` 를 빼면 마지막 슬라이드에서 다음을 눌렀을 때 어떻게 될까요(슬라이드 3개)? — 답: 번호가 3 이 되어 `i !== 3` 이 모두 참이라 슬라이드가 전부 사라져요.
- 공식 문서: [dialog 요소 (MDN)](https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements/dialog) · [setInterval (MDN)](https://developer.mozilla.org/ko/docs/Web/API/Window/setInterval) · [clearInterval (MDN)](https://developer.mozilla.org/ko/docs/Web/API/Window/clearInterval)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| JS38-1 기본 구조 | 고른 사이트의 메인 배너(또는 추천 슬라이드, 슬라이드 3개 이상, 자리 표시 사진)를 `currentIndex` 하나로 넘겨요. ‹ › 버튼과 키보드 ←/→ 로 움직이고 끝에서 처음으로 돌아가요 | `currentIndex` 변수와 `showSlide(index)` 함수 / 마지막에서 다음을 누르면 첫 슬라이드(`%` 사용) / ←/→ 키로도 움직임 / 이벤트에 함수 이름만 넘김(`showNext`, 괄호 없음) |
| JS38-2 개념 적용 | 슬라이드에 자동 넘김을 더해요. 기본은 꺼 두고 "자동 넘김 시작/멈춤" 버튼 하나로 켜고 끄고, 버튼 글자도 바꿔요 | 처음 열었을 때 저절로 넘어가지 않음 / `setInterval` 의 반환값을 `timerId` 에 받아 `clearInterval(timerId)` 로 멈춤 / 시작을 연달아 눌러도 속도가 빨라지지 않음(`timerId === null` 확인) / 기본을 꺼 둔 이유를 한 줄로 말함 |
| JS38-3 응용 | 고른 사이트의 안내 구역(예: 사이즈표, 이용 안내)을 `<dialog>` 모달로 만들어요. 열기·닫기 버튼, 바깥 막 클릭 닫기를 붙이고 Day 06 의 클래스 모달과 무엇이 다른지 적어요 | `showModal()` 로 열고 `close()` 로 닫음(HTML 에 `open` 속성이 없음) / Esc 로 닫히고 뒤 페이지가 눌리지 않음 / 바깥 클릭 닫기는 `event.target === dialog`, 안쪽 클릭은 안 닫힘 / 차이를 "Esc·뒤 막기·포커스를 브라우저가 해 준다" 로 설명함 |

## 힌트 재료
- 1단계: MDN `dialog` 요소 — https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements/dialog , `setInterval` — https://developer.mozilla.org/ko/docs/Web/API/Window/setInterval
- 2단계: 상태는 `currentIndex` 와 `timerId`(처음 `null`) 두 개. `showSlide` 는 번호만 받아 화면을 바꾸고, 버튼·키보드·타이머가 모두 이 함수를 불러요. 모달 안쪽 여백은 `<dialog>` 가 아니라 안쪽 상자에 줘야 바깥 클릭 판정이 맞아요.
- 3단계 예시(다른 이름·다른 값):
  ```js
  let timerId = null;
  const startAuto = () => {
    if (timerId === null) { timerId = setInterval(showNext, 3000); }
  };
  const stopAuto = () => { clearInterval(timerId); timerId = null; };
  panel.addEventListener('click', (event) => { if (event.target === panel) { panel.close(); } });
  ```

## 자주 막히는 곳
- 처음부터 2번 슬라이드가 보이고 › 가 안 먹음 → `addEventListener('click', showNext())` 처럼 괄호를 붙여 바로 실행됨. 함수 이름만 넘겨요
- `hidden` 을 붙였는데 슬라이드가 모두 보임 → `.slide` 에 CSS `display` 를 줬음(CSS 가 `hidden` 보다 이김). `.slide` 에는 `display` 를 주지 않아요
- 모달이 바깥을 눌러도 안 닫힘, 또는 안쪽을 눌러도 닫힘 → `<dialog>` 는 바깥 클릭으로 안 닫히니 `event.target === dialog` 코드가 필요하고, `<dialog>` 자체에 `padding` 이 있으면 안쪽 클릭도 바깥으로 판정돼요
