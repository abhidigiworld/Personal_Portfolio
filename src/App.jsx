// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoCV from './components/VideoCV';
import LeetCodeFetcher from './components/LeetCodeFetcher';

function App() {
  return (
    <div className="dark">
      <Header />
      <main>
        <Hero />
        <About />
        <VideoCV/>
        <Projects />
        <LeetCodeFetcher/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
