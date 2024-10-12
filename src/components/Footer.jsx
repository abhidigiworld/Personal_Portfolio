import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing GitHub and LinkedIn icons

const Footer = () => {
  return (
    <footer className="p-2">
      <div className="container mx-auto text-center text-gray-200">
        <div className="mt-1 flex justify-center space-x-6">
          <a
            href="https://github.com/abhidigiworld"
            className="flex items-center text-gray-200 hover:text-white transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-2" /> {/* GitHub icon */}
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abhiwebdev"
            className="flex items-center text-gray-200 hover:text-white transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="mr-2" /> {/* LinkedIn icon */}
            LinkedIn
          </a>
        </div>
        <p className="mt-1">&copy; {new Date().getFullYear()} Abhishek Kumar Sharma. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
