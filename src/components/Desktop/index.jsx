import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  useGLTF,
  Html,
  useTexture,
  shaderMaterial,
  Image,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { useThree } from "@react-three/fiber";
import Video from "../Video";

extend({ EffectComposer, RenderPass, UnrealBloomPass });

function Bloom({ children }) {
  const { gl, camera, size } = useThree();
  const [scene, setScene] = useState();
  const composer = useRef();
  useEffect(
    () => void scene && composer.current.setSize(size.width, size.height),
    [size]
  );
  useFrame(() => scene && composer.current.render(), 1);
  return (
    <>
      <scene ref={setScene}>{children}</scene>
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" scene={scene} camera={camera} />
        <unrealBloomPass attachArray="passes" args={[undefined, 1.5, 1, 0]} />
      </effectComposer>
    </>
  );
}

export function Desktop(props) {
  const { nodes, materials } = useGLTF("/src/assets/desktop.glb");
  const ref = useRef();
  const [colorMap] = useTexture([
    "https://res.cloudinary.com/dbqlsilt2/image/upload/c_scale,h_154,r_8/v1660889629/a/outrun-vaporwave-hd-wallpaper-thumb_qltfxp.jpg",
  ]);

  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.4}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[1.5, 0.47, -1.37]}>
            <group position={[0.03, 0.62, -1.2]} rotation={[-2.67, 0.03, 1.28]}>
              <group
                position={[-0.64, 1.08, -0.82]}
                rotation={[-1.96, -0.45, 3.07]}
              >
                <group position={[0, 0.9, 0]} rotation={[-1.6, 0, 0]}>
                  <group position={[0, 0.2, 0]} rotation={[-0.19, 0.1, 0.01]}>
                    <group position={[0, 1.74, 0]} rotation={[-0.12, 0, 0]}>
                      <group position={[0, 0.18, 0]}>
                        <group position={[0, 0.13, 0]}>
                          <group
                            position={[0, 0.03, 0]}
                            rotation={[Math.PI / 2, 0, 0]}
                          >
                            <mesh
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_13.geometry}
                              material={materials["Material.007"]}
                            />
                            <mesh
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_14.geometry}
                              material={materials["Material.002"]}
                            />
                            <mesh
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_15.geometry}
                              material={materials["Material.016"]}
                            />

                            <mesh
                              name="screen"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_17.geometry}
                              material={materials["Material.004"]}
                            >
                              <meshBasicMaterial
                                map={colorMap}
                                toneMapped={false}
                              />
                              {/* <Image rotation={[0, 3.14, 0]} scale={[3.2 , 2, 2]}  color={'white'} texture={colorMap} /> */}
                              <Video />
                            </mesh>

                            <mesh
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_18.geometry}
                              material={materials["Material.006"]}
                            />
                            <mesh
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_19.geometry}
                              material={materials["Material.005"]}
                            />
                            <mesh
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_20_1.geometry}
                              material={materials["Material.001"]}
                            />
                            <mesh
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_16.geometry}
                              material={materials["Material.003"]}
                            />
                          </group>
                        </group>
                        <group
                          position={[-0.03, -3.87, -2.3]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_22_1.geometry}
                            material={materials["Material.002"]}
                          />
                          <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_23_1.geometry}
                            material={materials["Material.014"]}
                          />
                        </group>
                      </group>
                    </group>
                    <group position={[0, -2.28, -1.82]} rotation={[1.45, 0, 0]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_29_1.geometry}
                        material={materials["Material.002"]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
          <group position={[-3.51, 1.63, 0.43]} rotation={[0, -1.55, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_152.geometry}
              material={materials["Material.025"]}
            />
          </group>
          <group position={[-3.46, 1.63, 0.43]} rotation={[0, -1.55, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_164.geometry}
              material={materials["Material.025"]}
            />
          </group>
          <group scale={0.15}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_39.geometry}
              material={materials["Material.007"]}
              position={[0, 0, -3.68]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_40.geometry}
              material={materials["Material.002"]}
              position={[0, -3.11, -3.7]}
            />
          </group>
          <group position={[-2.11, -0.02, -0.2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_46.geometry}
              material={materials["Material.008"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_47.geometry}
              material={materials["Material.030"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_48.geometry}
              material={materials["Material.004"]}
            />
          </group>
          <group position={[-1.33, -0.06, -0.24]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_50.geometry}
              material={materials.material_0}
            />
          </group>
          <group
            name="case"
            position={[-3.08, 1.04, -1.63]}
            rotation={[-Math.PI, 0.06, -Math.PI]}
            scale={0.46}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_127.geometry}
              material={materials["Material.045"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_128.geometry}
              material={materials["Material.045"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_129.geometry}
              material={materials["Material.044"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_130.geometry}
              material={materials["Material.043"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_131.geometry}
              material={materials["Material.043"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_132.geometry}
              material={materials["Material.043"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_133.geometry}
              material={materials["Material.042"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_135.geometry}
              material={materials["Material.040"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_136.geometry}
              material={materials["Material.039"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_137.geometry}
              material={materials["Material.037"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_138.geometry}
              material={materials["Material.036"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_139.geometry}
              material={materials["Material.046"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_140.geometry}
              material={materials["Material.024"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_141.geometry}
              material={materials["Material.022"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_142.geometry}
              material={materials["Material.023"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_134.geometry}
              material={materials["Material.041"]}
            />
          </group>
          <group position={[0.16, 0.31, -2.31]} scale={0.05}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_108.geometry}
              material={materials["Material.006"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_109.geometry}
              material={materials["Material.025"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_110.geometry}
              material={materials["Material.007"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_112.geometry}
              material={materials["Material.022"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_113.geometry}
              material={materials["Material.030"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_114.geometry}
              material={materials["Material.009"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_115.geometry}
              material={materials["Material.034"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_111.geometry}
              material={materials["Material.031"]}
            />
          </group>
          <group position={[0, 0.02, 0]} scale={0.09}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_42.geometry}
              material={materials["Material.007"]}
              position={[26.13, 6.06, -5.96]}
            />
          </group>
          <group position={[-3.98, 0.06, -0.1]} scale={0.1}>
            <mesh
              name="table-legs"
              castShadow
              receiveShadow
              geometry={nodes.Object_54.geometry}
              material={materials["Material.045"]}
              position={[7.39, 0, 0]}
              scale={[0.82, 1.2, 1]}
            />
          </group>
          <group position={[-1.36, -0.05, -0.2]} scale={0.08}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_56.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_57.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_58.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_59.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_60.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_61.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_62.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_63.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_64.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_65.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_66.geometry}
              material={materials["Material.012"]}
            />
          </group>
          <group
            position={[-2.16, 0.13, 0.23]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={-0.06}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_80.geometry}
              material={materials["Material.002"]}
            />
          </group>
          <group
            position={[-1.19, 0.09, 0.19]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={-0.01}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_84.geometry}
              material={materials["Material.002"]}
            />
          </group>
          <group
            position={[1.63, 0.13, 0.23]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={-0.06}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_94.geometry}
              material={materials["Material.002"]}
            />
          </group>
          <group position={[-1.69, -0.05, -0.2]} scale={0.08}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_100.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_101.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_102.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_103.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_104.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_105.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_106.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_96.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_97.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_98.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_99.geometry}
              material={materials["Material.012"]}
            />
          </group>
          <group
            position={[-1.69, 0.33, -2.34]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.06, 0.02, 0.06]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_122.geometry}
              material={materials["Material.006"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_124.geometry}
              material={materials["Material.033"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_125.geometry}
              material={materials["Material.007"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_123.geometry}
              material={materials["Material.031"]}
            />
          </group>
          <group
            position={[-3.14, -0.02, -0.21]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={0.04}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_52.geometry}
              material={materials.material_0}
            />
          </group>
          <group
            position={[-1.19, 0.09, 0.2]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={-0.01}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_82.geometry}
              material={materials["Material.002"]}
            />
          </group>
          <group position={[-1.72, 0.23, -2.32]} scale={0.71}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_119.geometry}
              material={materials["Material.006"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_120.geometry}
              material={materials["Material.032"]}
            />
          </group>
          <group position={[0, 0.15, -1.53]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_44.geometry}
              material={materials["Material.047"]}
              scale={[0.85, 1, 1]}
            />
          </group>
          <group
            position={[-0.93, 0.32, -2.49]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={0.03}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_117.geometry}
              material={materials["Material.031"]}
            />
          </group>
          <group
            position={[-2.9, 1.04, -1.63]}
            rotation={[-1.58, 0.12, -3.08]}
            scale={0.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_144.geometry}
              material={materials["Material.035"]}
            />
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.004"]}
        position={[0, 0.88, 0.58]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.06, -0.18, -0.14]}
      />
    </group>
  );
}

useGLTF.preload("/src/assets/desktop.glb");
