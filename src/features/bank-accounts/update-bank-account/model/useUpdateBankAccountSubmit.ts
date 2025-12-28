'use client'

import { UpdateBankAccountFormData } from './schema'
import { useUpdateBankAccount } from 'entities/bank-account'
import { CurrencyType } from 'shared/currencies'

export const useUpdateBankAccountSubmit = (
  uuid: string,
  onSuccess?: () => void,
) => {
  const updateBankAccount = useUpdateBankAccount()

  return async (data: UpdateBankAccountFormData) => {
    await updateBankAccount(uuid, {
      ...data,
      currency: data.currency as CurrencyType,
    })

    if (onSuccess) onSuccess()
  }
}
