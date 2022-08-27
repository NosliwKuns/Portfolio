import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export default function Rocket({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/oYPXdcwa-2WgL-Gb/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#4e007a']} />
      <group {...props} dispose={null} scale={.005}>
        {/* <OrthographicCamera
          name="Camera"
          makeDefault={true}
          zoom={0.81}
          far={100000}
          near={-100000}
          position={[-5.45, 8.78, 209.42]}
        /> */}
        <group name="Rocket" position={[0, -95.21, 0]}>
          {/* <pointLight
            name="Point Light"
            intensity={1.51}
            distance={2128}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={100}
            shadow-camera-far={100000}
            color="#3ee5fe"
            position={[0, -118.9, 62.64]}
            rotation={[-1.46, 0, 0]}
          /> */}
          <mesh
            name="Blur Effect"
            geometry={nodes['Blur Effect'].geometry}
            material={materials['Blur Effect Material']}
            castShadow
            receiveShadow
            position={[0, -235.52, 0]}
            scale={[5.9, 4.63, 5.6]}
          />
          <mesh
            name="Lathe 2"
            geometry={nodes['Lathe 2'].geometry}
            material={materials['Lathe 2 Material']}
            castShadow
            receiveShadow
            position={[0, -235.52, 0]}
            scale={4.29}
          />
          <mesh
            name="Sphere"
            geometry={nodes.Sphere.geometry}
            material={materials['Sphere Material']}
            castShadow
            receiveShadow
            position={[-1.42, 278.94, 44.64]}
            rotation={[-Math.PI, -1.52, -3]}
            scale={4.29}
          />
          <mesh
            name="Shape"
            geometry={nodes.Shape.geometry}
            material={materials['Shape Material']}
            castShadow
            receiveShadow
            position={[0, 113.3, 0]}
            rotation={[0, Math.PI / 4, 0]}
            scale={4.29}
          />
          <mesh
            name="Cylinder 2"
            geometry={nodes['Cylinder 2'].geometry}
            material={materials['Cylinder 2 Material']}
            castShadow
            receiveShadow
            position={[-1.41, -41.13, 0]}
            scale={4.29}
          />
          <mesh
            name="Cylinder"
            geometry={nodes.Cylinder.geometry}
            material={materials['Cylinder Material']}
            castShadow
            receiveShadow
            position={[0, -24.65, 0]}
            scale={4.29}
          />
          <mesh
            name="Lathe"
            geometry={nodes.Lathe.geometry}
            material={materials['Lathe Material']}
            castShadow
            receiveShadow
            position={[0, 208.25, 0]}
            rotation={[0, -0.07, 0]}
            scale={4.29}
          />
        </group>
        {/* <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-500}
          shadow-camera-right={500}
          shadow-camera-top={500}
          shadow-camera-bottom={-500}
          position={[362.91, 300, -345.78]}
        /> */}
        
      </group>
    </>
  )
}
