# 05. W05. 폼 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **label과 input 연결**: `<label for="q">` 와 `<input id="q">` 의 값을 같게 하면, 이름표 글자를 눌러도 칸이 선택돼요. Figma로 치면 입력칸 컴포넌트의 "라벨 텍스트"와 칸이 한 세트인 것과 같아요.
  - **name 과 type**: 보낼 칸에는 `name` 을 붙여요(보내면 주소창 `?` 뒤에 `name=값` 으로 보여요). `type` 은 내용에 맞게 `text` · `date` 등을 골라요. `required` 는 필수 칸, `placeholder` 는 **예시**로만 쓰고 label 대신 쓰지 않아요.
  - **묶기와 버튼**: 라디오는 같은 `name` 으로 묶고 `fieldset` / `legend` 로 묶음 제목을 달아요. 폼 안의 버튼에는 항상 `type`(`submit` · `reset` · `button`)을 써요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. 실제 비밀번호·개인정보는 절대 넣지 않아요)
  ```html
  <form>
    <label for="menu">메뉴 이름</label>
    <input type="text" id="menu" name="menu" placeholder="예: 라떼" required>
    <fieldset>
      <legend>사이즈</legend>
      <label><input type="radio" name="size" value="s"> 작게</label>
      <label><input type="radio" name="size" value="l"> 크게</label>
    </fieldset>
    <button type="submit">주문하기</button>
  </form>
  ```
  글자를 넣고 버튼을 누르면 주소창 `?` 뒤에 어떤 값이 붙는지 읽어 봐요.
- 예상해 보기: 두 라디오 중 하나의 `name="size"` 를 `name="size2"` 로 바꾸면 어떻게 될까요? — 답: 둘이 한 묶음이 아니라서 둘 다 동시에 선택할 수 있게 돼요.
- 공식 문서: [첫 번째 폼 만들기 (MDN)](https://developer.mozilla.org/ko/docs/Learn_web_development/Extensions/Forms/Your_first_form) · [기본 폼 컨트롤 (MDN)](https://developer.mozilla.org/ko/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| W05-1 기본 구조 | 고른 사이트의 검색 구역(키워드 검색·조건 검색)을 폼으로 옮겨요. 키워드 칸, 날짜 칸(`date`), 지역 선택(`select`)과 "검색" 버튼을 만들어요 | 모든 칸에 `<label for>` 와 `id` 가 짝이 맞음(글자를 눌러 칸이 선택됨) / 키워드 칸에 `name` 이 있고 보낸 뒤 주소창 `?` 뒤에 `name=값` 이 보임 / 버튼에 `type="submit"` |
| W05-2 개념 적용 | 조건 칸을 늘려요: 인원이나 종류를 고르는 라디오 묶음, "추가 옵션" 체크박스 두 개, 한 줄 의견 `textarea` | 라디오가 같은 `name` 으로 묶이고 `fieldset` / `legend` 로 묶음 제목이 있음 / 체크박스 묶음도 `fieldset` / `legend` / 필수 칸에 `required`, `placeholder` 는 예시 글자만 |
| W05-3 응용 | 폼 전체를 점검해요: Tab 키만으로 끝까지 채워 보고, 폼 안의 모든 버튼에 `type` 을 달고, 선택 칸의 첫 `option` 을 안내 글자(`value=""`)로 만들어요 | 모든 `<button>` 에 `type` 이 있음 / `select` 첫 `option` 이 `value=""` / Tab 으로 모든 칸에 갈 수 있음 / 폼 안에 비밀번호·실명·연락처 칸이 없음 |

## 힌트 재료
- 1단계: MDN "첫 번째 폼"·기본 폼 컨트롤 문서(위 링크)
- 2단계: `label` 의 `for` 값과 입력칸의 `id` 를 한 글자씩 똑같이 맞춰요. 칸마다 서로 다른 `id` 를 쓰고, 보낼 칸에는 `name` 을 붙여요. 라디오 묶음은 `name` 을 같게, `value` 는 다르게 줘요.
- 3단계 예시(다른 이름·다른 값):
  ```html
  <label for="area">지역</label>
  <select id="area" name="area">
    <option value="">선택해 주세요</option>
    <option value="east">동쪽</option>
  </select>
  ```

## 자주 막히는 곳
- 이름표를 눌러도 칸이 선택되지 않음 → `for` 와 `id` 철자가 다름
- 보낸 뒤 주소창에 어떤 칸의 값이 없음 → 그 칸에 `name` 이 없음
- 그냥 누르려던 버튼이 폼을 보내 버림 → 폼 안 `<button>` 에 `type` 이 없어서 `submit` 으로 동작함(`type="button"` 명시)
