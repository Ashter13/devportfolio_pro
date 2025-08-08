import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const MissionStatement = () => {
  const principles = [
    {
      icon: "Brain",
      title: "Strategic Thinking",
      description: "Every line of code serves a purpose. I approach development with a strategic mindset, considering not just what to build, but why and how it fits into the bigger picture."
    },
    {
      icon: "Users",
      title: "Human-Centered Design",
      description: "Technology should serve people, not the other way around. I create solutions that are intuitive, accessible, and genuinely improve user experiences."
    },
    {
      icon: "Shield",
      title: "Quality & Reliability",
      description: "Excellence isn't negotiable. I write clean, maintainable code with comprehensive testing, ensuring solutions that stand the test of time."
    },
    {
      icon: "Rocket",
      title: "Continuous Innovation",
      description: "The tech landscape evolves rapidly. I stay ahead of the curve, constantly learning and adopting new technologies that deliver real value."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            The Thinking Developer Approach
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            My mission is to bridge the gap between complex technical challenges and elegant, user-friendly solutions. 
            I don't just write code—I craft digital experiences that drive real business value and meaningful user engagement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {principles?.map((principle, index) => (
            <motion.div
              key={principle?.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 hover:shadow-brand-lg transition-brand group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-brand">
                  <Icon 
                    name={principle?.icon} 
                    size={24} 
                    className="text-accent group-hover:text-white transition-brand" 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-brand">
                    {principle?.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {principle?.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
            <Icon name="Quote" size={32} className="text-accent mx-auto mb-6" />
            <blockquote className="text-xl lg:text-2xl font-medium text-primary mb-6 italic">
              "Great developers don't just solve problems—they anticipate them, prevent them, and create solutions that make future challenges easier to tackle."
            </blockquote>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-0.5 bg-accent"></div>
              <span className="text-text-secondary font-medium">My Development Philosophy</span>
              <div className="w-8 h-0.5 bg-accent"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionStatement;