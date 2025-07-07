// app/game/page.tsx or wherever your GamePage is
import { Suspense } from 'react'
import GameCanvas from '@/components/GameCanvas'
import LoadingScreen from './loading'

export default function GamePage() {
  return (
    <main className="w-full h-svh">
      <Suspense fallback={<LoadingScreen />}>
        <GameCanvas />
      </Suspense>
    </main>
  )
}
