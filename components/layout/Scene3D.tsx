"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Grid, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function FloatingWireframe({
  geometry,
  position,
  rotationSpeed,
  scale = 1,
  opacity = 0.4,
}: {
  geometry: React.ReactNode;
  position: [number, number, number];
  rotationSpeed: [number, number, number];
  scale?: number;
  opacity?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * rotationSpeed[0];
    ref.current.rotation.y = t * rotationSpeed[1];
    ref.current.rotation.z = t * rotationSpeed[2];
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh ref={ref} position={position} scale={scale}>
        {geometry}
        <meshBasicMaterial
          color="#8B5CF6"
          wireframe
          transparent
          opacity={opacity}
        />
      </mesh>
    </Float>
  );
}

function CoreOrb() {
  const ref = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current) {
      ref.current.rotation.y = t * 0.12;
      ref.current.rotation.x = t * 0.08;
    }
    if (innerRef.current) {
      innerRef.current.rotation.z = -t * 0.15;
    }
  });

  return (
    <group position={[-2.8, 0.5, -3]}>
      <Float speed={1.5} floatIntensity={0.4}>
        <mesh ref={ref}>
          <icosahedronGeometry args={[1.4, 1]} />
          <meshBasicMaterial
            color="#6366F1"
            wireframe
            transparent
            opacity={0.45}
          />
        </mesh>
        <mesh ref={innerRef} scale={0.55}>
          <octahedronGeometry args={[1, 0]} />
          <meshBasicMaterial
            color="#3B82F6"
            wireframe
            transparent
            opacity={0.25}
          />
        </mesh>
      </Float>
    </group>
  );
}

function ParticleField() {
  const count = 120;
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 24;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 4;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#6366F1"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function SceneContent() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const targetY = state.pointer.x * 0.12;
    const targetX = state.pointer.y * 0.06;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetY,
      0.04
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetX,
      0.04
    );
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.25} />
      <pointLight position={[8, 6, 4]} intensity={1.2} color="#6366F1" />
      <pointLight position={[-6, -2, 2]} intensity={0.6} color="#8B5CF6" />

      <Stars
        radius={80}
        depth={40}
        count={800}
        factor={3}
        saturation={0}
        fade
        speed={0.4}
      />

      <Grid
        infiniteGrid
        fadeDistance={28}
        fadeStrength={1.2}
        cellSize={0.55}
        sectionSize={3.3}
        cellColor="#6366F1"
        sectionColor="#3B82F6"
        cellThickness={0.4}
        sectionThickness={0.8}
        position={[0, -2.5, 0]}
        args={[10, 10]}
      />

      <CoreOrb />

      <FloatingWireframe
        geometry={<torusKnotGeometry args={[0.7, 0.22, 64, 12]} />}
        position={[3.2, -0.3, -4]}
        rotationSpeed={[0.1, 0.18, 0.05]}
        scale={0.9}
        opacity={0.35}
      />

      <FloatingWireframe
        geometry={<dodecahedronGeometry args={[0.85, 0]} />}
        position={[0.5, 2.2, -6]}
        rotationSpeed={[0.06, 0.14, 0.08]}
        scale={0.75}
        opacity={0.3}
      />

      <FloatingWireframe
        geometry={<torusGeometry args={[1.1, 0.04, 24, 64]} />}
        position={[-3.5, -1, -5]}
        rotationSpeed={[0.12, 0.05, 0.1]}
        scale={1}
        opacity={0.25}
      />

      <ParticleField />
    </group>
  );
}

export function Scene3DCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 7.5], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <fog attach="fog" args={["#0A0A0F", 6, 22]} />
      <SceneContent />
    </Canvas>
  );
}
