import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiResponse } from 'shared/api'
import {
  BankAccountDTO,
  CreateBankAccountRequestDTO,
  DeleteBankAccountRequestDTO,
} from 'shared/api/api-client'

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
    createBankAccount: builder.mutation<
      ApiResponse<BankAccountDTO>,
      CreateBankAccountRequestDTO
    >({
      query: (body) => ({
        url: '/create',
        method: 'POST',
        credentials: 'include',
        body,
      }),
    }),
    deleteBankAccount: builder.mutation<
      ApiResponse<BankAccountDTO>,
      DeleteBankAccountRequestDTO
    >({
      query: (body) => ({
        url: '/delete',
        method: 'DELETE',
        credentials: 'include',
        body,
      }),
    }),
  }),
})

export default bankAccountApi
export const {
  useGetBankAccountsMutation,
  useCreateBankAccountMutation,
  useDeleteBankAccountMutation,
} = bankAccountApi
