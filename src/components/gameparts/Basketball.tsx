'use client'

import { RigidBody } from '@react-three/rapier'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Basketball() {
  const { scene } = useGLTF('/basketball.glb')
  const rigidBodyRef = useRef<any>(null)

  // Throw on spacebar
  useFrame(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && rigidBodyRef.current) {
        rigidBodyRef.current.applyImpulse({ x: 0, y: 5, z: -10 }, true)
      }
    }

    // Only add once
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', handleKeyDown)
      window.addEventListener('keydown', handleKeyDown)
    }
  })

  return (
    <RigidBody
      ref={rigidBodyRef}
      colliders="ball"
      restitution={0.7}
      friction={0.5}
    >
      <primitive object={scene.clone()} scale={0.75} position={[0, 2.5, 4.5]} />
    </RigidBody>
  )
}
