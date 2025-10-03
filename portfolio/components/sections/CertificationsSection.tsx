"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, ExternalLink, Download } from "lucide-react";

const certificationsData = [
  {
    id: 1,
    name: "Google Data Analytics Certificate",
    issuer: "Google",
    date: "2024",
    credentialId: "GDA-2024-001",
    description: "Comprehensive course covering data analysis, visualization, and business intelligence using Google Analytics and other tools.",
    skills: ["Data Analysis", "Google Analytics", "SQL", "Tableau", "R Programming"],
    credentialUrl: "https://example.com",
    badgeUrl: "https://example.com"
  },
  {
    id: 2,
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-CP-2024-002",
    description: "Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
    skills: ["AWS", "Cloud Computing", "Security", "Architecture", "Cost Management"],
    credentialUrl: "https://example.com",
    badgeUrl: "https://example.com"
  },
  {
    id: 3,
    name: "Meta Front-End Developer Certificate",
    issuer: "Meta",
    date: "2023",
    credentialId: "MFE-2023-003",
    description: "Professional certificate program covering React, JavaScript, HTML, CSS, and modern front-end development practices.",
    skills: ["React", "JavaScript", "HTML", "CSS", "Version Control"],
    credentialUrl: "https://example.com",
    badgeUrl: "https://example.com"
  },
  {
    id: 4,
    name: "FreeCodeCamp Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "2023",
    credentialId: "FCC-RWD-2023-004",
    description: "Certificate covering HTML, CSS, responsive design principles, and accessibility best practices.",
    skills: ["HTML", "CSS", "Responsive Design", "Accessibility", "Flexbox", "Grid"],
    credentialUrl: "https://example.com",
    badgeUrl: "https://example.com"
  }
];

export default function CertificationsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {certificationsData.map((cert, index) => (
        <motion.div
          key={cert.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg font-bold text-foreground">
                      {cert.name}
                    </CardTitle>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <span className="font-semibold">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {cert.credentialId}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                {cert.description}
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2 text-sm">Skills Covered:</h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {skill}
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
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Credential
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="flex-1"
                >
                  <a 
                    href={cert.badgeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Badge
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
