'use client'

import { useAppDispatch } from 'shared/hooks'
import { DeleteBankAccountRequestDTO, getApiError } from 'shared/api'
import {
  deleteBankAccount,
  useDeleteBankAccountMutation,
} from 'entities/bank-account'

export const useDeleteBankAccount = () => {
  const [deleteBankAccountFn] = useDeleteBankAccountMutation()
  const dispatch = useAppDispatch()

  return async (data: DeleteBankAccountRequestDTO) => {
    try {
      const res = await deleteBankAccountFn(data).unwrap()
      if (res && res.data) {
        dispatch(deleteBankAccount(res.data))
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
