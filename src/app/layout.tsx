import NavigationBar from '@/components/navigation/navbar'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/footer/footer'
import { Suspense } from 'react'
import Loading from './loading'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Softdulur',
  description: 'Friendly Software Building',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavigationBar />
        {children}
        <Footer />
      </body>

    </html>
  )
}
