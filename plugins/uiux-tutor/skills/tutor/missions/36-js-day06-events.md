# 36. Day 06. 이벤트 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **`addEventListener` 의 세 부분**: `요소.addEventListener('click', 함수)` 는 "어느 요소가(요소) 어떤 일이 일어나면(이벤트) 무엇을 할지(함수)"를 **예약**해 두는 거예요. Figma 프로토타입의 "On click → 동작" 연결과 같아서, 누르기 전에는 아무 일도 안 일어나요. 함수는 이름만 넘기고(`showNext`) 뒤에 `()` 를 붙이지 않아요(붙이면 지금 바로 실행돼요).
  - **자주 쓰는 이벤트와 이벤트 객체**: `click`(누름), `input`(입력칸 글자가 바뀔 때마다), `submit`(폼 제출)이에요. 함수가 받는 `event` 로 `event.target`(실제로 누른 요소)을 알 수 있고, 폼에서는 `event.preventDefault()` 로 새로고침을 막아요.
  - **"전부 끄고, 누른 것만 켜기"**: 탭 메뉴는 `querySelectorAll` 로 모든 탭·패널에서 `is-active` 를 떼고(`forEach`), 누른 것에만 붙여요. 모달은 `classList` 로 열고 닫고, 배경 클릭은 `event.target === modal` 일 때만 닫아요(상자 안쪽 클릭과 구분).
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. HTML 에 `<button class="btn">누르기</button>`, `<p class="msg">기본</p>`, `<input class="memo" type="text">`, `<p class="count">0/20</p>` 를 넣어요)
  ```js
  const btn = document.querySelector('.btn');
  const msg = document.querySelector('.msg');
  btn.addEventListener('click', () => {
    msg.classList.toggle('is-on');
    msg.textContent = msg.classList.contains('is-on') ? '켜짐' : '꺼짐';
  });
  const memo = document.querySelector('.memo');
  memo.addEventListener('input', (event) => {
    document.querySelector('.count').textContent = `${event.target.value.length}/20`;
  });
  ```
- 예상해 보기: `btn.addEventListener('click', () => { … })` 를 `btn.addEventListener('clik', () => { … })` 로 오타 내면 버튼을 눌렀을 때 어떻게 될까요? — 답: 콘솔 오류 없이 아무 반응이 없어요(없는 이벤트 이름을 기다리기만 해요).
- 공식 문서: [addEventListener (MDN)](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener) · [Event.preventDefault (MDN)](https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault) · [이벤트 소개 (MDN)](https://developer.mozilla.org/ko/docs/Learn_web_development/Core/Scripting/Events)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| JS06-1 기본 구조 | 고른 사이트에 버튼 두 개의 동작을 붙여요: ① 다크 모드(또는 좋아요) 버튼 → `body`(또는 카드)에 클래스 토글하고 버튼 글자도 바꾸기 ② 안내 버튼 → 모달 열기, 닫기 버튼·어두운 배경 클릭으로 닫기(클래스로 보이기/숨기기) | `addEventListener('click', …)` 사용, 함수 이름 뒤에 `()` 로 바로 실행하지 않음 / `classList.toggle` 로 눌러서 켜고 다시 눌러서 끔 / 배경 클릭 닫기는 `event.target === 모달` 확인 / 상자 안쪽을 눌러도 안 닫힘 |
| JS06-2 개념 적용 | 고른 사이트의 탭 메뉴 구역(예: 상품 정보 / 후기 / 배송 안내)을 만들어요. 탭 버튼을 누르면 그 탭 패널만 보이게 해요 | `querySelectorAll` 로 탭 버튼·패널 목록을 찾고 `forEach` 로 "전부 끄고" 누른 것만 `is-active` 붙임 / 탭을 번갈아 눌러도 항상 패널이 하나만 보임 / 처음 화면에도 첫 탭이 켜져 있음 |
| JS06-3 응용 | 고른 사이트의 후기(또는 문의) 입력 폼을 만들어요. 입력칸 글자 수를 `7/50` 처럼 실시간으로 보이고, 제출하면 새로고침 없이 목록에 `<li>` 로 추가해요. 빈칸이면 안내 문구만 보이고 추가하지 않아요 | 글자 수에 `input` 이벤트, 제출에 `submit` 이벤트(`click` 이 아님) / 리스너 맨 위에 `event.preventDefault()` / 사용자가 쓴 글을 `textContent` 로 넣음(`innerHTML` 아님) / 빈칸 제출 시 목록이 늘지 않음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- JS06-1: 해당 없음 (토글 연습)
- JS06-2: 탭 개수·배치가 원본 탭 구역과 같음 (원본에 탭이 없으면 해당 없음)
- JS06-3: 해당 없음 (입력 폼 연습)

## 힌트 재료
- 1단계: MDN `addEventListener` — https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener
- 2단계: 요소를 먼저 `querySelector` 로 찾고 → 이벤트 이름과 함수를 연결 → 함수 안에서 `classList`·`textContent` 만 바꿔요. 탭은 "전체 끄기 → 누른 것 켜기" 두 단계. 폼은 `submit` 을 **폼**에 연결하고 `event.preventDefault()` 를 맨 위에.
- 3단계 예시(다른 이름·다른 값):
  ```js
  const tabs = document.querySelectorAll('.menu-tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((other) => other.classList.remove('is-active'));
      tab.classList.add('is-active');
    });
  });
  ```

## 자주 막히는 곳
- 눌러도 반응이 없고 오류도 없음 → 이벤트 이름 오타(`'clik'`, `'sumbit'`)
- 폼을 제출하면 화면이 깜빡이고 입력이 사라짐, 주소에 `?` 가 붙음 → `event.preventDefault()` 가 없음. 리스너 함수가 `(event) =>` 로 받는지도 확인해요
- 모달 상자 안쪽을 눌러도 닫힘 → 배경 클릭 리스너에 `event.target === modal` 확인이 없음
