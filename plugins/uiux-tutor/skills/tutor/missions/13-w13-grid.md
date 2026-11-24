# 13. W13. Grid — 미션 예시

## 배우기 재료
- 핵심 개념
  - **grid 는 부모에, 칸 수는 columns 로**: `display: grid` 를 목록(부모)에 주고 `grid-template-columns: repeat(3, 1fr)` 처럼 열을 정해요. `fr` 은 남는 공간을 나눈 한 몫이고, 칸 사이는 `gap`(`gap: 24px 16px` 이면 앞 값이 줄 사이, 뒤 값이 칸 사이)으로 줘요. Figma 의 Layout grid(Columns)와 비슷해요.
  - **칸 수가 저절로 바뀌는 목록**: `repeat(auto-fill, minmax(200px, 1fr))` 은 "최소 200px, 남으면 늘어나는 칸"을 자리가 닿는 만큼 채워서 미디어쿼리 없이 칸 수가 바뀌어요.
  - **영역 지도**: `grid-template-areas` 로 머리글·옆 메뉴·본문·바닥글 지도를 그리고 각 요소에 `grid-area` 이름을 붙여요. 줄 하나면 flex, 바둑판이면 grid 예요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `.gallery` 안에 `<div>` 6개를 넣어요)
  ```css
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 12px;
  }
  .gallery div { height: 80px; background: #cbd5e1; }
  ```
- 예상해 보기: `minmax(120px, 1fr)` 의 `120px` 를 `200px` 로 바꾸면 창 폭 600px 에서 칸이 몇 개 놓일까요(gap 은 12px)? — 답: 2개(200px 칸 3개는 gap 까지 624px 가 필요해요). 120px 일 때는 4개예요.
- 공식 문서: [그리드 레이아웃 기본 개념 (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) · [grid-template-columns (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/grid-template-columns)

| 미션 | 할 일 | 완료 기준 |
|---|---|---|
| W13-1 기본 구조 | 고른 사이트의 카드 목록 구역을 HTML로 만들고(카드 6개 이상, 자리 표시 사진), grid로 3열 바둑판을 만들어요 | `display: grid` 가 **부모**(목록)에 있음 / `grid-template-columns: repeat(3, 1fr)` / 간격은 `gap` (카드 margin 아님) |
| W13-2 개념 적용 | 화면 폭에 따라 칸 수가 바뀌게 해요 — 미디어쿼리 없이 | `repeat(auto-fill, minmax(값, 1fr))` 사용 / 브라우저 폭을 줄이면 칸 수가 줄어듦 / 최소 폭 값을 고른 이유를 말할 수 있음 |
| W13-3 응용 | 페이지 전체를 머리글·본문·옆 정보·바닥글 영역으로 나눠요 | `grid-template-areas` 로 지도를 그림 / 각 요소에 `grid-area` / "이 구역은 flex, 이 구역은 grid"를 이유와 함께 한 줄씩 적음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- W13-1: 1280px에서 한 줄 카드 수·카드 안 요소 순서·제목 줄 구성(제목·더보기)이 원본과 같음
- W13-2: 375·768·1280px에서 칸 수가 원본과 같음
- W13-3: 영역 배치가 원본 구역 지도와 같음

## 힌트 재료
- 1단계: MDN 그리드 레이아웃 기본 — https://developer.mozilla.org/ko/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout
- 2단계: grid는 **부모**에. 칸 수는 `grid-template-columns`, 칸 사이는 `gap`.
- 3단계 예시(다른 이름):
  ```css
  .gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px; }
  ```

## 자주 막히는 곳
- 카드에 grid를 줌 → 목록(부모)에 줘야 해요
- `gap: 24px 16px` 에서 앞이 줄 사이, 뒤가 칸 사이
