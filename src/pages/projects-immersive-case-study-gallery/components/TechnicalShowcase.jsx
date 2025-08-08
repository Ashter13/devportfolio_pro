import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TechnicalShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const technologies = {
    frontend: [
      { name: 'React', icon: 'Component', level: 95, color: 'text-blue-600', bg: 'bg-blue-100' },
      { name: 'Next.js', icon: 'Zap', level: 90, color: 'text-gray-800', bg: 'bg-gray-100' },
      { name: 'Vue.js', icon: 'Layers', level: 85, color: 'text-green-600', bg: 'bg-green-100' },
      { name: 'TypeScript', icon: 'Code2', level: 92, color: 'text-blue-700', bg: 'bg-blue-100' },
      { name: 'Tailwind CSS', icon: 'Palette', level: 97, color: 'text-cyan-600', bg: 'bg-cyan-100' }
    ],
    backend: [
      { name: 'Node.js', icon: 'Server', level: 93, color: 'text-green-700', bg: 'bg-green-100' },
      { name: 'Python', icon: 'Code', level: 88, color: 'text-yellow-600', bg: 'bg-yellow-100' },
      { name: 'PostgreSQL', icon: 'Database', level: 90, color: 'text-blue-800', bg: 'bg-blue-100' },
      { name: 'MongoDB', icon: 'Layers3', level: 85, color: 'text-green-800', bg: 'bg-green-100' },
      { name: 'Redis', icon: 'Zap', level: 82, color: 'text-red-600', bg: 'bg-red-100' }
    ],
    tools: [
      { name: 'Docker', icon: 'Box', level: 87, color: 'text-blue-600', bg: 'bg-blue-100' },
      { name: 'AWS', icon: 'Cloud', level: 85, color: 'text-orange-600', bg: 'bg-orange-100' },
      { name: 'Git', icon: 'GitBranch', level: 95, color: 'text-gray-700', bg: 'bg-gray-100' },
      { name: 'Figma', icon: 'Figma', level: 80, color: 'text-purple-600', bg: 'bg-purple-100' },
      { name: 'Webpack', icon: 'Package', level: 78, color: 'text-blue-700', bg: 'bg-blue-100' }
    ]
  };

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: 'Monitor' },
    { id: 'backend', label: 'Backend', icon: 'Server' },
    { id: 'tools', label: 'Tools & DevOps', icon: 'Settings' }
  ];

  const achievements = [
    { icon: 'Award', label: 'AWS Certified', color: 'text-orange-600' },
    { icon: 'Star', label: 'Top 5% Developer', color: 'text-yellow-600' },
    { icon: 'Shield', label: 'Security Expert', color: 'text-green-600' },
    { icon: 'Zap', label: 'Performance Guru', color: 'text-blue-600' }
  ];

  return (
    <section id="tech-showcase" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Technical Mastery
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A comprehensive view of the technologies and tools I leverage to create exceptional digital experiences.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-card rounded-xl p-2 shadow-brand-sm">
            <div className="flex space-x-1">
              {categories?.map((category) => (
                <button
                  key={category?.id}
                  onClick={() => setActiveCategory(category?.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium transition-brand ${
                    activeCategory === category?.id
                      ? 'bg-primary text-primary-foreground shadow-brand-sm'
                      : 'text-text-secondary hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={category?.icon} size={16} />
                  <span>{category?.label}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {technologies?.[activeCategory]?.map((tech, index) => (
            <motion.div
              key={tech?.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-brand-sm hover:shadow-brand-md transition-all group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 ${tech?.bg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon name={tech?.icon} size={24} className={tech?.color} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">{tech?.name}</h3>
                  <div className="text-sm text-text-secondary">{tech?.level}% Proficiency</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-text-secondary">Skill Level</span>
                  <span className="text-sm font-medium text-primary">{tech?.level}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech?.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl font-bold text-primary mb-8">Professional Achievements</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {achievements?.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-card px-6 py-3 rounded-full shadow-brand-sm hover:shadow-brand-md transition-all"
              >
                <Icon name={achievement?.icon} size={20} className={achievement?.color} />
                <span className="font-medium text-text-primary">{achievement?.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and see how my technical expertise can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-brand flex items-center justify-center space-x-2">
                <Icon name="MessageCircle" size={20} />
                <span>Start a Conversation</span>
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-brand flex items-center justify-center space-x-2 border border-white/20">
                <Icon name="Download" size={20} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalShowcase;