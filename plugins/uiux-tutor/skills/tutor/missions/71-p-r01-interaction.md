# 71. R01. React 인터랙션과 접근성 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **aria-expanded / aria-controls**: 펼침 버튼이 지금 열렸는지(`aria-expanded`), 무엇을 여닫는지(`aria-controls` = 목록의 `id`)를 화면 낭독기에게 알려 줘요. 눈으로 보는 사람에게는 "열림/닫힘 표지판"을 글로 달아 주는 일이에요.
  - **useRef 로 진짜 요소 붙잡기**: `useState` 는 화면에 보이는 값을 기억하고, `useRef` 는 진짜 `<button>`·`<dialog>` 요소를 붙잡아요. 처음엔 비어 있어서 `null` 이라 `ref.current?.focus()` 처럼 `?.` 로 다뤄요.
  - **포커스 돌려주기**: 메뉴·모달을 닫으면 키보드 사용자의 "현재 위치"를 연 버튼으로 돌려줘야 길을 잃지 않아요. `<dialog>` 는 `showModal()` 로 열면 `Esc` 닫기·바깥 막기를 브라우저가 해 줘요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `Toggle.tsx` 를 만들어 아무 페이지에 넣어요)
  ```tsx
  'use client';
  import { useRef, useState } from 'react';

  export default function Toggle() {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    return (
      <div>
        <button ref={buttonRef} type="button" aria-expanded={isOpen} aria-controls="note"
          onClick={() => setIsOpen(!isOpen)}>설명 {isOpen ? '접기' : '펼치기'}</button>
        {isOpen && <p id="note">펼쳐진 설명이에요.</p>}
      </div>
    );
  }
  ```
- 예상해 보기: `aria-expanded={isOpen}` 줄을 지우면 화면은 똑같이 열리고 닫히는데, 화면 낭독기 사용자에게는 무엇이 달라질까요? — 답: 버튼이 지금 접힘인지 펼침인지 알려 주지 않아요. 눈에 보이는 변화는 없어도 낭독기 사용자는 상태를 알 수 없어요.
- 공식 문서: [aria-expanded (MDN, 영어)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) · [`<dialog>` (MDN)](https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements/dialog) · [useRef (React)](https://ko.react.dev/reference/react/useRef)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| P01-1 기본 구조 | 고른 사이트의 머리글(헤더)에 모바일 메뉴 버튼과 메뉴 목록을 만들어요(메뉴 항목은 내가 쓴 이름) | 버튼이 `<button type="button">` / `aria-expanded` 가 `isOpen` 값과 같이 바뀜(DevTools Elements 에서 확인) / `aria-controls` 값 = 목록의 `id` |
| P01-2 개념 적용 | `Esc` 로 메뉴를 닫고, 닫으면 포커스를 메뉴 버튼으로 돌려줘요 | `useRef<HTMLButtonElement>(null)` + `ref.current?.focus()` 사용 / 메뉴가 열렸을 때만 `keydown` 을 듣고 `removeEventListener` 로 정리함 / 마우스 없이 `Tab`→`Enter`→`Esc` 후 포커스 링이 버튼에 있음 |
| P01-3 응용 | 고른 사이트의 사진 구역(상세 큰 사진 또는 슬라이드)에 `<dialog>` 모달 또는 `useState` 번호 하나짜리 슬라이드를 붙여요(자리 표시 사진) | 모달: `showModal()`/`close()` + `onClose` 로 state 맞춤 + 닫으면 연 버튼으로 포커스 / 슬라이드: 이전·다음 버튼에 `aria-label`, 영역에 `aria-live="polite"` / 키보드 점검표(Tab 순서·포커스 링·Esc·아이콘 버튼 이름)를 마우스 없이 통과 / `npm run build`·`npm run lint` 통과 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- P01-1: 메뉴 버튼 자리와 열린 메뉴 모양이 원본과 같음
- P01-2: 해당 없음 (키보드 동작)
- P01-3: 사진 구역 배치가 원본과 같음

## 힌트 재료
- 1단계: MDN aria-expanded — https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded , react.dev useRef — https://ko.react.dev/reference/react/useRef
- 2단계: 메뉴가 열려 있을 때만 `useEffect` 안에서 `document.addEventListener('keydown', …)`, 정리 함수에서 `removeEventListener`. 모달은 `useEffect` 에서 `open` 값에 따라 `dialogRef.current?.showModal()` / `close()`.
- 3단계 예시(다른 이름·다른 값):
  ```tsx
  useEffect(() => {
    if (!isShown) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') { setIsShown(false); openerRef.current?.focus(); }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isShown]);
  ```

## 자주 막히는 곳
- `Esc` 가 안 먹음 → `useEffect` 의 의존성 배열에 `[isOpen]` 이 빠졌거나, 열려 있을 때만 듣도록 한 `if` 가 거꾸로임
- `ref.current` 가 `null` → 버튼에 `ref={…}` 를 안 달았거나, 조건부로 그려서 아직 없는 요소를 붙잡음
- 모달을 닫았는데 `isOpen` 이 `true` 로 남음 → `Esc` 로 닫으면 `dialog` 가 스스로 닫히니 `onClose` 에서 state 를 `false` 로 맞춰야 해요
