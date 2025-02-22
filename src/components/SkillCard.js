import React from 'react'
import "./SkillCardStyle.css";
import { CgCPlusPlus } from "react-icons/cg";
import { DiGit, DiMongodb, DiMysql } from "react-icons/di";
import { 
  SiVisualstudiocode, SiReact, SiAngularmaterial,
  SiTailwindcss, SiGooglecolab, SiC, SiNumpy,
  SiPandas, SiPowerbi, SiScikitlearn, SiOpencv,
  SiAmazonaws, SiMicrosoftazure, SiFirebase,
  SiFramer, SiJupyter, SiGithub,
  SiSeaborn, SiBootstrap, SiThreedotjs
} from "react-icons/si";
import { TbBrandCss3, TbBrandJavascript, TbBrandHtml5, TbBrandPython } from "react-icons/tb";
import { FaAngular } from "react-icons/fa";
import { RiAngularjsFill } from "react-icons/ri";
import { motion } from "framer-motion";

export default function SkillCard({id}) {
  return (
    <>
        <div className="skill-container" id={id}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-5xl font-bold text-center mb-12 animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-500 shine-effect">
              My Skills
            </div>
          </motion.div>
          <div className="skills-grid">
            <motion.div 
              className="skill-box hover:transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="skill-title">Programming Languages</h2>
              <div className="skillset">
                <div className="group relative">
                  <SiC className='techLogo hover:text-blue-500 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    C
                  </span>
                </div>
                <div className="group relative">
                  <CgCPlusPlus className='techLogo hover:text-blue-600 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    C++
                  </span>
                </div>
                <div className="group relative">
                  <TbBrandPython className='techLogo hover:text-yellow-500 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    Python
                  </span>
                </div>
                <div className="group relative">
                  <TbBrandJavascript className='techLogo hover:text-yellow-400 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    JavaScript
                  </span>
                </div>
              </div>                     
            </motion.div>

            <motion.div 
              className="skill-box hover:transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="skill-title">AI & ML</h2>
              <div className="skillset">
                <div className="group relative">
                  <SiNumpy className='techLogo hover:text-blue-500 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    NumPy
                  </span>
                </div>
                <div className="group relative">
                  <SiPandas className='techLogo hover:text-purple-400 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    Pandas
                  </span>
                </div>
                <div className="group relative">
                  <SiOpencv className='techLogo hover:text-green-500 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    OpenCV
                  </span>
                </div>
                <div className="group relative">
                  <SiPowerbi className='techLogo hover:text-yellow-500 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    Power BI
                  </span>
                </div>
                <div className="group relative">
                  <SiScikitlearn className='techLogo hover:text-orange-600 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    Scikit-learn
                  </span>
                </div>
              </div>            
            </motion.div>

            <motion.div 
              className="skill-box hover:transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="skill-title">Web & UI Technology</h2>
              <div className="skillset">
                <div className="group relative">
                  <TbBrandHtml5 className='techLogo hover:text-orange-500 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    HTML 5
                  </span>
                </div>
                <div className="group relative">
                  <TbBrandCss3 className='techLogo hover:text-blue-500 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    CSS 3
                  </span>
                </div>
                <div className="group relative">
                  <div className='techLogo hover:text-green-400 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'>GSAP</div>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    GSAP
                  </span>
                </div>
                <div className="group relative">
                  <SiReact className='techLogo hover:text-cyan-400 hover: transition-all duration-500 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    React
                  </span>
                </div>
                <div className="group relative">
                  <FaAngular className='techLogo hover:text-red-600 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    Angular
                  </span>
                </div>
              </div>            
            </motion.div>

            <motion.div 
              className="skill-box hover:transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="skill-title">Cloud Services</h2>
              <div className="skillset">
                <div className="group relative">
                  <SiAmazonaws className='techLogo hover:text-yellow-500 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    AWS
                  </span>
                </div>
                <div className="group relative">
                  <SiFirebase className='techLogo hover:text-orange-500 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    Firebase
                  </span>
                </div>
                <div className="group relative">
                  <SiMicrosoftazure className='techLogo hover:text-blue-500 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    Azure
                  </span>
                </div>
              </div>            
            </motion.div>

            <motion.div 
              className="skill-box hover:transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="skill-title">Frameworks</h2>
              <div className="skillset">
                <div className="group relative">
                  <SiTailwindcss className='techLogo hover:text-teal-500 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    Tailwind CSS
                  </span>
                </div>
                <div className="group relative">
                  <SiFramer className='techLogo hover:text-purple-500 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    Framer Motion
                  </span>
                </div>
                <div className="group relative">
                  <SiBootstrap className='techLogo hover:text-purple-600 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    Bootstrap
                  </span>
                </div>
                <div className="group relative">
                  <RiAngularjsFill className='techLogo hover:text-pink-500 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    Angular Material
                  </span>
                </div>
                <div className="group relative">
                  <SiThreedotjs className='techLogo hover:text-black hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    React Three Fiber
                  </span>
                </div>
              </div>            
            </motion.div>

            <motion.div 
              className="skill-box hover:transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="skill-title">Version Control</h2>
              <div className="skillset">
                <div className="group relative">
                  <DiGit className='techLogo hover:text-orange-600 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    Git
                  </span>
                </div>
                <div className="group relative">
                  <SiGithub className='techLogo hover:text-gray-400 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    GitHub
                  </span>
                </div>
              </div>            
            </motion.div>

            <motion.div 
              className="skill-box hover:transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="skill-title">Databases</h2>
              <div className="skillset">
                <div className="group relative">
                  <DiMysql className='techLogo hover:text-blue-500 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    MySQL
                  </span>
                </div>
                <div className="group relative">
                  <DiMongodb className='techLogo hover:text-green-500 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    MongoDB
                  </span>
                </div>
              </div>            
            </motion.div>

            <motion.div 
              className="skill-box hover:transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h2 className="skill-title">Tools</h2>
              <div className="skillset">
                <div className="group relative">
                  <SiVisualstudiocode className='techLogo hover:text-blue-500 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    Visual Studio Code
                  </span>
                </div>
                <div className="group relative">
                  <SiGooglecolab className='techLogo hover:text-yellow-500 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    Google Colab
                  </span>
                </div>
                <div className="group relative">
                  <SiJupyter className='techLogo hover:text-orange-500 hover:-translate-y-2 transition-all duration-300 group-hover:opacity-30'/>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
                    Jupyter
                  </span>
                </div>
              </div>            
            </motion.div>
          </div>
        </div>
    </>
  )
}
