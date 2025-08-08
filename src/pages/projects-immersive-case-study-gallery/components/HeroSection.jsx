import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-white/20 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-white/20 rounded-lg rotate-12"></div>
      </div>
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {Array?.from({ length: 12 })?.map((_, i) => (
            <div key={i} className="border-r border-white/20"></div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8"
          >
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">Case Study Portfolio</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-bold text-white mb-6"
          >
            Projects That
            <span className="block text-accent">Tell Stories</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl lg:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Dive deep into comprehensive case studies that showcase not just what I built, 
            but how I solved complex problems and delivered measurable business impact.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/70 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white/70 text-sm">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-white/70 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-white/70 text-sm">Years Experience</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-accent/90 transition-brand shadow-brand-lg"
            >
              <Icon name="FolderOpen" size={20} />
              <span>Explore Case Studies</span>
            </button>
            <button 
              onClick={() => document.getElementById('tech-showcase')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-white/20 transition-brand border border-white/20"
            >
              <Icon name="Code2" size={20} />
              <span>View Tech Stack</span>
            </button>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-20 right-10 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm hidden lg:flex"
          >
            <Icon name="Zap" size={24} color="white" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            className="absolute bottom-20 left-10 w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center backdrop-blur-sm hidden lg:flex"
          >
            <Icon name="Target" size={18} color="white" />
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <Icon name="ChevronDown" size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;