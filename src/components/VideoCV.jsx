import React, { useState } from 'react';
import Card3DTilt from './Card3DTilt';
import { FaVideo, FaStar, FaExternalLinkAlt } from 'react-icons/fa';

const DRIVE_VIDEO_ID = '1cNHK4uyTO6tp-v9PsdH4uFLK3ITamA4z';
const DRIVE_PREVIEW_URL = `https://drive.google.com/file/d/${DRIVE_VIDEO_ID}/preview`;
const DRIVE_DIRECT_URL = `https://drive.google.com/file/d/${DRIVE_VIDEO_ID}/view`;

const VideoCV = () => {
  const [iframeError, setIframeError] = useState(false);

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
          {/* Left Side: Video Player (Takes 7 cols) */}
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

                {/* Video iframe embed with fallback */}
                {!iframeError ? (
                  <iframe
                    className="w-full h-full pt-8"
                    src={DRIVE_PREVIEW_URL}
                    title="Video CV - Abhishek Kumar Sharma"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    onError={() => setIframeError(true)}
                  ></iframe>
                ) : (
                  <div className="w-full h-full pt-8 flex flex-col items-center justify-center gap-4 px-6 text-center">
                    <FaVideo className="text-4xl text-white/20" />
                    <p className="text-sm text-white/50 max-w-xs">
                      The video couldn't be loaded in this browser. Click below to watch it directly.
                    </p>
                    <a
                      href={DRIVE_DIRECT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-xs flex items-center gap-2 transition-all hover:-translate-y-0.5"
                    >
                      <FaExternalLinkAlt className="text-[10px]" />
                      Watch on Google Drive
                    </a>
                  </div>
                )}
              </div>
            </Card3DTilt>

            {/* Always show a direct link below the player */}
            <div className="mt-4 text-center">
              <a
                href={DRIVE_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-primary transition-colors font-semibold"
              >
                <FaExternalLinkAlt className="text-[8px]" />
                Can't see the video? Open directly on Google Drive
              </a>
            </div>
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
                In this video CV, I walk through my professional background at Cognizant, my AI and full-stack tech stack, and show a breakdown of my engineering approach.
              </p>
            </div>

            <div className="space-y-4 border-l-2 border-primary/20 pl-4 mt-6">
              <div className="relative">
                <h4 className="font-bold text-white text-sm sm:text-base">Core Highlights</h4>
                <p className="text-white/60 text-xs sm:text-sm mt-1">
                  RAG systems, AI agentic frameworks, enterprise billing solutions, and cloud-native microservices.
                </p>
              </div>
              <div className="relative">
                <h4 className="font-bold text-white text-sm sm:text-base">Continuous Growth</h4>
                <p className="text-white/60 text-xs sm:text-sm mt-1">
                  Building production-ready AI applications and tackling complex enterprise-scale architecture challenges at Cognizant.
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
