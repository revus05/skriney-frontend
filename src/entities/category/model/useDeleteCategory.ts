import { deleteCategory, useDeleteCategoryMutation } from 'entities/category'
import { useAppDispatch, useAppSelector } from 'shared/lib'
import { getApiError } from 'shared/api'
import { setUserSettings } from 'entities/user-setting'

export const useDeleteCategory = () => {
  const [deleteCategoryFn] = useDeleteCategoryMutation()
  const dispatch = useAppDispatch()
  const userSettings = useAppSelector(
    (state) => state.userSettingsSlice.userSettings,
  )

  return async (data: { uuid: string }) => {
    try {
      const res = await deleteCategoryFn(data).unwrap()
      if (res && res.data) {
        dispatch(deleteCategory(res.data))
        if (userSettings?.defaultCategory?.uuid === data.uuid) {
          dispatch(
            setUserSettings({ ...userSettings, defaultCategory: undefined }),
          )
        }
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
