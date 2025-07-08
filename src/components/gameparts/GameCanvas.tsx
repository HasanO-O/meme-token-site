'use client'

import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Basketball from './Basketball'
import CoinPoster from './CoinPoster'
import Chairs from "./Chairs"
import Stands from "./Stands"
import Hoop from "./Hoop"
import Court from "./Court"
import { Physics } from '@react-three/rapier'
import { useEffect, useState } from 'react'

export default function GameCanvas() {
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
    setScore(score + 3)
    triggerBallReset()
  }

  const handleRestart = () => {
    setScore(0)
    setTimeLeft(30)
    setGameActive(true)
    triggerBallReset()
  }

  return (
    <div className="w-screen h-screen bg-black text-white grid grid-cols-1 md:grid-cols-4">
      <div className="col-span-1 p-6 bg-zinc-900 flex flex-col justify-start">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-purple-400">Basketball Challenge</h1>
          <div className="text-xl">
            <p><span className="font-semibold text-yellow-300">Your Score:</span> {score}</p>
            <p><span className="font-semibold text-purple-500">LeBron's Score:</span> {bronScore}</p>
            <p><span className="font-semibold text-red-600">Time Left:</span> {timeLeft}s</p>
          </div>

          {gameActive ? (
            <button
              onClick={triggerBallReset}
              className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded"
            >
              Reset Ball
            </button>
          ) : (
            <div className="text-center space-y-2">
              <p className="text-3xl p-2 bg-black rounded-lg font-bold text-red-500">Game Over</p>
              <button
                onClick={handleRestart}
                className="w-full bg-yellow-400 cursor-pointer hover:bg-yellow-300 transition-colors duration-200 text-xl text-black font-semibold py-2 rounded"
              >
                Restart Game
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 text-md text-gray-400 border-t border-zinc-600 pt-4">
          <h2 className="font-semibold text-white mb-1">Instructions:</h2>
          <ul className="list-disc ml-4">
            <li>Drag and release the ball to shoot.</li>
            <li>Score 3 points per shot.</li>
            <li>Reset the ball if you miss your shot</li>
            <li>Beat LeBron's score before time runs out!</li>
            <li>Use mouse on desktop or touch on mobile.</li>
          </ul>
        </div>
      </div>

      {/* Game Canvas */}
      <div className="col-span-3 h-full relative">
        <Canvas
          shadows
          camera={{ position: [0.1, 3.5, 11], rotation: [-0.2, 0, 0], fov: 95 }}
        >
          {/* Lights */}
          <ambientLight intensity={0} />
          <spotLight
            position={[0, 1, 4]}
            angle={Math.PI}
            penumbra={1}
            intensity={100}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <spotLight
            position={[0, 2, -7]}
            angle={Math.PI / 1}
            penumbra={0.5}
            intensity={50}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <pointLight position={[0, 2, 6.5]} intensity={20} color="white" />
          <pointLight position={[0, 6, -7]} intensity={20} color="white" />
          <pointLight position={[0, 13, -8]} rotation={[0, Math.PI, 0]} intensity={10} color="white" />

          {/* Background */}
          <Environment preset="night" />

          {/* Main game rendering with Physicswallah */}
          <Physics gravity={[0, -9.81, 0]} timeStep="vary">
            <Basketball key={ballKey} gameActive={gameActive} />
            <Hoop onScore={handleScore} gameActive={gameActive} />
            <Chairs />
            <Court />
            <Stands />
            <CoinPoster />
          </Physics>
        </Canvas>
      </div>
    </div>
  )
}
