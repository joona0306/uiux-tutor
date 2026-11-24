# 57. Day 17. React Router — 미션 예시

## 배우기 재료
- 핵심 개념
  - **라우트**: 주소마다 다른 페이지 컴포넌트를 보여 줘요. `<Routes>` 안에 `<Route path="/about" element={<AboutPage />} />` 를 늘어놓고, `main.tsx` 에서 `<BrowserRouter>` 로 앱을 감싸요. 앱 안 이동은 `<a>` 대신 `<Link>`/`<NavLink>`(새로고침 없음, `NavLink` 는 지금 메뉴를 표시). 모든 페이지에 같은 머리글을 넣을 때는 Layout 안에 `<Outlet />` 을 둬요. Figma 의 페이지 프레임들이 주소로 이어진 것과 비슷해요.
  - **상세 페이지**: `/items/:id` 의 `:id` 는 바뀌는 자리예요. `useParams<'id'>()` 로 꺼내면 `string | undefined` 라서 `Number(id)` 로 바꾸고, `find` 결과가 없으면 `if (!item)` 으로 안내를 돌려보내요. 그 밖의 주소는 `path="*"` 로 404.
  - **Context**: 여러 페이지가 쓰는 값(담은 개수)을 props 로 여러 층 내리지 않고 `createContext<... | null>(null)` + `CartProvider` + `useCart` 훅으로 나눠 줘요. 한 화면 안의 값(모달 열림)은 `useState` 로 충분해요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. 먼저 `npm i react-router` 를 하고, `main.tsx` 의 `<App />` 을 `<BrowserRouter>` 로 감싸요)
  ```tsx
  import { Routes, Route, Link, useParams } from 'react-router';

  function Hi() {
    const { name } = useParams<'name'>();
    return <p>안녕, {name}</p>;
  }

  function App() {
    return (
      <>
        <Link to="/hi/모모">모모</Link>
        <Routes>
          <Route path="/hi/:name" element={<Hi />} />
          <Route path="*" element={<p>없는 페이지예요</p>} />
        </Routes>
      </>
    );
  }
  export default App;
  ```
- 예상해 보기: 상품 `id` 가 숫자인 배열에서 `const { id } = useParams<'id'>();` 후 `items.find((i) => i.id === id)` 를 쓰고 `npm run build` 를 치면? — 답: 숫자와 `string | undefined` 를 비교해서 `TS2367`(두 타입이 겹치지 않는 비교) 오류가 나요. `Number(id)` 로 바꿔 비교해요.
- 공식 문서: [Context 로 데이터 깊숙이 전달하기 (React)](https://ko.react.dev/learn/passing-data-deeply-with-context) · [createContext (React)](https://ko.react.dev/reference/react/createContext) · [useContext (React)](https://ko.react.dev/reference/react/useContext) · [History API (MDN)](https://developer.mozilla.org/ko/docs/Web/API/History_API)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| R17-1 기본 구조 | 고른 사이트의 [목록 화면]과 [소개 화면]을 두 페이지로 나누고, 모든 페이지에 같은 머리글(메뉴)을 넣어요 | `npm i react-router` 후 `package.json` 에 `react-router` / `main.tsx` 에서 `<BrowserRouter>` 로 감쌈 / 머리글이 Layout + `<Outlet />` 로 한 번만 정의됨 / `NavLink` 로 지금 메뉴가 구별되고 이동에 새로고침이 없음 |
| R17-2 개념 적용 | 카드를 누르면 `/items/:id` 상세 페이지로 가요. 없는 번호와 없는 주소도 처리해요 | `useParams<'id'>()` 와 `Number(id)` / `if (!item)` 으로 "없어요" 안내(`/items/999`) / `path="*"` 404 페이지(`/hello`) / 카드의 하트 버튼은 `Link` 밖에 있어 눌러도 이동 안 함 |
| R17-3 응용 | 담은(찜한) 개수를 Context 로 만들어 머리글·목록·상세에서 같은 숫자를 보여 줘요 | `CartContext` 가 `createContext<... \| null>(null)` / `useCart` 에서 `null` 이면 `throw` / `main.tsx` 에서 `CartProvider` 로 감쌈 / `npm run build` 와 `npm run lint` 오류 없음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- R17-1: 머리글 메뉴 구성(항목 순서)이 원본과 같음
- R17-2: 상세 화면 구성(사진·제목·설명 순서)이 원본 상세와 같음
- R17-3: 해당 없음 (Context 연습)

## 힌트 재료
- 1단계: React Router 공식 문서 "Routing" — https://reactrouter.com/start/declarative/routing
  (참고) React 공식 문서 "Context 로 데이터 깊숙이 전달하기" — https://ko.react.dev/learn/passing-data-deeply-with-context (React Router 는 `Routes`·`Route`·`Link`·`NavLink`·`Outlet`·`useParams` 이름으로 강의 Day 17 에서 찾아요)
- 2단계: `App.tsx` 에 `<Route element={<Layout />}>` 로 감싼 안쪽에 페이지 Route 들을 둬요. 카드 전체를 `<Link>` 로 감싸고 `to` 에 템플릿 리터럴로 `/items/번호` 주소를 만들어요. 하트 버튼은 `Link` 바깥에 둬요. Context 는 값 정의 파일, Provider 파일, `useCart` 훅을 나눠요.
- 3단계 예시(다른 이름·다른 값):
  ```tsx
  const { slug } = useParams<'slug'>();
  const place = places.find((p) => p.slug === slug);
  if (!place) return <p>그런 장소는 없어요</p>;
  return <h1>{place.name}</h1>;
  ```

## 자주 막히는 곳
- 화면이 하얗고 "useRoutes() may be used only in the context of a <Router>" → `main.tsx` 에서 `<BrowserRouter>` 로 감싸지 않았어요
- 새로고침하면 새 페이지가 열리고 담은 개수가 사라짐 → `<a href>` 를 썼어요. 앱 안 이동은 `<Link to>`
- 상세 페이지가 늘 "없어요" → `useParams` 값은 글자예요. `Number(id)` 로 바꿔 비교해요(`TS2367` 도 같은 원인)
