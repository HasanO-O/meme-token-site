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
import { useEffect, useState } from 'react'

// Main Game Canvas
export default function GameCanvas() {
    const [timeLeft, setTimeLeft] = useState(30) // Game duration in seconds
    const [score, setScore] = useState(0)
    const [gameActive, setGameActive] = useState(true)
    const [ballKey, setBallKey] = useState(0) // To force ball reset
    useEffect(() => {
  if (!gameActive) return

  const interval = setInterval(() => {
    setTimeLeft(prev => {
      if (prev <= 1) {
        clearInterval(interval)
        setGameActive(false)

        setBallKey(prev => prev + 1) // Reset ball
        return 30 // Reset timer after ending
      }
      return prev - 1
    })
  }, 1000)

  return () => clearInterval(interval)
}, [gameActive])


    const triggerBallReset = () => {
      // By updating the key, React remounts the Basketball component
      setBallKey(prev => prev + 1)
    }

    const handleScore = () => {
      setScore(score + 1)
      triggerBallReset()
    }

    const handleManualReset = () => {
      triggerBallReset()
    }
  return (
    <div className="w-full h-screen border-5 border-zinc-400 flex flex-col items-center justify-center">
      <div className='bg-zinc-800 p-2 text-xl mt-2'>
        Score : <span className='text-yellow-300 font-semibold'>{score}</span>
      </div>
      {gameActive ? (<><div className='text-white text-2xl p-2'>
      Time Left: <span className='text-red-400'>{timeLeft}s</span>
      </div>
      <button
        onClick={handleManualReset}
        className="dark:bg-white dark:text-black font-semibold bg-black text-white px-4 mb-2 py-2 rounded"
      >
        Reset Ball
      </button></>) : (<>
      <div className='text-2xl mb-1 flex flex-col text-center'><span className='text-red-500 text-4xl font-bold'>Game Over</span>
      <button className='text-purple-400 font-semibold' onClick={() => {
        setGameActive(true)
        setScore(0)
        setTimeLeft(30)
        setBallKey(prev => prev + 1)
        
      }}>Restart Game
      </button>
      </div>
      </>)}
      <Canvas
        shadows
        camera={{ position: [0, 4, 9.5], fov: 100 }}
      >
        <ambientLight intensity={0.3} />
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

        {/* Additional lights for the right stands 
        <pointLight position={[12, 3, -8]} intensity={30} color="white" />
        <pointLight position={[12, 3, -2.5]} intensity={30} color="white" />
        <pointLight position={[12, 3, 3]} intensity={30} color="white" />
        <pointLight position={[12, 3, 8.5]} intensity={30} color="white" />

        <pointLight position={[17, 5, -8]} intensity={30} color="white" />
        <pointLight position={[17, 5, -2.5]} intensity={30} color="white" />
        <pointLight position={[17, 5, 3]} intensity={30} color="white" />
        <pointLight position={[17, 5, 8.5]} intensity={30} color="white" />
        */}
        {/* Additional lights for the left stands 
        <pointLight position={[-12, 3, -8]} intensity={30} color="white" />
        <pointLight position={[-12, 3, -2.5]} intensity={30} color="white" />
        <pointLight position={[-12, 3, 3]} intensity={30} color="white" />
        <pointLight position={[-12, 3, 8.5]} intensity={30} color="white" />

        <pointLight position={[-17, 5, -8]} intensity={30} color="white" />
        <pointLight position={[-17, 5, -2.5]} intensity={30} color="white" />
        <pointLight position={[-17, 5, 3]} intensity={30} color="white" />
        <pointLight position={[-17, 5, 8.5]} intensity={30} color="white" />
        */}
        {/* Light for the main basketball area*/}
        <pointLight position={[0, 2, 6.5]} intensity={20} color="white" />
        
        {/* Light for the hoop*/}
        <pointLight position={[0, 6, -7]} intensity={20} color="white" />

        {/* Light for the poster*/}
        <pointLight position={[0, 10, -8]} rotation={[0,Math.PI,0]} intensity={10} color="white" />

        {/* Background Environment */}
        <Environment preset="night" />

        {/* Game Objects */}
        <Physics gravity={[0, -9.81, 0]} timeStep="vary">
          <Basketball key={ballKey} gameActive={gameActive} />
          <Hoop onScore={handleScore} gameActive={gameActive} />
          <Chairs/>
          <Court />
          <Stands/>
          <CoinPoster />
        </Physics>

        {/*<OrbitControls/>*/}
      </Canvas>
    </div>
  )
}