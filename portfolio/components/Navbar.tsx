"use client";

import { useState, useEffect } from "react";
import { Home, GraduationCap, Briefcase, FolderGit2, Code, Heart, Compass, Mail, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PortfolioLogo } from "@/components/PortfolioLogo";
import MobileDock from "@/components/MobileDock";
import { useRouter } from "next/navigation";

const navigationItems = [
  { name: "Education", href: "#education", icon: <GraduationCap className="w-5 h-5" /> },
  { name: "Experience", href: "#experience", icon: <Briefcase className="w-5 h-5" /> },
  { name: "Projects", href: "/projects", icon: <FolderGit2 className="w-5 h-5" /> },
  { name: "Skills", href: "#skills", icon: <Code className="w-5 h-5" /> },
  { name: "Volunteering", href: "#volunteering", icon: <Heart className="w-5 h-5" /> },
  { name: "Exploring", href: "#exploring", icon: <Compass className="w-5 h-5" /> },
  { name: "Socials", href: "#socials", icon: <Mail className="w-5 h-5" /> },
];

const mobileNavItems = [
  { name: "Home", href: "#", icon: <Home className="w-5 h-5" /> },
  { name: "Education", href: "#education", icon: <GraduationCap className="w-5 h-5" /> },
  { name: "Experience", href: "#experience", icon: <Briefcase className="w-5 h-5" /> },
  { name: "Projects", href: "/projects", icon: <FolderGit2 className="w-5 h-5" /> },
  { name: "Skills", href: "#skills", icon: <Code className="w-5 h-5" /> },
  { name: "Socials", href: "#socials", icon: <Mail className="w-5 h-5" /> },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      // Handle page navigation
      window.location.href = href;
    } else {
      // Handle hash navigation
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 lg:h-18 xl:h-20">
            {/* Logo - Left aligned */}
            <div
              className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0 min-w-[180px]"
              onClick={scrollToTop}
            >
              <div className="relative w-10 h-10">
                <PortfolioLogo className="w-full h-full" />
              </div>
              <div className="hidden 2xl:block">
                <h1 className="text-base xl:text-lg font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent whitespace-nowrap">
                  Francis Roger
                </h1>
                <p className="text-xs text-muted-foreground">Developer</p>
              </div>
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center justify-center gap-2 lg:gap-4 xl:gap-6 2xl:gap-8 absolute left-1/2 -translate-x-1/2">
              {navigationItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm lg:text-base font-medium hover:text-primary transition-colors px-2 lg:px-3 xl:px-4 whitespace-nowrap"
                >
                  {item.name}
                </Button>
              ))}
            </nav>
            
            {/* Right side - Terminal Button */}
            <div className="flex items-center justify-end min-w-[180px]">
              <Button
                variant="outline"
                size="sm"
                onClick={() => router.push('/terminal')}
                className="hidden lg:flex items-center gap-2 bg-white/5 backdrop-blur-md hover:bg-white/10 border border-white/10 hover:border-primary/50 text-gray-300 hover:text-white shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <Terminal className="h-4 w-4" />
                <span className="font-mono text-sm">Terminal</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Dock Navigation */}
      <div className="md:hidden">
        <MobileDock
          items={mobileNavItems.map(item => ({
            icon: item.icon,
            label: item.name,
            onClick: () => scrollToSection(item.href),
          }))}
        />
      </div>
    </>
  );
}
