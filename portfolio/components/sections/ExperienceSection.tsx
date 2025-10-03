"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react";

const experienceData = [
  {
    id: 1,
    title: "Web Developer",
    company: "Codingrim Solutions",
    location: "Chennai, India",
    period: "July 2023 – September 2023",
    type: "Internship",
    description: "Redesigned client websites to match modern UI/UX trends and integrated payment platforms with mobile optimization, resulting in significant traffic and engagement improvements.",
    responsibilities: [
      "Redesigned client's old website to match the latest UI/UX trends",
      "Integrated a payment platform and quick edit options",
      "Created mobile-optimized version of the website, driving a 15% increase in mobile traffic and 15% improvement in user-engagement"
    ],
    technologies: ["Web Development", "UI/UX Design", "Payment Integration", "Mobile Optimization", "Frontend Development"],
    achievements: [
      "15% increase in mobile traffic",
      "15% improvement in user engagement"
    ]
  },
  {
    id: 2,
    title: "Mobile App Tester & Database Management",
    company: "NuraV Tech",
    location: "Bangalore, India",
    period: "June 2023 – August 2023",
    type: "Internship",
    description: "Conducted comprehensive mobile app testing, security analysis, and managed extensive student database with automated tasks for efficient data management.",
    responsibilities: [
      "Uncovered hidden bugs in mobile apps",
      "Tested and exploited security loopholes in mobile app",
      "Managed the extensive data of 1200+ students with automated tasks for instant updates"
    ],
    technologies: ["Mobile Testing", "Security Testing", "Database Management", "Automation", "Quality Assurance"],
    achievements: [
      "Managed 1200+ student records",
      "Identified critical security vulnerabilities",
      "Implemented automated data management"
    ]
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
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {experience.description}
              </p>
              
              <div className="space-y-4">
                <div>
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

                {experience.achievements && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

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
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
