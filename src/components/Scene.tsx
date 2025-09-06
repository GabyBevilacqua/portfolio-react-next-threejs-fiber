"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Box from "./Box"
import PlaneGeometry from "./PlaneGeometry"
import { Perf } from 'r3f-perf'
import { useRef, useEffect } from "react"
import * as THREE from "three"

export default function Scene() {


    return (
        //canvas por defecto trae PerspectiveCamera [0, 0, 5] fov: 75
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
            <directionalLight
                color="white"
                intensity={2}
                position={[20, 40, 40]}
                castShadow
            />
            {/* Luz secundaria suave desde abajo a la izquierda */}
            <directionalLight
                color="white"
                intensity={0.5}
                position={[-20, -40, -40]}
            />
            {/* <ambientLight />
      <pointLight position={[10, 10, 10]} /> */}
            {/* <Box /> */}
            <PlaneGeometry />
            <Perf position="top-left" />
            <OrbitControls />
        </Canvas>
    )
}
