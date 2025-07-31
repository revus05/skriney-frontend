import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Header } from 'widgets/nav/header'
import { Aside } from 'widgets/nav/aside'

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
      <body className={`${roboto.variable} antialiased`}>
        <Header />
        <div className={'mx-2.5 mt-8 flex gap-8'}>
          <Aside />
          {children}
        </div>
      </body>
    </html>
  )
}
