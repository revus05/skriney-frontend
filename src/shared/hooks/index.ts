import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'app/store'
import { en } from 'shared/i18n/en'
import { ru } from 'shared/i18n/ru'

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useLocale = () => {
  const userLanguage =
    useAppSelector((state) => state.userSettingsSlice.userSettings?.language) ||
    'EN'

  const locales = { EN: en, RU: ru }

  return locales[userLanguage]
}
