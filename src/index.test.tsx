import { renderHook, act } from '@testing-library/react-hooks'
import { createUseStatePersisted } from './'

afterEach(() => localStorage.clear())

describe('createUseStatePersisted', () => {
  it('sets a value', () => {
    const useState = createUseStatePersisted('test')
    const { result } = renderHook(() => useState('initial'))
    expect(result.current[0]).toBe('initial')
    act(() => {
      result.current[1]('new')
    })
    expect(result.current[0]).toBe('new')
  })

  it('uses a lazy initial value', () => {
    const useState = createUseStatePersisted('test')
    // Lazy in this case means only calculated on the first render.
    const { result } = renderHook(() => useState(() => 'initial'))
    expect(result.current[0]).toBe('initial')
    act(() => {
      result.current[1]('new')
    })
    expect(result.current[0]).toBe('new')
  })

  it('updates using a state update function', () => {
    const useState = createUseStatePersisted('test')
    const { result } = renderHook(() => useState({ a: 'A' }))
    expect(result.current[0]).toEqual({ a: 'A' })
    act(() => {
      result.current[1](state => ({ ...state, b: 'B' }))
    })
    expect(result.current[0]).toEqual({ a: 'A', b: 'B' })
  })
})
