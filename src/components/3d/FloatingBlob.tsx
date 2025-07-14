/**
 * 3D Floating Blob Component
 * Features: Metallic material, smooth animation, particle effects
 */

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

const FloatingBlob = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Animation loop
  useFrame((state) => {
    if (meshRef.current) {
      // Slow Y-axis rotation
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
      
      // Floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y -= 0.002;
    }
  });

  // Create particle geometry
  const particleCount = 100;
  const particlePositions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    particlePositions[i * 3] = (Math.random() - 0.5) * 20;     // x
    particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
    particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
  }

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      
      {/* Directional light */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        color="#D0E46B"
      />
      
      {/* Point light for glow effect */}
      <pointLight
        position={[0, 0, 0]}
        intensity={0.8}
        color="#D0E46B"
        distance={10}
      />

      {/* Main blob */}
      <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#D0E46B"
          metalness={0.6}
          roughness={0.25}
          envMapIntensity={1.2}
          distort={0.3}
          speed={2}
          transparent
          opacity={0.8}
        />
      </Sphere>

      {/* Particle system */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#71A573"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      {/* Additional smaller blobs */}
      <Sphere args={[0.3, 32, 32]} position={[3, 1, -2]}>
        <MeshDistortMaterial
          color="#71A573"
          metalness={0.8}
          roughness={0.1}
          transparent
          opacity={0.6}
          distort={0.2}
          speed={1.5}
        />
      </Sphere>

      <Sphere args={[0.2, 32, 32]} position={[-2.5, -1.5, -1]}>
        <MeshDistortMaterial
          color="#D0E46B"
          metalness={0.7}
          roughness={0.2}
          transparent
          opacity={0.5}
          distort={0.4}
          speed={3}
        />
      </Sphere>
    </>
  );
};

export default FloatingBlob;