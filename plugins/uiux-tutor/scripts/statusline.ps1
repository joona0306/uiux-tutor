# uiux-tutor 상태 줄 (Windows PowerShell)
# Claude Code가 stdin으로 넘기는 JSON + 현재 폴더의 .tutor/progress.json 으로 한 줄을 만든다.
$ErrorActionPreference = 'SilentlyContinue'
[Console]::OutputEncoding = [Text.Encoding]::UTF8
$d = [Console]::In.ReadToEnd() | ConvertFrom-Json
$dir = $d.workspace.current_dir
if (-not $dir) { $dir = $d.cwd }
$parts = @()
$p = Join-Path $dir '.tutor\progress.json'
if ($dir -and (Test-Path $p)) {
  $g = Get-Content $p -Raw -Encoding UTF8 | ConvertFrom-Json
  $all = @($g.units | ForEach-Object { $_.missions } | Where-Object { $_.optional -ne $true })
  $tot = $all.Count
  $done = @($all | Where-Object { $_.status -eq 'done' }).Count
  if ($tot -gt 0) { $parts += ('📚 진행률 {0}% ({1}/{2})' -f [math]::Round($done * 100 / $tot), $done, $tot) }
  $areas = @($g.site.map)
  $ok = @($areas | Where-Object { $_.status -eq '완성' }).Count
  if ($areas.Count -gt 0) { $parts += ('구역 완성 {0}/{1}' -f $ok, $areas.Count) }
  $flows = @($g.site.flows)
  $fok = @($flows | Where-Object { $_.status -eq '완성' }).Count
  if ($flows.Count -gt 0) { $parts += ('흐름 완성 {0}/{1}' -f $fok, $flows.Count) }
}
$c = $d.context_window.used_percentage
if ($null -ne $c) { $parts += ('대화 {0}%' -f [math]::Round([double]$c)) }
$f = $d.rate_limits.five_hour.used_percentage
if ($null -ne $f) { $parts += ('5시간 {0}%' -f [math]::Round([double]$f)) }
$w = $d.rate_limits.seven_day.used_percentage
if ($null -ne $w) { $parts += ('주간 {0}%' -f [math]::Round([double]$w)) }
Write-Output ($parts -join ' · ')
