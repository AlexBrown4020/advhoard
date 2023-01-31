import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { LC } from "../LC";

export const Model = () => {

    const Box = () => {
        return (
          <mesh>
            <boxGeometry attach='geometry'/>
          </mesh>
        );
      }

    return (
        <Canvas style={{height: '100vh',width: '100vw'}}>
            <OrbitControls />
            <ambientLight intensity={0.5}/>
            <pointLight position={[10,5,10]}/>
            <spotLight
                position={[10, 15, 10]}
                angle={0.3}
            />
            <Box/>
            <LC/>
        </Canvas>
    )
}