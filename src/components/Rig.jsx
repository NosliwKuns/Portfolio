import * as THREE  from 'three'
import { useThree } from '@react-three/fiber';
import { CameraShake } from '@react-three/drei';
import { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';

const Rig = () => {
  const [vec] = useState(() => new THREE.Vector3());
  const { camera, mouse, size } = useThree();
  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * .5, 0, 5), 0.05)
  }); 

  
  return (
    <CameraShake
      maxYaw={0.01}
      maxPitch={0.01}
      maxRoll={0.01}
      yawFrequency={0.5}
      pitchFrequency={0.5}
      rollFrequency={0.4}
    />
  );
};

export default Rig;