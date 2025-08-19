'use client'

import { useAppDispatch } from 'shared/hooks'
import { CreateCategoryRequestDTO, getApiError } from 'shared/api'
import { useCreateCategoryMutation } from 'entities/category/api'
import { addCategory } from 'entities/category'

export const useCreateCategorySubmit = () => {
  const [createCategory] = useCreateCategoryMutation()
  const dispatch = useAppDispatch()

  return async (data: CreateCategoryRequestDTO) => {
    try {
      const res = await createCategory(data).unwrap()
      if (res && res.data) {
        dispatch(addCategory(res.data))
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
