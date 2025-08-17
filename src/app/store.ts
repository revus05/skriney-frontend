import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userApi, userSlice } from 'entities/user'
import { signInFormSlice, signUpFormSlice } from 'features/auth'
import { categoriesApi, categorySlice } from 'entities/category'
import { transactionsApi, transactionSlice } from 'entities/transaction'
import { bankAccountApi, bankAccountsSlice } from 'entities/bank-account'
import { userSettingsApi, userSettingsSlice } from 'entities/user-settings'

const rootReducer = {
  authSlice: userSlice,
  signUpFormSlice,
  signInFormSlice,
  categorySlice,
  transactionSlice,
  bankAccountsSlice,
  userSettingsSlice,
  [userApi.reducerPath]: userApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [transactionsApi.reducerPath]: transactionsApi.reducer,
  [bankAccountApi.reducerPath]: bankAccountApi.reducer,
  [userSettingsApi.reducerPath]: userSettingsApi.reducer,
}

const mainReducer = combineReducers(rootReducer)

export type RootState = ReturnType<typeof mainReducer>

export const makeStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: mainReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(userApi.middleware)
        .concat(categoriesApi.middleware)
        .concat(transactionsApi.middleware)
        .concat(bankAccountApi.middleware)
        .concat(userSettingsApi.middleware),
    preloadedState,
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
