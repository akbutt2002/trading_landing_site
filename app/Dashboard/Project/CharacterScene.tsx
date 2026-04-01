"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Center } from "@react-three/drei";
import PokemonModel from "./Character";

export default function PokemonScene() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-30 h-30">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        {/* Lights */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />

        {/* Centered Model */}
        <Center>
          <PokemonModel mouse={mouse} />
        </Center>
      </Canvas>
    </div>
  );
}
