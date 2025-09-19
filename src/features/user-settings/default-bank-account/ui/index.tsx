'use client'

import { Select, SelectItem } from 'shared/ui'
import { useState } from 'react'
import { useUpdateDefaultBankAccountSubmit } from '../model'
import { useAppSelector } from 'shared/lib'
import { useTranslation } from 'shared/i18n'
import { useGetBankAccounts } from 'entities/bank-account'

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

  const handleSelectBankAccountChange = (newValue: string) => {
    setSelectedBankAccount(newValue)
    void updateDefaultBankAccount({ uuid: newValue })
  }

  const displayBankAccount =
    defaultBankAccount &&
    !bankAccounts.some((c) => c.uuid === defaultBankAccount.uuid)
      ? [...bankAccounts, defaultBankAccount]
      : bankAccounts

  const t = useTranslation()

  return (
    <Select
      label={'default-category'}
      className={'w-[180px]'}
      placeholder={t('settings.list.defaultBankAccount')}
      value={selectedBankAccount}
      onValueChangeAction={handleSelectBankAccountChange}
    >
      {displayBankAccount.map((category) => (
        <SelectItem key={category.uuid}>{category.title}</SelectItem>
      ))}
    </Select>
  )
}
