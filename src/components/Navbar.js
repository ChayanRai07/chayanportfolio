import React, { useState } from "react";
import "./NavbarStyle.css";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { SiLeetcode , SiGmail } from "react-icons/si";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleCLick = () => setClick(!click);

  return (
    <nav className="header">
      <div className="logo">
        <Link 
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={30}
        >
          <div className="logo-img">
            <span className="blink">&lt;</span>
            <span>&#47;</span>CR<span className="blink">&gt;</span>
          </div>
        </Link>
      </div>
      <ul
        className={click ? "nav-menu active" : "nav-menu"}
        onClick={handleCLick}
      >
        <li>
          <Link
          className="navLink"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={30}
          >About</Link>
        </li>

        <li>
          <Link
          className="navLink" 
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            duration={30}>Skills</Link>
        </li>

        <li>
          <Link
          className="navLink"
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            duration={30}
          >Experience</Link>
        </li>

        <li>
          <Link
          className="navLink"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={30}
          >Projects</Link>
        </li>

        <li>
          <Link
          className="navLink"
            activeClass="active"
            to="profiles"
            spy={true}
            smooth={true}
            duration={30}
          >Profiles </Link>
        </li>

        <li>
          <Link
          className="navLink"
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            duration={30}
          >Education</Link>
        </li>
        

        <li>
          <Link
          className="navLink"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={30}
          >Contact</Link>
        </li>
      </ul>


      <div className={click ? "social-links active" : "social-links"}>
        <a
          href="https://www.linkedin.com/in/chayan-rai-87b95222a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            className="social"
            size={25}
            style={{ marginRight: "2rem" }}
          />
        </a>
        <a
          href="https://chayanrai107@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail
            className="social"
            size={25}
            style={{ marginRight: "2rem" }}
          />
        </a>
        <a
          href="https://github.com/ChayanRai07"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className="social"
            size={25}
            style={{ marginRight: "2rem" }}
          />
        </a>
        <a
          href="https://www.instagram.com/chayanrai107/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            className="social"
            size={25}
            style={{ marginRight: "2rem" }}
          />
        </a>
        {/* <a
          href="https://leetcode.com/u/Chayan_Rai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode 
            className="social"
            size={25}
            style={{ marginRight: "2rem" }}
          />
        </a> */}
      </div>
      <div className="hamburger" onClick={handleCLick}>
        {click ? (
          <FaTimes className="bars" size={25} />
        ) : (
          <FaBars className="bars" size={25} style={{ color: "#fff" }} />
        )}
      </div>
    </nav>
  );
}
