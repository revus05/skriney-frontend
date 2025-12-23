'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UpdateBankAccountFormData, updateBankAccountSchema } from './schema'
import { useAppSelector } from 'shared/lib'

export const useUpdateBankAccountForm = () => {
  const defaultCurrency = useAppSelector(
    (state) => state.userSettingsSlice.userSettings?.defaultCurrency,
  )

  const uuid = useAppSelector(
    (state) => state.updateBankAccountsSlice.bankAccountUuid,
  )

  const bankAccounts = useAppSelector(
    (state) => state.bankAccountsSlice.bankAccounts,
  )

  const bankAccount = bankAccounts.find(
    (bankAccount) => bankAccount.uuid === uuid,
  )

  console.log(uuid, bankAccounts, bankAccount)

  return useForm<UpdateBankAccountFormData>({
    resolver: zodResolver(updateBankAccountSchema),
    defaultValues: {
      title: bankAccounts[0]?.title || '',
      currency: bankAccounts[0]?.currency || defaultCurrency || '',
      emoji: bankAccounts[0]?.emoji || '',
    },
    mode: 'onSubmit',
  })
}
