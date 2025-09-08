"use client"

import { Canvas } from "@react-three/fiber"
//import { OrbitControls } from "@react-three/drei"
import Box from "./Box"
import PlaneGeometry from "./PlaneGeometry"
import { Perf } from 'r3f-perf'
import { useEffect, useState } from "react"
//import * as THREE from "three"

export default function ProjScene() {
    const [isMobile, setIsMobile] = useState(false)

        useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 900)
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])


    return (
        //canvas por defecto trae PerspectiveCamera [0, 0, 5] fov: 75
        <Canvas camera={{ position: [0, 2, 10], fov: 75 }}>
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
            <Box position={[0, 0, isMobile ? -8 : 0]}  />
            <PlaneGeometry  rotation={[-Math.PI / 2, 0, 0]}/>
            <Perf position="top-left" />
            {/* <OrbitControls /> */}
        </Canvas>
    )
}