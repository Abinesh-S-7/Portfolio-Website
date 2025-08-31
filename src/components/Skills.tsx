import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Globe, 
  Database, 
  Settings, 
  Brain, 
  Users,
  CircuitBoard,
  Terminal,
  FileText,
  Network,
  Lightbulb,
  Heart
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "#8B5CF6",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-100 to-pink-100",
      skills: ["C", "C++", "Python", "Java"]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "#3B82F6",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-100 to-cyan-100",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Database",
      icon: Database,
      color: "#10B981",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-100 to-emerald-100",
      skills: ["SQL"]
    },
    {
      title: "Tools & Platforms",
      icon: Settings,
      color: "#F59E0B",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-100 to-red-100",
      skills: ["Git", "Visual Studio Code", "PowerBI", "MS-Office"]
    },
    {
      title: "Concepts",
      icon: Brain,
      color: "#8B5CF6",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-100 to-purple-100",
      skills: ["DSA", "OOPS", "DBMS", "Operating Systems"]
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "#EC4899",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-100 to-rose-100",
      skills: ["Problem-Solving", "Teamwork", "Adaptability", "Leadership", "Critical Thinking"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl font-bold rainbow-gradient bg-clip-text text-transparent mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My technical expertise and tools I use to bring ideas to life
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02
                  }}
                  className="group"
                >
                  <Card className="skill-card rotate-3d h-full border-0 overflow-hidden relative">
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-80`} />
                    
                    {/* Border gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl`} />
                    
                    <CardHeader className="text-center relative z-10 pb-6">
                      <motion.div 
                        className={`skill-icon bg-gradient-to-br ${category.gradient} shadow-2xl`}
                        whileHover={{ 
                          scale: 1.15,
                          rotate: 10
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent 
                          className="h-10 w-10 text-white" 
                        />
                      </motion.div>
                      <CardTitle className="text-2xl font-bold text-gray-800 group-hover:rainbow-gradient group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="relative z-10 pt-0">
                      <div className="flex flex-wrap gap-3 justify-center">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.span 
                            key={skill}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.1 }}
                            whileHover={{ 
                              scale: 1.1,
                              y: -3
                            }}
                            className={`skill-tag bg-gradient-to-r ${category.gradient} shadow-lg`}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-gray-100">
              <h3 className="text-3xl font-bold rainbow-gradient bg-clip-text text-transparent mb-6">
                Technical Proficiency Overview
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Programming", count: "4+", color: "from-purple-500 to-pink-500" },
                  { label: "Web Tech", count: "3+", color: "from-blue-500 to-cyan-500" },
                  { label: "Tools", count: "4+", color: "from-orange-500 to-red-500" },
                  { label: "Concepts", count: "4+", color: "from-green-500 to-emerald-500" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className={`text-4xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                      {item.count}
                    </div>
                    <div className="text-gray-600 font-medium">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;