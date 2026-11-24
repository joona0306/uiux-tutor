# uiux-tutor — 클론코딩 UIUX 튜터

**따라 만들고 싶은 웹사이트를 고르면, AI 튜터가 그 사이트를 직접 열어 보고 한 단계씩 가르쳐 줘요.**

- HTML·CSS → Figma → JavaScript → Git → React → Next.js → 배포까지 **79개 회차**, 원하는 곳부터 시작해요.
- 정답을 바로 주지 않고 **힌트**를 줘요. 코드는 내가 직접 써요.
- 목표는 **원본과 똑같은 화면**. 처음엔 화면 하나, 나중엔 서비스 흐름 전체를 따라 만들어요.

```
배우기 → 미션 → 힌트 → "다음"(평가) → 보완 또는 다음 미션
```

---

## 1. 준비물

| 필요한 것 | 메모 |
|---|---|
| **Claude 유료 플랜(Pro 이상)** | 무료 플랜에는 Claude Code가 없어요 — [요금제](https://claude.com/pricing) |
| **Claude Code** | [설치 안내](https://code.claude.com/docs/en/setup) · Windows는 PowerShell에 `irm https://claude.ai/install.ps1 \| iex` |
| **VS Code** + 확장 **Live Server** | 내 코드를 보면서 튜터와 대화해요 |
| **Chrome** + 확장 **Claude in Chrome** | 튜터가 사이트를 직접 열어 봐요 |
| **Node.js LTS** (React부터) | [nodejs.org](https://nodejs.org) |

## 2. 설치 (처음 한 번)

터미널에 한 줄씩 입력하세요.

```bash
claude plugin marketplace add joona0306/uiux-tutor
```

```bash
claude plugin install uiux-tutor@uiux-tutor-market
```

그다음 Chrome 연동을 켜요: Chrome에 **Claude in Chrome** 설치·로그인 → Claude Code에서 `/chrome` → **Enabled by default** 켜기.

## 3. 시작하기

1. 공부할 폴더를 만들고 VS Code로 열어요. (예: `uiux-study`)
2. VS Code 터미널(`` Ctrl + ` ``)에서 `claude --chrome` 을 실행해요.
3. 처음 한 번만 `/uiux-tutor:setup` — 화면 아래에 진행률을 보여 주는 상태 줄을 넣어 줘요.
4. `/uiux-tutor:tutor 시작` — 튜터가 **어디부터 배울지**와 **따라 만들 사이트 주소**를 물어요.

> 💡 이미 공부하던 폴더에서 시작해도 돼요. 튜터가 내 코드를 읽어 보고 어느 회차부터 하면 좋을지 알려 줘요.
>
> 💡 다음 날에는 같은 폴더에서 `claude --chrome` → `상태` 라고 하면 이어서 할 수 있어요.

## 4. 이렇게 말하면 돼요

| 말 | 하는 일 |
|---|---|
| `배우기` | 지금 회차의 짧은 수업 |
| `힌트` | 막혔을 때. 부를수록 더 자세히 (1 → 3단계) |
| `다음` | 다 했을 때. 내 코드를 평가하고 다음 미션 |
| `상태` | 진행률, 덜 된 곳, 약한 곳 |
| `복습` | 약한 곳 위주로 3~5문제 |
| `정리` | 개념 노트를 `notes/` 폴더에 만들어 줘요 |
| `정답 보여 줘` | 정말 막혔을 때 (본 뒤 직접 다시 쳐야 통과) |
| `진도 바꾸기` · `사이트 바꾸기` | 범위나 사이트를 바꿔요 |

**하루 공부 예시**

```
나: /uiux-tutor:tutor 시작
튜터: 어디부터 배울까요? 따라 만들 사이트는요?
나: W13부터, https://korean.visitkorea.or.kr
튜터: (사이트를 열어 보고) 오늘은 [축제 목록]으로 grid를 배워요 … 미션 W13-1
나: (코드를 쓰고) 다음
튜터: ✅ grid는 부모에 / 🔧 원본은 한 줄 4장인데 내 페이지는 3장 … 고치고 다시 "다음"
```

## 5. 튜터는 이렇게 가르쳐요

- **원본과 똑같이** — 미션마다 "원본 닮음" 기준이 있어요. 튜터가 원본과 내 페이지를 같은 폭으로 열어 칸 수·순서·간격 같은 걸 비교해요. (사진·글은 원본 것을 쓰지 않아서 비교하지 않아요.)
- **화면 하나 → 흐름 전체** — HTML·CSS는 화면의 한 구역, JS는 메뉴 열림·빈 결과 같은 상태, React부터는 "목록 → 상세 → 찜" 같은 흐름 전체를 원본처럼 만들어요.
- **덜 된 곳은 알려 줘요** — 회차가 끝나면 원본처럼 됐는지 확인하고, 덜 된 곳이 있으면 마무리를 제안해요. 넘어갈지는 내가 정해요.
- **로그인·결제** — 로그인이 필요하면 **내가 직접** 가입·로그인하고, 튜터는 내가 허락한 화면만 봐요. 결제는 직전 화면까지만 보고, 내 클론에서는 테스트 결제(돈이 안 나가요)로 연습해요.

## 6. 상태 줄

`/uiux-tutor:setup` 을 하면 화면 아래에 이렇게 보여요.

```
📚 진행률 33% (2/6) · 구역 완성 3/11 · 흐름 완성 0/3 · 대화 42% · 5시간 23% · 주간 61%
```

- **진행률**: 끝낸 미션 / 계획한 미션
- **구역 · 흐름 완성**: 원본처럼 다 만든 구역·흐름 수
- **대화 · 5시간 · 주간**: Claude 사용량 (자세히는 `/usage`)

## 7. 배포

| 회차 | 도구 | 올리는 것 |
|---|---|---|
| 47 (Git) | GitHub Pages | HTML·CSS·JS 클론 |
| 66 (Next.js) | Vercel | Next.js 클론 |
| 75 (개인 실습) | Vercel | 완성한 클론 + README |

배포는 내가 직접 하고, 튜터는 순서를 알려 주고 주소를 열어 점검해요.

## 8. 업데이트 · 삭제

**업데이트** (다시 설치할 필요 없어요)

```bash
claude plugin update uiux-tutor@uiux-tutor-market
```

그다음 Claude Code를 다시 열어요. 자동으로 받고 싶으면 `/plugin` → **Marketplaces** → `uiux-tutor-market` → 자동 업데이트를 켜요. (개인이 만든 가게는 기본으로 꺼져 있어요.)

<details>
<summary>"이미 최신"이라는데 새 버전이 있을 것 같을 때 · 내 버전 확인</summary>

가게 목록을 먼저 새로 고친 뒤 업데이트 명령을 다시 실행하세요.

```bash
claude plugin marketplace update uiux-tutor-market
```

`claude plugin list` 의 `uiux-tutor` 버전이 아래 "바뀐 내용" 맨 위 버전과 같으면 최신이에요.
</details>

**끄기 · 삭제**

| 하고 싶은 것 | 명령 |
|---|---|
| 잠깐 끄기 / 켜기 | `claude plugin disable uiux-tutor` / `claude plugin enable uiux-tutor` |
| 삭제 | `claude plugin uninstall uiux-tutor` → `claude plugin marketplace remove uiux-tutor-market` |

> 업데이트하거나 삭제해도 공부 폴더의 진도(`.tutor/`)는 남아요. 상태 줄을 빼려면 `~/.claude/settings.json` 에서 `"statusLine"` 부분을 지우세요.

## 9. 자주 묻는 질문

**튜터가 사이트를 못 열어요.** → `claude --chrome` 으로 시작했는지, `/chrome` 에서 연동이 켜져 있는지 확인하세요. 그래도 안 되면 화면 캡처를 붙여 주세요.

**`/uiux-tutor:tutor` 가 안 보여요.** → `claude plugin list` 로 설치를 확인하고 Claude Code를 다시 여세요.

**튜터가 내 코드를 고쳐 주나요?** → 아니요. 평가만 하고 고치는 건 내가 해요. 그래야 실력이 늘어요.

**VS Code 오른쪽 Claude 채팅 창에서도 되나요?** → 플러그인은 돼요. 다만 상태 줄이 보이는지는 아직 확인하지 못했어요. 이 안내는 VS Code 터미널 기준이에요.

## 10. 꼭 지켜요

- 원본에서는 **구조와 배치만** 배워요. 사진·글·로고는 가져오지 않고, 이름은 가상 이름, 배포할 땐 "교육용 클론" 표시.
- 비밀번호·연락처·API 키는 튜터에게 말하지 않아요. 키는 `.env.local` 에 두고 git에는 올리지 않아요.
- 로그인한 화면에 보인 개인정보는 튜터가 어디에도 적지 않아요. 개인정보가 많은 화면은 가린 캡처로 보여 주세요.
- 결제는 테스트 환경에서만 해요.

---

의견이나 고칠 점은 이 저장소 **Issues** 에 남겨 주세요. 튜터 화면을 그대로 붙여 주면 가장 빨리 고칠 수 있어요.

<details>
<summary>바뀐 내용</summary>

| 버전 | 날짜 | 바뀐 것 |
|---|---|---|
| 0.7.0 | 2026-11-25 | 서비스 지도(화면 목록·유저플로우), 흐름 전체 클론, 로그인·테스트 결제, 프로젝트 1을 "똑같이 클론 → 개선"으로 |
| 0.6.0 | 2026-11-25 | 미션마다 "원본 닮음" 기준, 회차 끝 완성 확인, 상태 줄에 구역 완성 |
| 0.5.0 | 2026-11-25 | `복습`·`정리` |
| 0.4.0 | 2026-11-25 | 이미 공부하던 폴더 진단 |
| 0.3.0 | 2026-11-24 | 79개 회차 미션 완성 |
| 0.2.0 | 2026-11-24 | Chrome으로 사이트 확인, 배우기 단계, 배포 단계 |
| 0.1.0 | 2026-11-24 | 첫 버전 |
</details>

<details>
<summary>만든 사람을 위한 구조 설명</summary>

```
.claude-plugin/marketplace.json        마켓플레이스(uiux-tutor-market)
plugins/uiux-tutor/
├─ .claude-plugin/plugin.json          플러그인 정보(버전)
├─ .mcp.json                           보조 브라우저(Playwright MCP)
├─ scripts/statusline.ps1 · .sh        상태 줄
└─ skills/
   ├─ setup/SKILL.md                   설정 도우미
   └─ tutor/
      ├─ SKILL.md                      튜터 흐름
      ├─ curriculum.md                 79개 회차 목표·체크리스트
      ├─ missions/                     회차별 배우기 재료·미션·힌트·원본 닮음
      └─ standards.md · deploy.md · rubric.md · rules.md · progress-schema.md
```

튜터가 학습자 폴더에 쓰는 파일은 `.tutor/progress.json` 과 `notes/`(정리를 부탁했을 때)뿐이에요. 고친 뒤에는 `plugin.json` 의 `version` 을 올려야 사용자가 업데이트로 받아요.
</details>
