# 14. W14. 반응형 ① 미디어쿼리·모바일 우선 — 미션 예시

| 미션 | 할 일 | 완료 기준 |
|---|---|---|
| W14-1 기본 구조 | 휴대폰 폭(375px)에서 고른 사이트의 첫 화면 구역들이 한 줄로 쌓이게 만들어요 | `<head>` 에 viewport 메타 태그 / 미디어쿼리 밖(기본) 스타일이 **좁은 화면용** / 375px에서 가로 스크롤 없음 |
| W14-2 개념 적용 | 카드 목록을 1열 → 640px 2열 → 1024px 3열로 바꿔요 | `@media (width >= 640px)` · `@media (width >= 1024px)` 두 개, **작은 폭부터** 순서 / 세 폭에서 열 수가 맞음 |
| W14-3 응용 | 768px 이상에서 머리글 메뉴를 한 줄로 펼쳐요 | `@media (width >= 768px)` 안에서 메뉴 배치를 바꿈 / DevTools 기기 모드로 375·768·1024 세 폭을 확인했다고 말할 수 있음 |

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
