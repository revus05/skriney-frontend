import { CreateTransactionFormData } from './schema'
import { CurrencyType } from 'entities/user-setting'
import { useCreateTransaction } from 'entities/transaction'

export const useCreateTransactionSubmit = (onSuccess?: () => void) => {
  const { onSubmit, isLoading } = useCreateTransaction()

  return {
    onSubmit: async (data: CreateTransactionFormData) => {
      await onSubmit({
        ...data,
        amount: +data.amount,
        currency: data.currency as CurrencyType,
      })

      if (onSuccess) onSuccess()
    },
    isLoading,
  }
}
