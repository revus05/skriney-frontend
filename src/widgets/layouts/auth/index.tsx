'use client'

import React, { FC, ReactNode } from 'react'
import { useGate } from 'effector-react'
import { sessionModel } from 'entities/session'
import { navigationModel } from 'shared/navigation'
import { useRouter } from 'next/navigation'

type AuthLayoutType = {
  children: ReactNode
}

const AuthLayout: FC<AuthLayoutType> = ({ children }) => {
  const router = useRouter()
  useGate(navigationModel.RouterGate, { router })
  useGate(sessionModel.SessionGate)
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
