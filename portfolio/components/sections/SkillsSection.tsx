"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Monitor, 
  Server,
  Database,
  Brain,
  Wrench,
  Gamepad2,
  Palette
} from "lucide-react";

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code,
    skills: [
      { name: "C", level: "Advanced" },
      { name: "C++", level: "Advanced" },
      { name: "Java", level: "Advanced" },
      { name: "Kotlin", level: "Intermediate" },
      { name: "Python", level: "Advanced" },
      { name: "Go", level: "Intermediate" },
      { name: "Solidity", level: "Beginner" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" }
    ]
  },
  {
    category: "Frontend Development",
    icon: Monitor,
    skills: [
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
    
    
    ]
  },
  {
    category: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "Django", level: "Intermediate" },
      { name: "Flask", level: "Intermediate" },
      { name: "FastAPI", level: "Intermediate" }
    ]
  },
  {
    category: "Databases & Cloud",
    icon: Database,
    skills: [
      { name: "MongoDB", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "SQLite", level: "Advanced" },
      { name: "Oracle", level: "Intermediate" },
     
      { name: "AWS", level: "Intermediate" },
      { name: "Google Cloud", level: "Intermediate" },
      { name: "Firebase", level: "Advanced" }
    ]
  },
  {
    category: "Data Science & AI/ML",
    icon: Brain,
    skills: [
      { name: "Anaconda", level: "Advanced" },
      { name: "Pandas", level: "Advanced" },
      { name: "NumPy", level: "Advanced" },
      { name: "Matplotlib", level: "Advanced" },
      { name: "TensorFlow", level: "Intermediate" },
      { name: "OpenCV", level: "Intermediate" },
      { name: "Ollama", level: "Intermediate" }
    ]
  },
  {
    category: "Tools & DevOps",
    icon: Wrench,
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "GitLab", level: "Advanced" },
      { name: "NPM", level: "Advanced" },
      { name: "Postman", level: "Advanced" },
      { name: "Apache", level: "Intermediate" },
     
    ]
  },
  {
    category: "Game Dev",
    icon: Gamepad2,
    skills: [
      { name: "Unity", level: "Intermediate" },
      { name: "Unreal Engine", level: "Beginner" }
    ]
  },
  {
    category: "Design Tools",
    icon: Palette,
    skills: [
      { name: "Adobe", level: "Intermediate" },
      { name: "Adobe Photoshop", level: "Intermediate" },
      { name: "Figma", level: "Advanced" },
      { name: "Canva", level: "Advanced" },
      { name: "Framer", level: "Intermediate" },
      { name: "Blender", level: "Beginner" }
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Advanced":
      return "bg-green-500";
    case "Intermediate":
      return "bg-yellow-500";
    case "Beginner":
      return "bg-blue-500";
    default:
      return "bg-gray-500";
  }
};

export default function SkillsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {skillsData.map((category, categoryIndex) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
                  {category.category}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level === "Advanced" ? 100 : skill.level === "Intermediate" ? 70 : 40}%` }}
                          transition={{ duration: 0.8, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full ${getLevelColor(skill.level)}`}
                        />
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          skill.level === "Advanced" ? "border-green-500 text-green-600" :
                          skill.level === "Intermediate" ? "border-yellow-500 text-yellow-600" :
                          "border-blue-500 text-blue-600"
                        }`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
