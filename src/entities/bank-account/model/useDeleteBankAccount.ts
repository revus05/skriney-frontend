import { useDeleteBankAccountMutation } from '../api'
import { deleteBankAccount } from '../model'
import { useAppDispatch } from 'shared/lib'
import { DeleteBankAccountRequestDTO, getApiError } from 'shared/api'

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
