import { useAppDispatch } from 'shared/hooks'
import { setUserSettings } from 'entities/user-settings'
import { getApiError, UpdateThemeRequestDTO } from 'shared/api'
import { useUpdateThemeMutation } from 'entities/user-settings/api'

export const useUpdateThemeSubmit = () => {
  const [updateTheme] = useUpdateThemeMutation()
  const dispatch = useAppDispatch()

  return async (data: UpdateThemeRequestDTO) => {
    if (data.theme === 'SYSTEM') {
      document.documentElement.classList.remove('light', 'dark')
    } else {
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(data.theme.toLowerCase())
    }

    try {
      const res = await updateTheme(data).unwrap()
      if (res && res.data) {
        dispatch(setUserSettings(res.data))
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
