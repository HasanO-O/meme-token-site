import Image from 'next/image';
import { permanent_marker } from './Navbar';

export default function DevCard({ name, img , desc }: { name: string; img: string; desc:string }) {
  return (
    <div className="bg-white rounded-xl shadow-xl shadow-purple-400 p-10 text-center mb-6">
      <div className="w-[170px] h-[250px] mx-auto mb-10 relative overflow-hidden rounded-xl border-4 border-black shadow-lg bg-white">
      <Image
        src={img}
        alt={name}
        fill
        className="object-cover"
      />
</div>

      <h2 className={ `${permanent_marker.className} text-4xl font-bold text-purple-700 mb-5`}>{name}</h2>
      <p>{desc}</p>
    </div>
  );
}