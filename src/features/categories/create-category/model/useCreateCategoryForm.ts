'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateCategoryFormData, createCategorySchema } from './schema'

export const useCreateCategoryForm = () => {
  return useForm<CreateCategoryFormData>({
    resolver: zodResolver(createCategorySchema),
    defaultValues: {
      title: '',
    },
    mode: 'onSubmit',
  })
}
