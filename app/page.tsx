"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import VolunteeringSection from "@/components/sections/VolunteeringSection";
import ExploringSection from "@/components/sections/ExploringSection";
import SocialsSection from "@/components/sections/SocialsSection";
import LoadingScreen from "@/components/LoadingScreen";
import { ParticleBackground } from "@/components/ParticleBackground";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if we should skip the loading screen
    const skipLoading = sessionStorage.getItem('skipLoading');
    
    if (skipLoading) {
      // Remove the flag and skip loading
      sessionStorage.removeItem('skipLoading');
      setIsLoading(false);
    } else {
      // Show loading screen on every page load/refresh
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3300); // 2500ms for boot sequence + 800ms for completion message
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className={`min-h-screen text-foreground relative transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Particle Background */}
        <ParticleBackground />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Portfolio Sections */}
        <main className="relative z-10">
          <SectionWrapper id="education" title="Education">
            <EducationSection />
          </SectionWrapper>
          
          <SectionWrapper id="experience" title="Experience">
            <ExperienceSection />
          </SectionWrapper>
          
          <SectionWrapper id="projects" title="Projects">
            <ProjectsSection />
          </SectionWrapper>
          
          <SectionWrapper id="skills" title="Skills">
            <SkillsSection />
          </SectionWrapper>
          
          <SectionWrapper id="volunteering" title="Volunteering">
            <VolunteeringSection />
          </SectionWrapper>
          
          <SectionWrapper id="exploring" title="Exploring">
            <ExploringSection />
          </SectionWrapper>
          
          <SectionWrapper id="socials" title="Get In Touch">
            <SocialsSection />
          </SectionWrapper>
        </main>
      </div>
    </>
  );
}
