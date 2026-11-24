# 07. W07. 단위·색·글자 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **단위의 기준**: `px` 는 고정, `%` 는 부모 기준, `em` 은 부모 글자 크기 기준, `rem` 은 `<html>` 글자 크기(보통 16px) 기준이에요. 글자 크기는 `rem` 으로 써요. Figma의 px 값을 16으로 나누면 rem 이에요(20px → 1.25rem).
  - **색과 투명도**: hex(`#2563eb`)나 `rgb(37 99 235)`, 투명도는 `rgb(37 99 235 / 10%)` 처럼 슬래시 뒤에 써요. Figma Fill 의 Opacity 와 같아요.
  - **글자 스타일**: `font-family`(글꼴) · `font-weight`(굵기) · `line-height`(줄 간격, 단위 없는 숫자 = 줄 높이 ÷ 글자 크기) · `letter-spacing`(글자 간격) · `text-align`(정렬). Figma Typography 값을 그대로 옮겨요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `<head>` 에 Google Fonts 의 Noto Sans KR `<link>` 를 먼저 넣어요)
  ```css
  body { font-family: 'Noto Sans KR', sans-serif; color: #111827; }
  .title { font-size: 1.5rem; font-weight: 700; line-height: 1.4; }
  .desc { font-size: 0.875rem; line-height: 1.6; color: #6b7280; }
  .badge { color: #ef4444; background: rgb(239 68 68 / 10%); }
  ```
- 예상해 보기: `.title` 의 `font-size: 1.5rem` 을 `1.5em` 으로 바꾸고, 부모 요소에 `font-size: 20px` 가 있으면 글자는 몇 px 이 될까요? — 답: 30px(부모 20px × 1.5). `rem` 이었다면 24px 로 부모와 상관없었어요.
- 공식 문서: [CSS 값과 단위 (MDN)](https://developer.mozilla.org/ko/docs/Learn_web_development/Core/Styling_basics/Values_and_units) · [글자 스타일 기초 (MDN)](https://developer.mozilla.org/ko/docs/Learn_web_development/Core/Text_styling/Fundamentals)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| W07-1 기본 구조 | `<head>` 에 Google Fonts `<link>` 로 Noto Sans KR 을 연결하고 페이지 전체 글꼴로 정해요. 고른 사이트의 큰 제목·설명 글에 글자 크기를 rem 으로 정해요 | `<link>` 가 `<head>` 에 있음 / `font-family` 에 `'Noto Sans KR'` 과 대체 글꼴 `sans-serif` / 글자 크기가 모두 `rem`(px 없음) |
| W07-2 개념 적용 | 고른 사이트의 목록 카드 글을 네 가지 글자 스타일(제목·본문·라벨·캡션)로 나누어 클래스로 만들어요. 값은 직접 정해 표로 적고 rem·단위 없는 줄 간격으로 옮겨요 | 네 클래스(예: `.text-title` `.text-body` `.text-label` `.text-caption`)가 있음 / 줄 간격이 단위 없는 숫자 / 굵기·색이 클래스마다 다르고 표와 같음 / px 값을 16으로 나눈 계산을 말할 수 있음 |
| W07-3 응용 | 고른 사이트의 "할인·인기·신규" 같은 작은 뱃지 하나를 만들어요. 배경은 글자색과 같은 색을 10% 투명도로 깔아요 | 투명도를 `rgb(… / 10%)` 모양으로 씀(`rgba` 아님) / hex 로 쓴 글자색과 `rgb()` 배경 둘 다 있음 / DevTools Styles 에서 규칙에 취소선·경고가 없음 |

## 힌트 재료
- 1단계: MDN 값과 단위·글자 스타일 기초 문서(위 링크), Google Fonts 에서 Noto Sans KR 의 `<link>` 코드 복사
- 2단계: `<link>` 는 `<head>` 에, `font-family` 는 `body` 규칙에 써요. 단위는 숫자에 붙여 써요(`2rem`). 투명 색은 `rgb(R G B / 퍼센트)` 의 슬래시를 빼먹지 않아요.
- 3단계 예시(다른 이름·다른 값):
  ```css
  .note-title { font-size: 1.25rem; line-height: 1.4; font-weight: 700; }
  .note-chip { color: #15803d; background: rgb(21 128 61 / 10%); }
  ```

## 자주 막히는 곳
- 글꼴이 안 바뀜 → `<link>` 주소나 `font-family` 글꼴 이름 철자 오타(그러면 다음 후보인 기본 글꼴로 보여요)
- 글자 크기가 안 바뀜(Styles 에 경고) → `2 rem` 처럼 숫자와 단위 사이에 띄어쓰기, 또는 단위 빠짐
- 투명 배경이 진하게 보임 → `rgb(37 99 235 10%)` 처럼 `/` 를 빠뜨림
