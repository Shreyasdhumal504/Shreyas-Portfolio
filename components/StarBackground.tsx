import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate static stars on mount to avoid hydration mismatch
    const newStars = Array.from({ length: 70 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-space-900 via-space-800 to-space-900 opacity-90" />
      
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Nebula Overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-neon-purple/5 blur-[120px] rounded-full mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-neon-cyan/5 blur-[120px] rounded-full mix-blend-screen" />
    </div>
  );
};

export default StarBackground;