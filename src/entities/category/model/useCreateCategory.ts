'use client'

import { useAppDispatch } from 'shared/lib'
import { CreateCategoryRequestDTO, getApiError } from 'shared/api'
import { useCreateCategoryMutation } from '../api'
import { addCategory } from '../model'

export const useCreateCategory = () => {
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
