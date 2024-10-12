import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaGithub, FaGlobe } from 'react-icons/fa';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const updateItemsPerPage = () => {
    if (window.innerWidth >= 1024) {
      setItemsPerPage(3);
    } else if (window.innerWidth >= 740) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(1);
    }
  };

  useEffect(() => {
    fetch('https://api.github.com/users/abhidigiworld/repos')
      .then((response) => response.json())
      .then((data) => setRepos(data));
    updateItemsPerPage();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.floor(repos.length / itemsPerPage) - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.floor(repos.length / itemsPerPage) - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="projects" className="dark:bg-dark-900 text-white py-12 ">
      <div className="container mx-auto text-center relative">
        <h2 className="text-2xl lg:text-3xl font-bold text-red-500 mb-8">My Projects</h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Project Cards Carousel */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {repos.map((repo) => (
                <div
                  key={repo.id}
                  className="bg-dark-800 p-6 sm:p-8 rounded-lg transition-transform duration-300 shadow-lg relative group h-[360px] sm:h-[380px] m-2
                  min-w-[100%] sm:min-w-[50%] lg:min-w-[32.16%]"
                >
                  <div className="mb-4">
                    {/* Placeholder image or random GitHub-related image */}
                    <img
                      src={`https://avatars.githubusercontent.com/u/${repo.owner.id}?v=4`}
                      alt={repo.name}
                      className="mb-4 rounded w-full h-32 sm:h-40 object-cover"
                    />
                  </div>

                  {/* Title: Visible by default */}
                  <h3 className="text-lg sm:text-xl text-left font-semibold mb-2 transition-opacity duration-300 group-hover:opacity-100 opacity-100">
                    {repo.name}
                  </h3>
                  <p className="text-left mb-1 text-sm sm:text-base">
                    <span className="font-bold">Language:</span> {repo.language || 'N/A'}
                  </p>
                  <p className="text-left mb-4 text-sm sm:text-base">
                    <span className="font-bold">Created:</span> {new Date(repo.created_at).toLocaleDateString()}
                  </p>

                  {/* Background Blur Effect on Hover */}
                  <div className="absolute inset-0 bg-dark-800 transition duration-300 group-hover:backdrop-blur-md group-hover:bg-opacity-80" />

                  {/* Description and GitHub + Website Links: Hidden initially, visible on hover */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-80 bg-black transition-opacity duration-500 text-center p-4">
                    <p className="mb-4 text-sm sm:text-base">
                      {repo.description ? repo.description : 'No description available'}
                    </p>

                    {/* GitHub Button */}
                    <button className="mb-2 bg-black">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center text-white py-2 px-4 rounded transition-all shadow-lg hover:shadow-2xl hover:border border-white transform hover:scale-105"
                      >
                        <FaGithub className="mr-2" />
                        View on GitHub
                      </a>
                    </button>

                    {/* Website Button (only if the homepage URL exists) */}
                    {repo.homepage && (
                      <button>
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded transition-all shadow-lg hover:shadow-2xl hover:border border-white transform hover:scale-105"
                        >
                          <FaGlobe className="mr-2" />
                          Visit Website
                        </a>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 bg-red-500 p-3 rounded-full text-white hover:bg-red-600"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 bg-red-500 p-3 rounded-full text-white hover:bg-red-600"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
