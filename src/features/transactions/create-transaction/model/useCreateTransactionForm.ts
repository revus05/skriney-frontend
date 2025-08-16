'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateTransactionFormValues, createTransactionSchema } from './schema'
import { useAppSelector } from 'shared/hooks'

export function useCreateTransactionForm() {
  const userSettings = useAppSelector(
    (state) => state.userSettingsSlice.userSettings,
  )

  return useForm<CreateTransactionFormValues>({
    resolver: zodResolver(createTransactionSchema),
    defaultValues: {
      category: userSettings?.defaultCategory.uuid,
      bankAccount: '',
      sum: 0,
      currency: userSettings?.defaultCurrency,
    },
    mode: 'onSubmit',
  })
}
