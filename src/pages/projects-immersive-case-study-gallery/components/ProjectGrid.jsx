import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import LoadingSpinner from './LoadingSpinner';

const ProjectGrid = ({ activeFilter, searchQuery, isLoading, onProjectSelect }) => {
  // Mock project data
  const projects = [
    {
      id: 1,
      title: 'EcoShop - Sustainable E-commerce Platform',
      category: 'ecommerce',
      description: 'A modern e-commerce platform focused on sustainable products with advanced filtering, AI-powered recommendations, and seamless checkout experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      duration: '6 months',
      client: 'EcoShop Inc.',
      challenge: 'Building a scalable e-commerce platform with complex product filtering and recommendation system',
      solution: 'Implemented microservices architecture with Redis caching and AI-powered recommendation engine',
      results: ['300% increase in conversion rate', '50% reduction in cart abandonment', '2M+ users in first year'],
      features: ['AI Recommendations', 'Advanced Search', 'Mobile Optimized', 'Payment Integration'],
      metrics: {
        performance: '98%',
        uptime: '99.9%',
        loadTime: '1.2s'
      },
      github: 'https://github.com/example/ecoshop',
      live: 'https://ecoshop-demo.com',
      testimonial: 'Outstanding work! The platform exceeded our expectations and delivered exceptional ROI.',
      clientLogo: 'https://via.placeholder.com/100x40'
    },
    {
      id: 2,
      title: 'TaskFlow - Project Management SaaS',
      category: 'saas',
      description: 'A comprehensive project management SaaS solution with real-time collaboration, advanced analytics, and team productivity insights.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'WebSocket'],
      duration: '8 months',
      client: 'TaskFlow Solutions',
      challenge: 'Creating a real-time collaborative platform that scales to thousands of concurrent users',
      solution: 'Built with Next.js, implemented WebSocket for real-time updates, and optimized database queries',
      results: ['5000+ active users', '40% improvement in team productivity', '$2M ARR achieved'],
      features: ['Real-time Collaboration', 'Advanced Analytics', 'Custom Workflows', 'API Integration'],
      metrics: {
        performance: '96%',
        uptime: '99.8%',
        loadTime: '0.9s'
      },
      github: 'https://github.com/example/taskflow',
      live: 'https://taskflow-demo.com',
      testimonial: 'The platform transformed how our teams collaborate. Incredible attention to detail.',
      clientLogo: 'https://via.placeholder.com/100x40'
    },
    {
      id: 3,
      title: 'FitTracker - Mobile Fitness App',
      category: 'mobile',
      description: 'A React Native mobile app for fitness tracking with AI-powered workout recommendations and social features.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      technologies: ['React Native', 'Firebase', 'Python', 'TensorFlow'],
      duration: '4 months',
      client: 'FitLife Technologies',
      challenge: 'Developing cross-platform mobile app with AI features and offline capabilities',
      solution: 'Used React Native with Redux, integrated ML models for workout recommendations',
      results: ['100k+ downloads', '4.8/5 App Store rating', '85% user retention'],
      features: ['AI Workouts', 'Social Features', 'Offline Mode', 'Health Integration'],
      metrics: {
        performance: '95%',
        uptime: '99.7%',
        loadTime: '1.5s'
      },
      github: 'https://github.com/example/fittracker',
      live: 'https://fittracker-app.com',
      testimonial: 'Exceptional mobile app development. Users love the intuitive interface.',
      clientLogo: 'https://via.placeholder.com/100x40'
    },
    {
      id: 4,
      title: 'DataViz - Analytics Dashboard',
      category: 'web',
      description: 'A powerful web-based analytics dashboard with real-time data visualization and interactive charts.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'D3.js', 'Node.js', 'InfluxDB'],
      duration: '5 months',
      client: 'DataCorp Analytics',
      challenge: 'Processing and visualizing large datasets in real-time with complex filtering options',
      solution: 'Implemented efficient data streaming with WebSockets and optimized D3.js visualizations',
      results: ['10TB+ data processed daily', '60% faster insights', 'Enterprise adoption'],
      features: ['Real-time Data', 'Interactive Charts', 'Custom Reports', 'Export Tools'],
      metrics: {
        performance: '97%',
        uptime: '99.9%',
        loadTime: '1.1s'
      },
      github: 'https://github.com/example/dataviz',
      live: 'https://dataviz-demo.com',
      testimonial: 'Revolutionary dashboard that transformed our data analysis workflow.',
      clientLogo: 'https://via.placeholder.com/100x40'
    },
    // Add more projects...
    {
      id: 5,
      title: 'CryptoExchange - Trading Platform',
      category: 'web',
      description: 'A secure cryptocurrency trading platform with real-time market data and advanced trading features.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      technologies: ['React', 'Express', 'Redis', 'WebSocket'],
      duration: '10 months',
      client: 'CryptoTrade Ltd.',
      challenge: 'Building a high-frequency trading platform with microsecond latency requirements',
      solution: 'Optimized backend architecture with Redis caching and WebSocket connections',
      results: ['$50M+ trading volume', '99.99% uptime', 'SOC2 compliance'],
      features: ['Real-time Trading', 'Advanced Charts', 'Security Features', 'API Access'],
      metrics: {
        performance: '99%',
        uptime: '99.99%',
        loadTime: '0.8s'
      },
      github: 'https://github.com/example/cryptoexchange',
      live: 'https://crypto-demo.com',
      testimonial: 'Incredible platform that handles high-volume trading flawlessly.',
      clientLogo: 'https://via.placeholder.com/100x40'
    },
    {
      id: 6,
      title: 'LearnHub - Online Learning Platform',
      category: 'ecommerce',
      description: 'An interactive online learning platform with course creation tools and student progress tracking.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'Supabase', 'Tailwind', 'Stripe'],
      duration: '7 months',
      client: 'EduTech Solutions',
      challenge: 'Creating an engaging learning experience with video streaming and interactive content',
      solution: 'Built with Next.js, integrated video CDN, and implemented progress tracking system',
      results: ['25k+ students', '95% completion rate', '$1M+ in course sales'],
      features: ['Video Streaming', 'Progress Tracking', 'Interactive Content', 'Certificates'],
      metrics: {
        performance: '96%',
        uptime: '99.8%',
        loadTime: '1.3s'
      },
      github: 'https://github.com/example/learnhub',
      live: 'https://learnhub-demo.com',
      testimonial: 'Perfect learning platform that our students absolutely love.',
      clientLogo: 'https://via.placeholder.com/100x40'
    }
  ];

  // Filter and search logic
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Filter by category
    if (activeFilter !== 'all') {
      filtered = filtered?.filter(project => project?.category === activeFilter);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered?.filter(project => 
        project?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.technologies?.some(tech => tech?.toLowerCase()?.includes(searchQuery?.toLowerCase()))
      );
    }

    return filtered;
  }, [activeFilter, searchQuery, projects]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-2">
              Project Showcase
            </h2>
            <p className="text-text-secondary">
              Showing {filteredProjects?.length} of {projects?.length} projects
              {activeFilter !== 'all' && (
                <span className="ml-2 text-accent">
                  in {activeFilter?.charAt(0)?.toUpperCase() + activeFilter?.slice(1)}
                </span>
              )}
            </p>
          </div>
          
          {/* View Toggle */}
          <div className="hidden md:flex items-center space-x-2 bg-muted p-1 rounded-lg">
            <button className="p-2 bg-primary text-primary-foreground rounded-md">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
              </svg>
            </button>
            <button className="p-2 text-text-secondary hover:text-primary rounded-md">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 8a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence>
          {filteredProjects?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects?.map((project, index) => (
                <ProjectCard
                  key={project?.id}
                  project={project}
                  index={index}
                  onSelect={onProjectSelect}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">No Projects Found</h3>
              <p className="text-text-secondary max-w-md mx-auto">
                No projects match your current filters. Try adjusting your search criteria or browsing all projects.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load More Button (if needed) */}
        {filteredProjects?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-brand">
              Load More Projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectGrid;