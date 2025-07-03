import { useTexture } from "@react-three/drei"

export default function CoinPoster() {
  const texture = useTexture('/images/BronTokenLogo.png')

  return (
    <mesh position={[0, 11, -9.99]} rotation={[0, 0, 0]}>
      <planeGeometry args={[6, 6]} />
      <meshStandardMaterial map={texture} transparent={true}/>
    </mesh>
  )
}