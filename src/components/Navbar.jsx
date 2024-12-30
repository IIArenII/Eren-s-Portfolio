import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-scroll';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [ scrolled, setScrolled ] = useState(false);

    const openMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 70) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  
  return (
    
    <div className={`fixed top-0 z-20 w-full mx-auto flex py-3 justify-between px-4 md:px-8 lg:px-16 text-white items-center border-b-2 border-b-gray-700 ${
      scrolled ? "bg-gray-800/70 backdrop-blur-md" : "bg-transparent"
    } transition-all duration-300`}>
        <div>  
            <h2 className='font-semibold text-4xl flex items-center cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>Aren</h2>
        </div>
        <button
          onClick={openMenu}
          className="text-gray-400 hover:text-white text-xl focus:outline-none sm:hidden"
        >
          {isOpen ? "" : "☰"}
        </button>
        <ul className='hidden sm:flex items-center text-base lg:text-lg gap-9'>
                <li className='hover:text-gray- cursor-pointer'>
                  <Link to="home" spy={true} smooth={true} offset={-150}  duration={500}>Home</Link>                         
                </li>
                <li className='hover:text-gray- cursor-pointer'>
                    <Link to="about" smooth={true} offset={-150} duration={500}>About</Link>
                </li>
                <li className='hover:text-gray- cursor-pointer'>
                    <Link to="projects" smooth={true} offset={-50} duration={500}>Projects</Link>
                </li>
                <li className='hover:text-gray- cursor-pointer'>
                    <Link to="tech" smooth={true} offset={-150} duration={500}>Tech</Link>
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
             className={`rounded-lg fixed z-40 top-0 right-0 h-screen w-56 bg-slate-800 text-white shadow-lg transition-transform duration-300 sm:hidden transform ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }  `}
        > 
            <button
            onClick={openMenu}
            className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl focus:outline-none"
            >
          ✖
        </button>
       <ul className="flex flex-col z-50 min-h-screen items-start gap-6 p-6 mt-12 bg-slate-800">
                    <li className='hover:text-gray-300'>
                        <Link className='cursor-pointer' to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className='hover:text-gray-300'>
                        <Link className='cursor-pointer' to="about" smooth={true} duration={500}>About</Link>
                    </li>
                    <li className='hover:text-gray-300'>
                        <Link className='cursor-pointer' to="projects" smooth={true} duration={500}>Projects</Link>
                    </li>
                    <li className='hover:text-gray-300'>
                        <Link className='cursor-pointer' to="tech" smooth={true} duration={500}>Tech</Link>
                    </li>
                    <li className='hover:text-gray-300'>
                        <Link className='cursor-pointer' to="contact" smooth={true} duration={500}>Contact</Link>
                    </li>
                
        <div className="flex gap-6 mt-6 px-6">
          <a  href="https://github.com/IIArenII" target='_blank' className="text-2xl hover:text-gray-300">
            <FaGithub />
          </a>
          <a  href="https://www.linkedin.com/in/abdullah-eren-evli-a62b932b7/" target='_blank' className="text-2xl hover:text-gray-300">
            <FaLinkedin/>
          </a>
        </div>
      </ul>
      </div>
    </div>
  );
};

export default Navbar