import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Scene() {
  return (
    <Float speed={2}>
      <group>
        <mesh>
        <icosahedronGeometry args={[5, 2]} />
        <meshStandardMaterial color="#12E93d" wireframe />
      </mesh>
      <mesh position={[6, 2, -3]}>
          <icosahedronGeometry args={[3, 2]} />
          <meshStandardMaterial color="#BF8C73" wireframe />
        </mesh>
      </group>
    </Float>
  );
}

export default function AnimatedBackground() {
  return (

    
    <Canvas camera={{ position: [0, 0, 12], fov: 60 }} 
            className="fixed top-0 left-0 w-full h-full -z-50 bg-[#041915] pointer-events-none">
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} />
      <Scene />
    </Canvas>
  );
}