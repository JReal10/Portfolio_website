import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { pin_icon } from '../assets'

const Hero = () => {
  return (
    <section className = "relative w-full h-screen mx-auto">
      <div className = {`${styles.paddingX} absolute inset-0 top-[180px] max-w-7x1 mx-auto items-start gap-10`}>

        <div className='flex flex-col justify-center items-center mt-5'>
          <h1 className = {`${styles.heroHeadText} text-tertiary`}>HI!</h1>
          <h1 className = {`${styles.heroHeadText} text-tertiary`}>I'M JAMIE</h1>
          <p className = {`${styles.heroSubText} text-center mt-2 text-secondary`}>Frontend Developer | Backend Developer | Mobile Developer </p>
          <div className="flex items-center">
          <img src={pin_icon} alt="logo" className="w-8 h-8 object-contain" />
          <p className={`${styles.heroSubText} mt-2 text-secondary ml-2`}>Based In London</p>
        </div>
        </div>

      </div>
      <div className = "absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href = "#work">
            <div className = "w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev 
            animate ={{
              y: [0,24,0]
            }}
            transition = {{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className = "w-3 h-3 rounded-full bg-secondary mb-1"/>
            </div>
          </a>
        </div>
        <div className = "absolute xs:bottom-10 bottom-32 w-full flex justify-left items-start">
        </div> 
    </section>
  )
}

export default Hero