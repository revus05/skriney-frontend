'use client'

import { Select, SelectItem, SharedSelection } from '@heroui/react'
import { Icons } from 'shared/ui'
import { CurrencySymbols, CurrencyType } from 'entities/user-setting'
import { Key, useState } from 'react'
import { useUpdateDefaultCurrencySubmit } from '../model'
import { useAppSelector } from 'shared/lib'
import { cn } from 'shared/lib'
import { useTranslation } from 'shared/i18n'

export const UpdateDefaultCurrencySelect = () => {
  const updateDefaultCurrency = useUpdateDefaultCurrencySubmit()

  const defaultCurrency =
    useAppSelector(
      (state) => state.userSettingsSlice.userSettings?.defaultCurrency,
    ) || ''

  const [selectedCurrency, setSelectedCurrency] =
    useState<string>(defaultCurrency)

  const handleSelectCurrencyChange = (keys: SharedSelection) => {
    const firstKey = Array.from(keys as Set<Key>)[0] as CurrencyType
    setSelectedCurrency(firstKey || '')
    void updateDefaultCurrency({ currency: firstKey })
  }

  const t = useTranslation()

  return (
    <Select
      aria-label={'default-currency'}
      classNames={{
        trigger:
          'hover:!bg-bg-neutral-secondary transition will-change-transform active:scale-[0.98] px-4 !h-9 !min-h-9 border bg-transparent cursor-pointer outline-none',
        popoverContent: 'bg-bg-neutral-primary',
        value: cn(
          'font-semibold',
          selectedCurrency
            ? '!text-text-neutral-primary'
            : '!text-text-neutral-tertiary',
        ),
      }}
      className={'w-[150px]'}
      placeholder={t('settings.list.defaultCurrency')}
      selectorIcon={
        <Icons.chevronDown
          className={cn(
            selectedCurrency
              ? '!fill-icon-neutral-primary'
              : '!fill-icon-neutral-tertiary',
          )}
        />
      }
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
