# 58. Day 18. CSS Modules — 미션 예시

## 배우기 재료
- 핵심 개념
  - **이름 충돌**: 전역 CSS 에서 두 컴포넌트가 둘 다 `.title` 을 쓰면, 한쪽을 고칠 때 다른 쪽도 바뀌어요.
  - **CSS Modules**: `Card.module.css` 를 만들고 `import styles from './Card.module.css'` → `className={styles.title}` 로 써요. 빌드할 때 이름 뒤에 고유한 해시가 붙어 그 컴포넌트에서만 적용돼요. class 이름은 `.cardTitle` 처럼 camelCase 로 지어야 `styles.cardTitle` 로 꺼낼 수 있어요.
  - **조합과 조건**: class 두 개는 템플릿 리터럴 `` `${styles.tag} ${styles.active}` `` 로 이어 붙이고, 조건은 `? :` 로 골라요. `styles.이름` 의 오타는 TS 가 못 잡아요(없는 이름은 `undefined`).
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `Tag.module.css` 와 `Tag.tsx`)
  ```css
  .tag { padding: 4px 8px; border-radius: 999px; background: rgb(0 0 0 / 8%); }
  .active { background: black; color: white; }
  ```
  ```tsx
  import styles from './Tag.module.css';

  type TagProps = { label: string; active: boolean };

  function Tag({ label, active }: TagProps) {
    return <span className={active ? `${styles.tag} ${styles.active}` : styles.tag}>{label}</span>;
  }
  export default Tag;
  ```
- 예상해 보기: `styles.active` 를 `styles.actvie` 로 잘못 쓰고 `npm run build` 를 치면 어떻게 될까요? — 답: 오류 없이 빌드돼요. TS 가 `styles` 의 어떤 이름이든 글자로 보기 때문이에요. 대신 화면에서 `.active` 스타일이 안 먹어요.
- 공식 문서: [class 선택자 (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/Reference/Selectors/Class_selectors) · [조건부 렌더링 (React)](https://ko.react.dev/learn/conditional-rendering) · [Everyday Types (TypeScript)](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| R18-1 기본 구조 | 고른 사이트의 [카드]와 [배너] 두 컴포넌트가 전역 CSS 에서 같은 `.title` 을 쓰게 해서 충돌을 직접 보여 줘요 | 한쪽 `.title` 만 고쳤는데 다른 쪽도 바뀐 것을 화면(또는 캡처)으로 확인 / README 에 한 줄로 원인 적음 |
| R18-2 개념 적용 | 카드 컴포넌트의 스타일을 `이름.module.css` 로 옮기고, class 둘을 조합해요 | `Card.module.css` 와 `import styles from ...` / class 이름이 camelCase(하이픈 없음) / DevTools 에서 class 이름이 원래 이름이 아니라 해시가 붙은 이름으로 보임 / 템플릿 리터럴로 class 두 개를 이어 붙임 |
| R18-3 응용 | 필터 버튼과 메뉴(`NavLink`)에 "선택됨" 스타일을 조건부 class 로 붙이고, 전역 CSS 는 정리해요 | 선택한 필터 버튼만 `active` 스타일 / `NavLink` 는 `({ isActive }: NavLinkRenderProps)` 함수와 `import type` 사용 / 전역 CSS 에는 공통 기본값(본문 글꼴 등)만 남음 / `npm run build` 와 `npm run lint` 오류 없음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- R18-1: 해당 없음 (충돌 보여 주기)
- R18-2: CSS Modules로 옮긴 뒤 카드 모양이 원본과 같음
- R18-3: "선택됨" 표시 모양이 원본 메뉴·필터와 같음

## 힌트 재료
- 1단계: Vite 공식 문서 "CSS Modules"(Features 페이지) — https://vite.dev/guide/features.html
  (참고) MDN "class 선택자" — https://developer.mozilla.org/ko/docs/Web/CSS/Reference/Selectors/Class_selectors (CSS Modules 사용법은 강의 Day 18 Step 2~5)
- 2단계: 파일 이름이 `.module.css` 로 끝나야 해요. 컴포넌트 파일 맨 위에서 `styles` 로 가져오고, `className="card"` 를 `className={styles.card}` 로 바꿔요. 조건부는 선택됐을 때만 `styles.active` 를 더해요.
- 3단계 예시(다른 이름·다른 값):
  ```tsx
  import type { NavLinkRenderProps } from 'react-router';
  import styles from './Menu.module.css';

  function getMenuClass({ isActive }: NavLinkRenderProps) {
    return isActive ? `${styles.menuItem} ${styles.current}` : styles.menuItem;
  }
  ```

## 자주 막히는 곳
- `styles.card-title` 이 오류 → 하이픈은 JS 이름으로 쓸 수 없어요. CSS 에서 `.cardTitle` 로 짓고 `styles.cardTitle`
- 스타일이 안 먹는데 오류도 없음 → `styles.이름` 오타예요. TS 가 못 잡으니 CSS 파일의 이름과 글자 하나씩 대조해요
- `NavLink` 의 현재 메뉴 스타일이 안 보임 → 전역 이름 `active` 가 아니라 module 의 해시 이름이에요. `className` 에 함수를 줘서 `styles.active` 를 붙여요
