import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Sparkles, Zap, Star, Rocket } from "lucide-react";
import TypingAnimation from "./TypingAnimation";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const roles = [
    "CSE Student",
    "Web Developer",
    "Software Developer",
    "Frontend Developer",
    "Problem Solver",
    "Machine Learning Enthusiast",
    "Data Structures & Algorithms Explorer",
    "Open Source Contributor",
    "Tech Innovator",

  ];
  

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient text-white relative overflow-hidden">
      {/* Ultra Enhanced Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white/40 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -150],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* Floating stars */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute text-yellow-300"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -80],
              rotate: [0, 360],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 5,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          >
            <Star className="w-4 h-4" />
          </motion.div>
        ))}
        
        {/* Rainbow gradient orbs */}
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 rainbow-gradient rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 rainbow-gradient rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rainbow-gradient rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Enhanced Sparkles decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <Sparkles className="w-10 h-10 text-yellow-300 mr-3 animate-pulse" />
            <span className="text-yellow-300 font-bold text-lg rainbow-gradient bg-clip-text text-transparent">
              Welcome to my portfolio
            </span>
            <Sparkles className="w-10 h-10 text-yellow-300 ml-3 animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
          >
            Hi, I'm <span className="rainbow-gradient bg-clip-text text-transparent">Abinesh S</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-4xl mb-10 text-white font-bold h-16 flex items-center justify-center"
          >
            <Rocket className="w-8 h-8 mr-4 text-yellow-300 animate-bounce" />
            <TypingAnimation texts={roles} speed={100} pauseDuration={2000} />
            <Rocket className="w-8 h-8 ml-4 text-yellow-300 animate-bounce" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl mb-10 text-white/90 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Dedicated Computer Science student graduating in 2026 with strong coding and problem-solving skills. 
            Passionate about developing efficient, real-world software solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => scrollToSection('projects')}
              className="glass-effect hover:glass-effect-dark transition-all duration-300 neon-glow group text-lg font-bold px-8 py-4"
            >
              <span className="group-hover:shimmer rainbow-gradient bg-clip-text text-transparent">
                View My Work
              </span>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="border-2 border-white/50 text-white hover:bg-white/20 transition-all duration-300 gradient-border text-lg font-bold px-8 py-4 rainbow-gradient"
            >
              <Download className="h-5 w-5 mr-3" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Button
          variant="ghost"
          size="sm"
          onClick={() => scrollToSection('about')}
          className="text-white/80 hover:text-white transition-colors floating"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="h-6 w-6" />
          </motion.div>
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;