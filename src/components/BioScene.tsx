'use client'

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Box from "./Box"
import PlaneGeometry from "./PlaneGeometry"
import { Perf } from 'r3f-perf'
import StarGeometry from "./StarGeometry"
//import { useRef, useEffect } from "react"
//import * as THREE from "three"

export default function BioScene() {

    return (
        //canvas por defecto trae PerspectiveCamera [0, 0, 5] fov: 75
        <Canvas camera={{ position: [-5, 5, 15], fov: 75 }}>
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
            <Box position={[0, 0, 0]} />
            <PlaneGeometry rotation={[-Math.PI / 2, 0, 0]} />
            <Perf position="top-left" />
            <OrbitControls />
            <StarGeometry />
        </Canvas>
    )
}