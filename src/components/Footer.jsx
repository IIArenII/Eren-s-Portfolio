import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
<div className="flex justify-around flex-row items-center bg-blue-950 text-white text-center w-full p-5">
  {/* Logo Section */}
  <h3 className="sm:block hidden font-semibold text-4xl cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4 sm:mb-0">
    Aren
  </h3>

  <p className=" w-full sm:w-auto flex text-sm text-center items-center justify-center">
    © Created by Abdullah Eren Evli
  </p>

  {/* Accounts Section */}
  <div className="flex flex-col items-center sm:items-center mb-4 sm:mb-0">
    <div className="sm:flex hidden gap-6 mt-3">
      <a
        href="https://github.com/IIArenII"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl hover:text-gray-300"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/abdullah-eren-evli-a62b932b7/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl hover:text-gray-300"
      >
        <FaLinkedin />
      </a>
    </div>
  </div>

  

</div>

  )
}

export default Footer