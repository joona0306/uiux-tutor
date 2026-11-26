# 75. R05. 개인 실습 — 미션 예시 (배포 ③, 완성)

## 배우기 재료
- 핵심 개념 (새 기술은 sitemap·robots 둘뿐이에요. 앞 회차를 한 바퀴 돌리는 회차예요)
  - **범위 정하기**: 한 화면, 필수 기능 3~4개, 선택 1~2개. 범위가 크면 끝나지 않아요. Figma 에서 한 프레임을 끝까지 다듬는 것과 같아요.
  - **매일 커밋·배포는 첫날부터**: 배포를 마지막 날에 처음 하면 빌드 오류를 한꺼번에 만나요. 첫날 저장소를 만들고 Vercel 에 연결해 둬요.
  - **품질 점검표에 숫자로 남기기**: 기기 모드(320·768·1280)·Lighthouse·`npm run lint`·W3C 결과를 README 에 적어요(R02).
  - **검색 엔진에 주소 알려 주기**: `app/sitemap.ts` 는 `MetadataRoute.Sitemap` 배열(`url`·`lastModified`)을 돌려줘 `/sitemap.xml` 이 되고, `app/robots.ts` 는 `MetadataRoute.Robots`(`rules`·`sitemap`)를 돌려줘 `/robots.txt` 가 돼요. 주소는 배포 주소로 시작하는 전체 주소로 써요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. 저장소의 `README.md` 틀을 만들어요)
  ```markdown
  # 프로젝트 이름 (교육용 클론 — 원본: ○○)
  ## 배포 주소
  ## 만든 것
  ## 쓴 기술
  ## 원본과 다른 점
  ## 점검 결과 (Lighthouse 접근성 / lint / 가로 넘침)
  ## 출처
  ```
- 예상해 보기: 범위를 "화면 3개"로 잡고 시작하면 마지막 날 무엇이 위험할까요? — 답: 배포·점검·README 를 할 시간이 없어져요. 한 화면을 끝까지 만들고, 남는 시간에 선택 기능을 더해요.
- 공식 문서: [sitemap (Next.js)](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap) · [robots (Next.js)](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots) · [Next.js 배포](https://nextjs.org/docs/app/getting-started/deploying) · [접근성 배우기 (web.dev)](https://web.dev/learn/accessibility) · [README 정보 (GitHub Docs)](https://docs.github.com/ko/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)

| 미션 | 할 일 | 완료 기준 |
|---|---|---|
| P05-1 범위 | 클론할 화면 하나와 기능 범위를 정해요(필수·선택) | 필수 기능 3~4개, 선택 1~2개를 표로 / 원본 구역 지도와 짝지음 |
| P05-2 완성 | 정한 범위를 끝까지 만들어요 | 필수 기능 모두 동작 / 375·768·1024px에서 가로 스크롤 없음 / 키보드로 메뉴·버튼 사용 가능 / build·lint 통과 |
| P05-3 공개 | 배포하고 README를 써요. 검색 엔진이 내 사이트 주소 목록을 읽을 수 있게 `app/sitemap.ts`·`app/robots.ts` 를 만들어요 | 배포 주소 / README: 만든 것·쓴 기술·원본과 다른 점·출처 / deploy.md 점검 통과 / Lighthouse 접근성·SEO 점수를 README에 적음 / `배포주소/sitemap.xml` 에 내 페이지 주소(전체 주소)가 모두 있음 / `배포주소/robots.txt` 가 열리고 `Sitemap:` 줄이 내 sitemap 주소를 가리킴 / 공유 미리보기: 배포 주소의 페이지 소스에 `og:title`·`og:image` 가 있음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- P05-1: 범위표의 흐름이 서비스 지도의 흐름 하나와 같고, 화면 이름이 원본과 맞음
- P05-2: 흐름 닮음: 정한 흐름 전체를 원본과 같은 순서로 눌러 단계마다 화면·주소 모양·상태가 같음 (구역별·단계별 표에서 모두 "같음")
- P05-3: 해당 없음 (배포·README)

## 힌트 재료
- 1단계: 범위가 크면 끝나지 않아요. "한 화면, 필수 기능 3개"부터.
- 2단계: 매일 끝에 커밋·push. 배포는 마지막 날이 아니라 첫날부터 연결해 두면 마지막에 놀라지 않아요.
- 3단계: README 틀 — 제목 / 배포 주소 / 화면 캡처 / 만든 것 / 기술 / 원본과 다른 점 / 출처
