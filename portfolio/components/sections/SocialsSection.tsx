"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code, 
  Send,
  MapPin,
  Calendar,
  Download,
  FileText,
  Twitter
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/ChilliRoger",
    icon: Github,
    description: "Check out my code repositories and contributions"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/francis16102005/",
    icon: Linkedin,
    description: "Connect with me professionally"
  },
  {
    name: "X",
    url: "https://x.com/roger_x_jr",
    icon: Twitter,
    description: "Follow me on X for updates and thoughts"
  },
  {
    name: "Email",
    url: "mailto:francis.roger.a.16@gmail.com",
    icon: Mail,
    description: "Send me an email directly"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/LUO3mZynOY/",
    icon: Code,
    description: "View my coding problem solutions"
  },
  {
    name: "Resume",
    url: "/txt/fr_new_resume.pdf",
    icon: FileText,
    description: "Download my resume"
  }
];

export default function SocialsSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    };
    console.log("Contact form submitted:", data);
    // Here you would typically send the data to your backend
    alert("Thank you for your message! I&apos;ll get back to you soon.");
    e.currentTarget.reset();
  };

  return (
    <div className="space-y-12">
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground text-center">
              Get In Touch
            </CardTitle>
            <p className="text-muted-foreground text-center">
              I&apos;m always open to discussing new opportunities and interesting projects.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a 
                        href="mailto:francis.roger.a.16@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        francis.roger.a.16@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-muted-foreground">Available for remote work</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Availability</p>
                      <p className="text-muted-foreground">Open to new opportunities</p>
                    </div>
                  </div>
                </div>

                {/* Resume Download */}
                <div className="pt-4">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
                  >
                    <a 
                      href="/txt/fr_new_resume.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      download="Francis_Roger_Resume.pdf"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Connect With Me</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
                    {socialLinks.map((social, socialIndex) => (
                      <motion.div
                        key={social.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: socialIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Button
                          variant="outline"
                          asChild
                          className="w-full h-auto p-3 flex flex-col items-center space-y-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <a 
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <social.icon className="h-5 w-5" />
                            <span className="text-sm font-medium">{social.name}</span>
                          </a>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell me about your project or opportunity..."
                      className="mt-1 min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center py-8 border-t border-border"
      >
        <div className="space-y-4">
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-muted-foreground hover:text-primary transition-colors"
                title={social.description}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>&copy; 2024 Francis Roger. All rights reserved.</p>
            <p className="mt-1">Built with Next.js, TypeScript and Shadcn UI</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
