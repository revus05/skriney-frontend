'use client'

import { useAppDispatch } from 'shared/hooks'
import { DeleteBankAccountRequestDTO, getApiError } from 'shared/api'
import {
  deleteTransaction,
  useDeleteTransactionMutation,
} from 'entities/transaction'

export const useDeleteTransaction = () => {
  const [deleteTransactionFn] = useDeleteTransactionMutation()
  const dispatch = useAppDispatch()

  return async (data: DeleteBankAccountRequestDTO) => {
    try {
      const res = await deleteTransactionFn(data).unwrap()
      if (res && res.data) {
        dispatch(deleteTransaction(res.data))
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
