import { useAspect } from "@react-three/drei";
import { useEffect, useState } from "react";
import * as THREE from "three";

const Video = ({scale}) => {
  // const scale = useAspect(1920, 1080, 0.245);
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "https://res.cloudinary.com/dbqlsilt2/video/upload/v1660944341/a/pexels-rostislav-uzunov-5680034_i36tcp.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );

  useEffect(() => void video.play(), [video]);

  return (
    <mesh scale={[3.2 , 2, 2]}>
      <planeGeometry />
      <meshBasicMaterial toneMapped={true} side={THREE.DoubleSide}>
        <videoTexture
          attach="map"
          args={[video]}
          encoding={THREE.sRGBEncoding}
        />
      </meshBasicMaterial>
    </mesh>
  );
};

export default Video;
