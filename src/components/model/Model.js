import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { LC } from "../LC";

export const Model = () => {
    return (
        <Canvas style={{
            height: '100vh',
        }}>
            <LC/>
            <OrbitControls/>
            <ambientLight intensity={0.5}/>
            <spotLight
                position={[10, 15, 10]}
                angle={0.3}
            />
        </Canvas>
    )
}