import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { Desktop } from './Desktop/index';
import Model from './../Model-animated';
import GamingChair from "./GamingChair";

export default function Planets(props) {
  const { nodes, materials } = useGLTF("/src/assets/planets.glb");
  const ref = useRef();
  const leftP = useRef();
  const sceneRef = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.015;
    leftP.current.rotation.z += 0.004;
    sceneRef.current.rotation.y += 0.002;
  });
  return (
    <group ref={sceneRef} {...props} dispose={null} rotation={[0, -2, 0]}>
      <Desktop position={[0, 1.6, 1.1 ]} />
      <Model />
      <GamingChair position={[0, 0.05, -0.8 ]} />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.02}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-39.92, 18.02, 0]}
            rotation={[-Math.PI / 2, 0, -0.85]}
            scale={3.47}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[85.16, 13.05, -31.46]}
            rotation={[-0.73, 0.62, -1.85]}
            scale={2.31}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube002_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[44.21, -56.71, -25.81]}
            rotation={[0.18, 0.46, -1.98]}
            scale={0.26}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube004_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[36.21, -61.89, 25.34]}
            rotation={[-0.63, -0.75, -3.12]}
            scale={3.07}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube005_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[7.06, -51.56, 48.36]}
            rotation={[0.76, -1.03, -1.78]}
            scale={0.94}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube006_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[5.45, -7.65, 72.88]}
            rotation={[-3.07, -1.29, 1.63]}
            scale={2.8}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube007_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-11.79, -76.73, 17.37]}
            rotation={[2.21, -1.28, 0.22]}
            scale={3.23}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube008_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-43.98, -0.9, 60.24]}
            rotation={[-2.94, -0.72, 1.05]}
            scale={1.14}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube009_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-62.89, -37.03, 15.71]}
            rotation={[2.81, -0.45, 0.7]}
            scale={1.21}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube010_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-75.24, 2.92, -3.34]}
            rotation={[2.97, -0.15, 0.8]}
            scale={1.3}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube011_Material001_0.geometry}
              material={materials["Material.001"]}
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
              geometry={nodes.Cube012_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-58.72, 19.4, 18.92]}
            rotation={[0, -1.23, 0.01]}
            scale={3.23}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube013_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-55.65, -10.96, -37.3]}
            rotation={[-2.65, 1.19, 0.78]}
            scale={0.37}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube014_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-30.56, -69.09, -27.04]}
            rotation={[-2.45, 0.92, 0.26]}
            scale={1.96}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube015_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-18.57, 18.85, -85.71]}
            rotation={[-0.51, 0.18, 0.09]}
            scale={2.33}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube016_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-26.65, -65.9, -34.78]}
            rotation={[3.12, 0.87, 1.19]}
            scale={2.45}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube017_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-29.75, 19.5, -47.73]}
            rotation={[0, -0.33, 0]}
            scale={0.02}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube018_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-11.03, 19.5, -14.84]}
            rotation={[0, -0.63, 0]}
            scale={2.24}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube019_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-39.4, 4.01, -62.55]}
            rotation={[3.05, 0.89, 0.84]}
            scale={2.89}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube020_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-9.33, 19.29, 81.48]}
            rotation={[0.02, -0.48, -0.01]}
            scale={0.72}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube021_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[22.37, 19.4, 37.56]}
            rotation={[0.01, -0.7, 0]}
            scale={1.41}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube022_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[15.75, 17.09, 89.08]}
            rotation={[1.05, -0.39, -0.14]}
            scale={1.83}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube023_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-5.11, 19.49, -52.03]}
            rotation={[0, -0.24, 0]}
            scale={2.2}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube024_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[15.67, 19.37, -18.39]}
            rotation={[-0.02, -0.51, -0.02]}
            scale={1.42}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube025_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[4.28, 19.49, -5.85]}
            rotation={[0, -0.65, 0]}
            scale={3.42}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube026_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[25.71, 19.01, -28.49]}
            rotation={[-0.03, -0.43, -0.04]}
            scale={1.23}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube027_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[64.21, 17.21, -47.12]}
            rotation={[-0.01, -0.52, -0.02]}
            scale={0.96}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube028_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[59, 19.5, 37.84]}
            rotation={[0, -0.66, 0]}
            scale={1.24}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube029_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[15.69, -63.63, -35.38]}
            rotation={[-0.19, 0.91, -2.18]}
            scale={0.11}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube030_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[48.24, -8.78, -49.98]}
            rotation={[0.15, 1.14, -1.85]}
            scale={0.57}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube031_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[58.87, 0.5, -51.41]}
            rotation={[0.22, 0.93, -2.5]}
            scale={1.99}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube032_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-2.9, -72.15, 10.34]}
            rotation={[1.16, -0.47, -1.49]}
            scale={1.77}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube033_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[85.16, 13.05, -31.46]}
            rotation={[-0.73, 0.62, -1.85]}
            scale={2.31}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube034_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[44.21, -56.71, -25.81]}
            rotation={[0.18, 0.46, -1.98]}
            scale={0.26}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube035_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[36.21, -61.89, 25.34]}
            rotation={[-0.63, -0.75, -3.12]}
            scale={3.07}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube036_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[7.06, -51.56, 48.36]}
            rotation={[0.76, -1.03, -1.78]}
            scale={0.94}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube037_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[5.45, -7.65, 72.88]}
            rotation={[-3.07, -1.29, 1.63]}
            scale={2.8}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube038_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-11.79, -76.73, 17.37]}
            rotation={[2.21, -1.28, 0.22]}
            scale={3.23}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube039_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-43.98, -0.9, 60.24]}
            rotation={[-2.94, -0.72, 1.05]}
            scale={1.14}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube040_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-62.89, -37.03, 15.71]}
            rotation={[2.81, -0.45, 0.7]}
            scale={1.21}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube041_Material001_0.geometry}
              material={materials["Material.001"]}
            />
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
            />
          </group>
          <group
            position={[-58.72, 19.4, 18.92]}
            rotation={[0, -1.23, 0.01]}
            scale={3.23}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube044_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-55.65, -10.96, -37.3]}
            rotation={[-2.65, 1.19, 0.78]}
            scale={0.37}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube045_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-30.56, -69.09, -27.04]}
            rotation={[-2.45, 0.92, 0.26]}
            scale={1.96}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube046_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-18.57, 18.85, -85.71]}
            rotation={[-0.51, 0.18, 0.09]}
            scale={2.33}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube047_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-26.65, -65.9, -34.78]}
            rotation={[3.12, 0.87, 1.19]}
            scale={2.45}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube048_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-29.75, 19.5, -47.73]}
            rotation={[0, -0.33, 0]}
            scale={0.02}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube049_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-11.03, 19.5, -14.84]}
            rotation={[0, -0.63, 0]}
            scale={2.24}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube050_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-39.4, 4.01, -62.55]}
            rotation={[3.05, 0.89, 0.84]}
            scale={2.89}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube051_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-9.33, 19.29, 81.48]}
            rotation={[0.02, -0.48, -0.01]}
            scale={0.72}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube052_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[22.37, 19.4, 37.56]}
            rotation={[0.01, -0.7, 0]}
            scale={1.41}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube053_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[15.75, 17.09, 89.08]}
            rotation={[1.05, -0.39, -0.14]}
            scale={1.83}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube054_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-5.11, 19.49, -52.03]}
            rotation={[0, -0.24, 0]}
            scale={2.2}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube055_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[15.67, 19.37, -18.39]}
            rotation={[-0.02, -0.51, -0.02]}
            scale={1.42}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube056_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[4.28, 19.49, -5.85]}
            rotation={[0, -0.65, 0]}
            scale={3.42}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube057_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[25.71, 19.01, -28.49]}
            rotation={[-0.03, -0.43, -0.04]}
            scale={1.23}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube058_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[64.21, 17.21, -47.12]}
            rotation={[-0.01, -0.52, -0.02]}
            scale={0.96}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube059_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[59, 19.5, 37.84]}
            rotation={[0, -0.66, 0]}
            scale={1.24}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube060_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[15.69, -63.63, -35.38]}
            rotation={[-0.19, 0.91, -2.18]}
            scale={0.11}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube061_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[48.24, -8.78, -49.98]}
            rotation={[0.15, 1.14, -1.85]}
            scale={0.57}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube062_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[58.87, 0.5, -51.41]}
            rotation={[0.22, 0.93, -2.5]}
            scale={1.99}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube063_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-2.9, -72.15, 10.34]}
            rotation={[1.16, -0.47, -1.49]}
            scale={1.77}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube064_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[6.22, 129.58, 107.24]}
            rotation={[0.01, 1.39, -1.6]}
            scale={2.31}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube065_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[5.55, 157.25, 120.46]}
            rotation={[-0.19, 1.22, -0.5]}
            scale={0.26}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube066_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[27.13, 138.29, 121.54]}
            rotation={[-0.01, 0.62, -1.33]}
            scale={3.07}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube067_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[23.8, 105.41, 140.79]}
            rotation={[0.01, 0.01, -2.38]}
            scale={0.94}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube068_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[32.64, 120.8, 136.84]}
            rotation={[0.04, 0.12, -1.86]}
            scale={2.8}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube069_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[29.31, 144.69, 152.05]}
            rotation={[-0.02, -0.36, -1.15]}
            scale={3.23}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube070_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[29.87, 142.84, 152.98]}
            rotation={[0, -0.38, -1.2]}
            scale={1.14}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube071_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[26.11, 120.8, 161.17]}
            rotation={[0.05, -0.66, -1.82]}
            scale={1.21}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube072_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[14.74, 106.87, 161.52]}
            rotation={[0.03, -0.96, -2.29]}
            scale={1.3}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube073_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[18.25, 142.84, 167.58]}
            rotation={[-0.01, -0.97, -1.21]}
            scale={2.58}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube074_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[2.05, 160.93, 156.77]}
            rotation={[-1.08, -1.51, -1.56]}
            scale={3.23}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube075_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-5.34, 138.29, 174.17]}
            rotation={[-3.08, -1.41, 1.86]}
            scale={0.37}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube076_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-6.22, 129.58, 175.02]}
            rotation={[3.13, -1.39, 1.54]}
            scale={1.96}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube077_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-15.11, 127.43, 171.75]}
            rotation={[3.11, -1.11, 1.46]}
            scale={2.33}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube078_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-23.11, 124.85, 165.99]}
            rotation={[3.14, -0.82, 1.41]}
            scale={2.45}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube079_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-9.69, 161.95, 151.13]}
            rotation={[-3.13, -0.79, 2.73]}
            scale={0.02}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube080_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-13.44, 104.05, 158.64]}
            rotation={[3.04, -0.84, 0.63]}
            scale={2.24}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube081_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-9.71, 99, 151.59]}
            rotation={[3.12, -0.79, 0.42]}
            scale={2.89}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube082_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-21.86, 105.41, 150.56]}
            rotation={[3.13, -0.4, 0.76]}
            scale={0.72}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube083_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-32.34, 127.43, 152.1]}
            rotation={[3.13, -0.33, 1.48]}
            scale={1.41}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube084_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-32.19, 118.31, 142.31]}
            rotation={[3.13, -0.03, 1.21]}
            scale={1.83}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube085_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-24.92, 154.21, 141.51]}
            rotation={[-3.13, -0.01, 2.33]}
            scale={2.2}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube086_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-22.03, 104.05, 139.68]}
            rotation={[3.08, 0.14, 0.71]}
            scale={1.42}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube087_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-19.85, 102.4, 137.94]}
            rotation={[3.12, 0.18, 0.63]}
            scale={3.42}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube088_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-23.17, 154.21, 131.94]}
            rotation={[-3.13, 0.38, 2.33]}
            scale={1.23}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube089_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-29.52, 120.8, 126.56]}
            rotation={[3.1, 0.47, 1.31]}
            scale={0.96}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube090_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-20.12, 131.59, 113.27]}
            rotation={[-3.14, 0.95, 1.6]}
            scale={1.24}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube091_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-16.01, 110.54, 117.91]}
            rotation={[3.13, 0.97, 0.97]}
            scale={0.11}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube092_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-9.77, 114.53, 112.32]}
            rotation={[2.96, 1.27, 1.27]}
            scale={0.57}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube093_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-0.93, 106.87, 115.99]}
            rotation={[2.45, 1.54, 1.51]}
            scale={1.99}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube094_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-0.48, 142.84, 109]}
            rotation={[-2.85, 1.56, 1.64]}
            scale={1.77}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube095_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-244.89, 102.99, -273.35]}
            rotation={[-1.51, 0.4, 2.37]}
            scale={17.48}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leaves_leaves_0.geometry}
              material={materials.leaves}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leaves_twig_0.geometry}
              material={materials.twig}
            />
          </group>
          <group
            position={[3.53, 19.09, 1.79]}
            rotation={[-Math.PI / 2, 0, -0.85]}
            scale={9.08}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.main_crystal_main_crystal_0.geometry}
              material={materials.main_crystal}
              position={[-6.91, -0.55, -0.03]}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, -0.85]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.main_planet_main_planet_0.geometry}
              material={materials.main_planet}
            />
          </group>
          <group /* planet right */
            ref={ref}
            position={[21.56, 93.39, -201.54]}
            scale={34.58}
          >
            <mesh
            rotation={[1, 0, 0]}
              castShadow
              receiveShadow
              geometry={nodes.saturn_ring_saturn_0.geometry}
              material={materials.ring_saturn}
            />
            <mesh
              rotation={[-Math.PI / 2, 0, 1]}
              castShadow
              receiveShadow
              geometry={nodes.saturn_saturn_0.geometry}
              material={materials.saturn}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.small_rocks_small_rocks_0.geometry}
              material={materials.small_rocks}
            />
          </group>
          {/* planet left */}
          <group
            ref={leftP}
            position={[0, 130.37, 141.13]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={34.58}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere002_small_crystal_planet_0.geometry}
              material={materials.small_crystal_planet}
            />
          </group>
          <group
            position={[-230.17, 77.84, -124.71]}
            rotation={[-Math.PI / 2, 0, 1.15]}
            scale={10.59}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tree_bark_tree_bark_0.geometry}
              material={materials.tree_bark}
            />
          </group>
          <group
            position={[-227.31, 34.29, -119.29]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tree_planet_tree_planet_0.geometry}
              material={materials.tree_planet}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/src/assets/planets.glb");

