import { useAppDispatch } from 'shared/hooks'
import {
  setUserSettings,
  useUpdateDefaultCategoryMutation,
} from 'entities/user-settings'
import { getApiError, UpdateDefaultCategoryRequestDTO } from 'shared/api'

export const useUpdateDefaultCategorySubmit = () => {
  const [updateDefaultCategory] = useUpdateDefaultCategoryMutation()
  const dispatch = useAppDispatch()

  return async (data: UpdateDefaultCategoryRequestDTO) => {
    try {
      const res = await updateDefaultCategory(data).unwrap()
      if (res && res.data) {
        dispatch(setUserSettings(res.data))
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
