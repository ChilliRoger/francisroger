"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react";

const experienceData = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "ABC Corp",
    location: "Remote",
    period: "Summer 2024",
    type: "Internship",
    description: "Developed responsive web applications using React and Next.js. Collaborated with senior developers to implement new features and optimize existing code.",
    responsibilities: [
      "Built responsive React components with TypeScript",
      "Implemented state management using Redux Toolkit",
      "Optimized application performance and accessibility",
      "Participated in code reviews and agile development"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    link: "https://example.com"
  },
  {
    id: 2,
    title: "Web Development Freelancer",
    company: "Various Clients",
    location: "Remote",
    period: "2023 - Present",
    type: "Freelance",
    description: "Providing web development services to small businesses and startups. Specializing in modern, responsive websites and web applications.",
    responsibilities: [
      "Designed and developed custom websites",
      "Implemented SEO best practices",
      "Provided ongoing maintenance and support",
      "Managed client relationships and project timelines"
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Vercel"],
    link: "https://example.com"
  }
];

export default function ExperienceSection() {
  return (
    <div className="space-y-8">
      {experienceData.map((experience, index) => (
        <motion.div
          key={experience.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {experience.title}
                  </CardTitle>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Building2 className="h-4 w-4 mr-2" />
                    <span className="font-semibold">{experience.company}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{experience.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{experience.period}</span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="mb-2">
                    {experience.type}
                  </Badge>
                  {experience.link && (
                    <a 
                      href={experience.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View Company
                    </a>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {experience.description}
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Key Responsibilities:</h4>
                <ul className="space-y-1">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
