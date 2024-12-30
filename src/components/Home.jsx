import React from "react";
import photo from "../images/manPhotoW.webp";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center overflow-hidden mt-10" id="home">
      <motion.img
        initial={{ y: -75, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.3, delay: 0.2 }}
        src={photo}
        alt="photo"
        className="w-[280px] md:w-[300px] lg:w-[380px] rounded-lg"
      />
      <motion.div 
        initial={{ y: 75, opacity: 0.1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.3, delay: 0.2 }}
      >
      <h2
              
              className="text-5xl mt-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-light"
            >
              Abdullah Eren Evli
            </h2>
            <h3
              
              className="text-3xl mt-4 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-light"
            >
              Front End Developer
            </h3>
            <p 
              
            className="text-center text-lg text-gray-200 mt-4 p-5">
              I am a front-end developer skilled in HTML5, CSS, Tailwind CSS, Bootstrap, JavaScript, React, and Vite.
            </p>

      </motion.div>
      
      <motion.div
        initial={{ y: 75, opacity: 0.1 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.3, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex gap-5 text-center justify-center items-center"
      >
        <button
          className="flex flex-row justify-center items-center gap-2 px-3 w-36 py-2 border-2 rounded-lg border-slate-700 text-lg font-sans hover:scale-110 mt-7 transform transition-transform duration-300 
          "
        >
          <a
            href="https://www.linkedin.com/in/abdullah-eren-evli-a62b932b7/"
            target="_blank" className="flex items-center gap-3"
          >
            About Me
            <FaLinkedin className="text-xl text-blue-400 items-center flex " />
          </a>
        </button>
        <button
          className="flex justify-center items-center gap-2 px-3 w-36 py-2 border-2 rounded-lg border-slate-700 text-lg font-sans hover:scale-110 mt-7 transform transition-transform duration-300 
          "
        >
          <a href="https://github.com/IIArenII" target="_blank" className="flex items-center gap-3">
            Projects
            <FaGithub className="text-xl text-gray-200 items-center flex " />
          </a>
        </button>
      </motion.div>
    </div>
  );
};

export default Home;
