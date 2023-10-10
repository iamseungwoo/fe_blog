import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './component/layout/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Log Memory',
  description: 'iam seungwoo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
        <div className='mx-auto max-w-3xl px-6 lg:max-w-6xl lg:px-8'>
          <Header />
          <div className={`w-full max-w-3xl`}>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
