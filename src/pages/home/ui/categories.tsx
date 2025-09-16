'use client'

import {
  CategoryCard,
  useGetCategories,
  useGetCategoriesStats,
  useUpdateCategory,
} from 'entities/category'
import { Translate } from 'shared/ui'

export const CategoriesHome = () => {
  const categories = useGetCategories()
  const categoriesStats = useGetCategoriesStats()

  const updateCategory = useUpdateCategory()

  return (
    <div className={'flex flex-col gap-4'}>
      <h2 className={'text-xl font-bold'}>
        <Translate value={'home.categories.title'} />
      </h2>
      <div className={'flex gap-4'}>
        {categories.map((category) => (
          <CategoryCard
            key={category.uuid}
            title={category.title}
            emoji={category.emoji}
            amount={
              categoriesStats.find((stat) => stat.uuid === category.uuid)
                ?.totalSpent || 0
            }
            currency={'BYN'}
            onEmojiChange={(emoji) => updateCategory(category.uuid, { emoji })}
            onTitleChange={(title) => updateCategory(category.uuid, { title })}
          />
        ))}
      </div>
    </div>
  )
}
