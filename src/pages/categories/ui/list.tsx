'use client'

import { Balance, Button, Card, EmojiTitle, Translate } from 'shared/ui'
import { CurrencySymbols } from 'entities/user-setting'
import {
  useGetCategories,
  useDeleteCategory,
  useGetCategoriesStats,
  useUpdateCategory,
} from 'entities/category'
import { Popover, PopoverContent, PopoverTrigger } from '@heroui/react'

export const CategoriesList = () => {
  const categories = useGetCategories()
  const categoriesStats = useGetCategoriesStats()
  const updateCategory = useUpdateCategory()
  const deleteCategory = useDeleteCategory()

  return (
    <div className={'flex flex-col gap-2.5'}>
      {categories.map((category) => (
        <Card
          className={'flex justify-between gap-2.5 rounded-xl px-4 py-2'}
          key={category.uuid}
        >
          <div className={'flex items-center gap-2.5'}>
            <EmojiTitle
              emoji={category.emoji}
              title={category.title}
              onEmojiChange={(emoji) =>
                updateCategory(category.uuid, { emoji })
              }
              onTitleChange={(title) =>
                updateCategory(category.uuid, { title })
              }
            />
            <span className={'text-text-neutral-tertiary text-base font-bold'}>
              •
            </span>
            <Balance
              signed
              withColor
              balance={
                categoriesStats.find((stat) => stat.uuid === category.uuid)
                  ?.totalSpent || 0
              }
              currency={CurrencySymbols.BYN}
            />
          </div>
          <Popover placement="bottom-end">
            <PopoverTrigger>
              <Button variant="icon" iconStart="moreVertical" />
            </PopoverTrigger>
            <PopoverContent
              className={'bg-bg-neutral-primary rounded-2xl border p-1'}
            >
              <div className="flex items-center gap-2.5">
                <Button
                  variant={'ghost'}
                  iconStart={'trashBin'}
                  className={
                    '[&_svg]:fill-icon-semantic-error-primary text-text-semantic-error-primary rounded-xl px-3 py-2 font-bold'
                  }
                  onClick={() => deleteCategory({ uuid: category.uuid })}
                >
                  <Translate value={'categories.delete'} />
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </Card>
      ))}
    </div>
  )
}
