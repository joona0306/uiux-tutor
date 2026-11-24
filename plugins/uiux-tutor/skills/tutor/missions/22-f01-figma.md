# 22. F01. Figma 기초와 Auto Layout — 미션 예시

## 배우기 재료
- 핵심 개념
  - **프레임과 레이어 이름**: 프레임은 화면 한 장·카드 한 장을 담는 상자예요(HTML 의 `<div>`). 레이어는 만들자마자 `image`, `footer` 처럼 이름을 붙여요 — 개발자가 파일을 열면 그 이름을 그대로 보거든요.
  - **Auto Layout = 마우스로 하는 flex**: 프레임을 고르고 `Shift + A` 를 누르면 자식을 줄 세워요. 방향은 `flex-direction`, Gap 은 `gap`, Padding 은 `padding`, 9칸 정렬 상자는 `justify-content` + `align-items` 와 짝이에요.
  - **Hug / Fill / Fixed**: Hug 는 내용만큼, Fill container 는 부모의 남는 공간 채우기, Fixed 는 내가 쓴 숫자. Fill 은 **부모가 Auto Layout 일 때만** 나와요(CSS 의 `flex: 1` 과 같아요).
- 작은 따라 하기 (사이트와 상관없이 직접 눌러요)
  ```text
  1. 프레임(F)을 그리고 이름을 box 로
  2. 안에 글자 A, B, C 를 따로 쓰기 → 셋을 함께 선택 → Shift + A
  3. 방향 Horizontal, Gap 8, Padding 16
  4. box 의 W 를 Fixed 300 으로
  5. 글자 B 를 선택해 W 를 Fill container 로
  6. Gap 을 24 로 바꿔 보기
  ```
- 예상해 보기: 5번에서 B 를 Fill container 로 바꾸면 A 와 C 는 어디에 놓일까요? — 답: B 가 남는 공간을 다 차지해서 A 는 왼쪽 끝, C 는 오른쪽 끝에 놓여요(Gap 은 그대로). box 가 Hug 이면 남는 공간이 없어서 변화가 없어요.
- 공식 문서: [Guide to auto layout (Figma)](https://help.figma.com/hc/en-us/articles/360040451373-Guide-to-auto-layout) · [Frames in Figma Design (Figma)](https://help.figma.com/hc/en-us/articles/360041539473-Frames-in-Figma-Design)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| F01-1 기본 구조 | 새 Figma 파일의 첫 페이지 이름을 `F01 연습` 으로 하고, 고른 사이트의 [목록] 구역 카드 한 장을 프레임 `card` 로 그려요(사진 자리 사각형 + 제목·가격 글자 + 버튼) | 페이지 이름이 `F01 연습` / `card` 안 레이어에 `Frame 12`·`Rectangle 3` 같은 기본 이름이 없음 / 레이어 이름이 영문 소문자·하이픈(`image`, `title`, `footer`) / 사진 자리는 회색 사각형(원본 사진 없음) |
| F01-2 개념 적용 | `card` 에 Auto Layout 을 켜요: 세로로 쌓고, 사진은 폭을 채우고, 가격과 버튼은 한 줄(`footer`)에 두기 | `card` 가 Vertical + W Fixed·H Hug / Padding 과 Gap 이 숫자로 정해져 있음 / `image` 가 W Fill container·H Fixed / `footer` 가 Horizontal 이고 가격이 Fill 이라 버튼이 오른쪽 끝 |
| F01-3 응용 | `card` 를 복제해 두 장 이상을 `card-row` 에 나란히 두고, 제목을 아주 길게 써 봐요. Gap·Padding·Hug·Fill·Fixed 를 CSS 속성과 짝지어 5줄 적어요 | `card-row` 가 Horizontal + Gap 숫자 / 제목을 길게 써도 카드 높이만 늘고 레이어가 겹치지 않음 / 5줄 표에 `gap`·`padding`·`flex: 1` 같은 CSS 이름이 짝지어 있음 |

제출: Figma 파일 링크(보기 권한) 또는 Layers 패널과 오른쪽 사이드바가 같이 보이는 캡처.

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- F01-1: 카드 프레임의 요소 순서·크기 비율이 원본 카드와 같음
- F01-2: Auto Layout 결과가 원본 카드 배치와 같음
- F01-3: `card-row` 의 카드 수·카드 사이 간격이 원본과 비슷함

## 힌트 재료
- 1단계: Figma 도움말 "Guide to auto layout" — https://help.figma.com/hc/en-us/articles/360040451373-Guide-to-auto-layout (방향·Gap·Padding·Resizing)
- 2단계: 카드 프레임을 고르고 `Shift + A` → 방향 Vertical → Gap·Padding 숫자 넣기. 자식은 Layers 순서대로 쌓여요. 사진은 W 드롭다운에서 Fill container, H 는 Fixed. 가격과 버튼은 따로 골라 `Shift + A` 로 `footer`, 가격의 W 를 Fill container.
- 3단계 예시(다른 이름·다른 값):
  ```text
  badge   Horizontal · W Hug · H Hug · Padding 위아래 4 / 좌우 8 · 모서리 9999
   └ label   글자 12 / Bold
  banner  Vertical · W Fill container · Gap 12 · Padding 20
  ```

## 자주 막히는 곳
- W 드롭다운에 Fill container 가 없음 → 부모 프레임에 Auto Layout 이 없어요. 부모를 골라 `Shift + A`
- `Shift + A` 를 눌렀더니 글자 하나만 감싸짐 → 감쌀 레이어를 모두 선택한 뒤 눌러요(잘못 감쌌으면 `Ctrl + Z`)
- 카드 높이가 늘지 않고 글자가 잘림 → 카드 H 가 Fixed 예요. Hug contents 로
