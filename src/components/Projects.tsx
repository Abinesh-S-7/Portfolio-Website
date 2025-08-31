import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Sparkles, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ATM Security Enhancement System",
      description: "Deep learning-based mask & helmet detection integrated with ATM security, face recognition, and real-time SMS alerts for enhanced safety.",
      technologies: ["Python", "Keras", "OpenCV", "Tkinter", "Twilio API", "Cloudinary"],
      features: [
        "Real-time mask and helmet detection",
        "Face recognition system",
        "SMS alert system via Twilio",
        "Cloud-based image storage"
      ],
      githubUrl: "https://github.com/Abinesh-S-7/ATM-Project",
      category: "Machine Learning",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Weather Web Page",
      description: "Responsive web application that provides real-time weather information based on user input using OpenWeatherMap API.",
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
      features: [
        "Real-time weather data",
        "Location-based search",
        "Responsive design",
        "Interactive UI"
      ],
      githubUrl: "https://github.com/Abinesh-S-7/Weather_WebPage",
      category: "Web Development",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web3Wisdom - Edu-Track Hackathon",
      description: "A Web3-based educational platform built during a 24-hour hackathon, featuring smart contracts and decentralized learning modules.",
      technologies: ["React", "Solidity", "Smart Contracts", "Metamask", "PostgreSQL"],
      features: [
        "Blockchain-based certificates",
        "Smart contract integration",
        "Decentralized storage",
        "Metamask authentication"
      ],
      githubUrl: "https://github.com/Abinesh-S-7/Web3Wisdom",
      category: "Web3",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-section-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Code className="w-8 h-8 mx-auto mb-4 text-purple-400" />
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              Showcasing my best work and technical expertise
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  rotateX: 5
                }}
                className="group perspective-1000"
              >
                <Card className="glass-effect hover:shadow-2xl transition-all duration-500 h-full flex flex-col border-0 overflow-hidden relative">
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-xs font-medium shadow-md`}>
                        {project.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col relative z-10">
                    <div className="mb-4">
                      <h4 className="font-medium text-foreground mb-2 flex items-center">
                        <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
                        Key Features:
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-center"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className={`w-1.5 h-1.5 bg-gradient-to-r ${project.gradient} rounded-full mr-2`}></span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-foreground mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span 
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.1 }}
                            whileHover={{ 
                              scale: 1.05,
                              y: -2
                            }}
                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium hover:shadow-md transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <Button 
                        size="lg" 
                        variant="outline" 
                        asChild 
                        className="w-full gradient-border hover:neon-glow transition-all duration-300 group"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                          View on GitHub
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;