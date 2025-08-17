import { useAppDispatch } from 'shared/hooks'
import { setUserSettings } from 'entities/user-settings'
import { getApiError, UpdateDefaultCurrencyRequestDTO } from 'shared/api'
import { useUpdateDefaultCurrencyMutation } from 'entities/user-settings/api'

export const useUpdateDefaultCurrencySubmit = () => {
  const [updateDefaultCurrency] = useUpdateDefaultCurrencyMutation()
  const dispatch = useAppDispatch()

  return async (data: UpdateDefaultCurrencyRequestDTO) => {
    try {
      const res = await updateDefaultCurrency(data).unwrap()
      if (res && res.data) {
        dispatch(setUserSettings(res.data))
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
