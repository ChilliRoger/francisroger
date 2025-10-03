"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Calendar, MapPin, Users, Clock } from "lucide-react";

const volunteeringData = [
  {
    id: 1,
    title: "President",
    organization: "NSS (National Service Scheme), LICET",
    location: "LICET, Chennai",
    period: "2023 - Present",
    duration: "Ongoing",
    status: "Active",
    description: "Leading the National Service Scheme at LICET, organizing impactful social service events and blood donation camps for the college community.",
    responsibilities: [
      "Organized a blood donation camp for college students with over 200+ voluntary blood donors",
      "Organized 10+ social service events throughout the academic year",
      "Coordinated volunteer activities and community outreach programs",
      "Managed NSS activities and member engagement"
    ],
    impact: "Successfully organized blood donation camp with 200+ donors and 20+ social service events"
  },
  {
    id: 2,
    title: "President",
    organization: "Make a Difference Club (Science Club), LICET",
    location: "LICET, Chennai",
    period: "2023 - Present",
    duration: "Ongoing",
    status: "Active",
    description: "Leading the Science Club at LICET, organizing technical workshops, hackathons, and competitions to promote technical learning and innovation among students.",
    responsibilities: [
      "Organized various technical workshops for students",
      "Conducted 5+ Hackathons and technical competitions",
      "Promoted technical learning and innovation",
      "Managed club activities and member coordination"
    ],
    impact: "Organized 5+ hackathons and multiple technical workshops, fostering innovation and technical skills"
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
                  <div className="mb-2">
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
