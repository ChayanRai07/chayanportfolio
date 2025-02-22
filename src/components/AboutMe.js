import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/chayan's-pic.png";

export default function AboutMe({ id }) {
  return (
    
      <div className="about-container" id={id}>
        {/* <div className="heading"> About Me</div> */}
        <div className="aboutMe-text">
          <h3>Hey there, 👋</h3>
          I'm <span> Chayan Rai </span>, a final year student pursuing <span>B.Tech in CSE </span> from LIET, Greater Noida, India. My passion is creating user-centric websites and applications with a keen eye for responsiveness, accessibility, and aesthetics. Proficient in <span>frontend development,</span> with tools like <span>React, Angular, HTML, CSS, JavaScript, Tailwind, and GSAP.</span> I ensure designs that are both efficient and appealing.
          <br></br>
          My knowledge extends to 
          <span> data science</span> including data visualization, wrangling, mining, evaluating and working with machine learning models.<br></br>
          I'm eager to <span>expand my skills</span> and take on opportunities that enhance my expertise and impact on innovative projects.
          <br/> <br/>
          Beyond coding, <span>I'm a creator at heart ❤️</span> – whether it's through my lens 📸, sketching, the thrill of sports like table tennis and cricket, or immersing myself in music 🎶, I find joy in expressing myself beyond code. Traveling also fuels my creativity, as I love exploring new places and cultures. 
          These passions keep my mind and body in sync, fueling my creative journey. 
          <br></br>
          <br></br>
          Feel free to <a className='resume' href="https://drive.google.com/file/d/1kwbDEjXAfLHLo-7QEAJBmQxmIKTTwBnI/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">explore my resume.</a>
        </div>
        <div className="profile-photo">
          <div className="heading"> About Me</div>
          <img className="img " src={myProfile} alt="Profile"></img>
        </div>
        <div className="name">Chayan</div>
      </div>
  );
}
