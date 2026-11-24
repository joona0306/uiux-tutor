# 64. Day 22. 동적 라우트 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **동적 라우트**: 폴더 이름을 `[slug]` 처럼 대괄호로 쓰면, 폴더 하나가 `/notes/a`, `/notes/b` 처럼 여러 주소를 맡아요. Figma의 컴포넌트 하나로 인스턴스 여러 개를 만드는 것과 비슷해요.
  - **`params`**: 주소의 `[slug]` 자리에 들어온 글자예요. Next.js 공식 문서(page 파일 규칙)에서 `params` 는 Promise 라서 `await` 로 꺼내요. 타입은 `PageProps<'/notes/[slug]'>` 처럼 쓰면 주소에 맞는 모양을 Next.js 가 알려 줘요.
  - **`notFound()`**: 찾는 데이터가 없을 때 404 화면을 보여 줘요.
  - **주소에 담는 값**: 고른 태그 같은 필터 값은 `useState` 대신 `?tag=` 로 주소에 담고, 서버 페이지에서 `await props.searchParams` 로 꺼내요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `app/notes/[slug]/page.tsx`)
  ```tsx
  import { notFound } from 'next/navigation';

  const notes = [{ slug: 'a', title: '첫 노트' }];

  export default async function NotePage(props: PageProps<'/notes/[slug]'>) {
    const { slug } = await props.params;
    const note = notes.find((n) => n.slug === slug);
    if (!note) notFound();
    return <h1>{note.title}</h1>;
  }
  ```
  `/notes/a` 와 `/notes/zzz` 를 각각 열어 봐요.
- 예상해 보기: `const { slug } = await props.params;` 에서 `await` 를 지우면 어떻게 될까요? — 답: `params` 가 Promise 라서 `slug` 를 꺼낼 수 없고, 타입 오류(빨간 밑줄)가 나요.
- 공식 문서: [동적 라우트 (Next.js)](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes) · [page 파일의 params·searchParams·PageProps (Next.js)](https://nextjs.org/docs/app/api-reference/file-conventions/page) · [notFound (Next.js)](https://nextjs.org/docs/app/api-reference/functions/not-found) · [이미지 (Next.js)](https://nextjs.org/docs/app/getting-started/images) · [글꼴 (Next.js)](https://nextjs.org/docs/app/getting-started/fonts) · [메타데이터 (Next.js)](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| N22-1 기본 구조 | 고른 사이트의 카드 목록 → 상세 흐름을 만들어요. `data/` 에 가상 데이터 배열(`slug` 포함)을 두고, 목록 카드가 `Link` 로 상세로 가요 | 폴더 이름이 `[slug]` 인 `page.tsx` 가 있음 / 데이터 2개 이상이 각자 다른 주소로 열림 / `props: PageProps<'/…/[slug]'>` 와 `await props.params` 를 씀 |
| N22-2 개념 적용 | 없는 slug 는 404 로 보내고, 상세에 사진(`public/images/` 의 자리 표시 사진)과 탭 제목을 넣어요 | `find` 결과가 없으면 `notFound()` 호출 / `Image` 에 `width`·`height` 가 있고 `src` 는 `/images/…` / 상세마다 `generateMetadata` 로 탭 제목이 다름 |
| N22-3 응용 | 목록에 태그 버튼을 만들고 `?tag=` 주소로 걸러요(`useState` 안 씀) | 버튼이 `Link` 로 `?tag=값` 주소로 감 / `await props.searchParams` 로 읽고 `typeof` 로 글자인지 좁힘 / `npm run build` 와 `npm run lint` 오류 없음 |

## 힌트 재료
- 1단계: Next.js 공식 문서 "page 파일" (params·searchParams·PageProps) — https://nextjs.org/docs/app/api-reference/file-conventions/page
- 2단계: 폴더 이름의 대괄호 안 이름(`slug`)과 `params` 에서 꺼내는 이름이 같아야 해요. `find` 는 못 찾으면 `undefined` 를 주니 `notFound()` 로 막은 뒤에 쓰면 타입이 좁혀져요. `searchParams` 값은 글자·글자 배열·`undefined` 중 하나라서 `typeof tag === 'string'` 으로 확인해요.
- 3단계 예시(다른 이름·다른 값):
  ```tsx
  // app/shops/page.tsx
  export default async function ShopsPage(props: PageProps<'/shops'>) {
    const { area } = await props.searchParams;
    const selected = typeof area === 'string' ? area : undefined;
    const visible = selected ? shops.filter((s) => s.area === selected) : shops;
    return <ul>{visible.map((s) => <li key={s.slug}>{s.name}</li>)}</ul>;
  }
  ```

## 자주 막히는 곳
- 상세 주소가 항상 404 → `data` 의 `slug` 값과 주소 글자가 다름(대소문자·띄어쓰기), 또는 `await` 를 빼먹음
- `Image` 오류(`width`·`height` 필요) → 크기를 안 적음. 다른 웹사이트 사진은 `remotePatterns` 허락이 따로 필요해서 `public/images/` 사진을 쓰는 게 쉬워요
- 필터가 안 걸림 → `searchParams` 를 `await` 하지 않았거나, 버튼 `href` 에 `?tag=` 가 빠짐
