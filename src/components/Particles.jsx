import React from 'react';
import { motion } from 'framer-motion';

const Particles = () => {
  // Generate random particles to simulate "Upside Down" spores
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, 
    y: Math.random() * 100, 
    size: Math.random() * 4 + 1, 
    duration: Math.random() * 20 + 10, 
    delay: Math.random() * 5,
  }));

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden'
    }}>
      {particles.map(p => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '50%',
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.6)',
          }}
          animate={{
            y: [0, -100, -200],
            x: [0, Math.random() * 50 - 25, Math.random() * 100 - 50],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
