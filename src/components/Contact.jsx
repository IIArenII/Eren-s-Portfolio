import React, {useRef} from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import {motion} from "framer-motion"


const Contact = () => {
  const form = useRef();

  

  const sendEmail = (e) => {
    e.preventDefault();

    console.log('Public Key:', import.meta.env.VITE_GMAIL_PUBLIC_KEY );

  emailjs
    .sendForm(
      'service_ttmqo47',
      'template_2nkjcsk',
      form.current,
      import.meta.env.VITE_GMAIL_PUBLIC_KEY 
    )
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
};
  return (
    <motion.div 
      initial={{ y:50, opacity:0.1}}
      whileInView={{ y:0, opacity:1}}
      transition={{ duration:0.5}}
      viewport={{ once:true }}     
    className='flex flex-col w-full h-screen -mt-24 justify-center items-center'>
      <h2 className='text-4xl bg-gradient-to-r from-blue-500 to-purple-500  bg-clip-text text-transparent'>Contact With Me</h2>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-7 mt-10 w-[270px] md:w-[500px] lg:w-[820px] justify-center'>

      <label htmlFor="name" className='text-lg font-sans text-gray-200'>Your Name</label>
      <input type="text"  name="from_name"  className='px-3 py-2 rounded-lg text-lg text-black/80' placeholder="Enter Your Name" />

      <label htmlFor="email" className='text-lg font-sans text-gray-200'>Your Email</label>
      <input type="email" name="from_email" className='px-3 py-2 rounded-lg text-lg text-black/80' placeholder="Enter Your Email" />

      <label htmlFor="message" className='text-lg font-sans text-gray-200'>Message...</label>
      <textarea name="message" className='px-3 py-2 rounded-lg text-lg text-black/80' placeholder="Enter Your Message"></textarea>
        <Button type='submit' variant="contained" className='' endIcon={<SendIcon />}>
          Send
        </Button>
      </form>
    </motion.div>
  );
};

export default Contact