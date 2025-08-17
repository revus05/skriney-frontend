import { createApi } from '@reduxjs/toolkit/query/react'
import {
  ApiResponse,
  BankAccountDTO,
  baseQuery,
  CreateBankAccountRequestDTO,
  DeleteBankAccountRequestDTO,
} from 'shared/api'

const bankAccountApi = createApi({
  reducerPath: 'bankAccountApi',
  baseQuery: baseQuery('bank-accounts'),
  endpoints: (builder) => ({
    getBankAccounts: builder.mutation<ApiResponse<BankAccountDTO[]>, void>({
      query: () => ({
        url: '',
        method: 'GET',
      }),
    }),
    createBankAccount: builder.mutation<
      ApiResponse<BankAccountDTO>,
      CreateBankAccountRequestDTO
    >({
      query: (body) => ({
        url: '/create',
        method: 'POST',
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
