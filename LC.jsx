/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/lament/LC.gltf -r public
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/lament/LC.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[30, -7.91, 0]} scale={0.98}>
        <mesh geometry={nodes.Trace_1.geometry} material={materials.GoldSheen} />
        <mesh geometry={nodes.Trace_2.geometry} material={materials.Material} />
      </group>
    </group>
  )
}

useGLTF.preload('/lament/LC.gltf')
