import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CareerTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const timelineData = [
    {
      year: "2018",
      title: "The Beginning",
      role: "Self-Taught Developer",
      company: "Personal Projects",
      description: "Started my coding journey with HTML, CSS, and JavaScript. Built my first website and fell in love with the power of creating digital experiences.",
      achievements: [
        "Completed 5 personal projects",
        "Learned fundamental web technologies",
        "Built first responsive website"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Git"],
      icon: "Play"
    },
    {
      year: "2019",
      title: "First Professional Role",
      role: "Junior Frontend Developer",
      company: "TechStart Solutions",
      description: "Joined a dynamic startup where I honed my React skills and learned the importance of clean, maintainable code in a team environment.",
      achievements: [
        "Developed 3 client-facing applications",
        "Improved page load times by 40%",
        "Mentored 2 new team members"
      ],
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      icon: "Code"
    },
    {
      year: "2020",
      title: "Full-Stack Evolution",
      role: "Full-Stack Developer",
      company: "InnovateTech Corp",
      description: "Expanded into backend development, mastering server-side technologies and database design. Led my first major project from conception to deployment.",
      achievements: [
        "Led development of e-commerce platform",
        "Implemented CI/CD pipelines",
        "Reduced server costs by 30%"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      icon: "Server"
    },
    {
      year: "2021",
      title: "Technical Leadership",
      role: "Senior Developer",
      company: "ScaleUp Dynamics",
      description: "Took on leadership responsibilities, architecting scalable solutions and mentoring junior developers. Focused on performance optimization and best practices.",
      achievements: [
        "Architected microservices infrastructure",
        "Led team of 5 developers",
        "Delivered 8 successful projects"
      ],
      technologies: ["React", "TypeScript", "Kubernetes", "GraphQL", "Redis"],
      icon: "Users"
    },
    {
      year: "2022",
      title: "Freelance Success",
      role: "Independent Consultant",
      company: "DevPortfolio Pro",
      description: "Launched my freelance career, working with diverse clients from startups to enterprises. Specialized in complex problem-solving and technical consulting.",
      achievements: [
        "Served 15+ satisfied clients",
        "Built 20+ custom applications",
        "Achieved 98% client satisfaction rate"
      ],
      technologies: ["React", "Next.js", "Python", "Django", "GCP"],
      icon: "Briefcase"
    },
    {
      year: "2025",
      title: "Present Day",
      role: "Senior Full-Stack Consultant",
      company: "DevPortfolio Pro",
      description: "Currently helping businesses transform their digital presence through innovative web solutions. Focused on cutting-edge technologies and exceptional user experiences.",
      achievements: [
        "Active in 5 major projects",
        "Speaking at tech conferences",
        "Contributing to open source"
      ],
      technologies: ["React 18", "Next.js 14", "TypeScript", "Tailwind", "Supabase"],
      icon: "Star"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            My Professional Journey
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From curious beginner to seasoned professional—every step has shaped my approach to development and problem-solving.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border"></div>
              
              {timelineData?.map((item, index) => (
                <motion.div
                  key={item?.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-16 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="card p-6 hover:shadow-brand-lg transition-brand group cursor-pointer"
                         onClick={() => setActiveIndex(index)}>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent transition-brand">
                          <Icon 
                            name={item?.icon} 
                            size={20} 
                            className="text-accent group-hover:text-white transition-brand" 
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-primary">{item?.title}</h3>
                          <p className="text-sm text-text-secondary">{item?.role}</p>
                        </div>
                      </div>
                      
                      <p className="text-accent font-medium mb-2">{item?.company}</p>
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        {item?.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item?.technologies?.slice(0, 3)?.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md">
                            {tech}
                          </span>
                        ))}
                        {item?.technologies?.length > 3 && (
                          <span className="px-2 py-1 bg-muted text-text-muted text-xs rounded-md">
                            +{item?.technologies?.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-background border-4 border-accent rounded-full flex items-center justify-center z-10">
                    <span className="text-sm font-bold text-accent">{item?.year}</span>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {timelineData?.map((item, index) => (
              <motion.div
                key={item?.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
                
                {/* Timeline Node */}
                <div className="absolute left-0 top-6 w-12 h-12 bg-background border-4 border-accent rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-accent">{item?.year}</span>
                </div>

                {/* Content */}
                <div className="card p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon name={item?.icon} size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">{item?.title}</h3>
                      <p className="text-sm text-text-secondary">{item?.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-accent font-medium mb-2">{item?.company}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {item?.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item?.technologies?.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;