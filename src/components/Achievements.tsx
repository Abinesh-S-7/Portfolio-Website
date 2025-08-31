import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Star, Trophy, Code, BookOpen, Users, Target, Sparkles } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "NPTEL Star Award",
      description: "Outstanding course performance in NPTEL certification programs",
      icon: Star,
      category: "Academic Excellence",
      color: "hsl(45, 100%, 51%)",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "Top Performer - Skillrack",
      description: "Received certificate for top performance on Skillrack platform",
      icon: Trophy,
      category: "Programming",
      color: "hsl(217, 91%, 60%)",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "C & C++ Certification",
      description: "Certified in C & C++ programming with 94% score",
      icon: Code,
      category: "Programming",
      color: "hsl(142, 71%, 45%)",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "DSA Hackathon Participant",
      description: "Participated in intensive 12-hour Data Structures and Algorithms hackathon",
      icon: Target,
      category: "Competition",
      color: "hsl(262, 83%, 58%)",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Web3 Hackathon - 24 Hours",
      description: "Built Web3Wisdom educational platform in 24-hour Edu-Track hackathon",
      icon: Users,
      category: "Competition",
      color: "hsl(346, 87%, 43%)",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Multiple Course Certifications",
      description: "Completed NPTEL & Udemy courses in Python, Java, SQL, C++, and Data Structures",
      icon: BookOpen,
      category: "Learning",
      color: "hsl(25, 95%, 53%)",
      gradient: "from-orange-500 to-red-500"
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
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="achievements" className="py-20 bg-section-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl" />
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
            <Award className="w-8 h-8 mx-auto mb-4 text-yellow-400" />
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Achievements & Certifications
            </h2>
            <p className="text-muted-foreground text-lg">
              Recognition of my hard work and dedication
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02
                  }}
                  className="group"
                >
                  <Card className="glass-effect hover:shadow-2xl transition-all duration-500 h-full border-0 overflow-hidden relative">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <CardHeader className="text-center pb-4 relative z-10">
                      <motion.div 
                        className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br ${achievement.gradient} shadow-lg`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent 
                          className="h-8 w-8 text-white" 
                        />
                      </motion.div>
                      <div className="mb-2">
                        <span 
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${achievement.gradient} text-white shadow-md`}
                        >
                          {achievement.category}
                        </span>
                      </div>
                      <CardTitle className="text-lg font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
                        {achievement.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-0 relative z-10">
                      <p className="text-muted-foreground text-sm leading-relaxed text-center">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Enhanced Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: "6+", label: "Certifications", gradient: "from-purple-500 to-pink-500" },
              { number: "2", label: "Hackathons", gradient: "from-blue-500 to-cyan-500" },
              { number: "94%", label: "Top Score", gradient: "from-green-500 to-emerald-500" },
              { number: "5+", label: "Technologies", gradient: "from-orange-500 to-red-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className={`text-center p-6 glass-effect rounded-lg border-0 relative overflow-hidden group`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;