'use client'

import {
  UpdateDefaultCategorySelect,
  UpdateDefaultCurrencySelect,
  UpdateLanguageSelect,
  UpdateThemeSegmentControl,
} from 'features/user-settings'
import { UpdateDefaultBankAccountSelect } from 'features/user-settings/update-default-bank-account'
import { Icons } from 'shared/ui'
import Link from 'next/link'
import { useAppSelector } from 'shared/hooks'

export const SettingsList = () => {
  const userId = useAppSelector((state) => state.authSlice.user?.uuid)

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
      <div className={'flex items-center justify-between'}>
        <span className={'text-base font-semibold'}>Привязать Telegram</span>
        <Link
          href={`https://t.me/skriney_bot?start=${userId}`}
          className={
            'bg-bg-neutral-primary/70 flex items-center gap-2.5 rounded-lg border px-4 py-2 backdrop-blur-[32px]'
          }
        >
          <Icons.link /> Привязать
        </Link>
      </div>
      <div className={'flex items-center justify-between'}>
        <span className={'text-base font-semibold'}>Язык</span>
        <UpdateLanguageSelect />
      </div>
    </div>
  )
}
