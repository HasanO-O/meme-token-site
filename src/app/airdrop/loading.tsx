'use client'
import { useProgress } from '@react-three/drei'

function LoadingScreen() {
  const { progress } = useProgress()

  return (
    <div className="text-center justify-center flex flex-col w-full min-h-screen bg-black text-white">
      <p className="text-3xl mb-2">Loading your game...</p>
      <p className="text-3xl font-bold">{progress.toFixed(0)}%</p>
    </div>
  )
}
export default LoadingScreen;