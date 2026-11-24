# uiux-tutor — 클론코딩으로 배우는 UIUX 프론트엔드 튜터

**따라 만들고 싶은 웹사이트를 고르면, AI 튜터가 그 사이트를 직접 열어 보고 한 단계씩 가르쳐 줘요.**

HTML·CSS부터 Figma, JavaScript, Git, React(TypeScript), Next.js, 배포까지 **79개 회차**를 원하는 곳부터 배울 수 있어요. 비전공자를 위해 쉬운 말로 설명하고, 정답을 바로 주는 대신 **힌트를 주며 내가 직접 만들게** 도와줘요.

```
배우기(짧은 수업) → 미션 → 힌트 → "다음"(내 코드 평가) → 보완하거나 다음 미션
```

---

## 1. 준비물

| 필요한 것 | 왜 | 어디서 |
|---|---|---|
| **Claude 유료 플랜(Pro 이상)** | 튜터가 Claude Code 안에서 동작해요. 무료 플랜에는 Claude Code가 없어요 | https://claude.com/pricing |
| **Claude Code** | 튜터를 실행하는 프로그램 | https://code.claude.com/docs/en/setup |
| **VS Code** | 내 코드를 보면서 튜터와 대화해요 | https://code.visualstudio.com |
| **Chrome + Claude in Chrome 확장** | 튜터가 원본 사이트와 내 페이지를 직접 열어 봐요 | Chrome 웹 스토어에서 "Claude in Chrome" |
| VS Code 확장 **Live Server** | 내 HTML을 브라우저 주소로 열어요 | VS Code 확장 탭에서 "Live Server" |
| (React부터) **Node.js LTS** | React·Next.js 프로젝트를 만들 때 필요해요 | https://nodejs.org |

> 💡 Windows PowerShell에서 Claude Code 설치: `irm https://claude.ai/install.ps1 | iex` → **새 터미널**을 열고 `claude --version` 으로 확인 → `claude` 를 실행해 로그인.

---

## 2. 설치 (처음 한 번)

터미널(PowerShell 또는 VS Code 터미널)에 **한 줄씩** 붙여 넣으세요.

```bash
claude plugin marketplace add joona0306/uiux-tutor
```

```bash
claude plugin install uiux-tutor@uiux-tutor-market
```

`claude plugin list` 에 `uiux-tutor` 가 보이면 설치 끝이에요.

### Chrome 연동 켜기 (처음 한 번)
1. Chrome에 **Claude in Chrome** 확장을 설치하고 Claude 계정으로 로그인해요.
2. Claude Code를 열고 `/chrome` 을 입력 → **Enabled by default** 를 켜요.

---

## 3. 시작하기 — VS Code에서 쓰는 법 (권장)

1. 공부할 빈 폴더를 만들어요. 예: `uiux-study`
2. VS Code에서 **File → Open Folder** 로 그 폴더를 열어요.
3. VS Code 아래 터미널을 열고(`` Ctrl + ` ``) 입력해요.

   ```bash
   claude --chrome
   ```

4. 처음 한 번만 설정 도우미를 실행해요. 진행률·사용량을 보여 주는 **상태 줄**을 넣을지 물어봐요.

   ```text
   /uiux-tutor:setup
   ```

5. 튜터를 시작해요.

   ```text
   /uiux-tutor:tutor 시작
   ```

6. 튜터가 묻는 대로 답하면 돼요.
   - **어디부터 배울지**: "처음부터", "W13 Grid부터", "React부터" 등
   - **따라 만들 사이트 주소**: 예) `https://korean.visitkorea.or.kr`

   튜터가 Chrome으로 그 사이트를 열어 **구역 지도**를 만들고, 첫 수업과 미션을 줘요.

> 왼쪽에는 내 코드, 아래에는 튜터 — 한 화면에서 보면서 공부할 수 있어요.

---

## 4. 이렇게 말하면 돼요

| 입력 | 하는 일 |
|---|---|
| `/uiux-tutor:tutor 시작` | 처음 시작 (진도 고르기 → 사이트 고르기 → 배우기 → 첫 미션) |
| `배우기` | 지금 회차의 짧은 수업 (개념 설명 + 작은 예제 직접 치기 + 예상해 보기) |
| `힌트` | 막혔을 때. 부를 때마다 더 구체적으로 (1 → 2 → 3단계) |
| `다음` | 미션을 다 했으면. 내 코드를 평가하고 부족하면 보완 과제, 다 되면 다음 미션 |
| `상태` | 진행률, 지금 미션, 최근 피드백, 약한 곳·복습 추천, 배포 주소 |
| `정답 보여 줘` | 정말 막혔을 때. 정답을 보여 주고 설명해요 (그 뒤 **직접 다시 쳐야** 통과) |
| `진도 바꾸기` / `사이트 바꾸기` | 배우는 범위나 따라 만드는 사이트를 바꿔요 |

> 다음 날 이어서 할 때는 같은 폴더에서 `claude --chrome` 을 열고 `상태` 라고 하면 돼요. 진도는 폴더의 `.tutor/progress.json` 에 저장돼 있어요.

### 하루 공부 예시
```
나: /uiux-tutor:tutor 시작
튜터: 어디부터 배울까요? 따라 만들 사이트는요?
나: W13부터, https://korean.visitkorea.or.kr
튜터: (사이트를 열어 보고) 구역 지도예요 … 오늘은 [축제 목록]으로 grid를 배워요. (배우기 시작)
나: (예제를 직접 쳐 보고) 됐어요
튜터: 미션 W13-1 「축제 카드 목록을 3열 바둑판으로」 완료 기준: …
나: 힌트
튜터: 1단계 힌트: …
나: (코드를 쓰고) 다음
튜터: 평가표 — ✅ … 🔧 style.css:8 간격을 margin으로 줬어요 … 고치고 다시 "다음"
```

---

## 5. 진행률과 사용량 보기

`/uiux-tutor:setup` 으로 상태 줄을 넣으면 화면 아래에 이렇게 보여요.

```
📚 진행률 33% (2/6) · 대화 42% · 5시간 23% · 주간 61%
```

- **진행률**: 이 폴더에서 끝낸 미션 수 / 계획한 미션 수
- **대화**: 지금 대화창이 얼마나 찼는지
- **5시간 · 주간**: Claude 플랜 사용 한도 (Pro 이상, 첫 응답 뒤에 보여요)
- 자세한 사용량은 언제든 `/usage`

튜터도 답할 때마다 맨 위에 진행률을 한 줄로 보여 줘요.

---

## 6. 배포 — 만든 사이트를 주소로 보여 주기

| 진도 | 도구 | 올리는 것 |
|---|---|---|
| Day 10 GitHub | **GitHub Pages** | HTML·CSS·JS 클론 |
| Day 24 | **Vercel** | Next.js로 옮긴 클론 |
| R05 개인 실습 | Vercel | 완성한 클론 + README (포트폴리오) |

배포는 내가 직접 해요. 튜터는 순서를 알려 주고, 배포 주소를 열어 점검해요(원본 사진·글 없음, "교육용" 표시, 비밀 키 없음 등).

---

## 7. 업데이트 · 끄기 · 삭제

| 하고 싶은 것 | 명령 |
|---|---|
| 새 버전 받기 | `claude plugin update uiux-tutor@uiux-tutor-market` |
| 자동으로 받기 | Claude Code에서 `/plugin` → **Marketplaces** 탭 → `uiux-tutor-market` 자동 업데이트 켜기 |
| 잠깐 끄기 / 다시 켜기 | `claude plugin disable uiux-tutor` / `claude plugin enable uiux-tutor` |
| 삭제 | `claude plugin uninstall uiux-tutor` 그다음 `claude plugin marketplace remove uiux-tutor-market` |

> 삭제해도 공부 폴더의 진도(`.tutor/`)는 남아요. 다시 설치하면 이어서 할 수 있어요.
> 상태 줄을 빼려면 `~/.claude/settings.json` 에서 `"statusLine"` 부분을 지우세요.

---

## 8. 자주 묻는 질문

**Q. 튜터가 사이트를 못 열어요 / "서비스 지연" 같은 화면만 나와요.**
Chrome 연동이 꺼져 있을 가능성이 커요. `claude --chrome` 으로 시작했는지, `/chrome` 에서 연동이 켜져 있는지 확인하세요. 그래도 안 되면 사이트 화면 캡처를 붙여 주면 튜터가 캡처로 분석해요.

**Q. `/uiux-tutor:tutor` 가 안 보여요.**
`claude plugin list` 로 설치됐는지 확인하고, Claude Code를 다시 시작하세요.

**Q. 무료 플랜인데 쓸 수 있나요?**
Claude Code가 유료 플랜(Pro 이상)에서만 동작해서 이 튜터도 유료 플랜이 필요해요.

**Q. 튜터가 내 코드를 고쳐 주나요?**
아니요. 평가만 하고, 고치는 것은 직접 해요. 그래야 실력이 늘어요.

**Q. VS Code 오른쪽 Claude 채팅 창(확장)에서도 되나요?**
플러그인을 설치했다면 돼요. 다만 상태 줄이 보이는지는 확인하지 못했어요. 이 README는 **VS Code 터미널에서 `claude --chrome`** 으로 쓰는 방법을 기준으로 해요.

---

## 9. 규칙 — 저작권과 개인정보

- 원본 사이트에서는 **구조와 배치만** 배워요. 사진·글·로고는 가져오지 않고, 자리 표시 사진과 직접 쓴 글로 채워요.
- 사이트·저장소 이름은 가상의 이름으로, 배포할 때는 "교육용 클론" 표시를 해요.
- 이름·연락처·비밀번호·API 키는 튜터에게 말하지 않아요. 키는 `.env.local` 에, git에는 올리지 않아요.

---

## 10. 의견 · 개선 요청

쓰다가 이상하거나 더 좋아질 곳이 있으면 이 저장소의 **Issues** 에 남겨 주세요. 튜터 화면을 그대로 복사해 붙여 주면 가장 빨리 고칠 수 있어요.

<details>
<summary>만든 사람을 위한 구조 설명</summary>

```
.claude-plugin/marketplace.json        마켓플레이스(uiux-tutor-market)
plugins/uiux-tutor/
├─ .claude-plugin/plugin.json          플러그인 정보(버전)
├─ .mcp.json                           보조 브라우저(Playwright MCP)
├─ scripts/statusline.ps1 · .sh         상태 줄
└─ skills/
   ├─ setup/SKILL.md                   설정 도우미
   └─ tutor/
      ├─ SKILL.md                      튜터 흐름
      ├─ curriculum.md                 79개 회차 목표·체크리스트
      ├─ missions/                     회차별 배우기 재료·미션·힌트
      └─ standards.md · deploy.md · rubric.md · rules.md · progress-schema.md
```

고친 뒤에는 `plugins/uiux-tutor/.claude-plugin/plugin.json` 의 `version` 을 올려야 사용자가 `update` 로 받아요.
</details>
