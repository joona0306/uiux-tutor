# 69. Day 25. Figma → 코드 ① 디자인 토큰과 Auto Layout — 미션 예시

## 배우기 재료
- 핵심 개념
  - **디자인 토큰**: 색·간격·모서리·글자 크기에 이름을 붙여 둔 값이에요. Figma 변수(`color/primary`)가 코드의 CSS 변수(`--color-primary`)가 돼요. 이름 규칙은 `/` 를 `-` 로, 앞에 `--` 를 붙이는 거예요(`space/lg` → `--spacing-lg`).
  - **Auto Layout → flex**: 방향은 `flex-direction`, Gap 은 `gap`, Padding 은 `padding`, 정렬은 `align-items`·`justify-content` 예요. Fixed 는 `width`(가로 flex 안이면 `flex-shrink: 0` 도), Fill 은 `flex: 1`, Hug 는 크기를 안 쓰는 거예요. 세로 flex 안에서 Hug 로 보이려면 `align-self: flex-start` 가 따로 필요해요.
  - **`@theme`**: Tailwind 4 에서 토큰을 적는 블록이에요. `--color-primary` 를 적으면 `bg-primary`·`text-primary` 클래스가 생겨요. `@theme static` 은 안 쓰인 토큰까지 전부 CSS 에 남겨요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `app/globals.css` 맨 아래에 더해요)
  ```css
  @theme {
    --color-sample: #e11d48;
    --spacing-gap-sample: 12px;
  }
  ```
  그리고 아무 `page.tsx` 에 `<p className="bg-sample p-gap-sample text-white">토큰 확인</p>` 을 넣어 배경색과 안쪽 여백이 바뀌는지 봐요.
- 예상해 보기: `--color-sample` 을 `--sample-color` 로 이름을 바꾸면 `bg-sample` 은 어떻게 될까요? — 답: 이름 앞부분(`--color-`)이 클래스를 만드는 규칙이라서 `bg-sample` 이 만들어지지 않고 배경색이 적용되지 않아요.
- 공식 문서: [테마 변수 (Tailwind CSS)](https://tailwindcss.com/docs/theme) · [CSS 사용자 지정 속성 (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties) · [flex (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/flex) · [변수와 컬렉션 (Figma)](https://help.figma.com/hc/ko/articles/15145852043927) · [Auto Layout 가이드 (Figma)](https://help.figma.com/hc/ko/articles/360040451373) · [Dev Mode 가이드 (Figma)](https://help.figma.com/hc/ko/articles/15023124644247)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| N69-1 기본 구조 | F05 에서 Figma 로 만든 고른 사이트의 변수(색·간격·모서리)와 텍스트 스타일을 읽어 `app/globals.css` 의 `@theme` 에 옮겨요 | `@import "tailwindcss";` 아래 `@theme` 블록이 있음 / Figma 변수 이름과 CSS 이름이 규칙대로 대응(예: `color/primary` → `--color-primary`) / 값(색 코드·px)이 Figma 와 같음 |
| N69-2 개념 적용 | 고른 사이트의 카드 하나를 Figma Auto Layout 설정(방향·Gap·Padding·Hug/Fill/Fixed) 그대로 flex 로 옮겨요 | Figma 의 방향·Gap·Padding 이 `flex-col`/`flex-row`·`gap-*`·`p-*` 와 일치 / Fill 은 `flex-1`, Fixed 는 `w-*`(+가로 flex 안이면 `shrink-0`) / Hug 인 태그가 세로 flex 안에서 `self-start` 로 늘어나지 않음 |
| N69-3 응용 | 카드의 색·간격·모서리를 토큰 클래스(`bg-primary`, `p-lg`, `rounded-md`)로만 쓰고, 하드코딩한 값이 없는지 점검해요. 카드는 Next.js 컴포넌트로 | 카드 파일에 `#` 색 코드·`px` 값이 직접 없음 / Dev Mode(또는 오른쪽 사이드바)에서 읽은 값과 화면 값이 같음 / `npm run build` 와 `npm run lint` 오류 없음 |

## 힌트 재료
- 1단계: Tailwind 공식 문서 "테마 변수" — https://tailwindcss.com/docs/theme
- 2단계: 변수 이름 앞부분이 클래스를 정해요: `--color-*` → `bg-*`·`text-*`, `--spacing-*` → `p-*`·`gap-*`·`w-*`, `--radius-*` → `rounded-*`. Figma 오른쪽 사이드바(또는 Dev Mode Inspect)에서 값과 변수 이름을 읽어요. 타입 오류가 나면 `파일:줄:칸 - error TS번호: 설명` 의 파일과 줄부터 열어요.
- 3단계 예시(다른 이름·다른 값):
  ```css
  @theme {
    --color-brand: #0f766e;
    --spacing-box: 20px;
    --radius-chip: 999px;
  }
  ```
  ```tsx
  <div className="flex flex-col gap-box rounded-chip bg-brand p-box">
    <span className="self-start">태그</span>
  </div>
  ```

## 자주 막히는 곳
- 클래스(`bg-brand`)가 안 먹음 → 변수 이름이 `--color-` 로 시작하지 않음, 또는 `@theme` 이 아니라 `:root` 에 적음
- Hug 태그가 카드 가로 전체로 늘어남 → 세로 flex 의 기본 `stretch` 때문. `self-start` 를 더해요
- Fixed 크기가 줄어듦 → 가로 flex 안에서 `shrink-0` 이 빠짐
