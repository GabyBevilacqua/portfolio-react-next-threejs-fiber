"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Box from "./Box"
import PlaneGeometry from "./PlaneGeometry"
// Removed import of DirectionalLight from "three"

export default function Scene() {
    return (
        <Canvas>
            <directionalLight color="white" intensity={2} position={[0, 0, 1]} />
            {/* <ambientLight />
      <pointLight position={[10, 10, 10]} /> */}
            {/* <Box /> */}
            <PlaneGeometry />
            <OrbitControls />
        </Canvas>
    )
}
