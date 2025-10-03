"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Eye } from "lucide-react";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "Personal Blog App",
    description: "A modern, responsive blog application built with Next.js and Shadcn UI. Features include dark mode, search functionality, and markdown support.",
    image: "/img/gradient.png", // Using existing image as placeholder
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "MDX"],
    githubUrl: "https://github.com/ChilliRoger",
    liveUrl: "https://example.com",
    status: "Completed"
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory tracking, and order management.",
    image: "/img/gradient.png",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Express"],
    githubUrl: "https://github.com/ChilliRoger",
    liveUrl: "https://example.com",
    status: "In Progress"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
    image: "/img/gradient.png",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Socket.io", "NextAuth"],
    githubUrl: "https://github.com/ChilliRoger",
    liveUrl: "https://example.com",
    status: "Completed"
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/img/gradient.png",
    technologies: ["React", "OpenWeather API", "Leaflet", "Styled Components"],
    githubUrl: "https://github.com/ChilliRoger",
    liveUrl: "https://example.com",
    status: "Completed"
  }
];

export default function ProjectsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
  );
}
