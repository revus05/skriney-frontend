import { createApi } from '@reduxjs/toolkit/query/react'
import {
  ApiResponse,
  BalanceSummaryDTO,
  baseQuery,
  DailyBalanceDTO,
} from 'shared/api'

const dailyBalanceApi = createApi({
  reducerPath: 'balanceApi',
  baseQuery: baseQuery('balance'),
  endpoints: (builder) => ({
    getBalanceSummary: builder.mutation<ApiResponse<BalanceSummaryDTO>, void>({
      query: () => ({
        url: '/summary',
        method: 'GET',
      }),
    }),
    getDailyBalances: builder.mutation<ApiResponse<DailyBalanceDTO[]>, void>({
      query: () => ({
        url: '',
        method: 'GET',
      }),
    }),
  }),
})

export default dailyBalanceApi
export const { useGetBalanceSummaryMutation, useGetDailyBalancesMutation } =
  dailyBalanceApi
