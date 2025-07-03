// Basketball Court
export default function Court() {
  return (
    <>
      <group position={[0, 0, 0]}>
        {/* Wood-like ground */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial color="#f4a460" />
            </mesh>
        {/* Half court line */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 3]}>
                <planeGeometry args={[20, 0.1]} />
                <meshBasicMaterial color="black" />
            </mesh>
        {/* Circle */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 3]}>
                <ringGeometry args={[3, 3.05, 64]} />
                <meshBasicMaterial color="black"/>
            </mesh>
        {/* 3pt arc */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, -12]}>
                <ringGeometry args={[8.5, 8.6, 64, 1, Math.PI, Math.PI]} />
                <meshBasicMaterial color="black" />
            </mesh>
        {/* paint area */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, -5.7]}>
                <planeGeometry args={[4.4, 0.1]} /> {/* line in between the semicircle */}
                <meshBasicMaterial color="black" />
            </mesh>
            
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[2.15, 0.01, -7.7]}>
                <planeGeometry args={[0.1, 4.6]} /> {/* right line */}
                <meshBasicMaterial color="black" />
            </mesh>

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-2.15, 0.01, -7.7]}>
                <planeGeometry args={[0.1, 4.6]} /> {/* left line */}
                <meshBasicMaterial color="black" />
            </mesh>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, -5.7]}>
                <ringGeometry args={[2.1, 2.2, 64, 1, Math.PI, Math.PI]} /> {/*inner something circle */}
                <meshBasicMaterial color="black" />
            </mesh>
    </group>
    </>
  )
}