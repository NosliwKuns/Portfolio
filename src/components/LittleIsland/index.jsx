import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Pointing } from './../Pointing/index';
import { useThree } from '@react-three/fiber';

export function LittleIsland(props) {

  const { width: w, height: h } = useThree((state) => state.viewport);

  const { nodes, materials } = useGLTF("/little-island.glb");
  return (
    <group {...props} dispose={null} scale={1} >
      
      <Pointing />
      <group
        position={[w / 3.5, -10.3, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree_planet_tree_planet_0.geometry}
          material={materials.tree_planet}
        />
      <group
        position={[-.37, 0, 0]}
        rotation={[0, -0.65, 0]}
        scale={0.03}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_Material001_0.geometry}
          material={materials["Material.001"]}
          // position={[-8.01, 4.3, 33.6]}
          // rotation={[-2.25, -0.38, -1.15]}
        />
      </group>
      <group
        position={[.2, -.3, .47]}
        rotation={[-3.07, 3.2, -2]}
        scale={0.04}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube038_Material001_0.geometry}
          material={materials["Material.001"]}
          // position={[-7.02, 24.2, 16.05]}
          // rotation={[-1.87, -0.03, 0.01]}
        />
      </group>
      </group>
      <group
        position={[-75.24, 2.92, -3.34]}
        rotation={[2.97, -0.15, 0.8]}
        scale={1.3}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[-32.21, 16.93, -94.42]}
          rotation={[2.74, -0.8, 2.68]}
        />
      </group>
      <group
        position={[-64.07, -55.76, -3.77]}
        rotation={[2.72, -0.2, 0.67]}
        scale={2.58}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube043_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[-3.42, -3.61, -40.54]}
          rotation={[0.57, 0.72, 0.2]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/little-island.glb");
