# 17. W17. CSS 변수와 코드 정리 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **CSS 변수**: `:root { --color-primary: #2563eb; }` 로 만들고 `color: var(--color-primary);` 로 꺼내 써요. 값 하나를 바꾸면 쓴 곳이 모두 바뀌어요. 없는 변수는 `var(--size, 12px)` 처럼 쉼표 뒤 **대체값**이 쓰여요. Figma Variables 와 같은 개념이에요.
  - **토큰 이름 규칙**: `종류-역할` 로 지어요(`color/primary` → `--color-primary`, `space/md` → `--spacing-md`, `radius/lg` → `--radius-lg`). 디자인 값은 `tokens.css` 한 파일에 모아요.
  - **파일 나누기와 대비**: CSS 를 토큰 → 기본 → 컴포넌트 → 유틸리티 순서로 나눠 `<link>` 도 같은 순서로 연결해요. `.visually-hidden` 은 화면에서만 숨기고 스크린 리더는 읽어요(`display: none` 은 둘 다 숨겨요). 글자 대비는 일반 글자 4.5:1 이상이에요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `tokens.css` 를 만들고 `index.html` 에 style.css 보다 **먼저** 연결해요)
  ```css
  /* tokens.css */
  :root {
    --color-primary: #2563eb;
    --color-text: #111827;
    --spacing-md: 16px;
    --radius-lg: 16px;
  }
  /* style.css */
  .card { padding: var(--spacing-md); border-radius: var(--radius-lg); color: var(--color-text); }
  .card-btn { background: var(--color-primary); }
  ```
- 예상해 보기: `tokens.css` 의 `--color-primary` 를 `#16a34a` 로 바꾸면 무엇이 달라질까요? — 답: `var(--color-primary)` 를 쓴 모든 곳(여기서는 `.card-btn`)이 한 번에 초록으로 바뀌어요.
- 공식 문서: [CSS 사용자 지정 속성 사용하기 (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties) · [var() (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/var)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| W17-1 기본 구조 | 고른 사이트의 색·간격·모서리를 보고 내 토큰 표를 만들어 `tokens.css` 의 `:root` 에 변수로 써요(색 6개 이상, 간격 4개, 모서리 3개) | `tokens.css` 가 있고 `<head>` 에서 `style.css` 보다 먼저 연결됨 / 변수 이름이 `--종류-역할` 규칙(예: `--color-primary`) / 변수가 13개 이상 |
| W17-2 개념 적용 | 고른 사이트의 카드·버튼·칩 규칙의 색·여백·모서리 숫자를 모두 `var()` 로 바꿔요. 새 값이 필요하면 토큰을 먼저 만들어요 | `style.css` 의 색·여백·모서리 값에 직접 쓴 hex·px 가 없음(0·1px 테두리 제외) / `var(--이름, 대체값)` 을 한 곳 이상 써 보고 대체값이 언제 쓰이는지 말함 / DevTools Computed 에서 변수 값이 풀려 보임 |
| W17-3 응용 | CSS 를 `tokens.css` → `base.css` → `components.css` → `utilities.css` 로 나누고, 설명 글자의 대비를 DevTools 로 재서 4.5:1 미만이면 토큰 값을 바꿔요 | `<link>` 순서가 토큰 → 기본 → 컴포넌트 → 유틸리티 / 설명 글자 대비가 4.5:1 이상(Color Picker 의 Contrast ratio) / 값 변경을 `tokens.css` 한 곳에서만 함 |

## 힌트 재료
- 1단계: MDN 사용자 지정 속성·`var()` 문서(위 링크)
- 2단계: 변수를 만들 때는 이름 앞에 `--`, 쓸 때는 `var(--이름)` 이에요. 대비는 F12 → Elements → Styles 의 `color` 값 앞 작은 색 네모를 눌러 Color Picker 의 Contrast ratio 를 봐요. 파일을 나누면 `<link>` 순서가 곧 덮어쓰는 순서예요.
- 3단계 예시(다른 이름·다른 값):
  ```css
  :root { --color-surface: #fff; --color-text-muted: #4b5563; }
  .note { background: var(--color-surface); color: var(--color-text-muted); }
  ```

## 자주 막히는 곳
- 변수를 쓴 곳만 색이 사라짐 → 변수 이름 철자(대소문자 포함)가 `tokens.css` 와 다름
- `var(color-primary)` 가 안 먹음 → `--` 를 빠뜨림(`var(--color-primary)`)
- 변수가 전부 안 먹음 → `index.html` 에 `tokens.css` 를 연결 안 했거나 파일 이름 오타
