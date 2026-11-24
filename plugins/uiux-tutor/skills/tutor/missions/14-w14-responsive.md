# 14. W14. 반응형 ① 미디어쿼리·모바일 우선 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **viewport 메타 태그**: `<meta name="viewport" content="width=device-width, initial-scale=1.0">` 가 없으면 휴대폰이 페이지를 데스크톱 폭(약 980px)으로 그려서 작게 줄여 보여요. 그러면 미디어쿼리도 기대대로 안 먹어요.
  - **모바일 우선**: 좁은 화면 스타일을 기본으로 쓰고, 넓어질 때 `@media (width >= 640px) { 선택자 { … } }` 로 **더해요**. 괄호는 두 겹이에요. 작은 폭부터 큰 폭 순서로 써야 큰 폭 규칙이 위에서 덮어써요.
  - **브레이크포인트**: 이 과정은 640 · 768 · 1024 를 써요(나중 Tailwind 의 `sm` · `md` · `lg` 와 같아요). Figma 의 모바일·태블릿·데스크톱 프레임 폭과 짝이에요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `<head>` 에 viewport 메타 태그를 넣고 `.tiles` 안에 `<div>` 4개를 넣어요)
  ```css
  .tiles { display: grid; gap: 8px; }
  .tiles div { height: 60px; background: #cbd5e1; }
  @media (width >= 640px)  { .tiles { grid-template-columns: repeat(2, 1fr); } }
  @media (width >= 1024px) { .tiles { grid-template-columns: repeat(4, 1fr); } }
  ```
  F12 → 기기 모드(Toggle device toolbar)에서 폭을 375 · 800 · 1100 으로 바꿔 봐요.
- 예상해 보기: 위 두 `@media` 의 순서를 바꿔 1024px 규칙을 먼저 쓰면 폭 1100px 에서 몇 열일까요? — 답: 2열. 두 규칙 다 맞는데 아래(나중)의 640px 규칙이 덮어써서 4열이 안 돼요. 그래서 작은 폭부터 써요.
- 공식 문서: [미디어 쿼리 사용하기 (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_media_queries/Using_media_queries) · [viewport 메타 태그 (MDN)](https://developer.mozilla.org/ko/docs/Web/HTML/Guides/Viewport_meta_element)

| 미션 | 할 일 | 완료 기준 |
|---|---|---|
| W14-1 기본 구조 | 휴대폰 폭(375px)에서 고른 사이트의 첫 화면 구역들이 한 줄로 쌓이게 만들어요 | `<head>` 에 viewport 메타 태그 / 미디어쿼리 밖(기본) 스타일이 **좁은 화면용** / 375px에서 가로 스크롤 없음 |
| W14-2 개념 적용 | 카드 목록을 1열 → 640px 2열 → 1024px 3열로 바꿔요 | `@media (width >= 640px)` · `@media (width >= 1024px)` 두 개, **작은 폭부터** 순서 / 세 폭에서 열 수가 맞음 |
| W14-3 응용 | 768px 이상에서 머리글 메뉴를 한 줄로 펼쳐요 | `@media (width >= 768px)` 안에서 메뉴 배치를 바꿈 / DevTools 기기 모드로 375·768·1024 세 폭을 확인했다고 말할 수 있음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- W14-1: 375px에서 구역이 쌓이는 순서가 원본 모바일 화면과 같음
- W14-2: 세 폭에서 열 수가 원본과 같음 (원본 폭 기준이 다르면 원본 값으로 바꿔도 됨)
- W14-3: 메뉴가 펼쳐지는 폭과 항목 수가 원본과 같음

## 힌트 재료
- 1단계: MDN 미디어 쿼리 — https://developer.mozilla.org/ko/docs/Web/CSS/CSS_media_queries/Using_media_queries
- 2단계: 모바일 우선 = 좁은 화면을 기본으로 쓰고, 넓어질 때 **더하기**.
- 3단계 예시(다른 이름):
  ```css
  .tiles { display: grid; gap: 8px; }
  @media (width >= 640px) { .tiles { grid-template-columns: 1fr 1fr; } }
  ```

## 자주 막히는 곳
- 미디어쿼리 괄호를 한 겹만 씀 → `@media (width >= 640px) { 선택자 { … } }` 두 겹
- 큰 폭 규칙을 먼저 써서 작은 폭 규칙이 덮어씀 → 작은 폭부터
