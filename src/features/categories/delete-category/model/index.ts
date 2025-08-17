'use client'

import { useAppDispatch } from 'shared/hooks'
import { DeleteBankAccountRequestDTO, getApiError } from 'shared/api'
import { deleteCategory, useDeleteTransactionMutation } from 'entities/category'

export const useDeleteCategory = () => {
  const [deleteCategoryFn] = useDeleteTransactionMutation()
  const dispatch = useAppDispatch()

  return async (data: DeleteBankAccountRequestDTO) => {
    try {
      const res = await deleteCategoryFn(data).unwrap()
      if (res && res.data) {
        dispatch(deleteCategory(res.data))
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
