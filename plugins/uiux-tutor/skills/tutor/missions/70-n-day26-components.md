# 70. Day 26. Figma → 코드 ② 컴포넌트·Variants → React props, 반응형 화면 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **Variant → props**: Figma 컴포넌트의 Variant 속성 이름이 prop 이름, 값 목록이 유니언 타입(`'primary' | 'secondary'`)이 돼요. Text 속성은 `children`(또는 같은 이름 props), Boolean 속성은 조건부 렌더링이에요. 인스턴스는 `<Button />` 을 쓰는 것과 같아요.
  - **클래스를 객체에서 고르기**: `variantClasses[variant]` 처럼 값마다 클래스 글자를 객체에 적어 두고 골라요. 클래스 이름을 글자로 이어 붙이면(`'bg-' + color`) Tailwind 가 클래스를 찾지 못해요.
  - **`ComponentProps<'button'>`**: `<button>` 이 원래 받는 속성(`disabled`, `onClick` …)을 이어받는 타입이에요. `disabled` 는 모양(`disabled:opacity-40`)과 동작(`{...rest}` 로 진짜 버튼에 전달) 두 곳에 모두 적용해요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `components/Chip.tsx`)
  ```tsx
  import type { ComponentProps } from 'react';

  type ChipTone = 'info' | 'warn';

  const toneClasses: Record<ChipTone, string> = {
    info: 'bg-blue-100 text-blue-900',
    warn: 'bg-amber-100 text-amber-900',
  };

  interface ChipProps extends ComponentProps<'span'> {
    tone?: ChipTone;
  }

  export default function Chip({ tone = 'info', children, ...rest }: ChipProps) {
    return <span className={`rounded-full px-3 py-1 ${toneClasses[tone]}`} {...rest}>{children}</span>;
  }
  ```
  `<Chip tone="warn">주의</Chip>` 을 페이지에 넣어 색이 바뀌는지 봐요.
- 예상해 보기: `<Chip tone="danger">` 라고 쓰면 어떻게 될까요? — 답: `'info' | 'warn'` 에 없는 값이라 타입 오류(빨간 밑줄, `npm run build` 실패)가 나요.
- 공식 문서: [타입스크립트 사용하기 (React)](https://ko.react.dev/learn/typescript) · [유니언 타입 (TypeScript)](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) · [반응형 디자인 (Tailwind CSS)](https://tailwindcss.com/docs/responsive-design) · [컴포넌트 속성 (Figma)](https://help.figma.com/hc/ko/articles/5579474826519) · [Dev Mode 가이드 (Figma)](https://help.figma.com/hc/ko/articles/15023124644247)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| N70-1 기본 구조 | F04 에서 만든 고른 사이트의 버튼 컴포넌트(Variant·Size)를 `components/Button.tsx` 로 옮겨요 | Figma Variant 속성·값 이름이 prop 이름·유니언 타입 값과 같음 / `variantClasses` 객체에서 클래스를 고름 / Text 속성은 `children` |
| N70-2 개념 적용 | `interface ButtonProps extends ComponentProps<'button'>` 로 `disabled`·`onClick` 을 받게 하고, 카드 컴포넌트에 Text·Boolean 속성도 옮겨요 | `{...rest}` 로 진짜 `<button>` 에 전달 / `disabled` 일 때 `disabled:opacity-40` 이 적용되고 클릭이 안 됨 / Boolean 속성은 `&&` 또는 `? :` 로 보이고 숨김(0 같은 숫자를 `&&` 왼쪽에 두지 않음) |
| N70-3 응용 | F06 의 `list-mobile`·`list-desktop` 프레임을 코드 하나로 옮겨요(모바일 먼저) | 기본 클래스는 모바일, `sm:`·`md:`·`lg:` 로 열 수를 늘림(1 → 2 → 3열) / 브라우저 폭 375·768·1024 에서 Figma 프레임과 열 수가 같음 / `npm run build` 와 `npm run lint` 오류 없음 |

## 힌트 재료
- 1단계: Tailwind 공식 문서 "반응형 디자인" — https://tailwindcss.com/docs/responsive-design
- 2단계: Figma 컴포넌트 세트의 오른쪽 사이드바에서 속성 이름과 값 목록을 그대로 읽어 prop·타입으로 옮겨요. 접두사 없는 클래스가 모바일 기본, `sm:` 은 640px 이상, `md:` 는 768px 이상, `lg:` 는 1024px 이상이에요.
- 3단계 예시(다른 이름·다른 값):
  ```tsx
  type BadgeSize = 'sm' | 'lg';
  const sizeClasses: Record<BadgeSize, string> = { sm: 'px-2 text-sm', lg: 'px-4 text-lg' };

  <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{/* 카드들 */}</ul>
  ```

## 자주 막히는 곳
- 색이 안 바뀜 → 클래스를 `'bg-' + color` 처럼 이어 붙임. 완성된 클래스 글자를 객체에 적어요
- `disabled` 인데 클릭됨 → `{...rest}` 를 진짜 `<button>` 에 넘기지 않음
- 데스크톱에서만 열이 늘어남/좁은 화면이 깨짐 → 데스크톱 기준으로 먼저 쓰고 줄임. 모바일 기본 + `sm:`·`md:`·`lg:` 로 늘려요
