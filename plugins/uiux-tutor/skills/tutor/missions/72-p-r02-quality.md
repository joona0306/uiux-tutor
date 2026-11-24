# 72. R02. 반응형·품질 점검 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **기기 모드 + 가로 넘침 한 줄**: 코드는 하나인데 폭에 따라 모양이 바뀌니 320·768·1280px 에서 직접 봐요. 콘솔에 `document.documentElement.scrollWidth > document.documentElement.clientWidth` 를 치면 `true`(넘침)·`false`(정상)로 숫자처럼 확인돼요.
  - **Lighthouse 는 점수보다 항목**: 점수 하나보다 "통과 못 한 항목"을 펼쳐 문제 요소와 영어 원문을 읽고, 고친 뒤 다시 돌려 바뀐 것을 확인해요. 성능 점수는 돌릴 때마다 흔들려요.
  - **글자 대비 4.5 : 1**: 연한 회색 글자는 바탕에 따라 기준을 못 넘어요. Figma 에서 명도 대비를 보던 것과 같은 일이에요. 첫 화면 큰 사진은 `loading="eager"`·`fetchPriority="high"`, 폭이 바뀌는 사진은 `sizes` 로 실제 크기를 알려요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. 빈 HTML 에 넣고 창 폭을 줄여 봐요)
  ```html
  <div style="width: 600px; background: #cbd5e1">폭이 600px 로 고정된 상자</div>
  <p style="color: #9ca3af; background: #f3f4f6">연한 회색 글자</p>
  ```
  창을 400px 로 줄인 뒤 콘솔에 `document.documentElement.scrollWidth > document.documentElement.clientWidth` 를 쳐요.
- 예상해 보기: 위 상자의 `width: 600px` 를 `max-width: 100%` 로 바꾸면 400px 창에서 콘솔 결과는? — 답: `false`. 상자가 창보다 커지지 않아 가로 넘침이 사라져요.
- 공식 문서: [접근성 배우기 (web.dev)](https://web.dev/learn/accessibility) · [색과 대비 (web.dev)](https://web.dev/articles/color-and-contrast-accessibility) · [Next.js ESLint 설정](https://nextjs.org/docs/app/api-reference/config/eslint) · [`<img>` loading (MDN)](https://developer.mozilla.org/ko/docs/Web/HTML/Element/img#loading)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| P02-1 기본 구조 | 지금까지 만든 사이트(홈·목록 구역·상세 구역)를 DevTools 기기 모드로 320·768·1280px 에서 점검해요 | 세 폭 모두 콘솔 결과(`true`/`false`)를 표에 적음 / `true` 가 나온 곳은 원인 요소를 찾아 고치고 다시 `false` / 점검표 파일 `docs/quality-checklist.md` 가 있음 |
| P02-2 개념 적용 | Lighthouse(시크릿 창)를 돌려 접근성·권장사항·SEO 점수와 못 통과한 항목을 읽고, 대비·이미지 문제를 고쳐요 | 고치기 전·후 점수를 점검표에 숫자로 적음 / 못 통과한 항목 이름(영어 원문)과 고친 방법을 한 줄씩 적음 / 첫 화면 큰 사진에 `loading="eager"`·`fetchPriority="high"`, 폭이 바뀌는 사진에 `sizes` / 접근성 90 이상 |
| P02-3 응용 | `npm run lint` 와 W3C HTML 검사기(배포 주소, deploy.md 점검 후)를 돌려 결과를 읽고 정리해요 | `npm run lint` 결과 error·warning 이 0개(`any`·안 쓰는 변수 포함) / W3C 결과의 Error 개수와 Info 를 구분해 점검표에 적음 / Error 는 0개 또는 남은 것의 이유를 적음 / 점검표가 커밋되어 저장소에 있음 |

## 힌트 재료
- 1단계: web.dev 접근성 배우기 — https://web.dev/learn/accessibility , Next.js ESLint — https://nextjs.org/docs/app/api-reference/config/eslint
- 2단계: 가로 넘침은 `true` 가 나온 뒤 요소를 하나씩 숨겨 보며(DevTools 에서 `display: none`) 범인을 찾아요. 대비는 Elements 의 색 칸에 나오는 대비 숫자(4.5)를 봐요. Lighthouse 항목은 펼치면 문제 요소가 나와요.
- 3단계 예시(다른 이름·다른 값):
  ```tsx
  <Image src="/images/hero.jpg" alt="자리 표시 사진" width={960} height={540}
    loading="eager" fetchPriority="high" sizes="(min-width: 1024px) 960px, 100vw" />
  ```

## 자주 막히는 곳
- 콘솔이 `true` 인데 눈으로는 안 보임 → 고정 폭(`width: 600px`)이나 `100vw` + 가로 padding 이 범인인 경우가 많아요
- Lighthouse 점수가 돌릴 때마다 달라짐 → 성능 점수는 원래 흔들려요. 항목 목록과 접근성·SEO 를 기준으로 봐요(확장 프로그램이 점수를 깎으면 시크릿 창에서 돌려요)
- W3C 검사를 `localhost` 로 못 함 → 배포 주소로 하거나, 페이지 소스(`Ctrl + U`)를 복사해 text input 방식으로 검사해요
