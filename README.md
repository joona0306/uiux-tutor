# uiux-tutor — 클론코딩으로 배우는 UIUX 프론트엔드 튜터

따라 만들고 싶은 사이트를 고르면, 튜터가 **내 Chrome으로 원본 사이트를 직접 열어 보고** 진도에 맞는 수업과 미션을 줘요.
배우기(짧은 수업) → 미션 → 힌트 → "다음"이라고 하면 내가 쓴 코드를 평가하고, 부족하면 보완 과제를, 다 되면 다음 미션을 줘요. 단계마다 배포해서 주소로 보여 줄 수 있게 해요.

- 진도: HTML·CSS → Figma·UX → JavaScript → Git → React(TypeScript) → Next.js → 실무 준비 (79개 회차, `skills/tutor/curriculum.md`)
- 원하는 회차부터 시작할 수 있어요.
- 정답 코드는 "정답 보여 줘"라고 할 때만 줘요. 힌트는 1→2→3단계.
- 진행률(%)은 답할 때마다 맨 위에, 대화·5시간·주간 사용량은 화면 아래 상태 줄에 보여요(설정 필요).

## 준비물
- **Claude Code** — Claude Pro 이상 플랜 필요(무료 플랜에는 Claude Code가 없어요). 설치: https://code.claude.com/docs/en/setup
- **Chrome + Claude in Chrome 확장** — 튜터가 원본 사이트와 내 페이지를 직접 보는 데 써요. 확장을 설치하고 Claude Code에서 `/chrome` → Enabled by default(또는 `claude --chrome` 으로 시작).
- (보조) **Node.js 20 이상** — Chrome 연동이 안 될 때 쓰는 자동 브라우저(Playwright)용. React 단원부터는 어차피 필요해요.

## 설치
터미널에서:

```bash
claude plugin marketplace add <GitHub-아이디>/uiux-tutor
claude plugin install uiux-tutor@uiux-tutor-market
```

또는 Claude Code 안에서 `/plugin marketplace add <GitHub-아이디>/uiux-tutor` → `/plugin install uiux-tutor@uiux-tutor-market`.

## 처음 한 번
학습할 폴더를 만들고 그 폴더에서 Claude Code를 연 뒤:

```text
/uiux-tutor:setup
```

브라우저 도구를 확인하고, 상태 줄(진행률·사용량)을 넣을지 물어봐요.

## 쓰는 법

| 입력 | 하는 일 |
|---|---|
| `/uiux-tutor:tutor 시작` | 진도 고르기 → 준비 확인 → 사이트 고르기 → 배우기 → 첫 미션 |
| `배우기` | 지금 회차의 짧은 수업(개념 설명 + 작은 따라 치기 + 예상해 보기) |
| `힌트` | 지금 미션의 힌트(부를 때마다 더 구체적으로) |
| `다음` | 내 코드를 평가하고 보완 과제 또는 다음 미션 |
| `상태` | 진행률, 지금 미션, 최근 피드백, 약한 곳·복습 추천, 배포 주소 |
| `정답 보여 줘` | 정답 예시와 설명(그 뒤 다시 직접 쳐야 통과) |
| `진도 바꾸기` · `사이트 바꾸기` | 범위나 사이트를 바꿔요 |

진도는 학습 폴더의 `.tutor/progress.json` 에 저장돼요. 다음에 같은 폴더에서 열면 이어져요.

## 배포 — 단계마다 주소로 보여 줘요

| 진도 | 도구 | 올리는 것 |
|---|---|---|
| Day 10 GitHub | GitHub Pages | HTML·CSS·JS 클론 |
| Day 24 | Vercel | Next.js로 옮긴 클론 |
| R05 개인 실습 | Vercel | 완성한 클론 + README (포트폴리오) |

배포는 내가 직접 해요. 튜터는 순서를 알려 주고, 배포 주소를 열어 점검표(원본 사진·글 없음, "교육용" 표시, 비밀 키 없음 등)로 평가해요.

## 업데이트 · 삭제
- 업데이트는 다시 설치할 필요 없어요: `claude plugin update uiux-tutor@uiux-tutor-market`
- 자동으로 받으려면: Claude Code에서 `/plugin` → Marketplaces 탭 → `uiux-tutor-market` 자동 업데이트 켜기(개인 마켓플레이스는 기본 꺼짐)
- 잠깐 끄기: `claude plugin disable uiux-tutor` / 다시 켜기: `claude plugin enable uiux-tutor`
- 삭제: `claude plugin uninstall uiux-tutor` → 마켓플레이스까지 지우려면 `claude plugin marketplace remove uiux-tutor-market`
- 진도 파일(학습 폴더의 `.tutor/`)은 삭제해도 남아 있어요. 다시 설치하면 이어서 할 수 있어요.

## 규칙
- 원본 사이트의 사진·글·로고는 가져오지 않아요. 구조와 배치만 배워요(`skills/tutor/rules.md`).
- 튜터는 내 파일을 고치지 않아요. 평가만 해요.
