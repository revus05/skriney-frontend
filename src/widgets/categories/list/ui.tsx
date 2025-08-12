'use client'

import { CategoryListItem } from 'entities/category'
import { useGetCategories } from './model'

export const CategoriesList = () => {
  const categories = useGetCategories()

  return (
    <div className={'flex flex-col gap-2.5'}>
      {categories.map((category) => (
        <CategoryListItem
          key={category.uuid}
          title={category.title}
          emoji={category.emoji}
          sum={430}
          currency={'BYN'}
        />
      ))}
    </div>
  )
}
