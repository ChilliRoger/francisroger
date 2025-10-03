"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "Loyola-ICAM College Of Engineering and Technology (LICET)",
    location: "Chennai, India",
    period: "September 2023 - Present",
    status: "In Progress",
    description: "Pursuing a comprehensive Computer Science and Engineering program with focus on software development, algorithms, and emerging technologies. Actively engaged in practical learning and technical projects.",
    achievements: [
      "BattleCode 2025, MIT – Built an AI robot in Java; gained team and defensive programming experience.",
      "Ideathon 2024, Taipei – Won Good Idea Award (Top 0.3%) for pitching an AI product; prize $3,020.",
      "Pragyan 2024, NIT Trichy – Runner-up among 300+ participants in a code-based strategy competition."
    ],
    gpa: "7.7/10",
    
  }
];

export default function EducationSection() {
  return (
    <div className="space-y-8">
      {educationData.map((education, index) => (
        <motion.div
          key={education.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {education.degree}
                  </CardTitle>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    <span className="font-semibold">{education.institution}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{education.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{education.period}</span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={education.status === "Completed" ? "default" : "secondary"}
                    className="mb-2"
                  >
                    {education.status}
                  </Badge>
                  <p className="text-sm font-semibold text-primary">
                    GPA: {education.gpa}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {education.description}
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {education.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {education.coursework && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {education.coursework.map((course, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
