import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Hoop({ onScore, gameActive = true }: { onScore?: () => void, gameActive?: boolean }) {
  const hoopRef = useRef<any>(null);
  const sensorRef = useRef<any>(null);

  const initialHoopPos = new THREE.Vector3(0, 0, 0);         // Standard position
  const initialSensorPos = new THREE.Vector3(0, 4.5, -8);    // Sensor position

  // Reset to original position when game stops
  useEffect(() => {
    if (!gameActive) {
      if (hoopRef.current) {
        hoopRef.current.setNextKinematicTranslation(initialHoopPos);
      }
      if (sensorRef.current) {
        sensorRef.current.setNextKinematicTranslation(initialSensorPos);
      }
    }
  }, [gameActive]);

  useFrame(({ clock }) => {
    if (!gameActive) return;

    const t = clock.getElapsedTime();
    const x = Math.sin(t * 0.4) * 3; // slower pace, wider range

    // Move both hoop and sensor
    hoopRef.current?.setNextKinematicTranslation(new THREE.Vector3(x, 0, 0));
    sensorRef.current?.setNextKinematicTranslation(new THREE.Vector3(x, 4.5, -8));
  });

  return (
    <>
      {/* Moving Hoop Group */}
      <RigidBody ref={hoopRef} type="kinematicPosition" colliders="trimesh">
        <group>
          {/* Stand */}
          <mesh position={[0, 2.5, -8.9]}>
            <boxGeometry args={[0.5, 7, 0.3]} />
            <meshStandardMaterial color="#232b2b" />
          </mesh>

          {/* Backboard */}
          <mesh position={[0, 6, -8.7]}>
            <boxGeometry args={[6.8, 3, 0.1]} />
            <meshStandardMaterial color="white" />
          </mesh>

          {/* Ring */}
          <mesh position={[0, 5.5, -7.68]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1, 0.05, 16, 100]} />
            <meshStandardMaterial color="#8a2be2" />
          </mesh>

          {/* Net */}
          <mesh position={[0, 5.05, -7.68]}>
            <cylinderGeometry args={[1, 0.7, 0.8, 12, 1, true]} />
            <meshStandardMaterial color="white" wireframe transparent />
          </mesh>

          {/* Outline box - hoop */}
          <group>
            <mesh position={[0, 6.5, -8.6]}>
              <planeGeometry args={[2, 0.05]} />
              <meshBasicMaterial color="#8a2be2" />
            </mesh>
            <mesh position={[0, 5.5, -8.6]}>
              <planeGeometry args={[2, 0.05]} />
              <meshBasicMaterial color="#8a2be2" />
            </mesh>
            <mesh position={[1, 6, -8.6]}>
              <planeGeometry args={[0.05, 1]} />
              <meshBasicMaterial color="#8a2be2" />
            </mesh>
            <mesh position={[-1, 6, -8.6]}>
              <planeGeometry args={[0.05, 1]} />
              <meshBasicMaterial color="#8a2be2" />
            </mesh>
          </group>

          {/* Outline box - full backboard */}
          <group>
            <mesh position={[0, 7.5, -8.6]}>
              <planeGeometry args={[6.8, 0.1]} />
              <meshBasicMaterial color="#8a2be2" />
            </mesh>
            <mesh position={[0, 4.5, -8.6]}>
              <planeGeometry args={[6.8, 0.1]} />
              <meshBasicMaterial color="#8a2be2" />
            </mesh>
            <mesh position={[3.4, 6, -8.6]}>
              <planeGeometry args={[0.1, 3]} />
              <meshBasicMaterial color="#8a2be2" />
            </mesh>
            <mesh position={[-3.4, 6, -8.6]}>
              <planeGeometry args={[0.1, 3]} />
              <meshBasicMaterial color="#8a2be2" />
            </mesh>
          </group>
        </group>
      </RigidBody>

      {/* Sensor (attached to moving hoop) */}
      <RigidBody ref={sensorRef} type="kinematicPosition" sensor>
        <CuboidCollider
          args={[0.5, 0.1, 1]}
          position={[0, 0, 0]}
          onIntersectionEnter={({ other }) => {
            const otherRigidBody = other.rigidBodyObject;
            if (otherRigidBody?.name === "basketball") {
              onScore?.();
            }
          }}
        />
        <mesh>
          <boxGeometry args={[0.5, 0.2, 2]} />
          <meshStandardMaterial color="white" opacity={0} transparent />
        </mesh>
      </RigidBody>
    </>
  );
}
