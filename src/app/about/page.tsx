import DevCard from '@/components/DevCard';
import { Permanent_Marker } from 'next/font/google';
import Image from 'next/image';
import Token3D from '@/components/Token3D';

const permanent_marker = Permanent_Marker({
  subsets: ['latin'],
  weight: ['400'],
});

export default function AboutPage() {

const developers = [
    {
      name: 'Hasan Kazi',
      img: '/images/devImage11.png',
      desc: `Likes to think that he's decent at coding. Maybe he has worked on both, the token and the website.`,
    },
    {
      name: 'Ibrahim Kazi',
      img: '/images/devImage2.png',
      desc: 'Loves to code anything he wishes, all by himself. Websites are his playground.',
    },
    {
      name: 'Tanmay Naik',
      img: '/images/devImage33.png',
      desc: `Passionate about blockchain and the crypto space. He is also a huge LeBron fan. He gets bored easily`,
    },
    {
      name: 'Rushil Ekhande',
      img: '/images/devImage44.png',
      desc: 'Designing good-looking websites flawlessly is his niche. And he does not like ads, nor paying for them. He likes Freedom',
    },
    {
      name: 'Kavish Sheth',
      img: '/images/devImage55.png',
      desc: 'Knows his stuff on how to sell things on the market, maybe because he also sells his own coffee.',
    },
  ];

  return (
    <div className="mx-auto text-center">
      {/* Intro Section */}
      <section className="bg-zinc-950">
      <h1 className="bg-black text-6xl font-bold text-shadow-purple-700 text-shadow-lg text-white p-10">
          "You thought <span className={`${permanent_marker.className} text-yellow-500 text-shadow-amber-900 text-shadow-lg`} >BRON</span> was about us?<br/>It was always about <span className={`text-yellow-500 text-shadow-amber-900 text-shadow-lg`} >LeBron</span>!"
        </h1>
      </section>
  <div className="justify-center w-full bg-black items-center pb-20 ">
      <Token3D className='h-[500px] bg-black items-center m-auto py-10 w-7xl'/>
    </div>
  <section>
  <div className="p-20 pt-15 bg-zinc-900 justify-center items-center md:items-start gap-10 max-w-full mx-auto">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-yellow-400 mb-4 pb-10">
        The <span className={`${permanent_marker.className}`}>BRON</span> Meme Token
      </h1>

      <p className="text-white text-xl mb-4 font-semibold">
        <span className={`${permanent_marker.className}`}>BRON</span> is a tribute to the GOAT — LeBron James. Just like he changed the game of basketball,
        we want to spark a new energy in meme culture and the blockchain space...
      </p>

      <p className="text-white mb-4 text-xl">
        We are a small team of developers exploring the world of decentralization and smart contracts.
      </p>

      <p className="text-white mb-4 text-lg">
        There’s no rug pull here. No unrealistic promises. All revenue generated will go to our organization.
      </p>

      <p className="text-white italic text-xl font-semibold">
        If you love basketball, memes, or blockchain culture — you’re already one of us.
      </p>
    </div>    
  </div>
</section>


      {/* Dev Section */}
      <section className="bg-black rounded-xl text-black py-16 px-6 justify-center">
  <h1 className="text-5xl font-bold text-white text-shadow-lg text-shadow-purple-500 mb-16 text-center">
    Meet the Devs
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {developers.slice(0,3).map((dev, idx) => (
      <DevCard
        key={idx}
        name={dev.name}
        img={dev.img}
        desc={dev.desc}
      />
    ))}
    </div>
    <div className='mt-10 flex grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-10 max-w-3xl mx-auto'>
    {developers.slice(3).map((dev, idx) => (
      <DevCard
        key={idx}
        name={dev.name}
        img={dev.img}
        desc={dev.desc}
      />
    ))}
  </div>
</section>
    </div>
  );
}
