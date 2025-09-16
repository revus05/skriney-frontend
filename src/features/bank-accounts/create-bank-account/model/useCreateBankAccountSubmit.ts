'use client'

import { CreateBankAccountFormData } from './schema'
import { useCreateBankAccount } from 'entities/bank-account'
import { CurrencyType } from 'entities/user-setting'

export const useCreateBankAccountSubmit = (onSuccess?: () => void) => {
  const submitBankAccount = useCreateBankAccount()

  return async (data: CreateBankAccountFormData) => {
    await submitBankAccount({
      ...data,
      currency: data.currency as CurrencyType,
      balance: +data.balance,
    })

    if (onSuccess) onSuccess()
  }
}
