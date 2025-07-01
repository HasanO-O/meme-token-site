import React from "react";
import FAQItem from "@/components/FAQItem";

const faqData = [
  {
    question: "What is BRON Token ?",
    answer:
      "BRON (BRN) is a meme-based token created for fun and community engagement. It's inspired by cultural icons and is not intended as financial advice.",
  },
  {
    question: "Is BRON Token safe to invest in ?",
    answer:
      "Like all meme coins, investing in BRON carries risk. Please invest responsibly and only what you can afford to lose.",
  },
  {
    question: "How can I buy BRON ?",
    answer:
      "You can purchase BRON from decentralized exchanges like Uniswap. Make sure to double-check the contract address.",
  },
  {
    question: "Is BRON available on centralized exchanges ?",
    answer:
      "Not yet. We're starting with DEXs and will explore CEX listings based on community demand and project growth.",
  },
  {
    question: "Who created BRON ?",
    answer: "BRON is created by a group of devs who are just fans of LeBron James and memes in general. Combine that with a passion for technology and voila! The BRON meme token came into existence",
  },
  {
    question: "Is BRON a coin or token ?",
    answer: "The two basic types of cryptocurrencies are : Coins and Tokens. Coins have their own blockchain like Bitcoin or Ether(based on the Ethereum Blockchain). Tokens exist as smart contracts on a parent network like Ethereum or Solana. BRON is a token created using the ERC20 smart contract standard.",
  },
  {
    question: "Why was BRON created ?",
    answer: "It was created for fun and memes! We may build a blockchain of our own in the future, but before that we wanted to launch a token and explore this space of technology and interact with some potential LeBron fans",
  },
  {
    question: "Should i trust the devs ?",
    answer: "NO, as this is a decentralized token",
  },
  {
    question: "Are there any other LeBron based tokens/coins out there ?",
    answer: "Most probably, as anyone (even YOU) can simply launch a token with a name and a symbol, even without coding (using certain tools). But writing smart contracts is better ;)",
  },
  {
    question: "What is the contract address of BRON ?",
    answer: "0xA0278995ab9A917411715cB00dB5c0317f6158ce - you can search on Etherscan to verify it",
  },
  {
    question: "Are all LeBron - related cryptocurrencies related ?",
    answer: "NO, they are not related, especially not this one. BRON is an individual token deployed on the Polygon Mainnet using ERC20 standard for smart contracts",
  },
];

export default function FaqPage() {
  return (
    <div className="bg-black pt-10 pb-10">
      <h1 className="text-6xl text-shadow-purple-500 text-shadow-lg font-extrabold rounded-2xl shadow-black shadow-2xl m-auto ml-10 mr-10 text-white p-5 text-center mb-10">Frequently Asked Questions</h1>
      <div className="max-w-3xl mx-auto">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}
