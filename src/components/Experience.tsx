import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Briefcase, Sparkles, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Front-End Web Developer Intern",
      company: "Black Arrow Data Matrix",
      duration: "June 1 – June 30, 2024",
      location: "Remote",
      type: "Internship",
      description: "Built responsive, user-centric interfaces and optimized website performance during a focused one-month internship program.",
      achievements: [
        "Developed responsive web interfaces using modern HTML, CSS, and JavaScript",
        "Optimized website performance and user experience",
        "Collaborated with design team to implement user-centric solutions",
        "Gained hands-on experience in front-end development workflows"
      ],
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Web Optimization"],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Briefcase className="w-8 h-8 mx-auto mb-4 text-purple-400" />
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Professional Experience
            </h2>
            <p className="text-muted-foreground text-lg">
              My journey in the tech industry
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline connector */}
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
                
                <Card className="relative hover:shadow-2xl transition-all duration-500 glass-effect border-0 overflow-hidden group">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Timeline dot */}
                  <motion.div 
                    className="absolute -left-1 top-8 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-background shadow-lg"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <CardHeader className="pl-12 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
                          {experience.title}
                        </CardTitle>
                        <div className="flex items-center text-primary font-medium mt-1">
                          <Briefcase className="h-4 w-4 mr-2" />
                          {experience.company}
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-2" />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className={`px-3 py-1 bg-gradient-to-r ${experience.gradient} text-white rounded-full text-xs font-medium shadow-md`}>
                        {experience.type}
                      </span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pl-12 relative z-10">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-foreground mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-purple-400" />
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className={`w-1.5 h-1.5 bg-gradient-to-r ${experience.gradient} rounded-full mr-3 mt-2 flex-shrink-0`}></span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-2 flex items-center">
                        <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <motion.span 
                            key={skill}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.1 }}
                            whileHover={{ 
                              scale: 1.05,
                              y: -2
                            }}
                            className={`px-3 py-1 bg-gradient-to-r ${experience.gradient} text-white rounded-full text-xs font-medium shadow-md hover:shadow-lg transition-all duration-300`}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;