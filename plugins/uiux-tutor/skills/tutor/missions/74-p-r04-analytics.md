# 74. R04. 운영 데이터 (GA4 이벤트) — 미션 예시

## 배우기 재료
- 핵심 개념
  - **계정 → 속성 → 데이터 스트림 → 측정 ID**: Figma 의 팀 → 프로젝트 → 파일처럼 상자 안에 상자예요. 코드에 넣는 값은 웹 스트림의 측정 ID(`G-…`)이고, `.env.local` 의 `NEXT_PUBLIC_GA_ID` 에 두어요. Vercel 에도 같은 이름으로 넣고 **다시 배포**해야 적용돼요.
  - **이벤트 보내기**: 페이지 조회는 자동이지만 "버튼을 눌렀다"는 직접 보내요. `sendGAEvent('event', '이름', { 매개변수: 값 })`. 이름은 영어 소문자와 밑줄(`open_guide`).
  - **개인정보 넣지 않기**: 이름·이메일·전화번호를 이벤트 이름·매개변수·주소(URL)에 넣지 않아요. 개인정보 처리방침 페이지와 링크도 배포 전에 만들어요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. 클릭 함수 안에 한 줄만 더해요)
  ```tsx
  import { sendGAEvent } from '@next/third-parties/google';

  function handleClick() {
    sendGAEvent('event', 'click_sample', { button_name: 'practice' });
  }
  ```
  버튼에 `onClick={handleClick}` 을 달고, 눌러 본 뒤 콘솔에 `window.dataLayer` 를 쳐요.
- 예상해 보기: `onClick={handleClick}` 을 `onClick={handleClick()}` 로 쓰면? — 답: 화면을 그리는 순간 함수가 실행돼 이벤트가 클릭과 상관없이 먼저 가요. 함수 **이름만** 넘겨요.
- 공식 문서: [Third Party Libraries (Next.js)](https://nextjs.org/docs/app/guides/third-party-libraries) · [GA4 이벤트 (Google)](https://developers.google.com/analytics/devguides/collection/ga4/events)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| P04-1 기본 구조 | GA4 속성·웹 스트림을 만들고 측정 ID 를 코드에 연결해요 | 측정 ID 가 `.env.local` 의 `NEXT_PUBLIC_GA_ID` 에 있고 코드에는 직접 적혀 있지 않음 / `app/layout.tsx` 에 `GoogleAnalytics` 가 `gaId &&` 조건으로 있음 / `.env.local` 이 `git status` 에 안 보임 |
| P04-2 개념 적용 | 고른 사이트의 주요 버튼 구역(예: 상세 구역의 "안내 열기"·"링크 복사")에 이벤트 2개를 심어요 | 이벤트 이름이 영어 소문자+밑줄(`동사_대상`) / 클릭하면 콘솔 `window.dataLayer` 끝에 `['event', '이름', {…}]` 가 생김 / 매개변수·URL 에 이름·이메일·전화번호가 없음(주석으로 이유 한 줄) |
| P04-3 응용 | 개인정보 처리방침 페이지·링크를 두고, 배포한 뒤 GA4 실시간 보고서에서 이벤트를 확인하고 개선안을 써요 | 처리방침 페이지와 푸터 링크가 있음 / 배포 주소에서 누른 뒤 실시간 보고서(지난 30분) 이벤트 카드에 내 이벤트 이름이 보이는 캡처 / 개선안이 "숫자 + 관찰 → 추측한 이유 → 작은 개선 → 다시 확인할 이벤트" 순서 / deploy.md 점검표 통과 |

## 힌트 재료
- 1단계: Next.js Third Party Libraries — https://nextjs.org/docs/app/guides/third-party-libraries , GA4 이벤트 — https://developers.google.com/analytics/devguides/collection/ga4/events
- 2단계: 클릭 함수 안에서 `sendGAEvent` 를 불러요. 복사 같은 동작은 **성공했을 때만** 보내요. Vercel 에 환경 변수를 넣은 뒤에는 새로 배포해야 측정 ID 가 들어가요. 실시간 보고서는 지난 30분만 보여서 확인하고 바로 캡처해요.
- 3단계 예시(다른 이름·다른 값):
  ```tsx
  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href);
    sendGAEvent('event', 'copy_link', { page_path: window.location.pathname });
  }
  ```

## 자주 막히는 곳
- 실시간 보고서에 안 뜸 → Vercel 에 환경 변수를 넣고 다시 배포하지 않았거나, 광고 차단 확장이 켜져 있어요(시크릿 창으로)
- 이벤트 이름이 `Open Guide` → 띄어쓰기·대문자는 피해요. 대소문자도 구분돼서 `open_guide` ≠ `Open_Guide`
- 매개변수에 `window.location.href` 전체를 넣음 → 주소에 `?email=…` 가 붙으면 개인정보가 새요. 경로(`pathname`)만 보내요
