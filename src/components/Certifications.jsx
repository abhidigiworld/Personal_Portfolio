import React from 'react';
import Card3DTilt from './Card3DTilt';
import AnimateIn from './AnimateIn';
import { FaCertificate, FaExternalLinkAlt, FaAward } from 'react-icons/fa';

const certifications = [
  {
    title: 'Claude Certified Architect',
    issuer: 'Anthropic / Skilljar',
    date: 'May 2026',
    verifyUrl: 'https://verify.skilljar.com/c/mycd9cr3i73k',
    color: 'from-violet-500 to-purple-600',
    iconBg: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
  },
  {
    title: 'Node.js Framework Certification',
    issuer: 'Board Infinity',
    date: 'May 2024',
    verifyUrl: null,
    color: 'from-emerald-500 to-teal-600',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
  },
  {
    title: 'React Frontend Certification',
    issuer: 'IBM',
    date: 'March 2024',
    verifyUrl: null,
    color: 'from-cyan-500 to-blue-600',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
  },
  {
    title: 'JavaScript Certification',
    issuer: 'Board Infinity',
    date: 'July 2023',
    verifyUrl: null,
    color: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] -z-10" />

      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <AnimateIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 flex items-center justify-center gap-3">
              <FaAward className="text-primary text-2xl sm:text-3xl" />
              <span>Certifications</span>
            </h2>
            <p className="text-white/50 text-sm max-w-md mx-auto">
              Verified professional credentials that validate my expertise in modern technologies.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
          </div>
        </AnimateIn>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <AnimateIn key={idx} direction="up" delay={idx * 120}>
              <Card3DTilt className="p-6 border border-white/10 flex flex-col justify-between h-full min-h-[280px]" maxRotation={10}>
                <div className="space-y-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${cert.iconBg} border flex items-center justify-center`}>
                    <FaCertificate className="text-xl" />
                  </div>

                  {/* Title & Issuer */}
                  <div>
                    <h3 className="text-base font-bold text-white leading-snug">{cert.title}</h3>
                    <p className="text-xs text-white/50 mt-1">{cert.issuer}</p>
                  </div>

                  {/* Date Badge */}
                  <div className="inline-flex">
                    <span className={`text-[10px] font-bold py-1 px-2.5 rounded-lg bg-gradient-to-r ${cert.color} text-white`}>
                      {cert.date}
                    </span>
                  </div>
                </div>

                {/* Verify Link */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 hover:bg-primary/15 text-white/80 hover:text-white font-bold text-xs border border-white/5 hover:border-primary/30 transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="text-[10px]" />
                      Verify Credential
                    </a>
                  ) : (
                    <div className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/[0.02] text-white/30 font-semibold text-xs border border-white/5">
                      <FaCertificate className="text-[10px]" />
                      Professional Certificate
                    </div>
                  )}
                </div>
              </Card3DTilt>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
