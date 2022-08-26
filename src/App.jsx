import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Stars,
  Loader,
  ScrollControls,
  Scroll,
  useScroll,
  Preload,
  Sparkles,
  Effects,
  BakeShadows,
} from "@react-three/drei";
import Model from "./Model-animated";
import { Portal } from "./components/Portal";
import * as THREE from "three";
import Items from "./components/Items";
import Content from "./components/Content";
import state from "./store";
import { Particles } from "./components/Particles";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "@react-spring/web";
import { Imamages } from "./components/Image";
import ModelShip from "./components/Scene";
import Planets from "./components/Planets";
import NavBar from "./components/NavBar";
import Cursor from "./components/Cursor";
import Rig from "./components/Rig";
import HtmlContent from "./components/HtmlContent";
import { UnrealBloomPass } from "three-stdlib";
import { Pointing } from "./components/Pointing/index";
import { LittleIsland } from "./components/LittleIsland/index";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import Video from "./components/Video/index";

// extend({ UnrealBloomPass });

const StarsRotate = () => {
  const stars = useRef();
  useFrame(() => (stars.current.rotation.y += 0.002));
  return (
    <>
      <Stars
        ref={stars}
        /* radius={500} depth={50} count={1000}  */ factor={3}
        saturation={1}
        count={1000}
      />
    </>
  );
};

const App = () => {

  const [refPageOne, inViewPageOne] = useInView({
    threshold: 0.5,
  });
  
  const [refPageTwo, inViewPageTwo] = useInView({
    threshold: 0.4,
    delay: 700,
    trackVisibility: true,
    rootMargin: '200px',
  });

  const [refPageThree, inViewPageThree] = useInView({
    threshold: 0.4,
    delay: 700,
    trackVisibility: true,
    rootMargin: '200px',
  });

  const [refPageFour, inViewPageFour] = useInView({
    threshold: 0.4,
    delay: 700,
    trackVisibility: true,
  });

  const [refPageFive, inViewPageFive] = useInView({
    threshold: 0.4,
  });

  const [refPageSix, inViewPageSix] = useInView({
    threshold: 0.4,
  });

  // inView
  //   ? (document.body.style.background = "#124FAC")
  //   : two
  //   ? (document.body.style.background = "tomato")
  //   : four
  //   ? (document.body.style.background = "teal")
  //   : six
  //   ? (document.body.style.background = "gray")
  //   : (document.body.style.background = "#171720 80%");

  const [pageScroll, setPageScroll] = useState(0);

  const conditional = inViewPageTwo || inViewPageThree || inViewPageFour || inViewPageFive;



  // window.addEventListener('mousemove', (e) => {
  //   setCursorX(e.pageX);
  //   setCursorY(e.pageY);
  // })

  const scale = Array.from({ length: 50 }, () => 0.5 + Math.random() * 4);

  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth > 768 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addListener(setMQuery);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeListener(setMQuery);
  }, []);

  console.log(mQuery, 'boolean')

  return (
    <>
      <Cursor />
      {/* <div className="cursor" style={{left: cursorX + 'px', top: cursorY + 'px'}}></div> */}
      {/* <NavBar setPageScroll={setPageScroll} /> */}
      <div className="bg" />
      <div className="line y" />
      <div className="line x" />
      <div className="line-down" />
      <h1
        className={
          !conditional ? "t-greeting t-shadow" : "t-greeting t-shadow hide"
        }
      >
        Hi, <span style={{ fontSize: "0.3em" }} />
        <br />
        I'm Antoni
      </h1>

      <h1
        className={
          !conditional ? "t-greeting t-stroke" : "t-greeting t-stroke hide"
        }
      >
        Hi, <span style={{ fontSize: "0.3em" }} />
        <br />
        I'm Antoni
      </h1>

      <h1
        className={
          !conditional
            ? "t-center animated-shadow"
            : "t-center animated-shadow hide"
        }
      >
        <span>Front-End</span>
        <span style={{ fontSize: "0.3em" }} />
        <br />
        Developer
      </h1>

      <h1 className="t-side left t-shadow-white">DESIGNER</h1>
      <h1 className="t-side left t-stroke">DESIGNER</h1>
      <h1 className="t-side right t-shadow-white">{"<CODER>"}</h1>
      <h1 className="t-side right t-stroke">{"<CODER>"}</h1>
      <div className={!conditional ? "mouse-scroll" : "mouse-scroll hide"}>
        <div />
      </div>
      <Canvas
        dpr={[1, 1 ]}
        // linear
        // shadows
        gl={{
          outputEncoding: THREE.sRGBEncoding,
          // toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 0.4,
        }}
      >
        <fog attach="fog" args={["fff", 10, 30]} />
        <ambientLight intensity={0.75} color={"#fff"} />
        <directionalLight
          castShadow
          position={[2.5, 2, -15]}
          intensity={3}
          color={"#8400ff"}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          // shadow-camera-far={50}
          // shadow-camera-left={-10}
          // shadow-camera-right={10}
          // shadow-camera-top={10}
          // shadow-camera-bottom={-10}
        />
        <pointLight
          position={[-15, -0.1, -18]}
          color="tomato"
          intensity={1.5}
        />
        <PerspectiveCamera makeDefault position={[-6, 0, 0]} fov={72}>
          <pointLight intensity={4} color="purple" position={[-15, -25, 10]} />

          <spotLight
            castShadow
            intensity={4}
            angle={2}
            color={"purple"}
            penumbra={1}
            position={[-25, 20, 15]}
            shadow-mapSize={[1024, 1024]}
            // shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
        <Environment preset={"sunset"} />
        {/* <Effects disableGamma>
          <unrealBloomPass threshold={2} strength={1.0} radius={0.5} />
        </Effects> */}
        {/* <BakeShadows /> */}
        { mQuery.matches &&
          <OrbitControls
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enablePan={false}
            enableZoom={false}
            makeDefault
          />
        }

        <StarsRotate />
        <ScrollControls offset={2} damping={8} pages={6}>
          <Suspense fallback={null}>
          <Scroll>
            <Sparkles
              count={scale.length}
              size={scale}
              position={[0, 0, 0]}
              scale={[4, 1.5, 4]}
              speed={0.5}
            />
            <ModelShip inViewPageTwo={inViewPageTwo} inViewPageThree={inViewPageThree} />
            {/* <Planets position={[0, -2, 0]} /> */}
            <LittleIsland />

            {/* <Particles /> */}
          </Scroll>
          {/* <Preload all /> */}
          </Suspense>
          {/* <Items /> */}
          <Rig />
          <HtmlContent
            refPageTwo={refPageTwo}
            inViewPageTwo={inViewPageTwo}
            refPageThree={refPageThree}
            inViewPageThree={inViewPageThree}
            refPageFour={refPageFour}
            inViewPageFour={inViewPageFour}
            refPageFive={refPageFive}
            inViewPageFive={inViewPageFive}
          />
          <Imamages
            pageScroll={pageScroll}
            inViewPageTwo={inViewPageTwo}
            inViewPageThree={inViewPageThree}
            inViewPageFour={inViewPageFour}
            inViewPageFive={inViewPageFive}
          />
        </ScrollControls>
        <Preload all />
      </Canvas>
      <div className="layer" />
      <div className="contact">
        <BsLinkedin size={28} />
        <BsGithub size={28} />
        <FaTwitterSquare size={32} />
      </div>
      <Loader />
    </>
  );
}

export default App;
