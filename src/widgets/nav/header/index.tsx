'use client'

import { Button, Icons, Input, UserImage } from 'shared/ui'
import Link from 'next/link'
import { useAppSelector, useLocale } from 'shared/hooks'
import { Popover, PopoverContent, PopoverTrigger } from '@heroui/react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { paths } from 'shared/navigation'
import { cn } from 'shared/lib'

export const Header = () => {
  const user = useAppSelector((state) => state.authSlice.user)

  const router = useRouter()
  const t = useLocale()

  const handleLogout = () => {
    Cookies.remove('jwt')
    router.replace(paths.signIn)
  }

  const menuItems = [
    {
      label: 'Профиль',
      icon: 'user',
      onClick: () => router.replace(paths.profile),
    },
    {
      label: 'Выйти',
      icon: 'logout',
      onClick: handleLogout,
      className:
        '[&_svg]:fill-icon-semantic-error-primary text-text-semantic-error-primary',
    },
  ]

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
        placeholder={t.header.search}
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
            <UserImage
              image={user?.image}
              username={user?.username}
              userColor={user?.colour}
              className={'size-8'}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent
          className={'bg-bg-neutral-primary rounded-2xl border p-1'}
        >
          <div className="flex flex-col items-start gap-2.5 align-top">
            {menuItems.map((menuItem) => (
              <Button
                key={menuItem.label}
                variant={'ghost'}
                iconStart={menuItem.icon}
                className={cn(
                  'text-text-neutral-tertiary w-full rounded-xl px-3 py-2 font-bold',
                  menuItem.className,
                )}
                onClick={menuItem.onClick}
              >
                {menuItem.label}
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </header>
  )
}
