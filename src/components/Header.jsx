import React from 'react';
import { HomeIcon, UserIcon, BriefcaseIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <>
      <div className='w-full flex justify-center'>
      <header className="bg-gradient-to-r from-black via-gray-900 to-red-500 p-2 px-6 fixed w-11/12 z-50 shadow-2xl m-2 center rounded-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl text-white font-bold tracking-wider">Abhishek Kumar Sharma</h1>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex space-x-6 text-sm sm:text-base">
            {/* Home */}
            <li className="flex items-center">
              <a href="#home" className="text-white hover:text-gray-300 transition-colors duration-300 flex items-center">
                <HomeIcon className="h-6 w-6 text-white mr-1 transition-transform duration-200 transform hover:scale-125" />
                Home
              </a>
            </li>

            {/* About */}
            <li className="flex items-center">
              <a href="#about" className="text-white hover:text-gray-300 transition-colors duration-300 flex items-center">
                <UserIcon className="h-6 w-6 text-white mr-1 transition-transform duration-200 transform hover:scale-125" />
                About
              </a>
            </li>

            {/* Projects */}
            <li className="flex items-center">
              <a href="#projects" className="text-white hover:text-gray-300 transition-colors duration-300 flex items-center">
                <BriefcaseIcon className="h-6 w-6 text-white mr-1 transition-transform duration-200 transform hover:scale-125" />
                Projects
              </a>
            </li>

            {/* Contact */}
            <li className="flex items-center">
              <a href="#contact" className="text-white hover:text-gray-300 transition-colors duration-300 flex items-center">
                <EnvelopeIcon className="h-6 w-6 text-white mr-1 transition-transform duration-200 transform hover:scale-125" />
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
      </div>
    </>
  );
};

export default Header;
