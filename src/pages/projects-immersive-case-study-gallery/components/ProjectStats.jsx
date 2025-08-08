import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProjectStats = () => {
  const stats = [
    {
      icon: 'Award',
      value: '50+',
      label: 'Successful Projects',
      description: 'Delivered across various industries',
      color: 'text-accent'
    },
    {
      icon: 'Users',
      value: '25+',
      label: 'Happy Clients',
      description: 'From startups to enterprises',
      color: 'text-success'
    },
    {
      icon: 'Code2',
      value: '15+',
      label: 'Technologies',
      description: 'Mastered and actively used',
      color: 'text-primary'
    },
    {
      icon: 'TrendingUp',
      value: '300%',
      label: 'Average ROI',
      description: 'Improvement for clients',
      color: 'text-warning'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Project Impact & Expertise
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Numbers that reflect consistent delivery of high-quality solutions and measurable business impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats?.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl shadow-brand-sm hover:shadow-brand-md transition-brand text-center group"
            >
              <div className={`w-16 h-16 mx-auto mb-6 ${stat?.color} bg-current/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-brand`}>
                <Icon name={stat?.icon} size={28} className={stat?.color} />
              </div>
              
              <div className="text-4xl font-bold text-primary mb-2">{stat?.value}</div>
              <div className="text-lg font-semibold text-text-primary mb-2">{stat?.label}</div>
              <div className="text-sm text-text-secondary">{stat?.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-full shadow-brand-sm">
            <Icon name="Star" size={16} className="text-warning" />
            <span className="text-sm font-medium text-text-primary">Top Rated Developer</span>
          </div>
          <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-full shadow-brand-sm">
            <Icon name="Clock" size={16} className="text-success" />
            <span className="text-sm font-medium text-text-primary">On-Time Delivery</span>
          </div>
          <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-full shadow-brand-sm">
            <Icon name="Shield" size={16} className="text-primary" />
            <span className="text-sm font-medium text-text-primary">Quality Assured</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectStats;