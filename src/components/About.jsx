import React from 'react';
import abimage from '../assets/images/png2.jpg';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-gray-800 via-gray-900  text-white py-16">
      <div className="container mx-auto text-center">
        {/* About Me Heading */}
        <h2 className="text-4xl font-bold text-red-500 mb-6 drop-shadow-md">About Me</h2>

        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Profile Image */}
          <img
            src={abimage}
            alt="Your Photo"
            style={{
              filter: 'drop-shadow(8px 8px 10px rgba(255, 99, 71, 0.5))',
              }}
            className="rounded-xl w-1/3 md:w-1/4 lg:w-1/3 object-cover mb-6 md:mb-0 md:mr-8 transition-transform transform hover:scale-110 duration-300 drop-shadow-xl rotate-[13deg]"
          />

          {/* About Text */}
          <div className="bg-gray-800 rounded-lg p-6 md:w-2/3 lg:w-1/2 shadow-lg transition-transform duration-300 hover:scale-105">
            <p className="text-lg mb-4">
              I'm currently a final-year B.Tech Computer Science student at Lovely Professional University. My passion lies in full-stack web development, focusing on frontend technologies like React and backend tools like Node.js and MongoDB. Although I am actively seeking my first internship, I have built several projects and am eager to contribute to a dynamic team environment.
            </p>
            <p className="mb-4">
              I’m constantly improving my skills in web technologies and looking forward to gaining hands-on industry experience. I believe in solving real-world problems with well-designed, scalable applications.
            </p>

            {/* Skills, Projects, Certifications, etc. */}
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2" />
                <strong>Skills:</strong> React, Angular, Node.js, MongoDB, JavaScript, JAVA
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2" />
                <strong>Projects:</strong> Sakshi Enterprise Billing System, Photographer Portfolio, Docket
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2" />
                <strong>Certifications:</strong> React (IBM), Node.js, JavaScript
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2" />
                <strong>Education:</strong> B.Tech in Computer Science (LPU)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
