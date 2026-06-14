import React from 'react';
import Card3DTilt from './Card3DTilt';
import { FaPlay, FaVideo, FaStar } from 'react-icons/fa';

const VideoCV = () => {
  return (
    <section id="video-cv" className="py-24 relative px-6 overflow-hidden">
      {/* Accent Light Glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-secondary/10 blur-[100px] -z-10" />

      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 flex items-center justify-center gap-3">
            <FaVideo className="text-primary text-2xl sm:text-3xl animate-pulse" />
            <span>Interactive Video CV</span>
          </h2>
          <p className="text-white/50 text-sm max-w-md mx-auto mt-2">
            Watch a quick introduction of my developer journey, core competencies, and project highlights.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Video Player Mock (Takes 7 cols) */}
          <div className="lg:col-span-7 w-full">
            <Card3DTilt className="p-2.5 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" maxRotation={5}>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-950 border border-white/5">
                {/* Decorative video player header bar */}
                <div className="absolute top-0 inset-x-0 h-8 bg-zinc-900/80 backdrop-blur-md border-b border-white/5 flex items-center px-4 gap-1.5 z-10">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[10px] text-white/30 font-semibold mx-auto tracking-wide">developer_introduction.mp4</span>
                </div>

                {/* Video iframe embed */}
                <iframe
                  className="w-full h-full pt-8"
                  src="https://drive.google.com/file/d/1cNHK4uyTO6tp-v9PsdH4uFLK3ITamA4z/preview"
                  title="Video CV"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </Card3DTilt>
          </div>

          {/* Right Side: Bio Points (Takes 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-black uppercase tracking-wider">
                <FaStar className="text-[10px]" /> Pitch Video
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Let me introduce myself in <span className="text-gradient">60 seconds</span>
              </h3>
              <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                In this video CV, I run through my background, tech stack preferences, and show a breakdown of my engineering workflow.
              </p>
            </div>

            <div className="space-y-4 border-l-2 border-primary/20 pl-4 mt-6">
              <div className="relative">
                <h4 className="font-bold text-white text-sm sm:text-base">Core Highlights</h4>
                <p className="text-white/60 text-xs sm:text-sm mt-1">
                  Summary of billing system projects, photo portfolios, and tasks managed in Angular.
                </p>
              </div>
              <div className="relative">
                <h4 className="font-bold text-white text-sm sm:text-base">Continuous Growth</h4>
                <p className="text-white/60 text-xs sm:text-sm mt-1">
                  Eager to join high-performing teams, build production-ready applications, and tackle complex system scaling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCV;
