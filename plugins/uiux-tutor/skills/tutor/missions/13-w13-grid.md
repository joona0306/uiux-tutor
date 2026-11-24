# 13. W13. Grid — 미션 예시

| 미션 | 할 일 | 완료 기준 |
|---|---|---|
| W13-1 기본 구조 | 고른 사이트의 카드 목록 구역을 HTML로 만들고(카드 6개 이상, 자리 표시 사진), grid로 3열 바둑판을 만들어요 | `display: grid` 가 **부모**(목록)에 있음 / `grid-template-columns: repeat(3, 1fr)` / 간격은 `gap` (카드 margin 아님) |
| W13-2 개념 적용 | 화면 폭에 따라 칸 수가 바뀌게 해요 — 미디어쿼리 없이 | `repeat(auto-fill, minmax(값, 1fr))` 사용 / 브라우저 폭을 줄이면 칸 수가 줄어듦 / 최소 폭 값을 고른 이유를 말할 수 있음 |
| W13-3 응용 | 페이지 전체를 머리글·본문·옆 정보·바닥글 영역으로 나눠요 | `grid-template-areas` 로 지도를 그림 / 각 요소에 `grid-area` / "이 구역은 flex, 이 구역은 grid"를 이유와 함께 한 줄씩 적음 |

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
