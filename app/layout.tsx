import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Providers } from 'app/providers'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin', 'cyrillic'],
})

export const metadata: Metadata = {
  title: 'Skriney',
  description: 'App to track expenses',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} min-h-screen p-2.5 antialiased`}>
        <Providers>{children}</Providers>
        <div className={'absolute top-0 left-0 -z-[9999] h-full w-full'}>
          <div className={'relative h-full w-full overflow-hidden'}>
            <div
              className={
                'absolute top-[-20svh] z-[-998] h-[110svh] w-[30vw] rotate-[20deg] rounded-[50%] bg-[#C68A53] opacity-15 blur-[30vw]'
              }
            />
            <div
              className={
                'bg-bg-semantic-success-primary absolute top-[-20svh] left-[30vw] z-[-999] h-[210svh] w-[30vw] rotate-[-33deg] rounded-[50%] opacity-15 blur-[60vw]'
              }
              style={{ animation: 'fly 200s linear infinite' }}
            />
            <div
              className={
                'absolute top-[20svh] left-[20vw] z-[-998] h-[90svh] w-[90vw] rotate-[-33deg] rounded-[50%] bg-[#CC9766] opacity-15 blur-[50vw]'
              }
              style={{ animation: 'fly 200s linear infinite' }}
            />
            <div
              className={
                'absolute right-[-5vw] bottom-[-5svh] z-[-998] h-[50svh] w-[50vw] rotate-[-33deg] rounded-[50%] bg-[#CC9766] opacity-15 blur-[50vw]'
              }
              style={{ animation: 'fly 200s linear infinite' }}
            />
            <div
              className={
                'absolute top-3/4 left-1/2 z-[-998] h-[70svh] w-[70vw] -translate-1/2 rotate-[-33deg] rounded-[50%] bg-[#CC9766] opacity-15 blur-[50vw]'
              }
              style={{ animation: 'fly 200s linear infinite' }}
            />
          </div>
        </div>
      </body>
    </html>
  )
}
