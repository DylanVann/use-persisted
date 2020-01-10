import * as React from 'react'
import { createUseStatePersisted } from '../.'

const useStatePersisted = createUseStatePersisted('input-state')

export function InputExample() {
  const [value, setValue] = useStatePersisted('')
  return <input value={value} onChange={e => setValue(e.target.value)} />
}
