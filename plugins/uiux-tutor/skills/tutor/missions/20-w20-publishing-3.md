# 20. W20. 퍼블리싱 실습 ③ 움직임·접근성·품질 점검 — 미션 예시

> 퍼블리싱 실습 3일 중 마지막 날: W19 까지 만든 내 페이지에 움직임·키보드 접근성을 더하고, 점검표에 **직접 본 결과**를 적어요.

## 배우기 재료
- 핵심 개념
  - **움직임은 평소 규칙에, 줄이기는 맨 아래에**: `transition` 은 평소 규칙에 쓰고 `:hover` 에서는 값만 바꿔요. `@media (prefers-reduced-motion: reduce)` 블록은 파일 **맨 아래**에 두고 움직임을 꺼요.
  - **키보드 접근성**: 마우스 없이 Tab 으로 다닐 수 있어야 해요. `:focus-visible` 포커스 표시를 지우지 않고, 첫 Tab 에 보이는 "본문으로 건너뛰기" 링크(평소엔 화면 위로 숨기고 포커스를 받으면 내려오는 `<a href="#main">`)를 넣어요.
  - **점검은 본 것만 적기**: 기기 모드 5폭(320·375·768·1024·1440), W3C 검사기, Lighthouse 접근성, 키보드·대비 확인. Lighthouse 100점은 자동으로 잴 수 있는 항목만 센 점수라서 "완벽한 접근성"이 아니에요. 해 보지 않은 칸은 "안 해 봄"이라고 적어요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `<a class="skip-link" href="#main">본문으로 건너뛰기</a>` 를 `<body>` 맨 위에, `<main id="main">` 을 본문에 둬요)
  ```css
  .skip-link { position: absolute; top: -48px; left: 8px; z-index: 20; background: #fff; padding: 8px 12px; }
  .skip-link:focus-visible { top: 8px; }
  .card { transition: transform 0.2s; }
  .card:hover { transform: translateY(-4px); }
  @media (prefers-reduced-motion: reduce) { .card:hover { transform: none; } }
  ```
  새로고침 뒤 페이지를 클릭하지 말고 Tab 을 한 번 눌러 링크가 나타나는지 봐요.
- 예상해 보기: `.skip-link` 의 `z-index: 20` 을 지우고 sticky 머리글(`z-index: 10`)이 있으면 링크가 포커스를 받았을 때 어떻게 보일까요? — 답: 머리글 뒤에 가려져 안 보일 수 있어요. 숨겨 둔 링크는 머리글보다 큰 `z-index` 가 필요해요.
- 공식 문서: [prefers-reduced-motion (MDN, 영어)](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) · [:focus-visible (MDN, 영어)](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| W20-1 기본 구조 | 내 페이지의 버튼·카드에 transition, 첫 화면 제목에 등장 `@keyframes` 를 넣고 움직임 줄이기 설정에서는 꺼요 | `transition` 이 평소 규칙에 있고 `:hover` 에는 바뀌는 값만 / `@keyframes` 이름과 `animation` 이름이 같음 / `@media (prefers-reduced-motion: reduce)` 가 파일 맨 아래에 있고 안에서 움직임을 끔 |
| W20-2 개념 적용 | 키보드만으로 페이지를 쓸 수 있게 해요: 링크·버튼마다 `:focus-visible` 표시, 첫 Tab 에 "본문으로 건너뛰기" 링크 | 파일 어디에도 `outline: none` 이 없음 / `<a href="#main">` 와 `<main id="main">` 가 짝 / 평소엔 숨고 Tab 을 누르면 나타남(`position: absolute` + `:focus-visible`) / 헤더보다 위에 보임(`z-index`) |
| W20-3 응용 | 품질 점검 A~E 를 직접 하고 `quality-check.md` 에 본 결과와 안 해 본 것을 나눠 적어요: 5폭 기기 모드, W3C 검사기, Lighthouse 접근성·SEO, 키보드·대비 확인 | `quality-check.md` 가 있고 항목마다 "본 결과" 또는 "안 해 봄" 중 하나가 적힘 / W3C 오류 0개 또는 남은 것의 줄 번호와 이유 / Lighthouse 접근성·SEO 점수와 실패 항목(없으면 없다고)을 적음 / SEO 실패 항목(예: 메타 설명 없음)은 고치고 다시 돌린 점수를 적음 / "100점 ≠ 완벽한 접근성"을 이유와 함께 한 줄로 적음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- W20-1: 움직임 종류가 원본에 있는 것과 같음 (원본에 없으면 해당 없음)
- W20-2: 해당 없음 (키보드 접근성)
- W20-3: `quality-check.md` 에 구역별 원본 닮음 표(375·1280px, 구역마다 같음/다름과 다른 점)가 있음

## 힌트 재료
- 1단계: MDN `prefers-reduced-motion`·`:focus-visible` 문서(위 링크). 움직임 복습은 W16, 변수·대비는 W17
- 2단계: 움직임 줄이기 블록은 파일 맨 끝에 둬요(앞에 있으면 뒤 규칙에 덮여요). Tab 확인은 새로고침 뒤 페이지를 클릭하지 않고 바로 Tab 을 눌러요. Lighthouse 는 시크릿 창에서 Accessibility·SEO 를 체크해 Mobile·Desktop 두 번 돌려요.
- 3단계 예시(다른 이름·다른 값):
  ```css
  .btn:focus-visible { outline: 3px solid #111827; outline-offset: 2px; }
  @keyframes rise { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
  .hero-title { animation: rise 0.6s ease-out; }
  ```

## 자주 막히는 곳
- 마우스를 뗄 때 휙 돌아감 → `transition` 을 `:hover` 규칙에만 씀(평소 규칙에)
- Tab 을 눌러도 테두리가 안 보임 → 어딘가에 `outline: none` 이 있음(검색해서 지우기)
- 동작 줄이기를 켜도 카드가 떠오름 → `prefers-reduced-motion` 블록이 파일 중간에 있어서 뒤 규칙에 덮임
