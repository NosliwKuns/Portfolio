import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useIntersect, Image, Scroll, Html } from '@react-three/drei'
import { useTexture, shaderMaterial } from "@react-three/drei"
import { useEffect } from 'react';
import { useState } from 'react';
import { useScroll } from '@react-three/drei';
import { a, useSpring } from "@react-spring/three"
import { Canvas, extend } from "@react-three/fiber"

export const ImageFadeMaterial = shaderMaterial(
  {
    effectFactor: 1.2,
    dispFactor: 0,
    tex: undefined,
    tex2: undefined,
    disp: undefined
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
)

extend({ ImageFadeMaterial })
a.ImageFadeMaterial = a("imageFadeMaterial")

function Item({ url, scale, ...props }) {
  const visible = useRef(false)
  const ref = useIntersect((isVisible) => (visible.current = isVisible))
  const { height } = useThree((state) => state.viewport)
  const data = useScroll()
  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height / 2 + 1, 4, delta)
    ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, visible.current ? 1 : 1.5, 4, delta)
    ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, Math.max(0, 1 - data.delta * 1000), 4, delta)
  });
  return (
    <a.group {...props}>
      <Image ref={ref} scale={scale} url={url}  />
      
    </a.group>
  )
}

function Items() {
  const { width: w, height: h } = useThree((state) => state.viewport)
  return (
    <Scroll>
      {/* <Item url="https://res.cloudinary.com/dbqlsilt2/image/upload/v1659641695/a/one-piece-manga-wallpaper_611916315_xvunkd.jpg" scale={[w / 2, w / 2, 1]} position={[w / 4, -h * 1, 0]} rotation={[0, -.9 ,0]} />
      <Item url="https://res.cloudinary.com/dbqlsilt2/image/upload/v1660540552/a/original_fnad9g.jpg" scale={[w / 5, w / 5, 1]} position={[w / 10, -h * 1.75, 0]} rotation={[0, -.9 ,0]} />
      <Item url="https://res.cloudinary.com/dbqlsilt2/image/upload/v1659641695/a/one-piece-manga-wallpaper_611916315_xvunkd.jpg" scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2, 0]} rotation={[0, -.9 ,0]} />
      <Item url="https://res.cloudinary.com/dbqlsilt2/image/upload/v1659641695/a/one-piece-manga-wallpaper_611916315_xvunkd.jpg" scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 2.6, 0]} rotation={[0, -.9 ,0]} />
      <Item url="https://res.cloudinary.com/dbqlsilt2/image/upload/v1659641695/a/one-piece-manga-wallpaper_611916315_xvunkd.jpg" scale={[w / 2, w / 2, 1]} position={[w / 4, -h * 3.1, 0]} rotation={[0, -.9 ,0]} />
      <Item url="https://res.cloudinary.com/dbqlsilt2/image/upload/v1659641695/a/one-piece-manga-wallpaper_611916315_xvunkd.jpg" scale={[w / 2.5, w / 2, 1]} position={[-w / 6, -h * 4.1, 0]} rotation={[0, -.9 ,0]} /> */}
    </Scroll>
  )
}

export default Items;


//https://res.cloudinary.com/dbqlsilt2/image/upload/v1659641695/a/one-piece-manga-wallpaper_611916315_xvunkd.jpg
