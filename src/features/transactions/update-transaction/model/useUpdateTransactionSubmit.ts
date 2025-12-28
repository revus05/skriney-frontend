'use client'

import { UpdateTransactionFormData } from 'features/transactions/update-transaction/model/schema'
import { useUpdateTransaction } from 'entities/transaction'
import { CurrencyType } from 'shared/currencies'

export const useUpdateTransactionSubmit = (
  uuid: string,
  onSuccess?: () => void,
) => {
  const updateCategory = useUpdateTransaction()

  return async (data: UpdateTransactionFormData) => {
    await updateCategory(uuid, {
      ...data,
      amount:
        data.amount[0] === '+'
          ? +data.amount
          : data.amount[0] === '-'
            ? +data.amount
            : +`-${data.amount}`,
      currency: data.currency as CurrencyType,
    })

    if (onSuccess) onSuccess()
  }
}
