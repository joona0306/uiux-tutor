# 47. Day 10. GitHub — 미션 예시 (배포 ①)

## 배우기 재료
- 핵심 개념
  - **Git 과 GitHub**: Git 은 내 컴퓨터에 기록(커밋)을 남기는 도구이고, GitHub 는 그 기록을 인터넷에 올려 두는 곳이에요. 올리기 `git push`, 받아 오기 `git pull`, 통째로 내려받기 `git clone` — 방향은 내 컴퓨터 ⇄ GitHub 예요. Figma 파일을 클라우드에 두고 여러 곳에서 여는 것과 비슷해요.
  - **README.md**: 저장소 첫 화면에 보이는 소개 글이에요. `#` 제목, `-` 목록, `[글자](주소)` 링크, 표를 마크다운으로 써요.
  - **GitHub Pages**: 공개 저장소의 HTML·CSS·JS 를 웹 주소로 공개해 줘요. 주소는 `https://아이디.github.io/저장소이름/` 모양이고, 사진·CSS 경로는 맨 앞 `/` 없는 상대 경로여야 저장소 이름이 낀 주소에서도 열려요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. 연습용 저장소 `readme-lab` 폴더에서 `README.md` 를 만들고 아래를 써요)
  ```markdown
  # 연습 저장소
  ## 오늘 한 일
  - [x] README 만들기
  - [ ] GitHub 에 올리기
  | 이름 | 뜻 |
  |---|---|
  | push | 내 기록을 GitHub 로 올리기 |
  ```
  그다음 `git remote -v` 를 쳐서 `origin` 주소가 내 저장소인지 확인해요(GitHub 에 빈 저장소를 만들고 `git remote add origin 주소` 를 한 뒤).
- 예상해 보기: GitHub 웹에서 README 를 고쳐 저장한 뒤, 내 컴퓨터에서 `git pull` 없이 다른 파일을 커밋하고 `git push` 하면 어떻게 될까요? — 답: `rejected`(fetch first)로 거절돼요. GitHub 에 내 컴퓨터에 없는 커밋이 있어서, 먼저 `git pull` 로 받은 뒤 다시 `git push` 해요.
- 공식 문서: [README 정보 (GitHub Docs)](https://docs.github.com/ko/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) · [GitHub Pages 사이트 만들기 (GitHub Docs)](https://docs.github.com/ko/pages/getting-started-with-github-pages/creating-a-github-pages-site) · [git push (Git)](https://git-scm.com/docs/git-push)

| 미션 | 할 일 | 완료 기준 |
|---|---|---|
| G10-1 기본 구조 | 지금까지 만든 클론 폴더를 GitHub 저장소로 올려요(가상 이름) | 저장소 이름이 원 서비스 이름이 아님 / `index.html` 이 저장소 맨 위 또는 배포할 폴더 맨 위에 있음 / `git log` 에 의미 있는 커밋 메시지 3개 이상 |
| G10-2 개념 적용 | GitHub Pages로 배포해요 | 저장소 Settings → Pages 에서 배포 설정 / 배포 주소가 열림 / 사진·CSS·JS 경로가 깨지지 않음(상대 경로) |
| G10-3 응용 | 배포 전 점검표(deploy.md)를 채우고 README에 배포 주소를 적어요 | 화면에 "교육용 클론" 표시 / 원본 사진·글 없음 / README에 배포 주소·만든 것·원본과 다른 점 |

## 힌트 재료
- 1단계: GitHub Docs "GitHub Pages 사이트 만들기" — https://docs.github.com/ko/pages/getting-started-with-github-pages/creating-a-github-pages-site
- 2단계: 주소가 열리는데 그림이 안 보이면 경로를 의심해요. `/images/a.jpg`(맨 앞 `/`)는 저장소 이름이 빠진 주소로 가요 → `images/a.jpg`
- 3단계: 배포에는 몇 분 걸려요. Settings → Pages 화면의 주소와 상태를 확인해요.

## 자주 막히는 곳
- 404 → 배포할 폴더에 `index.html` 이 없음, 또는 파일 이름 대소문자 다름
