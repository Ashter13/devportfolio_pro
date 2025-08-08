import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillsRadar = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  const skillCategories = [
    {
      id: 1,
      name: "Frontend Development",
      icon: "Monitor",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      proficiency: 95,
      skills: [
        { name: "React", level: 95, experience: "5+ years" },
        { name: "TypeScript", level: 90, experience: "4+ years" },
        { name: "Next.js", level: 88, experience: "3+ years" },
        { name: "Tailwind CSS", level: 92, experience: "4+ years" },
        { name: "Framer Motion", level: 85, experience: "2+ years" }
      ]
    },
    {
      id: 2,
      name: "Backend Development",
      icon: "Server",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      proficiency: 90,
      skills: [
        { name: "Node.js", level: 92, experience: "5+ years" },
        { name: "Express.js", level: 90, experience: "4+ years" },
        { name: "PostgreSQL", level: 85, experience: "4+ years" },
        { name: "MongoDB", level: 88, experience: "3+ years" },
        { name: "Redis", level: 80, experience: "2+ years" }
      ]
    },
    {
      id: 3,
      name: "Cloud & DevOps",
      icon: "Cloud",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      proficiency: 85,
      skills: [
        { name: "AWS", level: 88, experience: "4+ years" },
        { name: "Docker", level: 85, experience: "3+ years" },
        { name: "CI/CD", level: 82, experience: "3+ years" },
        { name: "Kubernetes", level: 75, experience: "2+ years" },
        { name: "Terraform", level: 70, experience: "1+ years" }
      ]
    },
    {
      id: 4,
      name: "Mobile Development",
      icon: "Smartphone",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      proficiency: 80,
      skills: [
        { name: "React Native", level: 85, experience: "3+ years" },
        { name: "Expo", level: 80, experience: "2+ years" },
        { name: "PWA", level: 88, experience: "3+ years" },
        { name: "Flutter", level: 70, experience: "1+ years" },
        { name: "Ionic", level: 75, experience: "2+ years" }
      ]
    },
    {
      id: 5,
      name: "Data & Analytics",
      icon: "BarChart3",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      proficiency: 78,
      skills: [
        { name: "D3.js", level: 85, experience: "3+ years" },
        { name: "Chart.js", level: 80, experience: "2+ years" },
        { name: "Python", level: 75, experience: "2+ years" },
        { name: "SQL", level: 88, experience: "4+ years" },
        { name: "Analytics", level: 82, experience: "3+ years" }
      ]
    },
    {
      id: 6,
      name: "Design & UX",
      icon: "Palette",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      proficiency: 82,
      skills: [
        { name: "Figma", level: 85, experience: "3+ years" },
        { name: "Adobe XD", level: 80, experience: "2+ years" },
        { name: "UI/UX Design", level: 88, experience: "4+ years" },
        { name: "Prototyping", level: 82, experience: "3+ years" },
        { name: "User Research", level: 75, experience: "2+ years" }
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            A comprehensive skill set spanning full-stack development, cloud technologies, and modern design practices
          </p>
          <Link to="/skills-technical-mastery-visualization">
            <Button variant="outline" iconName="Code" iconPosition="left">
              Explore Skills in Detail
            </Button>
          </Link>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skillCategories?.map((category) => (
            <motion.div
              key={category?.id}
              variants={itemVariants}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(category?.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className={`bg-background rounded-2xl p-6 shadow-brand-md hover:shadow-brand-lg transition-all duration-300 border ${category?.borderColor} hover:border-opacity-50`}>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${category?.bgColor} rounded-xl flex items-center justify-center`}>
                      <Icon name={category?.icon} size={24} className={category?.color} />
                    </div>
                    <div>
                      <h3 className="font-bold text-text-primary">{category?.name}</h3>
                      <div className="text-sm text-text-secondary">
                        {category?.proficiency}% Proficiency
                      </div>
                    </div>
                  </div>
                </div>

                {/* Proficiency Bar */}
                <div className="mb-4">
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full ${category?.color?.replace('text-', 'bg-')}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category?.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </div>

                {/* Skills List */}
                <div className={`space-y-2 transition-all duration-300 ${
                  hoveredSkill === category?.id ? 'max-h-96 opacity-100' : 'max-h-32 opacity-70'
                }`}>
                  {category?.skills?.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-text-primary font-medium">{skill?.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-text-muted">{skill?.experience}</span>
                        <div className="w-16 bg-muted rounded-full h-1">
                          <motion.div
                            className={`h-1 rounded-full ${category?.color?.replace('text-', 'bg-')}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill?.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover Indicator */}
                <div className={`mt-4 text-center transition-opacity duration-300 ${
                  hoveredSkill === category?.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <span className="text-xs text-text-muted">Hover to see detailed breakdown</span>
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${
                hoveredSkill === category?.id 
                  ? `opacity-20 ${category?.bgColor} blur-xl` 
                  : 'opacity-0'
              }`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-background rounded-2xl p-8 shadow-brand-lg border border-border"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-text-secondary">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-text-secondary">Technologies Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-text-secondary">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-text-secondary">Client Satisfaction</div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <h3 className="text-xl font-bold text-primary mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. Currently exploring AI/ML integration, 
              Web3 technologies, and advanced performance optimization techniques.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["AI/ML", "Web3", "GraphQL", "Rust", "Go", "Blockchain"]?.map((tech, index) => (
                <span
                  key={index}
                  className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsRadar;