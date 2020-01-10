import * as React from 'react'
import { createUseReducerPersisted } from '../.'

const usePersistedReducer = createUseReducerPersisted('counter-state')

export function CounterExample() {
  const [state, dispatch] = usePersistedReducer(
    (
      state: {
        count: number
      },
      event: { type: 'increment' } | { type: 'decrement' },
    ) => {
      switch (event.type) {
        case 'increment':
          return { count: state.count + 1 }
        case 'decrement':
          return { count: state.count - 1 }
        default:
          throw new Error()
      }
    },
    { count: 0 },
  )
  return (
    <>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      {` ${state.count} `}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  )
}
