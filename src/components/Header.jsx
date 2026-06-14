import React, { useState, useEffect } from 'react';
import { HomeIcon, UserIcon, BriefcaseIcon, CodeBracketIcon, EnvelopeIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: '#home', label: 'Home', icon: HomeIcon },
    { href: '#about', label: 'About', icon: UserIcon },
    { href: '#experience', label: 'Experience', icon: BriefcaseIcon },
    { href: '#projects', label: 'Projects', icon: CodeBracketIcon },
    { href: '#contact', label: 'Contact', icon: EnvelopeIcon },
  ];

  return (
    <div className="w-full flex justify-center fixed top-4 z-50 px-4">
      <header
        className={`w-full max-w-6xl rounded-full transition-all duration-500 ease-in-out border border-white/10 ${
          scrolled
            ? 'glass-nav py-3 px-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-5 px-8'
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Brand/Name */}
          <a
            href="#home"
            className="text-lg sm:text-xl md:text-2xl font-black tracking-wider text-white hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
            <span className="text-gradient">Abhishek Kumar Sharma</span>
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-white transition-all duration-300 flex items-center gap-1.5 text-sm font-semibold group relative py-1"
                    >
                      <IconComponent className="h-4 w-4 text-primary group-hover:scale-125 transition-transform duration-300" />
                      <span>{link.label}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Menu Icon for smaller screens */}
          <button
            className="text-white hover:text-primary transition-colors lg:hidden p-1 rounded-lg hover:bg-white/5"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden fixed inset-x-4 top-24 glass-container rounded-2xl p-6 transition-all duration-500 origin-top flex flex-col gap-4 shadow-2xl border border-white/15 ${
            isOpen
              ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
          }`}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-white hover:bg-white/5 p-3 rounded-xl transition-all duration-300 flex items-center gap-3 text-base font-bold border border-transparent hover:border-white/5 group"
                  >
                    <IconComponent className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <span>{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
