"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Box from "./Box"
import PlaneGeometry from "./PlaneGeometry"
import { Perf } from 'r3f-perf'
import { useRef, useEffect } from "react"
import * as THREE from "three"

export default function Scene() {
    const lightRef = useRef<THREE.DirectionalLight>(null)

    useEffect(() => {
        if (lightRef.current) {
            const helper = new THREE.DirectionalLightHelper(lightRef.current, 2, "red")
            lightRef.current.parent?.add(helper)
            return () => {
                if (lightRef.current && lightRef.current.parent) {
                    lightRef.current.parent.remove(helper)
                }
                helper.dispose()
            }
        }
    }, [])

    return (
        //canvas por defecto trae PerspectiveCamera [0, 0, 5] fov: 75
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
            <directionalLight
                ref={lightRef}
                color="white" intensity={1}
                position={[0, 0, 1]}
            />
            <directionalLight
                ref={lightRef}
                color="white" intensity={1}
                position={[0, 0, -1]}
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
