# 27. F06. 반응형 프레임·앱 UI·디자인 시스템 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **브레이크포인트와 대표 프레임**: Figma 프레임은 너비가 하나뿐이라 각 구간의 대표 너비로 그려요. 640 미만은 1열(대표 375), 640 이상은 2열, 768 이상은 헤더 한 줄(대표 768), 1024 이상은 3열(대표 1280)이에요 — W14 에서 `@media (width >= 640px)` 로 쓴 숫자 그대로예요.
  - **Fill container 와 Grid**: 카드는 고정 너비(Fixed)가 아니라 칸을 채우게(Fill container) 해야 폭이 변해도 맞아요. Auto Layout 의 방향 중 Grid 는 열 수만 정하면 카드가 칸에 들어가요(CSS Grid 와 같은 생각).
  - **손가락 크기**: 누르는 것의 권장 크기는 iOS 44 × 44 pt, Android 48 × 48 dp 이상이에요. 375 너비 모바일 프레임에서 Figma 1 = 1pt = 1dp 로 생각하고 버튼 높이를 `min height 44` 로 보정해요.
- 작은 따라 하기 (사이트와 상관없이 직접 눌러요)
  ```text
  1. 프레임 W 375, H 500 → 이름 grid-mobile → Shift + A
  2. 회색 사각형(W 100, H 60) 6개를 만들어 모두 선택 → Shift + A → 이름 cells
  3. cells 의 방향을 Grid 로 → 열 1개, Gap 8 → 사각형 W 를 Fill container 로
  4. grid-mobile 을 Ctrl + D → 이름 grid-wide, W 1000 → cells 열을 3개로
  ```
- 예상해 보기: 4번에서 사각형 하나의 W 를 Fixed 400 으로 바꾸면 grid-mobile 에서는 어떻게 보일까요? — 답: 칸(343)보다 넓어서 오른쪽이 프레임 밖으로 잘려요. 고정 너비가 반응형에서 피해야 하는 이유예요.
- 공식 문서: [Guide to auto layout (Figma)](https://help.figma.com/hc/en-us/articles/360040451373-Guide-to-auto-layout) · [미디어 쿼리 사용하기 (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_media_queries/Using_media_queries)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| F06-1 기본 구조 | `Screens` 페이지에 고른 사이트의 [목록] 화면을 `list-mobile`(375) · `list-tablet`(768) · `list-desktop`(1280) 세 프레임으로 만들어요 | 프레임 이름·폭이 위와 같음 / 카드 열 수가 1 · 2 · 3 / 카드 인스턴스(6개 이상)가 모두 W Fill container / 구역 순서(머리글 → 필터 → 목록)가 세 프레임에서 같음 |
| F06-2 개념 적용 | 위 규칙을 문서로 적고, 규칙에 없는 너비 700 의 프레임 `list-700` 을 규칙만 보고 만들어요 | 규칙 표에 640·768·1024 가 모두 있음 / `list-700` 이 2열이고 머리글은 세로(768 미만) / "700 은 640 이상 768 미만이라 …"로 이유를 한 줄 적음 / `list-700` 의 카드도 Fill container |
| F06-3 응용 | 모바일 프레임의 버튼 높이를 읽어 44 와 비교해 고치고, `Design System` 페이지에 섹션 5개를 정리해요 | 버튼 H 의 처음 값과 고친 값(44 이상)이 적혀 있음 / `ds-colors`·`ds-typography`·`ds-spacing`·`ds-components`·`ds-rules` 프레임이 있음 / `ds-rules` 에 브레이크포인트 표·터치 44 규칙·"카드 너비는 Fill container" 3줄 / 버튼을 메인 컴포넌트에서 고쳐 목록의 모든 카드가 같이 바뀜 |

제출: Figma 파일 링크(보기 권한) 또는 세 프레임을 나란히 둔 캡처와 `Design System` 페이지 캡처.

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- F06-1: 세 프레임의 열 수·구역 순서가 원본 세 폭 화면과 같음
- F06-2: 해당 없음 (규칙 문서)
- F06-3: 해당 없음 (버튼 높이 점검)

## 힌트 재료
- 1단계: Figma 도움말 "Guide to auto layout" 의 Grid 방향·Min/Max 크기 — https://help.figma.com/hc/en-us/articles/360040451373-Guide-to-auto-layout , 브레이크포인트는 MDN "미디어 쿼리 사용하기" — https://developer.mozilla.org/ko/docs/Web/CSS/CSS_media_queries/Using_media_queries
- 2단계: 모바일(375)을 먼저 만들고 `Ctrl + D` 로 복제해 폭과 열 수만 바꿔요. 카드는 모두 선택해 W 를 Fill container 로. 버튼은 인스턴스가 아니라 **메인 컴포넌트**에서 Add min height 44 를 줘요. 숫자를 직접 읽을 때는 오른쪽 사이드바의 H 칸을 봐요.
- 3단계 예시(다른 이름·다른 값):
  ```text
  규칙: 640 미만 1열 · 640 이상 2열 · 1024 이상 3열
  gallery-mobile  W 375  · 열 1 · 카드 W Fill container
  gallery-wide    W 1280 · 열 3 · 카드 W Fill container
  ```

## 자주 막히는 곳
- 프레임이 내용 따라 줄거나 늘어남 → `Shift + A` 뒤에 W·H 가 Hug 로 바뀐 거예요. 둘 다 Fixed 로 돌려요
- 카드가 겹치거나 납작함 → Grid 의 행 높이를 Hug(내용만큼)로 바꿔요
- 같은 줄의 검색창이 너무 좁음 → 옆 요소도 Fill 이라 남는 공간을 반씩 나눠 가져요. 옆 요소를 Hug 로 바꿔요
