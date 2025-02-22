import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import '../components/ProjectCard.css';
const projects = [
  {
    id: 1,
    title: "Weather Tracker",
    description: "A <highlight>weather app</highlight> fetches and displays current weather and forecasts based on user input, using a <highlight>weather API</highlight> (OpenWeather). It features a <highlight>search bar</highlight>, current weather conditions, and all styled with a <highlight>responsive design</highlight>.",
    githubLink: "https://github.com/ChayanRai07/WeatherApp",
    deployedLink: "https://chayanrai07.github.io/WeatherApp/",
    image: require('../images/WeatherApp.jpg')
  },
  {
    id: 2,
    title: "Contact Manager: Effortless Contact Management",
    description: "A basic <highlight>contact web application</highlight> enables users to efficiently <highlight>add</highlight>, <highlight>delete</highlight>, and <highlight>view</highlight> a list of contacts, providing a seamless interface for simple contact management.",
    githubLink: "https://github.com/ChayanRai07/ContactApp",
    deployedLink: "https://chayanrai07.github.io/ContactApp/",
    image: require('../images/ContactApp.jpg')
  }
];

const ProjectCard = () => {
  const renderDescription = (text) => {
    return text.split(/(<highlight>.*?<\/highlight>)/).map((part, index) => {
      if (part.startsWith('<highlight>')) {
        const content = part.replace(/<\/?highlight>/g, '');
        return <span key={index} className="highlight-text">{content}</span>;
      }
      return part;
    });
  };

  return (
    <div id="projects" className="bg-black text-white py-20 px-4 min-h-screen pt-24">
      <motion.div 
        className="container mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold text-center mb-16 pb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 tracking-wide">
          Projects
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id} 
            className="mb-20 group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.2,
              ease: "easeOut"
            }}
          >
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300`}>
              <div className="lg:w-1/2 space-y-4">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {renderDescription(project.description)}
                </p>
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <FiGithub size={20} className="text-white" />
                    <span className="text-white">GitHub</span>
                    <FaArrowRight size={16} className="text-white" />
                  </a>
                  <a
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-500/10 transition-colors"
                  >
                    Live Demo
                    <FaArrowRight size={16} />
                  </a>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <Tilt className="w-full" gyroscope={true}>
                  <a
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg border-2 border-gray-800"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                </Tilt>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;