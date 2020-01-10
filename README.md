# use-persist

Persisted versions of `useState` and `useReducer`.

The hooks created by the factories should have the exact same API and types as
`useState` and `useReducer`.

## `createUseStatePersisted`

```tsx
import { createUseStatePersisted } from 'use-persist'

const useStatePersisted = createUseStatePersisted('localstorage-key')

// In your component.
const [myState, setMyState] = useStatePersisted(myInitialState)
```

## `createUseReducerPersisted`

```tsx
import { createUseReducerPersisted } from 'use-persist'

const useReducerPersisted = createUseReducerPersisted('localstorage-key')

// In your component.
const [myState, dispatch] = useReducerPersisted(myReducer, myInitialState)
```
