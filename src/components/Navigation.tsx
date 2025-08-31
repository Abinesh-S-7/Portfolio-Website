import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Sparkles, Rocket } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Projects', target: 'projects' },
    { label: 'Experience', target: 'experience' },
    { label: 'Achievements', target: 'achievements' },
    { label: 'Contact', target: 'contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-2xl border-b border-white/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold rainbow-gradient bg-clip-text text-transparent hover:scale-105 transition-all duration-300 flex items-center"
          >
            <Rocket className="w-6 h-6 mr-3 text-purple-500 animate-pulse" />
            Abinesh S
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.target}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.target)}
                className="text-foreground hover:text-purple-500 transition-all duration-300 font-semibold relative group text-lg"
              >
                {item.label}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="ml-4 gradient-border hover:neon-glow transition-all duration-300 font-semibold"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-white/10 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-6 border-t border-white/20 glass-effect"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.target}
                  onClick={() => scrollToSection(item.target)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-left px-6 py-4 text-foreground hover:text-purple-500 hover:bg-white/10 transition-all duration-300 font-semibold rounded-xl hover:scale-105"
                  whileHover={{ x: 10 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="mx-6 mt-4 gradient-border hover:neon-glow transition-all duration-300 font-semibold"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;