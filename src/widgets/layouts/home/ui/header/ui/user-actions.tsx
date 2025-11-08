'use client'

import { paths } from 'shared/navigation'
import { useRouter } from 'next/navigation'
import { cn, useAppSelector } from 'shared/lib'
import Cookies from 'js-cookie'
import { Popover, PopoverContent, PopoverTrigger } from '@heroui/react'
import { Button, Translate, UserImage } from 'shared/ui'

export const HeaderUserActions = () => {
  const user = useAppSelector((state) => state.authSlice.user)

  const router = useRouter()

  const handleLogout = () => {
    Cookies.remove('jwt')
    router.replace(paths.signIn)
  }

  const menuItems = [
    {
      label: 'profile',
      icon: 'user',
      onClick: () => router.replace(paths.profile),
    },
    {
      label: 'logout',
      icon: 'logout',
      onClick: handleLogout,
      className:
        '[&_svg]:fill-icon-semantic-error-primary text-text-semantic-error-primary',
    },
  ]

  return (
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
            userColor={user?.color}
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
              <Translate value={`header.userActions.${menuItem.label}`} />
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
