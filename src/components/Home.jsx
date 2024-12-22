import React from 'react'
import photo from '../images/manPhotoW.webp'
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Home = () => {
  return (
    <div className='flex flex-col w-full min-h-screen justify-center items-center overflow-auto mt-10'>
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

        <motion.div 
          initial={{ y:75, opacity:0.1 }}
          whileInView={{ y:0, opacity:1 }}
          transition={{ duration:1.3, delay:0.2 }}  
          viewport={{ once:true }}
        className='flex gap-5 text-center justify-center items-center'>
          <button className='flex justify-center items-center gap-2 px-3 w-36 py-2 border-2 rounded-lg border-slate-700 text-lg font-sans hover:scale-110 mt-7
                            transform transition-transform duration-300 
          '><a href="https://www.linkedin.com/in/abdullah-eren-evli-a62b932b7/" target='_blank'>About Me <FaLinkedin className='text-xl text-blue-400 items-center flex '/></a></button>
          <button className='flex justify-center items-center gap-2 px-3 w-36 py-2 border-2 rounded-lg border-slate-700 text-lg font-sans hover:scale-110 mt-7
                            transform transition-transform duration-300 
          '><a  href="https://github.com/IIArenII" target='_blank'>Projects <FaGithub className='text-xl text-gray-200 items-center flex '/></a></button>
        </motion.div>
    </div>
  )
}

export default Home