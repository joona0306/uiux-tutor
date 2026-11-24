# 21. W21. 웹 기초 점검 — 미션 예시

> 점검 회차: 힌트는 1단계까지만

## 배우기 재료
- 핵심 개념 (W01~W20 종합 복습)
  - **HTML 은 뜻, CSS 는 모양**: 시맨틱 태그·제목 단계·`alt`·`label` 은 뜻을 더하고, 선택자 우선순위(아이디 > 클래스 > 태그, 같으면 나중 것)와 박스 모델·display 는 모양을 정해요.
  - **배치 고르기**: 한 줄 정렬은 flex(`gap`, `justify-content` 주축, `align-items` 교차축, `flex: 1`), 바둑판은 grid(`repeat`·`fr`·`gap`), 구석에 얹기는 `relative` 부모 + `absolute`, 화면 폭에 따른 변화는 모바일 우선 `@media (width >= …)` 예요.
  - **다듬기**: `clamp()`·`aspect-ratio`·`object-fit`, 평소 규칙의 `transition` 과 `prefers-reduced-motion`, 토큰(`var()`), DevTools 기기 모드·Lighthouse 로 점검(100점 ≠ 완벽한 접근성).
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요 — 한꺼번에 섞어 보기)
  ```css
  *, *::before, *::after { box-sizing: border-box; }
  :root { --gap: 12px; }
  .list { display: grid; gap: var(--gap); }
  .item { display: flex; flex-direction: column; padding: 16px; border: 1px solid #e5e7eb; }
  .item .btn { margin-top: auto; }
  @media (width >= 768px) { .list { grid-template-columns: repeat(3, 1fr); } }
  ```
  `.list` 안에 `.item` 3개(글 길이가 서로 다르게)를 넣어 보고 `.btn` 이 카드 맨 아래에 모이는지 봐요.
- 예상해 보기: 위에서 `.item` 의 `flex-direction: column` 줄을 지우면 카드 안 내용은 어떻게 놓일까요? — 답: 세로로 쌓이지 않고 가로 한 줄로 나란히 놓여서 카드 모양이 깨져요(`margin-top: auto` 로 버튼을 맨 아래로 보내는 것도 세로 쌓기일 때 기대한 대로 돼요).
- 공식 문서: [Flexbox (MDN)](https://developer.mozilla.org/ko/docs/Learn_web_development/Core/CSS_layout/Flexbox)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| W21-1 종합 문제 ① 예상 | 코드를 **치지 않고** 손(종이)으로 결과를 예상해 답만 제출해요.<br>1) `.a { width: 300px; padding: 10px; border: 2px solid; }` — 기본일 때와 `box-sizing: border-box` 일 때 화면 폭은?<br>2) `.row { display: flex; gap: 20px; width: 500px; }` 안에 `flex: 1` 아이템 3개 — 한 아이템의 폭은?<br>3) `.g { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; width: 410px; }` 칸 5개 — 한 칸의 폭과 5번째 칸 위치는?<br>4) 기본 1열, `@media (width >= 768px)` 에서 3열 — 폭 700px 와 800px 의 열 수는?<br>5) `.card p { color: red; }` · `p.note { color: blue; }` · `#x p { color: green; }`, HTML 이 `<div id="x" class="card"><p class="note">` — 글자색은?<br>6) `font-size: clamp(20px, 4vw, 40px)` — 화면 폭 400px 와 700px 의 글자 크기는? | 6문제 모두 답을 적음 / 답마다 한 줄 이유(계산식이나 규칙 이름)가 있음 / 직접 쳐서 확인한 것과 못 한 것을 구분해 적음 |
| W21-2 종합 문제 ② 말로 답하기·자기 점검 | 말로 답해요: 7) 고른 사이트의 "예약하기" 같은 동작은 `<a>` 와 `<button>` 중 무엇으로 만들까요? 8) 분위기만 주는 장식 사진의 `alt` 는? 9) `transition` 은 평소 규칙과 `:hover` 중 어디에 쓸까요? 그리고 자기 점검표(HTML 뼈대·시맨틱·alt·label·우선순위·박스·flex·grid·absolute·미디어쿼리·clamp·transition·변수·DevTools)를 "예/아직"으로 표시해요 | 7~9번에 이유가 있는 답 / 점검표 14항목에 모두 예/아직 표시 / "아직" 항목마다 다시 볼 회차(W번호)와 보충 계획 한 줄 |
| W21-3 종합 문제 ③ 작은 실습 | 고른 사이트의 카드 3개 구역(예: 이번 달 추천 3가지)을 새 폴더 `w21-practice` 에 만들어요: 시맨틱 마크업, 모바일 1열 grid, 카드 안 세로 flex 와 맨 아래 알약 버튼, 768px 이상 3열, hover 떠오르기·포커스 표시·움직임 줄이기 | `main > section > h1 + ul > li > article` 구조 / 375px 에서 1열·가로 스크롤 없음, 768px 이상 3열 / 세 카드의 버튼이 같은 높이(카드 맨 아래)에 있음 / Tab 으로 버튼에 가면 포커스 표시, `prefers-reduced-motion` 블록이 있음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- W21-1: 해당 없음 (손으로 예상)
- W21-2: 해당 없음 (말로 답하기)
- W21-3: 1280px 한 줄 카드 수와 카드 안 요소 순서가 원본과 같음

## 힌트 재료
- 1단계(점검 회차는 여기까지만): MDN 문서 — [박스 모델](https://developer.mozilla.org/ko/docs/Learn_web_development/Core/Styling_basics/Box_model) · [명시도](https://developer.mozilla.org/ko/docs/Web/CSS/Specificity) · [CSS 그리드 기본 개념](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- 정답 확인용(튜터용 — **미션을 제출한 뒤에만** 보여 줘요): 1) 기본 324px, border-box 300px 2) 153.33px((500−40)÷3) 3) 200px((410−10)÷2), 5번째는 3번째 줄 첫 칸 4) 700px 1열, 800px 3열 5) green(아이디 `#x p` 가 가장 셈) 6) 400px 은 20px(4vw 가 16px 이라 최소값), 700px 은 28px 7) `<button type="button">`(이동이 아니라 동작) 8) `alt=""` 9) 평소 규칙

## 자주 막히는 곳
- 계산 문제에서 `box-sizing` 을 빠뜨림 → 기본은 padding·border 가 `width` 밖에 더해짐(W08)
- 카드 버튼 높이가 제각각 → 카드(부모)에 `display: flex; flex-direction: column` 이 없거나 버튼에 `margin-top: auto` 가 없음(W10~W11)
- 틀린 문제마다 다시 볼 곳을 적지 않음 → 우선순위는 W06, 박스는 W08, flex 는 W10·W11, grid 는 W13, 미디어쿼리는 W14, clamp 는 W15
