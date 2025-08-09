import { Providers } from 'app/providers'
import React, { FC, ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { paths } from 'shared/navigation'
import Cookies from 'js-cookie'

type AuthLayoutType = {
  children: ReactNode
}

const AuthLayout: FC<AuthLayoutType> = ({ children }) => {
  const [isClient, setIsClient] = useState(false)
  const [isAuthChecked, setIsAuthChecked] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const jwt = Cookies.get('jwt')

    if (jwt) {
      router.replace(paths.home)
      setIsAuthChecked(true)
    }
  }, [isClient, router])

  if (!isClient || isAuthChecked) {
    return null
  }

  return (
    <Providers>
      <main>{children}</main>
    </Providers>
  )
}

export const withAuthLayout = (Component: React.FC) => {
  const WrappedComponent = () => (
    <AuthLayout>
      <Component />
    </AuthLayout>
  )

  WrappedComponent.displayName = `withAuthLayout(${Component.displayName || Component.name || 'Component'})`

  return WrappedComponent
}
