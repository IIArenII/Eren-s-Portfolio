import React, { useState } from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-scroll';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleScroll = () => {
      // Scroll down by 300px
      window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className='flex w-full justify-between items-center px-4 md:px-9 lg:px-16 border-b-2 border-b-gray-700 py-5'>
        <div> 
            <h2 className='font-semibold text-4xl flex items-center cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>Aren</h2>
        </div>
        <button
          onClick={openMenu}
          className="text-gray-400 hover:text-white text-xl focus:outline-none sm:hidden"
        >
          {isOpen ? "" : "☰"}
        </button>
        <ul className='hidden sm:flex items-center text-xl gap-9'>
                <li className='hover:text-gray- cursor-pointer'>
                    <Link to="home" smooth={true} onClick={handleScroll} duration={500}>Home</Link>
                </li>
                <li className='hover:text-gray- cursor-pointer'>
                    <Link to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li className='hover:text-gray- cursor-pointer'>
                    <Link to="projects" smooth={true} duration={500}>Projects</Link>
                </li>
                <li className='hover:text-gray- cursor-pointer'>
                    <Link to="tech" smooth={true} duration={500}>Tech</Link>
                </li>
                <li className='hover:text-gray- cursor-pointer'>
                    <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>
        <div className='hidden sm:flex gap-3 text-2xl'>
            <a href="https://github.com/IIArenII" target='_blank' className=' hover:text-gray-300'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/abdullah-eren-evli-a62b932b7/" target='_blank' className=' hover:text-gray-300'><FaLinkedin /></a>
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
        <ul className="flex flex-col items-start gap-6 p-6 mt-12">
                    <li className='hover:text-gray-300'>
                        <Link to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className='hover:text-gray-300'>
                        <Link to="about" smooth={true} duration={500}>About</Link>
                    </li>
                    <li className='hover:text-gray-300'>
                        <Link to="projects" smooth={true} duration={500}>Projects</Link>
                    </li>
                    <li className='hover:text-gray-300'>
                        <Link to="tech" smooth={true} duration={500}>Tech</Link>
                    </li>
                    <li className='hover:text-gray-300'>
                        <Link to="contact" smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>
        <div className="flex gap-6 mt-6 px-6">
          <a  href="https://github.com/IIArenII" target='_blank' className="text-2xl hover:text-gray-300">
            <FaGithub />
          </a>
          <a  href="https://www.linkedin.com/in/abdullah-eren-evli-a62b932b7/" target='_blank' className="text-2xl hover:text-gray-300">
            <FaLinkedin/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar