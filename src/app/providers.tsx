import { FC, ReactNode } from 'react'
import { HeroUIProvider } from '@heroui/system'
import { Provider } from 'react-redux'
import { store } from 'app/store'
import { ToastProvider } from '@heroui/toast'

type ProvidersProps = {
  children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <div className={'z-[1]'}>
      <Provider store={store}>
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
