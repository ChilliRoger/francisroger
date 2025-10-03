"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Code, 
  Mountain, 
  Camera, 
  Gamepad2,
  Globe
} from "lucide-react";

const interestsData = [
  {
    category: "Technology & Development",
    icon: Code,
    interests: [
      {
        name: "Web3 & Blockchain",
        description: "Decentralized applications and smart contracts",
        status: "Learning"
      },
      {
        name: "Open Source",
        description: "Contributing to developer tools",
        status: "Active"
      }
    ]
  },
  {
    category: "Learning & Growth",
    icon: Brain,
    interests: [
      {
        name: "Algorithm Design",
        description: "Problem solving and optimization",
        status: "Practicing"
      },
      {
        name: "System Architecture",
        description: "Scalable software design",
        status: "Learning"
      }
    ]
  },
  {
    category: "Creative & Hobbies",
    icon: Camera,
    interests: [
      {
        name: "Photography",
        description: "Capturing moments and landscapes",
        status: "Hobby"
      },
      {
        name: "Game Development",
        description: "Building interactive experiences",
        status: "Learning"
      }
    ]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
    case "Regular":
    case "Practicing":
      return "bg-green-500";
    case "Learning":
    case "Developing":
      return "bg-blue-500";
    case "Exploring":
    case "Hobby":
      return "bg-purple-500";
    case "Seasonal":
    case "Casual":
    case "Social":
      return "bg-yellow-500";
    case "Passion":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

export default function ExploringSection() {
  return (
    <div className="space-y-8">
      {interestsData.map((category, categoryIndex) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {category.category}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.interests.map((interest, interestIndex) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: interestIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="relative p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground text-sm">
                        {interest.name}
                      </h4>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          interest.status === "Active" || interest.status === "Regular" || interest.status === "Practicing" ? "border-green-500 text-green-600" :
                          interest.status === "Learning" || interest.status === "Developing" ? "border-blue-500 text-blue-600" :
                          interest.status === "Exploring" || interest.status === "Hobby" ? "border-purple-500 text-purple-600" :
                          interest.status === "Seasonal" || interest.status === "Casual" || interest.status === "Social" ? "border-yellow-500 text-yellow-600" :
                          interest.status === "Passion" ? "border-red-500 text-red-600" :
                          "border-gray-500 text-gray-600"
                        }`}
                      >
                        {interest.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {interest.description}
                    </p>
                    <div className="absolute bottom-2 right-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(interest.status)}`} />
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
