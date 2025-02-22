import React, { useRef } from 'react';
import './ContactFormStyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import cartoon from '../images/cartoon-compressed.png';

export default function ContactForm({ id }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_47mae0d', 'template_hkz8wik', form.current, 'jeBb3eS0vj5Nw6dEs')
      .then((result) => {
          console.log(result.text);
          toast.success('Message sent successfully.', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      }, (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Kindly refresh the page.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      });
  };




  return (
    <div className='contact-window' id={id}>
      <div className="text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">Let's Get in Touch.</div>
      <h4>Discuss a project or just want to say Hi? My inbox is open for all.</h4>
      <div className="contact-container">
        <img src={cartoon} alt='Chayan Rai' className="contact-wrapper-left"></img>        
        <form ref={form} onSubmit={sendEmail} className="contact-wrapper-right">
          <input id='name' type="text" name="name" placeholder='Full Name' className="placeholder-gray-400" required/>
          <input id='email' type="email" name="email" placeholder='Email ID' className="placeholder-gray-400" required />
          <textarea id='message' name="message" rows='5' column='15' placeholder='Share your thoughts and insights here; your feedback means a lot.' className="placeholder-gray-400" required/>
          <button className='btn' id='submitBtn' type="submit" value="Send" >Send Message</button>
          <ToastContainer />
        </form>
        
      </div>
    </div>
  )
}