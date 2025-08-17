'use client'

import { Icons } from 'shared/ui'
import { createElement } from 'react'
import { useAppSelector } from 'shared/hooks'
import { Tab, Tabs } from '@heroui/react'
import { useUpdateThemeSubmit } from '../model'

export const UpdateThemeSegmentControl = () => {
  const theme = useAppSelector(
    (state) => state.userSettingsSlice.userSettings?.userTheme || 'SYSTEM',
  )

  const updateTheme = useUpdateThemeSubmit()

  const themeOptions = [
    {
      key: 'LIGHT',
      icon: 'sun',
      onClick: () => updateTheme({ theme: 'LIGHT' }),
    },
    {
      key: 'SYSTEM',
      icon: 'system',
      onClick: () => updateTheme({ theme: 'SYSTEM' }),
    },
    {
      key: 'DARK',
      icon: 'moon',
      onClick: () => updateTheme({ theme: 'DARK' }),
    },
  ]

  return (
    <div>
      <Tabs
        aria-label="Theme"
        classNames={{
          tabList:
            'bg-bg-neutral-primary/70 border-border-neutral-primary rounded-xl border p-1 backdrop-blur-[32px] gap-1',
          cursor: 'bg-bg-neutral-tertiary/70 outline-none',
          tab: 'p-1 rounded size-7',
        }}
        selectedKey={theme}
      >
        {themeOptions.map((theme) => (
          <Tab
            key={theme.key}
            onClick={theme.onClick}
            title={createElement(Icons[theme.icon], { className: 'size-5' })}
          />
        ))}
      </Tabs>
    </div>
  )
}
