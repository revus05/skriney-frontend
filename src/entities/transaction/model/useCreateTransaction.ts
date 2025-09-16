import { useAppDispatch } from 'shared/lib'
import { CreateTransactionRequestDTO, getApiError } from 'shared/api'
import { useCreateTransactionMutation } from '../api'
import { addTransaction } from '../model'

export const useCreateTransaction = () => {
  const [createTransaction] = useCreateTransactionMutation()
  const dispatch = useAppDispatch()

  return async (data: CreateTransactionRequestDTO) => {
    try {
      const res = await createTransaction(data).unwrap()
      if (res && res.data) {
        dispatch(addTransaction(res.data))
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
