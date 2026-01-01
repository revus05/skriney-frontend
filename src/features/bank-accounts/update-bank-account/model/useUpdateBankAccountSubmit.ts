'use client'

import { UpdateBankAccountFormData } from './schema'
import { useUpdateBankAccount } from 'entities/bank-account'
import { Currency } from 'shared/constants/currencies'

export const useUpdateBankAccountSubmit = (
  uuid: string,
  onSuccess?: () => void,
) => {
  const updateBankAccount = useUpdateBankAccount()

  return async (data: UpdateBankAccountFormData) => {
    await updateBankAccount(uuid, {
      ...data,
      currency: data.currency as keyof typeof Currency,
    })

    if (onSuccess) onSuccess()
  }
}
