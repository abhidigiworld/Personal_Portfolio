import React, { useState, useRef } from 'react';

const Card3DTilt = ({ children, className = '', maxRotation = 10 }) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
  });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-maxRotation to maxRotation)
    const rotateX = -((y - centerY) / centerY) * maxRotation;
    const rotateY = ((x - centerX) / centerX) * maxRotation;

    // Set CSS custom properties for glare reflection tracking
    const mouseXPercent = (x / rect.width) * 100;
    const mouseYPercent = (y / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${mouseXPercent}%`);
    card.style.setProperty('--mouse-y', `${mouseYPercent}%`);

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)', // Snappy during movement
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)', // Smooth reset
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`glass-card relative overflow-hidden rounded-2xl p-6 ${className}`}
    >
      <div className="card-glare" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Card3DTilt;
