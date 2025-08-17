import { useAppDispatch } from 'shared/hooks'
import { setUserSettings } from 'entities/user-settings'
import { getApiError } from 'shared/api'
import { useUpdateThemeMutation } from 'entities/user-settings/api'
import { UpdateThemeRequestDTO } from 'shared/api/api-client'

export const useUpdateThemeSubmit = () => {
  const [updateTheme] = useUpdateThemeMutation()
  const dispatch = useAppDispatch()

  return async (values: UpdateThemeRequestDTO) => {
    if (values.theme === 'SYSTEM') {
      document.documentElement.classList.remove('light', 'dark')
    } else {
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(values.theme.toLowerCase())
    }

    try {
      const res = await updateTheme(values).unwrap()
      if (res && res.data) {
        dispatch(setUserSettings(res.data))
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
