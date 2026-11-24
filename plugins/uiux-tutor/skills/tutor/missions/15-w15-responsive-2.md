# 15. W15. 반응형 ② 유연한 이미지·단위·clamp·컨테이너 쿼리 맛보기 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **유연한 이미지**: 사진이 부모보다 넓어지지 않게 `img { display: block; max-width: 100%; height: auto; }` 세 줄을 써요. 칸 모양을 통일하려면 `aspect-ratio: 16 / 9`(슬래시) 와 `object-fit: cover` 를 **함께** 써요. Figma 의 Fill(cover) / Fit(contain)과 짝이에요.
  - **부드럽게 커지는 글자**: `clamp(최소, 보통, 최대)` 는 중간 값이 최소~최대 사이에서만 움직여요. 예: `clamp(1.5rem, 6vw, 3rem)`. `vw` 는 화면 폭의 1% 예요.
  - **화면마다 다른 사진**: `<picture>` 안에 `<source media="(width >= 768px)" srcset="…">` 를 먼저 쓰고, 맨 끝에 `<img>` 를 꼭 둬요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `images/wide.jpg` 아무 사진을 넣어요)
  ```css
  img { display: block; max-width: 100%; height: auto; }
  .thumb { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; }
  .headline { font-size: clamp(1.5rem, 6vw, 3rem); }
  ```
- 예상해 보기: `.headline` 의 `clamp(1.5rem, 6vw, 3rem)` 에서 화면 폭이 400px 일 때 글자 크기는 몇 px 일까요(1rem = 16px)? — 답: 24px. 6vw 는 24px 이고 최소 1.5rem(24px)과 같아서 24px 예요. 폭이 1000px 이면 6vw 는 60px 이지만 최대 3rem(48px)에서 멈춰요.
- 공식 문서: [aspect-ratio (MDN, 영어)](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio) · [clamp() (MDN, 영어)](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) · [picture 요소 (MDN, 영어)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| W15-1 기본 구조 | 고른 사이트의 목록 카드 사진들이 부모보다 넓어지지 않게 하고, 사진 칸을 모두 같은 비율로 통일해요 | `img` 규칙에 `display: block` · `max-width: 100%` · `height: auto` / 사진 칸에 `aspect-ratio`(슬래시 모양) 와 `object-fit: cover` 가 함께 있음 / 375px 에서 가로 스크롤 없음 |
| W15-2 개념 적용 | 고른 사이트의 큰 제목에 `clamp()` 를 쓰고, 본문 글자를 px 에서 rem 으로 바꿔요(px ÷ 16 계산을 주석에 적어요) | `clamp()` 에 값이 세 개 / 375px 와 1280px 에서 제목 크기가 다름(Computed 의 `font-size` 로 확인) / 본문 글자 크기가 rem |
| W15-3 응용 | 고른 사이트의 배너 사진을 좁은 화면에서는 가로 사진, 768px 이상에서는 다른 사진을 보여 줘요(`<picture>`). 배너 위에 내 글을 얹어요 | `<picture>` 안에 `<source media="(width >= 768px)" srcset>` 와 마지막 `<img alt>` / 폭을 바꾸면 사진이 바뀜 / 사진 높이에 `max-height` 등 한계가 있음 |

## 힌트 재료
- 1단계: MDN `aspect-ratio` · `clamp()` · `<picture>` 문서(위 링크)
- 2단계: `aspect-ratio` 는 너비와 높이 중 하나는 `auto` 여야 먹어요. 찌그러짐은 `object-fit: cover` 로 풀어요. `<source>` 는 `src` 가 아니라 `srcset` 을 쓰고, 조건은 `media="(width >= 768px)"` 예요.
- 3단계 예시(다른 이름·다른 값):
  ```html
  <picture>
    <source media="(width >= 768px)" srcset="images/wide.jpg">
    <img src="images/narrow.jpg" alt="바닷가 풍경" width="600" height="400">
  </picture>
  ```
  ```css
  .shot { aspect-ratio: 4 / 3; object-fit: cover; }
  ```

## 자주 막히는 곳
- 휴대폰 폭에서 사진 때문에 가로 스크롤 → `max-width: 100%` 가 없음
- 사진이 찌그러짐 → `aspect-ratio` 만 주고 `object-fit` 을 안 줌, 또는 `height: auto` 가 없음
- `aspect-ratio: 16:9` 가 안 먹음 → 콜론이 아니라 슬래시(`16 / 9`)
