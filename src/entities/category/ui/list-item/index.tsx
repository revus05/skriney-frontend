'use client'

import { FC } from 'react'
import { Balance, Button, Card, EmojiTitle } from 'shared/ui'
import { Popover, PopoverContent, PopoverTrigger } from '@heroui/react'
import { useDeleteCategory } from 'features/categories/delete-category'

type CategoryCardType = {
  uuid: string
  emoji?: string
  title: string
  currency: string
  sum: number
}

export const CategoryListItem: FC<CategoryCardType> = ({
  uuid,
  emoji,
  title,
  currency,
  sum,
}) => {
  const deleteCategory = useDeleteCategory()
  return (
    <Card className={'flex justify-between gap-2.5 rounded-xl px-4 py-2'}>
      <div className={'flex items-center gap-2.5'}>
        <EmojiTitle emoji={emoji} title={title} />
        <span className={'text-text-neutral-tertiary text-base font-bold'}>
          •
        </span>
        <Balance sum={sum} currency={currency} />
      </div>
      <Popover placement="bottom-end">
        <PopoverTrigger>
          <Button variant="icon" iconStart="moreVertical" />
        </PopoverTrigger>
        <PopoverContent
          className={
            'border-border-neutral-primary bg-bg-neutral-primary rounded-2xl border p-2'
          }
        >
          <div className="flex items-center gap-2.5">
            <Button
              variant={'ghost'}
              iconStart={'trashBin'}
              className={
                '[&_svg]:fill-icon-semantic-error-primary text-text-semantic-error-primary px-2 py-1 font-bold'
              }
              onClick={() => deleteCategory({ uuid })}
            >
              Удалить
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </Card>
  )
}
