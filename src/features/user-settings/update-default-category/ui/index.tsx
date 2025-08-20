'use client'

import { Select, SelectItem, SharedSelection } from '@heroui/react'
import { Icons } from 'shared/ui'
import { Key, useState } from 'react'
import { useUpdateDefaultCategorySubmit } from '../model'
import { useAppSelector } from 'shared/hooks'
import { useGetCategories } from 'features/categories'

export const UpdateDefaultCategorySelect = () => {
  const updateDefaultCategory = useUpdateDefaultCategorySubmit()
  const categories = useGetCategories()

  const defaultCategory =
    useAppSelector(
      (state) => state.userSettingsSlice.userSettings?.defaultCategory,
    ) || null

  const [selectedCategory, setSelectedCategory] = useState<string>(
    defaultCategory?.uuid || '',
  )

  const handleSelectCategoryChange = (keys: SharedSelection) => {
    const firstKey = Array.from(keys as Set<Key>)[0] as string
    setSelectedCategory(firstKey || '')
    updateDefaultCategory({ uuid: firstKey })
  }

  const displayCategories =
    defaultCategory && !categories.some((c) => c.uuid === defaultCategory.uuid)
      ? [...categories, defaultCategory]
      : categories

  return (
    <Select
      aria-label={'default-category'}
      classNames={{
        trigger:
          'hover:!bg-bg-neutral-secondary transition will-change-transform active:scale-[0.98] px-4 !h-9 !min-h-9 border bg-transparent cursor-pointer outline-none',
        popoverContent: 'bg-bg-neutral-primary',
        value: '!text-text-neutral-tertiary font-semibold',
      }}
      className={'w-[150px]'}
      placeholder={'Категория по умолчанию'}
      selectorIcon={<Icons.chevronDown />}
      size={'sm'}
      selectedKeys={selectedCategory ? [selectedCategory] : []}
      onSelectionChange={handleSelectCategoryChange}
    >
      {displayCategories.map((category) => (
        <SelectItem
          key={category.uuid}
          className={'outline-none'}
          classNames={{
            wrapper: 'hover:bg-red-300 active:bg-red-300',
          }}
        >
          {category.title}
        </SelectItem>
      ))}
    </Select>
  )
}
