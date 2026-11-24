#!/bin/sh
# uiux-tutor 상태 줄 (macOS·Linux, jq 필요)
input=$(cat)
dir=$(printf '%s' "$input" | jq -r '.workspace.current_dir // .cwd // empty')
out=""
p="$dir/.tutor/progress.json"
if [ -n "$dir" ] && [ -f "$p" ]; then
  out=$(jq -r '[.units[].missions[] | select(.optional != true)] as $m | ($m|length) as $t | ([$m[]|select(.status=="done")]|length) as $d | if $t>0 then "📚 진행률 \(($d*100/$t)|round)% (\($d)/\($t))" else empty end' "$p")
  areas=$(jq -r '(.site.map // []) as $a | if ($a|length)>0 then "구역 완성 \([$a[]|select(.status=="완성")]|length)/\($a|length)" else empty end' "$p")
  [ -n "$areas" ] && { [ -n "$out" ] && out="$out · $areas" || out="$areas"; }
  flows=$(jq -r '(.site.flows // []) as $f | if ($f|length)>0 then "흐름 완성 \([$f[]|select(.status=="완성")]|length)/\($f|length)" else empty end' "$p")
  [ -n "$flows" ] && { [ -n "$out" ] && out="$out · $flows" || out="$flows"; }
fi
add() { [ -n "$1" ] && { [ -n "$out" ] && out="$out · $1" || out="$1"; }; }
add "$(printf '%s' "$input" | jq -r '.context_window.used_percentage // empty | "대화 \(round)%"')"
add "$(printf '%s' "$input" | jq -r '.rate_limits.five_hour.used_percentage // empty | "5시간 \(round)%"')"
add "$(printf '%s' "$input" | jq -r '.rate_limits.seven_day.used_percentage // empty | "주간 \(round)%"')"
printf '%s\n' "$out"
