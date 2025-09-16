'use client'

import { UpdateDefaultBankAccountSelect } from 'features/user-settings/default-bank-account'
import { Icons, Translate } from 'shared/ui'
import Link from 'next/link'
import { useAppSelector } from 'shared/lib'
import { UpdateThemeSegmentControl } from 'features/user-settings/theme'
import { UpdateDefaultCurrencySelect } from 'features/user-settings/default-currency'
import { UpdateDefaultCategorySelect } from 'features/user-settings/default-category'
import { UpdateLanguageSelect } from 'features/user-settings/language'

export const SettingsList = () => {
  const userId = useAppSelector((state) => state.authSlice.user?.uuid)

  return (
    <div className={'flex w-[540px] flex-col gap-4'}>
      <div className={'flex items-center justify-between'}>
        <span className={'text-base font-semibold'}>
          <Translate value={'settings.list.theme'} />
        </span>
        <UpdateThemeSegmentControl />
      </div>
      <div className={'flex items-center justify-between'}>
        <span className={'text-base font-semibold'}>
          <Translate value={'settings.list.defaultCurrency'} />
        </span>
        <UpdateDefaultCurrencySelect />
      </div>
      <div className={'flex items-center justify-between'}>
        <span className={'text-base font-semibold'}>
          <Translate value={'settings.list.defaultCategory'} />
        </span>
        <UpdateDefaultCategorySelect />
      </div>
      <div className={'flex items-center justify-between'}>
        <span className={'text-base font-semibold'}>
          <Translate value={'settings.list.defaultBankAccount'} />
        </span>
        <UpdateDefaultBankAccountSelect />
      </div>
      <div className={'flex items-center justify-between'}>
        <span className={'text-base font-semibold'}>
          <Translate value={'settings.list.connectTelegram.title'} />
        </span>
        <Link
          href={`https://t.me/skriney_bot?start=${userId}`}
          className={
            'bg-bg-neutral-primary/70 flex items-center gap-2.5 rounded-lg border px-4 py-2 backdrop-blur-[32px]'
          }
        >
          <Icons.link />{' '}
          <Translate value={'settings.list.connectTelegram.button'} />
        </Link>
      </div>
      <div className={'flex items-center justify-between'}>
        <span className={'text-base font-semibold'}>
          <Translate value={'settings.list.language'} />
        </span>
        <UpdateLanguageSelect />
      </div>
    </div>
  )
}
