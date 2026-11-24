# 55. Day 16. useEffect와 fetch — 미션 예시

## 배우기 재료
- 핵심 개념
  - **useEffect**: 화면을 그린 다음에 할 일을 적는 곳이에요. 뒤의 의존성 배열이 "언제 다시 실행할지"를 정해요: `[]` 는 처음 한 번, `[값]` 은 그 값이 바뀔 때, 배열이 없으면 그릴 때마다. 개발 모드에서는 점검을 위해 한 번 더 실행돼 두 번 보여요.
  - **fetch 로 불러오기**: `public/` 폴더의 JSON 을 `fetch('/파일.json')` 으로 불러와 state 에 담아요. 빈 배열로 시작하니 `useState<Item[]>([])` 처럼 타입을 적어요. Day 08 의 JS 앱에서 하던 일과 같은 일이에요.
  - **세 가지 상태**: 불러오는 중(로딩) · 실패(오류) · 성공(결과)를 따로 보여 줘요. `catch (err)` 의 `err` 는 무엇인지 모르는 값(`unknown`)이라 그대로 꺼내 쓰지 않아요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요. `public/notes.json` 에 `[{"id":1,"title":"첫 메모"}]` 를 넣어요)
  ```tsx
  import { useEffect, useState } from 'react';

  type Note = { id: number; title: string };

  function NoteList() {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
      let ignore = false;
      async function load() {
        const response = await fetch('/notes.json');
        const data: Note[] = await response.json();
        if (!ignore) setNotes(data);
      }
      load();
      return () => {
        ignore = true;
      };
    }, []);

    return <ul>{notes.map((n) => <li key={n.id}>{n.title}</li>)}</ul>;
  }
  export default NoteList;
  ```
- 예상해 보기: 맨 아래 `}, []);` 의 `[]` 를 지우면(`}); `) 어떻게 될까요? — 답: 그릴 때마다 이펙트가 다시 돌아요. `setNotes` 가 다시 그리게 하니 요청이 끝없이 반복돼요(개발자 도구 Network 에 `notes.json` 이 계속 쌓임).
- 공식 문서: [useEffect (React)](https://ko.react.dev/reference/react/useEffect) · [Effect 와 동기화하기 (React)](https://ko.react.dev/learn/synchronizing-with-effects) · [Fetch 사용하기 (MDN)](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| R16-1 기본 구조 | 고른 사이트의 [카드 목록] 구역을 `public/items.json`(가상 데이터 8개)에서 불러와 그려요. JS 단원(Day 08)에서 만든 앱이 있으면 그것을 React 로 옮겨요 | `public/items.json` 이 있고 `fetch('/items.json')` 사용 / `useState<Item[]>([])` 와 `Promise<Item[]>` 표기 / `useEffect` 의 의존성 배열이 `[]` / 화면에 카드 8장 |
| R16-2 개념 적용 | 로딩·오류·결과 세 상태를 화면에 나눠 보여 줘요. 파일 이름을 일부러 틀리게 해 오류 문구도 확인해요 | 불러오는 동안 "불러오는 중" 문구 / `response.ok` 가 아니면 오류 상태로 바뀌어 안내 문구 / 파일 이름을 틀리게 하면 안내 문구가 보임(확인 후 되돌림) |
| R16-3 응용 | 검색어와 분류로 거르고, 결과 개수와 빈 결과 문구를 보여 줘요. 마지막에 JS 앱과 React 앱을 나란히 비교해요 | 거르기는 state 로 조건만 두고 `filter` 로 계산 / `N개` 문구와 0개일 때 안내 문구 / README 에 JS 코드 ↔ React 코드 짝 3가지 이상 / `npm run build` 와 `npm run lint` 오류 없음 |

## 원본 닮음
미션마다 완료 기준 끝에 "원본 닮음" 기준을 하나 더한다. 튜터가 고른 사이트를 같은 폭으로 열어 아래 항목의 **원본 값**(칸 수·순서·자리·DevTools로 읽은 값)을 넣어 구체적으로 만든다. 사진·글은 원본 것을 쓰지 않으므로 비교하지 않는다.
- R16-1: 카드 목록 배치가 원본과 같음
- R16-2: 불러오는 중·빈 결과·오류 때 원본이 보여 주는 상태와 같은 종류 (원본에서 직접 만들어 확인, 없으면 그 부분 빼기)
- R16-3: 검색창·분류 자리와 결과 0개 문구 자리가 원본과 같음

## 힌트 재료
- 1단계: React 공식 문서 "useEffect" — https://ko.react.dev/reference/react/useEffect
- 2단계: 데이터를 불러오는 함수는 컴포넌트 밖에 따로 두고, 이펙트 안에서 부르고 결과를 state 에 담아요. 로딩·오류는 state 두 개(`loading`, `error`)로 구분하고, 화면은 `if` 로 하나씩 먼저 돌려보내요.
- 3단계 예시(다른 이름·다른 값):
  ```tsx
  async function fetchPlaces(): Promise<Place[]> {
    const response = await fetch('/places.json');
    if (!response.ok) throw new Error('불러오지 못했어요');
    return response.json();
  }
  ```

## 자주 막히는 곳
- `/items.json` 이 404 → 파일이 `public/` 밖에 있어요. `public/items.json` 으로 옮기고 개발 서버를 다시 켜요
- 콘솔에 요청이 두 번 찍힘 → 개발 모드(StrictMode)의 정상 동작이에요. 실제 빌드에서는 한 번이에요
- 요청이 끝없이 반복됨 → `useEffect` 의 `[]` 가 빠졌거나, 의존성에 매번 새로 만들어지는 값을 넣었어요
