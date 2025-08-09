import { Providers } from 'app/providers'
import React, { FC, ReactNode } from 'react'

type AuthLayoutType = {
  children: ReactNode
}

const AuthLayout: FC<AuthLayoutType> = ({ children }) => {
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
