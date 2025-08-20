import { createApi } from '@reduxjs/toolkit/query/react'
import {
  ApiResponse,
  baseQuery,
  UpdateDefaultBankAccountRequestDTO,
  UpdateDefaultCurrencyRequestDTO,
  UpdateThemeRequestDTO,
  UserSettingsDTO,
} from 'shared/api'

const userSettingsApi = createApi({
  reducerPath: 'userSettingsApi',
  baseQuery: baseQuery('user-settings'),
  endpoints: (builder) => ({
    updateDefaultCurrency: builder.mutation<
      ApiResponse<UserSettingsDTO>,
      UpdateDefaultCurrencyRequestDTO
    >({
      query: (body) => ({
        url: '/update-default-currency',
        method: 'POST',
        body,
      }),
    }),
    updateDefaultCategory: builder.mutation<
      ApiResponse<UserSettingsDTO>,
      UpdateDefaultBankAccountRequestDTO
    >({
      query: (body) => ({
        url: '/update-default-category',
        method: 'POST',
        body,
      }),
    }),
    updateTheme: builder.mutation<
      ApiResponse<UserSettingsDTO>,
      UpdateThemeRequestDTO
    >({
      query: (body) => ({
        url: '/update-theme',
        method: 'POST',
        body,
      }),
    }),
    updateDefaultBankAccount: builder.mutation<
      ApiResponse<UserSettingsDTO>,
      UpdateDefaultBankAccountRequestDTO
    >({
      query: (body) => ({
        url: '/update-default-bank-account',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export default userSettingsApi
export const {
  useUpdateDefaultCurrencyMutation,
  useUpdateDefaultCategoryMutation,
  useUpdateThemeMutation,
  useUpdateDefaultBankAccountMutation,
} = userSettingsApi
