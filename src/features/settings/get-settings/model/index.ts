import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/hooks'
import {
  setUserSettings,
  useGetUserSettingsMutation,
} from 'entities/user-settings'

export const useGetUserSettings = () => {
  const [getUserSettings] = useGetUserSettingsMutation()
  const dispatch = useAppDispatch()
  const userSettings = useAppSelector(
    (state) => state.userSettingsSlice.userSettings,
  )

  useEffect(() => {
    const fetchUserSettings = async () => {
      const response = await getUserSettings().unwrap()
      dispatch(setUserSettings(response.data))
    }

    fetchUserSettings()
  }, [dispatch, getUserSettings])

  return userSettings
}
