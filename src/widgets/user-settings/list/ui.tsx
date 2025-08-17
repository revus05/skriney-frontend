'use client'

import { UpdateDefaultCurrencySelect } from 'features/user-settings/update-default-currency'
import { UpdateDefaultCategorySelect } from 'features/user-settings/update-default-category'
import { UpdateThemeSegmentControl } from 'features/user-settings/update-theme'

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
    </div>
  )
}
