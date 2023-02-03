/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/3Dfiles/hydra/Hydra.gltf -r public
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export function Hydra (props) {
  const { nodes } = useGLTF('3DFiles//hydra/Hydra.gltf')
  return (
    <Canvas style={{height: '100vh',width: '100vw'}}>
      <OrbitControls />
      <ambientLight intensity={0.5}/>
      <pointLight position={[10,5,10]}/>
      <spotLight
          position={[10, 15, 10]}
          angle={0.3}
      />
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Cylinder001.geometry} material={nodes.Cylinder001.material} rotation={[-0.33, 0, 0]} scale={0.39} />
      </group>
    </Canvas>
  )
};

useGLTF.preload('/hydra/Hydra.gltf');
