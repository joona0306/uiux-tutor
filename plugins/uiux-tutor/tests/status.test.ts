import { expect, test } from 'claude-code/testing'

const PROGRESS = {
  units: [{ missions: [{ status: 'done' }, { status: 'todo' }, { status: 'todo', optional: true }] }],
  site: { map: [{ status: '완성' }, { status: '덜 됨' }], flows: [{ status: '안 함' }] },
}

const USAGE = {
  startedAt: 0,
  context: { window: 200000, percent: 42 },
  rateLimits: [
    { kind: 'five_hour', percentUsed: 23 },
    { kind: 'seven_day', percentUsed: 61.4 },
  ],
}

test('진도 파일이 있으면 진행률·구역·흐름·사용량을 한 줄로 띄운다', async ($, on) => {
  const seen: (string | undefined)[] = []
  on('fs.read', () => ({ value: JSON.stringify(PROGRESS) }))
  on('session.usage', () => ({ value: USAGE }))
  on('ui.status', (_, e) => {
    seen.push(e.text)
    return { value: undefined }
  })
  on('session.start', (_, e) => ({ cwd: e.cwd }))

  await $.session.start({ cwd: 'C:/Users/학생/황준하/uiux-study', surface: 'terminal', isInteractive: true })

  expect(seen.at(-1)).toBe('📚 진행률 50% (1/2) · 구역 완성 1/2 · 흐름 완성 0/1 · 대화 42% · 5시간 23% · 주간 61%')
})

test('진도 파일이 없는 폴더에서는 아무것도 띄우지 않는다', async ($, on) => {
  const seen: (string | undefined)[] = []
  on('fs.read', () => {
    throw new Error('ENOENT')
  })
  on('session.usage', () => ({ value: USAGE }))
  on('ui.status', (_, e) => {
    seen.push(e.text)
    return { value: undefined }
  })
  on('session.start', (_, e) => ({ cwd: e.cwd }))

  await $.session.start({ cwd: 'C:/other', surface: 'terminal', isInteractive: true })

  expect(seen.at(-1)).toBe(undefined)
})

test('사용량을 못 읽어도 진행률은 보인다', async ($, on) => {
  const seen: (string | undefined)[] = []
  on('fs.read', () => ({ value: JSON.stringify(PROGRESS) }))
  on('session.usage', () => {
    throw new Error('no usage')
  })
  on('ui.status', (_, e) => {
    seen.push(e.text)
    return { value: undefined }
  })
  on('session.start', (_, e) => ({ cwd: e.cwd }))

  await $.session.start({ cwd: 'C:/x', surface: 'terminal', isInteractive: true })

  expect(seen.at(-1)).toBe('📚 진행률 50% (1/2) · 구역 완성 1/2 · 흐름 완성 0/1')
})
