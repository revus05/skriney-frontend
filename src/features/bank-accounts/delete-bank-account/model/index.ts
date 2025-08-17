'use client'

import { useAppDispatch } from 'shared/hooks'
import { getApiError } from 'shared/api'
import { DeleteBankAccountRequestDTO } from 'shared/api/api-client'
import {
  deleteBankAccount,
  useDeleteBankAccountMutation,
} from 'entities/bank-account'

export function useDeleteBankAccount() {
  const [deleteBankAccountFn] = useDeleteBankAccountMutation()
  const dispatch = useAppDispatch()

  return async (deleteBankAccountDTO: DeleteBankAccountRequestDTO) => {
    try {
      const res = await deleteBankAccountFn(deleteBankAccountDTO).unwrap()
      if (res && res.data) {
        dispatch(deleteBankAccount(res.data))
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
