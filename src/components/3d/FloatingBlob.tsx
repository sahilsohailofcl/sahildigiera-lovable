/**
 * 3D Floating Blob Component
 * Features: Metallic material, smooth animation, particle effects
 */

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

const FloatingBlob = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const mesh2Ref = useRef<THREE.Mesh>(null);
  const mesh3Ref = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Create particle geometry with useMemo for better performance
  const particleGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;     // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  // Create particle material
  const particleMaterial = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 0.02,
      color: "#71A573",
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true
    });
  }, []);

  // Animation loop
  useFrame((state) => {
    if (meshRef.current) {
      // Slow Y-axis rotation
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
      
      // Floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }

    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.y -= 0.008;
      mesh2Ref.current.rotation.x += 0.003;
    }

    if (mesh3Ref.current) {
      mesh3Ref.current.rotation.y += 0.012;
      mesh3Ref.current.rotation.z += 0.004;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y -= 0.002;
    }
  });

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
        <meshPhysicalMaterial
          color="#D0E46B"
          metalness={0.6}
          roughness={0.25}
          envMapIntensity={1.2}
          transparent
          opacity={0.8}
        />
      </Sphere>

      {/* Particle system */}
      <points ref={particlesRef} geometry={particleGeometry} material={particleMaterial} />

      {/* Additional smaller blobs */}
      <Sphere ref={mesh2Ref} args={[0.3, 32, 32]} position={[3, 1, -2]}>
        <meshPhysicalMaterial
          color="#71A573"
          metalness={0.8}
          roughness={0.1}
          transparent
          opacity={0.6}
        />
      </Sphere>

      <Sphere ref={mesh3Ref} args={[0.2, 32, 32]} position={[-2.5, -1.5, -1]}>
        <meshPhysicalMaterial
          color="#D0E46B"
          metalness={0.7}
          roughness={0.2}
          transparent
          opacity={0.5}
        />
      </Sphere>
    </>
  );
};

export default FloatingBlob;