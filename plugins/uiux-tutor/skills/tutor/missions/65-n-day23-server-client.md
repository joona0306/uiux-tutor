# 65. Day 23. 서버 컴포넌트 vs 클라이언트 컴포넌트 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **서버 컴포넌트**: `app/` 안 컴포넌트의 기본이에요. 서버에서 먼저 그려져서 데이터를 `await` 로 바로 읽을 수 있고, `useState`·`onClick` 은 못 써요.
  - **클라이언트 컴포넌트**: 파일 맨 첫 줄에 `'use client'` 를 쓴 컴포넌트예요. 클릭·입력·`useState` 처럼 브라우저에서 움직여야 할 때만, 필요한 가장 작은 부분(하트 버튼, 필터)에 붙여요.
  - **값을 둘 곳 고르기**: 서버에서 읽은 데이터 / 주소(`?q=`) / 한 화면 안 `useState` / 여러 곳이 같이 쓰는 Context 중 값마다 하나를 골라요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. 클라이언트 파일 하나와 서버 파일 하나)
  ```tsx
  // components/LikeButton.tsx
  'use client';
  import { useState } from 'react';

  type LikeButtonProps = { start: number };

  export default function LikeButton({ start }: LikeButtonProps) {
    const [count, setCount] = useState(start);
    return <button onClick={() => setCount(count + 1)}>좋아요 {count}</button>;
  }
  ```
  ```tsx
  // app/page.tsx (서버 컴포넌트)
  import LikeButton from '@/components/LikeButton';

  export default function Home() {
    console.log('서버에서 찍혀요');
    return <LikeButton start={3} />;
  }
  ```
  `'서버에서 찍혀요'` 가 어디에 나오는지(터미널 / 브라우저 콘솔) 찾아봐요.
- 예상해 보기: `LikeButton.tsx` 맨 첫 줄의 `'use client'` 를 지우면 어떻게 될까요? — 답: `useState` 는 서버 컴포넌트에서 쓸 수 없다는 오류가 나요(`onClick` 도 마찬가지).
- 공식 문서: [서버·클라이언트 컴포넌트 (Next.js)](https://nextjs.org/docs/app/getting-started/server-and-client-components) · [use client (Next.js)](https://nextjs.org/docs/app/api-reference/directives/use-client) · [환경 변수 (Next.js)](https://nextjs.org/docs/app/guides/environment-variables)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| N23-1 기본 구조 | 서버 컴포넌트인 목록 페이지가 `async` 로 데이터를 읽어 카드로 그려요(가상 데이터 파일) | 목록 페이지가 `async function` 이고 `await` 로 데이터를 읽음 / 이 파일에 `'use client'` 없음 / 서버 `console.log` 가 브라우저 콘솔이 아니라 터미널에 나옴 |
| N23-2 개념 적용 | 카드의 찜(하트) 버튼과 분류 필터를 `'use client'` 컴포넌트로 만들고, 서버가 읽은 목록을 props 로 넘겨요 | `'use client'` 가 파일 맨 첫 줄(찜 버튼·필터 파일에만) / 받는 쪽에 `type …Props` 로 `Item[]`·`boolean` 타입을 적음 / 서버 → 클라이언트로 함수를 props 로 넘기지 않음 |
| N23-3 응용 | 찜 목록을 여러 컴포넌트(카드·머리글 숫자)가 같이 보게 Context 로 만들어요. 공공 데이터 같은 외부 API 를 쓴다면 키는 `.env.local` 에 두고 서버 컴포넌트에서만 읽어요 | Provider 가 `'use client'` 이고 `layout.tsx` 에서는 `{children}` 만 감쌈 / API 키를 쓴다면 `.env.local` 에 있고 이름이 `NEXT_PUBLIC_` 으로 시작하지 않음 / `.env.local` 이 `.gitignore` 에 있고 `npm run build`·`npm run lint` 오류 없음 |

## 힌트 재료
- 1단계: Next.js 공식 문서 "서버·클라이언트 컴포넌트" — https://nextjs.org/docs/app/getting-started/server-and-client-components
- 2단계: `useState`·`onClick`·브라우저 기능이 필요한 곳만 `'use client'` 로 떼어 내요. 값은 이렇게 골라요: 한 번 읽어 보여 주기만 → 서버 / 주소로 공유할 검색어 → 주소 / 이 화면에서만 → `useState` / 여러 컴포넌트가 같이 → Context. 환경 변수는 서버 코드에서 `process.env.이름` 으로 읽어요.
- 3단계 예시(다른 이름):
  ```tsx
  // components/FilterBar.tsx
  'use client';
  type FilterBarProps = { tags: string[]; onlyOpen: boolean };

  export default function FilterBar({ tags, onlyOpen }: FilterBarProps) {
    return <p>{tags.length}개 태그 / 열린 곳만: {onlyOpen ? '예' : '아니요'}</p>;
  }
  ```

## 자주 막히는 곳
- `useState` 를 쓰는데 오류 → 그 파일 맨 첫 줄에 `'use client'` 가 없음(import 보다 위여야 해요)
- 서버에서 클라이언트로 함수를 넘기자 오류 → 함수는 넘길 수 없어요. 데이터(글자·숫자·배열)만 넘기고, 동작은 클라이언트 컴포넌트 안에서 만들어요
- API 키가 브라우저에 보임 → `NEXT_PUBLIC_` 을 붙이면 브라우저로 나가요. 붙이지 않고 서버에서만 읽어요
