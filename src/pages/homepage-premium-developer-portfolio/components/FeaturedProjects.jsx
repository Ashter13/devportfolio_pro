import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      category: "Full-Stack Development",
      description: "Complete redesign and development of a modern e-commerce platform with React, Node.js, and MongoDB. Features include real-time inventory, payment integration, and advanced analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      metrics: {
        performance: "+60% faster load times",
        conversion: "+180% conversion rate",
        users: "50K+ active users"
      },
      status: "Live",
      year: "2024",
      duration: "4 months",
      link: "/projects-immersive-case-study-gallery"
    },
    {
      id: 2,
      title: "SaaS Dashboard Analytics",
      category: "Frontend Development",
      description: "Interactive analytics dashboard for a SaaS platform with real-time data visualization, custom charts, and responsive design. Built with React and D3.js for optimal performance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      techStack: ["React", "TypeScript", "D3.js", "Tailwind", "Framer Motion"],
      metrics: {
        performance: "+45% user engagement",
        efficiency: "+200% data processing",
        satisfaction: "98% user satisfaction"
      },
      status: "Live",
      year: "2024",
      duration: "3 months",
      link: "/projects-immersive-case-study-gallery"
    },
    {
      id: 3,
      title: "Mobile-First Web App",
      category: "Progressive Web App",
      description: "Progressive web application with offline capabilities, push notifications, and native-like experience. Optimized for mobile devices with exceptional performance scores.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      techStack: ["React", "PWA", "Service Workers", "IndexedDB", "WebRTC"],
      metrics: {
        performance: "95+ Lighthouse score",
        offline: "100% offline functionality",
        install: "40% install rate"
      },
      status: "Live",
      year: "2024",
      duration: "5 months",
      link: "/projects-immersive-case-study-gallery"
    },
    {
      id: 4,
      title: "Real-Time Collaboration Tool",
      category: "Full-Stack Development",
      description: "Real-time collaboration platform with live editing, video calls, and file sharing. Built with React, Socket.io, and WebRTC for seamless team communication.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      techStack: ["React", "Socket.io", "WebRTC", "Express", "PostgreSQL"],
      metrics: {
        latency: "&lt;50ms response time",
        concurrent: "1000+ concurrent users",
        uptime: "99.9% uptime"
      },
      status: "In Development",
      year: "2024",
      duration: "6 months",
      link: "/projects-immersive-case-study-gallery"
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Showcasing recent work that demonstrates technical expertise, creative problem-solving, and measurable business impact
          </p>
          <Link to="/projects-immersive-case-study-gallery">
            <Button variant="outline" iconName="ArrowRight" iconPosition="right">
              View All Projects
            </Button>
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects?.map((project, index) => (
            <motion.div
              key={project?.id}
              variants={itemVariants}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project?.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-brand-md hover:shadow-brand-xl transition-all duration-500 border border-border">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project?.image}
                    alt={project?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent transition-opacity duration-300 ${
                    hoveredProject === project?.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project?.status === 'Live' ?'bg-success text-white' :'bg-warning text-white'
                          }`}>
                            {project?.status}
                          </span>
                          <span className="text-white text-sm">{project?.year}</span>
                        </div>
                        <Link to={project?.link}>
                          <Button
                            variant="secondary"
                            size="sm"
                            iconName="ExternalLink"
                            iconPosition="right"
                            className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                          >
                            View Case Study
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-background/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {project?.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {project?.title}
                  </h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {project?.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project?.techStack?.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-muted text-text-primary px-3 py-1 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-1 gap-3">
                    {Object.entries(project?.metrics)?.map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="flex items-center justify-between py-2 border-b border-border last:border-b-0">
                        <span className="text-sm text-text-secondary capitalize">
                          {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                        </span>
                        <span className="text-sm font-semibold text-success" dangerouslySetInnerHTML={{ __html: value }} />
                      </div>
                    ))}
                  </div>

                  {/* Project Meta */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <div className="flex items-center space-x-4 text-sm text-text-muted">
                      <div className="flex items-center space-x-1">
                        <Icon name="Calendar" size={16} />
                        <span>{project?.duration}</span>
                      </div>
                    </div>
                    <Link to={project?.link}>
                      <Button
                        variant="ghost"
                        size="sm"
                        iconName="ArrowRight"
                        iconPosition="right"
                        className="text-accent hover:text-accent/80"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-accent transition-opacity duration-300 pointer-events-none ${
                hoveredProject === project?.id ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-muted/50 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Let's discuss how we can transform your ideas into exceptional digital experiences. 
              From concept to deployment, I'll guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Start a Conversation
              </Button>
              <Link to="/projects-immersive-case-study-gallery">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="FolderOpen"
                  iconPosition="left"
                >
                  Explore All Projects
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;