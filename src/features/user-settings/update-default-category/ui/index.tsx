'use client'

import { Select, SelectItem, SharedSelection } from '@heroui/react'
import { Icons } from 'shared/ui'
import { Key, useEffect, useState } from 'react'
import { useGetUserSettings } from 'features/user-settings/get-settings'
import { useUpdateDefaultCategorySubmit } from '../model'
import { useGetCategories } from 'widgets/categories/list'

export const UpdateDefaultCategorySelect = () => {
  const usersSettings = useGetUserSettings()
  const updateDefaultCategory = useUpdateDefaultCategorySubmit()
  const categories = useGetCategories()

  const [selectedCategory, setSelectedCategory] = useState<string>('')

  useEffect(() => {
    setSelectedCategory(usersSettings?.defaultCategory.uuid || '')
  }, [usersSettings?.defaultCategory.uuid])

  const handleSelectCurrencyChange = (keys: SharedSelection) => {
    const firstKey = Array.from(keys as Set<Key>)[0] as string
    setSelectedCategory(firstKey || '')
    updateDefaultCategory({ uuid: firstKey })
  }

  return (
    <Select
      aria-label={'default-category'}
      classNames={{
        trigger:
          'hover:!bg-bg-neutral-secondary transition will-change-transform active:scale-[0.98] border-border-neutral-primary px-4 !h-9 !min-h-9 border bg-transparent cursor-pointer outline-none',
        popoverContent: 'bg-bg-neutral-primary',
        value: '!text-text-neutral-tertiary font-semibold',
      }}
      className={'w-[150px]'}
      placeholder={'Валюта по умолчанию'}
      selectorIcon={<Icons.chevronDown />}
      size={'sm'}
      selectedKeys={selectedCategory ? [selectedCategory] : []}
      onSelectionChange={handleSelectCurrencyChange}
    >
      {categories.map((category) => (
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
