import { useEffect, useReducer, useState } from 'react'

/**
 * Generic interface for a storage provider.
 * Usually this will be localStorage.
 */
interface StorageProvider {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
}

/**
 * Create a storage provider for use in persisting.
 * Usually this will be passed localStorage.
 */
export const createStorage = (provider: StorageProvider) => ({
  get(key: string, initialState: object | number | string) {
    const json = provider.getItem(key)
    return json === null
      ? typeof initialState === 'function'
        ? initialState()
        : initialState
      : JSON.parse(json)
  },
  set(key: string, value: object | number | string) {
    provider.setItem(key, JSON.stringify(value))
  },
})

const useReducerPersistedInternal = (
  reducer: any,
  initialState: any,
  init: any,
  key: any,
  storage: any,
) => {
  const [state, dispatch] = useReducer(
    reducer,
    storage.get(key, initialState),
    init,
  )

  useEffect(() => {
    storage.set(key, state)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  return [state, dispatch]
}

/**
 * A hook factory that returns a useReducer
 * like function that will persist state to the given key in localStorage.
 */
export const createUseReducerPersisted = (
  key: string,
  provider = typeof window !== 'undefined' ? window.localStorage : undefined,
): typeof useReducer => {
  if (provider) {
    const storage = createStorage(provider)
    const useReducerPersisted = (reducer: any, initialState: any, init: any) =>
      useReducerPersistedInternal(reducer, initialState, init, key, storage)
    return useReducerPersisted as any
  }
  return useReducer
}

const useStateReducer = (prevState: any, newState: any) =>
  typeof newState === 'function' ? newState(prevState) : newState

const useStateInitializer = (initialValue: any) =>
  typeof initialValue === 'function' ? initialValue() : initialValue

/**
 * A hook factory that returns a useState
 * like function that will persist state to the given key in localStorage.
 */
export const createUseStatePersisted = (
  key: string,
  provider = typeof window !== 'undefined' ? window.localStorage : undefined,
): typeof useState => {
  if (provider) {
    const storage = createStorage(provider)
    const useStatePersisted = (initialState: any) =>
      useReducerPersistedInternal(
        useStateReducer,
        initialState,
        useStateInitializer,
        key,
        storage,
      )
    return useStatePersisted as any
  }
  return useState
}
