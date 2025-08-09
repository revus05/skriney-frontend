import { Header } from 'widgets/nav/header'
import { Aside } from 'widgets/nav/aside'
import React, { FC, ReactNode, useEffect, useState } from 'react'
import { Providers } from 'app/providers'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { paths } from 'shared/navigation'

type HomeLayoutType = {
  children: ReactNode
}

const HomeLayout: FC<HomeLayoutType> = ({ children }) => {
  const [isClient, setIsClient] = useState(false)
  const [isAuthChecked, setIsAuthChecked] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const jwt = Cookies.get('jwt')

    if (!jwt) {
      router.replace(paths.signIn)
    } else {
      setIsAuthChecked(true)
    }
  }, [isClient, router])

  if (!isClient || !isAuthChecked) {
    return null
  }

  return (
    <Providers>
      <main className={'p-2.5'}>
        <Header />
        <div className="mt-8 flex gap-8">
          <Aside />
          {children}
        </div>
      </main>
    </Providers>
  )
}

export const withHomeLayout = (Component: React.FC) => {
  const WrappedComponent = () => (
    <HomeLayout>
      <Component />
    </HomeLayout>
  )

  WrappedComponent.displayName = `withHomeLayout(${Component.displayName || Component.name || 'Component'})`

  return WrappedComponent
}
