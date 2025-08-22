'use client'

import { Button, Icons, Input } from 'shared/ui'
import Link from 'next/link'
import { useAppSelector } from 'shared/hooks'
import { Popover, PopoverContent, PopoverTrigger } from '@heroui/react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { paths } from 'shared/navigation'

export const Header = () => {
  const user = useAppSelector((state) => state.authSlice.user)

  const router = useRouter()

  const handleLogout = () => {
    Cookies.remove('jwt')
    router.replace(paths.signIn)
  }

  return (
    <header
      className={
        'bg-bg-neutral-primary/70 flex items-center justify-between rounded-2xl border px-8 py-3'
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

      <Popover placement="bottom-end">
        <PopoverTrigger
          className={
            'hover:bg-bg-neutral-secondary cursor-pointer rounded-lg px-2 py-1'
          }
        >
          <div className={'flex items-center gap-2'}>
            <span className={'font-semibold'}>{user?.username}</span>
            <div className={'size-8 rounded-full bg-gray-700'}></div>
          </div>
        </PopoverTrigger>
        <PopoverContent
          className={'bg-bg-neutral-primary rounded-2xl border p-1'}
        >
          <div className="flex flex-col items-start gap-2.5 align-top">
            <Button
              variant={'ghost'}
              iconStart={'user'}
              className={
                'text-text-neutral-tertiary w-full rounded-xl px-3 py-2 font-bold'
              }
              onClick={() => router.replace(paths.profile)}
            >
              Профиль
            </Button>
            <Button
              variant={'ghost'}
              iconStart={'logout'}
              className={
                '[&_svg]:fill-icon-semantic-error-primary text-text-semantic-error-primary w-full rounded-xl px-3 py-2 font-bold'
              }
              onClick={handleLogout}
            >
              Выйти
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </header>
  )
}
