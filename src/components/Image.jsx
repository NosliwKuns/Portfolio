import * as THREE from "three";
import { Suspense, useRef, useState, useEffect } from "react";
import { extend, useThree, useFrame } from "@react-three/fiber";
import {
  useTexture,
  shaderMaterial,
  useScroll,
  MeshDistortMaterial,
} from "@react-three/drei";
import { a, useSpring, animated, config } from "@react-spring/three";
import { useIntersect, Image, Scroll, Html } from "@react-three/drei";
import state from "../store";
import { useInView } from "react-intersection-observer";

export const ImageFadeMaterial = shaderMaterial(
  {
    effectFactor: 1.2,
    dispFactor: 0,
    tex: undefined,
    tex2: undefined,
    disp: undefined,
  },
  ` varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,
  ` varying vec2 vUv;
    uniform sampler2D tex;
    uniform sampler2D tex2;
    uniform sampler2D disp;
    uniform float hasTexture;
    uniform float _rot;
    uniform float dispFactor;
    uniform float effectFactor;
    void main() {
      vec2 uv = vUv;
      vec4 disp = texture2D(disp, uv);
      vec2 distortedPosition = vec2(uv.x, uv.y + dispFactor * (disp.r*effectFactor));
      vec2 distortedPosition2 = vec2(uv.x, uv.y - (1.0 - dispFactor) * (disp.r*effectFactor));
      vec4 _texture = texture2D(tex, distortedPosition);
      vec4 _texture2 = texture2D(tex2, distortedPosition2);
      vec4 finalTexture = mix(_texture, _texture2, dispFactor);
      gl_FragColor = finalTexture;
      #include <tonemapping_fragment>
      #include <encodings_fragment>
    }`
);

extend({ ImageFadeMaterial });
a.ImageFadeMaterial = a("imageFadeMaterial");

function Images({
  url,
  scale,
  rotation,
  position,
  onClick,
  visible,
  ...props
}) {
  const ref = useRef();

  const [texture1, texture2, dispTexture] = useTexture([
    url[0],
    url[1],
    url[0],
  ]);
  const [hovered, setHover] = useState(false);
  const prop = useSpring({
    dispFactor: hovered ? 1 : 0,
    config: config.wobbly,
  });

  const { height } = useThree((state) => state.viewport);

  // const visible = useRef(false);
  // const refs = useIntersect((isVisible) => (visible.current = isVisible));
  const data = useScroll();

  const spring = useSpring({
    scale: visible ? scale : [0, scale[1], scale[2]],
    position: visible ? position : [-15, position[1], position[2]],
    config: {
      mass: 7,
      tension: 200,
      friction: 50,
      precision: 0.0001,
    },
  });

  return (
    <Float amplitude={0.3} speed={2}>
      <a.mesh
        onPointerMove={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
        scale={scale}
        rotation={rotation}
        position={spring.position}
      >
        <planeGeometry />
        <a.ImageFadeMaterial
          ref={ref}
          tex={texture1}
          tex-encoding={THREE.sRGBEncoding}
          tex2={texture2}
          tex2-encoding={THREE.sRGBEncoding}
          disp={dispTexture}
          disp-encoding={THREE.sRGBEncoding}
          toneMapped={false}
          {...prop}
        />
      </a.mesh>
    </Float>
  );
}

function Float({ speed = 1, amplitude = 1, ...props }) {
  const ref = useRef();
  useFrame(
    ({ clock }) =>
      (ref.current.position.y = amplitude * Math.sin(clock.elapsedTime * speed))
  );

  return <group ref={ref} {...props} />;
}

const Imamages = ({
  pageScroll,
  inViewPageTwo,
  inViewPageThree,
  inViewPageFour,
  inViewPageFive,
}) => {
  const { width: w, height: h } = useThree((state) => state.viewport);
  const data = useScroll();
  const one = useRef();

  // useEffect(() => {
  //   data.scroll.current = 0.2
  // },[])
  // console.log(state,'jey');

  console.log(one, 'ha')

  return (
    <Scroll>
      <Images
        ref={one}
        scale={[4, h / 1.1, 1]}
        position={[w / 3, -h * 1, -1]}
        rotation={[0, 0.1, 0]}
        url={state.images.about}
        visible={inViewPageTwo}
      />
      <Images
        scale={[w / 3.5, w / 3, 1]}
        position={[w / 4, -h * 2, 0]}
        rotation={[0, -0.6, 0]}
        url={state.images.mangaCoffee}
        visible={inViewPageThree}
      />
      <Images
        scale={[w / 3.5, w / 3, 1]}
        position={[w / 4, -h * 3, 0]}
        rotation={[-0.5, -0.9, -0.5]}
        url={state.images.mangaCoffee}
        visible={inViewPageFour}
      />
      <Images
        scale={[w / 3.5, w / 3, 1]}
        position={[w / 4, -h * 4, 0]}
        rotation={[-0.5, -0.9, -0.5]}
        url={state.images.about}
        visible={inViewPageFive}
      />
      {/* <Images
        scale={[w / 3.5, w / 3, 1]}
        position={[w / 4, -h * 5, 0]}
        rotation={[-0.5, -0.9, -0.5]}
        url={state.images.about}
        visible={six}
      /> */}
    </Scroll>
  );
};

export { Imamages, Float };
