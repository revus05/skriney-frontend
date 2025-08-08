'use client'

import { Header } from 'widgets/nav/header'
import { Aside } from 'widgets/nav/aside'
import React, { FC, ReactNode, useEffect, useState } from 'react'
import { useGate, useUnit } from 'effector-react'
import { sessionModel } from 'entities/session'
import { useRouter } from 'next/navigation'
import { navigationModel } from 'shared/navigation'

type HomeLayoutType = {
  children: ReactNode
}

const HomeLayout: FC<HomeLayoutType> = ({ children }) => {
  const router = useRouter()
  useGate(navigationModel.RouterGate, { router })
  useGate(sessionModel.SessionGate)

  const jwtCookie = useUnit(sessionModel.$jwtCookie)

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient || !jwtCookie) {
    return null
  }

  return (
    <main>
      <Header />
      <div className="mt-8 flex gap-8">
        <Aside />
        {children}
      </div>
    </main>
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
