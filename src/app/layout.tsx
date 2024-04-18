import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Store',
    default: 'Store',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.variable} lang="pt">
      <body className="bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  )
}
