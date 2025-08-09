import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authApi, authSlice } from 'entities/session'

const rootReducer = {
  authSlice,
  [authApi.reducerPath]: authApi.reducer,
}

const mainReducer = combineReducers(rootReducer)

export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
