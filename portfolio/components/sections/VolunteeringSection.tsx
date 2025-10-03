"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Calendar, MapPin, Users, Clock } from "lucide-react";

const volunteeringData = [
  {
    id: 1,
    title: "Tech Mentor",
    organization: "Local Coding Club",
    location: "Community Center",
    period: "2023 - Present",
    duration: "2 hours/week",
    status: "Active",
    description: "Mentoring young students in programming fundamentals, helping them build their first projects and develop problem-solving skills.",
    responsibilities: [
      "Teach basic programming concepts to beginners",
      "Help students debug their code",
      "Organize coding workshops and hackathons",
      "Provide career guidance in tech"
    ],
    impact: "Mentored 25+ students, 3 have gone on to pursue computer science degrees"
  },
  {
    id: 2,
    title: "Website Developer",
    organization: "Local Animal Shelter",
    location: "Remote",
    period: "Summer 2023",
    duration: "40 hours total",
    status: "Completed",
    description: "Developed and maintained the organization's website to help increase adoption rates and volunteer engagement.",
    responsibilities: [
      "Redesigned the shelter's website",
      "Implemented online adoption forms",
      "Created volunteer registration system",
      "Optimized site for mobile devices"
    ],
    impact: "Increased online adoption inquiries by 40%"
  },
  {
    id: 3,
    title: "STEM Workshop Facilitator",
    organization: "Girls Who Code",
    location: "Local Library",
    period: "2022 - 2023",
    duration: "3 hours/week",
    status: "Completed",
    description: "Facilitated coding workshops for middle and high school girls, promoting diversity in technology.",
    responsibilities: [
      "Led weekly coding workshops",
      "Created engaging programming projects",
      "Mentored participants in building portfolios",
      "Organized guest speaker events"
    ],
    impact: "Helped 15 girls complete their first coding projects"
  },
  {
    id: 4,
    title: "Digital Literacy Volunteer",
    organization: "Senior Center",
    location: "Community Center",
    period: "2022",
    duration: "20 hours total",
    status: "Completed",
    description: "Taught senior citizens basic computer skills and internet safety to help them stay connected with family.",
    responsibilities: [
      "Taught basic computer operations",
      "Demonstrated internet safety practices",
      "Helped seniors set up video calling",
      "Created simple instruction guides"
    ],
    impact: "Helped 12 seniors learn to video call their families"
  }
];

export default function VolunteeringSection() {
  return (
    <div className="space-y-6">
      {volunteeringData.map((volunteer, index) => (
        <motion.div
          key={volunteer.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl font-bold text-foreground">
                      {volunteer.title}
                    </CardTitle>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <span className="font-semibold">{volunteer.organization}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{volunteer.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{volunteer.period}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{volunteer.duration}</span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={volunteer.status === "Active" ? "default" : "secondary"}
                    className="mb-2"
                  >
                    {volunteer.status}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    <span>Volunteer</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {volunteer.description}
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Key Activities:</h4>
                <ul className="space-y-1">
                  {volunteer.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/5 p-3 rounded-lg">
                <h4 className="font-semibold text-foreground mb-1 text-sm">Impact:</h4>
                <p className="text-sm text-muted-foreground">{volunteer.impact}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
