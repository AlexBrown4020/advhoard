
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import RobotBase from "./RobotBase1.glb"

export default function RobotScene(props) {
  const { nodes, materials } = useGLTF(RobotBase);
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, -80]} scale={4}>
        <primitive object={nodes.Bone001} />
        <primitive object={nodes.Bone006} />
      </group>
    </group>
  );
}

useGLTF.preload("/RobotBase1.glb");