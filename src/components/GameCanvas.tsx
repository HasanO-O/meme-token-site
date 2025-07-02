'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, useGLTF } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'

// Basketball model
export function Basketball() {
  const { scene } = useGLTF('/basketball.glb')
  return <primitive object={scene} scale={0.75} position={[0, 2.5, 4.5]} />
}

// CHAIRS
export function Chairs() {
  const { scene } = useGLTF('/chair.glb')

  return (
    <>
    {/* Bottom left row*/}
    <primitive object={scene.clone()} position={[-9,1,8.5]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[-9,1,6]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />

    <primitive object={scene.clone()} position={[-9,1,0]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[-9,1,-2.5]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[-9,1,-5]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />

    {/* Middle left row*/}
    <primitive object={scene.clone()} position={[-14,3,8.5]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[-14,3,6]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />

    <primitive object={scene.clone()} position={[-14,3,0]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[-14,3,-2.5]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[-14,3,-5]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />

    {/* Top left row*/}
    <primitive object={scene.clone()} position={[-19,5,8.5]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[-19,5,6]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[-19,5,3]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />

    <primitive object={scene.clone()} position={[-19,5,0]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[-19,5,-2.5]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[-19,5,-5]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[-19,5,-8]} rotation={[0,Math.PI/1.6,0]} scale={0.0025} />
    
    {/* Bottom right row*/}
    <primitive object={scene.clone()} position={[9,1,8.5]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[9,1,6]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />

    <primitive object={scene.clone()} position={[9,1,0]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[9,1,-2.5]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[9,1,-5]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    
    {/* Middle right row*/}
    <primitive object={scene.clone()} position={[14,3,8.5]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[14,3,6]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />

    <primitive object={scene.clone()} position={[14,3,0]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[14,3,-2.5]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[14,3,-5]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />

    {/* Top right row*/}
    <primitive object={scene.clone()} position={[19,5,8.5]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[19,5,6]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[19,5,3]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />

    <primitive object={scene.clone()} position={[19,5,0]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[19,5,-2.5]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[19,5,-5]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    <primitive object={scene.clone()} position={[19,5,-8]} rotation={[0,Math.PI/0.62,0]} scale={0.0025} />
    </>
  )
}

// Stands for simulating a basketball court, and the backwalls
function Stands() {
  return (
    <>
      {/* Left stand 1 */}
      <mesh position={[-12.5, 1, 0]}>
        <boxGeometry args={[5, 2, 20]} />
        <meshStandardMaterial color="#1e1e2f" />
      </mesh>

      {/* Left stand 2 */}
      <mesh position={[-17.5, 3, 0]}>
        <boxGeometry args={[5, 2, 20]} />
        <meshStandardMaterial color="#1e1e2f" />
      </mesh>

      {/*Bottom Left stairs 1*/}
      <mesh position={[-8.75,0,3]}>
        <boxGeometry args={[0.5, 1, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[-9.25,0,3]}>
        <boxGeometry args={[0.5, 2, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[-9.75,0,3]}>
        <boxGeometry args={[0.5, 3, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/*Bottom  Left stairs 2*/}
      <mesh position={[-8.75,0,-8]}>
        <boxGeometry args={[0.5, 1, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[-9.25,0,-8]}>
        <boxGeometry args={[0.5, 2, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[-9.75,0,-8]}>
        <boxGeometry args={[0.5, 3, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/*Upper Left stairs 1*/}
      <mesh position={[-13.75,2,3]}>
        <boxGeometry args={[0.5, 1, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[-14.25,2,3]}>
        <boxGeometry args={[0.5, 2, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[-14.75,2,3]}>
        <boxGeometry args={[0.5, 3, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/*Upper  Left stairs 2*/}
      <mesh position={[-13.75,2,-8]}>
        <boxGeometry args={[0.5, 1, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[-14.25,2,-8]}>
        <boxGeometry args={[0.5, 2, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[-14.75,2,-8]}>
        <boxGeometry args={[0.5, 3, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/*Bottom Right stairs 1*/}
      <mesh position={[8.75,0,3]}>
        <boxGeometry args={[0.5, 1, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[9.25,0,3]}>
        <boxGeometry args={[0.5, 2, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[9.75,0,3]}>
        <boxGeometry args={[0.5, 3, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/*Bottom  Right stairs 2*/}
      <mesh position={[8.75,0,-8]}>
        <boxGeometry args={[0.5, 1, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[9.25,0,-8]}>
        <boxGeometry args={[0.5, 2, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[9.75,0,-8]}>
        <boxGeometry args={[0.5, 3, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/*Upper Right stairs 1*/}
      <mesh position={[13.75,2,3]}>
        <boxGeometry args={[0.5, 1, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[14.25,2,3]}>
        <boxGeometry args={[0.5, 2, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[14.75,2,3]}>
        <boxGeometry args={[0.5, 3, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/*Upper Right stairs 2*/}
      <mesh position={[13.75,2,-8]}>
        <boxGeometry args={[0.5, 1, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[14.25,2,-8]}>
        <boxGeometry args={[0.5, 2, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[14.75,2,-8]}>
        <boxGeometry args={[0.5, 3, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Upper Left wall */}
      <mesh position={[-21, 3 , 0]}>
        <boxGeometry args={[2, 16, 100]} />
        <meshStandardMaterial color="#fffdd0" />
      </mesh>

      {/* Right stand 1 */}
      <mesh position={[12.5, 1, 0]}>
        <boxGeometry args={[5, 2, 20]} />
        <meshStandardMaterial color="#1e1e2f" />
      </mesh>

      {/* Right stand 2 */}
      <mesh position={[17.5, 3, 0]}>
        <boxGeometry args={[5, 2, 20]} />
        <meshStandardMaterial color="#1e1e2f" />
      </mesh>

      {/* Right Upper wall*/}
      <mesh position={[21, 3 , 0]}>
        <boxGeometry args={[2, 16, 100]} />
        <meshStandardMaterial color="#fffdd0" />
      </mesh>

      {/* Upper wall behind the hoop */}
      <mesh position={[0, 6.5, -11]}>
        <boxGeometry args={[110, 9, 2]} />
        <meshStandardMaterial color="#fffdd0" />
      </mesh>

      {/* Lower wall behind the hoop */}
      <mesh position={[0, 1, -11]}>
        <boxGeometry args={[100, 2, 2]} />
        <meshStandardMaterial color="#da9100" />
      </mesh>
    </>
  )
}

// Hoop with stand and backboard
export function Hoop() {
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

// Basketball Court
export function Court() {
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

// Main Game Canvas
export default function GameCanvas() {
  return (
    <div className="w-full h-full border-5 border-zinc-400">
      <Canvas
        shadows
        camera={{ position: [0, 6, 7.5], fov: 105 }}
      >
        <ambientLight intensity={-0.7} />
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

        {/* Additional lights for the right stands */}
        <pointLight position={[12, 3, -8]} intensity={30} color="white" />
        <pointLight position={[12, 3, -2.5]} intensity={30} color="white" />
        <pointLight position={[12, 3, 3]} intensity={30} color="white" />
        <pointLight position={[12, 3, 8.5]} intensity={30} color="white" />

        <pointLight position={[17, 5, -8]} intensity={30} color="white" />
        <pointLight position={[17, 5, -2.5]} intensity={30} color="white" />
        <pointLight position={[17, 5, 3]} intensity={30} color="white" />
        <pointLight position={[17, 5, 8.5]} intensity={30} color="white" />
        
        {/* Additional lights for the left stands */}
        <pointLight position={[-12, 3, -8]} intensity={30} color="white" />
        <pointLight position={[-12, 3, -2.5]} intensity={30} color="white" />
        <pointLight position={[-12, 3, 3]} intensity={30} color="white" />
        <pointLight position={[-12, 3, 8.5]} intensity={30} color="white" />

        <pointLight position={[-17, 5, -8]} intensity={30} color="white" />
        <pointLight position={[-17, 5, -2.5]} intensity={30} color="white" />
        <pointLight position={[-17, 5, 3]} intensity={30} color="white" />
        <pointLight position={[-17, 5, 8.5]} intensity={30} color="white" />

        {/* Light for the main basketball area*/}
        <pointLight position={[0, 4, 4.5]} intensity={20} color="white" />
        
        {/* Light for the hoop*/}
        <pointLight position={[0, 6, -7]} intensity={20} color="white" />

        {/* Background Environment */}
        <Environment preset="night" />

        {/* Game Objects */}
        <Basketball />
        <Chairs/>
        <Hoop />
        <Court />
        <Stands/>
        <OrbitControls/>
      </Canvas>
    </div>
  )
}