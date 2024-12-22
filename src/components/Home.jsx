import React from 'react'
import photo from '../images/manPhoto.jpg'
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className='flex flex-col w-full min-h-screen justify-center items-center overflow-auto'>
        <motion.img 
          initial={{ y:-75, opacity:0 }}
          animate={{ y:0, opacity:1 }}
          transition={{ duration:1.3, delay:0.2 }}
          
        
        src={photo} alt="photo" className='w-[280px] md:w-[300px] lg:w-[420px] rounded-lg' />
        <motion.h2 
          initial={{ y:75, opacity:0.1 }}
          animate={{ y:0, opacity:1 }}
          transition={{ duration:1.3, delay:0.2 }}

        className='text-5xl mt-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-light'>Abdullah Eren Evli</motion.h2>
        <motion.h3 
          initial={{ y:75, opacity:0.1 }}
          animate={{ y:0, opacity:1 }}
          transition={{ duration:1.3, delay:0.2 }}

        className='text-3xl mt-4 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-light'>Front End Developer</motion.h3>
        <motion.p 
          initial={{ y:75, opacity:0.1 }}
          animate={{ y:0, opacity:1 }}
          transition={{ duration:1.3, delay:0.2 }}          
        
        className='w-[300px] md:w-[600px] lg:[850px] text-sm md:text-lg text-white font-sans mt-5 flex justify-center items-center text-center'>
        I am an 18-year-old software enthusiast with a passion for front-end projects. 
        I am proficient in technologies such as React, Tailwind, CSS, Bootstrap, and JavaScript, 
        and I develop my projects using these tools. I am a team player who enjoys sports and hiking. 
        Additionally, I share knowledge about software development and exchange my experiences and projects with others by writing articles on Medium.
        </motion.p>
    </div>
  )
}

export default Home