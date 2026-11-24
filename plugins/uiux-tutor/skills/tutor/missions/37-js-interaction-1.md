# 37. JS 인터랙션 ① 모바일 메뉴·탭·아코디언 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **보이는 상태와 들리는 상태를 함께 바꾸기**: 메뉴 버튼이 열림/닫힘일 때 화면에서는 클래스(`is-open`)나 `hidden` 으로 보이고 숨기고, 화면 읽기 프로그램을 위해서는 `aria-expanded="true"/"false"` 를 같이 적어요. `aria-controls` 는 "이 버튼이 어느 요소를 조종하는지"(그 요소의 `id`)를 알려 줘요. 둘은 항상 같은 값 하나(`isOpen`)로 바꿔요. Figma 에서 레이어를 눈으로 숨기는 것과, 접근성 주석을 같이 다는 것의 차이예요.
  - **탭의 `role` 과 방향키**: 탭 목록은 `role="tablist"`, 각 버튼은 `role="tab"` + `aria-selected`, 내용은 `role="tabpanel"` 이에요. 켜진 탭만 `tabindex="0"`, 나머지는 `-1` 로 두고 ←/→ 키로 옮겨요. 끝에서 처음으로 돌아가는 번호는 `(index + 1) % 탭개수` 로 계산해요.
  - **아코디언: `<details>` 먼저, JS 는 필요할 때**: `<details><summary>` 는 JS 없이 열고 닫혀요. "한 번에 하나만 열기" 같은 규칙이 필요할 때만 JS 를 쓰고, `getAttribute('aria-expanded')` 는 **글자**(`'true'`)를 돌려주니 `=== 'true'` 로 비교해요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. HTML 에 `<button class="menu-btn" aria-expanded="false" aria-controls="nav">메뉴</button>` 와 `<nav id="nav" hidden>…</nav>` 를 넣어요)
  ```js
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('#nav');
  menuBtn.addEventListener('click', () => {
    const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!isOpen));
    nav.hidden = isOpen;
  });
  ```
- 예상해 보기: `=== 'true'` 를 `=== true` 로 바꾸면 메뉴는 어떻게 될까요? — 답: `getAttribute` 는 글자를 돌려줘서 항상 `false` 가 되고, 한 번 열린 뒤 다시 눌러도 닫히지 않아요(계속 "열기"만 실행돼요).
- 공식 문서: [WAI-ARIA 소개 (MDN)](https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA) · [ARIA 속성 목록 (MDN)](https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA/Reference/Attributes) · [details 요소 (MDN)](https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements/details)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| JS37-1 기본 구조 | 고른 사이트 머리글의 모바일 메뉴 버튼을 만들어요. 누르면 메뉴가 열리고 닫히며, 열려 있을 때 Esc 를 누르면 닫히고 포커스가 메뉴 버튼으로 돌아와요 | 버튼에 `aria-expanded`(처음 `"false"`)와 `aria-controls` / 클릭할 때 클래스(또는 `hidden`)와 `aria-expanded` 가 **같은 상태**로 바뀜 / Esc 로 닫히고 `focus()` 가 버튼으로 감 / 창 폭을 좁혀(375px) 확인 |
| JS37-2 개념 적용 | 고른 사이트의 탭 구역(예: 소개 / 일정 / 후기)을 접근성 속성과 함께 만들어요. 클릭과 ←/→ 키로 탭을 바꾸고 끝에서 처음으로 돌아가게 해요 | `tablist`·`tab`·`tabpanel` 역할과 `aria-selected` / 선택된 탭만 `tabindex="0"`, 패널은 `hidden` 으로 하나만 보임 / →를 마지막 탭에서 누르면 첫 탭, ←를 첫 탭에서 누르면 마지막 탭(`%` 사용) |
| JS37-3 응용 | 고른 사이트의 자주 묻는 질문 구역을 `<details>` 로 먼저 만들고, 같은 구역을 JS 버전(버튼 + `aria-expanded`)으로 한 번 더 만들어요. 두 방식을 언제 쓸지 두세 줄로 적어요 | `<details>` 버전은 JS 없이 열리고 닫힘 / JS 버전은 `=== 'true'` 로 읽어 반복해서 열고 닫을 수 있음 / 비교 글에 "JS 없이 되는 것은 `<details>`, 한 번에 하나만 열기 같은 규칙은 JS" 같은 판단 이유가 들어 있음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- JS37-1: 메뉴 열린 모양(위치·항목 순서)이 원본 모바일 메뉴와 같음
- JS37-2: 탭 배치가 원본 탭 구역과 같음
- JS37-3: 질문 목록 모양(열림 표시 자리)이 원본과 같음

## 힌트 재료
- 1단계: MDN ARIA 속성 목록에서 `aria-expanded`·`aria-selected` 찾기 — https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA/Reference/Attributes
- 2단계: 상태를 변수 하나(`isOpen`)로 정해 두고, 클래스·`hidden`·`aria-expanded` 를 모두 그 값으로 바꿔요. 탭은 `selectTab(index)` 함수 하나로 "모든 탭 끄기 → index 탭 켜기"를 하고, 클릭과 키보드가 같은 함수를 불러요.
- 3단계 예시(다른 이름·다른 값):
  ```js
  const tabList = document.querySelectorAll('[role="tab"]');
  tabList.forEach((tab, index) => {
    tab.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        tabList[(index + 1) % tabList.length].focus();
      }
    });
  });
  ```

## 자주 막히는 곳
- 메뉴 버튼이 안 보임 → 창이 넓어서(CSS 가 버튼을 숨기는 폭 이상) 그래요. 창 폭을 줄이거나 DevTools 기기 모드로 확인해요
- 방향키를 눌러도 탭이 안 바뀜 → 키 입력은 포커스가 있는 요소에서 일어나요. 탭을 한 번 누르거나 Tab 키로 탭까지 간 뒤에 눌러요
- 열리기만 하고 안 닫힘 → `getAttribute(...) === true` 처럼 글자와 불리언을 비교함. `'true'` 와 비교해요
