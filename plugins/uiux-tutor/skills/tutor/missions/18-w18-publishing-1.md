# 18. W18. 퍼블리싱 실습 ① 시안 읽기·토큰·마크업 — 미션 예시

> 퍼블리싱 실습 3일 중 첫째 날: 고른 사이트의 **한 페이지**(구역 5~7개)를 W18 시안 읽기 → W19 배치·반응형 → W20 움직임·접근성 점검까지 이어서 만들어요. 오늘은 모양 없는 "뼈대 페이지"까지예요.

## 배우기 재료
- 핵심 개념
  - **코드 전에 시안 읽기**: 퍼블리셔는 바로 치지 않고 세 표를 먼저 만들어요 — ① 구역 목록(위에서 아래로 몇 덩어리) ② 토큰 표(색·간격·모서리·글자 값에 이름 붙이기) ③ 화면 크기별 배치(모바일 세로 → 데스크톱 가로가 되는 곳). Figma 의 프레임 목록 + Variables + 반응형 프레임 세 가지를 글로 정리하는 일이에요.
  - **링크와 버튼 · 장식 그림**: 다른 곳으로 **이동**하면 `<a>`, 이 페이지에서 **무언가 일어나면**(메뉴 열기·팝업 열기) `<button type="button">` 이에요. 장식 그림은 `alt=""`(스크린 리더가 건너뛰어요), 내용이 있는 그림은 설명을 써요.
  - **나중에 JS 가 찾을 이름**: JavaScript 는 클래스 이름으로 요소를 찾아요. 그래서 메뉴 버튼 `.menu-btn`, 슬라이드 `.slider-track`, 팝업 `.modal`, 질문 `.faq-item` 같은 이름을 미리 정해 마크업해요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `index.html`, `css/tokens.css`)
  ```css
  /* css/tokens.css */
  :root {
    --color-primary: #2563eb;
    --spacing-md: 16px;
    --radius-lg: 16px;
  }
  ```
  ```html
  <details class="faq-item">
    <summary>예약은 어떻게 하나요?</summary>
    <p>전화로 해 주세요.</p>
  </details>
  <button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-nav">메뉴</button>
  <dialog class="modal"><p>안내 팝업</p></dialog>
  ```
  `<details>` 는 JS 없이 눌러서 펼쳐져요. `<dialog>` 는 `open` 속성이 없으면 안 보이는 게 정상이에요.
- 예상해 보기: `<dialog class="modal" open>` 처럼 `open` 을 붙이고 저장하면 화면이 어떻게 될까요? — 답: 팝업이 화면에 나타나요(스타일을 입히기 전이라 페이지 맨 아래쪽 등에 보여요). 확인 뒤에는 `open` 을 지워 둬요.
- 공식 문서: [details 요소 (MDN)](https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements/details) · [dialog 요소 (MDN)](https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements/dialog)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| W18-1 기본 구조 | 고른 사이트에서 연습할 **한 페이지**(첫 화면 + 구역 4~6개)를 정하고 `spec.md` 에 세 표를 써요: 구역 목록 · 토큰 표 · 화면 크기별(375·768·1024) 배치 | `spec.md` 에 구역 5~7개가 위에서 아래 순서로 있음 / 토큰 표에 색·간격·모서리·글자 이름과 값이 있고 이름이 `--종류-역할` 규칙 / 화면 크기별 표에 "모바일 세로 → 어디서 가로가 되는지"가 구역마다 한 줄 / 가상 이름·내 글·자리 표시 사진으로 쓴다는 점검 한 줄 |
| W18-2 개념 적용 | 폴더 구조(`index.html`, `css/tokens.css`, `css/style.css`, `images/`)를 만들고, `spec.md` 토큰 표를 `tokens.css` 의 `:root` 변수로 옮기고, `index.html` 의 문서 뼈대와 CSS 연결을 완성해요 | `<link>` 순서가 `tokens.css` → `style.css` / 변수 이름이 `spec.md` 토큰 표와 같음 / `var()` 를 `style.css` 에서 한 곳 이상 써서 화면에서 확인함 / Live Server 로 열었을 때 F12 Console 에 404 없음 |
| W18-3 응용 | `spec.md` 구역 순서대로 페이지 전체를 시맨틱 태그로 마크업해요(모양 입히기는 내일). 메뉴·슬라이드·질문·팝업이 있다면 JS 이름표(`.menu-btn` · `.slider-track` · `.faq-item` · `.modal` 등)를 달아요 | `header` · `nav` · `main` 안 `section`(구역마다 `<h2>`) · `footer` / 이동은 `<a>`, 동작은 `<button type="button">` / 장식 그림 `alt=""`, 내용 그림은 설명 `alt` / W3C 검사기 오류 0개 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- W18-1: `spec.md` 구역 목록이 원본 구역 순서와 같음
- W18-2: `tokens.css` 값이 원본에서 읽은 값(spec.md)과 같음
- W18-3: 구역 순서와 구역 안 요소 순서가 원본과 같음

## 힌트 재료
- 1단계: MDN `<details>`·`<dialog>` 문서(위 링크). 사이트 구조는 W04, 토큰은 W17 복습
- 2단계: 표는 구역마다 "무엇이 들어가는지 · 나중에 움직일 곳 · 모바일/데스크톱 배치" 세 칸으로 써요. 토큰 이름은 같은 값에 같은 이름을 줘요. 마크업은 위에서 아래로 한 구역씩 `section` 으로 감싸고, 제목(`<h2>`)을 먼저 써요.
- 3단계 예시(다른 이름·다른 값):
  ```html
  <section class="section" id="menu" aria-labelledby="menu-title">
    <h2 id="menu-title">오늘의 메뉴</h2>
    <ul class="menu-list">…</ul>
  </section>
  ```

## 자주 막히는 곳
- 스타일이 하나도 안 먹음 → `href="css/style.css"` 경로 오타, 또는 파일이 `css` 폴더 밖에 있음(Console 의 404 확인)
- 버튼 색·여백 하나만 안 나옴 → `var(--…)` 이름 오타(`tokens.css` 와 한 글자씩 비교)
- 팝업 내용이 페이지 맨 아래에 보임 → `<dialog>` 에 `open` 을 붙인 채로 둠(지우기)
