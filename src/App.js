import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import SkillCard from './components/SkillCard'
import ContactForm from './components/ContactForm'
import AnimatedCursor from "react-animated-cursor";
import Profiles from "./components/Profiles"
import Education from "./components/Education"
import Experience from './components/Experience';

//import { useEffect, useRef , useState} from "react";


function App() {
  // const audioRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(false);

  // useEffect(() => {
  //   // Automatically play music when the app loads
  //   if (audioRef.current) {
  //     audioRef.current.play().catch((error) => {
  //       console.log("Autoplay blocked:", error);
  //     });
  //   }
  // }, []);

  // const toggleMusic = () => {
  //   if (audioRef.current) {
  //     if (isPlaying) {
  //       audioRef.current.pause();
  //     } else {
  //       audioRef.current.play();
  //     }
  //     setIsPlaying(!isPlaying);
  //   }
  // };

  return (
    <>
    <AnimatedCursor
      color="#fff"
      innerSize={8}
      outerSize={50}
      innerScale={1}
      outerScale={2.2}
      outerAlpha={0}
      outerStyle={{
        background: '#ffffff',
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        backgroundColor: '#F94892'
      }}
    />
    
    <div>
    {/* <audio ref={audioRef} src="https://www.bensound.com/bensound-music/bensound-sunny.mp3" loop autoPlay/>
       */}
      {/* Fallback Button */}
      {/* <button
        onClick={toggleMusic}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "50%",
          backgroundColor: isPlaying ? "#F94892" : "light gray",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        title={isPlaying ? "Stop Music" : "Play Music"}
      >
        {isPlaying ? "🔊" : "🔇"}
      </button> */}

      <Navbar />
      <HomeBanner id = "home"/>
      <AboutMe id = 'about' />
      <SkillCard id = 'skills' />
      <Experience id="experience" />
      <ProjectCard id = 'project'/>
      <Profiles id = 'profiles'/>
      <Education id = 'Education'/>
      <ContactForm id = 'contact' />
      <Footer />
    </div>
    </>
  );
}

export default App;
