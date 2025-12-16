"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Eye, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projectsData = [
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
    title: "Invoice Generator",
    description: "Get paid faster than your last situationship ended. A professional invoice generation tool for freelancers and small businesses.",
    image: "/img/Invoice Generator.jpeg",
    technologies: ["JavaScript", "Invoice Management", "Business Tools", "PDF Generation"],
    githubUrl: "https://github.com/ChilliRoger/invoice-generator",
    liveUrl: "https://invoice-generator-ten-iota.vercel.app/",
    status: "Completed"
  },
  {
    id: 3,
    title: "BugBuster Academy",
    description: "⚡ BugBuster Academy — squash bugs, earn clout, get a cert. Debugging but make it fun 🦸‍♂️ - Learn debugging skills through gamification.",
    image: "/img/Bug Buster academy.jpeg",
    technologies: ["JavaScript", "Education", "Gamification", "Learning Platform"],
    githubUrl: "https://github.com/ChilliRoger/bugbuster-academy",
    liveUrl: "https://www.npmjs.com/package/bugbuster-academy",
    status: "Completed"
  },
  {
    id: 4,
    title: "Enthiran 2.0",
    description: "I'm the AI that slips past firewalls like a ghost in the code. 👻💻 - An advanced AI-powered application with enhanced capabilities.",
    image: "/img/Enthiran20.jpeg",
    technologies: ["CSS", "AI", "Machine Learning", "Frontend"],
    githubUrl: "https://github.com/ChilliRoger/enthiran2.0",
    liveUrl: "https://enthiran20.vercel.app/",
    status: "Completed"
  },
  {
    id: 5,
    title: "MyTerminal1",
    description: "No GUI. No mercy. Just pure terminal-powered web chaos. Boot up. Type stuff. Pretend you're a hacker. ⚠️ Warning: sudo may not work, but your imagination will.",
    image: "/img/Terminal1.jpeg",
    technologies: ["TypeScript", "Terminal", "Web Terminal", "Interactive"],
    githubUrl: "https://github.com/ChilliRoger/myterminal1",
    liveUrl: "https://myterminal1.vercel.app/",
    status: "Completed"
  },
  {
    id: 6,
    title: "PDF Merger",
    description: "The simplest way to combine PDF files online - no registration required. A clean, efficient tool for merging multiple PDF documents.",
    image: "/img/PDF merger.jpeg",
    technologies: ["Python", "PDF Processing", "Web App", "File Management"],
    githubUrl: "https://github.com/ChilliRoger/pdf-merger",
    liveUrl: "https://pdf-merger-eta-rust.vercel.app/",
    status: "Completed"
  }
];

export default function ProjectsSection() {
  return (
    <div className="space-y-8 xl:space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
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
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
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
                
                <div className="flex gap-2">
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
      
      {/* View More Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <Button
          asChild
          size="lg"
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
        >
          <Link href="/projects" className="flex items-center">
            <ExternalLink className="h-5 w-5 mr-2" />
            View All Projects
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
