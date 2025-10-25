import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Perfect Chocolate Chip Cookies Recipe',
  description: 'Learn how to make the perfect chocolate chip cookies with our detailed recipe including ingredients, step-by-step instructions, and helpful tips.',
  keywords: 'chocolate chip cookies, baking recipe, homemade cookies, dessert',
  authors: [{ name: 'Recipe App' }],
  openGraph: {
    title: 'Perfect Chocolate Chip Cookies Recipe',
    description: 'Learn how to make the perfect chocolate chip cookies with our detailed recipe.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perfect Chocolate Chip Cookies Recipe',
    description: 'Learn how to make the perfect chocolate chip cookies with our detailed recipe.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
        {children}
      </body>
    </html>
  )
}