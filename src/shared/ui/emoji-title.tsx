'use client'

import { FC } from 'react'
import { Icons } from 'shared/ui/icons'
import { Popover, PopoverContent, PopoverTrigger } from '@heroui/react'

type EmojiTitleType = {
  emoji?: string
  title: string
}

export const EmojiTitle: FC<EmojiTitleType> = ({ emoji, title }) => {
  return (
    <div className={'flex items-center gap-2 text-base leading-5'}>
      {emoji && <span>{emoji}</span>}
      {!emoji && (
        <>
          <Popover placement="right">
            <PopoverTrigger>
              <Icons.emojiPlaceholder className={'cursor-pointer'} />
            </PopoverTrigger>
            <PopoverContent
              className={
                'border-border-neutral-primary bg-bg-neutral-tertiary rounded-3xl border px-6 py-4'
              }
            >
              <div className="px-1 py-2">
                <div className="text-small font-bold">Popover Content</div>
                <div className="text-tiny">This is the popover content</div>
              </div>
            </PopoverContent>
          </Popover>
        </>
      )}
      <span className={'font-semibold'}>{title}</span>
    </div>
  )
}
