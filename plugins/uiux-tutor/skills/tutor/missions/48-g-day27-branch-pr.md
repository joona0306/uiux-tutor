# 48. Day 27. GitHub 협업 — 브랜치, Pull Request, 충돌 해결 — 미션 예시

> 팀 회차 — 혼자 하는 학습자용 버전: 팀원이 없으니 내 저장소에서 브랜치·PR·충돌을 내가 일부러 만들어 연습해요. 리뷰는 내 PR 에 내가 댓글을 남기는 모양으로 해요(자기 PR 은 승인(Approve)할 수 없어요).

## 배우기 재료
- 핵심 개념
  - **브랜치와 merge**: 할 일마다 갈래(브랜치)를 만들어 작업하고 다 되면 `main` 에 합쳐요. 만들기는 `git switch -c feature/이름`, 합치기는 `main` 에서 `git merge feature/이름` — "지금 있는 브랜치로 가져와 합친다"는 방향이에요. Figma 에서 메인 파일을 건드리지 않고 사본에서 작업한 뒤 합치는 것과 같아요.
  - **충돌은 질문이에요**: 같은 줄을 두 갈래에서 다르게 고치면 Git 이 멈추고 파일에 `<<<<<<<`(내 쪽 시작) · `=======`(구분) · `>>>>>>>`(다른 쪽 끝)을 적어 둬요. 둘 중 하나를 고르거나 새로 쓰고, 표시 세 줄을 지운 뒤 `git add` → `git commit` 으로 마무리해요.
  - **PR 흐름**: 이슈(할 일) → 브랜치 → 커밋 → push → Pull Request → 리뷰 → 머지예요. PR 본문에 `Closes #번호` 를 쓰면 머지될 때 이슈가 자동으로 닫혀요. 이름 규칙은 브랜치 `feature/영문-소문자`, 커밋 `feat: 무엇을`이에요.
- 작은 따라 치기 (사이트와 상관없이 새 폴더에서 직접 쳐요)
  ```bash
  mkdir branch-lab && cd branch-lab
  git init
  echo "v1" > note.txt
  git add note.txt && git commit -m "docs: note 추가"
  git switch -c feature/note-v2
  echo "v2" > note.txt
  git commit -am "feat: note 를 v2 로 변경"
  git switch main
  git log --oneline --graph --all
  ```
- 예상해 보기: 맨 끝에서 `git merge feature/note-v2` 를 치면 `note.txt` 에는 무엇이 들어 있고 충돌이 날까요? — 답: `v2` 가 들어 있고 충돌은 안 나요. `main` 은 그대로여서 Git 이 알아서 앞으로 당겨 합쳐요(Fast-forward). 충돌은 `main` 에서도 같은 줄을 고쳤을 때 생겨요.
- 공식 문서: [git switch (Git)](https://git-scm.com/docs/git-switch) · [git merge (Git)](https://git-scm.com/docs/git-merge) · [Pull Request 만들기 (GitHub Docs)](https://docs.github.com/ko/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| G27-1 기본 구조 | 클론 저장소에서 [공지·배너] 문구를 새 브랜치에서 고치고 `main` 에 합쳐요 | `git branch` 에 `feature/…` 브랜치가 있고 이름이 영문 소문자·하이픈 / 그 브랜치의 커밋 메시지가 `feat: …` 모양 / `main` 에서 `git merge` 한 뒤 공지 문구가 `main` 의 파일에 보임 / `git log --oneline --graph --all` 에 갈래가 보이거나 합친 기록이 있음 |
| G27-2 개념 적용 | 같은 문구 줄을 `feature/…` 와 `main` 에서 서로 다르게 고쳐 일부러 충돌을 내고 해결해요 | `git merge` 결과에 `CONFLICT` 가 보임(캡처 또는 복사) / 해결 뒤 파일에 `<<<<<<<`·`=======`·`>>>>>>>` 가 없음(`git grep -n "<<<<<<<"` 결과 없음) / `git status` 가 `working tree clean` / 어느 쪽 문구를 고른 이유를 한 줄로 적음 |
| G27-3 응용 | GitHub 내 저장소에서 이슈 → 브랜치 → PR → 머지까지 한 바퀴 해요 | 이슈가 하나 만들어져 있음 / 브랜치를 `git push -u origin feature/…` 로 올려 PR 이 열림(PR 본문에 `Closes #이슈번호`, 한 일·확인한 것) / 내 PR 에 댓글(Comment) 리뷰 1개 / PR 이 Merged 상태이고 이슈가 자동으로 Closed 이며 `git switch main` → `git pull` 뒤 `git log --oneline` 에 내 커밋이 보임 |

확인 방법: `git branch`, `git log --oneline --graph --all`, `git status` 의 결과와 GitHub 의 PR·이슈 화면(캡처 또는 주소)으로 확인해요.

## 힌트 재료
- 1단계: Git 문서 https://git-scm.com/docs/git-switch , https://git-scm.com/docs/git-merge · GitHub Docs "충돌 해결(명령줄)" — https://docs.github.com/ko/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line · "PR 을 이슈에 연결" — https://docs.github.com/ko/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue
- 2단계: ① `git switch -c feature/이름` 으로 갈래 만들고 고친 뒤 커밋 ② `git switch main` 으로 돌아와 같은 줄을 다르게 고쳐 커밋 ③ `main` 에서 `git merge feature/이름` → 충돌 파일을 열어 표시 세 줄을 지우며 원하는 문구만 남기기 → `git add` → `git commit` ④ PR 은 브랜치를 push 한 뒤 GitHub 저장소의 Compare & pull request 에서, 본문 끝에 `Closes #번호`
- 3단계 예시(다른 이름·다른 값):
  ```text
  <<<<<<< HEAD
  <p class="notice">이번 주 무료 배송</p>
  =======
  <p class="notice">이번 주 10% 할인</p>
  >>>>>>> feature/sale
  → 고른 한 줄만 남기고 나머지 4줄(표시 3줄 + 안 고른 줄)을 지운 뒤 git add → git commit
  ```

## 자주 막히는 곳
- `Your local changes … would be overwritten by checkout` → 커밋 안 한 변경이 있는 채로 브랜치를 옮기려 했어요. 먼저 커밋해요
- 웹 화면에 `<<<<<<< HEAD` 글자가 보임 → 표시를 안 지우고 커밋했어요. 지우고 다시 커밋·push 해요
- 머지했는데 이슈가 안 닫힘 → PR 본문에 `Closes #번호` 가 없거나 번호가 틀렸거나, 기본 브랜치(`main`)가 아닌 곳으로 머지했어요. 이슈를 손으로 닫고 다음 PR 부터 본문을 확인해요
