# 47. Day 10. GitHub — 미션 예시 (배포 ①)

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
