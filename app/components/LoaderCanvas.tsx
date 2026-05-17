"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function RevealShader({
  progress,
  colorTop,
  colorBottom,
}: {
  progress: number;
  colorTop: string;
  colorBottom: string;
}) {
  const material = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (!material.current) return;

    material.current.uniforms.uTime.value = state.clock.elapsedTime;
    material.current.uniforms.uProgress.value = Math.min(progress, 1);
  });

  return (
    <mesh>
      <planeGeometry args={[20, 20]} />
      <shaderMaterial
        ref={material}
        transparent
        depthWrite={false}
        uniforms={{
          uTime: { value: 0 },
          uProgress: { value: 0 },
          uColorTop: { value: new THREE.Color(colorTop) },
          uColorBottom: { value: new THREE.Color(colorBottom) },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform float uProgress;
          uniform vec3 uColorTop;
          uniform vec3 uColorBottom;
          varying vec2 vUv;

          float random(vec2 p){
            return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453);
          }

          float noise(vec2 p){
            vec2 i = floor(p);
            vec2 f = fract(p);

            float a = random(i);
            float b = random(i + vec2(1.0,0.0));
            float c = random(i + vec2(0.0,1.0));
            float d = random(i + vec2(1.0,1.0));

            vec2 u = f*f*(3.0-2.0*f);

            return mix(a,b,u.x) +
                   (c-a)*u.y*(1.0-u.x) +
                   (d-b)*u.x*u.y;
          }

          void main() {
            vec2 uv = vUv;

            // 🎯 distance from center
            float dist = distance(uv, vec2(0.5));

            // 🌊 distortion for organic edges
            float n1 = noise(uv * 5.0 + uTime * 0.6);
            float n2 = noise(uv * 10.0 + uTime * 1.2);

            float distortion = n1 * 0.2 + n2 * 0.1;

            float edge = dist + distortion;

            // 🔥 SHARP EDGE (no smooth blur)
            float visible = step(uProgress, edge);

            // 🎨 gradient
            vec3 color = mix(uColorBottom, uColorTop, uv.y);

            // ✨ subtle edge highlight
            float glow = smoothstep(uProgress - 0.03, uProgress, edge);
            color += glow * 0.12;

            gl_FragColor = vec4(color, visible);
          }
        `}
      />
    </mesh>
  );
}

export default function LoaderCanvas({
  progress,
  colorTop,
  colorBottom,
}: {
  progress: number;
  colorTop: string;
  colorBottom: string;
}) {
  return (
    <Canvas
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
      }}
      camera={{ position: [0, 0, 3] }}
    >
      <Suspense fallback={null}>
        <RevealShader
          progress={progress}
          colorTop={colorTop}
          colorBottom={colorBottom}
        />
      </Suspense>
    </Canvas>
  );
}