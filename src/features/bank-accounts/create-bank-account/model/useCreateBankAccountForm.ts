'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateBankAccountFormData, createBankAccountSchema } from './schema'
import { useAppSelector } from 'shared/hooks'

export const useCreateBankAccountForm = () => {
  const defaultCurrency = useAppSelector(
    (state) => state.userSettingsSlice.userSettings?.defaultCurrency,
  )

  return useForm<CreateBankAccountFormData>({
    resolver: zodResolver(createBankAccountSchema),
    defaultValues: {
      title: '',
      balance: 0,
      currency: defaultCurrency || '',
    },
    mode: 'onSubmit',
  })
}
