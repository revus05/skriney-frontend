'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateTransactionFormValues, createTransactionSchema } from './schema'

export function useCreateTransactionForm() {
  return useForm<CreateTransactionFormValues>({
    resolver: zodResolver(createTransactionSchema),
    defaultValues: {
      category: '',
      bankAccount: '',
      sum: 0,
      currency: '',
    },
    mode: 'onSubmit',
  })
}
