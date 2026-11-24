# 35. Day 05. DOM — 미션 예시

| 미션 | 할 일 | 완료 기준 |
|---|---|---|
| JS05-1 기본 구조 | 고른 사이트의 제목·안내 글 중 하나를 JavaScript로 바꿔요(예: "오늘의 추천 여행지" → 날짜가 들어간 문장) | `querySelector` 로 요소를 찾음 / `textContent` 로 글자를 바꿈 / `<script>` 위치 또는 `defer` 로 요소가 있을 때 실행됨 |
| JS05-2 개념 적용 | 카드 목록 구역을 **배열 데이터**로 그려요(카드 6개, 내가 만든 가상 데이터) | 객체 배열(이름·지역·사진 경로) / `createElement` → 내용 채우기 → `append` / 사용자에게 보일 글자는 `textContent` (innerHTML 아님) |
| JS05-3 응용 | 카드 하나를 누른 것처럼 강조하는 클래스를 붙였다 뗐다 해요(버튼 하나로) | `classList.toggle` 사용 / CSS에 강조 클래스 정의 / `querySelectorAll` 과 `querySelector` 차이를 말할 수 있음 |

## 힌트 재료
- 1단계: MDN `Document.querySelector()` — https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector
- 2단계: 찾기(querySelector) → 만들기(createElement) → 채우기(textContent) → 넣기(append)
- 3단계 예시(다른 이름):
  ```js
  const box = document.querySelector('.notice');
  const item = document.createElement('li');
  item.textContent = '새 소식';
  box.append(item);
  ```

## 자주 막히는 곳
- `null` 오류 → 선택자 오타, 또는 스크립트가 HTML보다 먼저 실행
- 사용자 입력을 innerHTML로 넣음 → 보안 문제, textContent로
