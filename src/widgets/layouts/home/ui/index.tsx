import React, { FC, ReactNode } from 'react'
import { cookies } from 'next/headers'
import { Header } from './header'
import { Aside } from './aside'

type HomeLayoutType = {
  children: ReactNode
}

const HomeLayout: FC<HomeLayoutType> = async ({ children }) => {
  const cookiesObj = await cookies()

  const jwt = cookiesObj.get('jwt')?.value

  console.log('HomeLayout jwt', jwt)

  return (
    <main className={'p-2.5'}>
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
