# 46. Day 09. Git 첫걸음 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **세 칸**: 작업 폴더(고친 파일) → `git add` → 스테이징(이번에 기록할 것을 담은 상자) → `git commit` → 저장소 기록(메시지를 붙여 되돌릴 수 있게 남긴 저장 지점). Figma 의 "이름 붙여 저장한 버전"과 비슷한데, 내가 원할 때만 만들어요.
  - **status 와 log**: `git status` 는 지금 어느 칸에 무엇이 있는지(빨강=작업 폴더, 초록=스테이징, `working tree clean`=깨끗함), `git log --oneline` 은 커밋 목록을 한 줄씩 보여 줘요. 둘을 자주 쳐서 확인해요.
  - **.gitignore**: 기록에 넣지 않을 파일 이름을 적은 목록이에요(Figma 에서 숨긴 레이어가 내보내기에 안 나오는 것과 비슷해요). 이미 커밋한 파일은 나중에 적어도 무시되지 않아요.
- 작은 따라 치기 (사이트와 상관없이 터미널에서 직접 쳐요. 먼저 `git config --global user.name "…"`·`user.email "…"` 를 한 번 해 둬요)
  ```bash
  mkdir git-lab
  cd git-lab
  git init
  echo hello > a.txt
  git status
  git add a.txt
  git commit -m "docs: a.txt 추가"
  git log --oneline
  ```
- 예상해 보기: 위 끝에서 `a.txt` 에 글자를 한 줄 더 쓰고 `git add` 없이 `git commit -m "docs: 한 줄 추가"` 를 치면 어떻게 될까요? — 답: `no changes added to commit` 이 나오고 커밋이 안 돼요. 고친 것을 먼저 `git add` 로 담아야 해요.
- 공식 문서: [Git 설정하기 (GitHub Docs)](https://docs.github.com/ko/get-started/git-basics/set-up-git) · [git commit (Git)](https://git-scm.com/docs/git-commit) · [gitignore (Git)](https://git-scm.com/docs/gitignore)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| G09-1 기본 구조 | Git 을 설정하고, 지금까지 만든 클론 폴더(`clone/` 이 들어 있는 프로젝트 폴더)에서 저장소를 만들어 첫 커밋을 해요 | `git --version` 이 버전을 보여 줌 / `git config --global --list` 에 `user.name`·`user.email`·`init.defaultbranch=main` 이 보임 / `git config user.email` 이 `…@users.noreply.github.com` 모양(진짜 이메일 아님) / `git log --oneline` 에 커밋 1개 이상 |
| G09-2 개념 적용 | 고른 사이트의 [머리글]과 [목록] 구역을 각각 고치고 커밋을 두 개로 나눠요 | `git log --oneline` 에 새 커밋 2개 / 각 커밋이 `feat: 머리글 메뉴 추가` 같은 `type: 무엇을` 모양 / `git add` 로 파일을 골라 담음(두 커밋의 변경 파일이 달라요: `git show --stat` 로 확인) / 마지막에 `git status` 가 `working tree clean` |
| G09-3 응용 | 기록에 넣지 않을 파일을 `.gitignore` 로 빼요 | `.gitignore` 에 `.DS_Store`·`Thumbs.db`·`node_modules/` 와 내 메모 파일(예: `memo-private.txt`) 이름이 있음 / `memo-private.txt` 를 만들어도 `git status` 에 안 나옴 / `.gitignore` 자체는 `git log --oneline` 에서 커밋으로 보임 / VS Code 소스 제어 패널의 + → 메시지 → Commit 으로 커밋 1개를 더 만들고 `git log --oneline` 에서 확인 |

확인 방법: 위 명령의 실행 결과를 붙여 주거나, 폴더를 열어 두면 튜터가 `git log --oneline` · `git status` 로 확인해요.

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- G09-1: 해당 없음 (Git)
- G09-2: 해당 없음 (Git)
- G09-3: 해당 없음 (Git)

## 힌트 재료
- 1단계: Git 문서 — https://git-scm.com/docs/git-status , https://git-scm.com/docs/git-add , https://git-scm.com/docs/git-commit , https://git-scm.com/docs/git-log , https://git-scm.com/docs/gitignore
- 2단계: ① 설정은 `git config --global` 로 이름·이메일·기본 브랜치 이름을 한 번만 ② 프롬프트의 폴더가 내 프로젝트 폴더인지 확인한 뒤 `git init` ③ 파일 하나씩 `git add 파일이름` → `git commit -m "type: 무엇을"` ④ `.gitignore` 는 줄마다 파일·폴더 이름 하나, 저장하고 `git status` 로 사라졌는지 확인
- 3단계 예시(다른 이름·다른 값):
  ```bash
  git add about.html
  git commit -m "feat: 소개 페이지 추가"
  printf "notes-private.txt\n.DS_Store\n" > .gitignore
  git status
  ```

## 자주 막히는 곳
- `Author identity unknown` → 이름·이메일 설정(`git config --global user.name`/`user.email`)을 안 했어요. 설정 후 다시 커밋해요
- `git status` 에 내 PC 폴더(`AppData/`, `Desktop/` 등)가 잔뜩 보임 → 홈 폴더에서 `git init` 을 했어요. 프롬프트의 폴더를 확인하고 프로젝트 폴더에서 다시 시작해요(튜터와 함께 홈 폴더의 `.git` 만 지워요)
- 이미 커밋한 파일을 `.gitignore` 에 적어도 계속 추적됨 → `.gitignore` 는 아직 기록되지 않은 파일에만 통해요
