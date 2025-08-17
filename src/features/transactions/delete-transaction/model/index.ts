'use client'

import { useAppDispatch } from 'shared/hooks'
import { getApiError } from 'shared/api'
import { DeleteBankAccountRequestDTO } from 'shared/api/api-client'
import {
  deleteTransaction,
  useDeleteTransactionMutation,
} from 'entities/transaction'

export function useDeleteTransaction() {
  const [deleteTransactionFn] = useDeleteTransactionMutation()
  const dispatch = useAppDispatch()

  return async (deleteTransactionUuid: DeleteBankAccountRequestDTO) => {
    try {
      const res = await deleteTransactionFn(deleteTransactionUuid).unwrap()
      if (res && res.data) {
        dispatch(deleteTransaction(res.data))
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
