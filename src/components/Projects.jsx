import React from 'react'
import {motion} from "framer-motion"
import photo1 from '../images/project1.png'
import photo2 from '../images/project2.png'
import photo3 from '../images/project3.png'

const Projects = () => {
  return (
    <div className='max-w-[800px] flex justify-center items-center mx-auto h-[410px]'>
          
    <motion.div 
    initial={{ y:50, opacity:0.1}}
    whileInView={{ y:0, opacity:1}}
    transition={{ duration:0.5}}
    viewport={{ once:true }}     
    className="flex flex-col w-full h-3/5 justify-center items-center overflow-auto mt-10">
        <div className='font-sans text-4xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text p-5'>My Projects</div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-8 justify-items-center items-center overflow-hidden ">

        <img src={photo1} className="w-[150px] md:w-[300px] lg:[400px] text-sm md:text-lg border-2 
        border-gray-800 hover:scale-105 transform transition-transform duration-300 rounded-lg text-white font-sans mt-5 flex justify-center items-center text-center"
        />
       
       <img src={photo2} className="w-[150px] md:w-[300px] lg:[400px] text-sm md:text-lg border-2 
        border-gray-800 hover:scale-105 transform transition-transform duration-300 rounded-lg text-white font-sans mt-5 flex justify-center items-center text-center"
        />

        <img src={photo3} className="w-[150px] md:w-[300px] lg:[400px] text-sm md:text-lg border-2 
        border-gray-800 hover:scale-105 transform transition-transform duration-300 rounded-lg text-white font-sans mt-5 flex justify-center items-center text-center"
        />
    </div>
    </motion.div>
  
    </div>
  )
}

export default Projects