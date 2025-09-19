'use client'

import { Select, SelectItem } from 'shared/ui'
import { CurrencySymbols, CurrencyType } from 'entities/user-setting'
import { useState } from 'react'
import { useUpdateDefaultCurrencySubmit } from '../model'
import { useAppSelector } from 'shared/lib'
import { useTranslation } from 'shared/i18n'

export const UpdateDefaultCurrencySelect = () => {
  const updateDefaultCurrency = useUpdateDefaultCurrencySubmit()

  const defaultCurrency =
    useAppSelector(
      (state) => state.userSettingsSlice.userSettings?.defaultCurrency,
    ) || ''

  const [selectedCurrency, setSelectedCurrency] =
    useState<string>(defaultCurrency)

  const handleSelectCurrencyChange = (newValue: string) => {
    const currency = newValue as CurrencyType
    setSelectedCurrency(currency)
    void updateDefaultCurrency({ currency })
  }

  const t = useTranslation()

  return (
    <Select
      label={'default-currency'}
      className={'w-[150px]'}
      placeholder={t('settings.list.defaultCurrency')}
      value={selectedCurrency}
      onValueChangeAction={handleSelectCurrencyChange}
    >
      {Object.entries(CurrencySymbols).map(([key, symbol]) => (
        <SelectItem key={key}>
          {symbol === key ? key : `${symbol} ${key}`}
        </SelectItem>
      ))}
    </Select>
  )
}
