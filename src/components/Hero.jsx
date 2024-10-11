import React from 'react';
import abimage from '../assets/images/png2.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen dark:bg-dark-900 flex flex-col justify-center items-center text-center"
    >
     
      <img
        src={abimage}
        alt="Your Photo"
        style={{
          filter: 'drop-shadow(8px 8px 10px rgba(255, 99, 71, 0.5))',
          }}
        className="rounded-full w-40 h-40 object-cover mb-6 transform rotate-[13deg]  transition duration-700 ease-in-out hover:scale-110 animate-fade-in"
      />

     
      <h1 className="text-5xl text-white font-bold mb-4 animate-fade-in">
        Hi, I’m Abhishek Kumar Sharma
      </h1>

    
      <p className="text-lg text-gray-400 mb-6 animate-fade-in">
        Aspiring Full-Stack Developer & Lifelong Learner
      </p>

    
      <a
        href="https://drive.google.com/file/d/1PJLqmMDdiB-sbNJ4RxKyb8M9xOiX5onf/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-transform duration-500 transform hover:scale-105 shadow-lg animate-fade-in"
      >
        View CV
      </a>
    </section>
  );
};

export default Hero;
