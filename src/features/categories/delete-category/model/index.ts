'use client'

import { useAppDispatch } from 'shared/hooks'
import { getApiError } from 'shared/api'
import { DeleteBankAccountRequestDTO } from 'shared/api/api-client'
import { deleteCategory, useDeleteTransactionMutation } from 'entities/category'

export function useDeleteCategory() {
  const [deleteCategoryFn] = useDeleteTransactionMutation()
  const dispatch = useAppDispatch()

  return async (deleteCategoryUuid: DeleteBankAccountRequestDTO) => {
    try {
      const res = await deleteCategoryFn(deleteCategoryUuid).unwrap()
      if (res && res.data) {
        dispatch(deleteCategory(res.data))
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
