'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateCategoryFormValues, createCategorySchema } from './schema'

export function useCreateCategoryForm() {
  return useForm<CreateCategoryFormValues>({
    resolver: zodResolver(createCategorySchema),
    defaultValues: {
      title: '',
    },
    mode: 'onSubmit',
  })
}
