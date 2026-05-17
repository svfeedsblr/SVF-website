"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

/* ===================== 🌿 PLANT ===================== */

function Model() {
  const { scene } = useGLTF("/soya-plant.glb");
  const ref = useRef<THREE.Group>(null);

  const rotation = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });

  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });

  const { gl } = useThree();

  const onPointerDown = (e: any) => {
    dragging.current = true;
    last.current = { x: e.clientX, y: e.clientY };

    // 🔥 stop scroll ONLY when interacting
    e.stopPropagation();
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  const onPointerMove = (e: any) => {
    if (!dragging.current) return;

    const dx = e.clientX - last.current.x;
    const dy = e.clientY - last.current.y;

    velocity.current.y += dx * 0.005;
    velocity.current.x += dy * 0.005;

    last.current = { x: e.clientX, y: e.clientY };

    e.stopPropagation(); // prevent scroll while dragging
  };

  useFrame(() => {
    if (!ref.current) return;

    rotation.current.x += velocity.current.x;
    rotation.current.y += velocity.current.y;

    velocity.current.x *= 0.92;
    velocity.current.y *= 0.92;

    rotation.current.x = THREE.MathUtils.clamp(
      rotation.current.x,
      -0.5,
      0.5
    );

    ref.current.rotation.x = rotation.current.x;
    ref.current.rotation.y = rotation.current.y;

    ref.current.position.y = -1;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1.6}
      position={[0, -1, 0]}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerUp}
    />
  );
}

/* ===================== 🎥 CAMERA ===================== */

function CameraRig() {
  useFrame((state) => {
    const { camera, mouse } = state;

    camera.position.x = 0.8 + mouse.x * 0.15;
    camera.position.y = 1.3 + mouse.y * 0.1;
    camera.position.z = 4;

    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ===================== 🌞 LIGHT ===================== */

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />

      <directionalLight
        position={[3, 5, 4]}
        intensity={1.2}
        color="#fefce8"
      />

      <directionalLight
        position={[-3, 2, 2]}
        intensity={0.5}
        color="#86efac"
      />

      <pointLight
        position={[0, 2, 3]}
        intensity={0.6}
        color="#bbf7d0"
      />
    </>
  );
}

/* ===================== MAIN ===================== */

export default function PlantCanvas() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0.8, 1.3, 4], fov: 42 }}
        gl={{ antialias: true }}
      >
        <fog attach="fog" args={["#020617", 5, 12]} />

        <Suspense fallback={null}>
          <Lights />
          <Model />
        </Suspense>

        <CameraRig />
      </Canvas>
    </div>
  );
}