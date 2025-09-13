'use client'

import { FC, ReactNode, useRef } from 'react'
import { HeroUIProvider } from '@heroui/system'
import { Provider } from 'react-redux'
import { AppStore, makeStore } from 'app/store'
import { ToastProvider } from '@heroui/toast'
import { I18Provider } from 'app/i18n/provider'
import { PreloadedState } from 'entities/user/lib'

type ProvidersProps = {
  children: ReactNode
  preloadedState: Omit<PreloadedState, 'theme'>
}

export const Providers: FC<ProvidersProps> = ({ children, preloadedState }) => {
  const storeRef = useRef<AppStore>(null)

  const { language, ...reduxPreloadedDate } = preloadedState

  if (!storeRef.current) {
    storeRef.current = makeStore(reduxPreloadedDate)
  }

  return (
    <div className={'z-[1]'}>
      <Provider store={storeRef.current}>
        <I18Provider language={language.toLowerCase() as 'en' | 'ru'}>
          <HeroUIProvider>
            <ToastProvider
              placement={'bottom-center'}
              toastProps={{
                classNames: {
                  base: 'bg-bg-neutral-tertiary/70 rounded-3xl border px-6 py-4 backdrop-blur-[32px] !text-text-neutral-primary text-base',
                },
              }}
            />
            {children}
          </HeroUIProvider>
        </I18Provider>
      </Provider>
    </div>
  )
}
