"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Box from "./Box"
import PlaneGeometry from "./PlaneGeometry"
import { Perf } from 'r3f-perf'
import { useRef, useEffect } from "react"
import * as THREE from "three"

function CameraLogger() {
    const { camera } = useThree()
    useFrame(() => {
        console.log("Camera position:", camera.position)
    })
    return null
}

export default function Scene() {


    return (
        //canvas por defecto trae PerspectiveCamera [0, 0, 5] fov: 75
        // 
        <Canvas camera={{ position: [0, -11, 11], fov: 45 }}>
            <directionalLight
                color="white"
                intensity={3}
                position={[20, 40, 40]}
                castShadow
            />
            {/* Luz secundaria suave desde abajo a la izquierda */}
            <directionalLight
                color="white"
                intensity={1}
                position={[-20, -40, -40]}
            />
            {/* <ambientLight />
      <pointLight position={[10, 10, 10]} /> */}
            {/* <Box /> */}
            <PlaneGeometry />
            <Perf position="top-left" />
            <OrbitControls />
          {/* <CameraLogger /> */}
        </Canvas>
    )
}
