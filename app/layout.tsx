import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Loja',
  description: 'Loja',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
