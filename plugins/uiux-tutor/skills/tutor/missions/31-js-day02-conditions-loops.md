# 31. Day 02. 조건문과 반복문 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **`if` / `else if` / `else`**: 조건이 참일 때만 `{ }` 안을 실행해요. 갈림길이 여러 개일 때는 **큰 기준부터** 검사해요(작은 기준부터 하면 먼저 걸려 버려요). Figma 프로토타입에서 조건에 따라 다른 화면으로 가는 것과 비슷해요.
  - **`&&` `||` `!` 와 삼항 연산자**: `&&` 는 "그리고"(둘 다 참), `||` 는 "또는"(하나만 참이어도), `!` 는 "아니다"예요. `조건 ? 값1 : 값2` 는 if/else 를 한 줄로 쓴 것이에요.
  - **`for` 반복**: `for (let i = 1; i <= 9; i++)` 는 ① 시작(`i` 를 1로) ② 계속할 조건(`i <= 9` 인 동안) ③ 한 바퀴 끝날 때 할 일(`i` 를 1 늘리기) 세 부분이에요.
- 작은 따라 치기 (사이트와 상관없이 직접 쳐요)
  ```js
  const score = 85;
  if (score >= 90) {
    console.log('A');
  } else if (score >= 80) {
    console.log('B');
  } else {
    console.log('C');
  }
  console.log(score >= 60 ? '통과' : '재시험');
  for (let i = 1; i <= 3; i++) {
    console.log(i + '번째');
  }
  ```
- 예상해 보기: `score` 를 `90` 으로 바꾸면 무엇이 찍힐까요? — 답: `A` (`90 >= 90` 이 참이라서 첫 갈림길에서 끝나요).
- 공식 문서: [if...else (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else) · [for (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for) · [조건부 연산자 (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| JS02-1 기본 구조 | 고른 사이트의 배송비(또는 예약 수수료) 규칙을 `if` / `else` 로 만들어요(예: 5만 원 이상이면 `무료`, 아니면 `3,000원`). 합계 변수 하나만 바꿔 두 갈래를 모두 확인해요 | `if (합계 >= 기준)` 모양(비교에 `=` 한 개 아님) / `else` 로 나머지 처리 / 합계를 두 값으로 바꿔 두 문구가 모두 콘솔에 나옴 |
| JS02-2 개념 적용 | 포인트(또는 방문 횟수)로 등급 3단계를 `else if` 로 정하고, 삼항 연산자로 결제 금액을 구하고, "회원이면서 3만 원 이상일 때만 쿠폰 사용 가능"을 `&&` 로 출력해요 | 등급 검사가 큰 기준부터 / 딱 기준값(경계값) 포함 3가지 값으로 시험해 결과를 적음 / 삼항 연산자 한 줄이 있음 / `&&` 한 조건으로 쿠폰 문구가 나왔다 안 나왔다 함 |
| JS02-3 응용 | 고른 사이트 숙박(또는 이용권) 요금표를 `for` 로 1박~7박까지 만들어요(`1박 80,000원` … 줄마다 출력). 5박 이상 줄에는 `for` 안의 `if` 로 `장기 할인` 을 붙여요 | `for (let i = 1; i <= 7; i++)` 모양 / 콘솔에 7줄 출력 / 5박부터 `장기 할인` 이 붙음 / `for` 의 세 부분이 각각 무슨 뜻인지 말로 설명함 |

## 힌트 재료
- 1단계: MDN `if...else` 문서 — https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else
- 2단계: 먼저 "기준값 변수"와 "합계 변수"를 만들고, `if` 괄호 안에는 비교(`>=`)만, 결과는 `{ }` 안에서 `console.log`. 등급은 큰 기준부터 `else if` 로 이어요. `for` 안에서는 `i` 를 계산에 써요.
- 3단계 예시(다른 이름·다른 값):
  ```js
  const points = 520;
  const grade = points >= 1000 ? 'VIP' : points >= 500 ? 'GOLD' : 'BASIC';
  for (let day = 1; day <= 3; day++) {
    if (day === 3) { console.log(day + '일 - 마지막 날'); }
    else { console.log(day + '일'); }
  }
  ```

## 자주 막히는 곳
- `Unexpected token 'else'` 또는 `Unexpected end of input` → `if` 의 `)` 나 `{ }` 짝이 안 맞아요. `} else {` 를 붙여서 쓰고 들여쓰기로 짝을 확인해요
- 조건이 맞는데 등급이 이상함 → `else if` 를 작은 기준부터 적음. 큰 기준부터 검사해요
- 탭이 멈추고 반응이 없음 → 무한 반복(`i++` 를 빠뜨림). 탭을 닫고 `for` 의 세 번째 부분을 확인해요
