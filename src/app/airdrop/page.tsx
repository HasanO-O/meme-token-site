// app/game/page.tsx or wherever your GamePage is
import { Suspense } from 'react'
import LoadingScreen from './loading'
import ResponsiveCanvas from '@/components/gameparts/ResponsiveCanvas'

export default function GamePage() {
  return (
    <main className="w-full h-svh">
      <Suspense fallback={<LoadingScreen />}>
        <ResponsiveCanvas />
      </Suspense>
    </main>
  )
}
