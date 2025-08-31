"use client" 
import { Edges } from "@react-three/drei" 
import { useEffect, useMemo, useRef } from "react" 
import { useControls } from 'leva' 
import * as THREE from "three" 


export default function PlaneGeometry() {
    const meshRef = useRef<THREE.Mesh>(null)
    // Controles de Leva (equivalente dat.gui, mas eficiente en react)

    const { width, height, widthSegments, heightSegments } = useControls("Plane", {
        width: { value: 43, min: 1, max: 50, step: 1 },
        height: { value: 32, min: 1, max: 50, step: 1 },
        widthSegments: { value: 36, min: 1, max: 50, step: 1 },
        heightSegments: { value: 27, min: 1, max: 50, step: 1 },
    })
    
    // Cada vez que cambian los controles, recalculamos la geometría
    const geometry = useMemo(() => {
        const geo = new THREE.PlaneGeometry(width, height, widthSegments, heightSegments)
        const position = geo.attributes.position
        for (let i = 0; i < position.count; i++) {
            position.setZ(i, position.getZ(i) + Math.random())
        }
        position.needsUpdate = true
        return geo
    }, [width, height, widthSegments, heightSegments])

    return (
        <mesh 
        geometry={geometry}
        >
            <meshStandardMaterial 
            color="lightblue" 
            side={THREE.DoubleSide} 
            flatShading={true}
             />
            {/* <Edges scale={1.01} color="white" threshold={15} /> */}
        </mesh>
    )
}


// "use client"

// import { Edges } from "@react-three/drei"
// import { useEffect, useMemo, useRef } from "react"
// import { useControls } from 'leva'
// import * as THREE from "three"
// import gsap from "gsap"
// import { ThreeEvent, useFrame, useThree } from "@react-three/fiber"

// export default function PlaneGeometry() {
//   const meshRef = useRef<THREE.Mesh>(null)
//   const { camera } = useThree()
//   const raycaster = useMemo(() => new THREE.Raycaster(), [])
//   const mouse = useRef(new THREE.Vector2())

//   // Controles de Leva (equivalente dat.gui, mas eficiente en react)
//   const { width, height, widthSegments, heightSegments } = useControls("Plane", {
//     width: { value: 18, min: 1, max: 50, step: 1 },
//     height: { value: 12, min: 1, max: 50, step: 1 },
//     widthSegments: { value: 21, min: 1, max: 50, step: 1 },
//     heightSegments: { value: 17, min: 1, max: 50, step: 1 },
//   })

//   // Cada vez que cambian los controles, recalculamos la geometría
//   // 🎲 Generar geometría con posición random y color
//   const geometry = useMemo(() => {
//     const geo = new THREE.PlaneGeometry(width, height, widthSegments, heightSegments)
//     const position = geo.attributes.position
//     const colors = []
//     const originalPosition = []
//     const randomValues = []

//     for (let i = 0; i < position.count; i++) {
//       const x = position.getX(i)
//       const y = position.getY(i)
//       const z = position.getZ(i) + Math.random()
//       position.setZ(i, z)

//       originalPosition.push(x, y, z)
//       randomValues.push(Math.random() * Math.PI * 2)

//       // Color inicial
//       colors.push(0, 0.19, 0.4) // azul oscuro
//     }

//     geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3))
//     // guardamos los datos extra en el objeto geometry (hack común)
//     geo.userData = { originalPosition, randomValues }

//     position.needsUpdate = true
//     return geo
//   }, [width, height, widthSegments, heightSegments])

//   // 🎬 Animación frame a frame
//   useFrame(({ clock }) => {
//     if (!meshRef.current) return
//     const { geometry } = meshRef.current
//     const { array } = geometry.attributes.position as THREE.BufferAttribute
//     const { originalPosition, randomValues } = geometry.userData
//     const frame = clock.elapsedTime

//     // deformación ondulada
//     for (let i = 0; i < array.length; i += 3) {
//       array[i] = originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.01
//       array[i + 1] = originalPosition[i + 1] + Math.sin(frame + randomValues[i + 1]) * 0.001
//     }
//     geometry.attributes.position.needsUpdate = true

//     // raycaster para detectar hover
//     raycaster.setFromCamera(mouse.current, camera)
//     const intersects = raycaster.intersectObject(meshRef.current)
//     if (intersects.length > 0) {
//       const mesh = intersects[0].object as THREE.Mesh
//   const color = (mesh.geometry as THREE.BufferGeometry).attributes.color as THREE.BufferAttribute
//       const face = intersects[0].face!
//       const initialColor = { r: 0, g: 0.19, b: 0.4 }
//       const hoverColor = { r: 0.1, g: 0.5, b: 1 }

//       // cambiar color de los vértices de la cara
//       const setVertexColor = (idx: number, c: { r: number; g: number; b: number }) => {
//         color.setX(idx, c.r)
//         color.setY(idx, c.g)
//         color.setZ(idx, c.b)
//       }

//       setVertexColor(face.a, hoverColor)
//       setVertexColor(face.b, hoverColor)
//       setVertexColor(face.c, hoverColor)
//       color.needsUpdate = true

//       // animación de regreso con gsap
//       gsap.to(hoverColor, {
//         ...initialColor,
//         duration: 1,
//         onUpdate: () => {
//           setVertexColor(face.a, hoverColor)
//           setVertexColor(face.b, hoverColor)
//           setVertexColor(face.c, hoverColor)
//           color.needsUpdate = true
//         },
//       })
//     }
//   })

//     // 📌 capturamos movimiento del mouse en el canvas de R3F
//   const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
//     mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
//     mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
//   }

// return (
//     <mesh 
//     ref={meshRef}
//     geometry={geometry}
//     onPointerMove={handlePointerMove}
//     >
//       <meshStandardMaterial
//         vertexColors
//         // color="lightblue"
//         side={THREE.DoubleSide}
//         flatShading={true}
//         />
//       {/* <Edges scale={1.01} color="white" threshold={15} /> */}
//     </mesh>
//   )
// }




// export default function PlaneGeometry() {
//   const geometry = useMemo(() => {
//     const geo = new THREE.PlaneGeometry(5, 5, 10, 10)
//     const position = geo.attributes.position
//     for (let i = 0; i < position.count; i++) {
//       position.setZ(i, position.getZ(i) + Math.random())
//     }
//     position.needsUpdate = true
//     return geo
//   }, [])

//     useEffect(() => {
//             // Importa dat.gui solo en el cliente
//     import('dat.gui').then(({ GUI }) => {
//     const gui = new GUI()
    
//     // Recuerda limpiar el GUI al desmontar
//       return () => gui.destroy()
//     })
//   }, [])






// import { Edges } from '@react-three/drei';
// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';


// export default function PlaneGeometry() {
//     const meshRef = useRef<THREE.Mesh>(null);

//     useEffect(() => {   // esto no funciona porque no renderia correctamente
//         if (meshRef.current) {
//             // console.log('Mesh:', meshRef.current);
//             // console.log('Geometry:', meshRef.current.geometry);
//             // console.log('Material:', meshRef.current.material);
//             const positionArray = meshRef.current.geometry.attributes.position.array;
//             console.log('Position Array:', positionArray);

//             for (let i = 0; i < positionArray.length; i += 3) {
//                 const x = positionArray[i];
//                 const y = positionArray[i + 1];
//                 const z = positionArray[i + 2];
                
//                 positionArray[i + 2] = z + Math.random(); // Agrega un valor aleatorio a la coordenada z    

//                 console.log(x, y, z);
//             }
//         }
//     }, []);

//     return (
//         <mesh position={[0, 0, 0]} ref={meshRef}>
//             <planeGeometry args={[5, 5, 10, 10]} />
//             <meshStandardMaterial
//                 color="lightblue"
//                 side={THREE.DoubleSide} // no esta funcionando por cuestiones de incompatibilidad
//                 flatShading={true}
//            />
//             <Edges
//                 scale={1.01} // Opcional: para que las líneas estén un poco fuera del cubo
//                 color="white" // Color de las líneas
//                 threshold={15} // Opcional: sensibilidad de los bordes 
//             />
//         </mesh>
//     );
// }