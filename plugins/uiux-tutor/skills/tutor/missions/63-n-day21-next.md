# 63. Day 21. Next.js 시작 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **폴더 = 주소**: `app/` 안에 폴더를 만들고 그 안에 `page.tsx` 를 두면 그 폴더 이름이 주소가 돼요. `app/about/page.tsx` → `/about`. Figma에서 프레임 하나가 화면 하나인 것과 비슷해요.
  - **layout.tsx**: 모든 페이지가 같이 쓰는 틀(메뉴·바닥글)이에요. 페이지마다 달라지는 부분이 `children` 자리에 들어와요.
  - **Link**: 사이트 안 이동은 `next/link` 의 `Link` 로 해요(`href` 사용). 바깥 사이트는 그냥 `<a>`.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `app/hello/page.tsx` 를 만들어요)
  ```tsx
  import Link from 'next/link';

  export default function HelloPage() {
    return (
      <main>
        <h1>안녕하세요</h1>
        <Link href="/">처음으로</Link>
      </main>
    );
  }
  ```
  저장한 뒤 `npm run dev` 로 띄우고 브라우저에서 `localhost:3000/hello` 를 열어요.
- 예상해 보기: `hello` 폴더 안의 파일 이름을 `page.tsx` 에서 `index.tsx` 로 바꾸면 `/hello` 가 열릴까요? — 답: 안 열려요(404). 주소가 되는 파일 이름은 정해져 있어서 `page.tsx` 여야 해요.
- 공식 문서: [설치 (Next.js)](https://nextjs.org/docs/app/getting-started/installation) · [레이아웃과 페이지 (Next.js)](https://nextjs.org/docs/app/getting-started/layouts-and-pages) · [링크와 이동 (Next.js)](https://nextjs.org/docs/app/getting-started/linking-and-navigating)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| N21-1 기본 구조 | `npx create-next-app@latest` 로 새 프로젝트를 만들고(TypeScript·ESLint·Tailwind·App Router·`@/*` 별칭 선택), 고른 사이트의 첫 화면(홈)을 `app/page.tsx` 로 옮겨요 | `package.json` 에 `next` 가 있음 / `npm run dev` 로 `localhost:3000` 이 열림 / `app/page.tsx` 에 `<main>` 과 `<h1>` 이 하나씩 있음 |
| N21-2 개념 적용 | 고른 사이트에 있는 다른 화면 2개(예: 소개·목록)를 폴더로 만들어요 | `app/<이름>/page.tsx` 가 2개 있음 / 두 주소가 브라우저에서 열림 / 없는 주소(`/zzz`)는 404 화면 |
| N21-3 응용 | `app/layout.tsx` 에 공통 메뉴를 넣고 `components/Header.tsx` 로 따로 만들어요 | `Header` 를 `@/components/Header` 로 import 함 / 메뉴의 사이트 안 이동은 `Link`, 바깥 사이트는 `<a>` / `npm run build` 와 `npm run lint` 오류 없음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- N21-1: 첫 화면 구역 순서가 원본과 같음
- N21-2: 만든 화면들의 구성이 원본의 같은 화면과 같음
- N21-3: 공통 메뉴 항목·배치가 원본 머리글과 같음

## 힌트 재료
- 1단계: Next.js 공식 문서 "레이아웃과 페이지" — https://nextjs.org/docs/app/getting-started/layouts-and-pages
- 2단계: 주소가 될 폴더는 `app/` 바로 아래에 만들고, 그 안의 파일 이름은 `page.tsx` 로 해요. 메뉴는 `layout.tsx` 의 `{children}` 위쪽에 두어요.
- 3단계 예시(다른 이름):
  ```tsx
  // app/layout.tsx 의 body 안
  import Link from 'next/link';

  <nav>
    <Link href="/">홈</Link>
    <Link href="/notes">노트</Link>
  </nav>
  <main>{children}</main>
  ```

## 자주 막히는 곳
- 새 폴더를 만들었는데 404 → 파일 이름이 `page.tsx` 가 아니거나, 폴더가 `app/` 밖에 있음
- `Link` 에서 `to` 를 씀 → React Router 습관이에요. Next.js 는 `href`
