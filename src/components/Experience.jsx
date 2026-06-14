import React from 'react';
import Card3DTilt from './Card3DTilt';
import AnimateIn from './AnimateIn';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: 'Programmer Analyst Trainee',
      company: 'Cognizant Technology Solutions',
      location: 'India',
      duration: 'July 2025 – Present',
      description: [
        'Undergoing intensive Oracle Billing & Revenue Management (OBRM) training focused on Perl, C, and C++, gaining hands-on experience in customization and integration of telecom billing modules.',
        'Implementing OBRM use cases and practice tasks to validate complex billing flows, data mapping, and reconciliation logic.',
        'Building robust debugging and test scripts in Perl and C to validate module behavior, accelerating issue resolution times.'
      ],
    },
    {
      role: 'Intern',
      company: 'Cognizant Technology Solutions',
      location: 'India',
      duration: 'February 2025 – June 2025',
      description: [
        'Architected and delivered scalable RESTful microservices using Java and Spring Boot for core business backend modules.',
        'Containerized applications with Docker and deployed to AWS EC2, improving deployment consistency and pipeline repeatability.',
        'Engineered a high-performance concurrent credit-card processing module in C using POSIX threads and shared memory to simulate real-time transaction workflows.'
      ],
    }
  ];

  return (
    <section id="experience" className="py-24 relative px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[150px] -z-10" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] -z-10" />

      <div className="container mx-auto max-w-4xl">
        {/* Section Heading */}
        <AnimateIn direction="up">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Professional Experience</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
        </AnimateIn>

        {/* Timeline container */}
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <AnimateIn key={idx} direction="up" delay={idx * 200}>
              <div className="relative pl-8 md:pl-12 group">
                {/* Timeline dot */}
                <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-bg-base border-2 border-primary flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(var(--color-primary),0.5)]">
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-secondary transition-colors" />
                </div>

                {/* Experience Card */}
                <Card3DTilt className="p-8 border border-white/10 backdrop-blur-md" maxRotation={5}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 group-hover:text-primary transition-colors">
                        <FaBriefcase className="text-primary text-lg" />
                        <span>{exp.role}</span>
                      </h3>
                      <h4 className="text-base font-semibold text-white/80 mt-1">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col sm:items-end text-xs text-white/50 space-y-1">
                      <span className="flex items-center gap-1.5 font-semibold text-primary/80">
                        <FaCalendarAlt />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3.5">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </Card3DTilt>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
