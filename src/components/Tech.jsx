import React from 'react'
import { motion } from 'framer-motion'
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";

const Tech = () => {
  return (
    <div className='flex flex-col w-full min-h-screen justify-center items-center'>
      <motion.div 
        initial={{ y:50, opacity:0.1}}
        whileInView={{ y:0, opacity:1}}
        transition={{ duration:0.5}}
        viewport={{ once:true }}           
      className='font-sans font-semibold text-4xl'>Technologies</motion.div>
      <motion.div
        initial={{ y:50, opacity:0.1}}
        whileInView={{ y:0, opacity:1}}
        transition={{ duration:0.5}}
        viewport={{ once:true }}
      className='flex flex-wrap gap-10 mt-16'
      
      >
        <BiLogoJavascript className='text-orange-500 text-6xl hover:-translate-y-5 transform transition-transform duration-400 ' />
        <BiLogoReact className='text-blue-500 text-6xl hover:-translate-y-5 transform transition-transform duration-400 ' />
        <BiLogoTailwindCss className='text-blue-300 text-6xl hover:-translate-y-5 transform transition-transform duration-400 ' />
      </motion.div>
    </div>
  )
}

export default Tech