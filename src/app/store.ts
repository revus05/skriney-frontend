import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authApi, authSlice } from 'entities/session'
import { signUpFormSlice } from 'features/auth/sign-up'
import { signInFormSlice } from 'features/auth/sign-in'
import { categoriesApi, categorySlice } from 'entities/category'
import { transactionsApi, transactionSlice } from 'entities/transaction'
import { bankAccountApi, bankAccountsSlice } from 'entities/bank-account'

const rootReducer = {
  authSlice,
  signUpFormSlice,
  signInFormSlice,
  categorySlice,
  transactionSlice,
  bankAccountsSlice,
  [authApi.reducerPath]: authApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [transactionsApi.reducerPath]: transactionsApi.reducer,
  [bankAccountApi.reducerPath]: bankAccountApi.reducer,
}

const mainReducer = combineReducers(rootReducer)

export type RootState = ReturnType<typeof mainReducer>

export const makeStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: mainReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(authApi.middleware)
        .concat(categoriesApi.middleware)
        .concat(transactionsApi.middleware)
        .concat(bankAccountApi.middleware),
    preloadedState,
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
