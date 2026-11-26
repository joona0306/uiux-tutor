# 04. W04. 시맨틱 태그와 접근성 기초 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **시맨틱 태그**: `header`(머리글) · `nav`(메뉴) · `main`(본문, 페이지에 하나) · `section`(주제 묶음) · `article`(따로 읽어도 되는 글) · `aside`(곁들이는 정보) · `footer`(바닥글). 모양은 없고 **뜻**만 더해요. Figma로 치면 프레임에 "Header", "Footer" 같은 레이어 이름을 붙이는 것과 비슷해요.
  - **class와 id**: `class` 는 여러 요소에 같은 이름을 줄 수 있고, `id` 는 페이지에 하나뿐이에요. `<a href="#faq">` 는 `id="faq"` 인 곳으로 같은 페이지 안에서 이동해요. 묶기용 `div` 는 뜻이 있는 태그로 안 될 때만 써요.
  - **접근성 기초 다섯 가지**: 그림 `alt` · 링크 글자("여기" 금지) · 제목 단계 · 랜드마크(header·nav·main·footer) · `lang`. W3C 검사기(Nu Html Checker)로 오류와 줄 번호를 확인해요.
  - **검색에 보이는 두 줄 (SEO 기초)**: `<head>` 의 `<title>` 은 탭 이름이자 검색 결과의 제목이고, `<meta name="description" content="…">` 는 페이지를 1~2문장으로 요약한 설명이에요. 페이지마다 다르게, "홈" 같은 막연한 말 대신 무엇이 있는 페이지인지 써요. 시맨틱 태그와 제목 단계도 검색 엔진이 구역을 알아보는 단서예요. 이 회차부터 평가 때마다 "기본 점검"(접근성·표준·SEO)을 함께 봐요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요)
  ```html
  <header class="site-header">
    <h1>동네 서점</h1>
    <nav aria-label="주 메뉴">
      <a href="#books">책</a>
    </nav>
  </header>
  <main>
    <section id="books">
      <h2>이달의 책</h2>
      <article class="book-card"><h3>책 제목</h3></article>
    </section>
    <aside><h2>공지</h2></aside>
  </main>
  <footer><small>연습용 페이지</small></footer>
  ```
- 예상해 보기: `div` 를 모두 `header`·`main`·`footer` 로 바꾸면 화면 모양이 어떻게 될까요? — 답: 거의 그대로예요. 시맨틱 태그는 모양이 아니라 뜻을 더해서, 스크린 리더·검색 엔진이 구역을 알아봐요.
- 공식 문서: [HTML 페이지 구조 (MDN)](https://developer.mozilla.org/ko/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) · [main 요소 (MDN)](https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements/main) · [title 요소 (MDN)](https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements/title) · [메타 설명 (Lighthouse)](https://developer.chrome.com/docs/lighthouse/seo/meta-description?hl=ko)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| W04-1 기본 구조 | 고른 사이트의 첫 화면을 위에서 아래로 구역으로 나누어 `header` · `nav` · `main` · `footer` 뼈대를 만들어요. 구역 이름을 종이(또는 주석)에 먼저 적어요 | `header` · `nav` · `main` · `footer` 가 각각 있음 / `main` 은 페이지에 한 개 / 화면 구역 하나하나를 가리키며 어느 태그인지 말할 수 있음 / `<title>` 이 내 페이지 내용을 말하고 `<meta name="description">` 에 1~2문장 요약이 있음 |
| W04-2 개념 적용 | 고른 사이트의 목록 구역(여행지·상품·글 목록)을 `section` 으로 만들고, 카드마다 `article` 과 클래스 이름(예: `place-list` · `place-card` · `place-image` · `place-info` · `place-name`)을 달아요 | `section` 에 제목(`<h2>`)이 있음 / 카드 4개 이상이 같은 클래스 이름 규칙(`○○-list` 안에 `○○-card`) / 메뉴 링크 `href="#id"` 가 같은 페이지의 `id` 로 이동함 / 같은 `id` 를 두 번 쓰지 않음 |
| W04-3 응용 | 접근성 다섯 가지(alt·링크 글자·제목 단계·랜드마크·lang)를 점검하고, W3C 검사기에 `index.html` 을 올려 오류를 줄 번호대로 고쳐요 | 검사기 오류(Error) 0개 / 모든 `<img>` 에 `alt`(장식은 `alt=""`) / `h1` → `h2` → `h3` 단계를 건너뛰지 않음 / 링크 글자만 읽어도 어디로 가는지 앎 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- W04-1: 구역 순서가 원본 구역 지도와 같음 (빠진 구역 없음)
- W04-2: 카드 안 요소 순서가 원본 카드와 같음
- W04-3: 해당 없음 (검사)

## 힌트 재료
- 1단계: MDN 페이지 구조 문서(위 링크)와 `main` 요소 문서
- 2단계: 먼저 큰 구역을 `header / nav / main / footer` 로 나누고, `main` 안을 `section` 으로 나눠요. 카드 하나하나는 따로 읽어도 되는 글이면 `article`, 아니면 `div` 예요. 클래스 이름은 영문 소문자·하이픈이에요. 검사기가 알려 준 줄 번호로 가서 오류를 하나씩 고쳐요.
- 3단계 예시(다른 이름·다른 값):
  ```html
  <section class="cafe-menu" aria-labelledby="menu-title">
    <h2 id="menu-title">오늘의 메뉴</h2>
    <ul class="menu-list">
      <li class="menu-card"><h3 class="menu-name">라떼</h3></li>
    </ul>
  </section>
  ```

## 자주 막히는 곳
- 시맨틱 태그로 바꿨는데 화면이 안 바뀜 → 정상이에요. 모양은 W06부터 CSS로 입혀요
- 메뉴 링크가 이동하지 않음 → `href="#products"` 와 `id="products"` 철자가 다르거나 `#` 가 빠짐
- 검사기 `Duplicate ID` → 같은 `id` 를 두 번 썼어요. 여러 곳이면 `class` 로 바꿔요
