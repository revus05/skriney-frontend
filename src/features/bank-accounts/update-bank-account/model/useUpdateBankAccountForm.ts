'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UpdateBankAccountFormData, updateBankAccountSchema } from './schema'

export const useUpdateBankAccountForm = () =>
  useForm<UpdateBankAccountFormData>({
    resolver: zodResolver(updateBankAccountSchema),
    defaultValues: {
      title: '',
      currency: '',
      emoji: '',
    },
    mode: 'onSubmit',
  })
