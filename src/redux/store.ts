import { configureStore } from '@reduxjs/toolkit'
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { setupListeners } from '@reduxjs/toolkit/query'
import { filterSlice } from '@/mars/slices/filters/slice'
import { nasaApi } from '@/mars/slices/api'

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [nasaApi.reducerPath]: nasaApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(nasaApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = (): ReturnType<typeof useDispatch<AppDispatch>> => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
