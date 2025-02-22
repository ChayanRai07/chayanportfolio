import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import cartoon from "../images/cartoon-compressed.png";
import "./HomeBannerStyle.css";


export default function HomeBanner({ id }) {
  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(
      '.name',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5 }
    );

    gsap.fromTo(
      '.staticTitle',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 1 }
    );

    gsap.fromTo(
      '.dynamicTitle li',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 1.5 }
    );

    gsap.fromTo(
      '.hrLine',
      { width: 0 },
      { width: '20vw', duration: 1, delay: 1.2 }
    );

    gsap.fromTo(
      '.mask img',
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1, delay: 1.5 }
    );

    gsap.fromTo(
      '.links',
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1, delay: 1.5 }
    );
  }, []);

  return (
    <div className="home h-screen flex flex-col justify-center items-center sm:items-start pb-12" id={id}>
      <div className="content flex flex-col justify-center items-center sm:items-start h-full sm:pl-[15vw] md:pl-[23vw] mb-12">
        <div className="wrapper w-full">
          <div className="name text-lg sm:text-2xl md:text-3xl font-medium tracking-[0.3em] uppercase w-fit pl-1 text-white">
            Chayan Rai
          </div>
          <ul className="dynamicTitle text-[40px] sm:text-[60px] md:text-[80px] font-medium leading-[40px] sm:leading-[60px] md:leading-[80px] w-fit">
            <li className="w-full z-[-1] pt-4">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent hover-flow">
                Software Developer
              </span>
            </li>
          </ul>
          <span className="links flex gap-2.5 mt-4 sm:mt-0">
            <a className="btn bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:opacity-80 hover:scale-105 transition-transform" href="https://www.linkedin.com/in/chayan-rai-87b95222a/" target="_blank" rel="noopener noreferrer">Hire Me</a>
            <a className="btn bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:opacity-80 hover:scale-120 transition-transform" href="https://drive.google.com/file/d/1kwbDEjXAfLHLo-7QEAJBmQxmIKTTwBnI/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Resume</a>
          </span>
        </div>
      </div>
      <div className="mask absolute bottom-0 right-0 z-[-3]">
        <img className="bg h-[40vh] sm:h-[70vh] md:h-[80vh]" src={cartoon} alt="boy-with-laptop" />
      </div>
    </div>
  );
}
