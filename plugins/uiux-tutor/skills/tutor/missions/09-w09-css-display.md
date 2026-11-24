# 09. W09. 배경·display·overflow — 미션 예시

## 배우기 재료
- 핵심 개념
  - **배경**: `background-color` 는 사진이 안 뜰 때의 바탕, `background-image: url(…)` 는 사진이에요. `background-size: cover` 는 빈틈없이 덮고(넘치는 곳은 잘림), `contain` 은 전체가 보이게 맞춰요. Figma 이미지 Fill 의 Fill / Fit 과 같아요.
  - **display**: `block` 은 한 줄을 차지하고 `width` 가 먹어요. `inline` 은 글자처럼 흐르고 `width` 가 안 먹어요. `inline-block` 은 나란히 놓이면서 `width` 도 먹어요. `none` 은 자리까지 없애요.
  - **카드 꾸미기 도구**: `border-radius`(모서리), `box-shadow`(그림자: 가로 세로 흐림 색), `overflow: hidden`(밖으로 나간 것 자르기), `object-fit: cover`(사진이 찌그러지지 않고 칸을 덮기).
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `images/a.jpg` 아무 사진을 넣어요)
  ```css
  .card {
    width: 220px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgb(0 0 0 / 8%);
  }
  .card img { display: block; width: 100%; height: 160px; object-fit: cover; }
  .tag { display: inline-block; width: 80px; padding: 4px 8px; }
  ```
- 예상해 보기: `.card` 에서 `overflow: hidden` 줄만 지우면 사진 모서리는 어떻게 보일까요? — 답: 카드는 둥글지만 사진 모서리는 뾰족하게 튀어나와 보여요(사진이 카드 모서리 밖으로 삐져나와요).
- 공식 문서: [background-size (MDN, 영어)](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size) · [display (MDN, 영어)](https://developer.mozilla.org/en-US/docs/Web/CSS/display) · [object-fit (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/object-fit)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| W09-1 기본 구조 | 고른 사이트의 첫 화면 큰 배너 구역에 배경 이미지(자리 표시 사진)를 깔고, 배경색도 함께 정해요 | `background-image: url(…)` 와 `background-color` 둘 다 있음 / `background-size: cover` · `background-position: center` · `no-repeat` / 경로가 CSS 파일 기준으로 맞아 사진이 보임 |
| W09-2 개념 적용 | 고른 사이트의 목록 카드를 둥근 사진 카드로 꾸며요: 모서리, 그림자, 사진 꽉 채우기, 카테고리 칩(알약) | 카드에 `border-radius` · `overflow: hidden` · `box-shadow` / `<img>` 에 `display: block` · `height` · `object-fit: cover` / 칩은 `display: inline-block` 으로 `padding` 이 먹음 |
| W09-3 응용 | 카드를 `inline-block` 으로 나란히 놓아 보고(`vertical-align: top`), 안내 문구 하나를 `display: none` 으로 숨겨요. `visibility: hidden` 과 어떻게 다른지 말해요 | 카드 4개가 한 줄에 나란히(창 폭에 따라 줄바꿈) 놓임 / 높이가 달라도 윗선이 맞음 / 숨긴 요소가 자리도 차지하지 않음(`display: none`) / `none` 과 `visibility: hidden` 의 차이를 한 문장으로 말함 |

## 힌트 재료
- 1단계: MDN `background-size` · `display` · `object-fit` 문서(위 링크)
- 2단계: 배경 이미지를 올린 상자에는 높이가 있어야 사진이 보여요. 카드 모서리를 둥글게 하면 카드에 `overflow: hidden` 도 함께 줘요. 사진의 찌그러짐은 칸 크기를 정한 뒤 `object-fit` 으로 풀어요.
- 3단계 예시(다른 이름·다른 값):
  ```css
  .poster { height: 240px; background: #dbeafe url("images/poster.jpg") center / cover no-repeat; }
  .thumb { display: block; width: 100%; height: 120px; object-fit: cover; }
  ```

## 자주 막히는 곳
- 배경 그림이 안 보임 → `url()` 경로 오타(CSS 파일 기준), 또는 상자에 높이가 없음
- `<span>`·`<a>` 에 `width` 가 안 먹음 → inline 요소라서(`display: inline-block` 으로 바꾸기)
- 사진이 찌그러짐 → 너비·높이를 둘 다 정했는데 `object-fit` 이 없음
