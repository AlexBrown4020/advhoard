import React from "react";
import { useGLTF } from "@react-three/drei";
import RobotBase from "./RobotBase1.glb"

export default function RobotScene(props) {
  const { nodes } = useGLTF(RobotBase);
  const { robotRef } = props

  return (
    <group ref={robotRef}>
      <group position={[0.1, -6, -95]} scale={4}>
        <primitive object={nodes.Bone001} />
        <primitive object={nodes.Bone006} />
      </group>
    </group>
  );
}

useGLTF.preload("/RobotBase1.glb");