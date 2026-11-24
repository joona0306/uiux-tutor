#!/bin/sh
# uiux-tutor 상태 줄 (macOS·Linux, jq 필요)
input=$(cat)
dir=$(printf '%s' "$input" | jq -r '.workspace.current_dir // .cwd // empty')
out=""
p="$dir/.tutor/progress.json"
if [ -n "$dir" ] && [ -f "$p" ]; then
  out=$(jq -r '[.units[].missions[]] as $m | ($m|length) as $t | ([$m[]|select(.status=="done")]|length) as $d | if $t>0 then "📚 진행률 \(($d*100/$t)|round)% (\($d)/\($t))" else empty end' "$p")
fi
add() { [ -n "$1" ] && { [ -n "$out" ] && out="$out · $1" || out="$1"; }; }
add "$(printf '%s' "$input" | jq -r '.context_window.used_percentage // empty | "대화 \(round)%"')"
add "$(printf '%s' "$input" | jq -r '.rate_limits.five_hour.used_percentage // empty | "5시간 \(round)%"')"
add "$(printf '%s' "$input" | jq -r '.rate_limits.seven_day.used_percentage // empty | "주간 \(round)%"')"
printf '%s\n' "$out"
