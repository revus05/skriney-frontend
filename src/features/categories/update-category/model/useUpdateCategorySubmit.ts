'use client'

import { UpdateCategoryFormData } from './schema'
import { useUpdateCategory } from 'entities/category'

export const useUpdateCategorySubmit = (
  uuid: string,
  onSuccess?: () => void,
) => {
  const updateCategory = useUpdateCategory()

  return async (data: UpdateCategoryFormData) => {
    console.log('here')
    await updateCategory(uuid, data)

    if (onSuccess) onSuccess()
  }
}
