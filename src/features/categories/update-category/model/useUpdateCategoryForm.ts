'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UpdateCategoryFormData, updateCategorySchema } from './schema'

export const useUpdateCategoryForm = () =>
  useForm<UpdateCategoryFormData>({
    resolver: zodResolver(updateCategorySchema),
    defaultValues: {
      title: '',
      emoji: '',
    },
    mode: 'onSubmit',
  })
