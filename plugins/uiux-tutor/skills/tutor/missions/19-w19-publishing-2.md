# 19. W19. 퍼블리싱 실습 ② 배치와 반응형 — 미션 예시

> 퍼블리싱 실습 3일 중 둘째 날: W18 에서 마크업한 내 페이지에 배치와 반응형을 입혀요. 비슷한 구역 CSS 는 앞에서 만든 것을 가져와 **다른 곳만 고쳐요**.

## 배우기 재료
- 핵심 개념
  - **구역마다 flex 와 grid 고르기**: 한 줄 정렬(머리글·버튼 줄)은 flex, 같은 크기 칸의 바둑판(카드 목록)은 grid 예요. 와이어프레임 구역마다 "flex? grid?"를 먼저 적고 시작해요.
  - **모바일 먼저, 넓은 화면은 덮어쓰기**: 기본 CSS 는 375px 기준으로 쓰고 `@media (width >= 640px)` · `(width >= 768px)` · `(width >= 1024px)` 안에서 **바뀌는 것만** 써요. DevTools 기기 모드로 폭을 바꿔 확인해요.
  - **창문과 기차(슬라이드 틀)와 상태 클래스**: 슬라이드는 창문(`overflow: hidden`) 안에 기차(`display: flex` 한 줄)를 두고 한 장 폭을 창문의 100% 로 해서 첫 장만 보이게 해요. 나중에 JS 가 붙일 `is-open` 같은 **상태 클래스의 모양**도 미리 만들어 둬요(Figma 버튼의 Variant 를 미리 그려 두는 것과 같아요).
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `.viewport` 안에 `.track`, 그 안에 `.slide` 3개)
  ```css
  .viewport { overflow: hidden; }
  .track { display: flex; }
  .slide { flex: 0 0 100%; height: 100px; background: #cbd5e1; }
  .nav { display: none; }
  .nav.is-open { display: block; }
  ```
  `.nav` 에 `is-open` 클래스를 붙였다 떼 보면서 모양이 바뀌는 걸 확인해요.
- 예상해 보기: `.viewport` 의 `overflow: hidden` 을 지우면 화면은 어떻게 될까요? — 답: 2·3번째 슬라이드가 창문 밖(오른쪽)으로 삐져나와 보이고 페이지에 가로 스크롤이 생겨요.
- 공식 문서: [overflow (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/overflow) · [미디어 쿼리 사용하기 (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_media_queries/Using_media_queries)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| W19-1 기본 구조 | 375px 기준(모바일)으로 내 페이지 배치를 완성해요: 머리글(flex·sticky), 메뉴는 접어 두기, 카드 목록 1열 grid, 슬라이드 창문과 기차 | 375px 에서 가로 스크롤 없음 / 머리글에 `position: sticky` 와 `top: 0` / 카드 목록 부모에 `display: grid` 와 `gap` / 슬라이드 창문에 `overflow: hidden`, 기차에 `display: flex` 이고 첫 장만 보임 |
| W19-2 개념 적용 | 내 `spec.md` 화면 크기별 표대로 넓은 화면을 덮어써요: 640px 이상 카드 2열, 768px 이상 구역 가로 배치, 1024px 이상 메뉴 펼치기·카드 열 늘리기 | 기본(미디어쿼리 밖) CSS 가 모바일용 / 미디어쿼리가 `@media (width >= …)` 모양이고 작은 폭부터 순서 / 640·768·1024px 에서 `spec.md` 표대로 바뀜 / 큰 화면에서 내용 최대 폭(`max-width`)이 있어 너무 퍼지지 않음 |
| W19-3 응용 | 메뉴 열린 모양(`.is-open`)을 CSS 로 미리 만들어 HTML 에 붙여 확인한 뒤 지우고, 375·768·1280px 세 폭에서 가로 스크롤이 없는지 확인해요 | `.is-open`(또는 `[open]`) 상태 규칙이 CSS 에 있음 / 확인 뒤 HTML 에서 `is-open`·`open` 이 지워짐 / DevTools 기기 모드로 375·768·1280px 세 폭을 확인했다고 말하고 차이를 한 줄씩 적음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- W19-1: 375px 화면의 구역 순서·배치가 원본 모바일 화면과 같음
- W19-2: 768·1280px 배치가 원본과 같음
- W19-3: 메뉴 열린 모양(위치·항목 순서)이 원본과 같음

## 힌트 재료
- 1단계: MDN `overflow`·미디어 쿼리 문서(위 링크). 배치 복습은 W10~W14
- 2단계: 모바일 CSS 를 먼저 끝까지 쓰고 나서 `@media` 를 써요. 미디어쿼리 안에는 **바뀌는 것만** 써요. 가로 스크롤이 생기면 F12 에서 요소에 마우스를 올려 화면 밖으로 나간 상자를 찾아요.
- 3단계 예시(다른 이름·다른 값):
  ```css
  .deck { display: grid; gap: 16px; }
  @media (width >= 640px) { .deck { grid-template-columns: repeat(2, 1fr); } }
  @media (width >= 1024px) { .deck { grid-template-columns: repeat(4, 1fr); } }
  ```

## 자주 막히는 곳
- 모바일에서 페이지가 옆으로 밀림 → 폭이 고정된 요소(`width: 800px`), 또는 슬라이드 창문의 `overflow: hidden` 이 없음
- 미디어쿼리가 전혀 안 먹음 → viewport 메타 태그가 없거나 `@media (width => 768px)` 처럼 기호 순서 오타(`>=` 가 맞아요)
- 모바일에서 메뉴가 처음부터 펼쳐져 있음 → 확인용으로 붙인 `is-open` 을 HTML 에서 안 지움
