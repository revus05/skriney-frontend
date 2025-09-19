import { useDeleteTransactionMutation } from '../api'
import { deleteTransaction } from '../model'
import { useAppDispatch } from 'shared/lib'
import { getApiError } from 'shared/api'

export const useDeleteTransaction = () => {
  const [deleteTransactionFn] = useDeleteTransactionMutation()
  const dispatch = useAppDispatch()

  return async (data: { uuid: string }) => {
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
