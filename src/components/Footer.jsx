import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 relative overflow-hidden bg-black/20">
      <div className="container mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <p className="text-sm text-white/50 font-medium">
            &copy; {new Date().getFullYear()} Abhishek Kumar Sharma. All Rights Reserved.
          </p>
          <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-1">
            Built with React, Tailwind & Canvas 3D
          </p>
        </div>

        {/* Social Links Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/abhidigiworld"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-primary text-white border border-white/10 hover:border-transparent transition-all duration-300 hover:-translate-y-1"
            title="GitHub Profile"
          >
            <FaGithub className="text-base" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhiwebdev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-primary text-white border border-white/10 hover:border-transparent transition-all duration-300 hover:-translate-y-1"
            title="LinkedIn Profile"
          >
            <FaLinkedin className="text-base" />
          </a>
          <a
            href="mailto:abhishekvishwakarma460@gmail.com"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-primary text-white border border-white/10 hover:border-transparent transition-all duration-300 hover:-translate-y-1"
            title="Send Email"
          >
            <FaEnvelope className="text-base" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
