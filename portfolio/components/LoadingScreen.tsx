"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Cpu, Shield, Globe } from "lucide-react";
import { PortfolioLogo } from "./PortfolioLogo";

const bootLines = [
  { text: "INITIALIZING SYSTEM...", status: "OK", delay: 0 },
  { text: "LOADING REACT COMPONENTS...", status: "OK", delay: 300 },
  { text: "MOUNTING NEXT.JS APP...", status: "DONE", delay: 700 },
  { text: "CONNECTING TO PORTFOLIO DB...", status: "CONNECTED", delay: 1200 },
  { text: "RENDERING UI ELEMENTS...", status: "SYNCED", delay: 1800 },
  { text: "STARTING FRANCIS ROGER PORTFOLIO...", status: "READY", delay: 2100 },
  { text: "INITIALIZATION COMPLETE", status: "✓", delay: 2500 },
];

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [lines, setLines] = useState<typeof bootLines>([]);

  useEffect(() => {
    // Progress bar simulation with variable speed
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.random() * 8;
        return Math.min(prev + increment, 100);
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Reveal boot lines sequentially
    bootLines.forEach((line) => {
      setTimeout(() => {
        setLines((prev) => [...prev, line]);
      }, line.delay);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: -50,
        filter: "blur(10px)", 
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center font-mono overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl"
        />
      </div>

      {/* Central HUD */}
      <div className="z-10 w-full max-w-2xl p-8 relative flex flex-col items-center">
        
        {/* Logo / Loader */}
        <div className="relative mb-12">
          {/* Spinning Rings */}
          <div className="absolute inset-0 -m-4 border border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
          <div className="absolute inset-0 -m-8 border border-dashed border-purple-500/10 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 bg-black/50 border border-purple-500/30 rounded-full flex items-center justify-center relative shadow-[0_0_50px_rgba(139,92,246,0.3)] backdrop-blur-sm"
          >
            <PortfolioLogo className="w-20 h-20" animated={true} />
          </motion.div>
        </div>

        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent tracking-tight mb-2 font-display">
            FRANCIS ROGER
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-purple-400 text-xs uppercase tracking-[0.3em]">System Initialization</span>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Terminal Log Area */}
        <div className="w-full bg-black/80 border border-purple-500/20 p-4 rounded min-h-[180px] mb-8 font-mono text-xs md:text-sm shadow-2xl shadow-purple-500/10 backdrop-blur-md relative overflow-hidden">
          {/* Scanline Overlay */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse pointer-events-none" 
               style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
          
          <div className="flex flex-col gap-1.5 relative z-10">
            {lines.map((line, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex justify-between items-center border-b border-purple-500/10 pb-1 last:border-0"
              >
                <span className="text-gray-400">
                  <span className="text-purple-500 mr-2">{'>'}</span>{line.text}
                </span>
                <span className={
                  line.status === 'READY' ? "text-purple-500 font-bold" : 
                  line.status === '✓' ? "text-green-400 font-bold text-lg" :
                  "text-purple-300"
                }>
                  [{line.status}]
                </span>
              </motion.div>
            ))}
            <div className="text-purple-500 animate-pulse mt-1">_</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full relative group">
          <div className="flex justify-between text-[10px] uppercase tracking-widest text-gray-500 mb-2">
            <span className="group-hover:text-purple-400 transition-colors">Loading Portfolio</span>
            <span className="text-white">{Math.floor(progress)}%</span>
          </div>
          <div className="h-1 w-full bg-gray-900 rounded-full overflow-hidden border border-purple-500/20">
            <motion.div 
              className="h-full bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 shadow-[0_0_15px_#8b5cf6]"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 text-[10px] text-gray-600 font-mono hidden md:block">
        <div className="flex items-center gap-2"><Cpu size={12} className="text-purple-500" /> CPU_LOAD: 34%</div>
        <div className="flex items-center gap-2 mt-2"><Shield size={12} className="text-purple-500" /> STATUS: SECURE</div>
      </div>
      
      <div className="absolute bottom-8 right-8 text-[10px] text-gray-600 font-mono text-right hidden md:block">
        <div className="flex items-center gap-2 justify-end">NET_STATUS: ONLINE <Globe size={12} className="text-purple-500" /></div>
        <div className="mt-2">VER. 2024.12 BUILD {new Date().getFullYear()}</div>
      </div>
      
      <div className="absolute bottom-8 left-8 text-[10px] text-purple-500/50 font-mono hidden md:block animate-pulse">
        {/* PORTFOLIO SYSTEM v1.0 */}
        &#47;&#47; PORTFOLIO SYSTEM v1.0
      </div>

    </motion.div>
  );
}
