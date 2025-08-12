'use client'

import { useAppDispatch } from 'shared/hooks'
import { getApiError } from 'shared/api'
import { CreateCategoryRequestDTO } from 'shared/api/api-client'
import { useCreateCategoryMutation } from 'entities/category/api'
import { addCategory } from 'entities/category'

export function useCreateCategorySubmit() {
  const [createCategory] = useCreateCategoryMutation()
  const dispatch = useAppDispatch()

  return async (values: CreateCategoryRequestDTO) => {
    try {
      const res = await createCategory(values).unwrap()
      if (res && res.data) {
        dispatch(addCategory(res.data))
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
