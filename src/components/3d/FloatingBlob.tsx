/**
 * Simple 3D Floating Blob Component
 * Minimal setup to avoid Three.js property errors
 */

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const FloatingBlob = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Simple animation loop
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <>
      {/* Simple lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Simple sphere with basic material */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial 
          color="#D0E46B" 
          transparent 
          opacity={0.8}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </>
  );
};

export default FloatingBlob;