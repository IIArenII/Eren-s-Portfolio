import React, { useState } from 'react'
import { FaGithub, FaMedium } from "react-icons/fa";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(!isOpen);
    }


  return (
    <div className='flex w-full justify-between items-center px-4 md:px-9 lg:px-16 border-b-2 border-b-gray-700 py-5'>
        <div> 
            <h2 className='text-4xl flex items-center cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>Aren</h2>
        </div>
        <button
          onClick={openMenu}
          className="text-gray-400 hover:text-white text-xl focus:outline-none sm:hidden"
        >
          {isOpen ? "" : "☰"}
        </button>
        <div className='hidden sm:flex items-center text-xl gap-6'>
            <a href="">Home</a>
            <a href="">Tech</a>
            <a href="">Contact</a>
        </div>
        <div className='hidden sm:flex gap-3 text-2xl'>
            <a href=""><FaGithub /></a>
            <a href=""><FaMedium /></a>
        </div>
        <div
            className={`fixed top-0 right-0 h-full w-56 bg-gray-800 text-white shadow-lg  ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 z-50 sm:hidden transform`}
        >
            <button
            onClick={openMenu}
            className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl focus:outline-none"
            >
          ✖
        </button>
        <div className="flex flex-col items-start gap-6 p-6 mt-12">
          <a href="" className="text-xl hover:text-gray-300">
            Home
          </a>
          <a href="" className="text-xl hover:text-gray-300">
            Tech
          </a>
          <a href="" className="text-xl hover:text-gray-300">
            Contact
          </a>
        </div>
        <div className="flex gap-6 mt-6 px-6">
          <a href="" className="text-2xl hover:text-gray-300">
            <FaGithub />
          </a>
          <a href="" className="text-2xl hover:text-gray-300">
            <FaMedium />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar