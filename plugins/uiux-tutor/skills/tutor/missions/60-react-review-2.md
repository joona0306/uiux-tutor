# 60. React 복습 ② Router·스타일링 — 미션 예시

## 배우기 재료
- 핵심 개념 (Day 17~19 종합)
  - **주소 → 화면 → class 를 먼저 예상**: 주소가 어느 Route 에 맞는지(`:id`, `*`), `NavLink` 가 언제 `active` 가 되는지(`/` 는 `end` 가 필요), CSS Module 에서 class 두 개를 띄어쓰기로 이어 붙이는 것, 같은 속성을 덮는 Tailwind class 는 함께 붙이지 않는 것을 코드만 보고 말해 봐요.
  - **혼자 처음부터**: `npm create vite@latest` → `npm i react-router` → Tailwind 설치·연결을 보지 않고 해요. 구조는 목록 → 상세(`/items/:id`) → 404 예요.
  - **값을 어디에 둘까**: 모달 열림·여러 단계 폼은 `useState`, 부모-자식 몇 층은 props, 여러 페이지가 쓰는 값은 Context. 같은 일을 하는 Zustand 저장소 코드도 읽을 수 있어야 해요.
- 작은 따라 치기 (사이트와 상관없이 읽고 직접 쳐요 — Context 와 같은 일을 하는 Zustand 저장소. 먼저 `npm i zustand`)
  ```ts
  import { create } from 'zustand';

  type LikeState = {
    likedIds: number[];
    like: (id: number) => void;
  };

  export const useLikeStore = create<LikeState>()((set) => ({
    likedIds: [],
    like: (id) => set((state) => ({ likedIds: [...state.likedIds, id] })),
  }));
  ```
  쓰는 곳에서는 `const count = useLikeStore((state) => state.likedIds.length);` 로 필요한 값만 꺼내요. Context 와 달리 `Provider` 로 감싸지 않아도 돼요.
- 예상해 보기: `<Route path="/items/:id" ... />` 와 `<Route path="*" ... />` 가 있을 때 주소 `/items` (번호 없음)는 어느 화면일까요? — 답: 404(`*`)예요. `/items/:id` 는 번호 자리가 꼭 있어야 맞아요.
- 공식 문서: [Context 로 데이터 깊숙이 전달하기 (React)](https://ko.react.dev/learn/passing-data-deeply-with-context) · [state 구조 선택하기 (React)](https://ko.react.dev/learn/choosing-the-state-structure) · [반응형 디자인 (Tailwind)](https://tailwindcss.com/docs/responsive-design)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| R19A-1 기본 구조 | 실행하지 않고 손으로 예상해요(고른 사이트 이름으로 바꿔 써도 돼요): ① `/items/3`, `/items` 는 각각 어느 화면? ② `items.find((i) => i.id === useParams 값)` 를 `Number` 없이 쓰면? ③ `className="p-2 p-4"` 는 어느 쪽이 적용될까? ④ `` `text-${color}-500` `` 가 안전한가? ⑤ `` `${styles.card}${styles.big}` `` 로 붙이면 버튼에 붙는 class 는 몇 개? | 5문제 모두 답과 한 줄 이유를 적음 / 실행해 확인한 것과 못 한 것을 구분 / ②는 오류 번호(`TS2367`)까지 적음 |
| R19A-2 개념 적용 | 새 Vite 프로젝트를 보지 않고 만들어요: Router·Tailwind 설치, 고른 사이트의 [카드 목록] → 상세 → 404, Tailwind 반응형 grid, CSS Module 로 만든 조건부 class 배지 하나(가상 데이터) | 설치 순서를 막힘 없이 끝냄(막힌 곳은 기록) / 주소 3개(`/`, `/items/1`, `/hello`)가 각각 목록·상세·404 / `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` / 배지에 `styles.이름` 두 개를 조건부로 조합 |
| R19A-3 응용 | 값을 어디에 둘지 표로 정하고, 위 Zustand 코드를 읽고 Context 와 다른 점을 적어요 | 값 5개 이상(모달 열림·담은 개수·입력 중인 글·불러온 목록·현재 주소 값)마다 `useState`/props/Context 중 하나와 한 줄 이유 / Context 와 Zustand 의 차이 2가지(Provider 감싸기, 설치 여부 등) / `npm run build` 와 `npm run lint` 오류 없음 |

## 힌트 재료
- 1단계: React 공식 문서 "Context 로 데이터 깊숙이 전달하기" — https://ko.react.dev/learn/passing-data-deeply-with-context
- 정답 확인용(튜터용 — **R19A-1 을 제출한 뒤에만** 보여 줘요): ① `/items/3` → 상세, `/items` → 404(번호가 없어서) ② 숫자와 `string | undefined` 를 비교해 `TS2367` ③ 쓴 순서로는 알 수 없어요(Tailwind 가 만든 CSS 에서 나중에 나오는 쪽이 이김) → 충돌하는 class 는 둘 중 하나만 붙여요 ④ 안전하지 않음(완성된 이름이 소스에 없어서 CSS 가 안 만들어짐) ⑤ 1개(띄어쓰기 없이 두 이름이 한 덩어리로 붙어서 CSS 에 없는 class 가 됨)
- 2단계: 막히면 설치 명령은 `npm i react-router`, `npm install tailwindcss @tailwindcss/vite` 순서로 떠올리고, `vite.config.ts`·`index.css`·`main.tsx` 세 파일에서 각각 무엇을 더했는지 말해 봐요.
- 3단계 예시(다른 이름·다른 값):
  ```tsx
  const count = useLikeStore((state) => state.likedIds.length);
  return <p className="text-sm text-gray-600">찜 {count}개</p>;
  ```

## 자주 막히는 곳
- 새 프로젝트에서 `Routes` 가 아무것도 안 보임 → `main.tsx` 의 `<BrowserRouter>` 를 빼먹었어요
- `NavLink` 홈 메뉴가 항상 켜져 있음 → `/` 는 모든 주소의 앞부분이에요. `end` 를 붙여요
- Tailwind class 가 반응하지 않음 → `@import "tailwindcss";` 나 `tailwindcss()` 플러그인 연결을 확인해요
