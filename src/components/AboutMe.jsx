import React from 'react'
import {motion} from "framer-motion"

const AboutMe = () => {
  return (
    <motion.div 
    initial={{ y:50, opacity:0.1}}
    whileInView={{ y:0, opacity:1}}
    transition={{ duration:0.5}}
    viewport={{ once:true }}     
    className="flex flex-col w-full h-[320px] justify-center items-center overflow-auto mt-10">
        <div 
      
      className='font-sans text-4xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text p-5'>About Me</div>
        <p className="w-[300px] md:w-[600px] lg:[850px] text-sm md:text-lg text-white font-sans mt-5 flex justify-center items-center text-center"
      >
        I am an 18-year-old software enthusiast with a passion for front-end
        projects. I am proficient in technologies such as React, Tailwind, CSS,
        Bootstrap, and JavaScript, and I develop my projects using these tools.
        I am a team player who enjoys sports and hiking. Additionally, I share
        knowledge about software development and exchange my experiences and
        projects with others by writing articles on Medium.
      </p>
    </motion.div>
  )
}

export default AboutMe