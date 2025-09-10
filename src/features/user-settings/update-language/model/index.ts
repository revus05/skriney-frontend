import { useAppDispatch } from 'shared/hooks'
import {
  setUserSettings,
  useUpdateLanguageMutation,
} from 'entities/user-settings'
import { getApiError, UpdateLanguageRequestDTO } from 'shared/api'

export const useUpdateLanguage = () => {
  const [updateLanguage] = useUpdateLanguageMutation()
  const dispatch = useAppDispatch()

  return async (data: UpdateLanguageRequestDTO) => {
    try {
      const res = await updateLanguage(data).unwrap()
      if (res && res.data) {
        dispatch(setUserSettings(res.data))
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
