# 28. F07. 인터랙션 프로토타입과 사용성 테스트 — 미션 예시

## 배우기 재료
- 핵심 개념
  - **인터랙션 = 트리거 + 액션**: "언제"(On click/On tap 등)와 "무엇을"(Navigate to, Back, Open overlay, Change to)의 한 쌍이에요. 코드의 이벤트 리스너와 같은 생각이에요. 연결은 원본이 아니라 **복사본 프레임**에 만들어요.
  - **오버레이·스크롤·Smart animate**: Open overlay 는 지금 화면 위에 알림창을 띄우고, Overflow 는 내용이 프레임보다 길 때 스크롤하게 하고(프레임 높이가 Fixed 여야 해요), Smart animate 는 이름이 같은 레이어끼리 부드럽게 움직여요.
  - **사용성 테스트**: "어때요?"라고 묻지 않고 과제를 주고 하는 모습을 관찰해요. 과제는 목표만 말하고 방법(버튼 이름)은 알려 주지 않아요. 1~5명 정도로 큰 문제를 찾고, 참여자는 이름 대신 `U1`·`U2` 번호로 적어요.
- 작은 따라 하기 (사이트와 상관없이 직접 눌러요)
  ```text
  1. 프레임 W 300, H 200 두 개를 만들어 이름을 page-a, page-b 로
  2. page-a 에 사각형 + 글자 "다음" → 사각형 이름 next-btn
  3. Prototype 탭 → next-btn 의 동그라미(+)를 page-b 로 끌기
  4. 트리거 On click/On tap, 액션 Navigate to, 대상 page-b 확인
  5. 오른쪽 사이드바 Present(▶) 로 눌러 보기
  ```
- 예상해 보기: page-b 에 같은 방식으로 Back 액션을 단 사각형을 만들면, page-b 에서 그것을 눌렀을 때 어디로 갈까요? — 답: 직전에 온 화면인 page-a 예요(브라우저 뒤로 가기와 같아요).
- 공식 문서: [Guide to prototyping in Figma (Figma)](https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma) · [Create overlays in your prototypes (Figma)](https://help.figma.com/hc/en-us/articles/360039818254-Create-overlays-in-your-prototypes) · [Prototype scroll and overflow behavior (Figma)](https://help.figma.com/hc/en-us/articles/360039818734-Prototype-scroll-and-overflow-behavior)

| 미션 | 할 일 (고른 사이트의 구역에 맞춰 바꿔요) | 완료 기준 |
|---|---|---|
| F07-1 기본 구조 | F06 의 목록 프레임을 복사해 `proto-list`, 고른 사이트의 [상세]와 [담은 목록(결제 없음)] 화면을 `proto-detail`·`proto-cart` 로 만들고 연결해요 | 프레임 이름이 `proto-list`·`proto-detail`·`proto-cart` / 목록 카드 → 상세, 목록 머리글 → 담은 목록이 On click/On tap + Navigate to / 상세의 뒤로 영역이 Back 액션 / Present 에서 세 화면을 오가고 Back 으로 돌아옴 |
| F07-2 개념 적용 | 상세의 [담기] 버튼에 알림 오버레이를 달고, 목록을 스크롤하게 하고, 필터 버튼 한 쌍을 Change to 로 이어요 | 알림 프레임 `toast-added` 가 Open overlay 로 아래 가운데에 뜨고 밖을 누르면 닫힘 / `proto-list` 의 H 가 Fixed 이고 Overflow 가 Vertical 이라 마지막 카드까지 스크롤됨 / 선택 안 됨 → 선택됨 변형이 Change to + Smart animate 로 눌린 모양이 바뀜 / Share prototype 링크가 다른 브라우저 창에서 열림 |
| F07-3 응용 | 과제 3개로 1~5명을 테스트하고 문제 목록을 만들어 한 가지를 고쳐요 | 과제 문장에 버튼·메뉴 이름이 들어 있지 않음 / 관찰 기록표에 `U1`… 번호별 성공/실패·걸린 시간·한 말(그대로)이 있고 이름·연락처가 없음 / 문제 목록에 "몇 명 중 몇 명"·심각도(높음/중간/낮음)·고칠 방법이 있음 / 그중 하나를 Figma 에서 고친 전후가 보임 |

제출: 프로토타입 공유 링크(보기 권한)와 관찰 기록표(문서 또는 캡처).

## 힌트 재료
- 1단계: Figma 도움말 "Guide to prototyping in Figma" — https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma , 트리거·액션 정리는 https://help.figma.com/hc/en-us/articles/360040035834-Prototype-triggers 와 https://help.figma.com/hc/en-us/articles/360040035874-Prototype-actions
- 2단계: Prototype 탭에서 핫스팟을 고르고 동그라미를 대상 프레임으로 끌어요. 오버레이는 연결을 만든 뒤 Interaction 창에서 Position 과 Close when clicking outside 를 정해요. 스크롤은 프레임 H 를 Fixed 로 두고 Overflow 를 Vertical 로. Change to 는 컴포넌트 세트 안 변형끼리 이어요. 과제는 "…를 해 보세요"처럼 목표만 읽어 줘요.
- 3단계 예시(다른 이름·다른 값):
  ```text
  인터랙션  트리거 On click/On tap → 액션 Open overlay → 대상 sheet-help
            Position: Bottom center · Close when clicking outside: 켬
  과제 예  ✅ "내일 일정에 맞는 항목을 하나 저장해 보세요"
           ❌ "저장 버튼을 눌러 보세요"
  ```

## 자주 막히는 곳
- 스크롤이 안 됨 → 프레임 H 가 Hug 라 내용이 프레임보다 길지 않아요. H 를 Fixed 로
- 카드 전체 연결과 그 안 버튼 연결이 같이 있어 헷갈림 → 안쪽 버튼에도 자기 연결을 따로 만들고, Present 에서 버튼과 카드 다른 곳을 각각 눌러 확인해요
- 테스트에서 모두 성공만 함 → 같은 반 친구는 구조를 이미 알아요. 처음 보는 사람에게 과제를 읽어 줘요
