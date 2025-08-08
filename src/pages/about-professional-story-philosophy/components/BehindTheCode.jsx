import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const BehindTheCode = () => {
  const [activeProcess, setActiveProcess] = useState(0);

  const developmentProcess = [
    {
      phase: "Discovery",
      icon: "Search",
      title: "Understanding the Challenge",
      description: "Deep dive into requirements, user needs, and technical constraints",
      activities: [
        "Stakeholder interviews and requirement gathering",
        "User research and persona development", 
        "Technical feasibility analysis",
        "Competitive landscape review"
      ],
      tools: ["Figma", "Notion", "Miro", "Google Analytics"]
    },
    {
      phase: "Planning",
      icon: "Map",
      title: "Strategic Architecture",
      description: "Designing scalable solutions with clear roadmaps and milestones",
      activities: [
        "System architecture design",
        "Database schema planning",
        "API specification creation",
        "Development timeline creation"
      ],
      tools: ["Draw.io", "Postman", "Jira", "GitHub Projects"]
    },
    {
      phase: "Development",
      icon: "Code",
      title: "Building Excellence",
      description: "Writing clean, maintainable code with comprehensive testing",
      activities: [
        "Component-driven development",
        "Test-driven development (TDD)",
        "Code reviews and pair programming",
        "Continuous integration setup"
      ],
      tools: ["VS Code", "Git", "Jest", "Cypress"]
    },
    {
      phase: "Deployment",
      icon: "Rocket",
      title: "Launch & Optimize",
      description: "Seamless deployment with monitoring and continuous improvement",
      activities: [
        "Production deployment automation",
        "Performance monitoring setup",
        "User feedback collection",
        "Iterative improvements"
      ],
      tools: ["Vercel", "AWS", "Sentry", "Hotjar"]
    }
  ];

  const techStack = {
    frontend: [
      { name: "React", level: 95, icon: "Code" },
      { name: "TypeScript", level: 90, icon: "FileCode" },
      { name: "Next.js", level: 88, icon: "Zap" },
      { name: "Tailwind CSS", level: 92, icon: "Palette" }
    ],
    backend: [
      { name: "Node.js", level: 85, icon: "Server" },
      { name: "Python", level: 80, icon: "Code2" },
      { name: "PostgreSQL", level: 82, icon: "Database" },
      { name: "GraphQL", level: 75, icon: "Share2" }
    ],
    tools: [
      { name: "Git", level: 95, icon: "GitBranch" },
      { name: "Docker", level: 78, icon: "Package" },
      { name: "AWS", level: 80, icon: "Cloud" },
      { name: "Figma", level: 85, icon: "Layers" }
    ]
  };

  const learningStats = [
    { label: "Hours of Learning/Week", value: "15+", icon: "Clock" },
    { label: "Courses Completed", value: "47", icon: "BookOpen" },
    { label: "Certifications", value: "12", icon: "Award" },
    { label: "Open Source Contributions", value: "200+", icon: "GitCommit" }
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
            Behind the Code
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Discover my development process, preferred tools, and continuous learning approach that ensures every project exceeds expectations.
          </p>
        </motion.div>

        {/* Development Process */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-primary text-center mb-12">Development Process</h3>
          
          {/* Process Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {developmentProcess?.map((process, index) => (
              <motion.button
                key={process.phase}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveProcess(index)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-brand ${
                  activeProcess === index
                    ? 'bg-accent text-white shadow-brand-md'
                    : 'bg-background text-text-secondary hover:bg-accent/10 hover:text-accent'
                }`}
              >
                <Icon name={process.icon} size={16} />
                <span>{process.phase}</span>
              </motion.button>
            ))}
          </div>

          {/* Process Content */}
          <motion.div
            key={activeProcess}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card p-8"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name={developmentProcess?.[activeProcess]?.icon} size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary">
                      {developmentProcess?.[activeProcess]?.title}
                    </h4>
                    <p className="text-sm text-accent font-medium">
                      Phase {activeProcess + 1}: {developmentProcess?.[activeProcess]?.phase}
                    </p>
                  </div>
                </div>
                
                <p className="text-text-secondary mb-6">
                  {developmentProcess?.[activeProcess]?.description}
                </p>

                <div className="space-y-3">
                  {developmentProcess?.[activeProcess]?.activities?.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <h5 className="font-semibold text-primary mb-4 flex items-center space-x-2">
                  <Icon name="Tool" size={18} />
                  <span>Preferred Tools</span>
                </h5>
                <div className="grid grid-cols-2 gap-3">
                  {developmentProcess?.[activeProcess]?.tools?.map((tool) => (
                    <div key={tool} className="flex items-center space-x-2 bg-background rounded-md px-3 py-2">
                      <div className="w-6 h-6 bg-accent/10 rounded flex items-center justify-center">
                        <Icon name="Wrench" size={12} className="text-accent" />
                      </div>
                      <span className="text-sm font-medium text-primary">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-primary text-center mb-12">Technical Expertise</h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(techStack)?.map(([category, technologies], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h4 className="text-lg font-semibold text-primary mb-6 capitalize flex items-center space-x-2">
                  <Icon name={category === 'frontend' ? 'Monitor' : category === 'backend' ? 'Server' : 'Settings'} size={20} />
                  <span>{category}</span>
                </h4>
                
                <div className="space-y-4">
                  {technologies?.map((tech, index) => (
                    <div key={tech?.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Icon name={tech?.icon} size={16} className="text-accent" />
                          <span className="text-sm font-medium text-primary">{tech?.name}</span>
                        </div>
                        <span className="text-xs text-text-secondary">{tech?.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech?.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-accent h-2 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learning Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-primary mb-12">Continuous Learning</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningStats?.map((stat, index) => (
              <motion.div
                key={stat?.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center hover:shadow-brand-lg transition-brand"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat?.icon} size={24} className="text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat?.value}</div>
                <div className="text-sm text-text-secondary">{stat?.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BehindTheCode;