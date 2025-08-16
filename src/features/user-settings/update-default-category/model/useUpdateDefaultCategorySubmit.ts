import { useAppDispatch } from 'shared/hooks'
import {
  setUserSettings,
  useUpdateDefaultCategoryMutation,
} from 'entities/user-settings'
import { getApiError } from 'shared/api'
import { UpdateDefaultCategoryRequestDTO } from 'shared/api/api-client'

export const useUpdateDefaultCategorySubmit = () => {
  const [updateDefaultCategory] = useUpdateDefaultCategoryMutation()
  const dispatch = useAppDispatch()

  return async (values: UpdateDefaultCategoryRequestDTO) => {
    try {
      const res = await updateDefaultCategory(values).unwrap()
      if (res && res.data) {
        dispatch(setUserSettings(res.data))
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
