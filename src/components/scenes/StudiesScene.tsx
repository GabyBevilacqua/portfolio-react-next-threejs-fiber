import { Canvas } from "@react-three/fiber";
import StarGeometry from "../StarGeometry";




export default function StudiesScene() {

    return (

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
            <StarGeometry />
        </Canvas>
    )
}