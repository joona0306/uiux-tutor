# 68. Next.js 실습 — 기능 늘리기 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **검색어를 주소에**: `next/form` 의 `Form` 은 입력값을 주소 뒤 `?q=값` 으로 붙여 이동해요. 결과 페이지는 `await props.searchParams` 로 꺼내요.
  - **`params` 와 `searchParams`**: `params` 는 폴더 자리(`/products/3` 의 `3`), `searchParams` 는 `?` 뒤(`?q=캔버스`). `params` 값은 `string`, `searchParams` 값은 `string | string[] | undefined` 라서 `typeof` 로 글자인지 확인하고 써요.
  - **loading.tsx**: 같은 폴더 페이지가 준비되는 동안 보여 줄 "불러오는 중" 화면이에요. Figma에서 로딩 상태 프레임을 따로 그려 두는 것과 비슷해요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `app/find/page.tsx`)
  ```tsx
  import Form from 'next/form';

  export default async function FindPage(props: PageProps<'/find'>) {
    const { q } = await props.searchParams;
    const word = typeof q === 'string' ? q : '';
    return (
      <main>
        <Form action="/find">
          <input name="q" defaultValue={word} />
          <button type="submit">찾기</button>
        </Form>
        <p>찾는 말: {word || '(없음)'}</p>
      </main>
    );
  }
  ```
  글자를 넣고 찾기를 누른 뒤 주소창이 어떻게 바뀌는지 봐요.
- 예상해 보기: `<input name="q">` 에서 `name="q"` 를 `name="word"` 로 바꾸면? — 답: 주소가 `?word=…` 가 되어 `searchParams` 의 `q` 는 `undefined` 라서 "(없음)" 이 나와요.
- 공식 문서: [Form (Next.js)](https://nextjs.org/docs/app/api-reference/components/form) · [page 파일의 searchParams (Next.js)](https://nextjs.org/docs/app/api-reference/file-conventions/page) · [loading.tsx (Next.js)](https://nextjs.org/docs/app/api-reference/file-conventions/loading) · [not-found.tsx (Next.js)](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| N68-1 기본 구조 | 고른 사이트의 카드 하나를 `[id]` 상세 페이지로 만들어요(`Number(id)` 로 바꿔 데이터를 찾음) | 폴더 이름이 `[id]` / `await props.params` 와 `Number(id)` 사용 / 없는 `id`(예: `/…/999`)는 `notFound()` 로 404, 루트 `app/not-found.tsx` 가 있음 |
| N68-2 개념 적용 | 머리글에 검색창(`Form`)을 넣고 `/search` 결과 페이지를 만들어요 | `Form` 의 `action="/search"` 와 입력의 `name` 이 있음 / 결과 페이지가 `await props.searchParams` 로 읽고 `typeof` 로 글자만 사용 / 검색어를 바꾸면 결과 목록이 달라짐 |
| N68-3 응용 | 상세는 `generateStaticParams`(주소 값은 `String()`)로 미리 만들고, 검색 결과에 `loading.tsx` 를 붙여요 | `npm run build` 표에서 상세는 `●`, `/search` 는 `ƒ` / `loading.tsx` 가 `app/search/` 안에 있음 / `npm run build` 와 `npm run lint` 오류 없음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- N68-1: 상세 화면 구성이 원본 상세와 같음
- N68-2: 검색창 자리가 원본 머리글과 같음
- N68-3: 해당 없음 (미리 만들기·로딩)

## 힌트 재료
- 1단계: Next.js 공식 문서 "Form" — https://nextjs.org/docs/app/api-reference/components/form
- 2단계: 입력의 `name` 이 곧 주소의 `?` 뒤 이름이 돼요. 결과 페이지는 `app/search/page.tsx` 에 두고, 그 폴더에 `loading.tsx` 를 함께 둬요. `searchParams` 를 쓰는 페이지는 요청마다 만들어져서 빌드 표에서 `ƒ` 예요.
- 3단계 예시(다른 이름·다른 값):
  ```tsx
  // app/places/[id]/page.tsx
  const { id } = await props.params;
  const place = places.find((p) => p.id === Number(id));
  if (!place) notFound();

  export function generateStaticParams() {
    return places.map((p) => ({ id: String(p.id) }));
  }
  ```

## 자주 막히는 곳
- 검색어가 항상 비어 있음 → 입력의 `name` 과 `searchParams` 에서 꺼내는 이름이 다름
- `/…/abc` 같은 글자 id 에서 이상한 화면 → `Number('abc')` 는 `NaN` 이라 `find` 가 못 찾아요. `notFound()` 로 막혀 있는지 확인
- `generateStaticParams` 타입 오류 → 주소 값은 글자예요. `id: String(p.id)`
