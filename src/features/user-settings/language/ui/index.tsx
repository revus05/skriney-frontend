'use client'

import { Select, SelectItem } from 'shared/ui'
import { useUpdateLanguage } from '../model'
import { useState } from 'react'
import { useAppSelector } from 'shared/lib'
import { useTranslation } from 'shared/i18n'

export const UpdateLanguageSelect = () => {
  const updateLanguage = useUpdateLanguage()

  const language =
    useAppSelector((state) => state.userSettingsSlice.userSettings?.language) ||
    ''

  const [selectedLanguage, setSelectedLanguage] = useState<string>(language)

  const handleSelectLanguageChanged = (newValue: string) => {
    setSelectedLanguage(newValue)
    void updateLanguage({ language: newValue.toUpperCase() as 'EN' | 'RU' })
  }

  const t = useTranslation()

  return (
    <Select
      label={'default-currency'}
      className={'w-[150px]'}
      placeholder={t('settings.list.language')}
      onValueChangeAction={handleSelectLanguageChanged}
      value={selectedLanguage}
    >
      {['RU', 'EN'].map((lang) => (
        <SelectItem key={lang} className={'outline-none'}>
          {lang}
        </SelectItem>
      ))}
    </Select>
  )
}
