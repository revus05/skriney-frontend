'use client'

import React, { ComponentProps, FC, useState } from 'react'
import { Icons } from 'shared/ui'
import { Popover, PopoverContent, PopoverTrigger } from '@heroui/react'
import { cn } from 'shared/lib'
import Picker from '@emoji-mart/react'

interface EmojiTitleType extends ComponentProps<'div'> {
  emoji?: string
  title: string
  onEmojiChange?: (emoji: string) => void
  onTitleChange?: (title: string) => void
}

export const EmojiTitle: FC<EmojiTitleType> = ({
  emoji,
  title,
  className,
  onEmojiChange,
  onTitleChange,
  ...props
}) => {
  const [ttl, setTitle] = useState(title)
  const [isEditing, setIsEditing] = useState(false)
  const [tempValue, setTempValue] = useState(ttl)

  const handleDoubleClick = () => {
    if (!onTitleChange) {
      return
    }
    setIsEditing(true)
    setTempValue(ttl)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempValue(e.target.value)
  }

  const handleSave = () => {
    setIsEditing(false)
    if (onTitleChange && tempValue) {
      setTitle(tempValue)
      onTitleChange(tempValue)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      setIsEditing(false)
    }
  }

  return (
    <div
      className={cn('flex items-center gap-2 text-base leading-5', className)}
      {...props}
    >
      {!onEmojiChange ? (
        emoji ? (
          <span className={'cursor-pointer'}>{emoji}</span>
        ) : (
          <Icons.emojiPlaceholder className={'shrink-0 cursor-pointer'} />
        )
      ) : (
        <Popover placement="right">
          <PopoverTrigger>
            {emoji ? (
              <span className={'cursor-pointer'}>{emoji}</span>
            ) : (
              <Icons.emojiPlaceholder className={'shrink-0 cursor-pointer'} />
            )}
          </PopoverTrigger>
          <PopoverContent className={'bg-transparent p-0'}>
            <Picker
              data={async () => {
                const response = await fetch(
                  'https://cdn.jsdelivr.net/npm/@emoji-mart/data',
                )
                return response.json()
              }}
              onEmojiSelect={({ native }: { native: string }) =>
                onEmojiChange(native)
              }
              previewPosition="none"
              skinTonePosition="none"
            />
          </PopoverContent>
        </Popover>
      )}

      {isEditing ? (
        <input
          type="text"
          value={tempValue}
          onChange={handleChange}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          className="h-5 w-fit rounded border border-gray-300 px-1 font-semibold outline-none"
        />
      ) : (
        <span
          className="h-5 cursor-pointer font-semibold"
          onDoubleClick={handleDoubleClick}
        >
          {ttl}
        </span>
      )}
    </div>
  )
}
