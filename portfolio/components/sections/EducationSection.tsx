"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "Bachelor's in Computer Science",
    institution: "XYZ University",
    location: "City, State",
    period: "2023 - 2027",
    status: "In Progress",
    description: "Focusing on software engineering, algorithms, and web development. Maintaining a strong academic record while participating in coding competitions and hackathons.",
    achievements: [
      "Dean's List - Fall 2023",
      "Computer Science Honor Society Member",
      "Participated in 5+ Hackathons"
    ],
    gpa: "3.8/4.0"
  },
  {
    id: 2,
    degree: "High School Diploma",
    institution: "ABC High School",
    location: "City, State",
    period: "2019 - 2023",
    status: "Completed",
    description: "Graduated with honors, focusing on mathematics and science. Active in robotics club and student government.",
    achievements: [
      "Valedictorian",
      "National Honor Society",
      "Robotics Team Captain"
    ],
    gpa: "4.0/4.0"
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
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
