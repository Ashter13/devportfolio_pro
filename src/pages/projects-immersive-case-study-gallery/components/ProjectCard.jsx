import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ProjectCard = ({ project, index, onSelect }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1
      }
    }
  };

  const categoryColors = {
    ecommerce: 'bg-blue-100 text-blue-700',
    saas: 'bg-green-100 text-green-700',
    mobile: 'bg-purple-100 text-purple-700',
    web: 'bg-orange-100 text-orange-700'
  };

  const categoryIcons = {
    ecommerce: 'ShoppingCart',
    saas: 'Cloud',
    mobile: 'Smartphone',
    web: 'Monitor'
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-card rounded-xl overflow-hidden shadow-brand-sm hover:shadow-brand-lg transition-all duration-500 group cursor-pointer"
      onClick={() => onSelect(project)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={project?.image}
          alt={project?.title}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse"></div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${categoryColors?.[project?.category]}`}>
            <Icon name={categoryIcons?.[project?.category]} size={12} />
            <span className="capitalize">{project?.category}</span>
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-black/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
            {project?.duration}
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Quick Actions */}
        <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e?.stopPropagation();
              window?.open(project?.github, '_blank');
            }}
            className="w-8 h-8 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-brand"
          >
            <Icon name="Github" size={14} />
          </button>
          <button
            onClick={(e) => {
              e?.stopPropagation();
              window?.open(project?.live, '_blank');
            }}
            className="w-8 h-8 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-brand"
          >
            <Icon name="ExternalLink" size={14} />
          </button>
        </div>
      </div>
      {/* Project Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
          {project?.title}
        </h3>

        {/* Client */}
        <div className="flex items-center space-x-2 mb-3">
          <Icon name="Building" size={14} className="text-text-muted" />
          <span className="text-sm text-text-secondary">{project?.client}</span>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
          {project?.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project?.technologies?.slice(0, 3)?.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-muted text-text-primary text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
          {project?.technologies?.length > 3 && (
            <span className="px-2 py-1 bg-muted text-text-muted text-xs rounded-md font-medium">
              +{project?.technologies?.length - 3} more
            </span>
          )}
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center p-2 bg-muted/50 rounded-lg">
            <div className="text-sm font-semibold text-primary">{project?.metrics?.performance}</div>
            <div className="text-xs text-text-muted">Performance</div>
          </div>
          <div className="text-center p-2 bg-muted/50 rounded-lg">
            <div className="text-sm font-semibold text-success">{project?.metrics?.uptime}</div>
            <div className="text-xs text-text-muted">Uptime</div>
          </div>
          <div className="text-center p-2 bg-muted/50 rounded-lg">
            <div className="text-sm font-semibold text-accent">{project?.metrics?.loadTime}</div>
            <div className="text-xs text-text-muted">Load Time</div>
          </div>
        </div>

        {/* CTA Button */}
        <button 
          className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-primary/90 transition-brand group-hover:shadow-brand-md"
        >
          <Icon name="BookOpen" size={16} />
          <span>View Case Study</span>
          <Icon name="ArrowRight" size={16} />
        </button>
      </div>
      {/* Featured Ribbon (for special projects) */}
      {index < 2 && (
        <div className="absolute top-0 right-0">
          <div className="bg-accent text-accent-foreground px-3 py-1 text-xs font-medium transform rotate-45 translate-x-3 translate-y-2">
            Featured
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;