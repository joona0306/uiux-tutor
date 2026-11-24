# 03. W03. 링크·이미지·목록·표 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **이미지와 alt**: `<img src alt width height>` 네 가지를 함께 써요. `alt` 는 그림을 못 보는 사람(스크린 리더)에게 주는 설명이고, 꾸미기만 하는 그림은 `alt=""` 예요. `width`·`height` 는 그림 자리를 미리 잡아 줘요.
  - **상대 경로와 절대 경로**: 내 폴더 안의 파일은 `images/a.jpg`·`about.html` 처럼(상대), 다른 사이트는 `https://…` 로 시작해요(절대). 폴더 위로 올라갈 땐 `../`. Figma로 치면 "내 파일 안의 프레임"과 "다른 파일 링크"의 차이예요.
  - **목록과 표**: 순서가 있으면 `<ol>`, 없으면 `<ul>`, 항목은 `<li>`. 표는 `<caption>`(표 제목), 머리 칸 `<th scope="col">`·`<th scope="row">`, 내용 칸 `<td>` 로 만들어요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. 아무 그림 `images/cat.jpg` 를 폴더에 넣고요)
  ```html
  <img src="images/cat.jpg" alt="창가에서 낮잠 자는 고양이" width="300" height="200">
  <ul>
    <li>사료</li>
    <li>장난감</li>
  </ul>
  <table>
    <caption>고양이 하루 일과</caption>
    <thead><tr><th scope="col">시간</th><th scope="col">할 일</th></tr></thead>
    <tbody><tr><th scope="row">아침</th><td>밥 먹기</td></tr></tbody>
  </table>
  <a href="https://developer.mozilla.org/ko/" target="_blank" rel="noopener noreferrer">MDN 문서 (새 탭)</a>
  ```
- 예상해 보기: 파일 이름은 소문자 `cat.jpg` 인데 `src="images/Cat.jpg"` 로 쓰면 어떻게 될까요? — 답: 그림이 안 보이고 alt 글자와 깨진 아이콘이 나와요. 서버에 따라 대소문자를 다른 파일로 보기 때문이에요(F12 Console 에 404 가 떠요).
- 공식 문서: [img 요소 (MDN)](https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements/img) · [a 요소 (MDN)](https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements/a) · [HTML 표 기본 (MDN)](https://developer.mozilla.org/ko/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| W03-1 기본 구조 | 고른 사이트의 목록 구역(예: 추천 장소·상품·글 목록)을 골라 `<ul>` 목록 항목 4개로 옮기고, 항목마다 자리 표시 그림 `<img>` 와 내가 쓴 짧은 글을 넣어요 | `<ul>` 안에 `<li>` 4개 / 모든 `<img>` 에 `src` · `alt` · `width` · `height` 가 있음 / `src` 가 상대 경로(`images/…`)이고 파일 이름이 영문 소문자·하이픈 |
| W03-2 개념 적용 | 고른 사이트에 표처럼 보이는 정보(요금·운영 시간·비교표)를 골라 내가 지은 값으로 표를 만들어요. 순서가 있는 안내(이용 방법 3단계)는 `<ol>` 로 써요 | `<caption>` 이 있음 / 머리 칸에 `<th scope="col">`, 행 제목에 `<th scope="row">` / 줄(`<tr>`)마다 칸 개수가 같음 / 순서 있는 안내가 `<ol>` |
| W03-3 응용 | 같은 사이트 안 페이지로 가는 링크(`about.html` 같은 내 파일)와 다른 사이트로 가는 링크를 하나씩 만들어요. 그림 하나를 누르면 링크가 되게 해요 | 내 페이지 링크가 상대 경로 / 다른 사이트 링크가 `https://` 로 시작하고 `target="_blank" rel="noopener noreferrer"` 가 있고 글자로도 "새 탭"이라고 알림 / 링크 글자에 "여기" 같은 말이 없음 / 링크로 감싼 `<img>` 에도 `alt` 가 있음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- W03-1: 항목 안 순서(사진 → 이름 → 설명)가 원본 목록 항목과 같음
- W03-2: 표의 열 제목·줄 구성이 원본 표와 같음 (값은 내가 지은 것)
- W03-3: 해당 없음 (링크 연습)

## 힌트 재료
- 1단계: 위 공식 문서 세 개(img·a·표 기본)
- 2단계: 그림 파일은 `images/` 폴더에 넣고 `src` 에는 폴더 이름부터 써요. `alt` 에는 "그림이 무엇인지"를 한 문장으로 적어요. 표는 `table > caption, thead, tbody > tr > th/td` 순서로 끼워요. 새 탭 링크는 속성 세 개를 한 번에 붙여요.
- 3단계 예시(다른 이름·다른 값):
  ```html
  <a href="menu.html"><img src="images/latte.jpg" alt="라떼 한 잔" width="200" height="150"></a>
  <ol>
    <li>메뉴 고르기</li>
    <li>주문하기</li>
  </ol>
  ```

## 자주 막히는 곳
- 깨진 그림 아이콘 + alt 글자만 보임 → `src` 경로나 파일 이름 오타, 또는 그림을 `images` 폴더에 안 넣음(F12 Console 의 404 확인)
- 다른 사이트 링크가 `127.0.0.1:5500/…` 로 감 → `https://` 를 빼먹어서 상대 경로로 읽힘
- 표가 한 줄로 이어지거나 칸이 밀림 → `<tr>` 이나 `</td>` 가 빠짐, 줄마다 칸 개수가 다름
