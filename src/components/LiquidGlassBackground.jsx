import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function LiquidPlane() {
  const mesh = useRef();

  const uniforms = {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color("#7cf7c9") }
  };

  useFrame((state) => {
    mesh.current.material.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh ref={mesh} scale={[20, 20, 1]}>
      <planeGeometry args={[1, 1, 128, 128]} />

      <shaderMaterial
        transparent
        uniforms={uniforms}
        vertexShader={`
          uniform float uTime;
          varying vec2 vUv;

          void main() {
            vUv = uv;

            vec3 pos = position;

            float wave1 = sin(pos.x * 4.0 + uTime) * 0.15;
            float wave2 = cos(pos.y * 3.0 + uTime * 1.5) * 0.15;

            pos.z += wave1 + wave2;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec3 uColor;
          varying vec2 vUv;

          void main() {

            float glow = sin(vUv.x * 10.0 + uTime) * 0.2 + 0.8;

            vec3 color = uColor * glow;

            float alpha = 0.35;

            gl_FragColor = vec4(color, alpha);
          }
        `}
      />
    </mesh>
  );
}

export default function LiquidGlassBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3] }}
      className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none"
      style={{ background: "#041915" }}
    >
      <LiquidPlane />
    </Canvas>
  );
}