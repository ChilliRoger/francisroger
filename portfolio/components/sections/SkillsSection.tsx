"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Palette, 
  Wrench,
  Monitor,
  Smartphone,
  Server
} from "lucide-react";

const skillsData = [
  {
    category: "Frontend Development",
    icon: Monitor,
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "JavaScript", level: "Advanced" },
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" }
    ]
  },
  {
    category: "Styling & Design",
    icon: Palette,
    skills: [
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Shadcn UI", level: "Advanced" },
      { name: "Framer Motion", level: "Intermediate" },
      { name: "CSS Grid", level: "Advanced" },
      { name: "Flexbox", level: "Advanced" },
      { name: "Responsive Design", level: "Advanced" }
    ]
  },
  {
    category: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "REST APIs", level: "Intermediate" },
      { name: "GraphQL", level: "Beginner" },
      { name: "Authentication", level: "Intermediate" },
      { name: "JWT", level: "Intermediate" }
    ]
  },
  {
    category: "Database & Tools",
    icon: Database,
    skills: [
      { name: "MongoDB", level: "Intermediate" },
      { name: "PostgreSQL", level: "Beginner" },
      { name: "Prisma", level: "Intermediate" },
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" },
      { name: "Vercel", level: "Advanced" }
    ]
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: "Beginner" },
      { name: "Expo", level: "Beginner" },
      { name: "Progressive Web Apps", level: "Intermediate" },
      { name: "Mobile-First Design", level: "Advanced" }
    ]
  },
  {
    category: "Development Tools",
    icon: Wrench,
    skills: [
      { name: "VS Code", level: "Advanced" },
      { name: "ESLint", level: "Advanced" },
      { name: "Prettier", level: "Advanced" },
      { name: "Webpack", level: "Intermediate" },
      { name: "Docker", level: "Beginner" },
      { name: "Linux", level: "Intermediate" }
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
