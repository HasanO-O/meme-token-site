import './globals.css'
import { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import {Poppins } from 'next/font/google'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const metadata = {
  title: 'Bron Token',
  description: `LeBron James' Token `,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black text-white` }>
        <div className='relative z-10'>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer/>
        </div>
      </body>
    </html>
  )
}
