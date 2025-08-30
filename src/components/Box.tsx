import { Edges } from "@react-three/drei";

export default function Box() {
    return (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="orange" />
            <Edges
                scale={1.1} // Opcional: para que las líneas estén un poco fuera del cubo
                color="black" // Color de las líneas
                threshold={15} // Opcional: sensibilidad de los bordes 
            />
            <Edges
                scale={1.01} // Opcional: para que las líneas estén un poco fuera del cubo
                color="black" // Color de las líneas
                threshold={15} // Opcional: sensibilidad de los bordes 
            />
        </mesh>
    )
}
