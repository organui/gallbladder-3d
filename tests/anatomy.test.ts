import { describe, expect, test } from 'bun:test'
import { emphasis, structures } from '../src/anatomy'

describe('selection emphasis', () => {
  test('keeps structures normal and the liver and pancreas translucent without a selection', () => {
    const context = structures.filter((s) => emphasis(s.id, null) === 'context').map((s) => s.id)
    expect(context).toEqual(['liver', 'pancreas'])
    expect(
      structures.filter((s) => !s.context).every((s) => emphasis(s.id, null) === 'normal'),
    ).toBe(true)
  })

  test('keeps the selection solid and ghosts everything else', () => {
    const states = structures.map((s) => emphasis(s.id, 'cystic-duct'))
    expect(states.filter((s) => s === 'selected')).toHaveLength(1)
    expect(emphasis('cystic-duct', 'cystic-duct')).toBe('selected')
    expect(emphasis('gallbladder', 'cystic-duct')).toBe('ghosted')
    expect(emphasis('liver', 'liver')).toBe('selected')
    expect(emphasis('liver', 'cystic-duct')).toBe('ghosted')
  })
})

describe('source ownership', () => {
  test('assigns every source element to exactly one structure', () => {
    const elements = structures.flatMap((s) => s.elements)
    expect(new Set(elements).size).toBe(elements.length)
  })
})
