import React from 'react';
import Link from 'next/link';
import Token3D from '@/components/Token3D';
import { 
  FaBasketballBall, 
  FaLock, 
  FaGift, 
  FaFire, 
  FaEthereum, 
  FaPaperPlane, 
  FaExchangeAlt, 
  FaCheckCircle 
} from 'react-icons/fa';
import { permanent_marker } from '@/components/Navbar';

export default function HomePage() {
  return (
    <div className="w-full px-0 mx-0 bg-black">

      {/* Hero Section Of BRON*/}
      <section className="text-center w-full">
        <h1 className="text-7xl text-shadow-purple-600 text-shadow-lg font-extrabold rounded-2xl shadow-black shadow-2xl m-auto text-white bg-black p-15 text-center">Welcome to <span className={`${permanent_marker.className} text-yellow-500 text-shadow-amber-900 text-shadow-lg`} >BRON</span> Token (BRN)</h1>
        <div className='flex text-left pl-15 pr-15 pb-30 justify-center'>
          <div className='bg-black'>
        <p className="text-4xl bg-black pt-20 text-shadow-amber-900 text-yellow-400 ml-20 text-shadow-lg font-semibold m-auto p-10">A meme token <span className='font-bold text-5xl text-yellow-300'>of</span> LeBron fans,<br/><span className='font-bold text-5xl text-yellow-300'>by</span> LeBron fans,<br/><span className='text-yellow-300 font-bold text-5xl'>for</span> the LeBron fans</p>
        <div className="flex justify-left pl-30 gap-10 pt-10">
          <a
            href="https://app.uniswap.org/#/swap?outputCurrency=0xYourTokenAddress"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-500 text-white shadow-purple-500 shadow-lg px-6 py-3 rounded-xl font-bold border transition-colors text-2xl hover:bg-purple-400"
          >Buy Now</a>
          <Link href="/whitepaper" className=" text-2xl  shadow-lg shadow-white border px-6 py-3 rounded-xl font-bold bg-gray-100 text-black hover:bg-white transition-colors">Learn More</Link>
        </div>
        </div>
          <Token3D className='h-[450px] bg-black w-xl ml-10 pt-10 pb-10'/></div>
      </section>

      <section className='w-full text-center m-auto'>
        
        <h1 className='text-4xl font-bold text-purple-700 mt-0 bg-gray-100 pt-15'>What is the BRON token ?</h1>
        <p className='bg-gray-100 text-black p-20 text-xl '>Bron Token (BRN) is a meme token inspired by LeBron James — a global icon of excellence, perseverance, and impact. Celebrated for his dominance on the court and leadership off it, LeBron has become a cultural symbol beyond basketball. BRN aims to unite fans and meme enthusiasts in honoring his legacy through a community-driven, decentralized token that reflects his unstoppable spirit.</p>
      </section>
      <section className='w-full text-center m-auto'>
        <h1 className='text-4xl font-bold bg-gray-100 text-purple-700 pt-15'>On-Chain Rewards, Not Traditional Mining</h1>
        <p className='bg-gray-100 text-black p-20 text-xl'>Bron Token isn't mined in the usual sense. Instead, it uses smart contract logic to reward validators whenever BRN tokens are moved.
No mining pools. No hardware. Just on-chain motion.</p>
      </section>

      {/* Features Section Of BRON Token*/}
      <section className="bg-white pb-20 w-full">
        <div className='items-center text-center'>
          <h1 className="text-5xl bg-white text-purple-600  font-extrabold m-auto p-20">Some Fun Facts</h1>
        </div>
  <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 px-20 text-center font-bold text-lg">
    
    <div className="bg-black text-yellow-400 p-4 py-10 rounded-xl text-2xl shadow-xl/50">
      LeBron-Inspired  
      <FaBasketballBall className='m-auto size-20 mt-5 text-yellow-300 shadow-xl p-1 rounded-full shadow-yellow-300'/>
      <p className="text-lg font-normal text-white mt-5">A meme token built to honor the spirit, dominance, and fandom of LeBron James.</p>
    </div>

    <div className="bg-black text-yellow-400 p-4 py-10 rounded-xl text-2xl shadow-xl/50">
      Fixed Supply
      <FaLock className='m-auto size-20 mt-5 text-yellow-300 shadow-xl p-3 rounded-xl shadow-yellow-300'/>
      <p className="text-lg font-normal text-white mt-5">BRN has a hard cap of 100 million tokens. No inflation. Ever.</p>
    </div>

    <div className="bg-black text-yellow-400 p-4 py-10 rounded-xl text-2xl shadow-xl/50">
      Smart Rewards
      <FaGift className='m-auto size-20 mt-5 text-yellow-300 shadow-xl p-3 rounded-2xl shadow-yellow-300'/>  
      <p className="text-lg font-normal text-white mt-5">New tokens are minted as validator rewards during transfers — no mining rigs needed.</p>
    </div>

    <div className="bg-black text-yellow-400 p-4 py-10 rounded-xl text-2xl shadow-xl/50">
      Burnable
      <FaFire className='m-auto size-20 mt-5 text-yellow-300 shadow-xl p-3 rounded-full shadow-yellow-300'/>
      <p className="text-lg font-normal text-white mt-5">Tokens can be permanently destroyed, making BRN increasingly scarce.</p>
    </div>

    <div className="bg-black text-yellow-400 p-4 py-10 rounded-xl text-2xl shadow-xl/50">
      EVM Compatible
      <FaEthereum className='m-auto size-20 mt-5 text-yellow-300 shadow-xl p-3 rounded-full shadow-yellow-300'/>  
      <p className="text-lg font-normal text-white mt-5">Deployable on Ethereum, Polygon, Base, and all major EVM chains.</p>
    </div>

    <div className="bg-black text-yellow-400 p-4 py-10 rounded-xl text-2xl shadow-xl/50">
      Airdrop Distributed
      <FaPaperPlane className='m-auto size-20 mt-5 text-yellow-300 rounded-2xl p-3 shadow-xl shadow-yellow-300'/>  
      <p className="text-lg font-normal text-white mt-5">Early tokens shared via airdrops and memes — not sold.</p>
    </div>

    <div className="bg-black text-yellow-400 p-4 py-10 rounded-xl text-2xl shadow-xl/50">
      Uniswap-Ready 
      <FaExchangeAlt className='m-auto size-20 mt-5 text-yellow-300 shadow-xl p-3 rounded-2xl shadow-yellow-300'/> 
      <p className="text-lg font-normal text-white mt-5">Decentralized trading planned via Uniswap or compatible DEX.</p>
    </div>

    <div className="bg-black text-yellow-400 p-4 py-10 rounded-xl text-2xl shadow-xl/50">
      Simple to Use
      <FaCheckCircle className='m-auto size-20 mt-5 text-yellow-300 shadow-xl p-2 rounded-full shadow-yellow-300'/>
      <p className="text-lg font-normal text-white mt-5">Connect MetaMask, claim your BRN, and start trading. No complex setup.</p>
    </div>

  </div>
</section>

      {/* About LeBron Section */}
      <section className="items-center gap-10 text-center m-auto shadow-xl shadow-black">
        <div className="space-y-4 ">
          <h1 className="text-5xl bg-gray-100 text-purple-700  font-extrabold m-auto p-20">But why LeBron?</h1>
          <p className="text-black pb-15 pl-20 pr-20 bg-gray-100 text-xl font-light">LeBron James is an American professional basketball player widely considered one of the greatest of all time. <br/><br/>He's known for his exceptional all-around skills, leadership, and consistent performance.<br/><br/> James has won multiple NBA championships, MVP awards, and Olympic gold medals. He holds the NBA record for most points scored in league history!<br/><br/>To honour the 'King' we decided to launch a meme token in his honour - <b className={`${permanent_marker.className} font-bold text-2xl`}>BRON</b></p>
        </div>
      </section>

       {/* Whitepaper Section Of BRON Token*/}
      <section className="text-center bg-white pb-10 p-10">
        <h2 className="text-5xl text-purple-700  font-extrabold m-auto pb-20 p-10">Read Our Whitepaper</h2>
        <p className="text-black text-2xl mx-auto pb-10">Dive into the full details of Bron Token and our mission. <Link href="/whitepaper" className="underline text-2xl font-semibold text-yellow-500 hover:text-yellow-300 transition-colors">View Whitepaper</Link></p>
        
      </section>

      {/* Wallet Setup Section */}
      <section className="text-center space-y-6 py-20 bg-[rgba(0,0,0,0.5)]">
        <h2 className="text-5xl shadow-xl text-shadow-purple-700 text-shadow-lg shadow-black font-extrabold rounded-2xl m-auto ml-30 mr-30 bg-black pb-10 p-5">Set Up Your Wallet & Buy BRON</h2>
        <p className="text-white font-semibold text-shadow-black text-shadow-lg text-xl mt-10 mx-auto mb-10">Start trading BRN tokens in minutes by setting up your MetaMask wallet if you don't have one already.</p>
        <Link href="/walletguide" className="bg-purple-700 shadow-lg ring transition-colors shadow-purple-600 px-6 py-3 rounded-xl text-white font-bold hover:bg-purple-600">How to Create a Wallet</Link>
        <h2 className='pt-10'>*NOTE: Select the 'Other wallets' option and choose metamask to connect your wallet to Uniswap</h2>
          {/* Uniswap Widget Section */}
<div className="w-full flex justify-center mt-10">
  <iframe
    src="https://app.uniswap.org/#/buy?outputCurrency=YOUR_TOKEN_ADDRESS&chain=mainnet"
    height="660px"
    width="100%"
    allow='pointer-lock'
    style={{
      maxWidth: '480px',
      border: '0',
      backgroundColor: 'transparent',
      borderRadius: '10px',
      margin: 'auto',
    }}
    loading="lazy"
    title="Uniswap Swap Widget"
  ></iframe>
</div>
</section>

     

    </div>
  );
}
