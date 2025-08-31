import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { User, GraduationCap, Sparkles, Target, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg relative overflow-hidden">
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
            <User className="w-8 h-8 mx-auto mb-4 text-purple-400" />
            <h2 className="text-4xl font-bold gradient-text mb-4">
              About Me
            </h2>
            <p className="text-muted-foreground text-lg">
              Get to know me better
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a dedicated Computer Science student graduating in 2026 with strong coding and 
                problem-solving skills. I have experience in building diverse software applications, 
                including projects in machine learning, computer vision, and web development, using 
                Python, C++, and Java.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I have a solid foundation in data structures and algorithms and a passion for developing 
                efficient, real-world software solutions. I am eager to contribute to innovative development 
                teams and grow as a versatile software engineer.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <motion.div 
                  className="text-center p-4 glass-effect rounded-lg border-0 relative overflow-hidden group"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="text-2xl font-bold gradient-text">2026</div>
                    <div className="text-sm text-muted-foreground">Graduation Year</div>
                  </div>
                </motion.div>
                <motion.div 
                  className="text-center p-4 glass-effect rounded-lg border-0 relative overflow-hidden group"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="text-2xl font-bold gradient-text">10+</div>
                    <div className="text-sm text-muted-foreground">Projects Built</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Card className="p-8 glass-effect border-0 overflow-hidden relative group">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 mr-2 text-purple-400" />
                    <h3 className="text-xl font-semibold gradient-text">Education</h3>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="font-medium text-foreground">Computer Science Engineering</div>
                    <div className="text-sm text-muted-foreground">Expected Graduation: 2026</div>
                  </div>
                  
                  <div className="pt-4 border-t border-white/20">
                    <h4 className="font-medium text-foreground mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2 text-purple-400" />
                      Focus Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: 'Machine Learning', gradient: 'from-purple-500 to-pink-500' },
                        { name: 'Web Development', gradient: 'from-blue-500 to-cyan-500' },
                        { name: 'Computer Vision', gradient: 'from-green-500 to-emerald-500' },
                        { name: 'Data Structures', gradient: 'from-orange-500 to-red-500' }
                      ].map((area, index) => (
                        <motion.span 
                          key={area.name}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className={`px-3 py-1 bg-gradient-to-r ${area.gradient} text-white rounded-full text-xs font-medium shadow-md`}
                        >
                          {area.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;