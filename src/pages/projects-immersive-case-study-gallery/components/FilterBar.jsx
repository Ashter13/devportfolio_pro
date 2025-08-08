import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FilterBar = ({ activeFilter, onFilterChange, searchQuery, onSearchChange }) => {
  const filters = [
    { id: 'all', label: 'All Projects', icon: 'Grid', count: 12 },
    { id: 'ecommerce', label: 'E-Commerce', icon: 'ShoppingCart', count: 4 },
    { id: 'saas', label: 'SaaS Platforms', icon: 'Cloud', count: 3 },
    { id: 'mobile', label: 'Mobile Apps', icon: 'Smartphone', count: 2 },
    { id: 'web', label: 'Web Apps', icon: 'Monitor', count: 3 }
  ];

  const technologies = [
    { id: 'react', label: 'React', color: 'bg-blue-100 text-blue-700' },
    { id: 'nodejs', label: 'Node.js', color: 'bg-green-100 text-green-700' },
    { id: 'python', label: 'Python', color: 'bg-yellow-100 text-yellow-700' },
    { id: 'nextjs', label: 'Next.js', color: 'bg-gray-100 text-gray-700' },
    { id: 'vue', label: 'Vue.js', color: 'bg-emerald-100 text-emerald-700' }
  ];

  return (
    <section id="filters" className="py-12 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-md mx-auto mb-8"
        >
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary" 
          />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e?.target?.value)}
            className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-brand text-text-primary"
          />
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {filters?.map((filter) => (
            <button
              key={filter?.id}
              onClick={() => onFilterChange(filter?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-brand ${
                activeFilter === filter?.id
                  ? 'bg-primary text-primary-foreground shadow-brand-sm'
                  : 'bg-card text-text-secondary hover:text-primary hover:bg-muted border border-border'
              }`}
            >
              <Icon name={filter?.icon} size={16} />
              <span>{filter?.label}</span>
              <span className={`px-2 py-0.5 text-xs rounded-full ${
                activeFilter === filter?.id
                  ? 'bg-primary-foreground/20 text-primary-foreground'
                  : 'bg-muted text-text-muted'
              }`}>
                {filter?.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="text-sm text-text-secondary mb-4">Filter by Technology:</div>
          <div className="flex flex-wrap justify-center gap-2">
            {technologies?.map((tech) => (
              <button
                key={tech?.id}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-brand hover:scale-105 ${tech?.color}`}
              >
                {tech?.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Active Filters Summary */}
        {(activeFilter !== 'all' || searchQuery) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center space-x-4 mt-8 p-4 bg-muted/50 rounded-lg"
          >
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <Icon name="Filter" size={16} />
              <span>Active filters:</span>
            </div>
            
            {activeFilter !== 'all' && (
              <div className="flex items-center space-x-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs">
                <span>{filters?.find(f => f?.id === activeFilter)?.label}</span>
                <button 
                  onClick={() => onFilterChange('all')}
                  className="hover:bg-primary-foreground/20 p-1 rounded-full transition-brand"
                >
                  <Icon name="X" size={12} />
                </button>
              </div>
            )}
            
            {searchQuery && (
              <div className="flex items-center space-x-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs">
                <span>"{searchQuery}"</span>
                <button 
                  onClick={() => onSearchChange('')}
                  className="hover:bg-accent-foreground/20 p-1 rounded-full transition-brand"
                >
                  <Icon name="X" size={12} />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FilterBar;