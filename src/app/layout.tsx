import type { Metadata } from 'next'

import { cn } from '@utils/cn'
import { Poppins } from 'next/font/google'
import '@styles/global.css'

const poppins = Poppins({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // light, base, medium, semibold, bold
})

export const metadata: Metadata = {
  description: '',
  title: 'iamryansu',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, 'antialiased')}>{children}</body>
    </html>
  )
}
