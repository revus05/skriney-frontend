import React, { FC, ReactNode } from 'react'
import { cookies } from 'next/headers'

type AuthLayoutType = {
  children: ReactNode
}

const AuthLayout: FC<AuthLayoutType> = async ({ children }) => {
  const cookiesObj = await cookies()

  const jwt = cookiesObj.get('jwt')?.value

  console.log('AuthLayout jwt', jwt)

  return <main>{children}</main>
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
