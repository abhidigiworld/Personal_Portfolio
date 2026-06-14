import React, { useState, useEffect, useRef } from 'react';
import { FaPalette, FaCheck } from 'react-icons/fa';

const themes = [
  {
    id: 'violet',
    name: 'Cosmic Violet',
    className: 'theme-violet',
    colorClass: 'bg-indigo-500',
    accentColor: '#818cf8',
  },
  {
    id: 'cyber',
    name: 'Cyber Neon',
    className: 'theme-cyber',
    colorClass: 'bg-cyan-400',
    accentColor: '#22d3ee',
  },
  {
    id: 'emerald',
    name: 'Emerald Aurora',
    className: 'theme-emerald',
    colorClass: 'bg-emerald-500',
    accentColor: '#10b981',
  },
  {
    id: 'sunset',
    name: 'Sunset Crimson',
    className: 'theme-sunset',
    colorClass: 'bg-red-500',
    accentColor: '#ef4444',
  },
  {
    id: 'solar',
    name: 'Solar Amber',
    className: 'theme-solar',
    colorClass: 'bg-amber-500',
    accentColor: '#f59e0b',
  },
];

const ThemeCustomizer = () => {
  const [activeTheme, setActiveTheme] = useState('violet');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Load persisted theme
    const savedThemeId = localStorage.getItem('portfolio-theme') || 'violet';
    const initialTheme = themes.find((t) => t.id === savedThemeId) || themes[0];
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (theme) => {
    setActiveTheme(theme.id);
    localStorage.setItem('portfolio-theme', theme.id);

    // Remove all previous theme classes from document
    themes.forEach((t) => {
      document.documentElement.classList.remove(t.className);
    });

    // Add current theme class
    document.documentElement.classList.add(theme.className);
  };

  // Close panel if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed right-6 bottom-6 z-[100] flex flex-col items-end gap-3"
    >
      {/* Theme selection panel */}
      <div
        className={`glass-container rounded-2xl p-4 transition-all duration-500 origin-bottom-right shadow-2xl flex flex-col gap-3 ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
        }`}
        style={{ width: '220px' }}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-1">
          <span className="font-bold text-sm text-white/90 tracking-wide">Select Theme</span>
          <span className="text-xs text-white/40">Presets</span>
        </div>
        <div className="flex flex-col gap-2">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => applyTheme(theme)}
              className={`flex items-center justify-between p-2 rounded-xl transition-all duration-300 ${
                activeTheme === theme.id
                  ? 'bg-white/10 text-white border border-white/20'
                  : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={`w-3.5 h-3.5 rounded-full ${theme.colorClass} shadow-md`} />
                <span className="text-xs font-semibold">{theme.name}</span>
              </div>
              {activeTheme === theme.id && <FaCheck className="text-xs text-primary" />}
            </button>
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full flex items-center justify-center bg-primary text-white shadow-[0_8px_30px_rgb(var(--color-primary)/0.4)] hover:shadow-[0_12px_40px_rgb(var(--color-primary)/0.6)] border border-white/20 hover:scale-110 active:scale-95 transition-all duration-300 relative overflow-hidden group"
        aria-label="Customize theme colors"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        <FaPalette className="text-xl animate-pulse-slow" />
      </button>
    </div>
  );
};

export default ThemeCustomizer;
