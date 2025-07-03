// Hoop with stand and backboard
export default function Hoop() {
  return (
    <group>
      {/* Vertical Rod */}
      <mesh position={[0, 2.5, -8.9]}>
        <boxGeometry args={[0.5, 7, 0.3]} />
        <meshStandardMaterial color="#232b2b" />
      </mesh>

      {/* Backboard */}
      <mesh position={[0, 5, -8.7]}>
        <boxGeometry args={[6.8, 3, 0.1]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Hoop ring */}
      <mesh position={[0, 4.5, -7.68]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.05, 16, 100]} />
        <meshStandardMaterial color="#8a2be2" />
      </mesh>

      {/* Net below the hoop */}
      <mesh position={[0, 4.1, -7.68]}>
        <cylinderGeometry args={[0.95, 0.7, 0.7, 12, 1, true]} />
        <meshStandardMaterial color="white" wireframe opacity={1} transparent />
      </mesh>

      {/* Backboard hoop outline box */}
      <group>
        {/* Top line */}
        <mesh position={[0, 5.5, -8.6]}>
            <planeGeometry args={[2, 0.05]} />
            <meshBasicMaterial color="#8a2be2" />
        </mesh>

        {/* Bottom line */}
        <mesh position={[0, 4.5, -8.6]}>
            <planeGeometry args={[2, 0.05]} />
            <meshBasicMaterial color="#8a2be2" />
        </mesh>

        {/* Left line */}
        <mesh position={[1, 5, -8.6]}>
            <planeGeometry args={[0.05, 1]} />
            <meshBasicMaterial color="#8a2be2" />
        </mesh>

        {/* Right line */}
        <mesh position={[-1, 5, -8.6]}>
            <planeGeometry args={[0.05, 1]} />
            <meshBasicMaterial color="#8a2be2" />
        </mesh>
      </group>

      {/* Backboard outline box */}
      <group>
        {/* Top line */}
        <mesh position={[0, 6.5, -8.6]}>
            <planeGeometry args={[6.8, 0.1]} />
            <meshBasicMaterial color="#8a2be2" />
        </mesh>

        {/* Bottom line */}
        <mesh position={[0, 3.5, -8.6]}>
            <planeGeometry args={[6.8, 0.1]} />
            <meshBasicMaterial color="#8a2be2" />
        </mesh>

        {/* Left line */}
        <mesh position={[3.4, 5, -8.6]}>
            <planeGeometry args={[0.1, 3]} />
            <meshBasicMaterial color="#8a2be2" />
        </mesh>

        {/* Right line */}
        <mesh position={[-3.4, 5, -8.6]}>
            <planeGeometry args={[0.1, 3]} />
            <meshBasicMaterial color="#8a2be2" />
        </mesh>
      </group>

    </group>
  )
}