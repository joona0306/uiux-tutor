// uiux-tutor 상태 줄 (mod 방식)
// 설정 파일을 고치지 않고, 플러그인이 직접 화면 아래(입력창 밑)에 한 줄을 띄운다.
// 학습 폴더의 .tutor/progress.json 과 Claude Code가 알려 주는 사용량으로 만든다.
// 플러그인을 업데이트하면 이 파일도 같이 바뀐다(따로 복사해 둘 것이 없다).
import type { EngineInterface, Register, SessionRateLimit } from 'claude-code'

type Mission = { status?: string; optional?: boolean }
type Progress = {
  units?: { missions?: Mission[] }[]
  site?: { map?: { status?: string }[]; flows?: { status?: string }[] }
}

const PROGRESS = '.tutor/progress.json'

// 진도 파일에서 앞부분(진행률·구역·흐름)을 만든다. 없거나 깨졌으면 빈 목록.
async function progressParts($: EngineInterface): Promise<string[]> {
  let g: Progress
  try {
    g = JSON.parse(await $.fs.read(PROGRESS)) as Progress
  } catch {
    return []
  }
  const parts: string[] = []
  const all = (g.units ?? []).flatMap(u => u.missions ?? []).filter(m => m.optional !== true)
  if (all.length > 0) {
    const done = all.filter(m => m.status === 'done').length
    parts.push(`📚 진행률 ${Math.round((done * 100) / all.length)}% (${done}/${all.length})`)
  }
  const areas = g.site?.map ?? []
  if (areas.length > 0) {
    parts.push(`구역 완성 ${areas.filter(a => a.status === '완성').length}/${areas.length}`)
  }
  const flows = g.site?.flows ?? []
  if (flows.length > 0) {
    parts.push(`흐름 완성 ${flows.filter(f => f.status === '완성').length}/${flows.length}`)
  }
  return parts
}

function limit(list: SessionRateLimit[], kind: string): number | undefined {
  return list.find(r => r.kind === kind)?.percentUsed
}

async function refresh($: EngineInterface): Promise<void> {
  const parts = await progressParts($)
  // 진도 파일이 없는 폴더(튜터를 안 쓰는 곳)에서는 아무것도 띄우지 않는다.
  if (parts.length === 0) {
    $.ui.status(undefined)
    return
  }
  try {
    const { context, rateLimits } = await $.session.usage()
    if (context.percent !== undefined) parts.push(`대화 ${Math.round(context.percent)}%`)
    const five = limit(rateLimits, 'five_hour')
    if (five !== undefined) parts.push(`5시간 ${Math.round(five)}%`)
    const week = limit(rateLimits, 'seven_day')
    if (week !== undefined) parts.push(`주간 ${Math.round(week)}%`)
  } catch {
    // 사용량을 못 읽어도 진행률은 보여 준다.
  }
  $.ui.status(parts.join(' · '))
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const result = await next(e)
    await refresh($)
    return result
  })

  // 한 번의 답이 끝날 때(튜터가 진도 파일을 고쳤을 수 있음)
  on('turn.complete', async ($, e, next) => {
    const result = await next(e)
    await refresh($)
    return result
  })

  // 사용량이 바뀔 때(답이 끝난 뒤, 사용 한도가 1% 움직일 때)
  on('session.measure', async ($, e, next) => {
    const result = await next(e)
    await refresh($)
    return result
  })
}
