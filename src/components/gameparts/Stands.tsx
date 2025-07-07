import { RigidBody } from "@react-three/rapier";

// Stands for simulating a basketball court, and the backwalls
export default function Stands() {
  return (
    <RigidBody type="fixed" colliders="trimesh">
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
      <mesh position={[-21, 5.5 , 0]}>
        <boxGeometry args={[2, 25, 100]} />
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
      <mesh position={[21, 5.5 , 0]}>
        <boxGeometry args={[2, 25, 100]} />
        <meshStandardMaterial color="#fffdd0" />
      </mesh>

      {/* Upper wall behind the hoop */}
      <mesh position={[0, 5.5, -11]}>
        <boxGeometry args={[110, 25, 2]} />
        <meshStandardMaterial color="#fffdd0" />
      </mesh>

      {/* Lower wall behind the hoop */}
      <mesh position={[0, 1, -10.99]}>
        <boxGeometry args={[100, 2, 2]} />
        <meshStandardMaterial color="#da9100" />
      </mesh>

      {/* Upper wall behind the ball */}
      <mesh position={[0, 5.5, 11]}>
        <boxGeometry args={[110, 25, 2]} />
        <meshStandardMaterial color="#fffdd0" />
      </mesh>

      {/* Lower wall behind the hoop */}
      <mesh position={[0, 1, 10.99]}>
        <boxGeometry args={[100, 2, 2]} />
        <meshStandardMaterial color="#da9100" />
      </mesh>
    </RigidBody>
  )
}