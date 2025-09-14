"use client"

//import { Edges } from "@react-three/drei"
import { useEffect, useMemo, useRef } from "react"
import { useControls } from 'leva'
import * as THREE from "three"
import { ThreeEvent, useFrame, useThree } from "@react-three/fiber"
import gsap from "gsap"

type PlaneGeometryProps = {
  rotation?: [number, number, number]
}

export default function PlaneGeometry({ rotation }: PlaneGeometryProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const { camera } = useThree()
  const raycaster = useMemo(() => new THREE.Raycaster(), [])
  const mouse = useRef(new THREE.Vector2())
  const hoverTweens = useRef<Map<number, gsap.core.Tween>>(new Map()) // para limpiar tweens anteriores

  // ✅ Controles Leva
  const { width, height, widthSegments, heightSegments } = useControls("Plane", {
    width: { value: 62, min: 1, max: 100, step: 1 },
    height: { value: 50, min: 1, max: 100, step: 1 },
    widthSegments: { value: 40, min: 1, max: 100, step: 1 },
    heightSegments: { value: 33, min: 1, max: 100, step: 1 },
  })

  // ✅ Generar geometría con colores y datos originales
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(width, height, widthSegments, heightSegments)
    const position = geo.attributes.position
    const colors: number[] = []
    const originalPosition: number[] = []
    const randomValues: number[] = []

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i)
      const y = position.getY(i)
      const z = position.getZ(i) + (Math.random() - 0.5) * 0.5 // ligera variación

      position.setZ(i, z)
      originalPosition.push(x, y, z)
      randomValues.push(Math.random() * Math.PI * 2)

      // Color inicial (azul oscuro)
      colors.push(0.10, 0.08, 0.25)
    }

    geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3))
    geo.userData = { originalPosition, randomValues, initialColors: [...colors] } // guardamos colores iniciales

    position.needsUpdate = true
    return geo
  }, [width, height, widthSegments, heightSegments])

  // ✅ Animación continua + hover
  useFrame(({ clock }) => {
    if (!meshRef.current) return

    const { geometry } = meshRef.current
    const posAttr = geometry.attributes.position as THREE.BufferAttribute
    const colorAttr = geometry.attributes.color as THREE.BufferAttribute
    const { originalPosition, randomValues, initialColors } = geometry.userData

    const time = clock.elapsedTime

    // 🌊 Animación ondulada de la geometría
    for (let i = 0; i < posAttr.count; i++) {
      const offset = i * 3
      posAttr.setXYZ(
        i,
        originalPosition[offset],
        originalPosition[offset + 1],
        originalPosition[offset + 2] + Math.sin(time + randomValues[i]) * 0.5 // Amplitud de la onda (ajustado a 0.1
      )
    }
    posAttr.needsUpdate = true

    // 🔍 Raycaster para hover
    raycaster.setFromCamera(mouse.current, camera)
    const intersects = raycaster.intersectObject(meshRef.current, false)

    if (intersects.length > 0) {
      const face = intersects[0].face!
      const indices = [face.a, face.b, face.c]

  // Hover color
  const hoverColor = [0.45, 0.5, 1.0] // violeta azulado más claro
      // const hoverColor = [0.03, 0.3, 0.5] // azul claro

      indices.forEach(idx => {
        // Limpiar tween anterior si existe
        if (hoverTweens.current.has(idx)) {
          hoverTweens.current.get(idx)?.kill()
          hoverTweens.current.delete(idx)
        }

        // Cambiar color inmediatamente a hover
        colorAttr.setXYZ(idx, hoverColor[0], hoverColor[1], hoverColor[2])

        // Animar de vuelta a color original
        const tween = gsap.to({}, {
          duration: 1.5,
          ease: "power2.out",
          onUpdate: () => {
            const progress = tween.progress()
            const r = gsap.utils.interpolate(hoverColor[0], initialColors[idx * 3], progress)
            const g = gsap.utils.interpolate(hoverColor[1], initialColors[idx * 3 + 1], progress)
            const b = gsap.utils.interpolate(hoverColor[2], initialColors[idx * 3 + 2], progress)
            colorAttr.setXYZ(idx, r, g, b)
          },
          onComplete: () => {
            hoverTweens.current.delete(idx)
          }
        })

        hoverTweens.current.set(idx, tween)
      })

      colorAttr.needsUpdate = true
    }
  })

  // 🖱️ Actualizar posición del mouse
  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
  }

  // 🧹 Limpiar tweens al desmontar
  useEffect(() => {
    return () => {
      hoverTweens.current.forEach(tween => tween.kill())
      hoverTweens.current.clear()
    }
  }, [])

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      onPointerMove={handlePointerMove}
      rotation={rotation}
      //rotation-x={-Math.PI / 2} // para que esté horizontal (como suelo)
      // para que esté frontal (como pared) se quita la rotación
    >
      <meshStandardMaterial
        vertexColors
        side={THREE.DoubleSide}
        flatShading={true}
      />
      
      {/* <Edges scale={1.01} color="white" threshold={15} /> */}
    </mesh>
  )
}
  
