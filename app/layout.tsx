import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import React from 'react'
import { Providers } from 'app/providers'
import { getPreloadedUser } from 'entities/user'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin', 'cyrillic'],
})

export const metadata: Metadata = {
  title: 'Skriney',
  description: 'App to track expenses',
}

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const preloadedState = await getPreloadedUser()

  const theme =
    preloadedState.userSettingsSlice.userSettings?.userTheme || 'SYSTEM'

  return (
    <html lang="en" className={theme.toLowerCase()}>
      <body
        className={`${roboto.variable} relative z-0 min-h-screen antialiased`}
      >
        <Providers preloadedState={preloadedState}>{children}</Providers>
        <div className={'absolute top-0 left-0 z-[-1] h-full w-full'}>
          <div className={'relative h-full w-full overflow-hidden'}>
            <div
              className={
                'absolute top-1/4 left-[20vw] h-[70svh] w-[70vw] -translate-1/2 rotate-[-33deg] rounded-[50%] bg-[#CC9766] opacity-10 blur-[50vw]'
              }
              style={{ animation: 'fly 200s linear infinite' }}
            />
          </div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
