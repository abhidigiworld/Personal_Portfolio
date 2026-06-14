// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoCV from './components/VideoCV';
import LeetCodeFetcher from './components/LeetCodeFetcher';
import Interactive3DCanvas from './components/Interactive3DCanvas';
import ThemeCustomizer from './components/ThemeCustomizer';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* 3D Particle Constellation Background Layer */}
      <Interactive3DCanvas />

      {/* Floating Theme / Color Switcher customizer */}
      <ThemeCustomizer />

      {/* Navigation Bar */}
      <Header />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <VideoCV />
        <Projects />
        <LeetCodeFetcher />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
