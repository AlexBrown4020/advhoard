/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/3Dfiles/giant/Giant.gltf -r public
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export function Giant (props) {
  const { nodes, materials } = useGLTF('/3Dfiles/giant/Giant.gltf');
  return (
    <Canvas style={{height: '100vh',width: '100vw'}}>
      <OrbitControls />
      <ambientLight intensity={0.1}/>
      <pointLight position={[10,5,10]}/>
      <spotLight
          position={[10, 15, 10]}
          angle={0.3}
      />
      <group {...props} dispose={null}>
        <group rotation={[0, -0.34, -0.14]} scale={0.09}>
          <mesh geometry={nodes.Sphere001_1.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Sphere001_2.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Sphere001_3.geometry} material={materials['Material.006']} />
          <mesh geometry={nodes.Sphere001_4.geometry} material={materials['Material.005']} />
          <mesh geometry={nodes.Sphere001_5.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.Sphere001_6.geometry} material={materials['Material.004']} />
          <mesh geometry={nodes.Sphere001_7.geometry} material={materials.Material} />
          <mesh geometry={nodes.Sphere001_8.geometry} material={materials['Material.007']} />
          <mesh geometry={nodes.Sphere001_9.geometry} material={materials['Material.009']} />
        </group>
      </group>
    </Canvas>
  )
};

useGLTF.preload('/3Dfiles/giant/Giant.gltf');
