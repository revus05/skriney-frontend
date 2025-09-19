import { deleteCategory, useDeleteCategoryMutation } from 'entities/category'
import { useAppDispatch } from 'shared/lib'
import { getApiError } from 'shared/api'

export const useDeleteCategory = () => {
  const [deleteCategoryFn] = useDeleteCategoryMutation()
  const dispatch = useAppDispatch()

  return async (data: { uuid: string }) => {
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
