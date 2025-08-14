import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiResponse } from 'shared/api'
import { BankAccountDTO } from 'shared/api/api-client'

const bankAccountApi = createApi({
  reducerPath: 'bankAccountApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/bank-accounts`,
  }),
  endpoints: (builder) => ({
    getBankAccounts: builder.mutation<ApiResponse<BankAccountDTO[]>, void>({
      query: () => ({
        url: '',
        method: 'GET',
        credentials: 'include',
      }),
    }),
  }),
})

export default bankAccountApi
export const { useGetBankAccountsMutation } = bankAccountApi
