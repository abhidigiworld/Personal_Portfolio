import React from 'react';

const VideoCV = () => {
  return (
    <>

      <section
        id="video-cv"
        className="text-white py-16"
      >
          <h2 className="text-4xl font-bold text-red-300 mb-4 text-center pb-6">About Me</h2>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          {/* Left Side: Video (50% Width) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <iframe
              className="w-4/5 h-60 md:w-full md:h-80 lg:h-96 rounded-lg shadow-2xl transition-transform transform hover:scale-105 duration-300"
              src="https://drive.google.com/file/d/1cNHK4uyTO6tp-v9PsdH4uFLK3ITamA4z/preview"
              title="Video CV"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>

          {/* Right Side: Description (50% Width) */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 text-left p-4 rounded-lg shadow-lg bg-gray-800 transition-transform transform hover:-translate-y-1 duration-300">
            <p className="text-lg text-gray-200 mb-4">
              This video showcases my journey as a Full-Stack Developer. It highlights my technical skills in modern frameworks like React and Angular, along with my passion for web development.
            </p>
            <p className="text-gray-300">
              The video on the left introduces my projects, including a photographer's portfolio website, an enterprise billing system, and a task management system built with Angular. My goal is to continuously grow and contribute to real-world projects with creative and scalable solutions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoCV;
