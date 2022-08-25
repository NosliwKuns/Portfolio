import React, { useEffect, useRef } from "react";
import { Scroll } from "@react-three/drei";
import { animated, useSpring, easings } from "@react-spring/web";
import { events, useThree } from "@react-three/fiber";
import { BiPlusMedical } from "react-icons/bi";

const HtmlContent = ({
  refPageTwo,
  inViewPageTwo,
  refPageThree,
  inViewPageThree,
  refPageFour,
  inViewPageFour,
  refPageFive,
  inViewPageFive,
}) => {

  const ref = useRef();

  const parallax = (e) => {
    let movingValue = ref.current.clientWidth;
    let x = (window.innerWidth - e.pageX * 2) / 6;
    let y = (window.innerHeight - e.pageY * 2) / 2;
    ref.current.style.transform = `translateX(${x}px)`;
  };

  const { transform, opacity } = useSpring({
    transform: inViewPageTwo ? 'translateX(0)' : 'translateX(100vw)',
    config: {
      duration: 2000,
      easing: easings.easeInOutBack,
    },
    loop: { reverse: true },
  })
  const { camera } = useThree();

  // useEffect(() => {
  //   inViewPageTwo ? camera.position.y = 20 : ''
  // })

  // useEffect(() => {
  //   inViewPageThree ? camera.position.y = -20 : ''
  // })
  
  console.log(camera, 'camera')

  return (
    <Scroll className="web" html style={{ width: "100%" }}>
      <div ref={refPageTwo} className="page two">
        <div className="text-about">
          <h2 className={inViewPageTwo ? "trans" : "hidden"}>ABOUT</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            incidunt consequatur quae labore sunt fugiat accusamus voluptatem
            blanditiis. Vel aliquam sapiente veniam ipsam nam sequi. Delectus
            praesentium blanditiis nihil sunt!
          </p>
          <button>Resume</button>
        </div>
        <animated.div className="lovies" style={{transform}}>
          <h3>Art</h3>
          <h3>Design</h3>
          <h3>Technology</h3>
        </animated.div>
        <animated.div className="lovies l-shadow" style={{transform}}>
          <h3>Art</h3>
          <h3>Design</h3>
          <h3>Technology</h3>
        </animated.div>
        <animated.div className="lovies w-shadow" style={{transform}}>
          <h3>Art</h3>
          <h3>Design</h3>
          <h3>Technology</h3>
        </animated.div>
        {/* <span className="crux-section-about one"><BiPlusMedical size={55} color={'#fff'} /></span> */}
        {/* <div className="rectangle"/> */}
        {/* <div className="r-left"/> */}
        {/* <div className="r-down"/> */}
      </div>
      <div ref={refPageThree} className="page three">
        <div>
          <h2 className={inViewPageThree ? "trans" : "hidden"}>PROJECTS</h2>
          <h3 className="project-title">Manga Coffee</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            velit quisquam quis dolore obcaecati eum exercitationem rerum? Eum,
            amet aliquid asperiores consequuntur eaque reprehenderit quae
            perferendis pariatur tempora numquam eos!
          </p>
        </div>
      </div>
      <div ref={refPageFour} className="page four">
        02
      </div>
      <div ref={refPageFive} className="page five">
        03
      </div>
      <div className="page six">04</div>
      <div>thoth</div>
      <div>thoth</div>
    </Scroll>
  );
};

export default HtmlContent;
