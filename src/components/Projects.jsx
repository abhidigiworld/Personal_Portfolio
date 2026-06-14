import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaGithub, FaGlobe, FaFolder, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';
import Card3DTilt from './Card3DTilt';
import AnimateIn from './AnimateIn';

const curatedProjects = [
  {
    title: 'SmartRAG AI (NeXTRAG)',
    description: 'A professional-grade RAG application bridging private data with real-time web intelligence. Implements a multi-stage Python/React ingestion and retrieval pipeline to enable highly accurate, cited, and context-aware responses.',
    tech: ['React.js', 'Python', 'LLMs', 'RAG Systems', 'Web Search'],
    github: 'https://github.com/abhidigiworld/NeXTRAG',
    live: '',
  },
  {
    title: 'AutomationAgent - AI Testing',
    description: 'An autonomous AI testing framework automating complex, multi-step validation processes. Employs intelligent agents capable of dynamic decision-making, exception handling, and self-correction within QA pipelines.',
    tech: ['Node.js', 'LLM SDKs', 'Playwright', 'Agentic Testing', 'QA Automation'],
    github: 'https://github.com/abhidigiworld/AutomationAgent',
    live: '',
  },
  {
    title: 'Spring Boot E-Commerce System',
    description: 'A scalable backend system employing Microservices Architecture and secured via JWT-based authentication. Handles client routing, product registries, order state processing, and deployment pipelines.',
    tech: ['Spring Boot', 'Java', 'Microservices', 'JWT Security', 'Docker', 'AWS'],
    github: 'https://github.com/abhidigiworld/Ecommerce',
    live: '',
  },
  {
    title: 'CreditCarc - Concurrent Engine',
    description: 'A high-performance concurrent credit-card transaction processor simulating real-time validation. Employs POSIX threads, shared memory, and semaphores for fast retrieval, concurrency, and thread safety.',
    tech: ['C', 'POSIX Threads', 'Shared Memory', 'Semaphores', 'Data Structures'],
    github: 'https://github.com/abhidigiworld/CreditCarc',
    live: '',
  },
];

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [loading, setLoading] = useState(true);

  const updateItemsPerPage = () => {
    if (window.innerWidth >= 1024) {
      setItemsPerPage(3);
    } else if (window.innerWidth >= 768) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(1);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch('https://api.github.com/users/abhidigiworld/repos')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Sort repos by updated_at or stars
          const sorted = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
          setRepos(sorted);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch github repos', err);
        setLoading(false);
      });

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, repos.length - itemsPerPage) : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= repos.length - itemsPerPage ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="projects" className="py-24 relative px-6 overflow-hidden">
      {/* Dynamic Background Aura */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-primary/10 blur-[150px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-[150px] -z-10 animate-pulse-slow" />

      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <AnimateIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">My Projects</h2>
            <p className="text-white/50 text-sm max-w-md mx-auto">
              A selection of my core engineering projects, followed by live repositories dynamically fetched from GitHub.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
          </div>
        </AnimateIn>

        {/* Curated Top Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {curatedProjects.map((p, idx) => (
            <AnimateIn key={idx} direction="up" delay={idx * 150}>
            <Card3DTilt className="p-8 border border-white/10 flex flex-col justify-between h-[420px]" maxRotation={10}>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <FaFolder className="text-2xl" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/50">Featured</span>
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">{p.title}</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed line-clamp-4">{p.description}</p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-bold py-1 px-2.5 rounded bg-white/5 text-white/70 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 flex items-center justify-center gap-2 text-xs transition-colors"
                  >
                    <FaGithub /> GitHub
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-lg bg-primary hover:bg-primary/95 text-white font-bold flex items-center justify-center gap-2 text-xs transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </Card3DTilt>
            </AnimateIn>
          ))}
        </div>

        {/* GitHub Repository Explorer */}
        <AnimateIn direction="up">
        <div>
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Dynamic Repository Explorer</h3>
              <p className="text-xs text-white/40 mt-1">Live updates directly from GitHub</p>
            </div>
            {/* Slider Navigation Buttons */}
            {repos.length > itemsPerPage && (
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors"
                  aria-label="Previous Repository"
                >
                  <FaChevronLeft size={14} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors"
                  aria-label="Next Repository"
                >
                  <FaChevronRight size={14} />
                </button>
              </div>
            )}
          </div>

          {loading ? (
            <div className="text-center py-12 text-primary animate-pulse text-lg font-bold">Fetching repositories...</div>
          ) : repos.length === 0 ? (
            <div className="text-center py-12 text-white/40">No repository data found on GitHub.</div>
          ) : (
            <div className="overflow-hidden px-1 py-4">
              <div
                className="flex transition-transform duration-500 ease-out gap-6"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                }}
              >
                {repos.map((repo) => (
                  <div
                    key={repo.id}
                    className="flex-shrink-0"
                    style={{
                      width: `calc(${100 / itemsPerPage}% - ${(itemsPerPage - 1) * 24 / itemsPerPage}px)`,
                    }}
                  >
                    <Card3DTilt className="p-6 border border-white/5 flex flex-col justify-between h-[300px]" maxRotation={8}>
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <FaCodeBranch className="text-xl text-secondary" />
                          <span className="text-[10px] font-bold py-0.5 px-2 bg-primary/10 text-primary border border-primary/20 rounded">
                            {repo.language || 'Code'}
                          </span>
                        </div>
                        <h4 className="font-extrabold text-white text-base sm:text-lg tracking-wide line-clamp-1">{repo.name}</h4>
                        <p className="text-white/50 text-xs leading-relaxed line-clamp-3">
                          {repo.description || 'Interactive repository showcasing technical architecture and utility design.'}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[10px] text-white/30">
                          Updated: {new Date(repo.updated_at).toLocaleDateString()}
                        </span>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 hover:bg-primary text-white border border-white/10 hover:border-transparent transition-all duration-300"
                          title="Open Repo Link"
                        >
                          <FaGithub className="text-sm" />
                        </a>
                      </div>
                    </Card3DTilt>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default Projects;
