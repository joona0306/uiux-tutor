---
name: setup
description: uiux-tutor 처음 설정 — 사이트를 직접 보는 브라우저 도구(Node) 확인, 진행률·사용량을 보여 주는 상태 줄 설치
disable-model-invocation: true
---

# uiux-tutor 설정 도우미

학습자 컴퓨터를 **확인하고, 바꾸기 전에 꼭 물어본다.** 학습자가 "예"라고 한 것만 한다.

## 1. 브라우저 도구(원본 사이트 보기) 확인
1. `node -v` 를 실행한다.
   - 결과가 없거나 v20보다 낮으면: "원본 사이트를 직접 열어 보려면 Node.js 20 이상이 필요해요. https://nodejs.org 에서 LTS를 설치한 뒤 Claude Code를 다시 시작하세요. 그전까지는 사이트 화면 캡처를 붙여 주시면 돼요."라고 안내하고 2로 간다(설치는 학습자가 직접).
2. 학습자에게 `/mcp` 를 입력해 `plugin:uiux-tutor:playwright` 가 연결됐는지 보게 한다. 연결 안 됨이면 오류 문구를 그대로 붙여 달라고 하고, 읽은 내용으로 원인을 설명한다(추측하지 않는다).

## 2. 상태 줄 설치 (진행률 · 대화 사용량 · 5시간·주간 사용량)
상태 줄은 Claude Code 화면 아래 한 줄이다. 공식 문서상 **사용자 설정 파일**에 넣어야 해서, 아래 순서로 **학습자 허락을 받고** 넣는다.

1. 운영체제를 확인한다.
2. 스크립트를 고정된 곳으로 복사한다(플러그인 폴더는 업데이트마다 바뀌기 때문).
   - Windows: `${CLAUDE_PLUGIN_ROOT}/scripts/statusline.ps1` → `%USERPROFILE%\.claude\uiux-tutor\statusline.ps1`
   - macOS·Linux: `${CLAUDE_PLUGIN_ROOT}/scripts/statusline.sh` → `~/.claude/uiux-tutor/statusline.sh` (실행 권한 `chmod +x`, `jq` 필요 — 없으면 설치 방법만 안내)
3. 사용자 설정 파일(`~/.claude/settings.json`)을 읽는다.
   - 이미 `statusLine` 이 있으면 **바꾸지 않는다.** 지금 값을 보여 주고 바꿀지 묻는다.
4. 넣을 내용을 먼저 보여 주고 "이 설정을 넣을까요?"라고 묻는다. Windows 예(경로는 슬래시 `/`, 사용자 폴더는 실제 경로로):

```json
"statusLine": {
  "type": "command",
  "command": "powershell -NoProfile -ExecutionPolicy Bypass -File C:/Users/<사용자>/.claude/uiux-tutor/statusline.ps1"
}
```

   macOS·Linux 예: `"command": "~/.claude/uiux-tutor/statusline.sh"`
5. "예"면: 설정 파일을 `settings.json.bak` 으로 먼저 복사해 두고, `statusLine` 만 더한다. JSON이 깨지지 않았는지 다시 읽어 확인한다.
6. 안내한다:
   - Claude Code를 다시 시작하면 아래에 `📚 진행률 33% (2/6) · 대화 42% · 5시간 23% · 주간 61%` 처럼 보여요.
   - **진행률**은 이 폴더의 `.tutor/progress.json` 으로 계산해요(튜터를 시작한 폴더에서 보여요).
   - **대화**는 지금 대화창이 얼마나 찼는지, **5시간·주간**은 플랜 사용 한도예요. 5시간·주간은 Claude Pro·Max·Ultra 구독에서, 첫 응답이 온 뒤에 보여요.
   - 자세한 사용량은 언제든 `/usage` 로 볼 수 있어요.
   - VS Code 확장 화면에서는 상태 줄이 보이지 않을 수 있어요(확인 못 함) — 그때는 `/usage` 를 써요.

## 3. 시작 안내
설정이 끝나면: "이제 학습할 폴더에서 `/uiux-tutor:tutor 시작` 이라고 입력하세요."
