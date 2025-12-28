'use client'

import { CreateBankAccountFormData } from './schema'
import { useCreateBankAccount } from 'entities/bank-account'
import { CurrencyType } from 'shared/currencies'

export const useCreateBankAccountSubmit = (onSuccess?: () => void) => {
  const { onSubmit, isLoading } = useCreateBankAccount()

  return {
    onSubmit: async (data: CreateBankAccountFormData) => {
      await onSubmit({
        ...data,
        currency: data.currency as CurrencyType,
        balance: +data.balance,
      })

      if (onSuccess) onSuccess()
    },
    isLoading,
  }
}
