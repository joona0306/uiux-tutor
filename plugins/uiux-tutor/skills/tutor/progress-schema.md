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
  "range": { "from": 12, "to": 21 },
  "workspace": "clone",
  "current": { "unit": 13, "mission": "W13-2" },
  "units": [
    {
      "no": 13,
      "title": "W13. Grid",
      "missions": [
        {
          "id": "W13-2",
          "title": "목록을 grid로",
          "area": "여행지 목록",
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
- `range.from`·`to`: curriculum.md 의 회차 번호
- 진행률 = 모든 `units[].missions[]` 중 `done` 수 ÷ 전체 미션 수
- 개인정보(이름·연락처), 비밀 키는 넣지 않는다.
