'use client'

import { Select, SelectItem, SharedSelection } from '@heroui/react'
import { Icons } from 'shared/ui'
import { CurrencySymbols, CurrencyType } from 'entities/user-settings'
import { Key, useEffect, useState } from 'react'
import { useGetUserSettings } from 'features/user-settings/get-settings'
import { useUpdateDefaultCurrencySubmit } from '../model'

export const UpdateDefaultCurrencySelect = () => {
  const usersSettings = useGetUserSettings()
  const updateDefaultCurrency = useUpdateDefaultCurrencySubmit()

  const [selectedCurrency, setSelectedCurrency] = useState<string>('')

  useEffect(() => {
    setSelectedCurrency(usersSettings?.defaultCurrency || '')
  }, [usersSettings?.defaultCurrency])

  const handleSelectCurrencyChange = (keys: SharedSelection) => {
    const firstKey = Array.from(keys as Set<Key>)[0] as CurrencyType
    setSelectedCurrency(firstKey || '')
    updateDefaultCurrency({ currency: firstKey })
  }

  return (
    <Select
      aria-label={'bank-account'}
      classNames={{
        trigger:
          'hover:!bg-bg-neutral-secondary transition will-change-transform active:scale-[0.98] border-border-neutral-primary px-4 !h-9 !min-h-9 border bg-transparent cursor-pointer outline-none',
        popoverContent: 'bg-bg-neutral-primary',
        value: '!text-text-neutral-tertiary font-semibold',
      }}
      className={'w-[150px]'}
      placeholder={'Валюта по умолчанию'}
      selectorIcon={<Icons.chevronDown />}
      size={'sm'}
      selectedKeys={selectedCurrency ? [selectedCurrency] : []}
      onSelectionChange={handleSelectCurrencyChange}
    >
      {Object.entries(CurrencySymbols).map(([key, symbol]) => (
        <SelectItem
          key={key}
          className={'outline-none'}
          classNames={{
            wrapper: 'hover:bg-red-300 active:bg-red-300',
          }}
        >
          {symbol === key ? key : `${symbol} ${key}`}
        </SelectItem>
      ))}
    </Select>
  )
}
