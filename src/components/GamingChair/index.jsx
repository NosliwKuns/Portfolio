import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const GamingChair = (props) => {
  const { nodes, materials } = useGLTF("/src/assets/gaming-chair.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.005}>
          <group
            position={[0, 218.09, -5.78]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[67.95, 84.61, 18.81]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Black_Black_0.geometry}
              material={materials.Black}
            />
          </group>
          <group
            position={[0, 218.09, -5.78]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[67.95, 84.61, 18.81]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Black_Arm_Black_0.geometry}
              material={materials.Black}
            />
          </group>
          <group
            position={[0, 218.09, -5.78]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[67.95, 84.61, 18.81]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Black_Leg_Black_0.geometry}
              material={materials.Black}
            />
          </group>
          <group
            position={[0, 218.09, -5.78]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[67.95, 84.61, 18.81]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Black_Seat_and_Pillows_Black_0.geometry}
              material={materials.Black}
            />
          </group>
          <group
            position={[0, 218.09, -5.78]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[67.95, 84.61, 18.81]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.White_Seat_White_0.geometry}
              material={materials.White}
            />
          </group>
          <group
            position={[0, 218.09, -5.78]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[67.95, 84.61, 18.81]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.White_Text_White_0.geometry}
              material={materials.White}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

export default GamingChair;

useGLTF.preload("/src/assets/gaming-chair.glb");
