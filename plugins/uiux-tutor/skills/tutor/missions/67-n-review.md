# 67. Next.js 복습 — 미션 예시

## 배우기 재료
- 핵심 개념 (Day 21~24 종합)
  - **파일 위치로 주소 읽기**: `app/page.tsx` → `/`, `app/about/page.tsx` → `/about`, `app/notes/[slug]/page.tsx` → `/notes/아무거나`. `app/` 밖의 파일은 주소가 되지 않아요.
  - **서버 / 클라이언트 고르기**: 훅(`useState`)·이벤트(`onClick`)·브라우저 기능이 필요하면 클라이언트(`'use client'`), 아니면 서버(기본)예요. 서버에서 클라이언트로 함수는 넘길 수 없어요.
  - **빌드 표 읽기**: `npm run build` 끝에 나오는 표에서 `○` 는 미리 만든 페이지, `●` 는 `generateStaticParams` 로 미리 만든 상세 페이지, `ƒ` 는 요청마다 만드는 페이지예요. `build` 는 타입 오류도 잡아 줘요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `app/shops/[slug]/page.tsx` 에서 미리 만들 주소를 알려 줘요)
  ```tsx
  const shops = [{ slug: 'a' }, { slug: 'b' }];

  export function generateStaticParams() {
    return shops.map((s) => ({ slug: s.slug }));
  }
  ```
  `npm run build` 를 하고 표에서 `/shops/[slug]` 아래에 `/shops/a`, `/shops/b` 가 보이는지 찾아봐요.
- 예상해 보기: `generateStaticParams` 를 지우고 `npm run build` 를 하면 표의 `/shops/[slug]` 는 무엇으로 바뀔까요? — 답: 미리 만든 주소 목록이 없으니 `●` 대신 `ƒ`(요청마다 만듦)로 나와요.
- 공식 문서: [generateStaticParams (Next.js)](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) · [page 파일의 params·PageProps (Next.js)](https://nextjs.org/docs/app/api-reference/file-conventions/page) · [서버·클라이언트 컴포넌트 (Next.js)](https://nextjs.org/docs/app/getting-started/server-and-client-components) · [TypeScript (React)](https://ko.react.dev/learn/typescript)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| N67-1 기본 구조 | 새 `create-next-app` 프로젝트에서 목록 → `[slug]` 상세 → 404 를 혼자 만들어요(가상 데이터 3개 이상) | 목록·상세·없는 slug(404) 세 주소가 모두 열림 / 상세는 `PageProps` 와 `await props.params` 를 씀 / `find` 결과가 없으면 `notFound()` |
| N67-2 개념 적용 | 상세 사진(`Image`, `width`·`height`)과 탭 제목(`generateMetadata`)을 넣고 `generateStaticParams` 로 상세를 미리 만들어요 | `Image` 에 `width`·`height` 있음 / 상세마다 탭 제목이 다름 / `npm run build` 표에서 상세 주소가 `●` |
| N67-3 응용 | 값마다 둘 곳을 정해요(목록 데이터, 고른 태그, 열고 닫는 메뉴, 찜 목록). 정한 이유를 README 에 표로 써요 | 표에 값 4개와 "서버 / 주소 / `useState` / Context" 중 하나씩 있음 / 클라이언트 컴포넌트는 `'use client'` 가 필요한 파일에만 있음 / `npm run build` 와 `npm run lint` 오류 없음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- N67-1: 목록·상세 화면 구성이 원본과 같음
- N67-2: 해당 없음 (사진·메타데이터)
- N67-3: 해당 없음 (상태 위치 정하기)

## 힌트 재료
- 1단계: Next.js 공식 문서 "generateStaticParams" — https://nextjs.org/docs/app/api-reference/functions/generate-static-params
- 2단계: 폴더 이름의 `[slug]` 와 `params` 에서 꺼내는 이름을 맞춰요. 빌드 표의 `ƒ` 는 오류가 아니라 "요청마다 만든다"는 표시예요. 값 고르기: 읽기만 → 서버 / 공유하는 필터 → 주소 / 한 화면 → `useState` / 여러 곳이 같이 → Context.
- 3단계 예시(다른 이름·다른 값):
  ```tsx
  export async function generateMetadata(props: PageProps<'/shops/[slug]'>) {
    const { slug } = await props.params;
    const shop = shops.find((s) => s.slug === slug);
    return { title: shop ? shop.name : '없는 가게' };
  }
  ```

## 자주 막히는 곳
- 빌드에서 타입 오류 → 오류 메시지의 `파일:줄:칸` 부터 열어 그 줄의 타입(`undefined` 가능성, props 이름)을 살펴요
- `generateStaticParams` 에서 값 타입 오류 → 주소 값은 글자예요. 숫자 `id` 는 `String(id)` 로 바꿔 돌려줘요
- `lint` 만 실패 → 안 쓰는 import·변수가 남았는지 확인
