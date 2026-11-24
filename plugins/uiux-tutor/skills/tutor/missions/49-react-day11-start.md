# 49. Day 11. React 시작 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **Vite 프로젝트**: `npm create vite@latest` 를 치면 React + TypeScript 뼈대를 한 번에 만들어 줘요. Figma 에서 템플릿으로 새 파일을 만드는 것과 같아요. 켜기는 `npm install` → `npm run dev`, 끄기는 `Ctrl + C`.
  - **JSX 규칙 4가지**: ① 가장 바깥은 부모 하나 ② `class` 대신 `className` ③ `<img />` 처럼 모든 태그를 닫기 ④ 글자 사이의 JS 값은 `{}` 로 감싸기.
  - **타입 표기와 `npm run build`**: `const age: number = 7;` 처럼 값의 종류를 적으면, `npm run build` 가 틀린 곳을 `파일:줄:칸 - error TS번호: 설명` 으로 알려 줘요. 안 적어도 TS 가 처음 값을 보고 알아내요(추론).
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `App.tsx` 의 `return` 안을 이것만 남겨요)
  ```tsx
  function App() {
    const name: string = '모모';
    const age: number = 7;
    return (
      <div className="card">
        <h1>{name}</h1>
        <p>{age + 1}살이 돼요</p>
        <img src="/pet.jpg" alt="" />
      </div>
    );
  }
  export default App;
  ```
- 예상해 보기: `const age: number = '7';` 로 바꾸고 `npm run build` 를 치면 어떻게 될까요? — 답: `TS2322`(`Type 'string' is not assignable to type 'number'`) 오류가 나고 빌드가 멈춰요. 오류 줄에 `App.tsx:줄:칸` 이 붙어 있어요.
- 공식 문서: [JSX 로 마크업 작성하기 (React)](https://ko.react.dev/learn/writing-markup-with-jsx) · [JSX 안에서 중괄호 쓰기 (React)](https://ko.react.dev/learn/javascript-in-jsx-with-curly-braces) · [React 와 TypeScript](https://ko.react.dev/learn/typescript)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| R11-1 기본 구조 | 고른 사이트의 [프로필·소개 카드 한 장] 구역을 새 Vite 프로젝트(`react-ts`, 가상 이름)의 `App.tsx` 에 JSX 로 옮겨요. 사진은 자리 표시 | `npm run dev` 로 브라우저에 카드가 보임 / `App.tsx` 의 `return` 가장 바깥이 부모 하나 / `class` 없이 `className` 만 쓰고 `<img />` 처럼 닫음 |
| R11-2 개념 적용 | 카드의 글자·숫자를 변수로 빼고 `{}` 로 출력해요(이름, 나이·개수 같은 숫자 하나는 계산도 해요) | 변수에 `: string`, `: number` 표기 / 화면에 `{name}` 글자 그대로가 아니라 값이 나옴 / 변수 값을 고치면 화면도 바뀜 |
| R11-3 응용 | 일부러 숫자 변수에 글자를 넣어 오류를 만들고, 읽어서 고쳐요 | 오류 한 줄을 복사해 `파일:줄:칸`·`TS번호`·설명으로 나눠 적음 / 고친 뒤 `npm run build` 에 `✓ built in` 이 나옴 / `npm run lint` 오류 없음 |

## 힌트 재료
- 1단계: React 공식 문서 "JSX 로 마크업 작성하기" — https://ko.react.dev/learn/writing-markup-with-jsx
- 2단계: 카드의 바깥 `<div>` 를 하나 두고 그 안에 사진·제목·글을 넣어요. 값이 바뀔 부분만 `const` 변수로 빼고, 태그 안에서 `{변수}` 로 불러요.
- 3단계 예시(다른 이름·다른 값):
  ```tsx
  const title: string = '작은 카페';
  const seats: number = 12;
  return <section className="info"><h2>{title}</h2><p>자리 {seats}개</p></section>;
  ```

## 자주 막히는 곳
- 화면이 하얗고 "Adjacent JSX elements must be wrapped" → `return` 안의 가장 바깥에 부모가 둘이에요. 하나로 감싸요
- `npm` 명령이 "스크립트를 실행할 수 없다"로 막힘(Windows) → 실행 정책 때문이에요. 강의 README 의 해당 안내(Day 11 "Windows" 상자)를 따라요
- `npm run dev` 가 "Missing script" → 프로젝트 폴더 안이 아니에요. `package.json` 이 있는 폴더로 `cd` 해요
