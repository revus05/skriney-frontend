import { FC, ReactNode } from 'react'
import { HeroUIProvider } from '@heroui/system'

type ProvidersProps = {
  children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return <HeroUIProvider>{children}</HeroUIProvider>
}
