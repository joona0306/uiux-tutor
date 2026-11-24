# 16. W16. transition·transform·animation — 미션 예시

## 배우기 재료
- 핵심 개념
  - **transition**: 값이 바뀔 때 부드럽게 이어 줘요. `transition: background-color 0.2s;` 는 **평소(기본) 규칙**에 써요. `:hover` 규칙에만 쓰면 올릴 때만 부드럽고 뗄 때는 툭 돌아와요. Figma 프로토타입의 Smart animate 와 비슷해요.
  - **transform**: `translateY(-6px)`(옮기기) · `scale(1.05)`(키우기) · `rotate(15deg)`(돌리기). 여러 개는 한 줄에 `transform: scale(1.1) rotate(15deg);` 로 써야 해요.
  - **animation 과 움직임 줄이기**: `@keyframes 이름 { from {…} to {…} }` 를 만들고 `animation: 이름 0.6s infinite alternate;` 로 붙여요. 어지럼증이 있는 사람을 위해 `@media (prefers-reduced-motion: reduce)` 안에서 움직임을 꺼요(파일 맨 아래에 두어야 덮어써요). 키보드 포커스 표시(`:focus-visible`)는 지우지 않아요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `<button class="btn">누르기</button>` 하나만 있으면 돼요)
  ```css
  .btn {
    background: #2563eb; color: #fff; border: 0; padding: 8px 16px;
    transition: background-color 0.2s, transform 0.2s;
  }
  .btn:hover { background: #1d4ed8; transform: translateY(-4px); }
  .btn:focus-visible { outline: 3px solid #111827; outline-offset: 2px; }
  @keyframes blink { from { opacity: 1; } to { opacity: 0.2; } }
  .dot { animation: blink 0.6s infinite alternate; }
  @media (prefers-reduced-motion: reduce) { .dot, .btn { animation: none; transition: none; } }
  ```
- 예상해 보기: `.btn` 규칙의 `transition` 줄을 `.btn:hover` 규칙 안으로 옮기면 마우스를 뗄 때 어떻게 될까요? — 답: 올릴 때는 부드럽게 바뀌지만, 뗄 때는 `:hover` 가 사라지면서 transition 도 사라져 순간적으로 원래 모양으로 돌아가요.
- 공식 문서: [CSS 트랜지션 사용하기 (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) · [@keyframes (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/@keyframes) · [prefers-reduced-motion (MDN, 영어)](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| W16-1 기본 구조 | 고른 사이트의 대표 버튼(검색·예약·더 보기 등)에 마우스를 올리면 배경색이 부드럽게 바뀌게 하고, 키보드 포커스 표시도 만들어요 | `transition` 이 평소 규칙에 있음(`:hover` 안이 아님) / `:hover` 에서 배경색 값만 바뀜 / `:focus-visible` 에 `outline` 이 있고 `outline: none` 이 없음 |
| W16-2 개념 적용 | 고른 사이트의 목록 카드에 마우스를 올리면 6px 위로 떠오르게 해요 | 카드 평소 규칙에 `transition: transform …` / `:hover` 에 `transform: translateY(-6px)` / 올렸다 뗄 때 둘 다 부드러움 |
| W16-3 응용 | "불러오는 중" 점 같은 작은 요소를 `@keyframes` 로 깜빡이게 하고, 운영체제의 움직임 줄이기 설정에서는 꺼요 | `@keyframes` 이름과 `animation` 이름이 같음 / `animation` 에 시간·`infinite`·`alternate` / `@media (prefers-reduced-motion: reduce)` 가 파일 맨 아래에 있고 DevTools Rendering 탭에서 흉내 내 확인함 |

## 힌트 재료
- 1단계: MDN `transition` · `@keyframes` · `prefers-reduced-motion` 문서(위 링크)
- 2단계: `transition` 은 평소 규칙에 쓰고 `:hover` 에서는 바뀌는 값만 써요. 움직임 끄기 블록은 파일 맨 아래에 두어 앞의 규칙을 덮어쓰게 해요. 확인은 F12 → ⋮ → More tools → Rendering 에서 reduced motion 을 골라요.
- 3단계 예시(다른 이름·다른 값):
  ```css
  .tile { transition: transform 0.25s; }
  .tile:hover { transform: translateY(-6px); }
  @media (prefers-reduced-motion: reduce) { .tile:hover { transform: none; } }
  ```

## 자주 막히는 곳
- 올릴 때는 부드러운데 뗄 때 툭 돌아옴 → `transition` 을 `:hover` 규칙에 넣음
- hover 가 안 먹음 → `.btn :hover` 처럼 콜론 앞에 띄어쓰기가 있음(`.btn:hover`)
- 움직임 줄이기를 켜도 그대로 움직임 → `@media (prefers-reduced-motion)` 블록이 파일 위쪽에 있어서 뒤 규칙에 덮임
