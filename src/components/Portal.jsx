import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Portal(props) {
  const { nodes, materials } = useGLTF("/src/assets/Portal.glb");
  return (
    <group {...props} dispose={null} rotation={[-Math.PI / 12, 1.8, 0]}>
      <group>
        <group />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials["Material.004"]}
          scale={[1, 1, 1.77]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials["Material.001"]}
          position={[0.25, -0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials["Material.004"]}
          position={[0, -1, 0]}
          scale={[1.78, 1, 2.55]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials["Material.005"]}
          position={[-0.32, 0.18, 1.16]}
          scale={[0.35, 0.62, 0.52]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials["Material.005"]}
          position={[-0.26, 0.2, -0.82]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.35, -0.62, -0.52]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials["Material.005"]}
          position={[0.44, 0.17, 0.13]}
          scale={[0.35, 0.62, 0.52]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials["Material.005"]}
          position={[-0.17, 0.23, 0.88]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.35, 0.62, 0.52]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={nodes.Plane009.material}
          position={[-1.42, -0.37, -1.54]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.35, 0.62, 0.52]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={nodes.Plane010.material}
          position={[-0.58, -0.35, -0.91]}
          scale={[0.35, 0.62, 0.52]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={materials["Material.005"]}
          position={[-0.81, -0.36, 0.75]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.35, -0.62, -0.52]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012.geometry}
          material={materials["Material.005"]}
          position={[-0.17, -0.35, 1.77]}
          scale={[0.35, 0.62, 0.52]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={materials["Material.005"]}
          position={[0.38, -0.39, 1.59]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.35, -0.62, -0.52]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014.geometry}
          material={nodes.Plane014.material}
          position={[1.42, -0.37, 2.08]}
          rotation={[0, -0.69, 0]}
          scale={[0.35, 0.62, 0.52]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015.geometry}
          material={nodes.Plane015.material}
          position={[-0.7, -0.92, 3.08]}
          rotation={[-0.11, -1.57, -0.89]}
          scale={[0.35, 0.62, 0.52]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017.geometry}
          material={nodes.Plane017.material}
          position={[-2.57, -0.88, 1.32]}
          rotation={[0, -0.76, 0]}
          scale={[0.35, 0.62, 0.52]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane018.geometry}
          material={nodes.Plane018.material}
          position={[-3.37, -0.82, 0.84]}
          rotation={[3, -0.15, 3.11]}
          scale={[0.35, 0.62, 0.52]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019.geometry}
          material={materials["Material.005"]}
          position={[-2.2, -0.88, -2.59]}
          rotation={[0, -0.1, 0]}
          scale={[0.35, 0.62, 0.52]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane020.geometry}
          material={materials["Material.003"]}
          position={[-0.72, 0.28, -1.11]}
          rotation={[-2.99, 0.28, 2.55]}
          scale={[0.56, 0.56, 0.24]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021.geometry}
          material={materials["Material.003"]}
          position={[0.82, 0.13, 1.72]}
          rotation={[-2.62, -0.4, 2.78]}
          scale={[0.35, 0.35, 0.15]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane022.geometry}
          material={materials["Material.003"]}
          position={[-0.04, 3.29, 1.07]}
          rotation={[-2.17, 0.27, 2.15]}
          scale={[0.29, 0.29, 0.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane023.geometry}
          material={materials["Material.003"]}
          position={[-0.96, -0.02, -1.67]}
          rotation={[-2.32, 1.06, 1.82]}
          scale={[0.18, 0.18, 0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane024.geometry}
          material={materials["Material.003"]}
          position={[-0.8, -0.38, 2.33]}
          rotation={[-2.7, 0.07, 2.82]}
          scale={[0.29, 0.29, 0.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane025.geometry}
          material={materials["Material.003"]}
          position={[-2.44, -0.9, -2.03]}
          rotation={[0.41, -1.16, 0.03]}
          scale={[0.28, 0.28, 0.12]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026.geometry}
          material={materials["Material.006"]}
          position={[0.42, 0.16, 0]}
          scale={[0.05, 1, 1.07]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Portal.glb");

