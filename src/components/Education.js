import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const educationDetails = [
  {
    id: 1,
    level: "10th Grade",
    school: "Andhra Education Society Senior Secondary School, D.D.U Marg, New Delhi-110002",
    board: "Central Board of Secondary Education (CBSE)",
    year: "2018-19",
    achievements: ["Science project winner","Basketball Runner up"],
    subjects: ["Mathematics", "Science", "Social Studies", "English", "Hindi","Information Technology"]
  },
  {
    id: 2,
    level: "12th Grade",
    school: "Andhra Education Society Senior Secondary School, D.D.U Marg, New Delhi-110002",
    board: "Central Board of Secondary Education (CBSE)",
    year: "2020-21",
    achievements: ["Good in Physics"],
    subjects: ["Computer Science", "Mathematics", "Physics", "Chemistry"]
  },
  {
    id: 3,
    level: "Graduation",
    school: "Lloyd Institute of Engineering & Technology, Greater Noida",
    university: "Dr. APJ Abdul Kalam Technical University Uttar Pradesh, Lucknow",
    year: "2021-25",
    achievements: ["Dean's List","Research Paper", "Research Intern at IIT Mandi"],
    subjects: ["Data Structures", "Operating System","Computer Networks","Software Engineering"]
  },
];

const Education = () => {
  const timelineRef = useRef();
  const [hoveredSubjects, setHoveredSubjects] = useState(null);

  useEffect(() => {
    const timelineItems = gsap.utils.toArray(".timeline-item");
    const dots = gsap.utils.toArray(".dot");
    
    // Animate dots
    gsap.fromTo(
      dots,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center+=100",
        },
      }
    );

    // Animate cards
    gsap.fromTo(
      timelineItems,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.4,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center+=100",
        },
      }
    );
  }, []);

  return (
    <div
      id="education"
      ref={timelineRef}
      className="education-section bg-black text-white py-20 px-4 min-h-screen pt-24 flex flex-col items-center"
    >
      <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
        Educational Journey
      </h2>

      <div className="timeline-container relative max-w-3xl border-l-2 border-purple-500">
        {educationDetails.map((edu) => (
          <div key={edu.id} className="timeline-item relative mb-16 pl-8 hover:pl-10 transition-all duration-300">
            <div className="dot w-5 h-5 bg-gradient-to-r from-pink-500 to-purple-500 absolute -left-[11px] top-1/2 transform -translate-y-1/2 rounded-full shadow-lg shadow-purple-500/50"></div>
            <div className="card bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border border-gray-700"
                 onMouseEnter={() => setHoveredSubjects(edu.id)}
                 onMouseLeave={() => setHoveredSubjects(null)}>
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 relative education-level ${
                  hoveredSubjects === edu.id ? 'is-hovered' : ''
                }`}>
                  <span className="relative inline-block">
                    {edu.level}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transform origin-left transition-transform duration-300 ${
                      hoveredSubjects === edu.id ? 'scale-x-100' : 'scale-x-0'
                    }`}></span>
                  </span>
                </h3>
                <span className={`text-purple-400 font-semibold date-highlight px-4 py-2 rounded-full transition-all duration-300 ${
                  hoveredSubjects === edu.id 
                  ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 transform scale-110 shadow-lg'
                  : ''
                }`}>
                  {edu.year}
                </span>
              </div>
              <p className="text-xl text-gray-300 mb-4">{edu.school}</p>
              {edu.board && (
                <p className="text-lg text-gray-400 mb-4">{edu.board}</p>
              )}
              {edu.university && (
                <p className="text-lg text-gray-400 mb-4">{edu.university}</p>
              )}
              
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-pink-400 mb-2">Achievements</h4>
                <ul className="list-disc list-inside text-gray-300">
                  {edu.achievements.map((achievement, index) => (
                    <li key={index} className="mb-1">{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="text-lg font-semibold text-pink-400 mb-2">Key Subjects</h4>
                <div className="flex flex-wrap gap-4">
                  {edu.subjects.map((subject, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                        hoveredSubjects === edu.id 
                        ? 'bg-gradient-to-r from-pink-500/30 to-purple-500/30 text-white transform scale-110 shadow-lg hover:scale-125'
                        : 'bg-purple-500/20 text-purple-300 hover:scale-110'
                      }`}
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
