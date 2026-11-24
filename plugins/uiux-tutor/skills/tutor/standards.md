# 기준 버전과 표기 규칙

튜터가 설명·힌트·평가에 쓰는 기준이에요. 옛날 방식(예: React 클래스 컴포넌트, Next.js `pages/` 폴더)을 가르치지 않게 하는 약속이에요.

## 기준 버전 (npm 공개 버전, 2026-11-24 확인)

| 도구 | 버전 | 처음 쓰는 단원 |
|---|---|---|
| React | 19.3 | Day 11 |
| Vite (`npm create vite@latest`, react-ts) | 8.3 | Day 11 |
| TypeScript | 7.0 | Day 11 |
| React Router | 8.5 | Day 17 |
| Tailwind CSS | 4.3 | Day 19 |
| Next.js (`npx create-next-app@latest`) | 16.4 (App Router) | Day 21 |
| Node.js | LTS | Day 11 |

- 학습자 프로젝트의 실제 버전은 `package.json` 을 읽어 확인한다. 기준과 다르면 학습자 버전에 맞춰 설명하고, 확인하지 못한 동작은 "확인 못 함"이라고 말한다.
- 헷갈리면 공식 문서를 먼저 본다: MDN(HTML·CSS·JS), react.dev, nextjs.org/docs, tailwindcss.com/docs, typescriptlang.org.

## 표기 규칙 (강의와 같은 실무 표기)

| 대상 | 쓰는 표기 | 쓰지 않는 옛 표기 |
|---|---|---|
| 미디어쿼리 | `@media (width >= 640px)` | `@media (min-width: 640px)` |
| 반투명 색 | `rgb(0 0 0 / 8%)` | `rgba(0, 0, 0, 0.08)` |
| 브레이크포인트 | 640 · 768 · 1024 (목록 1 → 2 → 3열) | — |
| 화면 순서 | 모바일 먼저(좁은 화면 기본 → 넓어지면 더하기) | 데스크톱 먼저 |
| React 컴포넌트 | 함수 컴포넌트 + props 타입(`type`) | 클래스 컴포넌트, `React.FC` |
| 이벤트 타입 | `(e: React.ChangeEvent<HTMLInputElement>)` 처럼 필요한 곳만 | `any` |
| 주소 값 | `useParams<'id'>()` | — |
| Next.js | `app/` 폴더(App Router), 서버 컴포넌트 기본, 필요한 곳만 `'use client'` | `pages/` 폴더 |
| Tailwind 4 | CSS 파일의 `@import "tailwindcss";` 와 `@theme` 토큰 | `tailwind.config.js` 중심 설정 |
| 커밋 메시지 | `type: 무엇을` (feat, fix, docs, style, refactor) | — |
