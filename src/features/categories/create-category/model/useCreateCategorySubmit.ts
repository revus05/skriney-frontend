'use client'

import { CreateCategoryRequestDTO } from 'shared/api'
import { useCreateCategory } from 'entities/category'

export const useCreateCategorySubmit = (onSuccess?: () => void) => {
  const createCategory = useCreateCategory()

  return async (data: CreateCategoryRequestDTO) => {
    await createCategory(data)
    if (onSuccess) onSuccess()
  }
}
