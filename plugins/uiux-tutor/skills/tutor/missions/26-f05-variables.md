# 26. F05. Variables와 스타일 (디자인 토큰) — 미션 예시

## 배우기 재료
- 핵심 개념
  - **디자인 토큰 = 이름 붙인 값**: `color/primary = 2563EB` 처럼 색·간격·모서리에 이름을 붙인 것이 토큰이고, Figma 에서는 Variables 에 저장해요. CSS 의 `:root { --color-primary: … }` 를 만드는 일과 같아요.
  - **변수 연결**: 레이어의 Fill·Padding·모서리 칸에 숫자 대신 변수를 넣어요(CSS 의 `var()`). 원본인 **메인 컴포넌트**에 연결해야 인스턴스가 전부 따라와요. 변수 값을 고치면 연결된 곳이 한꺼번에 바뀌어요.
  - **모드와 코드 표기**: 모드(Light/Dark)는 같은 변수의 다른 값 세트예요. 숫자를 직접 넣은 곳은 모드가 바뀌어도 그대로라서 하얗게 남아요. 코드 표기(code syntax)에는 `var(--color-primary)` 처럼 코드 이름을 붙여 Dev Mode 에서 보이게 해요.
- 작은 따라 하기 (사이트와 상관없이 직접 눌러요)
  ```text
  1. 사각형(R)을 그리고 Fill 을 숫자 7C3AED 로
  2. 변수 창(왼쪽 Variables) → Create variable → Color → 이름 brand, 값 7C3AED
  3. 사각형 Fill 의 점 4개 아이콘(Apply styles and variables) → brand 연결
  4. 변수 brand 의 값을 0EA5E9 로 바꾸기
  5. 사각형을 선택해 Fill 이 어떻게 보이는지 확인
  ```
- 예상해 보기: 1번에서 숫자를 그대로 둔 채(3번 연결 없이) 4번을 하면 사각형 색은 바뀔까요? — 답: 안 바뀌어요. 변수에 연결한 곳만 따라 바뀌어요(CSS 에서 `var()` 가 아니라 색 값을 직접 쓴 것과 같아요).
- 공식 문서: [Guide to variables in Figma (Figma)](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma) · [Create and apply text styles (Figma)](https://help.figma.com/hc/en-us/articles/360039957034-Create-and-apply-text-styles) · [Guide to Dev Mode (Figma)](https://help.figma.com/hc/en-us/articles/15023124644247)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| F05-1 기본 구조 | 고른 사이트의 대표 색·간격·모서리를 보고 `tokens` 컬렉션에 변수 15개를 만들어요(색 8 · 간격 4 · 모서리 3) | 컬렉션 이름이 `tokens` / 그룹 `color` 8개(`primary`·`primary-subtle`·`on-primary`·`text`·`text-muted`·`surface`·`background`·`border`) / 그룹 `space` 4개(`xs`·`sm`·`md`·`lg`)와 `radius` 3개(`md`·`lg`·`full`) / 변수마다 Web 코드 표기(`var(--color-primary)`, 간격은 `var(--spacing-md)`)가 있음 |
| F05-2 개념 적용 | F04 의 Button·Card 메인에 변수를 연결하고 텍스트 스타일 4개(`Title`·`Body`·`Label`·`Caption`)를 만들어 적용해요 | 메인 컴포넌트(인스턴스가 아님)의 Fill·Padding·Gap·모서리가 변수 이름으로 보임 / `color/primary` 값을 바꾸면 Button 인스턴스가 전부 같이 바뀜 / 텍스트 스타일 4개가 있고 컴포넌트 글자에 적용됨 / 숫자가 직접 들어간 칸이 남아 있다면 이유를 한 줄 적음 |
| F05-3 응용 | `Dark` 모드를 더하고 `preview-light` · `preview-dark` 프레임에 Button·Card 를 놓아 비교해요 | 변수 창에 `Light`·`Dark` 열이 있음 / `Dark` 의 색 8개가 `Light` 와 다른 값 / `preview-dark` 에 Apply variable mode 로 `Dark` 를 준 상태에서 혼자 하얗게 남는 곳이 없음 / Dev Mode(`Shift + D`)에서 Button 배경이 `var(--color-primary)` 로 보임 (Dev Mode 를 쓸 수 없으면 변수 창의 Code syntax 칸 캡처) |

제출: Figma 파일 링크(보기 권한) 또는 변수 창·`preview-light`/`preview-dark` 캡처.

## 힌트 재료
- 1단계: Figma 도움말 "Guide to variables in Figma" — https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma (변수 종류·모드·코드 표기)
- 2단계: 캔버스 빈 곳을 눌러 아무것도 선택하지 않은 상태에서 Variables 를 열어요. 이름은 `primary` 처럼 만들고 그룹 `color` 로 묶으면 `color/primary` 가 돼요. 연결은 Fill 의 점 4개 아이콘으로, Padding 칸에서는 `=` 키로 변수를 골라요. 모드는 변수 목록 위 New variable mode 로 더해요.
- 3단계 예시(다른 이름·다른 값):
  ```css
  :root { --color-brand: #0f766e; --spacing-md: 16px; }
  .tag  { background: var(--color-brand); padding: var(--spacing-md); }
  ```
  → Figma 변수 `color/brand` = `0F766E`, `space/md` = `16`, 코드 표기 `var(--color-brand)`, `var(--spacing-md)`

## 자주 막히는 곳
- 모드를 고르는 메뉴가 안 나옴 → 안쪽 레이어에 변수가 하나도 연결되지 않은 프레임이에요(숫자만 직접 넣은 곳). 변수를 한 곳 이상 연결해요
- 다크 모드에서 혼자 하얀 곳이 남음 → 그 곳은 숫자를 직접 넣은 칸이에요. 변수로 바꿔 연결해요
- Dev Mode 에 `var(var(--color-primary))` 처럼 두 번 감싸짐 → 코드 표기를 `--color-primary` 로만 넣어요
- Dark 열을 만들 수 없음 → 강의 자료 기준으로 모드는 Education·유료 플랜 기능이에요. 파일이 해당 팀에 있는지 확인하고, 안 되면 Dark 값을 표로 문서에 적어 제출해요
