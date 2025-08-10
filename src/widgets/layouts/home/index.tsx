import { Header } from 'widgets/nav/header'
import { Aside } from 'widgets/nav/aside'
import React, { FC, ReactNode } from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { paths } from 'shared/navigation'

type HomeLayoutType = {
  children: ReactNode
}

const HomeLayout: FC<HomeLayoutType> = async ({ children }) => {
  const cookiesObj = await cookies()

  const jwt = cookiesObj.get('jwt')?.value

  if (!jwt) {
    redirect(paths.signIn)
  }

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
