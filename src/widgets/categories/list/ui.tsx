'use client'

import { Balance, Card, EmojiTitle } from 'shared/ui'
import {
  DeleteCategoryButton,
  useGetCategories,
  useGetCategoriesStats,
} from 'features/categories'
import { CurrencySymbols } from 'entities/user-settings'

export const CategoriesList = () => {
  const categories = useGetCategories()
  const categoriesStats = useGetCategoriesStats()

  return (
    <div className={'flex flex-col gap-2.5'}>
      {categories.map((category) => (
        <Card
          className={'flex justify-between gap-2.5 rounded-xl px-4 py-2'}
          key={category.uuid}
        >
          <div className={'flex items-center gap-2.5'}>
            <EmojiTitle emoji={category.emoji} title={category.title} />
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
          <DeleteCategoryButton uuid={category.uuid} />
        </Card>
      ))}
    </div>
  )
}
