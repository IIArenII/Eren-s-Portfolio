import React from 'react'
import photo from '../images/manPhoto.jpg'

const Home = () => {
  return (
    <div className='flex flex-col w-full h-screen justify-center items-center'>
        <img src={photo} alt="photo" className='w-[280px] md:w-[300px] lg:w-[420px] rounded-lg lg:-mt-24 md:-mt-12 -mt-8' />
        <p className='w-[300px] md:w-[600px] lg:[850px] text-sm md:text-lg text-white font-sans mt-12 flex justify-center items-center text-center'>
        I am an 18-year-old software enthusiast with a passion for front-end projects. 
        I am proficient in technologies such as React, Tailwind, CSS, Bootstrap, and JavaScript, 
        and I develop my projects using these tools. I am a team player who enjoys sports and hiking. 
        Additionally, I share knowledge about software development and exchange my experiences and projects with others.
        </p>
    </div>
  )
}

export default Home