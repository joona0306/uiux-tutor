# 25. F04. 컴포넌트와 Variants — 미션 예시

## 배우기 재료
- 핵심 개념
  - **메인 컴포넌트와 인스턴스**: 메인 컴포넌트는 원본 도장(◆), 인스턴스는 찍은 자국(◇)이에요. 메인을 고치면 인스턴스가 따라 바뀌어요. 나중에 React 컴포넌트 함수와 `<Button />` 한 번 쓴 것의 관계와 같아요.
  - **Variants**: 한 컴포넌트의 여러 모양을 보라색 점선 상자(컴포넌트 세트)로 묶어요. 속성 3개(각 2가지 값)면 2 × 2 × 2 = 8가지예요. 변형 이름의 슬래시 칸 수가 속성 수와 같아야 해요.
  - **컴포넌트 속성**: Text(글자), Boolean(보이기/숨기기), Instance swap(안의 인스턴스 바꿔 끼우기)을 열어 두면 인스턴스에서 손잡이로 바꿔요. 바꾼 것은 오버라이드, 원래대로는 Reset, 연결을 끊는 건 Detach 예요.
- 작은 따라 하기 (사이트와 상관없이 직접 눌러요)
  ```text
  1. 사각형(R) 하나 → 글자 "OK" → 둘을 선택 → Shift + A → 이름 chip
  2. chip 선택 → Create component (Ctrl + Alt + K)
  3. Assets 탭에서 chip 을 캔버스로 2번 끌어다 놓기 (인스턴스 2개)
  4. 한 인스턴스의 글자를 "NO" 로 바꾸기
  5. 메인 chip 의 모서리를 16 으로 바꾸기
  ```
- 예상해 보기: 5번 뒤 인스턴스 2개의 모서리와 글자는 어떻게 될까요? — 답: 모서리는 둘 다 16 으로 따라 바뀌고, 글자는 "NO" 로 바꾼 쪽은 그대로(오버라이드), 안 바꾼 쪽은 "OK" 예요.
- 공식 문서: [Guide to components in Figma (Figma)](https://help.figma.com/hc/en-us/articles/360038662654-Guide-to-components-in-Figma) · [Create and use variants (Figma)](https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants) · [Explore component properties (Figma)](https://help.figma.com/hc/en-us/articles/5579474826519-Explore-component-properties)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| F04-1 기본 구조 | `Components` 페이지를 만들고, 고른 사이트의 [버튼] 모양을 아이콘 2개(`icon/…`)와 버튼 메인 컴포넌트로 만들어요 | 페이지 이름이 `Components` / 아이콘 2개가 Layers 에서 ◆(메인 컴포넌트)이고 이름이 `icon/…` / 버튼 메인에 아이콘 인스턴스가 들어 있음 / 메인의 모서리를 바꾸면 인스턴스 2개가 같이 바뀜 |
| F04-2 개념 적용 | 버튼을 `variant`(primary / secondary) × `size`(md / sm) × `disabled`(false / true) 8가지 Variants 로 묶어요 | 변형 이름이 `Button/primary/md/false` 처럼 슬래시 3칸 / 컴포넌트 세트(보라 점선)에 변형 8개 / 속성 이름이 `variant`·`size`·`disabled` / 인스턴스에서 드롭다운으로 8가지가 모두 나옴 |
| F04-3 응용 | 버튼에 `label`(Text)·`showIcon`(Boolean)·`icon`(Instance swap)을 더하고, 고른 사이트의 [카드]를 Text 속성 3개 이상이 있는 `Card` 컴포넌트로 만들어 인스턴스 2개를 오버라이드해요 | Button 인스턴스를 고르면 속성 6개가 보임 / `showIcon` 을 끄면 아이콘이 사라지고 버튼이 줄어듦 / 카드 인스턴스 하나만 글자를 바꾼 뒤 메인의 기본값을 바꾸면 안 바꾼 쪽만 따라옴 / Detach 한 카드는 Layers 아이콘이 ◇ 에서 일반 프레임으로 바뀌고 메인을 고쳐도 안 바뀐다는 것을 한 줄로 적음 |

제출: Figma 파일 링크(보기 권한) 또는 Assets 탭·Layers·오른쪽 속성 칸이 보이는 캡처.

## 힌트 재료
- 1단계: Figma 도움말 "Create and use variants" — https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants , 속성은 "Explore component properties" — https://help.figma.com/hc/en-us/articles/5579474826519-Explore-component-properties
- 2단계: 변형 하나를 완성하고 복제해 이름의 마지막 칸만 바꾸기 → 모두 선택해 Combine as variants → 속성 이름을 더블클릭해 바꾸기. 속성은 세트를 고른 채 Properties 옆 `+` 로 만들고, 글자·아이콘 레이어를 골라 Apply property 로 연결해요.
- 3단계 예시(다른 이름·다른 값):
  ```text
  Chip/solid/lg    Chip/solid/sm
  Chip/outline/lg  Chip/outline/sm
  → 속성: style(solid·outline) · size(lg·sm)   (슬래시 칸 2개 = 속성 2개)
  ```

## 자주 막히는 곳
- 속성 값이 비거나 이상하게 들어감 → 변형 이름의 슬래시 칸 수가 속성 수와 달라요
- 인스턴스에서 글자가 안 바뀜 → 메인의 글자 레이어를 Text 속성에 연결하지 않았어요
- 메인을 고쳤는데 한 카드만 안 바뀜 → 그 카드를 Detach 했거나, 같은 속성을 직접 바꾼(오버라이드) 거예요
