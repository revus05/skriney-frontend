export {
  default as bankAccountApi,
  useGetBankAccountsMutation,
  useCreateBankAccountMutation,
  useDeleteBankAccountMutation,
  useUpdateBankAccountMutation,
} from './api'
export {
  default as bankAccountsSlice,
  setBankAccounts,
  addBankAccount,
  deleteBankAccount,
  updateBankAccount,
} from './model'
