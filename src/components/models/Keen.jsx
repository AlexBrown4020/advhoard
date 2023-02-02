/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/3Dfiles/keen/Keen.gltf -r public
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export function Keen (props) {
  const { nodes } = useGLTF('/keen/Keen.gltf')
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
        <mesh geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material} rotation={[1.09, 0, 0]} scale={[0.71, 0.12, 0.91]} />
      </group>
    </Canvas>
  )
};

useGLTF.preload('/keen/Keen.gltf');
