# 61. Day 20. 미니 프로젝트 — 나의 포트폴리오 사이트 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **설계 먼저**: Figma 에서 픽셀 전에 화면 목록을 정하듯, 코드 전에 사이트맵(화면 목록)·주소 표·컴포넌트 목록·데이터 모양을 적어요. 두 곳 이상에서 쓰는 모양은 컴포넌트로 만들어요.
  - **목록 → 상세**: `/projects` 의 카드를 누르면 `/projects/:slug` 로 가요. `slug` 는 주소에 쓰는 영문 이름(`cafe-app`)이고, `useParams<'slug'>()` 와 `find` 로 데이터를 찾아요. 없으면 안내 문구를 보여 줘요.
  - **타입이 지켜 주는 것**: `type Project = { slug: string; title: string; ... }` 와 `projects: Project[]` 로 데이터 필드 이름 오타·빠진 값을 TS 가 알려 줘요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요 — 데이터 모양과 목록 → 상세 주소 한 쌍)
  ```tsx
  type Project = { slug: string; title: string; summary: string; tags: string[] };

  export const projects: Project[] = [
    { slug: 'cafe-app', title: '카페 앱', summary: '주문 화면 디자인', tags: ['모바일'] },
    { slug: 'trip-web', title: '여행 웹', summary: '검색 화면 디자인', tags: ['웹'] },
  ];

  // 목록 카드: <Link to={'/projects/' + p.slug}>{p.title}</Link>
  // 상세:      const { slug } = useParams<'slug'>(); const p = projects.find((x) => x.slug === slug);
  ```
- 예상해 보기: `projects` 의 한 항목에서 `summary` 를 빼먹으면 `npm run build` 는 어떻게 될까요? — 답: `Property 'summary' is missing`(`TS2741`) 오류로 멈춰요. 필드 이름을 `sumary` 로 오타 내도 같은 종류의 오류가 나요.
- 공식 문서: [React 로 사고하기 (React)](https://ko.react.dev/learn/thinking-in-react) · [Vite 로 Tailwind 설치 (Tailwind)](https://tailwindcss.com/docs/installation/using-vite) · [저장소 퀵스타트 (GitHub Docs)](https://docs.github.com/ko/repositories/creating-and-managing-repositories/quickstart-for-repositories)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| R20-1 기본 구조 | 고른 사이트의 구조(홈·목록·상세·소개)를 본떠, 내 포트폴리오 사이트의 설계 노트를 먼저 써요(내용은 가상 프로젝트 3개) | `docs/design.md` 에 사이트맵·주소 표·컴포넌트 목록 / 주소 5개(`/`, `/about`, `/projects`, `/projects/:slug`, `*`) / 두 곳 이상에서 쓰는 컴포넌트(예: `ProjectCard`)를 표시 / `Project` 타입 필드 6개(`slug`·`title`·`summary`·`tags`·`thumbnail`·`description`) |
| R20-2 개념 적용 | 설계대로 Vite + React Router + Tailwind 프로젝트를 혼자 만들어요: Layout(머리글+`Outlet`), 홈·소개·목록·상세·404 | `/`, `/about`, `/projects`, `/projects/cafe-app` 같은 상세 주소가 모두 열림 / `/projects/hello` 는 프로젝트 없음 안내, `/hello` 는 404 / `ProjectCard` 를 홈과 목록 두 페이지에서 씀 / 모든 이동이 새로고침 없음(`<a href>` 없음) |
| R20-3 응용 | 최종 점검 후 GitHub 에 올려요(가상 저장소 이름, 사진은 자리 표시) | 375px 에서 가로 스크롤 없음, 1280px 에서 내용이 너무 넓게 퍼지지 않음 / 모든 `<img>` 에 `alt`, Console 에 빨간 오류·`key` 경고 없음 / `npm run build` 와 `npm run lint` 오류 없음 / GitHub 저장소에 `feat: …` 형식 커밋과 README(만든 것·실행 방법) |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- R20-1: 설계 노트의 화면 구조(홈·목록·상세·소개)가 원본 구조와 대응함
- R20-2: 해당 없음 (내 포트폴리오)
- R20-3: 해당 없음 (점검·올리기)

## 힌트 재료
- 1단계: React 공식 문서 "React 로 사고하기" — https://ko.react.dev/learn/thinking-in-react
- 2단계: 화면 → 주소 → 컴포넌트 → 데이터 순으로 설계해요. 구현은 설치 → 데이터 → 라우트·Layout → 목록 → 상세 → 홈·소개 → 404 순서로 한 단계씩 확인하며 가요.
- 3단계 예시(다른 이름·다른 값):
  ```tsx
  const { slug } = useParams<'slug'>();
  const work = works.find((w) => w.slug === slug);
  if (!work) return <p>그런 작품은 없어요</p>;
  return <article><h1>{work.title}</h1><p>{work.description}</p></article>;
  ```

## 자주 막히는 곳
- 상세 페이지의 일부 칸이 비어 있음 → 데이터에서 필드를 빼먹었거나 이름이 달라요. `npm run build` 의 `TS2741`·`TS2339` 오류가 알려 줘요
- 카드와 상세의 `slug` 가 달라 "없어요"가 나옴 → 데이터의 `slug` 글자와 `Link` 주소를 글자 하나씩 비교해요
- 한 컴포넌트에 코드가 너무 길어짐 → 두 곳 이상에서 쓰는 모양은 `ProjectCard` 처럼 컴포넌트로 빼요
