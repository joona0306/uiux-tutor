# 진도 파일 모양 — `.tutor/progress.json`

학습자가 Claude Code를 연 폴더의 `.tutor/progress.json`. 튜터와 상태 줄(`hooks/status.ts`, 예전 방식은 `scripts/statusline.*`)이 함께 읽는다.

```json
{
  "version": 1,
  "started_at": "2026-11-24T10:00:00+09:00",
  "updated_at": "2026-11-24T11:20:00+09:00",
  "site": {
    "url": "https://example.com",
    "name": "가상 이름: 여행 노트",
    "checked_with": "playwright",
    "terms": "이용약관 확인: 자동 수집 금지 조항 없음 (2026-11-25)",
    "pages": [
      { "name": "축제 목록", "url": "/list?type=festival", "areas": ["거르기", "카드 격자", "페이지 번호"] },
      { "name": "상세", "url": "/detail?id=…", "areas": ["큰 사진", "제목·기간", "지도", "찜 버튼"] }
    ],
    "flows": [
      {
        "name": "축제 찾기",
        "steps": [
          { "screen": "홈", "action": "축제 카드 누르기", "url": "/", "states": [] },
          { "screen": "상세", "action": "찜 버튼", "url": "/detail?id=…", "states": ["찜 켜짐"], "login": true }
        ],
        "status": "덜 됨",
        "gaps": ["상세 주소에 id 없음"]
      }
    ],
    "map": [
      { "area": "머리글", "layout": "가로 flex", "moving": "모바일 메뉴", "status": "완성", "gaps": [] },
      { "area": "여행지 목록", "layout": "카드 격자(1280px 4장)", "moving": "", "status": "덜 됨", "gaps": ["1280px 3장(원본 4장)", "제목 줄에 '더보기' 없음"] }
    ]
  },
  "diagnosis": "flex·sticky·grid 사용, @media 없음 → W14 제안",
  "range": { "from": 12, "to": 21 },
  "workspace": "clone",
  "current": { "unit": 13, "mission": "W13-2" },
  "weak": ["미디어쿼리 표기"],
  "reviews": [{ "date": "2026-11-25", "topics": ["gap", "미디어쿼리 표기"], "score": "3/5" }],
  "deploys": [{ "unit": 47, "tool": "GitHub Pages", "url": "https://아이디.github.io/travel-note/" }],
  "units": [
    {
      "no": 13,
      "title": "W13. Grid",
      "learned": true,
      "missions": [
        {
          "id": "W13-2",
          "title": "목록을 grid로",
          "area": "여행지 목록",
          "criteria": ["640px 이상 2열, 1024px 이상 3열", "@media (width >= 640px) 모양", "간격은 gap"],
          "status": "doing",
          "optional": false,
          "done_at": null,
          "hints": 1,
          "attempts": 2,
          "answer_seen": false,
          "feedback": ["시도 1: 미디어쿼리 표기 보완"]
        }
      ]
    }
  ]
}
```

- `status`: `todo` | `doing` | `done`
- `criteria`: 미션을 줄 때 보여 준 완료 기준 그대로(평가 때 빠짐없이 판정). 마지막 줄은 보통 "원본 닮음: …(원본 값)"
- `site.map[].status`: `완성` | `덜 됨` | `안 함` — 원본과 같은 폭으로 나란히 보고 정한 구역 완성 상태. `gaps` 는 원본과 다른 점
- 구역 완성 = `status` 가 `완성` 인 구역 수 ÷ 전체 구역 수 (진행률과 따로 보여 줌)
- `site.pages`: 로그인 없이 본 대표 화면 목록. `site.flows`: 핵심 유저플로우 2~3개(단계마다 화면·누르는 곳·주소·상태, 로그인이 필요한 단계는 `login: true`). `status`·`gaps` 는 구역과 같은 뜻. 흐름 완성 = `완성` 인 흐름 수 ÷ 전체 흐름 수
- `site.terms`: 이용약관 확인 결과 한 줄
- `optional`: `true` 면 마무리 미션·선택 미션 — 진행률 계산에서 뺀다
- 로그인한 화면에서 본 개인정보는 어디에도 적지 않는다(구조만)
- `learned`: 그 회차의 배우기(미니 수업)를 끝냈는지
- `weak`: 평가에서 보완이 나온 개념(상태에서 복습 추천에 씀)
- `deploys`: 배포한 주소 기록
- `reviews`: 복습 기록(날짜·주제·점수)
- `done_at`: 미션을 끝낸 날(복습할 회차 고를 때 씀)
- `range.from`·`to`: curriculum.md 의 회차 번호
- 진행률 = 모든 `units[].missions[]` 중 `done` 수 ÷ 전체 미션 수
- 개인정보(이름·연락처), 비밀 키는 넣지 않는다.
