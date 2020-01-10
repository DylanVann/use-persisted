# use-persisted

Persisted versions of `useState` and `useReducer`.

- TypeScript support.
- Tree-shakeable.
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

## Credits

- https://github.com/donavon/use-persisted-state
  - Seems to have been the first library doing stuff like this.
  - I didn't really need the synchronization functionality.
- https://github.com/johnayeni/use-persisted-reducer
  - Seems to draw inspiration from `use-persisted-state` but provides a `useReducer` API.
- https://kentcdodds.com/blog/how-to-implement-usestate-with-usereducer/
  - Guidance on implementing `useState` with `useReducer`, which allows for some code sharing
    between `createUseReducerPersisted` and `createUseReducerPersisted`.

As far as a comparison between this and the listed libs, these are things unique to this package:

- Provides persisted versions of both state primitives from React.
- Provides TypeScript types.
- Is tree-shakeable.
- Uses [`tsdx`](https://github.com/jaredpalmer/tsdx).
