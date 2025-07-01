import React from 'react'
import { FaXTwitter, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa6'

function Footer() {
  return (
    <footer className="bg-zinc-800 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

        <div className="flex justify-center gap-10 text-5xl mb-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter">
            <FaXTwitter className="text-yellow-400 transition hover:text-purple-500" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-yellow-400 transition hover:text-purple-500" />
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <FaTelegram className="text-yellow-400 transition hover:text-purple-500" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="text-yellow-400 transition hover:text-purple-500" />
          </a>
        </div>

        <p className="text-sm max-w-3xl mx-auto text-gray-300 mb-4">
          Disclaimer: Hey, if you get memed — that's funny. But losing money isn't. Bron (BRN) is a meme token made for fun and fans, not financial gain. This is not investment advice, and Bron makes no promises, warranties, or guarantees. Meme tokens are risky, and you could lose all the money you put in — so invest responsibly and only what you can afford to lose.<br/><br/>Explore, enjoy, but stay smart.<br/><br/>Token Name : Bron (BRN)<br/>Contract Address : <a href="https://sepolia.etherscan.io/address/0xA0278995ab9A917411715cB00dB5c0317f6158ce" target='_blank' rel='noopener noreferrer' className='hover:text-purple-500 text-yellow-400 transition-colors'>0xA0278995ab9A917411715cB00dB5c0317f6158ce</a> 
        </p>

        <p className="text-s text-gray-400">&copy; 2025 Bron Token. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
