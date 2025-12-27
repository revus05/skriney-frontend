import { useDeleteBankAccountMutation } from '../api'
import { deleteBankAccount } from '../model'
import { useAppDispatch, useAppSelector } from 'shared/lib'
import { getApiError } from 'shared/api'
import { setUserSettings } from 'entities/user-setting'

export const useDeleteBankAccount = () => {
  const [deleteBankAccountFn] = useDeleteBankAccountMutation()
  const userSettings = useAppSelector(
    (state) => state.userSettingsSlice.userSettings,
  )
  const dispatch = useAppDispatch()

  return async (data: { uuid: string }) => {
    try {
      const res = await deleteBankAccountFn(data).unwrap()
      if (res && res.data) {
        dispatch(deleteBankAccount(res.data))
        if (userSettings?.defaultBankAccount?.uuid === data.uuid) {
          dispatch(
            setUserSettings({ ...userSettings, defaultBankAccount: undefined }),
          )
        }
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
