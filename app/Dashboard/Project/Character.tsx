"use client";

import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

export default function PokemonModel({ mouse }: any) {
  const { scene } = useGLTF("/charizard.glb");
  const ref = useRef<any>();

  useFrame(() => {
    if (!ref.current) return;

    // Target rotation based on mouse
    const targetY = mouse.x * Math.PI * 0.4; // left-right
    const targetX = mouse.y * Math.PI * 0.2; // up-down (smaller = more natural)

    // Smooth interpolation (lerp)
    ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.08;
    ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.08;

    // Optional: subtle floating effect
    ref.current.position.y = Math.sin(Date.now() * 0.002) * 0.15;
  });

  return <primitive ref={ref} object={scene} scale={0.2} />;
}
