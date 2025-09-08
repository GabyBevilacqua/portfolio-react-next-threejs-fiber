import { Edges } from "@react-three/drei";

export default function Box({ position }: { position: [number, number, number] }) {
    return (
        <mesh position={position}>
            <boxGeometry args={[5, 5, 5]} />
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
