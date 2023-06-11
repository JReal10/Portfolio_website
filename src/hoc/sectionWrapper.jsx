import {motion} from 'framer-motion'
import { styles } from '../styles'
import {staggerContainer} from '../utils/motion';

const sectionWrapper = (Component, idName) => function HOC() { 
  return (
    <motion.section
    variants = {staggerContainer()}
    initial = "hidden"
    whileInView = "show"
    viewport={{once: true, amount: 0.25}}
    className = {`${styles.padding} max-7x1 mx-auto relative z-0`}>
      <Component/>
      <span className = "hash-span" id = {idName}>&nbsp;</span>
    </motion.section>
  )
}

export default sectionWrapper