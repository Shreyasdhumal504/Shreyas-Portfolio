import React from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

// Helper component for individual planets
interface PlanetProps {
  name: string;
  progress: MotionValue<number>;
  range: [number, number, number]; // [start, peak, end] of scroll progress
  xRange: [string, string, string]; // Screen X position
  yRange: [string, string, string]; // Screen Y position
  scale?: number;
  children: React.ReactNode;
  className?: string;
}

const Planet: React.FC<PlanetProps> = ({ progress, range, xRange, yRange, scale = 1, children, className = '' }) => {
  const opacity = useTransform(progress, [range[0], range[1], range[2]], [0, 1, 0]);
  const x = useTransform(progress, [range[0], range[1], range[2]], xRange);
  const y = useTransform(progress, [range[0], range[1], range[2]], yRange);
  const scaleAnim = useTransform(progress, [range[0], range[1], range[2]], [scale * 0.8, scale, scale * 0.8]);

  return (
    <motion.div
      style={{ opacity, x, y, scale: scaleAnim }}
      className={`absolute pointer-events-none will-change-transform ${className}`}
    >
      {/* Idle Animation Container */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const SolarSystem: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      
      {/* --- THE SUN (Fixed Top-Left) --- */}
      <div className="absolute -top-16 -left-16 md:-top-24 md:-left-24 w-48 h-48 md:w-80 md:h-80 z-10">
        <motion.div
          className="w-full h-full relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          {/* Sun Rays/Corona */}
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-50 animate-pulse-slow">
             <circle cx="50" cy="50" r="48" fill="url(#sunGradient)" fillOpacity="0.2" />
             <path d="M50 0 L55 10 L50 20 L45 10 Z" fill="#FDB813" />
             <path d="M100 50 L90 55 L80 50 L90 45 Z" fill="#FDB813" />
             <path d="M50 100 L45 90 L50 80 L55 90 Z" fill="#FDB813" />
             <path d="M0 50 L10 45 L20 50 L10 55 Z" fill="#FDB813" />
             {/* Diagonals */}
             <path d="M85 15 L75 22 L78 30 Z" fill="#FDB813" />
             <path d="M85 85 L78 70 L70 78 Z" fill="#FDB813" />
             <path d="M15 85 L25 78 L22 70 Z" fill="#FDB813" />
             <path d="M15 15 L22 25 L30 22 Z" fill="#FDB813" />
          </svg>
        </motion.div>
        
        {/* Sun Core */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-56 md:h-56">
            <defs>
              <radialGradient id="sunCore" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                <stop offset="0%" stopColor="#FFF7E6" />
                <stop offset="20%" stopColor="#FFD700" />
                <stop offset="90%" stopColor="#FF8C00" />
                <stop offset="100%" stopColor="#FF4500" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#sunCore)" />
            {/* Plasma Blobs */}
            <motion.circle cx="30" cy="40" r="5" fill="#FFD700" opacity="0.5" animate={{ cx: [30, 35, 30] }} transition={{duration: 5, repeat: Infinity}} />
            <motion.circle cx="70" cy="60" r="8" fill="#FF4500" opacity="0.3" animate={{ cx: [70, 65, 70] }} transition={{duration: 7, repeat: Infinity}} />
          </svg>
        </motion.div>
      </div>

      {/* --- MERCURY --- */}
      <Planet
        name="Mercury"
        progress={scrollYProgress}
        range={[0, 0.15, 0.25]}
        xRange={["80vw", "70vw", "60vw"]}
        yRange={["80vh", "40vh", "-10vh"]}
        scale={0.8}
      >
        <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-24 md:h-24 drop-shadow-lg">
          <circle cx="50" cy="50" r="45" fill="#A5A5A5" />
          <circle cx="50" cy="50" r="45" fill="url(#shadowOverlay)" />
          {/* Craters */}
          <circle cx="30" cy="40" r="5" fill="#808080" opacity="0.6" />
          <circle cx="60" cy="70" r="8" fill="#808080" opacity="0.6" />
          <circle cx="70" cy="30" r="4" fill="#808080" opacity="0.6" />
        </svg>
      </Planet>

      {/* --- VENUS --- */}
      <Planet
        name="Venus"
        progress={scrollYProgress}
        range={[0.1, 0.25, 0.4]}
        xRange={["10vw", "20vw", "30vw"]}
        yRange={["90vh", "50vh", "10vh"]}
        scale={1.2}
      >
        <svg viewBox="0 0 100 100" className="w-24 h-24 md:w-32 md:h-32 drop-shadow-lg">
          <defs>
            <linearGradient id="venusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD180" />
              <stop offset="100%" stopColor="#E65100" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#venusGrad)" />
          {/* Atmosphere bands */}
          <path d="M10 50 Q 50 20 90 50" fill="none" stroke="#FFAB40" strokeWidth="5" opacity="0.5" />
          <path d="M10 70 Q 50 40 90 70" fill="none" stroke="#FFAB40" strokeWidth="5" opacity="0.3" />
          <circle cx="50" cy="50" r="48" fill="url(#shadowOverlay)" />
        </svg>
      </Planet>

      {/* --- EARTH --- */}
      <Planet
        name="Earth"
        progress={scrollYProgress}
        range={[0.2, 0.35, 0.5]}
        xRange={["85vw", "75vw", "65vw"]}
        yRange={["90vh", "50vh", "10vh"]}
        scale={1.3}
      >
         <div className="relative w-28 h-28 md:w-40 md:h-40">
           {/* Moon orbiting */}
           <motion.div 
            className="absolute top-1/2 left-1/2 w-48 h-1"
            style={{ marginLeft: '-6rem', marginTop: '-0.125rem' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
           >
             <div className="w-4 h-4 bg-slate-200 rounded-full shadow-md absolute right-0"></div>
           </motion.div>

           <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl z-10 relative">
            <circle cx="50" cy="50" r="48" fill="#2979FF" />
            {/* Continents */}
            <path d="M30 30 Q 50 10 70 30 T 90 50 T 50 80 T 20 60 Z" fill="#4CAF50" opacity="0.9" />
            <path d="M20 50 Q 10 40 15 30" fill="#4CAF50" opacity="0.8" />
            <circle cx="50" cy="50" r="48" fill="url(#shadowOverlay)" />
            {/* Atmosphere Glow */}
            <circle cx="50" cy="50" r="48" stroke="#80D8FF" strokeWidth="2" fill="none" opacity="0.5" />
          </svg>
         </div>
      </Planet>

      {/* --- MARS --- */}
      <Planet
        name="Mars"
        progress={scrollYProgress}
        range={[0.35, 0.45, 0.6]}
        xRange={["5vw", "15vw", "25vw"]}
        yRange={["90vh", "50vh", "20vh"]}
        scale={1}
      >
        <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-28 md:h-28 drop-shadow-lg">
          <circle cx="50" cy="50" r="48" fill="#D32F2F" />
          <circle cx="50" cy="50" r="48" fill="url(#shadowOverlay)" />
          {/* Ice Cap */}
          <path d="M30 15 Q 50 5 70 15" stroke="white" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
          <circle cx="40" cy="60" r="6" fill="#B71C1C" opacity="0.6" />
        </svg>
      </Planet>

      {/* --- ASTEROID BELT --- */}
      <motion.div 
        className="absolute w-full h-32"
        style={{ 
           opacity: useTransform(scrollYProgress, [0.45, 0.55, 0.65], [0, 1, 0]),
           top: '50%',
           y: useTransform(scrollYProgress, [0.45, 0.65], ['20vh', '-20vh']),
           rotate: -10
        }}
      >
        {/* Scattered dots */}
        <div className="w-full h-full flex flex-wrap justify-center opacity-40">
           {Array.from({length: 20}).map((_, i) => (
             <div 
               key={i} 
               className="w-2 h-2 bg-slate-500 rounded-full m-8"
               style={{ 
                 transform: `scale(${Math.random() + 0.5}) translate(${Math.random()*20}px, ${Math.random()*20}px)` 
               }} 
             />
           ))}
        </div>
      </motion.div>

      {/* --- JUPITER --- */}
      <Planet
        name="Jupiter"
        progress={scrollYProgress}
        range={[0.5, 0.65, 0.8]}
        xRange={["80vw", "70vw", "60vw"]}
        yRange={["90vh", "40vh", "-10vh"]}
        scale={2.5}
      >
        <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-48 md:h-48 drop-shadow-2xl">
          <circle cx="50" cy="50" r="48" fill="#E0C097" />
          {/* Bands */}
          <rect x="2" y="25" width="96" height="10" fill="#8D6E63" opacity="0.6" rx="5" />
          <rect x="2" y="45" width="96" height="15" fill="#A1887F" opacity="0.5" rx="5" />
          <rect x="2" y="70" width="96" height="8" fill="#8D6E63" opacity="0.6" rx="5" />
          {/* Red Spot */}
          <ellipse cx="70" cy="55" rx="10" ry="6" fill="#BF360C" opacity="0.8" />
          <circle cx="50" cy="50" r="48" fill="url(#shadowOverlay)" />
        </svg>
      </Planet>

      {/* --- SATURN --- */}
      <Planet
        name="Saturn"
        progress={scrollYProgress}
        range={[0.65, 0.78, 0.9]}
        xRange={["10vw", "20vw", "30vw"]}
        yRange={["90vh", "50vh", "10vh"]}
        scale={2.2}
      >
         <div className="relative w-40 h-40 md:w-56 md:h-56 flex items-center justify-center">
            {/* Planet Body */}
            <svg viewBox="0 0 100 100" className="w-24 h-24 md:w-32 md:h-32 z-10">
              <circle cx="50" cy="50" r="48" fill="#FFE082" />
              <rect x="2" y="30" width="96" height="5" fill="#FFCA28" opacity="0.4" />
              <circle cx="50" cy="50" r="48" fill="url(#shadowOverlay)" />
            </svg>
            {/* Rings */}
            <div className="absolute w-full h-12 border-[8px] border-[#FFE082]/60 rounded-[50%] transform rotate-12 scale-x-150 z-0 border-t-slate-800/20"></div>
            <div className="absolute w-full h-12 border-[8px] border-[#FFE082]/60 rounded-[50%] transform rotate-12 scale-x-150 z-20 clip-path-half-ring"></div>
         </div>
      </Planet>

      {/* --- URANUS --- */}
      <Planet
        name="Uranus"
        progress={scrollYProgress}
        range={[0.75, 0.88, 0.98]}
        xRange={["80vw", "75vw", "70vw"]}
        yRange={["90vh", "50vh", "20vh"]}
        scale={1.5}
      >
        <svg viewBox="0 0 100 100" className="w-24 h-24 md:w-32 md:h-32 drop-shadow-lg transform -rotate-12">
          <circle cx="50" cy="50" r="48" fill="#00E5FF" opacity="0.8" />
          <circle cx="50" cy="50" r="48" fill="url(#shadowOverlay)" />
          {/* Vertical Ring */}
          <path d="M50 0 Q 80 50 50 100" fill="none" stroke="#E0F7FA" strokeWidth="2" opacity="0.6" />
        </svg>
      </Planet>

      {/* --- NEPTUNE --- */}
      <Planet
        name="Neptune"
        progress={scrollYProgress}
        range={[0.85, 0.95, 1.0]}
        xRange={["20vw", "40vw", "50vw"]}
        yRange={["90vh", "50vh", "30vh"]}
        scale={1.5}
      >
        <svg viewBox="0 0 100 100" className="w-24 h-24 md:w-32 md:h-32 drop-shadow-lg">
          <defs>
             <radialGradient id="neptuneGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1A237E" />
             </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#neptuneGrad)" />
          <path d="M10 30 Q 50 40 90 20" fill="none" stroke="#82B1FF" strokeWidth="3" opacity="0.3" />
          <circle cx="50" cy="50" r="48" fill="url(#shadowOverlay)" />
        </svg>
      </Planet>

      {/* Shared Gradients */}
      <svg className="w-0 h-0">
        <defs>
          <radialGradient id="shadowOverlay" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="0.1" />
            <stop offset="60%" stopColor="transparent" stopOpacity="0" />
            <stop offset="90%" stopColor="black" stopOpacity="0.5" />
          </radialGradient>
          <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF176" />
            <stop offset="100%" stopColor="#FF6F00" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SolarSystem;
