# 06. W06. CSS 연결·선택자·우선순위 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **CSS 연결**: HTML의 `<head>` 안에 `<link rel="stylesheet" href="style.css">` 를 넣으면 `style.css` 의 규칙이 적용돼요. CSS 한 규칙은 `선택자 { 속성: 값; }` 모양이에요. Figma로 치면 "어느 레이어에" + "어떤 Design 패널 값"을 한 줄에 적는 거예요.
  - **선택자**: `p`(태그) · `.card`(클래스) · `#hero`(아이디) · `.site-nav a`(자손: 안에 있는 것) · `h2, h3`(그룹) · `a:hover`(마우스를 올렸을 때) · `a:focus-visible`(키보드로 닿았을 때).
  - **우선순위**: 두 규칙이 부딪치면 점수(아이디 > 클래스 > 태그)가 높은 쪽이, 같으면 나중에 쓴 쪽이 이겨요. 글자색은 자식에게 상속되고 테두리는 상속되지 않아요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `index.html` 의 `<head>` 에 `<link rel="stylesheet" href="style.css">` 를 넣고, body 에 `<h2 class="title">안녕</h2>` 같은 요소 몇 개를 두세요)
  ```css
  h2 { color: navy; }
  .title { color: tomato; }
  .box .title { font-weight: 700; }
  a:hover { text-decoration: underline; }
  a:focus-visible { outline: 3px solid #2563eb; }
  ```
- 예상해 보기: `<h2 class="title">` 의 글자색은 위 규칙 중 `h2 { color: navy; }` 와 `.title { color: tomato; }` 중 무슨 색일까요? 두 규칙의 순서를 바꾸면 달라질까요? — 답: tomato(클래스가 태그보다 점수가 높아요). 순서를 바꿔도 같아요. 같은 점수일 때만 순서가 영향을 줘요.
- 공식 문서: [CSS 선택자 (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_selectors) · [명시도 (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/Specificity)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| W06-1 기본 구조 | 앞에서 만든 페이지에 `style.css` 를 만들어 연결하고, 고른 사이트의 머리글·목록·바닥글 구역에 배경색과 글자색을 입혀요(태그·클래스 선택자) | `<link rel="stylesheet" href="style.css">` 가 `<head>` 안에 있음 / 저장하면 화면이 바뀜(Live Server) / 클래스 선택자 규칙 3개 이상 |
| W06-2 개념 적용 | 고른 사이트의 목록 카드 구역에 자손 선택자(예: `.place-list .place-name`)로 카드 이름만 굵게 하고, 그룹 선택자(`a, b`)로 설명 글자 두 종류를 같은 회색으로 만들어요 | 자손 선택자 규칙 1개 이상 / 그룹 선택자 규칙 1개 이상 / 카드 테두리는 부모에만 주었는데 자식 글자는 상속되는 것과 테두리는 상속 안 되는 것을 DevTools 로 확인함 |
| W06-3 응용 | 고른 사이트의 버튼·링크 하나에 `:hover` 와 `:focus-visible` 모양을 만들고, 일부러 두 규칙을 부딪치게 해서 DevTools Styles 탭의 취소선으로 진 규칙을 찾아요 | `:hover` 규칙과 `:focus-visible` 규칙이 각각 있음 / `outline: none` 으로 포커스를 지우지 않음 / 진 규칙이 왜 졌는지 점수(아이디-클래스-태그)로 한 줄 말할 수 있음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- W06-1: 머리글·목록·바닥글의 배경과 글자색 계열(밝음/어두움, 강조색 자리)이 원본과 같음
- W06-2: 카드 안에서 굵게 보이는 글자 자리가 원본과 같음
- W06-3: 마우스를 올렸을 때 바뀌는 것(색·밑줄 등)이 원본 버튼·링크와 같음

## 힌트 재료
- 1단계: MDN 선택자·명시도 문서(위 링크)
- 2단계: 먼저 `<link>` 가 맞는지 Console 의 404 로 확인해요. 선택자는 HTML 의 클래스 이름을 한 글자씩 똑같이 쓰고 클래스 앞에는 점(`.`)을 붙여요. 안 먹는 규칙은 F12 → Elements → Styles 에서 취소선을 찾아요.
- 3단계 예시(다른 이름·다른 값):
  ```css
  .menu-list .menu-name { font-weight: 700; }
  .tag, .badge { color: #6b7280; }
  .menu-btn:hover { background: #e5e7eb; }
  .menu-btn:focus-visible { outline: 3px solid #2563eb; outline-offset: 2px; }
  ```

## 자주 막히는 곳
- CSS를 고쳐도 화면이 그대로 → `<link>` 의 `href` 오타, 저장 안 함, 또는 `<link>` 가 `<head>` 밖에 있음(Console 의 404 확인)
- 클래스로 준 스타일만 안 먹음 → 선택자 앞의 점(`.`) 빠짐, 또는 HTML 과 클래스 철자가 다름
- 한 줄(또는 그 아래 줄들)이 안 먹음 → 앞 줄 끝의 `;` 또는 `}` 가 빠짐
