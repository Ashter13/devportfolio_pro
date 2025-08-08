import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const skills = [
    "Full-Stack Developer",
    "React Specialist", 
    "Problem Solver",
    "UI/UX Architect",
    "Performance Expert"
  ];

  useEffect(() => {
    const skill = skills?.[currentSkill];
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= skill?.length) {
        setDisplayText(skill?.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        setTimeout(() => {
          setIsTyping(true);
          setCurrentSkill((prev) => (prev + 1) % skills?.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentSkill]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span>Available for Projects</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-6xl font-bold text-primary mb-6 leading-tight"
            >
              Transforming Complex
              <span className="block text-accent">Challenges</span>
              <span className="block text-text-primary">into Elegant</span>
              <span className="block text-primary">Digital Solutions</span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <div className="text-xl lg:text-2xl text-text-secondary mb-2">
                I'm a{" "}
                <span className="text-accent font-semibold">
                  {displayText}
                  <span className={`inline-block w-0.5 h-6 bg-accent ml-1 ${isTyping ? 'animate-pulse' : ''}`}></span>
                </span>
              </div>
              <p className="text-lg text-text-muted max-w-2xl">
                Crafting premium web experiences with React, Node.js, and modern technologies. 
                Specializing in performance optimization, scalable architecture, and user-centric design.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="default"
                size="lg"
                iconName="FolderOpen"
                iconPosition="left"
                onClick={() => scrollToSection('projects')}
                className="shadow-brand-lg hover:shadow-brand-xl transition-all"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={() => scrollToSection('contact')}
              >
                Let's Talk
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-text-secondary">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-text-secondary">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-text-secondary">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/20"
              >
                <Icon name="Code2" size={32} className="text-primary" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-2 -right-6 w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-accent/20"
              >
                <Icon name="Zap" size={24} className="text-accent" />
              </motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-6 -left-8 w-18 h-18 bg-success/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-success/20"
              >
                <Icon name="Rocket" size={28} className="text-success" />
              </motion.div>

              {/* Main Image Container */}
              <div className="relative">
                <div className="w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10 shadow-brand-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                    alt="Professional Developer Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Tech Stack Indicators */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-dashed border-primary/30 rounded-full flex items-center justify-center"
              >
                <div className="w-16 h-16 bg-background rounded-full shadow-brand-md flex items-center justify-center">
                  <Icon name="Sparkles" size={20} className="text-primary" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 cursor-pointer"
          onClick={() => scrollToSection('testimonials')}
        >
          <span className="text-sm text-text-muted">Scroll to explore</span>
          <Icon name="ChevronDown" size={20} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;