'use client'

import { FC, ReactNode, useRef } from 'react'
import { HeroUIProvider } from '@heroui/system'
import { Provider } from 'react-redux'
import { AppStore, makeStore, RootState } from 'app/store'
import { ToastProvider } from '@heroui/toast'

type ProvidersProps = {
  children: ReactNode
  preloadedState?: Partial<RootState>
}

export const Providers: FC<ProvidersProps> = ({ children, preloadedState }) => {
  const storeRef = useRef<AppStore>(null)

  if (!storeRef.current) {
    storeRef.current = makeStore(preloadedState)
  }

  return (
    <div className={'z-[1]'}>
      <Provider store={storeRef.current}>
        <HeroUIProvider>
          <ToastProvider
            placement={'bottom-center'}
            toastProps={{
              classNames: {
                base: 'border-border-neutral-primary bg-bg-neutral-tertiary/70 rounded-3xl border px-6 py-4 backdrop-blur-[32px] !text-text-neutral-primary text-base',
              },
            }}
          />
          {children}
        </HeroUIProvider>
      </Provider>
    </div>
  )
}
