import React from 'react';
import Card3DTilt from './Card3DTilt';
import AnimateIn from './AnimateIn';
import { FaGraduationCap, FaCertificate, FaLaptopCode, FaTools, FaCode, FaBrain } from 'react-icons/fa';

const About = () => {
  const skillsData = [
    {
      category: 'AI & LLM Stack',
      icon: FaBrain,
      skills: ['RAG Systems', 'Agentic Testing', 'Large Language Models (LLMs)'],
    },
    {
      category: 'Web & Frameworks',
      icon: FaLaptopCode,
      skills: ['React.js', 'Spring Boot', 'Node.js', 'Microservices', 'RESTful APIs', 'HTML5 & CSS3'],
    },
    {
      category: 'Core & Languages',
      icon: FaCode,
      skills: ['Java', 'C', 'JavaScript (ES6+)', 'Perl'],
    },
    {
      category: 'Databases & Tools',
      icon: FaTools,
      skills: ['MySQL', 'SQLite', 'Git & GitHub', 'Docker', 'AWS', 'Oracle BRM'],
    },
  ];

  return (
    <section id="about" className="py-24 relative px-6 overflow-hidden">
      {/* Background Decorative Gradient Radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px] -z-10" />

      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <AnimateIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">About Me</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Summary and Bio (Takes 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <AnimateIn direction="left" delay={100}>
              <Card3DTilt className="h-full flex flex-col justify-between p-8 border border-white/10" maxRotation={8}>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <span className="text-gradient">My Journey</span>
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                    I am a Computer Science graduate from Lovely Professional University and currently a Programmer Analyst Trainee at Cognizant.
                  </p>
                  <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                    Specializing in Large Language Models (LLMs), Retrieval-Augmented Generation (RAG) systems, and full-stack development, I build autonomous AI agentic frameworks and scalable web applications.
                  </p>
                </div>

                {/* Education details */}
                <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                      <FaGraduationCap className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">B.Tech in Computer Science & Engineering</h4>
                      <p className="text-xs text-white/50">Lovely Professional University</p>
                      <p className="text-xs text-primary/80 font-bold mt-1">CGPA: 7.68/10 (Graduated 2025)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary">
                      <FaCertificate className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Claude Certified Architect</h4>
                      <p className="text-xs text-white/50">Anthropic / Skilljar (May 2026)</p>
                    </div>
                  </div>
                </div>
              </Card3DTilt>
            </AnimateIn>
          </div>

          {/* Right Side: Skill Matrices (Takes 7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillsData.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <AnimateIn key={idx} direction="up" delay={150 + idx * 100}>
                  <Card3DTilt className="p-6 border border-white/10 flex flex-col justify-between h-full" maxRotation={12}>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-accent">
                          <Icon className="text-lg text-primary" />
                        </div>
                        <h4 className="font-bold text-white tracking-wide text-sm sm:text-base">{cat.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs font-semibold py-1.5 px-3 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-white border border-white/5 hover:border-primary/30 transition-all duration-300 text-white/70"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card3DTilt>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
