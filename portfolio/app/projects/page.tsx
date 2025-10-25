"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Eye, ExternalLink, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const allProjectsData = [
  {
    id: 1,
    title: "Suiguard",
    description: "Using protection at night? ❌ Use protection for Sui ✅ - A comprehensive security tool for the Sui blockchain ecosystem.",
    image: "/img/gradient.png",
    technologies: ["JavaScript", "Sui Blockchain", "Web3", "Security"],
    githubUrl: "https://github.com/ChilliRoger/suiguard",
    liveUrl: "https://github.com/ChilliRoger/suiguard",
    status: "Completed"
  },
  {
    id: 2,
    title: "ROSACO",
    description: "ROSACO: The colour memory game where your brain forgets faster than your eyes blink. Can you remember more than a goldfish? Let's find out!",
    image: "/img/gradient.png",
    technologies: ["TypeScript", "Game Development", "Memory Game", "Interactive"],
    githubUrl: "https://github.com/ChilliRoger/ROSACO",
    liveUrl: "https://github.com/ChilliRoger/ROSACO",
    status: "Completed"
  },
  {
    id: 3,
    title: "Invoice Generator",
    description: "Get paid faster than your last situationship ended. A professional invoice generation tool for freelancers and small businesses.",
    image: "/img/gradient.png",
    technologies: ["JavaScript", "Invoice Management", "Business Tools", "PDF Generation"],
    githubUrl: "https://github.com/ChilliRoger/invoice-generator",
    liveUrl: "https://github.com/ChilliRoger/invoice-generator",
    status: "Completed"
  },
  {
    id: 4,
    title: "BugBuster Academy",
    description: "⚡ BugBuster Academy — squash bugs, earn clout, get a cert. Debugging but make it fun 🦸‍♂️ - Learn debugging skills through gamification.",
    image: "/img/gradient.png",
    technologies: ["JavaScript", "Education", "Gamification", "Learning Platform"],
    githubUrl: "https://github.com/ChilliRoger/bugbuster-academy",
    liveUrl: "https://github.com/ChilliRoger/bugbuster-academy",
    status: "Completed"
  },
  {
    id: 5,
    title: "Enthiran 2.0",
    description: "I'm the AI that slips past firewalls like a ghost in the code. 👻💻 - An advanced AI-powered application with enhanced capabilities.",
    image: "/img/gradient.png",
    technologies: ["CSS", "AI", "Machine Learning", "Frontend"],
    githubUrl: "https://github.com/ChilliRoger/enthiran2.0",
    liveUrl: "https://github.com/ChilliRoger/enthiran2.0",
    status: "Completed"
  },
  {
    id: 6,
    title: "MyTerminal1",
    description: "No GUI. No mercy. Just pure terminal-powered web chaos. Boot up. Type stuff. Pretend you're a hacker. ⚠️ Warning: sudo may not work, but your imagination will.",
    image: "/img/gradient.png",
    technologies: ["TypeScript", "Terminal", "Web Terminal", "Interactive"],
    githubUrl: "https://github.com/ChilliRoger/myterminal1",
    liveUrl: "https://github.com/ChilliRoger/myterminal1",
    status: "Completed"
  },
  {
    id: 7,
    title: "PDF Merger",
    description: "The simplest way to combine PDF files online - no registration required. A clean, efficient tool for merging multiple PDF documents.",
    image: "/img/gradient.png",
    technologies: ["Python", "PDF Processing", "Web App", "File Management"],
    githubUrl: "https://github.com/ChilliRoger/pdf-merger",
    liveUrl: "https://github.com/ChilliRoger/pdf-merger",
    status: "Completed"
  },
  {
    id: 8,
    title: "Tipzy",
    description: "Spread smiles with Tipzy—scan, tip, and make every waiter, barber, and parking guard's day a little brighter! A mobile tipping application for service workers.",
    image: "/img/gradient.png",
    technologies: ["TypeScript", "Mobile App", "Payment", "QR Code"],
    githubUrl: "https://github.com/ChilliRoger/Tipzy",
    liveUrl: "https://github.com/ChilliRoger/Tipzy",
    status: "Completed"
  },
  {
    id: 9,
    title: "The-Den-Day",
    description: "Bringing the party to your Wi-Fi zone! A social networking application for connecting people in local areas.",
    image: "/img/gradient.png",
    technologies: ["TypeScript", "Social Network", "Local Connect", "Web App"],
    githubUrl: "https://github.com/ChilliRoger/The-Den-Day",
    liveUrl: "https://github.com/ChilliRoger/The-Den-Day",
    status: "Completed"
  },
  {
    id: 10,
    title: "Death-form",
    description: "Check ur death ;) - A quirky web application with an interesting concept and interactive elements.",
    image: "/img/gradient.png",
    technologies: ["HTML", "Interactive", "Web App", "Frontend"],
    githubUrl: "https://github.com/ChilliRoger/Death-form",
    liveUrl: "https://github.com/ChilliRoger/Death-form",
    status: "Completed"
  },
  {
    id: 11,
    title: "Block1-frontend",
    description: "A modern frontend application built with TypeScript, featuring clean architecture and responsive design.",
    image: "/img/gradient.png",
    technologies: ["TypeScript", "Frontend", "Modern UI", "Responsive"],
    githubUrl: "https://github.com/ChilliRoger/block1-frontend",
    liveUrl: "https://github.com/ChilliRoger/block1-frontend",
    status: "Completed"
  },
  {
    id: 12,
    title: "Breath-Elivator",
    description: "Inhale confidence, exhale... WiFi stress. 😮‍💨📶 A breathing exercise application to help reduce stress and anxiety.",
    image: "/img/gradient.png",
    technologies: ["CSS", "Wellness", "Breathing Exercise", "Health App"],
    githubUrl: "https://github.com/ChilliRoger/Breath-Elivator",
    liveUrl: "https://github.com/ChilliRoger/Breath-Elivator",
    status: "Completed"
  },
  {
    id: 13,
    title: "Movie Ticket App",
    description: "Disclaimer: We cannot guarantee seat availability during Marvel premieres, SRK comebacks, or Rajinikanth releases. Proceed at your own risk. 😎 A comprehensive movie ticket booking system.",
    image: "/img/gradient.png",
    technologies: ["CSS", "Movie Booking", "E-commerce", "Entertainment"],
    githubUrl: "https://github.com/ChilliRoger/movie-ticket-app",
    liveUrl: "https://github.com/ChilliRoger/movie-ticket-app",
    status: "Completed"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen text-foreground relative">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Link href="/">
              <Button variant="outline" size="sm" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight">
            All Projects
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore my complete collection of 13 projects, from blockchain security tools to interactive games, business applications, and wellness apps.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              I'm constantly working on new projects and improving existing ones. 
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
