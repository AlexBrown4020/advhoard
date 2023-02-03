/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/lament/LC.gltf -r public
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export function LC (props) {
  const { nodes, materials } = useGLTF('/lament/LC.gltf');
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
        <mesh geometry={nodes.Trace_1.geometry} material={materials.GoldSheen} />
        <mesh geometry={nodes.Trace_2.geometry} material={materials.Material} />
      </group>
    </Canvas>
  )
}

useGLTF.preload('/lament/LC.gltf');
