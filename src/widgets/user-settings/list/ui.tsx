'use client'

import {
  UpdateDefaultCategorySelect,
  UpdateDefaultCurrencySelect,
  UpdateThemeSegmentControl,
} from 'features/user-settings'
import { UpdateDefaultBankAccountSelect } from 'features/user-settings/update-default-bank-account'

export const SettingsList = () => {
  return (
    <div className={'flex w-[540px] flex-col gap-4'}>
      <div className={'flex items-center justify-between'}>
        <span className={'text-base font-semibold'}>Тема</span>
        <UpdateThemeSegmentControl />
      </div>
      <div className={'flex items-center justify-between'}>
        <span className={'text-base font-semibold'}>Валюта по умолчанию</span>
        <UpdateDefaultCurrencySelect />
      </div>
      <div className={'flex items-center justify-between'}>
        <span className={'text-base font-semibold'}>
          Категория по умолчанию
        </span>
        <UpdateDefaultCategorySelect />
      </div>
      <div className={'flex items-center justify-between'}>
        <span className={'text-base font-semibold'}>Счет по умолчанию</span>
        <UpdateDefaultBankAccountSelect />
      </div>
    </div>
  )
}
