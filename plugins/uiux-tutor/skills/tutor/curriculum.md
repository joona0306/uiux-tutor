# 진도표 (uiux-tutor)

> 강의 자료(UIUX 프론트엔드 과정) 각 회차의 **목표**와 **체크리스트**를 그대로 옮긴 표예요. 튜터는 이 목표로 미션을 만들고, 체크리스트로 완료 기준을 만들어요.

| 코드 | 단원 |
|---|---|
| W | 웹 기초 HTML·CSS | 
| F | Figma·UX |
| JS | JavaScript |
| G | Git·GitHub |
| R | React (TypeScript) |
| N | Next.js·Figma→코드 |
| P | 실무 준비 |

## 01. W01. 웹의 원리와 작업 환경

- 강의 폴더: `00-web/w01-start`
- 목표:
  - 브라우저·서버·HTML·CSS·JavaScript가 각각 무슨 일을 하는지 한 문장씩 말할 수 있다.
  - 규칙에 맞는 이름으로 폴더와 `index.html`을 만들고, Live Server로 열 수 있다.
  - Chrome 개발자 도구(F12)를 열어 내 HTML을 들여다볼 수 있다.
- 체크리스트(완료 기준 재료):
  - HTML·CSS·JavaScript가 각각 내용·모양·동작을 맡는다고 설명할 수 있다
  - Live Server(만든 사람 Ritwick Dey)를 설치했다
  - 영문 소문자·하이픈으로 폴더와 파일 이름을 짓는다
  - `index.html` 을 **Open with Live Server** 로 열고, 저장하면 자동으로 바뀌는 걸 확인했다
  - `F12` → Elements 에서 내 `<h1>` 을 찾을 수 있다

## 02. W02. HTML 문서 구조와 텍스트

- 강의 폴더: `00-web/w02-html-text`
- 목표:
  - 문서 뼈대(`<!DOCTYPE html>` ~ `</html>`)를 보지 않고 쓰고, 각 줄이 하는 일을 말할 수 있다.
  - 글의 단계에 맞게 `<h1>`~`<h3>` 제목과 `<p>` 문단으로 나눌 수 있다.
  - `<strong>`, `<em>`, `<br>`, `<hr>`, 주석을 알맞은 곳에 쓸 수 있다.
- 체크리스트(완료 기준 재료):
  - 문서 뼈대 9~10줄을 보지 않고 쓸 수 있다
  - `lang="ko"`, `charset="UTF-8"`, `viewport`, `<title>` 이 각각 무슨 일을 하는지 말할 수 있다
  - 제목은 크기가 아니라 **단계**로 고른다 (`h1` 하나, 그 아래 `h2`, 그 아래 `h3`)
  - `<strong>` 과 `<em>` 을 문단 안에서 쓸 수 있다
  - `<br>`, `<hr>`, `<meta>` 는 닫는 태그가 없다는 걸 안다
  - `Ctrl + /` 로 주석을, `Shift + Alt + F` 로 들여쓰기 정리를 할 수 있다

## 03. W03. 링크·이미지·목록·표

- 강의 폴더: `00-web/w03-html-media`
- 목표:
  - `alt`, `width`, `height` 를 갖춘 이미지를 상대 경로로 넣을 수 있다.
  - 같은 사이트 안의 페이지(상대 경로)와 다른 사이트(절대 경로)로 가는 링크를 만들 수 있다.
  - 내용에 맞게 목록(`ul`/`ol`)과 표(`caption`, `th scope`)를 고를 수 있다.
- 체크리스트(완료 기준 재료):
  - `<img>` 에 `src`, `alt`, `width`, `height` 네 가지를 쓴다
  - 상대 경로(`images/shirt.jpg`, `about.html`, `../`)와 절대 경로(`https://…`)의 차이를 말할 수 있다
  - 새 탭 링크에 `target="_blank" rel="noopener noreferrer"` 를 붙이고, 글자로도 알려 준다
  - 링크 글자를 "여기" 대신 **어디로 가는지** 알 수 있게 쓴다
  - 순서가 있으면 `ol`, 없으면 `ul`, 항목은 `li`
  - 표에 `caption`, `th scope="col"`, `th scope="row"` 를 쓴다

## 04. W04. 시맨틱 태그와 접근성 기초

- 강의 폴더: `00-web/w04-html-semantic`
- 목표:
  - `header`, `nav`, `main`, `section`, `article`, `aside`, `footer` 로 페이지 영역을 나눌 수 있다.
  - MY SHOP 상품 카드 목록을 정해진 클래스 이름(`product-list`, `product-card` …)으로 마크업할 수 있다.
  - 접근성 기초(alt, 링크 글자, 제목 단계, 랜드마크)를 점검하고 HTML 검사기로 실수를 찾을 수 있다.
- 체크리스트(완료 기준 재료):
  - `header` · `nav` · `main` · `section` · `article` · `aside` · `footer` 가 각각 무엇인지 MY SHOP 화면을 가리키며 말할 수 있다
  - `main` 은 페이지에 하나, `div` 는 묶기용으로만 쓴다
  - `class` 와 `id` 의 차이를 말하고, `href="#id"` 로 같은 페이지 안에서 이동할 수 있다
  - 상품 카드를 `product-list` / `product-card` / `product-image` / `product-info` / `product-category` / `product-name` / `product-price` 이름으로 만들 수 있다
  - alt · 링크 글자 · 제목 단계 · 랜드마크 · lang 다섯 가지를 점검할 수 있다
  - W3C 검사기로 오류를 찾고, 줄 번호를 보고 고칠 수 있다

## 05. W05. 폼

- 강의 폴더: `00-web/w05-html-form`
- 목표:
  - `label` 과 입력칸을 `for` / `id` 로 연결하고, 내용에 맞는 `input` 종류를 고를 수 있다.
  - `select`, `textarea`, 라디오·체크박스, `fieldset` / `legend` 로 폼을 만들 수 있다.
  - `required`, `placeholder`, `autocomplete`, 버튼 `type` 을 알맞게 쓰고, 보낸 값이 `name` 으로 전달되는 것을 주소창에서 확인할 수 있다.
- 체크리스트(완료 기준 재료):
  - `<label for="…">` 와 `<input id="…">` 를 같은 값으로 연결하고, 글자를 눌러 확인한다
  - 보낼 칸에는 `name` 을 붙이고, 주소창 `?` 뒤에서 `name=값` 을 읽을 수 있다
  - `text` · `email` · `tel` · `password` · `date` 중 알맞은 `type` 을 고른다
  - `required` 는 필수 칸에, `placeholder` 는 **예시**로만 쓴다 (label 대신 X)
  - `autocomplete` 에 `name`, `email`, `tel`, `username`, `new-password` 같은 값을 쓸 수 있다
  - 라디오는 같은 `name` 으로 묶고, `fieldset` / `legend` 로 묶음 제목을 단다
  - 폼 안의 버튼에는 항상 `type`(`submit` / `reset` / `button`)을 쓴다

## 06. W06. CSS 연결·선택자·우선순위

- 강의 폴더: `00-web/w06-css-selectors`
- 목표:
  - HTML 파일에 외부 CSS 파일을 연결하고, 저장하면 화면이 바뀌는 것을 확인할 수 있다.
  - 태그·클래스·아이디·자손·그룹·가상 클래스 선택자로 원하는 요소만 골라 꾸밀 수 있다.
  - 두 규칙이 부딪칠 때 어느 쪽이 이기는지 점수(명시도)와 순서로 설명하고, DevTools Styles 탭에서 확인할 수 있다.
- 체크리스트(완료 기준 재료):
  - `<link rel="stylesheet" href="style.css">` 를 `<head>` 안에 넣을 수 있다
  - 선택자 `p`, `.product-price`, `#event-banner`, `.site-nav a`, `h2, h3` 가 각각 무엇을 고르는지 말할 수 있다
  - `:hover` 와 `:focus-visible` 의 차이를 설명할 수 있다
  - 글자색은 상속되고 테두리는 상속되지 않는다는 것을 화면으로 확인했다
  - 두 규칙이 부딪칠 때 (아이디, 클래스, 태그) 점수 → 순서로 이긴 쪽을 맞힐 수 있다
  - DevTools Styles 탭에서 취소선으로 진 규칙을 찾을 수 있다

## 07. W07. 단위·색·글자

- 강의 폴더: `00-web/w07-css-text`
- 목표:
  - 웹 폰트(Noto Sans KR)를 연결하고 페이지 전체 글꼴로 쓸 수 있다.
  - `px`, `rem`, `%`, `em` 이 각각 무엇을 기준으로 하는지 설명하고, 글자 크기는 `rem` 으로 정할 수 있다.
  - hex·rgb로 색과 투명도를 정하고, 굵기·줄 간격·글자 간격·정렬로 Figma 글자 스타일을 CSS로 옮길 수 있다.
- 체크리스트(완료 기준 재료):
  - Google Fonts `<link>` 를 `<head>` 에 넣고 `font-family` 로 Noto Sans KR을 쓸 수 있다
  - Figma의 px 글자 크기를 rem으로 바꿀 수 있다 (px ÷ 16)
  - `%` 는 부모, `em` 은 부모 글자 크기, `rem` 은 `<html>` 글자 크기가 기준임을 말할 수 있다
  - hex와 `rgb( / %)` 로 색과 투명도를 적을 수 있다
  - Figma Typography 값(굵기·줄 높이·글자 간격·정렬)을 CSS로 옮길 수 있다
  - CSS가 안 먹을 때 DevTools Styles 탭에서 취소선·경고를 찾아볼 수 있다

## 08. W08. 박스 모델

- 강의 폴더: `00-web/w08-css-box`
- 목표:
  - 상자의 네 겹(content·padding·border·margin)을 말하고, 각각을 CSS로 정할 수 있다.
  - `box-sizing: border-box` 를 쓰는 이유를 설명하고, DevTools 박스 그림으로 실제 크기를 확인할 수 있다.
  - `max-width` 와 `margin: 0 auto` 로 영역을 화면 가운데에 둘 수 있다.
- 체크리스트(완료 기준 재료):
  - 상자의 네 겹을 안쪽부터 순서대로 말할 수 있다 (content → padding → border → margin)
  - `padding` 과 `margin` 의 차이(배경색이 칠해지는지)를 설명할 수 있다
  - 값 1·2·3·4개 축약형을 시계 방향 규칙으로 읽을 수 있다
  - `box-sizing: border-box` 를 왜 전체에 거는지 설명할 수 있다
  - DevTools 박스 그림으로 요소의 실제 크기와 여백을 확인할 수 있다
  - `max-width` + `margin: 0 auto` 로 영역을 가운데에 둘 수 있다

## 09. W09. 배경·display·overflow

- 강의 폴더: `00-web/w09-css-display`
- 목표:
  - 배경색과 배경 이미지를 넣고, 이미지가 상자를 빈틈없이 덮게 할 수 있다.
  - `display`의 block · inline · inline-block · none 차이를 화면으로 보여 주며 설명할 수 있다.
  - `overflow` · `border-radius` · `box-shadow` · `object-fit` 으로 MY SHOP 상품 카드를 꾸밀 수 있다.
- 체크리스트(완료 기준 재료):
  - `background-color`와 `background-image`를 함께 쓰는 이유를 말할 수 있다
  - `background-size: cover`와 `contain`의 차이를 화면으로 보여 줄 수 있다
  - block · inline · inline-block의 차이를 `<span>`에 `width`를 줘서 설명할 수 있다
  - `display: none`은 자리까지 없앤다는 것을 안다
  - 둥근 카드 + `overflow: hidden` + `object-fit: cover` 로 사진 카드를 만들 수 있다
  - `box-shadow` 값 4개(가로·세로·흐림·색)를 말할 수 있다 (선택: Figma Drop shadow와 짝짓기)
  - float는 "글 감싸기"용 예전 방식이고, 배치는 flex·grid로 한다는 것을 안다

## 10. W10. Flexbox ① 방향·간격·정렬

- 강의 폴더: `00-web/w10-flex-1`
- 목표:
  - `display: flex` 와 `flex-direction` 으로 요소들을 가로·세로 한 줄로 세울 수 있다.
  - `gap`, `justify-content`, `align-items` 로 간격과 정렬을 원하는 대로 맞출 수 있다.
  - 방향·간격·패딩·정렬 설정표(Figma Auto Layout과 같은 항목)를 보고 같은 모양의 CSS로 옮길 수 있다.
- 체크리스트(완료 기준 재료):
  - `display: flex` 는 **부모**에 쓴다는 것을 설명할 수 있다
  - `flex-direction` 에 따라 주축과 교차축이 바뀌는 것을 그림으로 그릴 수 있다
  - `gap` 과 `margin` 의 차이를 한 문장으로 말할 수 있다
  - `justify-content` 는 주축, `align-items` 는 교차축이라는 것을 구분해 쓴다
  - Figma Auto Layout 설정(방향·Gap·Padding·정렬)을 CSS로 옮길 수 있다
  - DevTools에서 `flex` 배지를 눌러 오버레이를 켜 볼 수 있다

## 11. W11. Flexbox ② 늘이기·줄이기·줄바꿈, 레이아웃 실습

- 강의 폴더: `00-web/w11-flex-2`
- 목표:
  - `flex-wrap` 으로 넘치는 아이템을 다음 줄로 넘길 수 있다.
  - `flex-grow` · `flex-shrink` · `flex-basis` (그리고 줄임말 `flex`)로 아이템이 늘어나고 줄어드는 정도를 정할 수 있다.
  - "내용만큼(Hug) · 꽉 채우기(Fill) · 고정(Fixed)" 크기를 CSS로 만들어 MY SHOP 헤더와 상품 목록을 완성할 수 있다.
- 체크리스트(완료 기준 재료):
  - `flex-wrap: wrap` 은 부모에, `flex-grow`·`flex-shrink`·`flex-basis` 는 아이템에 쓴다
  - `flex-grow` 와 `flex-shrink` 의 기본값(0, 1)과 그 뜻을 말할 수 있다
  - `flex: 1` 과 `flex-grow: 1` 의 차이를 설명할 수 있다
  - Figma Hug · Fill · Fixed 를 CSS로 옮길 수 있다 (`기본` · `flex: 1` · `flex: 0 0 Npx`)
  - 아이템이 안 줄어들어 가로 스크롤이 생기면 `min-width: 0` 을 떠올린다
  - `order` 가 Tab 순서를 바꾸지 않는다는 것을 안다

## 12. W12. position

- 강의 폴더: `00-web/w12-position`
- 목표:
  - `position: relative` 인 카드 안에서 `absolute` 로 하트 버튼과 배지를 원하는 구석에 놓을 수 있다.
  - `fixed` 와 `sticky` 의 차이를 스크롤하며 보여 주고, 스크롤해도 보이는 버튼과 헤더를 만들 수 있다.
  - 요소가 겹칠 때 `z-index` 로 무엇이 위에 올지 정할 수 있다.
- 체크리스트(완료 기준 재료):
  - position 기본값이 `static` 이고, 이때는 `top`·`left` 가 먹지 않는다는 것을 안다
  - "부모에 relative, 얹을 것에 absolute" 짝꿍으로 카드 구석에 하트를 놓을 수 있다
  - absolute 요소는 흐름에서 빠져 자리를 차지하지 않는다는 것을 화면으로 보여 줄 수 있다
  - fixed(화면 기준, 항상)와 sticky(닿으면 붙음, 자리 남음)의 차이를 설명할 수 있다
  - sticky에는 `top` 이 꼭 필요하다는 것을 안다
  - 겹침 문제를 `z-index` 로 해결할 수 있다
  - (선택) Figma **Ignore auto layout** ↔ `absolute`, 프로토타입 **Fixed · Sticky** ↔ `fixed` · `sticky` 를 짝지을 수 있다

## 13. W13. Grid

- 강의 폴더: `00-web/w13-grid`
- 목표:
  - `display: grid` 와 `grid-template-columns`, `gap` 으로 MY SHOP 상품 목록을 바둑판으로 놓을 수 있다.
  - `fr`, `repeat()`, `minmax()`, `auto-fill` 로 창 너비에 맞춰 칸 수가 바뀌는 목록을 만들 수 있다.
  - `grid-template-areas` 로 머리글·옆 메뉴·본문·바닥글 영역을 나누고, flex와 grid 중 무엇을 쓸지 고를 수 있다.
- 체크리스트(완료 기준 재료):
  - `display: grid` 는 **부모**에 준다는 것을 안다
  - `grid-template-columns: repeat(3, 1fr)` 이 무슨 뜻인지 말할 수 있다
  - `gap: 24px 16px` 에서 어느 값이 줄 사이인지 안다
  - `repeat(auto-fill, minmax(200px, 1fr))` 로 미디어쿼리 없이 칸 수가 바뀌는 목록을 만들 수 있다
  - `grid-template-areas` 로 페이지 지도를 그리고 `grid-area` 로 요소를 놓을 수 있다
  - "줄 하나면 flex, 바둑판이면 grid"를 예를 들어 설명할 수 있다

## 14. W14. 반응형 ① 미디어쿼리·모바일 우선

- 강의 폴더: `00-web/w14-responsive`
- 목표:
  - viewport 메타 태그가 왜 필요한지 설명하고 `<head>` 에 넣을 수 있다.
  - 모바일 기본 → `@media (width >= 640px)` → `(width >= 1024px)` 순서로 MY SHOP 목록을 1→2→3열로 바꾸고, 768px에서 머리글을 한 줄로 바꿀 수 있다.
  - Chrome DevTools 기기 모드에서 너비를 바꿔 가며 화면을 확인할 수 있다.
- 체크리스트(완료 기준 재료):
  - viewport 메타 태그가 없으면 휴대폰에서 무슨 일이 생기는지 설명할 수 있다
  - 모바일 우선이 "좁은 화면 먼저, 넓어지면 더하기" 라는 것을 안다
  - `@media (width >= 640px) { … }` 를 괄호 두 겹으로 정확히 쓸 수 있다
  - 미디어쿼리는 **작은 너비 → 큰 너비** 순서로 써야 하는 이유를 말할 수 있다
  - 오늘 브레이크포인트 640 · 768 · 1024 가 Tailwind의 `sm` · `md` · `lg` 와 같다는 것을 안다
  - DevTools 기기 모드를 켜고 너비를 바꿔 볼 수 있다

## 15. W15. 반응형 ② 유연한 이미지·단위·clamp·컨테이너 쿼리 맛보기

- 강의 폴더: `00-web/w15-responsive-2`
- 목표:
  - `max-width: 100%`, `aspect-ratio`, `object-fit` 으로 사진이 넘치거나 찌그러지지 않게 할 수 있다.
  - `rem`·`%`·`vw` 의 차이를 말하고, `clamp()` 로 화면에 따라 부드럽게 커지는 제목을 만들 수 있다.
  - `<picture>` 로 화면 너비마다 다른 사진을 보여 줄 수 있다.
- 체크리스트(완료 기준 재료):
  - 사진이 넘치지 않게 하는 세 줄(`display: block`, `max-width: 100%`, `height: auto`)을 쓸 수 있다
  - `aspect-ratio` 와 `object-fit: cover` 를 함께 써야 하는 이유를 말할 수 있다
  - `cover` 와 `contain` 을 Figma의 Fill·Fit과 짝지을 수 있다
  - 글자 크기를 px에서 rem으로 바꿔 계산할 수 있다 (px ÷ 16)
  - `clamp(최소, 보통, 최대)` 가 어떤 값을 고르는지 표로 설명할 수 있다
  - `<picture>` 안에 `<source>` 와 `<img>` 를 순서대로 넣을 수 있다

## 16. W16. transition·transform·animation

- 강의 폴더: `00-web/w16-motion`
- 목표:
  - `:hover`·`:focus-visible` 상태에 `transition` 을 붙여 부드럽게 바뀌는 버튼을 만들 수 있다.
  - `transform` 의 `translateY`·`scale`·`rotate` 로 요소를 옮기고 키우고 돌릴 수 있다.
  - `@keyframes` 로 반복 애니메이션을 만들고, `prefers-reduced-motion` 으로 움직임을 줄일 수 있다.
- 체크리스트(완료 기준 재료):
  - `:hover`, `:active`, `:focus-visible` 이 각각 언제 맞는지 말할 수 있다
  - `transition` 을 **기본 규칙**에 두는 이유를 설명할 수 있다
  - `translateY`, `scale`, `rotate` 로 요소를 옮기고 키우고 돌릴 수 있다
  - `@keyframes` 의 `from`/`to` 와 `animation` 의 시간·반복·`alternate` 를 쓸 수 있다
  - 포커스 표시를 지우면 안 되는 이유를 말할 수 있다
  - DevTools Rendering 탭으로 `prefers-reduced-motion: reduce` 를 흉내 내 확인할 수 있다

## 17. W17. CSS 변수와 코드 정리

- 강의 폴더: `00-web/w17-css-variables`
- 목표:
  - `:root` 에 CSS 변수를 만들고 `var()` 로 꺼내 쓰며, 대체값이 언제 쓰이는지 설명할 수 있다.
  - Figma Variables와 **같은 이름**의 디자인 토큰 파일(`tokens.css`)을 만들고, MY SHOP의 값을 토큰으로 바꿀 수 있다.
  - CSS를 토큰 → 기본 → 컴포넌트 → 유틸리티 파일로 나누고, DevTools로 글자 대비를 점검해 고칠 수 있다.
- 체크리스트(완료 기준 재료):
  - `:root` 에 `--이름: 값;` 으로 변수를 만들고 `var(--이름)` 으로 쓸 수 있다
  - `var(--이름, 대체값)` 에서 대체값이 언제 쓰이는지 말하고, 프로젝트 토큰(`--color-like`)을 같은 이름 규칙으로 더할 수 있다
  - Figma `color/primary`, `space/md`, `radius/lg` 를 CSS 변수 이름으로 바꿀 수 있다
  - CSS 파일을 토큰 → 기본 → 컴포넌트 → 유틸리티 순서로 나누고 연결할 수 있다
  - `.visually-hidden` 과 `display: none` 의 차이를 설명할 수 있다
  - DevTools로 글자 대비를 재고, 4.5:1 미만이면 토큰을 바꿔 고칠 수 있다

## 18. W18. 퍼블리싱 실습 ① 시안 읽기·토큰·마크업

- 강의 폴더: `00-web/w18-publishing-1`
- 목표:
  - 시안을 보고 구역·토큰·화면 크기별 배치를 표로 정리할 수 있다.
  - 디자인 토큰을 CSS 변수로 만들고 `var()` 로 꺼내 쓸 수 있다.
  - 시맨틱 태그와 정해진 클래스 이름으로 페이지 전체 마크업을 할 수 있다.
- 체크리스트(완료 기준 재료):
  - 시안을 보고 구역·토큰·화면 크기별 배치 표를 만들 수 있다
  - 토큰을 `:root` 에 CSS 변수로 만들고 `var()` 로 쓸 수 있다
  - 링크와 버튼을 언제 쓰는지 구분할 수 있다
  - 장식 그림에 `alt=""` 를 쓰는 이유를 말할 수 있다
  - 나중에 JS가 찾을 클래스 이름(`.menu-btn`, `.slider-track`, `.modal` …)을 내 페이지에도 넣었다

## 19. W19. 퍼블리싱 실습 ② 배치와 반응형

- 강의 폴더: `00-web/w19-publishing-2`
- 목표:
  - 와이어프레임을 보고 구역마다 flex와 grid 중 알맞은 것을 골라 배치할 수 있다.
  - 모바일 우선으로 쓰고, `@media (width >= 768px)` 로 넓은 화면만 덮어쓸 수 있다.
  - JS가 붙일 상태 클래스(`is-open`)의 모양을 미리 만들고 확인할 수 있다.
- 체크리스트(완료 기준 재료):
  - 모바일 CSS를 먼저 쓰고, 넓은 화면만 `@media (width >= …)` 로 덮어쓴다
  - 같은 크기 칸의 바둑판은 grid, 한 줄 정렬은 flex로 고를 수 있다
  - `overflow: hidden` 으로 슬라이드의 "창문"을 만들 수 있다
  - `is-open` 같은 상태 클래스 모양을 미리 만들고, 확인 뒤 HTML에서 지웠다
  - DevTools 기기 모드로 375·768·1280px을 확인했다

## 20. W20. 퍼블리싱 실습 ③ 움직임·접근성·품질 점검

- 강의 폴더: `00-web/w20-publishing-3`
- 목표:
  - transition과 @keyframes로 움직임을 넣고, `prefers-reduced-motion` 으로 끌 수 있다.
  - 키보드만으로 페이지를 쓸 수 있게 포커스 표시와 본문 바로가기를 넣을 수 있다.
  - 기기 모드·W3C 검사기·Lighthouse로 점검하고, 본 결과를 점검표에 적을 수 있다.
- 체크리스트(완료 기준 재료):
  - `transition` 을 평소 규칙에 쓰고, `:hover` 에서 값만 바꿀 수 있다
  - Tab 키로 페이지 끝까지 가 봤고, 포커스 표시가 보였다
  - `prefers-reduced-motion` 으로 움직임을 끄는 이유를 말할 수 있다
  - Lighthouse 100점이 "완벽한 접근성"이 아닌 이유를 말할 수 있다
  - `quality-check.md` 에 본 것과 안 해 본 것을 나눠 적었다
  - 완성 폴더를 zip으로 제출했다

## 21. W21. 웹 기초 점검

- 강의 폴더: `00-web/w21-checkpoint`
- 목표:
  - HTML·CSS 핵심 개념을 한 줄로 설명할 수 있다.
  - CSS 코드를 보고 화면 결과(크기·색·배치)를 예상할 수 있다.
  - 내가 약한 단원을 찾아 보충 계획을 세울 수 있다.
- 체크리스트(완료 기준 재료):
  - 문제 1~9를 손으로 먼저 풀고 `examples/` 로 확인했고, 10~12번은 말로 답한 뒤 정답 보기로 확인했다
  - 틀린 문제마다 "다시 볼 곳"을 적었다
  - 작은 실습을 375px·768px에서 확인했다
  - 자기 점검표의 "아직" 항목마다 보충 계획을 세웠다

## 22. F01. Figma 기초와 Auto Layout

- 강의 폴더: `00-figma-ux/f01-figma-basics`
- 목표:
  - Education 팀 안에 수업 파일 `my-shop-design` 을 만들고, 페이지·프레임·레이어를 이름 붙여 정리할 수 있다.
  - 도형·텍스트·이미지를 넣고 정렬할 수 있다.
  - Auto Layout의 방향·Gap·Padding·Hug/Fill/Fixed를 CSS flex 속성과 짝지어 설명하고, 상품 카드를 만들 수 있다.
- 체크리스트(완료 기준 재료):
  - Education 팀 안에 `my-shop-design` 파일이 있고, 첫 페이지 이름이 `F01 연습` 이다
  - 레이어 이름을 바꾸고, Group과 프레임(Auto Layout)의 차이를 말할 수 있다
  - 정렬 버튼으로 레이어를 맞출 수 있다
  - Auto Layout 표를 보지 않고 Gap·Padding·Hug·Fill·Fixed를 CSS로 말할 수 있다
  - `ProductCard` 가 완성 기준표와 같다

## 23. F02. 서비스 분석과 사용자 리서치

- 강의 폴더: `00-figma-ux/f02-ux-research`
- 목표:
  - 쇼핑 서비스 한 개의 기능 구조와 구매 UX 플로우를 그림(목록)으로 정리할 수 있다.
  - 경쟁 서비스 3개를 같은 기준으로 비교하는 표를 만들 수 있다.
  - 인터뷰·설문 결과에서 문제를 찾아 HMW(How Might We) 문장 3개로 정리할 수 있다.
- 체크리스트(완료 기준 재료):
  - 서비스 1개의 기능 구조(2단계)와 구매 플로우(⚠️ 포함)를 적었다
  - 서비스 3개를 같은 기준으로 비교했고, "MY SHOP에 가져올 점"을 채웠다
  - 유도 질문 없는 질문지로 5명을 인터뷰했고, 이름 대신 P1~P5로 적었다
  - 인사이트 묶음 3개와 HMW 3개를 썼다

## 24. F03. 사용자 여정·IA·와이어프레임·요구사항

- 강의 폴더: `00-figma-ux/f03-ux-structure`
- 목표:
  - F02 리서치를 근거로 페르소나 1명과 사용자 여정 지도를 만들 수 있다.
  - MY SHOP의 사이트맵과 유저 플로우차트를 Figma에 그릴 수 있다.
  - 상품 목록 와이어프레임을 3가지 크기(375·768·1280)로 그리고, 요구사항 명세서 표로 정리할 수 있다.
- 체크리스트(완료 기준 재료):
  - 페르소나와 여정 지도가 F02 인용(P번호)을 근거로 갖고 있다
  - `F03 와이어프레임` 페이지에 `sitemap`, `userflow` 가 있다
  - `wf-mobile`(375)·`wf-tablet`(768)·`wf-desktop`(1280)의 순서가 같고 열 수가 1·2·3이다
  - 요구사항 표의 모든 줄에 ID·완료 기준·우선순위가 있다

## 25. F04. 컴포넌트와 Variants

- 강의 폴더: `00-figma-ux/f04-components`
- 목표:
  - 메인 컴포넌트와 인스턴스의 관계를 설명하고, 인스턴스를 오버라이드·초기화할 수 있다.
  - Button 8가지 모양을 Variants(`variant`·`size`·`disabled`)로 묶을 수 있다.
  - Text·Boolean·Instance swap 속성을 만들어 인스턴스에서 바꿀 수 있게 할 수 있다.
- 체크리스트(완료 기준 재료):
  - `Components` 페이지에 `icon/plus`, `icon/heart`, `Button`(8변형), `ProductCard` 메인 컴포넌트가 있다
  - Button 속성 6개(`variant`·`size`·`disabled`·`label`·`showIcon`·`icon`)를 인스턴스에서 바꿀 수 있다
  - 오버라이드와 Reset, Detach의 차이를 말할 수 있다
  - 메인을 고치면 인스턴스가 따라 바뀌는 것을 확인했다

## 26. F05. Variables와 스타일 (디자인 토큰)

- 강의 폴더: `00-figma-ux/f05-variables-styles`
- 목표:
  - 색·간격·모서리 변수 15개를 Day 25와 같은 이름·값으로 만들고 F04 컴포넌트에 연결할 수 있다.
  - Light/Dark 두 모드를 만들고 프레임마다 모드를 바꿔 볼 수 있다.
  - 텍스트 스타일 4개(Title·Body·Label·Caption)를 만들고, 변수에 코드 표기(code syntax)를 붙여 CSS 변수 이름과 짝지을 수 있다.
- 체크리스트(완료 기준 재료):
  - 변수 15개가 Day 25 표와 이름·값이 같다 (`color` 8, `space` 4, `radius` 3)
  - Button·ProductCard 메인에 변수가 연결되어 `color/primary` 하나로 전체 색이 바뀐다
  - Light/Dark 모드가 있고, `preview-dark` 에서 안 바뀌는 곳이 없다
  - 텍스트 스타일 4개가 있고 컴포넌트 글자에 적용됐다
  - Dev Mode에서 `var(--color-primary)` 같은 코드 이름이 보인다

## 27. F06. 반응형 프레임·앱 UI·디자인 시스템

- 강의 폴더: `00-figma-ux/f06-responsive-system`
- 목표:
  - 브레이크포인트 640·768·1024에 맞춰 상품 목록 화면을 3가지 크기 프레임으로 만들 수 있다.
  - iOS·Android의 권장 터치 크기(44pt·48dp)로 내 버튼을 점검하고 고칠 수 있다.
  - 색·글자·간격·컴포넌트·규칙을 `Design System` 페이지 한 곳에 정리할 수 있다.
- 체크리스트(완료 기준 재료):
  - `Screens` 에 `list-mobile`(375·1열) · `list-tablet`(768·2열·헤더 한 줄) · `list-desktop`(1280·3열)이 있다
  - 카드 인스턴스가 모두 Fill container 다
  - 버튼 높이를 계산해 44 기준으로 점검하고 고쳤다
  - `Design System` 페이지에 색·글자·간격·컴포넌트·규칙 5개 섹션이 있다

## 28. F07. 인터랙션 프로토타입과 사용성 테스트

- 강의 폴더: `00-figma-ux/f07-prototype`
- 목표:
  - On click/On tap 트리거와 Navigate to·Back·Open overlay·Change to 액션으로 목록 → 상세 → 장바구니 흐름을 연결할 수 있다.
  - 스크롤(Overflow)과 Smart animate를 설정하고, 프로토타입 링크를 공유할 수 있다.
  - 과제 3개짜리 사용성 테스트를 진행하고 관찰 기록표로 문제를 정리할 수 있다.
- 체크리스트(완료 기준 재료):
  - `proto-list` → `proto-detail` → `proto-cart` 를 누르며 오갈 수 있다 (Back 포함)
  - `장바구니 담기` 가 오버레이 알림을 띄우고, 밖을 누르면 닫힌다
  - 목록이 세로로 스크롤된다
  - 프로토타입 링크를 공유했다
  - 5명 사용성 테스트 기록과 문제 목록이 있고, 1개를 고쳤다
  - 짝꿍 파일에 근거 있는 댓글 1개, 내 파일에 주석 2개, `list-mobile` 에 Ready for dev 표시를 했다

## 29. F08. AI 디자인 도구 활용

- 강의 폴더: `00-figma-ux/f08-ai-design`
- 목표:
  - ChatGPT로 리서치 질문지·카피 초안·화면 피드백을 받고, 기준표로 검증해 고칠 수 있다.
  - Figma AI 기능(Rename layers 등)과 이미지 생성 AI를 써 보고, 쓸 수 있는 곳과 쓰면 안 되는 곳을 구분할 수 있다.
  - AI 사용 기록표를 작성하고, 저작권·초상권·개인정보 규칙을 지켜 결과를 검증할 수 있다.
- 체크리스트(완료 기준 재료):
  - AI 사용 기록표에 4줄 이상, 모든 줄에 "검증한 것" 칸이 채워져 있다
  - AI가 만든 질문·문구·피드백 중 **틀린 것을 하나 이상 찾아 고쳤다**
  - Rename layers를 써 보고 결과를 내 이름 규칙으로 고쳤다
  - 배너 이미지가 검증표를 통과했고, AI 생성임을 밝혔다
  - AI에 개인정보를 넣지 않았다

## 30. Day 01. JavaScript 첫걸음 — 콘솔, 변수, 자료형, 연산자

- 강의 폴더: `01-javascript/day01-variables`
- 목표:
  - HTML 파일에 JavaScript 파일을 연결하고, 콘솔에 글자를 출력할 수 있다.
  - `const`와 `let`으로 변수를 만들고, 언제 무엇을 쓰는지 설명할 수 있다.
  - 숫자·문자열·불리언 값을 계산하거나 비교할 수 있다.
- 체크리스트(완료 기준 재료):
  - `<script src="main.js"></script>`를 `</body>` 위에 넣을 수 있다
  - F12 → Console 에서 출력과 오류 메시지를 볼 수 있다
  - `const`와 `let`의 차이를 친구에게 한 문장으로 설명할 수 있다
  - `'100'`과 `100`이 왜 다른지 설명할 수 있다
  - 같은지 비교할 때 `===`를 쓴다

## 31. Day 02. 조건문과 반복문 — 상황에 따라, 여러 번

- 강의 폴더: `01-javascript/day02-conditions-loops`
- 목표:
  - `if` / `else if` / `else`로 조건에 따라 다른 값을 정할 수 있다. (예: 5만 원 이상이면 배송비 0원)
  - `&&`, `||`, `!`와 삼항 연산자로 조건을 조합하거나 짧게 쓸 수 있다.
  - `for` 반복문으로 구구단처럼 같은 일을 여러 번 시킬 수 있다.
- 체크리스트(완료 기준 재료):
  - `if` / `else if` / `else` 로 갈림길을 만들 수 있다
  - 범위 조건을 왜 큰 기준부터 검사하는지 설명할 수 있다
  - `&&`, `||`, `!` 의 결과를 예상할 수 있다
  - `조건 ? 값1 : 값2` 로 둘 중 하나를 고를 수 있다
  - `for (let i = 1; i <= 9; i++)` 의 세 부분이 각각 무슨 뜻인지 말할 수 있다

## 32. Day 03. 함수 — 자주 쓰는 코드에 이름 붙이기

- 강의 폴더: `01-javascript/day03-functions`
- 목표:
  - 매개변수와 `return`이 있는 함수를 만들고 불러서 결과를 받을 수 있다.
  - 같은 함수를 함수 선언식과 화살표 함수 두 가지로 쓸 수 있다.
  - 백틱(`` ` ``)과 `${}`로 문장을 만들고, `39000`을 `'39,000원'`으로 바꾸는 함수를 만들 수 있다.
- 체크리스트(완료 기준 재료):
  - 함수를 "만들기"와 "부르기"로 나눠 설명할 수 있다
  - 매개변수와 인수의 차이를 말할 수 있다
  - `return`이 없으면 왜 `undefined`가 나오는지 설명할 수 있다
  - 같은 함수를 `function`과 `=>` 두 가지로 쓸 수 있다
  - 백틱과 `${}`로 `'린넨 셔츠 - 39,000원'` 같은 문장을 만들 수 있다

## 33. Day 04. 배열과 객체 — 상품 목록 데이터 다루기

- 강의 폴더: `01-javascript/day04-arrays-objects`
- 목표:
  - 상품 객체 여러 개를 담은 배열을 만들고, `products[0].name` 처럼 원하는 값을 꺼낼 수 있다.
  - `for...of`, `forEach`, `map`, `filter`, `find` 중 상황에 맞는 것을 골라 쓸 수 있다.
  - 구조 분해와 전개 연산자(`...`)로 값을 꺼내고, 원본을 바꾸지 않은 복사본을 만들 수 있다.
- 체크리스트(완료 기준 재료):
  - `products[0].name` 이 무엇을 꺼내는지 설명할 수 있다
  - `for...of`로 상품을 하나씩 출력할 수 있다
  - `const { name, price } = product;` 와 `const [a, b] = list;` 를 읽을 수 있다
  - `{ ...product, liked: true }` 가 원본을 바꾸지 않는 이유를 말할 수 있다
  - `map`(바꾸기), `filter`(거르기), `find`(하나 찾기)가 각각 무엇을 돌려주는지 말할 수 있다

## 34. JS 복습 ① 배열·객체 집중

- 강의 폴더: `01-javascript/day04a-review`
- 목표:
  - 변수·조건·반복·함수 코드를 읽고, 콘솔에 나올 결과를 실행 전에 적을 수 있다.
  - 상품 배열에서 `map`·`filter`·`find`로 원하는 값을 골라 가공할 수 있다.
  - 장바구니 데이터를 상품 데이터와 합쳐 합계·배송비가 있는 영수증을 출력할 수 있다.
- 체크리스트(완료 기준 재료):
  - `'3' + 4 + 5`와 `3 + 4 + '5'`의 결과가 왜 다른지 설명할 수 있다
  - `return`을 만나면 함수가 끝난다는 것을 알고, `return`이 없으면 왜 `undefined`인지 말할 수 있다
  - `map`·`filter`·`find`가 각각 무엇을(배열/배열/하나) 돌려주는지 말할 수 있다
  - `{ ...original }`과 `= original`의 차이를 그림으로 설명할 수 있다
  - 장바구니 줄에 `find`로 상품 정보를 붙여 합계를 구할 수 있다
  - 오늘 손으로 풀다 틀린 문제에 표시하고, 그 단원(Day 01~04)을 다시 봤다

## 35. Day 05. DOM — JavaScript로 화면 바꾸기

- 강의 폴더: `01-javascript/day05-dom`
- 목표:
  - `querySelector`로 화면 요소를 찾아 글자(`textContent`)와 클래스(`classList`)를 바꿀 수 있다.
  - `createElement`와 `append`로 새 요소를 만들어 화면에 넣을 수 있다.
  - 상품 배열을 `map`으로 카드 요소 배열로 바꿔 화면에 그릴 수 있다.
- 체크리스트(완료 기준 재료):
  - HTML과 DOM의 관계를 "레이어 패널"로 설명할 수 있다
  - `querySelector`와 `querySelectorAll`의 차이를 안다
  - `textContent`로 글자를 읽고 바꿀 수 있다
  - 사용자가 입력한 글자는 `innerHTML`이 아니라 `textContent`로 넣는다
  - `classList.add/remove/toggle`로 모양을 바꿀 수 있다
  - `createElement` → 내용 채우기 → `append` 세 단계로 요소를 만든다
  - 배열을 `map`으로 카드 배열로 바꿔 목록을 그릴 수 있다

## 36. Day 06. 이벤트 — 누르면 반응하는 화면

- 강의 폴더: `01-javascript/day06-events`
- 목표:
  - `addEventListener`로 클릭·입력·제출 이벤트에 동작을 연결할 수 있다.
  - 이벤트 객체(`event.target`, `event.preventDefault()`)를 써서 누른 요소를 알아내고 기본 동작을 막을 수 있다.
  - 탭 메뉴, 모달, 다크 모드 토글을 직접 만들 수 있다.
- 체크리스트(완료 기준 재료):
  - `요소.addEventListener('이벤트', 함수)`의 세 부분을 Figma 프로토타입에 빗대어 설명할 수 있다
  - `click`, `input`, `submit`이 각각 언제 일어나는지 안다
  - `event.target`으로 실제로 누른 요소를 알 수 있다
  - 폼에서는 `event.preventDefault()`로 새로고침을 막는다
  - 탭 메뉴를 "전부 끄고, 누른 것만 켜기"로 만들 수 있다
  - 모달과 다크 모드를 `classList`로 만들 수 있다

## 37. JS 인터랙션 ① 모바일 메뉴·탭·아코디언

- 강의 폴더: `01-javascript/day06a-interaction-1`
- 목표:
  - 버튼으로 모바일 메뉴를 열고 닫고, 그 상태를 `aria-expanded`에 맞춰 적을 수 있다.
  - `role`·`aria-selected`가 붙은 탭을 만들고, 클릭과 방향키(←/→)로 바꿀 수 있다.
  - 아코디언을 `<details>`로 먼저 만들어 보고, JS 버전과 비교해 언제 무엇을 쓸지 설명할 수 있다.
- 체크리스트(완료 기준 재료):
  - 메뉴 버튼에 `aria-expanded`와 `aria-controls`를 왜 붙이는지 설명할 수 있다
  - 보이는 상태(클래스·`hidden`)와 들리는 상태(`aria-*`)를 같은 값으로 바꾼다
  - 탭의 `role` 세 가지(`tablist`, `tab`, `tabpanel`)와 `aria-selected`를 붙일 수 있다
  - `%`로 "끝에서 처음으로" 돌아가는 번호를 계산할 수 있다
  - `getAttribute`는 문자열을 돌려준다는 것을 알고 `'true'`와 비교한다
  - 단순한 아코디언은 `<details>`로 먼저 만들어 본다

## 38. JS 인터랙션 ② 슬라이드(캐러셀)·모달

- 강의 폴더: `01-javascript/day06b-interaction-2`
- 목표:
  - 번호(`currentIndex`) 하나로 슬라이드를 이전·다음·키보드로 넘기고, 끝에서 처음으로 돌아가게 할 수 있다.
  - 자동 넘김을 `setInterval`로 만들되, 기본은 꺼 두고 **멈춤 버튼**을 함께 둘 수 있다.
  - `<dialog>`와 `showModal()`/`close()`로 모달을 만들고, Day 06의 클래스 모달과 무엇이 다른지 설명할 수 있다.
- 체크리스트(완료 기준 재료):
  - 번호 하나(`currentIndex`)로 슬라이드를 넘기고 `%`로 끝에서 처음으로 돌아갈 수 있다
  - `setInterval`이 돌려준 번호로 `clearInterval` 해서 멈출 수 있다
  - 자동 넘김은 기본으로 끄고 멈춤 버튼을 둔다 (이유도 말할 수 있다)
  - `showModal()`로 열면 브라우저가 해 주는 것 세 가지(Esc 닫기, 뒤 페이지 비활성, 포커스 이동)를 말할 수 있다
  - 바깥 클릭 닫기는 `event.target === dialog`로 직접 만든다

## 39. JS 폼 검사

- 강의 폴더: `01-javascript/day06c-form-validation`
- 목표:
  - `required`, `type="email"`, `minlength`, `pattern`으로 HTML 기본 검사를 걸 수 있다.
  - 제출을 막고(`preventDefault`), `validity`를 읽어 칸마다 오류 문구를 보여 줄 수 있다.
  - `aria-describedby`·`aria-invalid`로 오류 문구를 입력칸과 이어, 화면 읽기 프로그램도 알 수 있게 만들 수 있다.
- 체크리스트(완료 기준 재료):
  - `required`, `type="email"`, `minlength`, `pattern`이 각각 무엇을 검사하는지 말할 수 있다
  - "검사는 HTML이, 보여 주기는 JS가"의 뜻을 설명할 수 있다
  - `validity.valueMissing` 같은 검사 결과로 우리말 문구를 고를 수 있다
  - 오류 문구를 `aria-describedby`로 입력칸과 잇고, 틀린 칸에 `aria-invalid="true"`를 붙인다
  - 제출하면 첫 번째 틀린 칸으로 `focus()`를 옮긴다
  - 화면 검사만으로는 안전하지 않고, 서버에서도 검사해야 한다는 것을 안다

## 40. Day 07. 모듈과 fetch — 파일 나누기, 데이터 불러오기

- 강의 폴더: `01-javascript/day07-modules-fetch`
- 목표:
  - `export`와 `import`로 코드를 여러 파일(모듈)로 나눠 쓸 수 있다.
  - JSON이 무엇인지, JS 객체와 무엇이 다른지 설명할 수 있다.
  - `fetch` + `async`/`await` + `try...catch`로 `products.json`을 불러와 화면에 그리고, 실패하면 안내 문구를 보여 줄 수 있다.
- 체크리스트(완료 기준 재료):
  - `type="module"`을 붙여 모듈을 연결할 수 있다
  - 이름 있는 export와 default export를 가져오는 법(중괄호 유무)을 구분한다
  - 파일을 더블클릭하면 왜 안 되는지(CORS, file://) 설명할 수 있다
  - JSON과 JS 객체의 차이(큰따옴표, 마지막 쉼표, 주석)를 안다
  - `await fetch` → `response.ok` 확인 → `await response.json()` 순서로 데이터를 받는다
  - `try...catch`로 실패하면 사용자에게 안내 문구를 보여 준다

## 41. Day 08. 종합 실습 — 상품 카드 목록 앱

- 강의 폴더: `01-javascript/day08-product-app`
- 목표:
  - 앱이 기억할 값(상품 목록, 검색어, 선택 카테고리)을 **상태 변수**로 정하고 설명할 수 있다.
  - 상태를 보고 화면 전체를 다시 그리는 `render()` 함수를 만들 수 있다.
  - 검색·카테고리·좋아요 이벤트를 "상태 바꾸기 → `render()`" 순서로 연결할 수 있다.
- 체크리스트(완료 기준 재료):
  - 이 앱의 상태 세 가지와 각각 언제 바뀌는지 말할 수 있다
  - `render()`가 하는 일 세 가지(카드, 개수·없어요, 버튼 모양)를 말할 수 있다
  - 이벤트 리스너에서는 "상태 바꾸기 → `render()`"만 한다
  - 두 조건을 `&&`로 묶어 거를 수 있다
  - `{ ...product, liked: !product.liked }`로 좋아요를 바꾸는 이유를 설명할 수 있다

## 42. JS 디버깅 연습 (DevTools·오류 읽기)

- 강의 폴더: `01-javascript/day08a-debugging`
- 목표:
  - 콘솔 오류 메시지에서 **오류 이름·내용·파일과 줄 번호·호출 순서**를 읽고, 원인이 있는 줄을 찾을 수 있다.
  - Sources 패널에서 **중단점**을 걸어 코드를 멈추고, 그 순간의 변수 값을 확인할 수 있다.
  - `console.table`과 Network 패널로 데이터와 파일 요청이 맞는지 확인할 수 있다.
- 체크리스트(완료 기준 재료):
  - 오류 메시지에서 오류 이름·내용·줄 번호·호출 순서(`at` 줄)를 나눠 읽을 수 있다
  - `ReferenceError`, `TypeError`, `SyntaxError`가 각각 무슨 뜻인지 말할 수 있다
  - "오류 난 줄과 원인 줄이 다를 수 있다"를 예를 들어 설명할 수 있다
  - Sources에서 중단점을 걸고, Step over로 한 줄 실행한 뒤 Scope에서 값을 볼 수 있다
  - `console.table`로 배열 데이터를 표로 볼 수 있다
  - Network에서 파일의 Status(200/404)를 확인할 수 있다
  - 오류가 없는데 화면이 이상하면 "값 보기"부터 한다

## 43. JS 종합 복습

- 강의 폴더: `01-javascript/day08b-review`
- 목표:
  - 이벤트 리스너와 `async` 함수가 섞인 코드를 보고, 콘솔에 찍히는 **순서**를 실행 전에 적을 수 있다.
  - "이벤트 → 상태 바꾸기 → 다시 그리기" 흐름으로 장바구니(담기·빼기·합계)를 만들 수 있다.
  - 막히면 콘솔 오류·`console.log`·중단점으로 스스로 원인을 찾을 수 있다.
- 체크리스트(완료 기준 재료):
  - 이벤트 리스너 안의 코드가 **언제** 실행되는지 설명할 수 있다
  - `async` 함수에서 `await` 아래 줄이 함수 밖 코드보다 **늦게** 실행되는 이유를 말할 수 있다
  - `fetch`는 404여도 실패가 아니라서 `response.ok`를 확인한다
  - 장바구니를 `{ productId, quantity }` 배열로 기억하고, 담기·빼기를 **새 배열**로 만들 수 있다
  - 다시 그릴 부분(장바구니)과 한 번만 그릴 부분(상품 목록)을 나눌 수 있다
  - 막히면 오류 읽기 → 값 보기 순서로 원인을 찾았다

## 44. JS 마무리 실습 — 퍼블리싱 실습 페이지에 동작 붙이기

- 강의 폴더: `01-javascript/day08c-final-practice`
- 목표:
  - 이미 있는 HTML·CSS의 클래스 이름을 찾아 JS로 동작을 붙일 수 있다.
  - "이벤트 → 상태 바꾸기 → 화면 반영" 흐름으로 메뉴·슬라이드를 만들 수 있다.
  - `aria-expanded`, 키보드(Esc·화살표), 포커스까지 챙겨 누구나 쓸 수 있게 만들 수 있다.
- 체크리스트(완료 기준 재료):
  - 남이 만든 HTML에서 클래스 이름을 찾아 `querySelector` 로 쓸 수 있다
  - 상태 변수 → render 함수 흐름으로 메뉴를 만들었다
  - `aria-expanded` 를 `'true'`/`'false'` 로 바꿀 수 있다
  - `%` 로 슬라이드를 처음과 끝에서 돌게 만들 수 있다
  - `showModal()` 이 Esc·포커스·뒤쪽 막기를 해 준다는 걸 확인했다
  - 키보드만으로 메뉴·슬라이드·모달·질문을 모두 써 봤다

## 45. JS 점검 (보충·평가)

- 강의 폴더: `01-javascript/checkpoint`
- 목표:
  - 변수부터 fetch까지, 코드를 읽고 결과를 **실행 전에** 적을 수 있는지 확인한다.
  - 데이터 가공·인터랙션·불러오기 앱을 **혼자** 완성할 수 있는지 확인한다.
  - 점검 결과로 내 약한 곳을 찾고, 다시 볼 회차와 Step을 스스로 정한다.
- 체크리스트(완료 기준 재료):
  - 읽기 문제를 실행 없이 끝까지 풀었다
  - 실습 1~3을 되는 데까지 하고, 콘솔 오류가 없게 저장했다
  - 막혔을 때 콘솔·`console.log`·중단점 중 하나 이상을 써 봤다
  - 결과를 받고, 4절 표에서 내가 다시 볼 회차와 Step을 골랐다
  - 둘째 날 보충에서 그 회차의 과제를 하나 이상 다시 해 봤다

## 46. Day 09. Git 첫걸음 — 내 작업에 "버전 기록" 남기기

- 강의 폴더: `02-git/day09-git-basics`
- 목표:
  - Git을 설치하고 내 이름·이메일·기본 브랜치(`main`)를 설정할 수 있다.
  - `git status` → `git add` → `git commit` 순서로 커밋을 만들고, `git log`로 기록을 확인할 수 있다.
  - `.gitignore`로 저장소에 넣지 않을 파일을 뺄 수 있다.
- 체크리스트(완료 기준 재료):
  - `git --version`으로 설치를 확인할 수 있다
  - `git config --global --list`에 내 이름·이메일·`init.defaultbranch=main`이 보인다
  - 작업 폴더 → 스테이징 → 커밋 세 칸을 그림으로 설명할 수 있다
  - `git status`의 빨간색/초록색/`working tree clean`이 무슨 뜻인지 안다
  - `git log --oneline`으로 내 커밋 목록을 볼 수 있다
  - `.gitignore`에 적은 파일이 `git status`에서 사라지는 것을 확인했다
  - VS Code 소스 제어 패널에서 + → 메시지 → Commit 으로 커밋할 수 있다

## 47. Day 10. GitHub — 내 기록을 인터넷에 올리고, 웹사이트로 배포하기

- 강의 폴더: `02-git/day10-github`
- 목표:
  - GitHub에 저장소를 만들고, 내 `js-practice` 기록을 `push`로 올릴 수 있다.
  - GitHub에서 고친 내용을 `pull`로 받고, 다른 폴더에 `clone`으로 내려받을 수 있다.
  - README.md를 마크다운으로 쓰고, GitHub Pages로 Day 08 앱을 배포해 주소를 친구에게 보낼 수 있다.
- 체크리스트(완료 기준 재료):
  - Git과 GitHub의 차이를 한 문장으로 설명할 수 있다
  - `git remote -v` 로 `origin` 주소를 확인할 수 있다
  - `git push` / `git pull` / `git clone` 이 각각 무슨 방향인지 그림으로 그릴 수 있다
  - README.md에 제목·목록·표·링크를 마크다운으로 쓸 수 있다
  - `push`가 `rejected` 되면 `pull` 먼저 하면 된다는 것을 안다
  - 내 Day 08 앱 주소(`https://아이디.github.io/js-practice/js-day08/`)를 친구에게 보낼 수 있다
  - `git log --format="%h %ae %s"` 에 noreply 주소만 보인다 (내 진짜 이메일이 공개되지 않았다)
  - (공용 PC) 수업 끝에 자격 증명 관리자에서 `git:https://github.com` 을 제거했다

## 48. Day 27. GitHub 협업 — 브랜치, Pull Request, 충돌 해결

- 강의 폴더: `07-github-collab/day27-branch-pr`
- 목표:
  - `git switch -c`로 브랜치를 만들어 작업하고, `git merge`로 `main`에 합칠 수 있다.
  - 충돌(conflict) 표시(`<<<<<<<`, `=======`, `>>>>>>>`)를 읽고 직접 고쳐 해결할 수 있다.
  - 이슈 → 브랜치 → Pull Request → 리뷰 → 머지 순서로 팀 저장소에 내 페이지를 합칠 수 있다.
- 체크리스트(완료 기준 재료):
  - `git switch -c` / `git switch` / `git branch` 로 브랜치를 만들고 오갈 수 있다
  - `git merge` 는 "**지금 브랜치로** 가져와 합친다"는 방향을 안다
  - 충돌 표시 세 줄의 뜻을 설명하고, 지운 뒤 `git add` → `git commit` 으로 해결할 수 있다
  - 브랜치 이름(`feature/…`)과 커밋 메시지(`feat: …`) 규칙대로 쓸 수 있다
  - PR을 만들고, `Closes #번호` 로 이슈와 연결할 수 있다
  - 팀원 PR에 Comment / Approve / Request changes 중 하나로 리뷰를 남길 수 있다
  - `main` 보호 규칙이 왜 필요한지 설명할 수 있다

## 49. Day 11. React 시작 — Vite로 프로젝트 만들고 JSX 쓰기

- 강의 폴더: `03-react-basic/day11-react-start`
- 목표:
  - Node.js LTS를 설치하고 터미널에서 `node -v`로 버전을 확인할 수 있다.
  - `npm create vite@latest`로 React 프로젝트를 만들고 `npm run dev`로 브라우저에 띄울 수 있다.
  - JSX 규칙 4가지(하나의 부모, `className`, 닫는 태그, `{}` 안의 JS)를 지켜 프로필 카드를 만들 수 있다.
  - 변수에 `: string`, `: number` 타입을 붙이고, `npm run build` 가 알려 주는 타입 오류(`TS2322` 등)를 읽고 고칠 수 있다.
- 체크리스트(완료 기준 재료):
  - `node -v`, `npm -v` 로 버전을 확인할 수 있다
  - `npm create vite@latest` → `npm install` → `npm run dev` 순서를 안다
  - `index.html` → `main.tsx` → `App.tsx` 로 화면이 이어지는 흐름을 설명할 수 있다
  - `: string`, `: number` 타입 표기와 **추론**(안 적어도 TS가 정함)의 차이를 말할 수 있다
  - TS 오류에서 `파일:줄:칸`, `TS번호`, 설명을 나눠 읽을 수 있다
  - `npm run build` 가 타입 검사(`tsc -b`) 후 결과물을 만든다는 것을 알고, 통과(`✓ built in`)를 확인할 수 있다
  - JSX 규칙 4가지를 지킬 수 있다 (하나의 부모, `className`, `/>`, `{}`)
  - 개발 서버를 `Ctrl + C` 로 끄고 다시 켤 수 있다

## 50. Day 12. 컴포넌트와 props — 화면을 부품으로 나누기

- 강의 폴더: `03-react-basic/day12-components-props`
- 목표:
  - 화면 조각을 컴포넌트 함수로 만들고, 별도 파일로 나눠 `import`/`export` 할 수 있다.
  - props로 컴포넌트에 값을 넘기고, `type 이름Props = { ... }` 로 props의 모양(타입)을 적을 수 있다.
  - `children`으로 컴포넌트 안쪽 내용을 받아 `Card`처럼 감싸는 컴포넌트를 만들 수 있다.
- 체크리스트(완료 기준 재료):
  - 컴포넌트 이름을 대문자로 시작해야 하는 이유를 말할 수 있다
  - 컴포넌트를 `src/components/이름.tsx` 로 나누고 `export default` / `import` 할 수 있다
  - 문자열 props는 `"..."`, 숫자·변수 props는 `{...}` 로 넘긴다
  - 컴포넌트 위에 `type 이름Props = { ... };` 를 만들고, 선택 props에 `?`, 정해 둔 값에 `'primary' | 'secondary'` 를 쓸 수 있다
  - `{ label, variant = 'primary' }: ButtonProps` 처럼 props를 꺼내고 기본값을 줄 수 있다
  - `children: ReactNode` 와 `import type` 으로 감싸는 컴포넌트(Card)를 만들 수 있다
  - `type 이름 = { ... };` 와 `interface 이름 { ... }` 가 같은 일을 한다는 것을 알고 둘 다 읽을 수 있다
  - `npm run build` 의 `TS2741`, `TS2322` 오류를 읽고 고칠 수 있다

## 51. Day 13. state와 이벤트 — 누르면 바뀌는 화면

- 강의 폴더: `03-react-basic/day13-state-events`
- 목표:
  - `onClick`으로 버튼에 동작(함수)을 연결할 수 있다.
  - `useState`로 state를 만들고, set 함수로 바꿔 화면을 다시 그리게 할 수 있다.
  - 일반 변수로는 화면이 안 바뀌고 state로는 바뀌는 이유를 설명할 수 있다.
  - state 타입이 처음 값으로 **추론**되는 것을 알고, 빈 배열로 시작할 때 `useState<string[]>([])` 처럼 직접 적을 수 있다.
- 체크리스트(완료 기준 재료):
  - `onClick={handleClick}` 과 `onClick={handleClick()}` 의 차이를 말할 수 있다
  - `const [값, set값] = useState(처음값);` 을 쓸 수 있다
  - 일반 변수로는 화면이 안 바뀌는 이유를 Day 08의 `render()` 와 비교해 설명할 수 있다
  - 참/거짓 state와 `!` 로 토글을 만들 수 있다
  - 같은 컴포넌트를 여러 개 쓰면 state가 각자 따로라는 걸 안다
  - `useState(0)` 은 number 로 **추론**되고, 빈 배열은 `useState<string[]>([])` 처럼 타입을 적어야 하는 이유를 말할 수 있다
  - JSX 밖으로 뺀 핸들러에 `event: MouseEvent<HTMLButtonElement>` 를 붙일 수 있다
  - 함수 props를 `onClick: () => void` 로 적고, 부모가 넘긴 함수로 부모 state를 바꿀 수 있다
  - set 함수를 props로 넘길 때의 타입 `Dispatch<SetStateAction<number>>` 를 쓰고 읽을 수 있다
  - `npm run build` 가 오류 없이 끝난다 (`tsc` 타입 검사 통과)

## 52. Day 14. 조건부 렌더링과 목록 — 상품 카드 목록 그리기

- 강의 폴더: `03-react-basic/day14-conditional-list`
- 목표:
  - 삼항 연산자 `? :` 와 `&&` 로 조건에 따라 다른 화면을 그릴 수 있다.
  - 배열을 `map` 으로 JSX 목록으로 바꾸고, 알맞은 `key` 를 붙일 수 있다.
  - `filter` 로 거른 결과를 목록으로 그리고, 결과가 없을 때 안내 문구를 보여 줄 수 있다.
  - 공통 타입 `Product`·`Category` 를 `src/types.ts` 에서 가져와 `Product[]`, `useState<CategoryFilter>` 처럼 쓸 수 있다.
- 체크리스트(완료 기준 재료):
  - 둘 중 하나는 `? :`, 있을 때만은 `&&` 로 쓸 수 있다
  - `&&` 왼쪽에 숫자를 두면 `0` 이 찍힐 수 있다는 걸 안다
  - `배열.map((item) => <태그 key={...}>...</태그>)` 를 쓸 수 있다
  - key 로 index 대신 데이터의 `id` 를 쓰는 이유를 말할 수 있다
  - state 로 거르기 조건만 두고, 보여 줄 목록은 `filter` 로 계산할 수 있다
  - `src/types.ts` 의 `Product`·`Category` 를 `import type` 으로 가져와 `Product[]`, `useState<CategoryFilter>` 를 쓸 수 있다
  - `Record<CategoryFilter, string>`, `readonly`, `Array<Product>` 를 보고 뜻을 말할 수 있다
  - map 안의 `product` 가 `Product` 로 **추론**된다는 걸 오류 메시지(`on type 'Product'`)로 확인했다
  - `npm run build` 와 `npm run lint` 가 오류 없이 끝난다

## 53. Day 15. 폼 다루기 — 제어 컴포넌트와 state 끌어올리기

- 강의 폴더: `03-react-basic/day15-forms`
- 목표:
  - `value` + `onChange` 로 입력창을 state와 연결(제어 컴포넌트)할 수 있다.
  - `onSubmit` 과 `event.preventDefault()` 로 폼 제출을 처리하고(이벤트 함수에 `SubmitEvent<HTMLFormElement>` 타입), `useState<Todo[]>` 배열 state에 항목을 추가·수정·삭제할 수 있다.
  - 여러 컴포넌트가 함께 쓰는 state를 공통 부모로 끌어올리고, 함수를 props로 내려 주며 그 타입(`(text: string) => void`)을 적을 수 있다.
- 체크리스트(완료 기준 재료):
  - `value` + `onChange` 로 제어 컴포넌트를 만들 수 있다
  - `<form onSubmit>` 에서 `event.preventDefault()` 를 쓸 수 있다
  - 배열 state를 추가(`[...]`)·수정(`map`)·삭제(`filter`)로 새 배열을 만들어 바꿀 수 있다
  - 여러 컴포넌트가 쓰는 state를 공통 부모로 끌어올리고, 함수를 props로 내려 줄 수 있다
  - JSX 밖으로 뺀 이벤트 함수에 `SubmitEvent<HTMLFormElement>`·`ChangeEvent<HTMLInputElement>` 를 적을 수 있다
  - `type Todo` 와 `useState<Todo[]>`, 함수 props 타입 `(text: string) => void` 를 쓸 수 있다
  - 전달만 하는 중간 컴포넌트를 `children: ReactNode` 를 받는 껍데기로 바꿔 층을 줄일 수 있다
  - `npm run build` 로 타입 오류가 없는지 확인할 수 있다

## 54. React 복습 ① state·props·폼

- 강의 폴더: `03-react-basic/day15a-review`
- 목표:
  - 코드만 보고 화면과 콘솔에 무엇이 나올지 **먼저 말한 뒤** 확인할 수 있다.
  - props·state·이벤트·조건부·목록·폼을 한 앱 안에서 함께 쓸 수 있다.
  - 여러 컴포넌트가 쓰는 데이터를 공통 부모에 두고, 계산할 수 있는 값은 state로 만들지 않을 수 있다.
  - 데이터 타입(`type Item`)·props 타입·함수 props 타입을 직접 적고, `npm run build` 의 타입 오류를 읽고 고칠 수 있다.
- 체크리스트(완료 기준 재료):
  - props 기본값과 `children` 을 쓸 수 있다 (Day 12)
  - `setCount(count + 1)` 을 두 번 불러도 1만 오르는 이유를 말할 수 있다 (Day 13)
  - `onClick={함수()}` 가 왜 무한 반복이 되는지 말할 수 있다 (Day 13)
  - `&&` 왼쪽에 숫자를 두면 생기는 문제를 안다 (Day 14)
  - `map` 에 `key` 를 왜 붙이는지 말할 수 있다 (Day 14)
  - `value` + `onChange` 로 입력창을 제어하고, 숫자 입력은 `Number()` 로 바꾼다 (Day 15)
  - 배열 state를 `[...]` · `map` · `filter` 로 새로 만들어 바꾼다 (Day 15)
  - 여러 컴포넌트가 쓰는 state는 공통 부모에, 계산할 수 있는 값은 계산으로 둔다 (Day 15·오늘)
  - 데이터 타입(`type Item`)과 props 타입, 함수 props 타입(`(id: string) => void`)을 직접 적을 수 있다 (Day 12~15)
  - 빈 배열 state에 `useState<타입[]>([])` 를 쓰는 이유를 말할 수 있다 (Day 13·오늘)
  - `npm run build` 의 `파일:줄:칸 - error TS번호: 설명` 을 읽고 그 줄을 찾아 고칠 수 있다 (Day 11~15)

## 55. Day 16. useEffect와 fetch — Day 08 상품 앱을 React로 다시 만들기

- 강의 폴더: `03-react-basic/day16-effect-fetch`
- 목표:
  - `useEffect` 와 의존성 배열(`[]`, `[값]`)로 "언제 실행할지"를 정할 수 있다.
  - `useEffect` 안에서 `fetch` 로 `public/products.json` 을 불러오고(`useState<Product[]>([])`, `Promise<Product[]>`), 로딩·오류 상태를 화면에 보여 줄 수 있다.
  - Day 08 앱과 같은 화면·클래스 이름으로 React 앱을 완성하고, 두 코드의 차이를 설명할 수 있다.
- 체크리스트(완료 기준 재료):
  - `useEffect(할 일, [])` 와 `useEffect(할 일, [값])` 의 차이를 말할 수 있다
  - 개발 모드에서 이펙트가 두 번 실행되는 이유를 안다
  - `useEffect` 안에서 fetch 하고 `ignore` 로 정리할 수 있다
  - `useState<Product[]>([])`, `Promise<Product[]>`, `const data: Product[]` 를 쓰고, 타입 이름표가 "검사가 아니라 약속"인 이유를 말할 수 있다
  - `catch (err)` 의 `err` 가 `unknown` 인 이유와, `Product | null` 을 `?.`·`??`·`&&` 로 안전하게 쓰는 법을 안다
  - 로딩·오류·결과 세 가지 상태를 화면에 나눠 보여 줄 수 있다
  - Day 08 코드의 각 부분이 React에서 무엇이 됐는지 3가지 이상 짝지을 수 있다
  - `npm run build` 와 `npm run lint` 가 오류 없이 끝난다

## 56. React 실습 — 상품 앱 기능 늘리기

- 강의 폴더: `03-react-basic/day16a-practice`
- 목표:
  - `<select>` 와 `<input type="range">` 를 제어 컴포넌트로 만들어 목록을 정렬하고 거를 수 있다.
  - `CartItem` 타입(`{ id, quantity }`)의 배열 state(`useState<CartItem[]>([])`)로 장바구니 담기를 만들고, 개수·금액을 **계산값**으로 보여 줄 수 있다.
  - 연습용 브랜치에서 작업하고 커밋한 뒤 `main` 으로 돌아올 수 있다.
- 체크리스트(완료 기준 재료):
  - `<select>` 를 `value` + `onChange` 로 제어하고, `selected` 대신 state의 처음 값을 쓴다
  - `sort` 전에 `[...배열]` 로 복사하는 이유를 말할 수 있다
  - range 입력값을 `Number()` 로 바꿔 state에 넣는다
  - 거르기 조건을 `const matchXxx` + `&&` 로 늘릴 수 있다
  - `type CartItem` 과 `useState<CartItem[]>([])` 로 담기를 만들고, 개수·금액을 계산값으로 보여 줄 수 있다
  - `find` 결과(`Product | undefined`)를 `if` 로 좁혀 쓰고, `npm run build`·`npm run lint` 를 통과시킬 수 있다
  - 연습용 브랜치에서 커밋하고 `main` 으로 돌아올 수 있다

## 57. Day 17. React Router — 한 앱 안에 여러 페이지 만들기

- 강의 폴더: `04-react-advanced/day17-router`
- 목표:
  - React Router를 설치하고, 주소마다 다른 페이지 컴포넌트를 보여 줄 수 있다.
  - `Link`/`NavLink`로 새로고침 없이 페이지를 이동하고, 지금 메뉴를 표시할 수 있다.
  - `/products/:id` 같은 동적 경로를 만들고 `useParams`로 주소의 값(`string | undefined`)을 꺼내 `Number(id)` 로 바꾸고, 못 찾은 경우를 좁혀서 상세 페이지를 그릴 수 있다.
  - 여러 페이지가 함께 쓰는 장바구니 개수를 Context(`CartProvider` + `useCart`)로 나눠 줄 수 있다.
- 체크리스트(완료 기준 재료):
  - `npm i react-router` 로 설치하고 `main.tsx` 를 `<BrowserRouter>` 로 감쌀 수 있다
  - `<Routes>` 안에 `<Route path="..." element={<... />} />` 로 페이지를 연결할 수 있다
  - 앱 안에서는 `<a>` 대신 `<Link>`/`<NavLink>` 를 쓰는 이유를 설명할 수 있다
  - Layout + `<Outlet />` 으로 모든 페이지에 같은 헤더를 넣을 수 있다
  - `/products/:id` 와 `useParams()` 로 상세 페이지를 만들고, `id` 가 `string | undefined` 인 이유와 `Number(id)` 가 왜 필요한지 설명할 수 있다
  - `if (!product) return ...` 으로 `Product | undefined` 를 좁힐 수 있다
  - `path="*"` 로 404 페이지를 만들 수 있다
  - props로 여러 층을 내려보내는 불편함(prop drilling)을 설명하고, `createContext<... | null>(null)` + `useCart` 훅으로 바꿀 수 있다
  - 모달 열림처럼 한 화면 안의 값은 `useState` 로 충분하다는 것을 안다
  - `npm run build` 와 `npm run lint` 가 오류 없이 끝난다

## 58. Day 18. CSS Modules — 이 스타일은 이 컴포넌트에서만

- 강의 폴더: `04-react-advanced/day18-css-modules`
- 목표:
  - 전역 CSS에서 class 이름이 겹치면 어떤 문제가 생기는지 직접 보여 줄 수 있다.
  - `이름.module.css` 를 만들고 `styles.이름` 으로 컴포넌트에 적용할 수 있다.
  - 템플릿 리터럴과 삼항 연산자로 여러 class를 조합하고, 조건에 따라 class를 붙일 수 있다.
  - `styles` 의 타입이 무엇이고 TS가 어디까지 잡아 주는지(오타는 못 잡음) 설명할 수 있다.
- 체크리스트(완료 기준 재료):
  - 전역 CSS에서 이름이 겹치면 다른 화면까지 바뀐다는 것을 직접 보여 줄 수 있다
  - `이름.module.css` 를 만들고 `import styles from ...` → `className={styles.이름}` 으로 쓸 수 있다
  - CSS Module의 class 이름을 왜 camelCase로 짓는지 설명할 수 있다
  - `` `${styles.a} ${styles.b}` `` 로 여러 class를 붙일 수 있다
  - 삼항 연산자로 조건부 class를 만들 수 있다 (하트, 필터 버튼, NavLink)
  - 전역 CSS에 남길 것과 module로 보낼 것을 구분할 수 있다
  - `styles.이름` 오타는 TS가 못 잡는 이유(`CSSModuleClasses`)를 설명할 수 있다
  - `NavLinkRenderProps` 처럼 라이브러리 타입을 `import type` 으로 가져와 쓸 수 있다
  - `npm run build` 와 `npm run lint` 가 오류 없이 끝난다

## 59. Day 19. Tailwind CSS — Figma 속성 값을 class로 바로 쓰기

- 강의 폴더: `04-react-advanced/day19-tailwind`
- 목표:
  - Vite 프로젝트에 Tailwind CSS를 설치하고, Figma 수치를 Tailwind class(간격·색·글꼴·모서리)로 옮길 수 있다.
  - `flex`, `hover:`, 조건부 class로 헤더·카드·필터 버튼을 만들고, 상태별 class 묶음을 `Record<Variant, string>` 으로 정리할 수 있다.
  - `sm:` `md:` `lg:` 로 모바일과 데스크톱에서 다르게 보이는 반응형 화면을 만들 수 있다.
- 체크리스트(완료 기준 재료):
  - `npm install tailwindcss @tailwindcss/vite` → `vite.config.ts` 플러그인 → `@import "tailwindcss";` 순서로 설치할 수 있다
  - Figma 수치(px)를 Tailwind 간격 class로 바꿀 수 있다 (px ÷ 4)
  - 크기표에 없는 값은 `w-[220px]` 처럼 임의 값으로 쓸 수 있다
  - `flex`, `gap`, `items-center`, `justify-between` 을 Auto Layout과 짝지어 설명할 수 있다
  - `hover:` 와 `transition` 으로 마우스 반응을 만들 수 있다
  - 바뀌는 class만 조건으로 골라 붙일 수 있다
  - 상태별 class 묶음을 `Record<FilterVariant, string>` 으로 만들고, 빠진 상태를 TS가 잡아 준다는 것을 확인했다
  - `npm run build` 와 `npm run lint` 가 오류 없이 끝난다
  - 모바일 우선으로 `sm:` `md:` `lg:` 반응형을 만들 수 있다

## 60. React 복습 ② Router·스타일링

- 강의 폴더: `04-react-advanced/day19a-review`
- 목표:
  - 코드만 보고 "이 주소에서 어떤 화면이 나올지, 어떤 class가 붙을지" 먼저 말할 수 있다.
  - Vite 프로젝트에 React Router와 Tailwind를 **혼자** 설치하고, 목록 → 상세(`/products/:id`) → 404 구조를 만들 수 있다.
  - Tailwind 반응형 grid와 CSS Module 조건부 class를 한 프로젝트에서 함께 쓸 수 있다.
  - 값마다 `useState` / props / Context 중 어디에 둘지 고르고, 같은 장바구니를 Zustand로 만든 코드를 읽을 수 있다.
- 체크리스트(완료 기준 재료):
  - `npm create vite` → `npm i react-router` → Tailwind 설치·연결을 **보지 않고** 할 수 있다
  - 주소를 보고 어느 Route가 맞는지 말할 수 있다 (`:id`, `*`)
  - `useParams()` 값이 `string | undefined` 라 `Number()` 와 `if (!product)` 좁히기가 필요한 이유를 말할 수 있다
  - 모달 열림·여러 단계 폼은 `useState`, 여러 페이지가 쓰는 값은 Context로 고를 수 있다
  - `create<CartState>()(...)` 로 만든 Zustand 저장소 코드를 읽고, Context와 무엇이 다른지 말할 수 있다
  - `npm run build` 와 `npm run lint` 가 오류 없이 끝난다
  - `NavLink` 가 언제 `active` 가 되는지(`end`, `/`) 말할 수 있다
  - CSS Module에서 class 두 개를 띄어쓰기로 이어 붙이고, 조건부로 붙일 수 있다
  - Figma px 값을 Tailwind class로 바꾸고, `sm:` `md:` `lg:` 로 반응형 grid를 만들 수 있다
  - 충돌하는 Tailwind class를 함께 붙이지 않고, class 이름을 조각내 만들지 않는다

## 61. Day 20. 미니 프로젝트 — 나의 포트폴리오 사이트

- 강의 폴더: `04-react-advanced/day20-mini-portfolio`
- 목표:
  - 만들 사이트의 페이지·주소·컴포넌트를 먼저 설계할 수 있다.
  - Vite + React Router + Tailwind 프로젝트를 처음부터 만들고, 목록 → 상세(`/projects/:slug`) 구조를 혼자 구현할 수 있다.
  - 완성한 사이트를 체크리스트로 점검하고 GitHub 저장소로 제출할 수 있다.
- 체크리스트(완료 기준 재료):
  - 사이트맵·주소 표·컴포넌트 목록을 먼저 만들고 그에 맞춰 구현했다
  - `npm create vite@latest` 부터 Router·Tailwind 설치까지 혼자 할 수 있다
  - 목록 → 상세(`/projects/:slug`) 구조를 혼자 만들 수 있다
  - 컴포넌트(`ProjectCard`)를 두 페이지에서 다시 썼다
  - `Project` 타입과 `projects: Project[]` 가 무엇을 지켜 주는지 설명할 수 있다
  - 최종 체크리스트를 통과하고 GitHub에 올렸다

## 62. React 점검 (보충·평가)

- 강의 폴더: `04-react-advanced/checkpoint`
- 목표:
  - 코드만 보고 결과를 예상하는 필기 문제를 풀어, 내가 약한 회차를 찾을 수 있다.
  - 오류 메시지(Console·TS 타입 오류)가 있는 버그와 **없는** 버그를 사양과 비교해 찾아 고칠 수 있다.
  - 점검 결과에 맞는 보충 자료를 골라 스스로 다시 공부할 수 있다.
- 체크리스트(완료 기준 재료):
  - 필기에서 틀린 문제의 **이유**를 지금은 말할 수 있다
  - `error TS...` 는 파일:줄:칸부터, 화면이 하얄 때는 Console 첫 빨간 줄부터 읽는다
  - 오류 없는 버그를 사양표와 비교해 찾았다
  - 버그마다 증상·원인·고친 방법을 기록표에 적었다
  - 내 보충 자료(4장)를 정했고, 오늘 한 개 이상 다시 했다

## 63. Day 21. Next.js 시작 — 폴더가 곧 주소가 되는 React

- 강의 폴더: `05-nextjs/day21-next-start`
- 목표:
  - `create-next-app`으로 Next.js 프로젝트를 만들고 `npm run dev`로 띄울 수 있다.
  - `app/` 안에 폴더와 `page.tsx`를 만들어 새 주소(페이지)를 추가할 수 있다.
  - `layout.tsx`로 모든 페이지에 공통 메뉴를 넣고, `Link`로 페이지 사이를 이동할 수 있다.
- 체크리스트(완료 기준 재료):
  - `create-next-app`으로 프로젝트를 만들고 `npm run dev`로 `localhost:3000`을 열 수 있다
  - `app/about/page.tsx`를 만들면 `/about` 주소가 생기는 이유를 설명할 수 있다
  - `layout.tsx`의 `children` 자리에 무엇이 들어오는지 말할 수 있다
  - 사이트 안 이동은 `Link`, 바깥 사이트는 `<a>`를 쓴다
  - `@/components/Header` 가 어느 파일인지 찾을 수 있다
  - `layout.tsx` 에서 `Metadata`, `LayoutProps<'/'>` 가 무엇을 약속하는지 말할 수 있다

## 64. Day 22. 동적 라우트 — 폴더 하나로 상세 페이지 여러 개

- 강의 폴더: `05-nextjs/day22-dynamic-routes`
- 목표:
  - `app/projects/[slug]/page.tsx`로 상세 페이지를 만들고 `PageProps` 타입과 `await props.params`로 주소 값을 꺼낼 수 있다.
  - `public/images/`에 넣은 사진을 `next/image`로 보여 주고, `width`·`height`가 왜 필요한지 말할 수 있다.
  - `next/font`와 `metadata`로 글꼴과 페이지마다 다른 탭 제목을 정할 수 있다.
  - 필터 값(고른 태그)을 `useState` 대신 **주소(`?tag=`)** 에 담고, 서버 페이지에서 `await props.searchParams` 로 꺼낼 수 있다.
- 체크리스트(완료 기준 재료):
  - `[slug]` 폴더 하나가 여러 주소를 맡는 이유를 설명할 수 있다
  - `const { slug } = await props.params;` 에서 `await`가 왜 필요한지, `PageProps<'/projects/[slug]'>` 가 무슨 약속인지 말할 수 있다
  - 없는 slug에서 `notFound()`로 404를 보여 줄 수 있다
  - `public/images/cafe.jpg` 사진을 `src="/images/cafe.jpg"` 로 쓰고, `width`·`height`를 꼭 넣는다 (다른 웹사이트 사진은 `remotePatterns` 허락이 따로 필요하다)
  - `title.template`의 `%s` 자리에 무엇이 들어가는지 안다
  - `find` 결과가 `Project` 또는 `undefined` 인 이유와, `notFound()` 뒤에 `project` 가 좁혀지는 이유를 말할 수 있다
  - 필터 값을 `useState` 대신 주소(`?tag=`)에 담고 `await props.searchParams` 로 꺼낼 수 있다

## 65. Day 23. 서버 컴포넌트 vs 클라이언트 컴포넌트

- 강의 폴더: `05-nextjs/day23-server-client`
- 목표:
  - 서버 컴포넌트와 클라이언트 컴포넌트가 **어디서 실행되는지** 설명하고, `'use client'`가 필요한 때를 고를 수 있다.
  - 서버 컴포넌트에서 `async`/`await`로 데이터를 읽어 화면에 그릴 수 있다.
  - 서버에서 읽은 데이터를 props로 클라이언트 컴포넌트에 넘겨 좋아요·필터를 만들고, 그 props에 타입(`Product[]`, `boolean`)을 붙일 수 있다.
  - `'use client'` 인 Context Provider를 layout에서 `{children}` 에만 씌워, 여러 컴포넌트가 같은 찜 목록을 보게 할 수 있다.
  - "이 값은 어디에 둘까?"(서버 / URL / `useState` / Context)를 값마다 골라 말할 수 있다.
- 체크리스트(완료 기준 재료):
  - `app/` 안 컴포넌트는 기본이 서버 컴포넌트라는 것을 안다
  - `useState`·`onClick`이 필요하면 `'use client'`를 파일 맨 첫 줄에 쓴다
  - `'use client'`는 필요한 가장 작은 부분(하트 버튼, 필터)에만 붙인다
  - 서버 컴포넌트에서 `await`로 데이터를 읽어 props로 넘길 수 있다
  - 서버 `console.log`는 터미널, 클릭 처리 `console.log`는 브라우저 콘솔에 나온다
  - 서버가 읽은 `Product[]` 를 `'use client'` 컴포넌트에 props 로 넘기고, 받는 쪽에 `type ...Props` 를 적을 수 있다
  - Context Provider 는 `'use client'` 로 만들고 layout 에서는 `{children}` 만 감싼다
  - 서버 데이터 / URL / `useState` / Context 중 값마다 둘 곳을 고를 수 있다

## 66. Day 24. Tailwind 정리 · 포트폴리오 옮기기 · Vercel 배포

- 강의 폴더: `05-nextjs/day24-deploy`
- 목표:
  - Tailwind의 `@theme`에 브랜드 색과 글꼴을 등록해 `text-brand`, `font-sans` 같은 클래스로 쓸 수 있다.
  - React Router 코드를 Next.js 폴더 라우팅으로 옮길 때 무엇이 무엇으로 바뀌는지 대응표로 설명할 수 있다.
  - `npm run build`로 배포 전 점검을 하고, GitHub 저장소를 Vercel에 연결해 배포하는 순서를 말할 수 있다.
- 체크리스트(완료 기준 재료):
  - `@theme`의 `--color-brand`가 `text-brand`/`bg-brand` 클래스가 되는 걸 안다
  - 대응표를 보고 `<Route path="/projects/:slug">` 가 어떤 폴더가 되는지 말할 수 있다
  - `useParams()` 대신 `await props.params`(+ `PageProps`), `to` 대신 `href`를 쓴다
  - 배포 전에 `npm run build`와 `npm run lint`를 내 컴퓨터에서 통과시킨다 (build 는 타입 오류도 잡아요)
  - GitHub push → Vercel 자동 배포 흐름을 그림으로 설명할 수 있다

## 67. Next.js 복습

- 강의 폴더: `05-nextjs/day24a-review`
- 목표:
  - 파일 위치만 보고 주소를, 컴포넌트가 하는 일만 보고 서버/클라이언트를 고를 수 있다.
  - `create-next-app` 부터 목록 → `[slug]` 상세 → 404 → `npm run build` 까지 혼자 만들 수 있다.
  - 빌드 결과 표의 `○` `●` `ƒ` 가 무슨 뜻인지 읽고, 배포 전 점검 순서를 말할 수 있다.
  - Next.js 코드의 타입(`PageProps`, `Metadata`, `type ...Props`)을 읽고, 타입 오류 메시지의 뜻을 말할 수 있다.
  - 값마다 "서버 / 주소(URL) / `useState` / Context" 중 어디에 둘지 고를 수 있다.
- 체크리스트(완료 기준 재료):
  - 파일 위치를 보고 주소를 말할 수 있다 (`page.tsx`, `[slug]`, `app/` 밖)
  - `params` 를 `await` 로 꺼내는 이유와 `PageProps<'/projects/[slug]'>` 가 무엇인지 말할 수 있다
  - `find` 결과가 `undefined` 일 수 있어 `notFound()` 로 좁히는 이유를 말할 수 있다
  - 서버/클라이언트를 고르는 기준(훅·이벤트·브라우저 기능 → 클라이언트)을 말할 수 있다
  - 서버 → 클라이언트로 함수는 넘길 수 없다는 걸 안다
  - `Image` 에 `width`·`height` 를 넣고, `metadata` 와 `generateMetadata` 를 구분해 쓴다
  - `npm run build` 표의 `○` `●` `ƒ` 를 읽고, `npm run lint` 까지 통과시킨 뒤 push 한다 (build 는 타입 오류도 잡아요)
  - 서버 데이터 / 주소(URL) / `useState` / Context 중 값마다 둘 곳을 고를 수 있다

## 68. Next.js 실습 — next-shop 기능 늘리기

- 강의 폴더: `05-nextjs/day24b-practice`
- 목표:
  - `[id]` 동적 라우트로 상품 상세 페이지를 만들고, 메타데이터·미리 만들기·404까지 붙일 수 있다.
  - `<Form action="/search">` 와 `await props.searchParams` 로 주소에 검색어를 담는 검색 결과 페이지를 만들 수 있다. (Day 22 Step 13과 같은 방법)
  - `loading.tsx` 로 불러오는 중 화면을 만들고, 빌드 표에서 미리 만든 페이지(`●`)와 요청마다 만드는 페이지(`ƒ`)를 구분할 수 있다.
- 체크리스트(완료 기준 재료):
  - `[id]` 폴더 + `PageProps` + `await props.params` + `Number(id)` + `notFound()` 로 상세 페이지를 만들 수 있다
  - `generateStaticParams` 에서 `String()` 이 필요한 이유를 말할 수 있다
  - 루트 `app/not-found.tsx` 가 맡는 두 경우를 말할 수 있다
  - `<Form action="/search">` + `name` 으로 검색어를 주소에 담고, `await props.searchParams` 로 꺼내 `typeof` 로 글자만 쓰도록 좁힐 수 있다
  - `params` 와 `searchParams` 의 차이(폴더 자리 / `?` 뒤, 타입은 `string` / `string \| string[] \| undefined`)를 설명할 수 있다
  - 검색어·필터는 주소에, 한 화면 값은 `useState` 에, 여러 곳이 같이 쓰는 값은 Context 에 둔다는 걸 구분할 수 있다
  - `loading.tsx` 가 언제 보이는지 말할 수 있다
  - 빌드 표에서 `●`(미리 만든 상세)와 `ƒ`(검색)를 구분할 수 있다

## 69. Day 25. Figma → 코드 ① 디자인 토큰과 Auto Layout

- 강의 폴더: `06-figma-to-code/day25-tokens-layout`
- 목표:
  - F05에서 만든 Figma 변수 15개와 텍스트 스타일 4개를 Dev Mode에서 읽고, 같은 이름의 CSS 변수 파일(`tokens.css`)로 옮길 수 있다.
  - Auto Layout의 방향·Gap·Padding·정렬·Hug/Fill/Fixed를 CSS `flex` 속성으로 바꿔 쓸 수 있다.
  - 같은 토큰을 Tailwind `@theme`에 넣어 `bg-primary`, `p-lg` 같은 클래스로 쓸 수 있다.
- 체크리스트(완료 기준 재료):
  - `my-shop-design` 의 변수 15개·텍스트 스타일 4개가 오늘 `tokens.css` 와 이름·값이 같은지 확인했다
  - Figma 이름 `space/lg` 를 CSS 이름 `--spacing-lg` 로 바꾸는 규칙을 말할 수 있다
  - Hug / Fill / Fixed 를 각각 CSS로 어떻게 쓰는지 말할 수 있다 (특히 세로 flex의 stretch 함정)
  - `:root` 와 `@theme static` 의 차이를 한 문장으로 설명할 수 있다
  - Dev Mode의 Inspect 패널에서 값과 토큰 이름을 읽을 수 있다 (Dev Mode 없이 오른쪽 사이드바에서도)
  - TypeScript 오류 메시지(`파일:줄:칸 - error TS번호: 설명`)에서 어느 파일·어느 줄이 문제인지 찾을 수 있다

## 70. Day 26. Figma → 코드 ② 컴포넌트·Variants → React props, 반응형 화면

- 강의 폴더: `06-figma-to-code/day26-components`
- 목표:
  - Figma 컴포넌트의 Variant·Text 속성을 React props(`variant`, `size`, `disabled`, `children`)로 옮길 수 있다.
  - props 값에 따라 Tailwind 클래스를 고르는 객체(`variantClasses`)를 만들 수 있다.
  - Figma Variant 값 목록을 유니언 타입(`'primary' | 'secondary'`)으로, `<button>` 이 원래 받는 속성을 `interface ButtonProps extends ComponentProps<'button'>` 으로 옮길 수 있다.
  - F06의 `list-mobile`·`list-desktop` 프레임 차이를 `sm:`, `md:`, `lg:` 반응형 클래스로 옮길 수 있다.
- 체크리스트(완료 기준 재료):
  - Figma Variant 속성과 값 이름을 React prop 이름과 유니언 타입 값으로 그대로 옮길 수 있다
  - `interface ButtonProps extends ComponentProps<'button'>` 이 하는 일을 말할 수 있고, Figma Make·AI가 만든 컴포넌트에서 같은 모양을 찾을 수 있다
  - Button의 Text 속성 `label` 은 `children`, ProductCard의 Text 속성은 같은 이름의 props, Boolean 속성은 조건부 렌더링이라는 걸 설명할 수 있다
  - 클래스 이름을 이어 붙이지 않고 객체에서 고르는 이유를 말할 수 있다
  - `disabled` 를 모양(`disabled:opacity-40`)과 동작(`{...rest}` 로 진짜 버튼에 전달) 두 곳에 모두 적용할 수 있다
  - 모바일 먼저 + `sm:`/`md:`/`lg:` 로 F06의 `list-mobile`·`list-desktop` 프레임을 코드 하나로 옮길 수 있다
  - Figma 컴포넌트에 Dev resource로 GitHub 코드 링크를 붙일 수 있다 (오늘 작업 커밋하기 끝)

## 71. R01. React 인터랙션과 접근성 (모바일 메뉴·모달·슬라이드)

- 강의 폴더: `09-pro-ready/r01-react-interaction`
- 목표:
  - 모바일 메뉴 버튼에 `aria-expanded`를 연결하고, `Esc`로 닫은 뒤 포커스를 버튼으로 돌려줄 수 있다.
  - `<dialog>` + `useRef` + `useEffect`로 모달 컴포넌트를 만들고, 닫으면 연 버튼으로 포커스를 돌려줄 수 있다.
  - 슬라이드를 `useState` 번호 하나로 만들고, 버튼·화살표 키·화면 낭독기 안내(`aria-live`)까지 붙일 수 있다.
- 체크리스트(완료 기준 재료):
  - `aria-expanded`, `aria-controls`, `aria-label`, `aria-live`가 각각 무엇을 알려 주는지 말할 수 있다
  - `useState`(화면에 보이는 값)와 `useRef`(진짜 요소 붙잡기)의 차이를 말할 수 있다
  - `useRef<HTMLButtonElement>(null)`의 `null`이 왜 있는지, `?.`로 어떻게 다루는지 말할 수 있다
  - `<dialog>`를 `useEffect`에서 `showModal()`/`close()`로 여닫고, `onClose`로 state를 맞출 수 있다
  - 메뉴·모달을 닫으면 포커스를 연 버튼으로 돌려준다
  - 위의 ⌨️ 키보드 점검표를 마우스 없이 통과한다
  - `npm run build`와 `npm run lint`가 통과한다

## 72. R02. 반응형·품질 점검 (DevTools 기기 모드, Lighthouse, ESLint, HTML 검사)

- 강의 폴더: `09-pro-ready/r02-quality`
- 목표:
  - DevTools 기기 모드로 320·768·1280px을 확인하고, 가로 넘침을 찾아 고칠 수 있다.
  - Lighthouse 보고서에서 통과 못 한 항목을 읽고, 대비·이미지 문제를 고친 뒤 다시 돌려 확인할 수 있다.
  - ESLint와 W3C HTML 검사기 결과를 읽고, 그 결과를 품질 점검표에 기록할 수 있다.
- 체크리스트(완료 기준 재료):
  - 320·768·1280px에서 가로 넘침을 콘솔 한 줄로 확인할 수 있다
  - Lighthouse 항목을 펼쳐 문제 요소와 영어 원문을 찾을 수 있다
  - "보조 글자색은 흰 바탕에서만" 규칙으로 대비 문제를 고칠 수 있다
  - 첫 화면 큰 사진에 `loading="eager"`·`fetchPriority="high"`, 폭이 바뀌는 사진에 `sizes`를 넣는다
  - `npm run lint` 결과(error·warning, `any`·안 쓰는 변수 포함)를 읽고 0개로 만든다
  - 배포 주소를 W3C 검사기로 검사하고 Error/Info를 구분한다
  - `docs/quality-checklist.md`를 채웠다

## 73. R03. AI 코딩 도구 활용

- 강의 폴더: `09-pro-ready/r03-ai-coding`
- 목표:
  - 상황·코드·오류 메시지·원하는 결과·지킬 규칙을 담아 AI에게 질문을 쓸 수 있다.
  - AI가 준 코드를 실행·`npm run lint`·`npm run build`·키보드·공식 문서로 검증하고 고칠 수 있다.
  - AI 사용 기록(맡긴 일 / 직접 검증한 것 / 고친 것)을 남길 수 있다.
  - 팀 저장소에 AI 설정 묶음(CLAUDE.md·스킬·권한 설정·`.mcp.json`)을 만들고, 무엇을 git에 올리고 무엇을 안 올리는지 말할 수 있다.
- 체크리스트(완료 기준 재료):
  - 질문 틀(상황·파일·코드·오류·원하는 결과·규칙·답 모양)로 AI에게 물을 수 있다
  - AI 코드를 검증 순서 1~7로 확인하고, 적어도 `lint`와 `build`는 꼭 돌린다
  - `window is not defined`가 왜 나는지 설명할 수 있다
  - AI 코드에서 `any`·`!`·`as`·`@ts-ignore`를 찾고 왜 위험한지 말할 수 있다
  - 비밀 값·개인정보를 AI에 붙이지 않는다
  - `docs/ai-log.md`에 오늘 두 건 이상 기록했다
  - `git status` 에 AI 설정 묶음은 보이고 `.env.local` 은 보이지 않는다

## 74. R04. 운영 데이터 (GA4 이벤트)

- 강의 폴더: `09-pro-ready/r04-analytics`
- 목표:
  - GA4의 계정 → 속성 → 데이터 스트림 구조를 말하고, 측정 ID(`G-…`)를 찾아 팀원에게 권한을 줄 수 있다.
  - `@next/third-parties/google`의 `GoogleAnalytics`로 GA4를 연결하고, `sendGAEvent`로 클릭 이벤트를 보낼 수 있다.
  - 실시간 보고서에서 이벤트를 확인하고, 숫자와 관찰을 합쳐 개선안을 쓸 수 있다.
- 체크리스트(완료 기준 재료):
  - 계정 → 속성 → 데이터 스트림 → 측정 ID 순서를 말할 수 있다
  - 팀원을 **액세스 관리**에서 편집자·뷰어로 추가하는 법을 안다
  - 측정 ID를 `.env.local`과 Vercel 환경 변수에 넣고, 바꾸면 다시 배포해야 하는 이유를 안다
  - `sendGAEvent('event', '이름', { … })`로 이벤트를 보내고 `window.dataLayer`로 확인할 수 있다
  - `declare global { interface Window { … } }`가 무슨 일을 하는지 말할 수 있다
  - 실시간 보고서(지난 30분)에서 이벤트 이름을 찾고 캡처했다
  - 개인정보를 이벤트·매개변수·URL에 넣지 않는다
  - 개인정보 처리방침 페이지와 링크가 있다

## 75. R05. 개인 실습: 내 시안 한 화면을 Next.js로 끝까지 (6일)

- 강의 폴더: `09-pro-ready/r05-solo-build`
- 목표:
  - 시안 한 화면을 토큰·컴포넌트 단위로 나눠 Next.js + Tailwind로 구현하고, 320·768·1280px에서 시안과 맞출 수 있다.
  - 품질 점검표(R02)를 채우고, Lighthouse 접근성·권장사항·SEO 90 이상, `npm run lint` 0개를 만들 수 있다.
  - Vercel에 배포하고, Figma 컴포넌트에 Dev resource로 GitHub 코드 링크를 붙일 수 있다.
- 체크리스트(완료 기준 재료):
  - 한 화면을 시안과 같은 규칙(토큰·컴포넌트·반응형)으로 구현했다
  - 키보드 점검표, 품질 점검표를 채웠다
  - 배포 주소가 있다
  - Dev resource 2개 이상
  - README·`solo-plan.md` 회고를 썼다

## 76. R06. 팀 리허설 (3명, 4일)

- 강의 폴더: `09-pro-ready/r06-team-rehearsal`
- 목표:
  - 스타터로 팀 저장소를 만들고, 보드·이슈·Notion 팀 공간을 갖출 수 있다.
  - 1인 2개 이상의 PR을 이슈 → 브랜치 → PR → 리뷰 → 머지로 올리고, 충돌을 한 번 이상 풀 수 있다.
  - 팀 사이트를 Vercel에 배포하고, 팀원 커밋으로도 배포되는지 시험해 결과를 기록할 수 있다.

## 77. R07. 프로젝트 준비

- 강의 폴더: `09-pro-ready/r07-project-prep`
- 목표:
  - 프로젝트 기간의 하루 흐름과 평가 기준을 설명하고, 평가 근거가 어디에 남는지 말할 수 있다.
  - 팀을 확정하고, Notion 팀 공간을 프로젝트용으로 정리하고, 기록 습관(회의록·성찰일지·AI 사용 기록)을 시작할 수 있다.
  - 발표 구성법과 저작권 규칙을 지켜 프로젝트 1 대상 서비스 후보를 고를 수 있다.

## 78. 프로젝트 1 · 상용 서비스 클론 (22일)

- 강의 폴더: `10-project-1-clone`

## 79. 프로젝트 2 · 반응형 웹사이트 (35일)

- 강의 폴더: `11-project-2-web`
