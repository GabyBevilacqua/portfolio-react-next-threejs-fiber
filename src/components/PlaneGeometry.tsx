
import { Edges } from '@react-three/drei';
import * as THREE from 'three';

export default function PlaneGeometry() {
    return (
        <mesh position={[0, 0, 0]}>
            <planeGeometry args={[5, 5, 10, 10]} />
            <meshStandardMaterial
                color="lightblue"
                side={THREE.DoubleSide} />
            <Edges
                scale={1.01} // Opcional: para que las líneas estén un poco fuera del cubo
                color="white" // Color de las líneas
                threshold={15} // Opcional: sensibilidad de los bordes 
            />
        </mesh>
    );
}