"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import LogoLoop to avoid SSR issues
const LogoLoop = dynamic(() => import("@/components/LogoLoop"), {
  ssr: false,
  loading: () => <div className="w-32 h-32 bg-primary/20 rounded-full animate-pulse flex items-center justify-center">
    <span className="text-primary font-bold">FR</span>
  </div>
});

export default function HeroSection() {
  const scrollToSocials = () => {
    const element = document.querySelector("#socials");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Animation */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          dangerouslySetInnerHTML={{
            __html: `<spline-viewer url="https://prod.spline.design/nqlUdgKGaCwXnsgm/scene.splinecode" class="w-full h-full" style="width: 100%; height: 100%; opacity: 0.8;"></spline-viewer>`
          }}
        />
        {/* Fallback content */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 bg-primary/20 rounded-full animate-pulse mx-auto mb-4" />
            <p className="text-muted-foreground">3D Animation Loading...</p>
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground">
            Francis Roger
          </h1>
          
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            Frontend Developer | Problem Solver | Lifelong Learner
          </motion.p>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={scrollToSocials}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.querySelector("#projects");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-8 py-3 text-lg font-semibold"
            >
              View My Work
            </Button>
          </motion.div>
        </motion.div>

        {/* LogoLoop Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative w-32 h-32">
            <LogoLoop 
              logos={[
                {
                  node: "FR",
                  title: "Francis Roger"
                }
              ]}
              speed={60}
              direction="left"
              logoHeight={32}
              gap={16}
              pauseOnHover={true}
              className="w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-2xl font-bold text-primary">FR</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
