/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/3Dfiles/venom/Venom.gltf -r public
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export function Venom (props) {
  const { nodes, materials } = useGLTF('/3Dfiles/venom/Venom.gltf');
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
        <mesh geometry={nodes.Plane147.geometry} material={nodes.Plane147.material} rotation={[0.08, 0.03, -1.23]} scale={[0.17, 0.17, 0.15]} />
      </group>
    </Canvas>
  )
}

useGLTF.preload('/3Dfiles/venom/Venom.gltf');
