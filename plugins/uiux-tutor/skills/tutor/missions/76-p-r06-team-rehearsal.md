# 76. R06. 팀 리허설 — 미션 예시

> 팀 회차 — 혼자 하는 학습자용 버전

## 배우기 재료
- 핵심 개념
  - **이슈 → 브랜치 → PR → 머지**: 할 일 카드(이슈, 번호 `#3`)를 만들고, 그 일만 하는 가지(브랜치)에서 작업해 PR 로 `main` 에 합쳐요. 혼자여도 이 순서를 지키면 기록이 남고 `main` 이 늘 돌아가는 상태로 있어요. Figma 에서 메인 파일을 두고 브랜치에서 시안을 고친 뒤 합치는 것과 같아요.
  - **충돌(Conflict)**: 같은 파일의 같은 줄을 두 브랜치가 다르게 고치면 Git 이 자동으로 못 합쳐요. `<<<<<<<`·`=======`·`>>>>>>>` 표시가 파일에 생기고, 내가 남길 모양을 골라 표시를 지워요.
  - **Production / Preview 배포**: Vercel 에서 `main` 의 배포는 실제 주소(Production), PR 이나 다른 브랜치의 배포는 미리보기 주소(Preview)예요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. 연습용 저장소에서 같은 줄을 두 브랜치에서 다르게 고쳐 봐요)
  ```bash
  git switch -c fix/title-a
  # note.txt 첫 줄을 "A 제목" 으로 고치고
  git commit -am "fix: 제목 A"
  git switch main
  git switch -c fix/title-b
  # note.txt 첫 줄을 "B 제목" 으로 고치고
  git commit -am "fix: 제목 B"
  git merge fix/title-a
  ```
  마지막 줄에서 충돌이 나요. `note.txt` 를 열어 표시를 지우고 남길 제목을 정한 뒤 `git add note.txt` → `git commit` 해요.
- 예상해 보기: 충돌 표시(`<<<<<<<` 등)를 지우지 않고 `git add` 후 커밋하면 어떻게 될까요? — 답: Git 은 커밋을 막지 않아서 표시 글자가 그대로 파일에 들어가요. 화면이나 빌드가 깨질 수 있으니 커밋 전에 표시가 남았는지 꼭 찾아봐요.
- 공식 문서: [Pull Request 정보 (GitHub Docs)](https://docs.github.com/ko/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) · [병합 충돌 정보 (GitHub Docs)](https://docs.github.com/ko/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts) · [git merge (Git)](https://git-scm.com/docs/git-merge)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| P06-1 기본 구조 | 개인 저장소를 만들고, 고른 사이트의 구역 두 곳(예: 소개 구역·목록 구역)을 이슈 2개로 적어요 | 저장소가 GitHub 에 있고 이슈가 2개 이상(제목에 구역 이름, 본문에 완료 기준 한 줄) / 저장소 이름이 원 서비스 이름이 아님 / 이슈마다 번호(`#1`, `#2`)가 있음 |
| P06-2 개념 적용 | 이슈마다 브랜치를 따서 작업하고 PR 로 `main` 에 합쳐요(혼자라서 내가 리뷰 댓글을 남겨요) | 브랜치 이름이 `feat/…`·`fix/…` 모양 / 머지된 PR 2개 이상(`gh pr list --state merged` 또는 GitHub Pull requests 의 Merged 탭에서 확인) / PR 본문에 `Closes #번호` / 내가 남긴 리뷰 댓글 1개 이상 / 커밋 메시지가 `type: 무엇을` |
| P06-3 응용 | 같은 줄을 두 브랜치에서 일부러 고쳐 충돌을 한 번 풀고, 배포해서 Preview 와 Production 주소를 비교해요 | 충돌 표시가 파일에 남지 않음(`git grep "<<<<<<<"` 결과 없음) / 충돌을 어떻게 풀었는지 PR 댓글 한 줄 / Preview 주소와 Production 주소가 각각 열림 / deploy.md 점검표 통과 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- P06-1: 해당 없음 (이슈)
- P06-2: 두 구역 배치가 원본과 같음
- P06-3: 해당 없음 (충돌·배포)

## 힌트 재료
- 1단계: GitHub Docs 병합 충돌 — https://docs.github.com/ko/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts
- 2단계: 충돌 난 파일을 열면 `<<<<<<<` 아래가 내 쪽, `>>>>>>>` 위가 합치려는 쪽이에요. 남길 내용만 쓰고 표시 세 줄을 지운 뒤 `git add` → `git commit`. PR 본문에 `Closes #1` 이라고 쓰면 머지될 때 이슈가 닫혀요.
- 3단계 예시(다른 이름·다른 값):
  ```text
  <<<<<<< HEAD
  제목: 오늘의 추천
  =======
  제목: 이번 주 추천
  >>>>>>> feat/week-title
  ```
  → 남길 한 줄(`제목: 이번 주 추천`)만 두고 나머지 세 줄을 지워요.

## 자주 막히는 곳
- 머지했는데 이슈가 안 닫힘 → PR 본문에 `Closes #번호` 가 없거나, 기본 브랜치(`main`)가 아닌 곳으로 머지했어요
- 충돌을 풀었는데 화면이 깨짐 → 표시 글자(`=======` 등)가 파일에 남았어요. `git grep` 으로 찾아요
- Preview 주소가 안 보임 → Vercel 이 저장소와 연결돼 있는지, PR 을 만든 뒤 배포가 끝났는지 확인해요
