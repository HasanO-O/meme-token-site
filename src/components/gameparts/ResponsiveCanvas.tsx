'use client'

import dynamic from 'next/dynamic'
import { useMediaQuery } from '@react-hook/media-query'

// Lazy load to avoid bloating bundle size
const DesktopGameCanvas = dynamic(() => import('./GameCanvas'), { ssr: false })
const MobileGameCanvas = dynamic(() => import('./MobileCanvas'), { ssr: false })

export default function ResponsiveCanvas() {
  // You can change this breakpoint based on your needs (e.g., 768px or 1024px)
  const isMobile = useMediaQuery('only screen and (max-width: 768px)')

  return isMobile ? <MobileGameCanvas /> : <DesktopGameCanvas />
}
