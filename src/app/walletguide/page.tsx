import { permanent_marker } from '@/components/Navbar';
import { Underline } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function walletguide() {
  return (
    <div className="min-h-screen bg-[rgba(0,0,0,0.6)] text-white px-5 py-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-5xl font-bold text-white text-shadow-purple-500 text-shadow-lg text-center">
          How to Create a Crypto Wallet with MetaMask
        </h1>

        <p className="text-gray-300 text-lg text-center">
          To interact with the <span className={`text-yellow-400 text-xl font-bold ${permanent_marker.className}`}>BRON</span> Token ecosystem, you'll need a crypto wallet. We recommend using <span className="text-white font-semibold">MetaMask</span>, a secure and popular browser extension and mobile app.
        </p>

        <div className="space-y-6">
          <div className="bg-zinc-900 rounded-xl p-5 shadow-md">
          <h2 className="text-3xl font-bold text-yellow-300 mt-5 text-center mb-10">Step 1 : Download MetaMask</h2>
          <p className="text-gray-300 text-lg">
            Go to the official <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline">MetaMask website</a> and install the extension for your browser or the mobile app from the App Store / Play Store.</p>
            <Image
            src="/images/wallet-1.png"
        alt="Wallet Installation Image"
        width={400}
        height={400}
        className="m-auto pt-10 pb-10"
            />
          </div>

          <div className="bg-zinc-900 rounded-xl p-5 shadow-md">
          <h2 className="text-3xl font-bold text-yellow-300 mt-5 text-center mb-10">Step 2 : Create a New Wallet</h2>
          <p className="text-gray-300 text-lg">
            Open MetaMask and click <strong>"Create a Wallet"</strong>. Choose a strong password and make sure to store it safely.</p>
            <Image
            src="/images/wallet-2.png"
        alt="Wallet Installation Image"
        width={700}
        height={500}
        className="m-auto pt-10 pb-10"
            />
            <Image
            src="/images/wallet-3.png"
        alt="Wallet Installation Image"
        width={400}
        height={500}
        className="m-auto pt-10 pb-10"
            />
          </div>

          <div className="bg-zinc-900 rounded-xl p-5 shadow-md">
          <h2 className="text-3xl font-bold text-yellow-300 text-center mb-10 mt-5">Step 3 : Secure Your Secret Recovery Phrase</h2>
          <p className="text-gray-300 text-lg">
            You'll be given a 12-word secret phrase. Write it down on paper and store it in a secure place. This is your only way to recover your wallet if you forget your password or lose access.</p>
            <Image
            src="/images/wallet-4.png"
        alt="Wallet Installation Image"
        width={700}
        height={500}
        className="m-auto pt-10 pb-10"
            />
          </div>

          <div className="bg-zinc-900 rounded-xl p-5 shadow-md">
          <h2 className="text-3xl font-bold text-yellow-300 text-center mb-10 mt-5">Step 4 : Complete Setup</h2>
          <p className="text-gray-300 text-lg">
            Confirm your secret recovery phrase to complete wallet creation. You now have a fully functional Ethereum wallet!</p>
          <Image
            src="/images/wallet-5.png"
        alt="Wallet Installation Image"
        width={500}
        height={500}
        className="m-auto pt-10 pb-10"
            />
            <Image
            src="/images/wallet-6.png"
        alt="Wallet Installation Image"
        width={700}
        height={500}
        className="m-auto pt-10 pb-10"
            />
          </div>

          <div className="bg-zinc-900 rounded-xl p-5 shadow-md">
          <h2 className="text-3xl font-bold text-yellow-300 text-center mt-5 mb-10">Step 5 : Add Polygon Network to MetaMask</h2>
          <p className="text-gray-300 text-lg">
            BRON Token runs on the Polygon network. To add it manually:
          </p>
          <ul className="list-disc list-inside text-gray-300 text-lg mt-5 space-y-1">
            <li>Open MetaMask and click on your network dropdown (it usually says "Ethereum Mainnet").</li>
            <li>Under <strong>"Additional Networks"</strong> Select <strong>"Polygon Mainnet"</strong></li>
            <Image
            src="/images/wallet-7.png"
            alt="Add Polygon to MetaMask"
            width={400}
            height={500}
            className="m-auto pt-10 pb-10"
          />
          <Image
            src="/images/wallet-8.png"
            alt="Add Polygon to MetaMask"
            width={400}
            height={500}
            className="m-auto pt-10 pb-10"
          />
            <p className='mt-5 mb-5'>If it does not appear then-</p>
            <li>Select <strong>“ + Add Custom Network”</strong>.</li>
            <li>Fill in the following details:</li>
          </ul>
          <div className="bg-zinc-800 p-4 rounded-md mt-4 text-sm sm:text-base">
            <p><strong>Network Name:</strong> Polygon</p>
            <p><strong>New RPC URL:</strong> https://polygon-rpc.com</p>
            <p><strong>Chain ID:</strong> 137</p>
            <p><strong>Currency Symbol:</strong> MATIC</p>
            <p><strong>Block Explorer URL:</strong> https://polygonscan.com</p>
          </div>
          <Image
          src="/images/wallet-12.png"
          alt="Import Token in MetaMask"
          width={400}
          height={500}
          className="m-auto pt-10 pb-10"
          />
        </div>

          <div className="bg-zinc-900 rounded-xl p-5 shadow-md">
          <h2 className="text-3xl font-bold text-yellow-300 text-center mb-10 mt-5">Step 6 : Add BRON Token</h2>
          <p className="text-gray-300 text-lg">
            After deployment, you can manually add the <span className="text-yellow-400 font-bold">BRON</span> Token using its contract address, symbol, and decimals. <strong className='underline'>The token is not live as of yet.</strong></p>
             <ul className="list-decimal list-inside text-gray-300 text-lg mt-4 space-y-2">
    <li>In MetaMask, make sure you are on the <strong>Polygon</strong> network.</li>
    <li>Scroll to the bottom of your asset list and click <strong>"Import tokens"</strong>.</li>
    <li>Enter the following token details:</li>
  
  <div className="bg-zinc-800 p-4 rounded-md mt-4 text-sm sm:text-base">
              <p><strong>Token Name:</strong> BRON</p>
              <p><strong>Contract Address:</strong> 0xA0278995ab9A917411715cB00dB5c0317f6158ce</p>
              <p><strong>Symbol:</strong> BRN</p>
              <p><strong>Decimals:</strong> 18</p>
            </div>

  
    <li>Click <strong>“Import Tokens”</strong>.</li>
    <li>Now you’ll see <span className="text-yellow-400 font-bold">BRON</span> listed under your Polygon assets in MetaMask!</li>
  </ul>

  <Image
    src="/images/wallet-9.png"
    alt="Import Token in MetaMask"
    width={400}
    height={500}
    className="m-auto pt-10 pb-10"
  />
  <Image
    src="/images/wallet-10.png"
    alt="Import Token in MetaMask"
    width={400}
    height={500}
    className="m-auto pt-10 pb-10"
  />
  <Image
    src="/images/wallet-11.png"
    alt="Import Token in MetaMask"
    width={400}
    height={500}
    className="m-auto pt-10 pb-10"
  />
  <p className="text-gray-400 text-center mt-6">
    *Only use token addresses provided on the official BRON Token site. Never trust random links or DMs.*
  </p>
          </div>

           
        {/* Step 7 */}
        <div className="bg-zinc-900 rounded-xl p-5 shadow-md">
          <h2 className="text-3xl font-bold text-yellow-300 text-center mb-5">Step 7 : Buy or Trade BRON on Uniswap</h2>
          <p className="text-gray-300 text-lg">
            Visit our homepage or ICO page and use the Uniswap widget to purchase <span className="text-yellow-400 font-bold">BRON</span> Tokens. Make sure your MetaMask is connected and the network is set to Polygon.
          </p>
          
        </div>

        {/* Step 8 */}
        <div className="bg-zinc-900 rounded-xl p-5 shadow-md">
          <h2 className="text-3xl font-bold text-yellow-300 text-center mb-5">Step 8 : View BRON in Your Wallet</h2>
          <p className="text-gray-300 text-lg">
    Congratulations! You’ve successfully imported the <span className="font-semibold text-yellow-400">BRON</span> token into your MetaMask wallet.
  </p>

  <ul className="list-disc list-inside text-gray-300 text-lg mt-4 space-y-2">
    <li>Make sure you're on the <strong>Polygon</strong> network in MetaMask.</li>
    <li>Under the “Assets” tab, scroll down — you’ll now see <span className="text-yellow-400 font-bold">BRON</span> listed.</li>
    <li>The token balance will automatically update when BRON tokens are received to your wallet.</li>
  </ul>
        </div>
        </div>

        <p className="text-gray-200 text-center text-xl">
          *Never share your recovery phrase with anyone!!! The BRON team will never ask for it.
        </p>
      </div>
    </div>
  );
}
