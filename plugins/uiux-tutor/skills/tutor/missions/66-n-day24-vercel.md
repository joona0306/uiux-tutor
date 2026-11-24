# 66. Day 24. Vercel 배포 — 미션 예시 (배포 ②)

## 배우기 재료
- 핵심 개념
  - **React Router → Next.js 대응**: `<Route path="/projects/:slug">` 는 `app/projects/[slug]/page.tsx` 폴더가 되고, `useParams()` 는 `await props.params`(+ `PageProps`), `to` 는 `href` 가 돼요.
  - **빌드로 점검하기**: `npm run build` 는 배포와 같은 방식으로 사이트를 만들어 보고 타입 오류도 잡아 줘요. 내 컴퓨터에서 통과해야 배포에서도 통과해요. `npm run lint` 도 함께 통과시켜요.
  - **GitHub → Vercel 자동 배포**: GitHub 저장소를 Vercel 에 연결해 두면 `git push` 할 때마다 새로 빌드해서 배포해요. 키 같은 비밀 값은 코드가 아니라 Vercel 설정의 환경 변수에 넣어요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `app/globals.css` 맨 아래에 더해요)
  ```css
  @theme {
    --color-brand: #0f766e;
  }
  ```
  아무 `page.tsx` 에 `<h1 className="text-brand">제목</h1>` 을 넣어 글자색이 바뀌는지 보고, 터미널에서 `npm run build` 와 `npm run lint` 를 차례로 쳐요.
- 예상해 보기: 상세 페이지에서 `await props.params` 의 `await` 를 지운 채 `npm run build` 를 하면? — 답: 타입 오류로 빌드가 멈춰요. 그래서 push 전에 로컬에서 먼저 빌드해 봐요.
- 공식 문서: [배포 (Next.js)](https://nextjs.org/docs/app/getting-started/deploying) · [테마 변수 (Tailwind CSS)](https://tailwindcss.com/docs/theme) · [환경 변수 (Next.js)](https://nextjs.org/docs/app/guides/environment-variables)

| 미션 | 할 일 | 완료 기준 |
|---|---|---|
| N24-1 기본 구조 | Next.js 클론이 내 컴퓨터에서 빌드되게 해요 | `npm run build` 오류 없음 / `npm run lint` 오류 없음 / `.env.local` 이 `.gitignore` 에 있음 |
| N24-2 개념 적용 | GitHub 저장소를 Vercel에 연결해 배포해요 | Vercel 배포 주소가 열림 / 상세 페이지 주소(동적 라우트)도 열림 / 환경 변수가 필요하면 Vercel 설정에 넣음(코드에 키 없음) |
| N24-3 응용 | 고쳐서 push하면 다시 배포되는 것을 확인하고 점검표를 채워요 | 작은 수정 커밋 → 새 배포가 생김 / deploy.md 점검 통과 / 없는 주소에서 404 화면 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- N24-1: 해당 없음 (빌드)
- N24-2: 해당 없음 (배포)
- N24-3: 해당 없음 (재배포·점검표)

## 힌트 재료
- 1단계: Next.js 배포 문서 — https://nextjs.org/docs/app/getting-started/deploying
- 2단계: 내 컴퓨터에서 `npm run build` 가 안 되면 Vercel에서도 안 돼요. 먼저 로컬 빌드를 통과시켜요.
- 3단계: 배포 실패 → Vercel의 Deployments → 실패한 배포 → Build Logs 맨 아래 빨간 줄부터 읽어요.

## 자주 막히는 곳
- 내 컴퓨터(Windows)에서는 되는데 배포에서 import 오류 → 파일 이름 대소문자 다름
