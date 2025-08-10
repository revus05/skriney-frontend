'use client'

import { Icons, Input } from 'shared/ui'
import Link from 'next/link'
import { useAppSelector } from 'shared/hooks'

export const Header = () => {
  const user = useAppSelector((state) => state.authSlice.user)

  return (
    <header
      className={
        'bg-bg-neutral-primary/70 border-border-neutral-primary/70 flex items-center justify-between rounded-2xl border px-8 py-3'
      }
    >
      <Link href={'/'}>
        <Icons.logo />
      </Link>
      <Input
        className={'bg-bg-neutral-secondary/70 w-[394px]'}
        placeholder={'Поиск'}
        iconStart={'search'}
      />
      <div className={'flex items-center gap-2'}>
        <span className={'font-semibold'}>{user?.username}</span>
        <div className={'size-8 rounded-full bg-gray-700'}></div>
      </div>
    </header>
  )
}
