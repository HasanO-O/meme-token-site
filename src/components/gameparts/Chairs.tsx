import { useGLTF } from "@react-three/drei"

// CHAIRS
export default function Chairs() {
  const { scene } = useGLTF('/chair.glb')

  return (
    <>
    {/* Bottom left row*/}
    <primitive object={scene.clone()} position={[-9,1,8.5]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[-9,1,6]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />

    <primitive object={scene.clone()} position={[-9,1,0]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[-9,1,-2.5]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[-9,1,-5]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />

    {/* Middle left row*/}
    <primitive object={scene.clone()} position={[-14,3,8.5]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[-14,3,6]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />

    <primitive object={scene.clone()} position={[-14,3,0]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[-14,3,-2.5]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[-14,3,-5]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />

    {/* Top left row*/}
    <primitive object={scene.clone()} position={[-19,5,8.5]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[-19,5,6]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[-19,5,3]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />

    <primitive object={scene.clone()} position={[-19,5,0]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[-19,5,-2.5]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[-19,5,-5]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[-19,5,-8]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    
    {/* Bottom right row*/}
    <primitive object={scene.clone()} position={[9,1,8.5]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[9,1,6]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />

    <primitive object={scene.clone()} position={[9,1,0]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[9,1,-2.5]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[9,1,-5]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    
    {/* Middle right row*/}
    <primitive object={scene.clone()} position={[14,3,8.5]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[14,3,6]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />

    <primitive object={scene.clone()} position={[14,3,0]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[14,3,-2.5]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[14,3,-5]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />

    {/* Top right row*/}
    <primitive object={scene.clone()} position={[19,5,8.5]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[19,5,6]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[19,5,3]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />

    <primitive object={scene.clone()} position={[19,5,0]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[19,5,-2.5]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[19,5,-5]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[19,5,-8]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    </>
  )
}