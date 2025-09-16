'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateTransactionFormData, createTransactionSchema } from './schema'
import { useAppSelector } from 'shared/lib'

export const useCreateTransactionForm = () => {
  const userSettings = useAppSelector(
    (state) => state.userSettingsSlice.userSettings,
  )

  return useForm<CreateTransactionFormData>({
    resolver: zodResolver(createTransactionSchema),
    defaultValues: {
      categoryUuid: userSettings?.defaultCategory?.uuid || '',
      bankAccountUuid: userSettings?.defaultBankAccount?.uuid || '',
      amount: '',
      currency: userSettings?.defaultCurrency,
    },
    mode: 'onSubmit',
  })
}
