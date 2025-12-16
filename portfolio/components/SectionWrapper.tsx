"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ 
  id, 
  title, 
  children, 
  className = "" 
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 relative ${className}`}>
      <div className="container mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 xl:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-4 xl:mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight py-2">
            {title}
          </h2>
          <div className="w-24 xl:w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
