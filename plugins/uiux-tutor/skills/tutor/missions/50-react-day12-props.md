# 50. Day 12. 컴포넌트와 props — 미션 예시

## 배우기 재료
- 핵심 개념
  - **컴포넌트**: 화면 조각을 함수로 만든 부품이에요. 이름은 대문자로 시작하고, 파일을 나눠 `export default` / `import` 해요. Figma 의 컴포넌트와 같아요.
  - **props**: 부품마다 다른 내용을 넣는 입구예요(Figma 인스턴스의 속성). 모양은 `type 이름Props = { ... };` 로 적고, 없어도 되는 값은 `?`, 고를 수 있는 값은 `'primary' | 'secondary'` 처럼 적어요.
  - **children**: 부품 태그 사이에 넣은 내용을 받는 입구예요. `children: ReactNode` 로 적고, 타입만 가져올 때는 `import type` 을 써요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `src/components/Badge.tsx` 를 만들고 `App.tsx` 에서 `<Badge label="새 글" />` 로 써요)
  ```tsx
  import type { ReactNode } from 'react';

  type BadgeProps = {
    label: string;
    tone?: 'info' | 'warn';
    children?: ReactNode;
  };

  function Badge({ label, tone = 'info', children }: BadgeProps) {
    return <span className={`badge badge-${tone}`}>{label}{children}</span>;
  }

  export default Badge;
  ```
- 예상해 보기: `App.tsx` 에서 `<Badge />` 처럼 `label` 을 빼먹으면 어떻게 될까요? — 답: `label` 이 필수라서 `TS2741`(`Property 'label' is missing`) 오류가 나요. VS Code 에 빨간 밑줄이 보이고 `npm run build` 도 멈춰요.
- 공식 문서: [첫 컴포넌트 (React)](https://ko.react.dev/learn/your-first-component) · [컴포넌트에 props 전달하기 (React)](https://ko.react.dev/learn/passing-props-to-a-component) · [컴포넌트 import 와 export (React)](https://ko.react.dev/learn/importing-and-exporting-components) · [Everyday Types (TypeScript)](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| R12-1 기본 구조 | 고른 사이트의 [카드 목록] 구역에서 카드 한 장을 `src/components/` 의 컴포넌트 파일로 빼요(가상 내용) | 컴포넌트 이름이 대문자로 시작 / 파일에 `export default`, `App.tsx` 에 `import` / `App.tsx` 에서 같은 컴포넌트를 3번 이상 씀 |
| R12-2 개념 적용 | 카드마다 다른 내용(제목·설명·사진 주소·표시 문구)을 props 로 넘겨요. 없어도 되는 값 하나는 기본값을 줘요 | 컴포넌트 위에 `type 이름Props = { ... };` 가 있음 / 선택 props 에 `?` 와 기본값(`= '...'`) / 카드 3장이 서로 다른 내용으로 보임 |
| R12-3 응용 | 구역을 감싸는 `Section` 컴포넌트(제목 + `children`)를 만들어 카드들을 안에 넣어요. 필수 props 를 일부러 빼먹어 오류도 읽어요 | `children: ReactNode` 와 `import type` 사용 / `TS2741` 오류 메시지를 한 줄 적고 되돌림 / `npm run build` 와 `npm run lint` 오류 없음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- R12-1: 컴포넌트로 뺀 카드의 요소 순서가 원본 카드와 같음
- R12-2: 카드 여러 장의 배치가 원본과 같음
- R12-3: 구역 제목 줄 구성이 원본과 같음

## 힌트 재료
- 1단계: React 공식 문서 "컴포넌트에 props 전달하기" — https://ko.react.dev/learn/passing-props-to-a-component
- 2단계: 카드 JSX 를 새 파일의 함수로 옮기고, 바뀌는 글자를 `{title}` 같은 이름으로 바꿔요. 함수의 매개변수를 `{ title }: 이름Props` 로 받고, `App.tsx` 에서 `<카드 title="..." />` 로 넘겨요.
- 3단계 예시(다른 이름·다른 값):
  ```tsx
  type TagProps = { text: string; color?: 'red' | 'blue' };
  function Tag({ text, color = 'blue' }: TagProps) {
    return <em className={`tag-${color}`}>{text}</em>;
  }
  ```

## 자주 막히는 곳
- 컴포넌트가 화면에 안 나오고 `<card>` 가 그냥 HTML 태그처럼 됨 → 이름이 소문자로 시작해요. `Card` 로 고쳐요
- `Cannot find module` / import 오류 → 경로나 확장자가 틀렸어요. `import Card from './components/Card.tsx'` 처럼 파일 위치를 다시 봐요
- 숫자 props 가 글자로 들어가요 → `count="3"` 은 글자예요. 숫자·변수는 `count={3}` 으로 넘겨요
