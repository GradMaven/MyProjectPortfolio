import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Scene() {
  return (
    <Float speed={2}>
      <group>
        <mesh>
        <icosahedronGeometry args={[5, 2]} />
        <meshStandardMaterial color="#BF8C73" wireframe />
      </mesh>
      <mesh position={[6, 2, -3]}>
          <icosahedronGeometry args={[3, 2]} />
          <meshStandardMaterial color="#BF8C73" wireframe transparent opacity={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

export default function AnimatedBackground() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setEnabled(!prefersReducedMotion);
  }, []);

  if (!enabled) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -100,
          background: "#041915",
        }}
      />
    );
  }

  return (
    <Canvas camera={{ position: [2, 4, 8], fov: 70 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -100,
        pointerEvents: "none",
        background: "#041915"
      }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 10]} />
      <Scene />
    </Canvas>
  );
}
