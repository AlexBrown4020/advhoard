/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { React, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a } from '@react-spring/three';
import kitchenScene from './Kitchen2.glb';
import * as THREE from 'three';

export default function KitchenScene({isScrolling, setIsScrolling, robotRef, ...props}) {
  const { nodes, materials } = useGLTF(kitchenScene)
  const kitchenRef = useRef();

  const handleWheel = (e) => {
    if (e.deltaY === -100 && kitchenRef.current.position.z < 25) {
      setIsScrolling(true);
      robotRef.current.position.z += .8;
      kitchenRef.current.position.z += .8;
    } else if (e.deltaY === 100 && kitchenRef.current.position.z >= -40) {
      setIsScrolling(true);
      robotRef.current.position.z -= .8;
      kitchenRef.current.position.z -= .8;
    }
  }

  // const updateHeadRotation = (e) => {
  //   if (robotRef.current) {
  //     // Calculate angle between robot position and pointer position
  //     const deltaX = pointerPosition.x - robotRef.current.position.x;
  //     const deltaY = pointerPosition.y - robotRef.current.position.y;
  //     const angle = Math.atan2(deltaY, deltaX);
  //     // Update head rotation
  //     robotRef.current.rotation.y = -angle;
  //   }
  // }

  const handlePointerMove = (e) => {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const target = new THREE.Vector3();
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, e.camera);
    const intersectObjects = [kitchenRef.current];
    const intersects = raycaster.intersectObjects(intersectObjects, true);
    if (intersects.length > 0 && kitchenRef.current.position.z > 24) {
      const intersection = intersects[0];
      const { point } = intersection;
      const head = robotRef.current.children[0].children[1];
      target.x += (mouse.x + point.x) * .05;
      target.y += (-mouse.y - target.y);
      target.z = e.camera.position.z;
      head.rotation.x = target.y;
      head.rotation.y = target.x;
    }
  }

  return (
    <a.group ref={kitchenRef} {...props}
      onWheel={(e) => {handleWheel(e)}}
      onPointerMove={(e) => {handlePointerMove(e)}}
    >
      <group position={[-.9, -12, -40]} scale={2.093}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.011"]}
        position={[5, 0, 0]}
        scale={[9.08, 0.182, 9.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.020"]}
        position={[0.437, 0.475, -0.001]}
        scale={10.555}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.028"]}
        position={[0.437, 8.475, -8.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[10.409, 8.647, 8.647]}
      />
      <group position={[0.437, 8.475, -0.001]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials["Material.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={materials["Material.034"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.RobotDeco}
        position={[5, 0, 0]}
        scale={[9.08, 0.182, 9.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["Material.019"]}
        position={[0.394, 2.246, 3.657]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[10.337, 2.404, 2.404]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials.WoodPanel}
        position={[0.371, 5.054, 2.42]}
        scale={[10.501, 1, 1.857]}
      />
      <group position={[6.362, 5.533, 2.575]} scale={0.9}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_1.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_2.geometry}
          material={materials["Material.021"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Glass}
        position={[4.378, 5.939, 1.402]}
        scale={0.388}
      />
      <group
        position={[2.95, 10.259, -8.238]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2.38, 2.38, 3.417]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={materials.WoodPanel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010_1.geometry}
          material={materials.RobotBase}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.011"]}
        position={[10, 0, 0]}
        scale={[9.08, 0.182, 9.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.RobotDeco}
        position={[10, 0, 0]}
        scale={[9.08, 0.182, 9.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["Material.011"]}
        position={[16, 0, 0]}
        scale={[9.08, 0.182, 9.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials.RobotDeco}
        position={[16, 0, 0]}
        scale={[9.08, 0.182, 9.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["Material.011"]}
        position={[21, 0, 0]}
        scale={[9.08, 0.182, 9.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials.RobotDeco}
        position={[21, 0, 0]}
        scale={[9.08, 0.182, 9.08]}
      />
      <group
        position={[7.95, 10.259, -8.238]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2.38, 2.38, 3.417]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007_1.geometry}
          material={materials.WoodPanel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007_2.geometry}
          material={materials.RobotBase}
        />
      </group>
      <group
        position={[-2.05, 10.259, -8.238]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2.38, 2.38, 3.417]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={materials.WoodPanel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011_1.geometry}
          material={materials.RobotBase}
        />
      </group>
      <group
        position={[-7.05, 10.259, -8.238]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2.38, 2.38, 3.417]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012.geometry}
          material={materials.WoodPanel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_1.geometry}
          material={materials.RobotBase}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials.Glass}
        position={[0.437, 15.257, -7.75]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.193}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={materials.Glass}
        position={[7.437, 15.257, -7.75]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.193}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder013.geometry}
        material={materials.Glass}
        position={[-6.564, 15.271, -7.744]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.193}
      />
      <group
        position={[0.276, 8.727, -26.738]}
        scale={[33.925, 10.875, 10.875]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials.RobotBase}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_1.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_2.geometry}
          material={materials.Glass}
        />
      </group>
      <group position={[-21.072, 8.727, -4.61]} scale={10.875}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_1.geometry}
          material={materials["Material.031"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_2.geometry}
          material={materials["Material.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_3.geometry}
          material={materials.WoodPanel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_4.geometry}
          material={materials["Material.036"]}
        />
      </group>
      <group position={[21.928, 8.727, -4.61]} scale={10.875}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027_1.geometry}
          material={materials["Material.031"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027_2.geometry}
          material={materials["Material.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027_3.geometry}
          material={materials.WoodPanel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027_4.geometry}
          material={materials["Material.036"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={nodes.Plane005.material}
        position={[0.437, -0.741, 21.836]}
        scale={[32.223, 11.31, 11.31]}
      />
      </group>
    </a.group>
  );
}

useGLTF.preload("/Kitchen2.glb");