import React from 'react';
import { motion, Variants } from 'framer-motion';
import clsx from 'clsx';

interface PortfolioLogoProps {
  className?: string;
  animated?: boolean;
}

export const PortfolioLogo: React.FC<PortfolioLogoProps> = ({ className, animated = false }) => {
  const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.15, type: "spring", duration: 1.8, bounce: 0 },
        opacity: { delay: i * 0.15, duration: 0.01 }
      }
    })
  };

  return (
    <div className={clsx("relative flex items-center justify-center", className)}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Purple Gradient */}
          <linearGradient id="portfolioGradient" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          
          {/* Neon Glow Effect */}
          <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Radial Gradient */}
          <radialGradient id="centerGlow">
            <stop offset="0%" stopColor="#d8b4fe" stopOpacity="1" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.2" />
          </radialGradient>
        </defs>

        {/* Outer Circle Frame */}
        <motion.circle
          cx="50"
          cy="50"
          r="42"
          stroke="url(#portfolioGradient)"
          strokeWidth="2"
          fill="transparent"
          variants={draw}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={0}
          className="drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
        />

        {/* Middle Octagon */}
        <motion.path
          d="M50 15 L70 25 L80 45 L80 55 L70 75 L50 85 L30 75 L20 55 L20 45 L30 25 Z"
          stroke="#a855f7"
          strokeWidth="1.5"
          fill="transparent"
          strokeLinejoin="round"
          variants={draw}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={1}
          filter="url(#neonGlow)"
        />

        {/* Orbital Rings */}
        <motion.path
          d="M50 25 Q75 50 50 75 Q25 50 50 25"
          stroke="#c084fc"
          strokeWidth="1"
          fill="transparent"
          strokeLinecap="round"
          variants={draw}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={2}
          opacity="0.6"
        />

        <motion.path
          d="M25 50 Q50 25 75 50 Q50 75 25 50"
          stroke="#c084fc"
          strokeWidth="1"
          fill="transparent"
          strokeLinecap="round"
          variants={draw}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={2}
          opacity="0.6"
        />

        {/* Central Star/Burst Pattern */}
        <motion.g
          variants={draw}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={3}
        >
          <line x1="50" y1="35" x2="50" y2="45" stroke="url(#portfolioGradient)" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="55" x2="50" y2="65" stroke="url(#portfolioGradient)" strokeWidth="2" strokeLinecap="round" />
          <line x1="35" y1="50" x2="45" y2="50" stroke="url(#portfolioGradient)" strokeWidth="2" strokeLinecap="round" />
          <line x1="55" y1="50" x2="65" y2="50" stroke="url(#portfolioGradient)" strokeWidth="2" strokeLinecap="round" />
          <line x1="39" y1="39" x2="45" y2="45" stroke="url(#portfolioGradient)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="55" y1="55" x2="61" y2="61" stroke="url(#portfolioGradient)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="61" y1="39" x2="55" y2="45" stroke="url(#portfolioGradient)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="45" y1="55" x2="39" y2="61" stroke="url(#portfolioGradient)" strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>

        {/* Pulsing Core */}
        <motion.circle
          cx="50"
          cy="50"
          r="6"
          fill="url(#centerGlow)"
          initial={{ opacity: 0.4, scale: 0.8 }}
          animate={{ 
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1.3, 0.8]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          filter="url(#neonGlow)"
        />

        {/* Corner Node Indicators */}
        <motion.circle
          cx="15"
          cy="50"
          r="2.5"
          fill="#a855f7"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 0 }}
        />
        <motion.circle
          cx="85"
          cy="50"
          r="2.5"
          fill="#a855f7"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 0.3 }}
        />
        <motion.circle
          cx="50"
          cy="15"
          r="2.5"
          fill="#a855f7"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }}
        />
        <motion.circle
          cx="50"
          cy="85"
          r="2.5"
          fill="#a855f7"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 0.9 }}
        />

        {/* Rotating Tech Arc */}
        <motion.path
          d="M50 10 A40 40 0 0 1 90 50"
          stroke="#d8b4fe"
          strokeWidth="1"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray="4 4"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{ transformOrigin: "50px 50px" }}
          opacity="0.4"
        />

      </svg>
    </div>
  );
};
