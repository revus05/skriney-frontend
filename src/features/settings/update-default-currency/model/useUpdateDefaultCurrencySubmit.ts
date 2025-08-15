import { useAppDispatch } from 'shared/hooks'
import { setUserSettings } from 'entities/user-settings'
import { getApiError } from 'shared/api'
import { useUpdateDefaultCurrencyMutation } from 'entities/user-settings/api'
import { UpdateDefaultCurrencyRequestDTO } from 'shared/api/api-client'

export const useUpdateDefaultCurrencySubmit = () => {
  const [updateDefaultCurrency] = useUpdateDefaultCurrencyMutation()
  const dispatch = useAppDispatch()

  return async (values: UpdateDefaultCurrencyRequestDTO) => {
    try {
      const res = await updateDefaultCurrency(values).unwrap()
      if (res && res.data) {
        dispatch(setUserSettings(res.data))
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
