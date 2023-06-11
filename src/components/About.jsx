import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import {fadeIn, textVariant} from '../utils/motion'
import {profile_picture} from '../assets'
import { sectionWrapper } from '../hoc'

const About = () => {
  return (
<>
  <motion.div>
    <h2 className={styles.sectionHeadText}>About Me.</h2>
  </motion.div>

  <motion.div
    variants={fadeIn("right", "spring", 0.1, 1)}
    className="flex items-start justify-end mx-auto mt-10"
  >
<img
  src={profile_picture}
  className="object-cover w-1/3 h-1/3 mr-20 rounded-lg shadow-x1"
  alt="picture"
/>

  <div>
    <motion.p
      className=" text-secondary text-[17px] max-w-3x1 leading-[30px] text-justify"
      variants={fadeIn("", "", 0.1, 1)}
    >
    <span className = {`${styles.heroSubText}`}>
      Creating visually stunning and user-friendly experiences.</span>
    <br/><br/>
    Hello! I'm Jamie Ogundiran, a computer science graduate from the University of Essex. Technology has always been my passion, igniting a fire within me and filling me with boundless enthusiasm. I thrive on coding, front-end development, backend development, and mastering the intricacies of UX/UI. Beyond the digital world, I'm a sports enthusiast too, finding joy in basketball, football, and judo. These sports have taught me the importance of teamwork, resilience, and pushing my limits. My friends often describe me as approachable, outgoing, and someone they can always count on. Building meaningful connections with people is something I truly value. Oh, and let's not forget about fashion! It's my creative outlet, where I blend style with technology. 
    </motion.p>
  </div>
  </motion.div>
</>

  )
}
 
export default  sectionWrapper( About, "about")