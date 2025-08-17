'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateBankAccountFormValues, createBankAccountSchema } from './schema'
import { useAppSelector } from 'shared/hooks'

export function useCreateBankAccountForm() {
  const defaultCurrency = useAppSelector(
    (state) => state.userSettingsSlice.userSettings?.defaultCurrency,
  )

  return useForm<CreateBankAccountFormValues>({
    resolver: zodResolver(createBankAccountSchema),
    defaultValues: {
      title: '',
      balance: 0,
      currency: defaultCurrency || '',
    },
    mode: 'onSubmit',
  })
}
