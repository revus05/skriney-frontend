import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiResponse } from 'shared/api'
import {
  UpdateDefaultCategoryRequestDTO,
  UpdateDefaultCurrencyRequestDTO,
  UpdateThemeRequestDTO,
  UserSettingsDTO,
} from 'shared/api/api-client'

const userSettingsApi = createApi({
  reducerPath: 'userSettingsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/users`,
  }),
  endpoints: (builder) => ({
    updateDefaultCurrency: builder.mutation<
      ApiResponse<UserSettingsDTO>,
      UpdateDefaultCurrencyRequestDTO
    >({
      query: (body) => ({
        url: '/update-default-currency',
        method: 'POST',
        credentials: 'include',
        body,
      }),
    }),
    updateDefaultCategory: builder.mutation<
      ApiResponse<UserSettingsDTO>,
      UpdateDefaultCategoryRequestDTO
    >({
      query: (body) => ({
        url: '/update-default-category',
        method: 'POST',
        credentials: 'include',
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
        credentials: 'include',
        body,
      }),
    }),
    getUserSettings: builder.mutation<ApiResponse<UserSettingsDTO>, void>({
      query: () => ({
        url: '/settings',
        method: 'GET',
        credentials: 'include',
      }),
    }),
  }),
})

export default userSettingsApi
export const {
  useUpdateDefaultCurrencyMutation,
  useGetUserSettingsMutation,
  useUpdateDefaultCategoryMutation,
  useUpdateThemeMutation,
} = userSettingsApi
