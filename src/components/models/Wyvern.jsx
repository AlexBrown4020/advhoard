/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/3Dfiles/wyvern/Wyvern.gltf -r public
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export function Wyvern (props) {
  const { nodes, materials } = useGLTF('/3Dfiles/wyvern/Wyvern.gltf')
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
      <mesh geometry={nodes.Sphere.geometry} material={materials['Material.002']} position={[-0.38, 4.84, 0]} rotation={[Math.PI, -1.48, Math.PI]} scale={[1.92, 0.86, 0.92]}/>
      </group>
    </Canvas>
  )
}

useGLTF.preload('/3Dfiles/wyvern/Wyvern.gltf');