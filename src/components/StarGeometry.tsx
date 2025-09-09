'use client'

import { useMemo } from "react"
import * as THREE from "three"
import { PointMaterial } from "@react-three/drei"

export default function StarGeometry() {
    const geometry = useMemo(() => {
        const geo = new THREE.BufferGeometry()
        const starVertices = []
        const sizes = []
        for (let i = 0; i < 10000; i++) {
            const x = (Math.random() - 0.5) * 2000
            const y = (Math.random() - 0.5) * 2000
            const z = (Math.random() - 0.5) * 2000
            starVertices.push(x, y, z)
            sizes.push(Math.random() * 1.5 + 0.2) // tamaño aleatorio por estrella
        }
        geo.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(starVertices, 3)
        )
        geo.setAttribute(
            "size",
            new THREE.Float32BufferAttribute(sizes, 1)
        )
        return geo
    }, [])

    return (
        <points geometry={geometry}>
            <PointMaterial
                color="white"
                size={1}
                sizeAttenuation
                vertexColors={false}
            />
        </points>
    )
}