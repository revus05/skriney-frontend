import { CreateTransactionFormData } from './schema'
import { CurrencyType } from 'entities/user-setting'
import { useCreateTransaction } from 'entities/transaction'

export const useCreateTransactionSubmit = (onSuccess?: () => void) => {
  const submitTransaction = useCreateTransaction()

  return async (data: CreateTransactionFormData) => {
    await submitTransaction({
      ...data,
      amount: +data.amount,
      currency: data.currency as CurrencyType,
    })

    if (onSuccess) onSuccess()
  }
}
