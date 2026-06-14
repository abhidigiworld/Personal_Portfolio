import React, { useEffect, useRef } from 'react';

const Interactive3DCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle config
    const particleCount = Math.min(80, Math.floor((width * height) / 15000));
    const particles = [];
    const maxDistance = 150;
    const focalLength = 300; // Focal length for 3D projection

    // Mouse coordinates
    const mouse = {
      x: null,
      y: null,
      targetX: null,
      targetY: null,
      radius: 180,
    };

    // Color extraction helper
    const getColors = () => {
      const style = getComputedStyle(document.documentElement);
      const primaryStr = style.getPropertyValue('--color-primary').trim() || '99 102 241';
      const secondaryStr = style.getPropertyValue('--color-secondary').trim() || '168 85 247';
      return {
        primary: `rgba(${primaryStr.split(' ').join(',')}, 0.65)`,
        secondary: `rgba(${secondaryStr.split(' ').join(',')}, 0.2)`,
        primaryRaw: primaryStr.split(' ').map(Number),
      };
    };

    let colors = getColors();

    // Re-query colors when theme changes
    const observer = new MutationObserver(() => {
      colors = getColors();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'style'],
    });

    class Particle {
      constructor() {
        this.reset();
        // Distribute randomly across initial Z depth
        this.z = Math.random() * focalLength;
      }

      reset() {
        this.x = (Math.random() - 0.5) * width * 1.5;
        this.y = (Math.random() - 0.5) * height * 1.5;
        this.z = focalLength;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.vz = -0.4 - Math.random() * 0.6; // Move towards camera
        this.radius = 1 + Math.random() * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;

        // Reset particle if it goes past the camera or too far behind
        if (this.z <= -focalLength || this.z > focalLength * 1.5) {
          this.reset();
        }

        // Perspective projection
        const scale = focalLength / (focalLength + this.z);
        this.projX = this.x * scale + width / 2;
        this.projY = this.y * scale + height / 2;
        this.projRadius = this.radius * scale;

        // Interactive mouse interaction (repulsion/gravity in 3D space projection)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.projX - mouse.x;
          const dy = this.projY - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            // Push particles away in 2D projection
            this.x += (dx / dist) * force * 3;
            this.y += (dy / dist) * force * 3;
          }
        }
      }

      draw() {
        if (this.projX < 0 || this.projX > width || this.projY < 0 || this.projY > height) return;

        // Fade out as it approaches the screen/camera
        const alpha = Math.min(1, Math.max(0, (this.z + focalLength) / (focalLength * 2)));
        ctx.beginPath();
        ctx.arc(this.projX, this.projY, this.projRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colors.primaryRaw.join(',')}, ${alpha * 0.7})`;
        ctx.fill();
      }
    }

    // Populate particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Handle mouse movement
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = null;
      mouse.targetY = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse transition
      if (mouse.targetX !== null) {
        if (mouse.x === null) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        } else {
          mouse.x += (mouse.targetX - mouse.x) * 0.1;
          mouse.y += (mouse.targetY - mouse.y) * 0.1;
        }
      } else {
        mouse.x = null;
        mouse.y = null;
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.projX - p2.projX;
          const dy = p1.projY - p2.projY;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            // Check if projected points are visible
            if (
              p1.projX < 0 || p1.projX > width || p1.projY < 0 || p1.projY > height ||
              p2.projX < 0 || p2.projX > width || p2.projY < 0 || p2.projY > height
            ) continue;

            const alpha = (1 - dist / maxDistance) * 0.15;
            // Average the Z depths to fade out distant lines
            const avgZ = (p1.z + p2.z) / 2;
            const depthFade = Math.min(1, Math.max(0, (avgZ + focalLength) / (focalLength * 2)));

            ctx.beginPath();
            ctx.moveTo(p1.projX, p1.projY);
            ctx.lineTo(p2.projX, p2.projY);
            ctx.strokeStyle = `rgba(${colors.primaryRaw.join(',')}, ${alpha * depthFade})`;
            ctx.lineWidth = 0.5 * (focalLength / (focalLength + avgZ));
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default Interactive3DCanvas;
