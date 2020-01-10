# use-persisted

Persisted versions of `useState` and `useReducer`.

- TypeScript support.
- Tree shakeable.
- Hooks created by the factories have the exact same API and types as `useState` and `useReducer`.

## `createUseStatePersisted`

```tsx
import { createUseStatePersisted } from 'use-persisted'

const useStatePersisted = createUseStatePersisted('localstorage-key')

// In your component.
const [myState, setMyState] = useStatePersisted(myInitialState)
```

## `createUseReducerPersisted`

```tsx
import { createUseReducerPersisted } from 'use-persisted'

const useReducerPersisted = createUseReducerPersisted('localstorage-key')

// In your component.
const [myState, dispatch] = useReducerPersisted(myReducer, myInitialState)
```
