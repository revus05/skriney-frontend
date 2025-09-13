'use client'

import { Select, SelectItem, SharedSelection } from '@heroui/react'
import { Icons } from 'shared/ui'
import { Key, useState } from 'react'
import { useUpdateDefaultBankAccountSubmit } from '../model'
import { useAppSelector } from 'shared/hooks'
import { useGetBankAccounts } from 'features/bank-accounts'
import { useTranslation } from 'app/i18n'

export const UpdateDefaultBankAccountSelect = () => {
  const updateDefaultBankAccount = useUpdateDefaultBankAccountSubmit()
  const bankAccounts = useGetBankAccounts()

  const defaultBankAccount =
    useAppSelector(
      (state) => state.userSettingsSlice.userSettings?.defaultBankAccount,
    ) || null

  const [selectedBankAccount, setSelectedBankAccount] = useState<string>(
    defaultBankAccount?.uuid || '',
  )

  const handleSelectBankAccountChange = (keys: SharedSelection) => {
    const firstKey = Array.from(keys as Set<Key>)[0] as string
    setSelectedBankAccount(firstKey || '')
    void updateDefaultBankAccount({ uuid: firstKey })
  }

  const displayBankAccount =
    defaultBankAccount &&
    !bankAccounts.some((c) => c.uuid === defaultBankAccount.uuid)
      ? [...bankAccounts, defaultBankAccount]
      : bankAccounts

  const t = useTranslation()

  return (
    <Select
      aria-label={'default-category'}
      classNames={{
        trigger:
          'hover:!bg-bg-neutral-secondary transition will-change-transform active:scale-[0.98] px-4 !h-9 !min-h-9 border bg-transparent cursor-pointer outline-none',
        popoverContent: 'bg-bg-neutral-primary',
        value: '!text-text-neutral-tertiary font-semibold',
      }}
      className={'w-[150px]'}
      placeholder={t('settings.list.defaultBankAccount')}
      selectorIcon={<Icons.chevronDown />}
      size={'sm'}
      selectedKeys={selectedBankAccount ? [selectedBankAccount] : []}
      onSelectionChange={handleSelectBankAccountChange}
    >
      {displayBankAccount.map((category) => (
        <SelectItem
          key={category.uuid}
          className={'outline-none'}
          classNames={{
            wrapper: 'hover:bg-red-300 active:bg-red-300',
          }}
        >
          {category.title}
        </SelectItem>
      ))}
    </Select>
  )
}
