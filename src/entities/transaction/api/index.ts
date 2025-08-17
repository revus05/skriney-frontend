import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiResponse } from 'shared/api'
import {
  CreateTransactionRequestDTO,
  DeleteBankAccountRequestDTO,
  TransactionDTO,
} from 'shared/api/api-client'

const transactionsApi = createApi({
  reducerPath: 'transactionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/transactions`,
  }),
  endpoints: (builder) => ({
    getTransactions: builder.mutation<ApiResponse<TransactionDTO[]>, void>({
      query: () => ({
        url: '',
        method: 'GET',
        credentials: 'include',
      }),
    }),
    createTransaction: builder.mutation<
      ApiResponse<TransactionDTO>,
      CreateTransactionRequestDTO
    >({
      query: (body) => ({
        url: '/create',
        method: 'POST',
        credentials: 'include',
        body,
      }),
    }),
    deleteTransaction: builder.mutation<
      ApiResponse<TransactionDTO>,
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

export default transactionsApi
export const {
  useGetTransactionsMutation,
  useCreateTransactionMutation,
  useDeleteTransactionMutation,
} = transactionsApi
