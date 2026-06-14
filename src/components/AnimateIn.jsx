import React from 'react';
import useInView from '../hooks/useInView';

/**
 * AnimateIn — Reusable scroll-triggered animation wrapper.
 *
 * Props:
 *   - delay: number (ms) — stagger delay for sequential items (default: 0)
 *   - direction: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none' (default: 'up')
 *   - duration: number (ms) — transition duration (default: 700)
 *   - distance: number (px) — how far the element travels (default: 30)
 *   - className: additional CSS classes
 *   - children: React children
 */
const AnimateIn = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 700,
  distance = 30,
  className = '',
  as: Component = 'div',
}) => {
  const [ref, isInView] = useInView({ threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  const getTransform = () => {
    if (!isInView) {
      switch (direction) {
        case 'up':    return `translateY(${distance}px)`;
        case 'down':  return `translateY(-${distance}px)`;
        case 'left':  return `translateX(${distance}px)`;
        case 'right': return `translateX(-${distance}px)`;
        case 'scale': return 'scale(0.92)';
        default:      return 'none';
      }
    }
    return 'translate(0, 0) scale(1)';
  };

  const style = {
    opacity: isInView ? 1 : 0,
    transform: getTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform',
  };

  return (
    <Component ref={ref} style={style} className={className}>
      {children}
    </Component>
  );
};

export default AnimateIn;
