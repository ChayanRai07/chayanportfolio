import React, { useState } from 'react';
import "./ExperienceStyle.css";
import { motion } from "framer-motion";

const experienceData = {
  internships: [
    {
      id: 1,
      role: "Research Intern",
      company: "Indian Institute of Technology (IIT) Mandi",
      duration: "Present",
      location: "Mandi, Himachal Pradesh",
      description: [
       "I am working on the <highlight>LSRB DIPR Project</highlight>, focusing on <highlight>Human-Computer Interaction</highlight> and <highlight>Adaptive-Cognitive Science</highlight>.",
       "Developing <highlight>adaptive cognitive task games</highlight> using <highlight>Inquisit</highlight> by Millisecond Software to enhance cognitive experiments.",
       "Implementing <highlight>dynamic and responsive experiments</highlight> that adjust based on user performance for better cognitive assessment.",
       "Collaborating with researchers to integrate <highlight>Python</highlight>, <highlight>Data Science</highlight>, and analytics into psychological and defense research."
      ]
    },
    {
      id: 2,
      role: "ML Virtual Internship",
      company: "Atharvo",
      duration: "Aug 2024 - Sep 2024",
      location: "Virtual",
      description: ["Learned <highlight>machine learning fundamentals</highlight>, including <highlight>data processing</highlight> and <highlight>model training</highlight> using <highlight>Python</highlight>.",
        "Developed predictive models using <highlight>Python</highlight> and <highlight>scikit-learn</highlight>",
        "Gained <highlight>hands-on experience</highlight> in training, testing, and evaluating ML models for better accuracy.",
        "Participated in team projects and <highlight>technical discussions."
      ]
    }
  ],
  volunteering: [
    {
      id: 1,
      role: "Project Leader & Mentor",
      organization: "LIET, Greater Noida",
      duration: "Jan 2024 - Dec 2025",
      description: [
        "Mentoring <highlight>junior students</highlight> in their academic development",
        "Organizing weekly <highlight>doubt-clearing sessions</highlight> and coding workshops",
        "Providing guidance on <highlight>project development</highlight> and career planning"
      ]
    },
    {
      id: 2,
      role: "Programming with C Instructor",
      organization: "LIET, Greater Noida",
      duration: "Sept 2024 - Dec 2024",
      description: [
        "Taught <highlight>C programming fundamentals</highlight> through interactive sessions and hands-on practice",
        "Created <highlight>beginner-friendly examples</highlight> and step-by-step coding exercises",
        "Provided <highlight>personalized guidance</highlight> and mentoring to help students grasp concepts",
        "Helped students achieve strong understanding through <highlight>practical assignments</highlight> and projects"
      ]
    },
    {
      id: 3,
      role: "Peer Mentor - Software Engineering",
      organization: "LIET, Greater Noida",
      duration: "Oct 2023 - Dec 2023",
      description: [
        "Mentored diploma students in <highlight>software engineering</highlight> concepts",
        "Created <highlight>practical exercises</highlight> and case studies covering software development concepts",
        "Led <highlight>group discussions</highlight> on real-world engineering challenges",
      ]
    },
    {
      id: 4,
      role: "Head Volunteer",
      organization: "JOB Fair 2023 - LIET, Greater Noida",
      duration: "2023",
      description: [
        "Led a team of <highlight>20+ volunteers</highlight> for college job fair, managing registration, venue setup, and coordination",
        "Coordinated with <highlight>companies</highlight> and managed event logistics",
        "Ensured smooth operation of <highlight>recruitment processes</highlight>"
      ]
    }
  ]
};

export default function Experience({id}) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const renderDescription = (text) => {
    return text.split(/(<highlight>.*?<\/highlight>)/).map((part, index) => {
      if (part.startsWith('<highlight>')) {
        const content = part.replace(/<\/?highlight>/g, '');
        return <span key={index} className="highlight-keyword">{content}</span>;
      }
      return part;
    });
  };

  return (
    <div className="experience-container" id={id}>
      <motion.div 
        className="main-title"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h1 className="text-6xl font-bold text-center mb-16 animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-50 shine-effect">
          Experience
        </h1>
      </motion.div>

      {/* Internships Section */}
      <div className="mb-16">
        <motion.h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:from-pink-400 hover:to-purple-400 transition-all duration-300 section-title"
          whileHover={{ scale: 1.02 }}>
          Internships
        </motion.h2>
        <div className="grid gap-8">
          {experienceData.internships.map((internship) => (
            <motion.div 
              key={internship.id} 
              className={`experience-card ${hoveredCard === internship.id ? 'card-highlighted' : ''}`}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredCard(internship.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 relative role-title ${
                    hoveredCard === internship.id ? 'is-hovered' : ''
                  }`}>
                    <span className="relative inline-block">
                      {internship.role}
                      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transform origin-left transition-transform duration-300 ${
                        hoveredCard === internship.id ? 'scale-x-100' : 'scale-x-0'
                      }`}></span>
                    </span>
                  </h3>
                  <p className={`text-xl text-purple-300 transition-colors ${
                    hoveredCard === internship.id ? 'text-purple-200' : ''
                  }`}>{internship.company}</p>
                  <p className="text-gray-400 hover:text-gray-300 transition-colors">{internship.location}</p>
                </div>
                <span className={`duration-badge text-white ${
                  hoveredCard === internship.id ? 'highlight-duration' : ''
                }`}>{internship.duration}</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {internship.description.map((point, index) => (
                  <li key={index} className="transition-colors">
                    {renderDescription(point)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Volunteering Section */}
      <div>
        <motion.h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:from-pink-400 hover:to-purple-400 transition-all duration-300 section-title"
          whileHover={{ scale: 1.02 }}>
          Volunteering
        </motion.h2>
        <div className="grid gap-8">
          {experienceData.volunteering.map((volunteer) => (
            <motion.div 
              key={volunteer.id} 
              className={`experience-card ${hoveredCard === `v${volunteer.id}` ? 'card-highlighted' : ''}`}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredCard(`v${volunteer.id}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 relative role-title ${
                    hoveredCard === `v${volunteer.id}` ? 'is-hovered' : ''
                  }`}>
                    <span className="relative inline-block">
                      {volunteer.role}
                      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transform origin-left transition-transform duration-300 ${
                        hoveredCard === `v${volunteer.id}` ? 'scale-x-100' : 'scale-x-0'
                      }`}></span>
                    </span>
                  </h3>
                  <p className={`text-xl text-purple-300 transition-colors ${
                    hoveredCard === `v${volunteer.id}` ? 'text-purple-200' : ''
                  }`}>{volunteer.organization}</p>
                </div>
                <span className={`duration-badge text-white ${
                  hoveredCard === `v${volunteer.id}` ? 'highlight-duration' : ''
                }`}>{volunteer.duration}</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {volunteer.description.map((point, index) => (
                  <li key={index} className="transition-colors">
                    {renderDescription(point)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 