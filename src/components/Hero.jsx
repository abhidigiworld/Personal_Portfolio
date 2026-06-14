import React, { useState, useEffect } from 'react';
import abimage from '../assets/images/png2.jpg';
import Card3DTilt from './Card3DTilt';
import { FaDownload, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = [
    'Claude Certified Architect',
    'Programmer Analyst Trainee',
    'AI & LLM / RAG Developer',
    'Full-Stack Developer',
  ];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenPhrases = 2000;

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
      }, typingSpeed);
    }

    // Handlers for switching typing/deleting states
    if (!isDeleting && typedText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-primary/20 blur-[100px] animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-secondary/15 blur-[120px] animate-pulse-slow -z-10" />

      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
        {/* Left Side: Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-6 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 self-center lg:self-start">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Programmer Analyst Trainee @ Cognizant</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Hi, I’m <br />
            <span className="text-gradient">Abhishek Kumar Sharma</span>
          </h1>

          <div className="h-8 text-xl sm:text-2xl font-bold text-white/80 flex items-center justify-center lg:justify-start">
            <span>I am a &nbsp;</span>
            <span className="text-secondary border-r-2 border-secondary animate-pulse pr-1">
              {typedText}
            </span>
          </div>

          <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto lg:mx-0 font-medium">
            A Computer Science professional specializing in Large Language Models (LLMs), RAG systems, and full-stack development. Claude Certified Architect serving as a Programmer Analyst Trainee at Cognizant.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-primary text-white font-bold hover:bg-primary/95 transition-all duration-300 shadow-[0_8px_25px_rgba(var(--color-primary)/0.35)] hover:shadow-[0_12px_30px_rgba(var(--color-primary)/0.5)] flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
            >
              <FaDownload className="text-sm" />
              View CV / Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-xl bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
            >
              Let's Connect
              <FaArrowRight className="text-xs text-primary" />
            </a>
          </div>
        </div>

        {/* Right Side: 3D Photo Card */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative">
            {/* Ambient Background Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl blur-2xl opacity-30 animate-pulse-slow -z-10" />

            <Card3DTilt maxRotation={15} className="w-full h-full p-2 rounded-3xl border border-white/15">
              <img
                src={abimage}
                alt="Abhishek Kumar Sharma"
                className="w-full h-full object-cover rounded-2xl shadow-xl filter contrast-[1.05]"
              />
            </Card3DTilt>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Scroll Down</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
