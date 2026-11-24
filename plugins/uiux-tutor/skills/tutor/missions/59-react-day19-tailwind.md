# 59. Day 19. Tailwind CSS — 미션 예시

## 배우기 재료
- 핵심 개념
  - **유틸리티 class**: 작은 class 를 조합해 `className` 에 바로 써요. Figma 속성과 짝이에요: Auto Layout 은 `flex gap-4 items-center`, Padding 은 `p-4`, 모서리 반경은 `rounded-lg`. 간격 수는 px ÷ 4(16px = `4`)이고, 표에 없는 값은 `w-[220px]` 처럼 대괄호로 써요.
  - **설치(Tailwind 4)**: `npm install tailwindcss @tailwindcss/vite` → `vite.config.ts` 의 `plugins` 에 `tailwindcss()` → CSS 파일 맨 위에 `@import "tailwindcss";`. `tailwind.config.js` 는 만들지 않아요.
  - **상태와 반응형**: `hover:` 는 마우스를 올렸을 때, 접두사 없는 class 는 모바일부터 모두, `sm:`(640px) `md:`(768px) `lg:`(1024px) 는 그 너비 이상에서 덮어써요. 상태별 class 묶음은 `Record<Variant, string>` 으로 정리하면 빠진 상태를 TS 가 알려 줘요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. 설치 후 `App.tsx` 에)
  ```tsx
  function App() {
    return (
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">저장</button>
        <p className="text-sm text-gray-600">작은 글씨</p>
      </div>
    );
  }
  export default App;
  ```
- 예상해 보기: 위 `grid` 가 화면 너비 700px 에서는 한 줄에 몇 칸일까요? — 답: 2칸이에요. `sm:`(640px 이상)은 켜졌고 `lg:`(1024px 이상)는 아직 아니라서 `sm:grid-cols-2` 가 적용돼요.
- 공식 문서: [Vite 로 설치하기 (Tailwind)](https://tailwindcss.com/docs/installation/using-vite) · [유틸리티 우선 (Tailwind)](https://tailwindcss.com/docs/utility-first) · [hover·focus 와 상태 (Tailwind)](https://tailwindcss.com/docs/hover-focus-and-other-states) · [반응형 디자인 (Tailwind)](https://tailwindcss.com/docs/responsive-design)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| R19-1 기본 구조 | Tailwind 를 설치하고, Figma 에서 고른 사이트의 [카드 한 장]의 수치(padding·gap·글자 크기·모서리·색)를 class 로 옮겨요 | `package.json` 의 `tailwindcss` 가 4 로 시작 / `index.css` 맨 위에 `@import "tailwindcss";`, `tailwind.config.js` 없음 / Figma 값 ↔ class 짝 표 5줄 이상(예: 24px ↔ `p-6`) |
| R19-2 개념 적용 | 머리글과 카드 배치를 `flex` 로, 카드와 버튼에 `hover:` 를 달고, 필터 버튼의 상태별 class 를 `Record<Variant, string>` 으로 묶어요 | `flex`, `gap-*`, `items-center` 또는 `justify-between` 사용 / `hover:` + `transition` 반응 / `type FilterVariant = 'selected' \| 'default'` 와 `Record<FilterVariant, string>`, 한 칸을 지우면 TS 오류가 남(확인 후 되돌림) |
| R19-3 응용 | 카드 목록을 모바일 우선 반응형 grid 로 만들어요 | 375px 에서 1열 / 640px 이상 2열, 1024px 이상 3열(`sm:`, `lg:`) / 375px 에서 가로 스크롤 없음 / `npm run build` 와 `npm run lint` 오류 없음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- R19-1: 카드 수치(padding·gap·글자 크기·모서리·색)가 원본에서 읽은 값과 같음
- R19-2: 머리글·카드 배치가 원본과 같음
- R19-3: 세 폭에서 열 수가 원본과 같음

## 힌트 재료
- 1단계: Tailwind 공식 문서 "Vite 로 설치하기" — https://tailwindcss.com/docs/installation/using-vite
- 2단계: 인터넷의 옛 글(`tailwind.config.js`, `npx tailwindcss init`)은 이전 버전 방법이에요. 이 과정은 Tailwind 4 라서 플러그인과 CSS 한 줄만 써요. 모바일 class 를 먼저 쓰고, 넓은 화면에서 달라지는 것만 `sm:`·`lg:` 로 덮어써요.
- 3단계 예시(다른 이름·다른 값):
  ```tsx
  type TabVariant = 'on' | 'off';
  const tabClasses: Record<TabVariant, string> = {
    on: 'bg-gray-900 text-white',
    off: 'bg-white text-gray-700 hover:bg-gray-100',
  };
  <button className={`rounded px-3 py-1 ${tabClasses[isOn ? 'on' : 'off']}`}>탭</button>
  ```

## 자주 막히는 곳
- class 를 썼는데 아무 변화 없음 → `index.css` 의 `@import "tailwindcss";` 가 빠졌거나 `vite.config.ts` 에 `tailwindcss()` 를 안 넣었어요. 개발 서버를 껐다 켜요
- `` `text-${color}-500` `` 처럼 만든 class 가 안 먹음 → Tailwind 는 소스에 적힌 완성된 글자를 찾아요. 이름을 조각내지 않고 `'text-red-500'` 전체를 써요
- 모바일에서 레이아웃이 깨짐 → 접두사 없는 class 가 모바일 기본이에요. 넓은 화면용을 접두사 없이 쓰지 않았는지 봐요
