'use client'

import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import Basketball from './gameparts/Basketball'
import CoinPoster from './gameparts/CoinPoster'
import Chairs from "./gameparts/Chairs"
import Stands from "./gameparts/Stands"
import Hoop from "./gameparts/Hoop"
import Court from "./gameparts/Court"
import { Physics} from '@react-three/rapier'

// Main Game Canvas
export default function GameCanvas() {
  return (
    <div className="w-full h-full border-5 border-zinc-400">
      <Canvas
        shadows
        camera={{ position: [0, 2.5, 10], fov: 100 }}
      >
        <ambientLight intensity={-0.6} />
        {/* Spotlight for the main basketball area*/}
        <spotLight
        position={[0, 1, 4]}
        angle={Math.PI}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        />

        {/* Spotlight for the hoop*/}
        <spotLight
        position={[0, 2, -7]}
        angle={Math.PI / 1}
        penumbra={0.5}
        intensity={50}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        />

        {/* Additional lights for the right stands */}
        <pointLight position={[12, 3, -8]} intensity={30} color="white" />
        <pointLight position={[12, 3, -2.5]} intensity={30} color="white" />
        <pointLight position={[12, 3, 3]} intensity={30} color="white" />
        <pointLight position={[12, 3, 8.5]} intensity={30} color="white" />

        <pointLight position={[17, 5, -8]} intensity={30} color="white" />
        <pointLight position={[17, 5, -2.5]} intensity={30} color="white" />
        <pointLight position={[17, 5, 3]} intensity={30} color="white" />
        <pointLight position={[17, 5, 8.5]} intensity={30} color="white" />
        
        {/* Additional lights for the left stands */}
        <pointLight position={[-12, 3, -8]} intensity={30} color="white" />
        <pointLight position={[-12, 3, -2.5]} intensity={30} color="white" />
        <pointLight position={[-12, 3, 3]} intensity={30} color="white" />
        <pointLight position={[-12, 3, 8.5]} intensity={30} color="white" />

        <pointLight position={[-17, 5, -8]} intensity={30} color="white" />
        <pointLight position={[-17, 5, -2.5]} intensity={30} color="white" />
        <pointLight position={[-17, 5, 3]} intensity={30} color="white" />
        <pointLight position={[-17, 5, 8.5]} intensity={30} color="white" />

        {/* Light for the main basketball area*/}
        <pointLight position={[0, 2, 6.5]} intensity={20} color="white" />
        
        {/* Light for the hoop*/}
        <pointLight position={[0, 6, -7]} intensity={20} color="white" />

        {/* Light for the poster*/}
        <pointLight position={[0, 10, -8]} rotation={[0,Math.PI,0]} intensity={20} color="white" />

        {/* Background Environment */}
        <Environment preset="night" />

        {/* Game Objects */}
        <Physics gravity={[0, -9.81, 0]}>
          <Basketball />
        </Physics>
        <Chairs/>
        <Hoop />
        <Court />
        <Stands/>
        <CoinPoster />

        {/*<OrbitControls/>*/}
      </Canvas>
    </div>
  )
}