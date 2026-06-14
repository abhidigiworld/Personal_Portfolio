import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="py-12 border-t border-white/10 relative z-20 overflow-hidden bg-black/20">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Top Row: Nav + Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Quick Nav Links */}
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-semibold text-white/40 hover:text-primary transition-colors duration-300 uppercase tracking-wider"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

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

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mb-6" />

        {/* Bottom Row: Copyright + Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-sm text-white/50 font-medium">
              &copy; {new Date().getFullYear()} Abhishek Kumar Sharma. All Rights Reserved.
            </p>
            <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-1 flex items-center justify-center sm:justify-start gap-1">
              Built with <FaHeart className="text-primary text-[8px]" /> using React & Tailwind CSS
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-primary/10 border border-white/10 hover:border-primary/20 transition-all duration-300 text-white/50 hover:text-white sm:mr-24 relative z-30"
            aria-label="Back to top"
          >
            <span className="text-xs font-bold uppercase tracking-wider">Back to Top</span>
            <FaArrowUp className="text-xs text-primary group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
