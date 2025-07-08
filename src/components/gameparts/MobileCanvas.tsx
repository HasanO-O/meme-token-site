// components/game/MobileCanvas.tsx
'use client'

import { Canvas } from '@react-three/fiber'
import { Environment} from '@react-three/drei'
import Basketball from './Basketball'
import Chairs from './Chairs'
import Stands from './Stands'
import Hoop from './Hoop'
import Court from './Court'
import { Physics} from '@react-three/rapier'
import { useEffect, useState } from 'react'

export default function MobileCanvas() {
  const bronScore = 30
  const [timeLeft, setTimeLeft] = useState(30)
  const [score, setScore] = useState(0)
  const [gameActive, setGameActive] = useState(true)
  const [ballKey, setBallKey] = useState(0)

  useEffect(() => {
    if (!gameActive) return

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          setGameActive(false)
          setBallKey(prev => prev + 1)
          return 30
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [gameActive])

  const triggerBallReset = () => setBallKey(prev => prev + 1)

  const handleScore = () => {
    setScore(prev => prev + 3)
    triggerBallReset()
  }

  const handleRestart = () => {
    setScore(0)
    setTimeLeft(30)
    setGameActive(true)
    triggerBallReset()
  }

  // Disable scroll during gameplay (especially for touch events)
  useEffect(() => {
    const preventScroll = (e: TouchEvent) => e.preventDefault()
    if (gameActive) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('touchmove', preventScroll, { passive: false })
    } else {
      document.body.style.overflow = 'auto'
      document.removeEventListener('touchmove', preventScroll)
    }
    return () => {
      document.body.style.overflow = 'auto'
      document.removeEventListener('touchmove', preventScroll)
    }
  }, [gameActive])

  return (
    <div className="w-screen h-screen bg-black text-white flex flex-col">
      {/* Score and Controls */}
      <div className="p-4 bg-zinc-900 text-center text-sm space-y-2">
        <h1 className="text-2xl font-bold text-purple-400">Basketball Challenge</h1>
        <p><span className="text-yellow-300 font-semibold">Score:</span> {score} | <span className="text-purple-400">LeBron:</span> {bronScore}</p>
        <p><span className="text-red-500 font-bold">Time:</span> {timeLeft}s</p>

        {gameActive ? (
          <button
            onClick={triggerBallReset}
            className="w-full mt-2 bg-purple-600 hover:bg-purple-500 text-white py-1 rounded text-sm"
          >
            Reset Ball
          </button>
        ) : (
          <div className="text-center space-y-1">
            <p className="text-xl font-bold text-red-500">Game Over</p>
            <button
              onClick={handleRestart}
              className="w-full bg-yellow-400 hover:bg-yellow-300 text-black py-1 rounded font-semibold text-sm"
            >
              Restart Game
            </button>
          </div>
        )}

        <div className="pt-2 text-gray-300 text-xs">
          <p>Instructions:</p>
          <ul className="list-disc ml-4">
            <li>Drag and release to shoot</li>
            <li>3 points per shot</li>
            <li>Beat LeBron before time runs out!</li>
          </ul>
        </div>
      </div>

      {/* Game Canvas */}
      <div className="flex-1">
        <Canvas
          shadows
          camera={{ position: [0, 3.5, 8], fov: 100 }}
        >
          <ambientLight intensity={0.5} />
          <spotLight
            position={[0, 1, 4]}
            angle={Math.PI}
            penumbra={1}
            intensity={100}
            castShadow
          />
          <spotLight
            position={[0, 2, -7]}
            angle={Math.PI / 1}
            penumbra={0.5}
            intensity={50}
            castShadow
          />
          <pointLight position={[0, 2, 6.5]} intensity={20} color="white" />
          <pointLight position={[0, 6, -7]} intensity={20} color="white" />
          <pointLight position={[0, 13, -8]} intensity={10} color="white" />

          <Environment preset="night" />

          <Physics gravity={[0, -9.81, 0]} timeStep="vary">
            <Basketball key={ballKey} gameActive={gameActive} />
            <Hoop onScore={handleScore} gameActive={gameActive} />
            <Chairs />
            <Court />
            <Stands />
          </Physics>
        </Canvas>
      </div>
    </div>
  )
}
