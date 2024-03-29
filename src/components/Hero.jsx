import React, { Suspense } from 'react';
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import Test from './Test'
import Loader from './Loader';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto overflow-hidden'>
      <div 
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div
          className='flex flex-col justify-center items-center mt-5'
        >
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm 
            <span className='text-[#915eff]'> Antoni</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden'/>
            interfaces and web aplications
          </p>
        </div>

      </div>
      {/* <div className='absolute h-screen w-full'> */}
        {/* <Suspense fallback={'loading'}>
          <Test />
        </Suspense> */}
        <img className='absolute w-[100%] scale-[2] bottom-0 left-1/2 -translate-y-1/2  -translate-x-1/2 md:scale-100 md:-translate-y-0 lg:h-[65vh] lg:w-auto' src='https://res.cloudinary.com/dbqlsilt2/image/upload/v1683354403/my-space_ftjo2c.webp' />
      {/* </div> */}
      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero