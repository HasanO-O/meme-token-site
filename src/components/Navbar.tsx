import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Permanent_Marker } from 'next/font/google'

export const permanent_marker = Permanent_Marker({
  subsets: ['latin'],
  weight: ['400'],
})

function Navbar() {
  return (
      <nav className=" w-full bg-zinc-800 text-white py-4 px-8 flex justify-between items-center sticky z-50 top-0">
      <div className="flex items-center gap-2 text-4xl font-bold ">
        <Link href='/'>
        <Image
                  src="/images/BronTokenLogo.png"
                  alt="BRON Token"
                  width={80}
                  height={80}
                  className="mx-auto shadow-2xl rounded-full"
                />
        </Link>
        <Link href="/" className={`${permanent_marker.className} text-yellow-400 text-shadow-amber-900 text-shadow-lg`} >Bron</Link>
      </div>

      <div className=" flex gap-5 text-xl items-center font-semibold">
        <Link href="/" className='hover:bg-gray-600 px-5 py-2.5 rounded-xl transition-colors'>Home</Link>
        <Link href="/about" className='hover:bg-gray-600 px-5 py-2.5 rounded-xl transition-colors'>About</Link>
        <Link href="/faq" className='hover:bg-gray-600 px-5 py-2.5 rounded-xl transition-colors'>FAQ</Link>
        <div>
            <a href="https://app.uniswap.org/#/swap?outputCurrency=0xYourTokenAddress"
 target='_blank' rel="noopener noreferrer" className= "bg-yellow-500 border-black text-white font-semibold flex gap-10 hover:text-white items-center hover:bg-purple-600 rounded-sm py-2 px-2 transition-colors text-shadow-black text-shadow-xs">Buy Now</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar