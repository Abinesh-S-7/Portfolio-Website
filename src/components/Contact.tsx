import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Linkedin, Github, Send, Sparkles, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "samabi236@gmail.com",
      href: "mailto:samabi236@gmail.com",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6380825972",
      href: "tel:+916380825972",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tamil Nadu, India",
      href: "#",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abinesh-s-7b0668257/",
      color: "hsl(213, 94%, 68%)",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Abinesh-S-7",
      color: "hsl(220, 9%, 46%)",
      gradient: "from-gray-600 to-gray-700"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
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
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <MessageCircle className="w-8 h-8 mx-auto mb-4 text-purple-400" />
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg">
              Let's work together on something amazing
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4 gradient-text">
                  Let's work together
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and development. Feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.02,
                        x: 5
                      }}
                      className="flex items-center space-x-4 p-4 rounded-lg glass-effect hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className={`p-3 bg-gradient-to-r ${info.gradient} rounded-lg group-hover:scale-110 transition-all duration-300 shadow-md`}>
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
              
              <div className="pt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-purple-400" />
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ 
                          scale: 1.1,
                          y: -2
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-lg border hover:shadow-lg transition-all duration-300 bg-gradient-to-r ${social.gradient} text-white`}
                      >
                        <IconComponent className="h-5 w-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-2xl border-0 glass-effect overflow-hidden relative">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
                
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl font-semibold gradient-text flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="w-full glass-effect border-white/20 focus:border-purple-500 transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="w-full glass-effect border-white/20 focus:border-purple-500 transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Tell me about your project or just say hello..."
                        required
                        className="w-full resize-none glass-effect border-white/20 focus:border-purple-500 transition-all duration-300"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group" 
                      size="lg"
                    >
                      <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;