# 01. W01. 웹의 원리와 작업 환경 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **HTML·CSS·JavaScript 역할**: HTML은 내용(뼈대), CSS는 모양, JavaScript는 동작이에요. Figma로 치면 HTML은 레이어 목록, CSS는 오른쪽 Design 패널 값, JavaScript는 Prototype 인터랙션이에요.
  - **브라우저와 서버**: 주소를 넣으면 브라우저가 서버에 "이 파일 주세요" 하고, 받은 HTML 파일을 위에서 아래로 읽어 화면을 그려요.
  - **파일 이름 규칙**: 폴더·파일 이름은 영문 소문자와 하이픈(`about-me.html`)만 써요. 파일 이름이 곧 주소의 일부라서, 띄어쓰기·한글·대문자는 주소가 깨지는 원인이 돼요. 첫 페이지 이름은 `index.html` 이에요.
- 작은 따라 치기 (사이트와 상관없는 연습 폴더 `web-w01` 에서 직접 쳐요)
  ```html
  <!DOCTYPE html>
  <html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>연습 페이지</title>
  </head>
  <body>
    <h1>안녕, 웹!</h1>
  </body>
  </html>
  ```
  저장(`Ctrl + S`) 뒤 파일을 오른쪽 클릭 → **Open with Live Server** 로 열어요. 주소가 `http://127.0.0.1:5500/…` 로 시작하면 성공이에요.
- 예상해 보기: `<h1>안녕, 웹!</h1>` 의 글자를 바꾸고 저장만 하면(새로고침은 안 누르고) 화면이 어떻게 될까요? — 답: Live Server가 저장을 알아채고 화면을 자동으로 새로 고쳐서 바뀐 글자가 보여요.
- 공식 문서: [개발자 도구란 무엇인가 (MDN, 영어)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) · [HTML 기본 문법 (MDN)](https://developer.mozilla.org/ko/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| W01-1 기본 구조 | 클론 작업 폴더 `clone/` 을 만들고 VS Code로 열어(File → Open Folder) 안에 `index.html` 파일을 만들어요. Live Server 확장을 설치해요 | 폴더·파일 이름이 영문 소문자·하이픈뿐 / `clone/index.html` 파일이 있음 / VS Code 확장 목록에 Live Server가 보임 |
| W01-2 개념 적용 | 고른 사이트의 첫 화면에서 가장 큰 제목 한 줄을 찾아, 내 말로 바꿔 쓴 한 줄을 `<h1>` 에 넣어 첫 `index.html` 을 완성해요 | 문서 뼈대(`<!DOCTYPE html>` · `<html lang="ko">` · `<meta charset="UTF-8">` · `<title>`)가 있음 / `<body>` 안에 `<h1>` 이 한 개 / Live Server로 연 주소가 `127.0.0.1` 로 시작하고 화면에 제목이 보임 |
| W01-3 응용 | 브라우저(Chrome)에서 고른 사이트와 내 페이지를 나란히 열고 F12 → Elements 로 들여다봐요. 내 `<h1>` 글자를 개발자 도구에서 잠깐 바꿔 보고 새로고침해 돌아오는 걸 확인해요 | Elements 에서 내 `<h1>` 을 찾음 / 고른 사이트의 큰 제목 요소의 태그 이름을 말할 수 있음 / "HTML은 내용, CSS는 모양, JS는 동작"을 고른 사이트 화면의 예 하나씩으로 말할 수 있음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- W01-1: 해당 없음 (작업 환경 준비)
- W01-2: 내 `<h1>` 이 원본 첫 화면에서 가장 큰 제목과 같은 자리·같은 역할(맨 위 큰 제목)
- W01-3: 해당 없음 (살펴보기)

## 힌트 재료
- 1단계: 개발자 도구 열기와 HTML 문법 — 위 공식 문서 두 개
- 2단계: 폴더는 VS Code **File → Open Folder…** 로 열어야 오른쪽 클릭 메뉴에 Live Server가 나와요. 파일 이름은 `index.html` 하나로, 확장자까지 정확히. 제목은 `<body>` 안, 탭 이름은 `<head>` 안 `<title>` 이에요.
- 3단계 예시(다른 이름·다른 값):
  ```html
  <body>
    <h1>우리 동네 북카페</h1>
  </body>
  ```

## 자주 막히는 곳
- 오른쪽 클릭 메뉴에 Live Server가 없음 → 파일 하나만 열었거나(폴더째 열어야 함) 확장 미설치, 또는 제한 모드(Trust 선택)
- 화면에 `<h1>` 글자가 그대로 보이고 주소가 `file:///` 로 시작 → 더블클릭으로 열었거나 파일 이름이 `index.html.txt`
- 한글이 깨져 보임 → `<head>` 에 `<meta charset="UTF-8">` 가 빠짐
