# 66. Day 24. Vercel 배포 — 미션 예시 (배포 ②)

| 미션 | 할 일 | 완료 기준 |
|---|---|---|
| N24-1 기본 구조 | Next.js 클론이 내 컴퓨터에서 빌드되게 해요 | `npm run build` 오류 없음 / `npm run lint` 오류 없음 / `.env.local` 이 `.gitignore` 에 있음 |
| N24-2 개념 적용 | GitHub 저장소를 Vercel에 연결해 배포해요 | Vercel 배포 주소가 열림 / 상세 페이지 주소(동적 라우트)도 열림 / 환경 변수가 필요하면 Vercel 설정에 넣음(코드에 키 없음) |
| N24-3 응용 | 고쳐서 push하면 다시 배포되는 것을 확인하고 점검표를 채워요 | 작은 수정 커밋 → 새 배포가 생김 / deploy.md 점검 통과 / 없는 주소에서 404 화면 |

## 힌트 재료
- 1단계: Next.js 배포 문서 — https://nextjs.org/docs/app/getting-started/deploying
- 2단계: 내 컴퓨터에서 `npm run build` 가 안 되면 Vercel에서도 안 돼요. 먼저 로컬 빌드를 통과시켜요.
- 3단계: 배포 실패 → Vercel의 Deployments → 실패한 배포 → Build Logs 맨 아래 빨간 줄부터 읽어요.

## 자주 막히는 곳
- 내 컴퓨터(Windows)에서는 되는데 배포에서 import 오류 → 파일 이름 대소문자 다름
