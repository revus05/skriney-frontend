import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authApi, authSlice } from 'entities/session'
import { signUpFormSlice } from 'features/auth/sign-up'
import { signInFormSlice } from 'features/auth/sign-in'
import { categoriesApi, categorySlice } from 'entities/category'

const rootReducer = {
  authSlice,
  signUpFormSlice,
  signInFormSlice,
  categorySlice,
  [authApi.reducerPath]: authApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
}

const mainReducer = combineReducers(rootReducer)

export type RootState = ReturnType<typeof mainReducer>

export const makeStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: mainReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(authApi.middleware)
        .concat(categoriesApi.middleware),
    preloadedState,
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
