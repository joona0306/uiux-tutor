# 12. W12. position — 미션 예시

## 배우기 재료
- 핵심 개념
  - **relative 와 absolute 짝꿍**: 부모에 `position: relative`, 얹을 것에 `position: absolute` 와 `top`·`right` 를 주면 부모의 구석에 놓여요. absolute 는 흐름에서 빠져서 자리를 차지하지 않아요. Figma 의 Ignore auto layout 으로 레이어를 자유롭게 놓는 것과 같아요.
  - **fixed 와 sticky**: `fixed` 는 화면 기준으로 항상 그 자리에 있고, `sticky` 는 스크롤하다 `top` 값에 닿으면 붙어요(원래 자리는 남아요, `top` 이 꼭 필요해요). 프로토타입의 Fixed·Sticky 설정과 짝이에요.
  - **z-index**: 겹칠 때 숫자가 큰 쪽이 위에 와요(position 이 있는 요소에서 먹어요).
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요)
  ```css
  .photo-box { position: relative; width: 200px; height: 140px; background: #cbd5e1; }
  .badge { position: absolute; top: 8px; right: 8px; background: #fff; }
  .bar { position: sticky; top: 0; background: #fff; }
  ```
  `<div class="photo-box"><span class="badge">NEW</span></div>` 로 확인해요.
- 예상해 보기: `.photo-box` 의 `position: relative` 줄을 지우면 `.badge` 는 어디로 갈까요? — 답: 기준이 될 부모가 없어서 페이지(첫 화면) 오른쪽 위 근처로 날아가요.
- 공식 문서: [position (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/position) · [z-index (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/z-index)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| W12-1 기본 구조 | 카드가 있는 구역(예: 여행지 목록)에서 카드 하나를 골라, 카드 오른쪽 위 구석에 하트(♡) 버튼을 얹어요 | 카드에 `position: relative`, 하트에 `position: absolute` / `top`·`right` 값으로 구석에 놓임 / 하트가 다른 내용을 밀어내지 않음(흐름에서 빠짐) |
| W12-2 개념 적용 | 머리글을 스크롤해도 위에 붙어 있게 만들어요 | 머리글에 `position: sticky` 와 `top: 0` / 스크롤 뒤에도 머리글이 보임 / 머리글이 원래 자리를 차지함(내용이 가려지지 않음) |
| W12-3 응용 | 화면 오른쪽 아래에 항상 보이는 "맨 위로" 버튼을 만들고, 머리글과 겹칠 때 무엇이 위에 올지 정해요 | 버튼에 `position: fixed` 와 `right`·`bottom` / 겹치는 요소에 `z-index` 로 순서 지정(값과 이유를 말할 수 있음) / 버튼에 접근 가능한 이름(`aria-label` 또는 글자) |

## 힌트 재료
- 1단계: MDN `position` — https://developer.mozilla.org/ko/docs/Web/CSS/position
- 2단계: "부모에 relative, 얹을 것에 absolute" 짝꿍. sticky는 `top` 이 없으면 붙지 않아요.
- 3단계 예시(다른 이름):
  ```css
  .photo-box { position: relative; }
  .photo-box .badge { position: absolute; top: 8px; left: 8px; }
  ```

## 자주 막히는 곳
- absolute 하트가 화면 구석으로 날아감 → 부모 카드에 relative가 없음
- sticky가 안 붙음 → `top` 없음, 또는 부모에 `overflow: hidden`
