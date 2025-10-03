import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import VolunteeringSection from "@/components/sections/VolunteeringSection";
import ExploringSection from "@/components/sections/ExploringSection";
import SocialsSection from "@/components/sections/SocialsSection";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground relative">
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
        
        <SectionWrapper id="certifications" title="Certifications">
          <CertificationsSection />
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
  );
}
