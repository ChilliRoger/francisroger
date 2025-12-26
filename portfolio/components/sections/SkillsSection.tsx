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
      "C", "C++", "Java", "Kotlin", "Python", "Go", "Solidity", "JavaScript", "TypeScript"
    ]
  },
  {
    category: "Frontend Development",
    icon: Monitor,
    skills: [
      "HTML5", "CSS3", "React", "Next.js", "Tailwind CSS", "Shadcn UI"
    ]
  },
  {
    category: "Backend Development",
    icon: Server,
    skills: [
      "Node.js", "Express.js", "Django", "Flask", "FastAPI"
    ]
  },
  {
    category: "Databases & Cloud",
    icon: Database,
    skills: [
      "MongoDB", "MySQL", "SQLite", "Oracle", "AWS", "Google Cloud", "Firebase"
    ]
  },
  {
    category: "Data Science & AI/ML",
    icon: Brain,
    skills: [
      "Anaconda", "Pandas", "NumPy", "Matplotlib", "TensorFlow", "OpenCV", "Ollama"
    ]
  },
  {
    category: "Tools & DevOps",
    icon: Wrench,
    skills: [
      "Git", "GitLab", "NPM", "Postman", "Apache"
    ]
  },
  {
    category: "Game Dev",
    icon: Gamepad2,
    skills: [
      "Unity", "Unreal Engine"
    ]
  },
  {
    category: "Design Tools",
    icon: Palette,
    skills: [
      "Adobe", "Adobe Photoshop", "Figma", "Canva", "Framer", "Blender"
    ]
  }
];

export default function SkillsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
      {skillsData.map((category, categoryIndex) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="h-full hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
                  {category.category}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="text-sm px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
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
