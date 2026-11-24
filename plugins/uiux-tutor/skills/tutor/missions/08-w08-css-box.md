# 08. W08. 박스 모델 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **상자의 네 겹**: 안쪽부터 content(내용) → padding(안쪽 여백) → border(테두리) → margin(바깥 여백). padding 에는 배경색이 칠해지고 margin 에는 안 칠해져요. Figma 에서 Auto Layout 의 Padding 은 padding, 프레임 사이 거리는 margin 이에요.
  - **box-sizing: border-box**: 기본은 `width` 가 content 폭이라 padding·border 가 밖에 더해져요. 모든 요소에 `border-box` 를 걸면 `width` 가 테두리까지 포함한 폭이 돼서 계산이 쉬워요. 값이 1·2·3·4개일 때는 **위에서 시계 방향**(위 → 오른쪽 → 아래 → 왼쪽)으로 읽어요.
  - **가운데 두기**: `max-width` 로 최대 폭을 정하고 `margin: 0 auto` 를 주면 영역이 화면 가운데에 와요(`max-width` 는 좁은 화면에서 가로 스크롤이 안 생겨요).
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요)
  ```css
  *, *::before, *::after { box-sizing: border-box; }
  .card {
    max-width: 260px;
    margin: 24px auto;
    padding: 16px;
    border: 1px solid #e5e7eb;
    background: #fff;
  }
  ```
  `<div class="card">내용</div>` 에 쳐 보고 F12 → Elements 에서 `.card` 를 고른 뒤 오른쪽 Computed 탭의 박스 그림을 봐요.
- 예상해 보기: `box-sizing: border-box` 줄을 지우면 `.card` 의 실제 폭(테두리 포함)은 몇 px 로 바뀔까요(화면이 충분히 넓다고 해요)? — 답: 294px. 260 + padding 16×2 + border 1×2 = 294px 예요.
- 공식 문서: [박스 모델 (MDN)](https://developer.mozilla.org/ko/docs/Learn_web_development/Core/Styling_basics/Box_model) · [box-sizing (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/box-sizing)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| W08-1 기본 구조 | 파일 맨 위에 모든 요소 `border-box` 를 걸고, 고른 사이트의 카드 하나(목록 구역)를 폭 260px, 테두리·안쪽 여백이 있는 상자로 만들어요 | `*, *::before, *::after { box-sizing: border-box; }` 가 있음 / 카드에 `border` 가 `굵기 모양 색` 세 가지를 다 씀 / DevTools 박스 그림에서 카드 폭이 정확히 260px |
| W08-2 개념 적용 | 카드 안 구역(사진·정보)과 카테고리 칩에 padding 과 margin 을 값 1·2·4개 축약형으로 나누어 쓰고, 목록(`ul`)의 기본 여백과 점을 없애요 | 축약형을 1개·2개·4개 값으로 각각 한 번 이상 씀 / `ul` 에 `margin: 0; padding: 0; list-style: none` / 기본 margin 이 남은 곳을 DevTools 박스 그림으로 찾아 고침 |
| W08-3 응용 | 고른 사이트의 본문 영역을 최대 폭 값을 정해 화면 가운데에 두고, 창을 360px 보다 좁게 줄여도 가로 스크롤이 안 생기게 해요 | `max-width` 와 `margin: 0 auto` 를 함께 씀(`width` 로 고정하지 않음) / 창을 줄여도 가로 스크롤 없음 / 박스 그림에서 padding 과 margin 값을 읽어 말할 수 있음 |

## 힌트 재료
- 1단계: MDN 박스 모델·`box-sizing` 문서(위 링크)
- 2단계: 값이 여러 개일 때는 "위에서 시작해 시계 방향"으로 읽어요. 테두리는 굵기·모양·색 세 가지가 있어야 보여요. 가운데 두기는 폭(`max-width`)을 먼저 정한 뒤 좌우 `auto` 를 줘요.
- 3단계 예시(다른 이름·다른 값):
  ```css
  .notice { max-width: 360px; margin: 24px auto; padding: 8px 16px; border: 2px dashed #2563eb; }
  .notice-title { margin: 0 0 8px; }
  ```

## 자주 막히는 곳
- 테두리가 안 보임 → `border` 에 모양(`solid` 등)을 빠뜨림(기본 모양이 `none`)
- 카드가 생각보다 몇 px 큼 → `box-sizing: border-box` 가 없어서 padding·border 가 `width` 밖에 더해짐
- `margin: 0 auto` 인데 가운데로 안 감 → 너비(`max-width`)를 정하지 않아 이미 꽉 찬 상자
