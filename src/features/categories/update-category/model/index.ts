'use client'

import { useAppDispatch } from 'shared/hooks'
import { getApiError, UpdateCategoryRequestDTO } from 'shared/api'
import { updateCategory, useUpdateCategoryMutation } from 'entities/category'

export const useUpdateCategory = () => {
  const [updateCategoryFn] = useUpdateCategoryMutation()
  const dispatch = useAppDispatch()

  return async (uuid: string, body: UpdateCategoryRequestDTO) => {
    try {
      const res = await updateCategoryFn({ uuid, body }).unwrap()
      if (res && res.data) {
        dispatch(updateCategory(res.data))
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
