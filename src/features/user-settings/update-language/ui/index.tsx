import { Icons } from 'shared/ui'
import { Select, SelectItem, SharedSelection } from '@heroui/react'
import { useUpdateLanguage } from '../model'
import { Key, useState } from 'react'
import { useAppSelector } from 'shared/hooks'
import { cn } from 'shared/lib'
import { useTranslation } from 'app/i18n'

export const UpdateLanguageSelect = () => {
  const updateLanguage = useUpdateLanguage()

  const language =
    useAppSelector((state) => state.userSettingsSlice.userSettings?.language) ||
    ''

  const [selectedLanguage, setSelectedLanguage] = useState<string>(language)

  const handleSelectLanguageChanged = (keys: SharedSelection) => {
    const firstKey = Array.from(keys as Set<Key>)[0] as string
    setSelectedLanguage(firstKey || '')
    void updateLanguage({ language: firstKey.toUpperCase() as 'EN' | 'RU' })
  }

  const t = useTranslation()

  return (
    <Select
      aria-label={'default-currency'}
      classNames={{
        trigger:
          'hover:!bg-bg-neutral-secondary transition will-change-transform active:scale-[0.98] px-4 !h-9 !min-h-9 border bg-transparent cursor-pointer outline-none',
        popoverContent: 'bg-bg-neutral-primary',
        value: cn(
          'font-semibold',
          selectedLanguage
            ? '!text-text-neutral-primary'
            : '!text-text-neutral-tertiary',
        ),
      }}
      className={'w-[150px]'}
      placeholder={t('settings.list.language')}
      selectorIcon={
        <Icons.chevronDown
          className={cn(
            selectedLanguage
              ? '!fill-icon-neutral-primary'
              : '!fill-icon-neutral-tertiary',
          )}
        />
      }
      onSelectionChange={handleSelectLanguageChanged}
      selectedKeys={selectedLanguage ? [selectedLanguage] : []}
      size={'sm'}
      disallowEmptySelection
    >
      {['RU', 'EN'].map((lang) => (
        <SelectItem
          key={lang}
          className={'outline-none'}
          classNames={{
            wrapper: 'hover:bg-red-300 active:bg-red-300',
          }}
        >
          {lang}
        </SelectItem>
      ))}
    </Select>
  )
}
