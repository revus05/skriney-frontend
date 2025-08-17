import { createApi } from '@reduxjs/toolkit/query/react'
import {
  ApiResponse,
  baseQuery,
  CreateTransactionRequestDTO,
  DeleteBankAccountRequestDTO,
  TransactionDTO,
} from 'shared/api'

const transactionsApi = createApi({
  reducerPath: 'transactionsApi',
  baseQuery: baseQuery('transactions'),
  endpoints: (builder) => ({
    getTransactions: builder.mutation<ApiResponse<TransactionDTO[]>, void>({
      query: () => ({
        url: '',
        method: 'GET',
      }),
    }),
    createTransaction: builder.mutation<
      ApiResponse<TransactionDTO>,
      CreateTransactionRequestDTO
    >({
      query: (body) => ({
        url: '/create',
        method: 'POST',
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
