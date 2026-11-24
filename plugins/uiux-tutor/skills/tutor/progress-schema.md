# 진도 파일 모양 — `.tutor/progress.json`

학습자가 Claude Code를 연 폴더의 `.tutor/progress.json`. 튜터와 상태 줄 스크립트가 함께 읽는다.

```json
{
  "version": 1,
  "started_at": "2026-11-24T10:00:00+09:00",
  "updated_at": "2026-11-24T11:20:00+09:00",
  "site": {
    "url": "https://example.com",
    "name": "가상 이름: 여행 노트",
    "checked_with": "playwright",
    "map": [
      { "area": "머리글", "layout": "가로 flex", "moving": "모바일 메뉴" },
      { "area": "여행지 목록", "layout": "카드 격자", "moving": "" }
    ]
  },
  "diagnosis": "flex·sticky·grid 사용, @media 없음 → W14 제안",
  "range": { "from": 12, "to": 21 },
  "workspace": "clone",
  "current": { "unit": 13, "mission": "W13-2" },
  "weak": ["미디어쿼리 표기"],
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
- `criteria`: 미션을 줄 때 보여 준 완료 기준 그대로(평가 때 빠짐없이 판정)
- `learned`: 그 회차의 배우기(미니 수업)를 끝냈는지
- `weak`: 평가에서 보완이 나온 개념(상태에서 복습 추천에 씀)
- `deploys`: 배포한 주소 기록
- `range.from`·`to`: curriculum.md 의 회차 번호
- 진행률 = 모든 `units[].missions[]` 중 `done` 수 ÷ 전체 미션 수
- 개인정보(이름·연락처), 비밀 키는 넣지 않는다.
