import { Header } from 'widgets/nav/header'
import { Aside } from 'widgets/nav/aside'
import React, { FC, ReactNode } from 'react'

type HomeLayoutType = {
  children: ReactNode
}

const HomeLayout: FC<HomeLayoutType> = ({ children }) => {
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
