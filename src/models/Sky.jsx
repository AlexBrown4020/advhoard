import { useGLTF } from '@react-three/drei';
import React from 'react';

import skyScene from './sky.glb';

export default function Sky() {
    const sky = useGLTF(skyScene);

    return (
        <mesh>
            <primitive object={sky.scene} />
        </mesh>
    )
}