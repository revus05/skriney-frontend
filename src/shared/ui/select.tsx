'use client'

import {
  Select as HeroUiSelect,
  SelectItem as HeroUiSelectItem,
  SharedSelection,
} from '@heroui/react'
import { ComponentProps, FC, Key } from 'react'
import { cn } from 'shared/lib'
import { Icons } from 'shared/ui/icons'

interface SelectProps extends ComponentProps<typeof HeroUiSelect> {
  label: string
  value: string
  onValueChangeAction: (value: string) => void
}

export const Select: FC<SelectProps> = ({
  label,
  classNames,
  children,
  onValueChangeAction,
  value,
  disallowEmptySelection = true,
  ...props
}) => {
  const handleSelectCategoryChange = (keys: SharedSelection) => {
    const firstKey = Array.from(keys as Set<Key>)[0] as string
    onValueChangeAction(firstKey || '')
  }

  return (
    <HeroUiSelect
      aria-label={label}
      classNames={{
        trigger: cn(
          'hover:!bg-bg-neutral-secondary backdrop-blur-[32px] transition will-change-transform active:scale-[0.98]',
          'px-4 !h-9 !min-h-9 border bg-transparent cursor-pointer outline-none shadow-sm active:shadow-md',
          classNames?.trigger,
        ),
        popoverContent: cn('bg-bg-neutral-primary', classNames?.popoverContent),
        value: cn(
          'font-semibold',
          value ? '!text-text-neutral-primary' : '!text-text-neutral-tertiary',
          classNames?.value,
        ),
        selectorIcon: cn(
          value ? '!fill-icon-neutral-primary' : '!fill-icon-neutral-tertiary',
          classNames?.selectorIcon,
        ),
        errorMessage: cn(
          'text-text-semantic-error-primary text-sm',
          classNames?.errorMessage,
        ),
        mainWrapper: cn('[&_>_div]:p-0', classNames?.mainWrapper),
      }}
      size={'sm'}
      selectedKeys={value ? [value] : []}
      onSelectionChange={handleSelectCategoryChange}
      selectorIcon={<Icons.chevronDown />}
      disallowEmptySelection={disallowEmptySelection}
      {...props}
    >
      {children}
    </HeroUiSelect>
  )
}

export { HeroUiSelectItem as SelectItem }
