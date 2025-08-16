'use client'

import { UpdateDefaultCurrencySelect } from 'features/user-settings/update-default-currency'

export const SettingsList = () => {
  return (
    <div className={'flex w-[540px] flex-col gap-4'}>
      <div className={'flex items-center justify-between'}>
        <span>Валюта по умолчанию</span>
        <UpdateDefaultCurrencySelect />
      </div>
    </div>
  )
}
