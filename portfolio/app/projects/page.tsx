"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Eye, ExternalLink, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ParticleBackground } from "@/components/ParticleBackground";

const allProjectsData = [
  {
    id: 1,
    title: "Suiguard",
    description: "Using protection at night? ❌ Use protection for Sui ✅ - A comprehensive security tool for the Sui blockchain ecosystem.",
    image: "/img/Suiguard.jpg",
    technologies: ["JavaScript", "Sui Blockchain", "Web3", "Security"],
    githubUrl: "https://github.com/ChilliRoger/suiguard",
    liveUrl: "https://chilliroger.github.io/suiguard",
    status: "Completed"
  },
  {
    id: 2,
    title: "ROSACO",
    description: "ROSACO: The colour memory game where your brain forgets faster than your eyes blink. Can you remember more than a goldfish? Let's find out!",
    image: "/img/ROSACO.jpeg",
    technologies: ["TypeScript", "Game Development", "Memory Game", "Interactive"],
    githubUrl: "https://github.com/ChilliRoger/ROSACO",
    liveUrl: "https://www.reddit.com/r/r0_ca_dev/comments/1ncdp19/r0ca/",
    status: "Completed"
  },
  {
    id: 3,
    title: "Invoice Generator",
    description: "Get paid faster than your last situationship ended. A professional invoice generation tool for freelancers and small businesses.",
    image: "/img/Invoice Generator.jpeg",
    technologies: ["JavaScript", "Invoice Management", "Business Tools", "PDF Generation"],
    githubUrl: "https://github.com/ChilliRoger/invoice-generator",
    liveUrl: "https://invoice-generator-ten-iota.vercel.app/",
    status: "Completed"
  },
  {
    id: 4,
    title: "BugBuster Academy",
    description: "⚡ BugBuster Academy — squash bugs, earn clout, get a cert. Debugging but make it fun 🦸‍♂️ - Learn debugging skills through gamification.",
    image: "/img/Bug Buster academy.jpeg",
    technologies: ["JavaScript", "Education", "Gamification", "Learning Platform"],
    githubUrl: "https://github.com/ChilliRoger/bugbuster-academy",
    liveUrl: "https://www.npmjs.com/package/bugbuster-academy",
    status: "Completed"
  },
  {
    id: 5,
    title: "Enthiran 2.0",
    description: "I'm the AI that slips past firewalls like a ghost in the code. 👻💻 - An advanced AI-powered application with enhanced capabilities.",
    image: "/img/Enthiran20.jpeg",
    technologies: ["CSS", "AI", "Machine Learning", "Frontend"],
    githubUrl: "https://github.com/ChilliRoger/enthiran2.0",
    liveUrl: "https://enthiran20.vercel.app/",
    status: "Completed"
  },
  {
    id: 6,
    title: "MyTerminal1",
    description: "No GUI. No mercy. Just pure terminal-powered web chaos. Boot up. Type stuff. Pretend you're a hacker. ⚠️ Warning: sudo may not work, but your imagination will.",
    image: "/img/Terminal1.jpeg",
    technologies: ["TypeScript", "Terminal", "Web Terminal", "Interactive"],
    githubUrl: "https://github.com/ChilliRoger/myterminal1",
    liveUrl: "https://myterminal1.vercel.app/",
    status: "Completed"
  },
  {
    id: 7,
    title: "PDF Merger",
    description: "The simplest way to combine PDF files online - no registration required. A clean, efficient tool for merging multiple PDF documents.",
    image: "/img/PDF merger.jpeg",
    technologies: ["Python", "PDF Processing", "Web App", "File Management"],
    githubUrl: "https://github.com/ChilliRoger/pdf-merger",
    liveUrl: "https://pdfs-merger.vercel.app/",
    status: "Completed"
  },
  {
    id: 8,
    title: "Tipzy",
    description: "Spread smiles with Tipzy—scan, tip, and make every waiter, barber, and parking guard's day a little brighter! A mobile tipping application for service workers.",
    image: "/img/Tipzy.jpeg",
    technologies: ["TypeScript", "Mobile App", "Payment", "QR Code"],
    githubUrl: "https://github.com/ChilliRoger/Tipzy",
    liveUrl: "https://tipzy-iota.vercel.app/",
    status: "Completed"
  },
  {
    id: 9,
    title: "The-Den-Day",
    description: "Bringing the party to your Wi-Fi zone! A social networking application for connecting people in local areas.",
    image: "/img/The Den Day.jpeg",
    technologies: ["TypeScript", "Social Network", "Local Connect", "Web App"],
    githubUrl: "https://github.com/ChilliRoger/den-day.git",
    liveUrl: "https://den-day.vercel.app/",
    status: "Completed"
  },
  {
    id: 10,
    title: "Death-form",
    description: "Check ur death ;) - A quirky web application with an interesting concept and interactive elements.",
    image: "/img/Death form.jpeg",
    technologies: ["HTML", "Interactive", "Web App", "Frontend"],
    githubUrl: "https://github.com/ChilliRoger/Death-form",
    liveUrl: "https://chilliroger.github.io/Death-form/",
    status: "Completed"
  },
  {
    id: 11,
    title: "Block1-frontend",
    description: "A modern frontend application built with TypeScript, featuring clean architecture and responsive design.",
    image: "/img/Block1 frontend.jpeg",
    technologies: ["TypeScript", "Frontend", "Modern UI", "Responsive"],
    githubUrl: "https://github.com/ChilliRoger/block1-frontend",
    liveUrl: "https://block1-frontend.vercel.app/",
    status: "Completed"
  },
  {
    id: 12,
    title: "Breath-Elivator",
    description: "Inhale confidence, exhale... WiFi stress. 😮‍💨📶 A breathing exercise application to help reduce stress and anxiety.",
    image: "/img/Breath elivator.jpeg",
    technologies: ["CSS", "Wellness", "Breathing Exercise", "Health App"],
    githubUrl: "https://github.com/ChilliRoger/Breath-Elivator",
    liveUrl: "https://chilliroger.github.io/Breath-Elivator/",
    status: "Completed"
  },
  {
    id: 13,
    title: "Movie Ticket App",
    description: "Disclaimer: We cannot guarantee seat availability during Marvel premieres, SRK comebacks, or Rajinikanth releases. Proceed at your own risk. 😎 A comprehensive movie ticket booking system.",
    image: "/img/Movie ticket app.jpeg",
    technologies: ["CSS", "Movie Booking", "E-commerce", "Entertainment"],
    githubUrl: "https://github.com/ChilliRoger/movie-ticket-app",
    liveUrl: "https://chilliroger.github.io/movie-ticket-app/",
    status: "Completed"
  },
  {
    id: 14,
    title: "NOTA",
    description: "None Of The Above - A voting application that empowers citizens to exercise their right to reject all candidates in an election.",
    image: "/img/NOTA.jpeg",
    technologies: ["TypeScript", "Voting System", "Democracy", "Web App"],
    githubUrl: "https://github.com/ChilliRoger/NOTA",
    liveUrl: "https://nota-voting.vercel.app/",
    status: "Completed"
  },
  {
    id: 15,
    title: "SHA-256 vs MD5 Collision",
    description: "A cybersecurity demonstration comparing SHA-256 and MD5 hash algorithms, showcasing collision vulnerabilities and the importance of secure hashing.",
    image: "/img/SHA-256 vs MD5 Collision.jpeg",
    technologies: ["Cybersecurity", "Cryptography", "Hash Algorithms", "Security"],
    githubUrl: "https://github.com/ChilliRoger/cyber-assignment.git",
    liveUrl: "https://cyber-assignment-five.vercel.app/",
    status: "Completed"
  },
  {
    id: 16,
    title: "Cyber Attack Demos",
    description: "Interactive demonstrations of various cyber attack techniques and defense mechanisms. Educational tool for understanding cybersecurity threats.",
    image: "/img/Cyber Attack Demos.jpeg",
    technologies: ["Cybersecurity", "Security Testing", "Attack Simulation", "Education"],
    githubUrl: "https://github.com/ChilliRoger/fight-of-attacks.git",
    liveUrl: "https://fight-of-attacks.vercel.app/",
    status: "Completed"
  },
  {
    id: 17,
    title: "Goofyji",
    description: "A fun and quirky emoji-based project that brings goofiness to your digital conversations.",
    image: "/img/goofyji.png",
    technologies: ["TypeScript", "Next.js", "Web App", "Interactive"],
    githubUrl: "https://github.com/ChilliRoger/Goofyji.git",
    liveUrl: "https://goofyji.vercel.app/",
    status: "Completed"
  },
  {
    id: 18,
    title: "Live ETH Bot",
    description: "Real-time Ethereum blockchain monitoring bot that tracks transactions, smart contracts, and network activity.",
    image: "/img/eth-live-bot.jpg",
    technologies: ["Ethereum", "Bot", "Web3", "Blockchain"],
    githubUrl: "https://github.com/ChilliRoger/live-eth-bot.git",
    liveUrl: "",
    status: "Completed"
  },
  {
    id: 19,
    title: "Phoenix Forge",
    description: "A decentralized platform rising from the ashes - building the future of Web3 applications with innovative blockchain solutions.",
    image: "/img/phoenix-forge.png",
    technologies: ["Web3", "Blockchain", "Decentralized", "Smart Contracts"],
    githubUrl: "https://github.com/ChilliRoger/Phoenix-forge.git",
    liveUrl: "https://hbeigvoy.pinit.eth.limo/",
    status: "Completed"
  },
  {
    id: 20,
    title: "DeTransfer",
    description: "Decentralized file transfer solution enabling secure, peer-to-peer file sharing on the blockchain without intermediaries.",
    image: "/img/DeTransfer.png",
    technologies: ["Web3", "Decentralized", "File Transfer", "Blockchain"],
    githubUrl: "https://github.com/anbusan19/DeTransfer.git",
    liveUrl: "https://detransfer.vercel.app/",
    status: "Completed"
  },
  {
    id: 21,
    title: "FlowLang",
    description: "A modern programming language designed for intuitive flow-based development. Build applications with a natural, readable syntax.",
    image: "/img/flowlang.jpeg",
    technologies: ["Python", "Programming Language", "Compiler", "PyPI"],
    githubUrl: "https://github.com/ChilliRoger/flowlang.git",
    liveUrl: "https://pypi.org/project/flowlang-script/1.0.1",
    status: "Completed"
  },
  {
    id: 22,
    title: "FlowLang Documentation",
    description: "Comprehensive documentation and learning resources for FlowLang programming language. Interactive tutorials and examples.",
    image: "/img/flowlangdoc.jpeg",
    technologies: ["TypeScript", "Documentation", "Next.js", "Education"],
    githubUrl: "https://github.com/ChilliRoger/flowlangdoc.git",
    liveUrl: "https://flowlangdoc.vercel.app/",
    status: "Completed"
  }
];

export default function ProjectsPage() {
  const router = useRouter();

  const handleBackClick = () => {
    // Set flag to skip loading screen
    sessionStorage.setItem('skipLoading', 'true');
    router.push('/');
  };

  return (
    <div className="min-h-screen text-foreground relative">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Button variant="outline" size="sm" className="mr-4" onClick={handleBackClick}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight">
            All Projects
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore my complete collection of projects, from blockchain security tools to interactive games, business applications, and wellness apps.
          </p>
          
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
            >
              <a 
                href="https://github.com/ChilliRoger?page=1&tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                View All on GitHub
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6 lg:gap-8">
          {allProjectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className="backdrop-blur-sm bg-background/80"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="backdrop-blur-sm bg-background/80 text-xs">
                      #{project.id}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="flex flex-col justify-between flex-grow">
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-auto">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex-1"
                    >
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        asChild
                        className="flex-1"
                      >
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 py-8 border-t border-border"
        >
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">More Projects Coming Soon!</h3>
            <p className="text-muted-foreground">
              I&apos;m constantly working on new projects and improving existing ones. 
              Follow me on GitHub to stay updated with my latest work.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-3"
              >
                <a 
                  href="https://github.com/ChilliRoger" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="h-5 w-5 mr-2" />
                  Follow on GitHub
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
