import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ValuesInAction = () => {
  const [activeValue, setActiveValue] = useState(0);

  const coreValues = [
    {
      id: "trust",
      title: "Trust & Transparency",
      icon: "Shield",
      color: "accent",
      description: "Building lasting relationships through honest communication and reliable delivery",
      manifestations: [
        {
          title: "Clear Project Communication",
          example: "Weekly progress reports with detailed breakdowns, potential roadblocks, and next steps. Clients always know exactly where their project stands.",
          impact: "98% client satisfaction rate with communication quality"
        },
        {
          title: "Honest Timeline Estimates",
          example: "I provide realistic timelines with buffer time for unexpected challenges. If delays occur, clients are informed immediately with revised schedules.",
          impact: "95% of projects delivered on or ahead of schedule"
        },
        {
          title: "Transparent Pricing",
          example: "Detailed project proposals with clear scope definitions and no hidden costs. Any scope changes are discussed and approved before implementation.",
          impact: "Zero billing disputes in 3+ years of freelancing"
        }
      ]
    },
    {
      id: "reliability",
      title: "Reliability & Excellence",
      icon: "Star",
      color: "success",
      description: "Consistent delivery of high-quality solutions that exceed expectations",
      manifestations: [
        {
          title: "Code Quality Standards",
          example: "Every project includes comprehensive testing, code reviews, and documentation. I follow industry best practices and maintain 90%+ test coverage.",
          impact: "Less than 1% post-launch bug rate across all projects"
        },
        {
          title: "Performance Optimization",
          example: "A client's e-commerce site was loading in 8 seconds. Through systematic optimization, I reduced it to 2.1 seconds, improving conversion rates by 35%.",
          impact: "Average 40% improvement in site performance metrics"
        },
        {
          title: "Long-term Support",
          example: "I provide 3 months of free support post-launch and maintain relationships with clients for ongoing improvements and feature additions.",
          impact: "80% client retention rate for ongoing projects"
        }
      ]
    },
    {
      id: "innovation",
      title: "Innovation & Growth",
      icon: "Lightbulb",
      color: "warning",
      description: "Embracing new technologies and creative solutions to solve complex challenges",
      manifestations: [
        {
          title: "Cutting-edge Solutions",
          example: "Implemented AI-powered chatbot for a SaaS client using OpenAI API, reducing customer support tickets by 60% while improving user satisfaction.",
          impact: "Clients gain competitive advantages through modern tech adoption"
        },
        {
          title: "Process Innovation",
          example: "Developed a custom deployment pipeline that reduced deployment time from 2 hours to 15 minutes, enabling faster iteration cycles.",
          impact: "50% reduction in development cycle times"
        },
        {
          title: "Knowledge Sharing",
          example: "Regular tech talks and blog posts sharing insights from projects, contributing to the developer community and establishing thought leadership.",
          impact: "10,000+ developers reached through content and speaking"
        }
      ]
    }
  ];

  const clientStories = [
    {
      client: "TechStart Solutions",
      project: "E-commerce Platform",
      challenge: "Legacy system causing frequent downtime and poor user experience",
      solution: "Complete platform rebuild with modern architecture and performance optimization",
      result: "99.9% uptime, 300% increase in conversion rates, $2M additional revenue in first year",
      testimonial: "The transformation was incredible. Our platform went from a liability to our biggest competitive advantage.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      client: "InnovateCorp",
      project: "Real-time Analytics Dashboard",
      challenge: "Complex data visualization requirements with real-time updates",
      solution: "Custom React dashboard with WebSocket integration and optimized data processing",
      result: "Real-time insights enabled 25% faster decision-making and improved operational efficiency",
      testimonial: "The dashboard became the nerve center of our operations. Data-driven decisions are now instant.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      client: "HealthTech Startup",
      project: "Patient Management System",
      challenge: "HIPAA compliance requirements with complex user roles and permissions",
      solution: "Secure, scalable system with role-based access control and audit logging",
      result: "Successfully passed HIPAA audit, reduced administrative time by 40%",
      testimonial: "Security and usability don't have to be mutually exclusive. This system proves that.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
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
            Values in Action
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            My core values aren't just words—they're demonstrated through every client interaction, project delivery, and professional relationship I build.
          </p>
        </motion.div>

        {/* Values Tabs */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row justify-center mb-12 space-y-2 sm:space-y-0 sm:space-x-2">
            {coreValues?.map((value, index) => (
              <motion.button
                key={value?.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveValue(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-brand ${
                  activeValue === index
                    ? `bg-${value?.color} text-white shadow-brand-md`
                    : 'bg-muted text-text-secondary hover:bg-accent/10 hover:text-accent'
                }`}
              >
                <Icon name={value?.icon} size={18} />
                <span>{value?.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Value Content */}
          <motion.div
            key={activeValue}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card p-8"
          >
            <div className="text-center mb-8">
              <div className={`w-16 h-16 bg-${coreValues?.[activeValue]?.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Icon 
                  name={coreValues?.[activeValue]?.icon} 
                  size={32} 
                  className={`text-${coreValues?.[activeValue]?.color}`} 
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {coreValues?.[activeValue]?.title}
              </h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                {coreValues?.[activeValue]?.description}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {coreValues?.[activeValue]?.manifestations?.map((manifestation, index) => (
                <motion.div
                  key={manifestation?.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-muted/30 rounded-lg p-6 hover:shadow-brand-md transition-brand"
                >
                  <h4 className="font-semibold text-primary mb-3">{manifestation?.title}</h4>
                  <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                    {manifestation?.example}
                  </p>
                  <div className={`flex items-center space-x-2 text-${coreValues?.[activeValue]?.color} text-sm font-medium`}>
                    <Icon name="TrendingUp" size={16} />
                    <span>{manifestation?.impact}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Client Success Stories */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Client Success Stories</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Real projects, real results, and the lasting relationships built through trust and excellence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {clientStories?.map((story, index) => (
              <motion.div
                key={story?.client}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:shadow-brand-lg transition-brand"
              >
                {/* Client Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={story?.avatar} 
                      alt={story?.client}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">{story?.client}</h4>
                    <p className="text-sm text-accent">{story?.project}</p>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="AlertCircle" size={16} className="text-warning" />
                    <span className="text-sm font-medium text-primary">Challenge</span>
                  </div>
                  <p className="text-sm text-text-secondary">{story?.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Lightbulb" size={16} className="text-accent" />
                    <span className="text-sm font-medium text-primary">Solution</span>
                  </div>
                  <p className="text-sm text-text-secondary">{story?.solution}</p>
                </div>

                {/* Result */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="TrendingUp" size={16} className="text-success" />
                    <span className="text-sm font-medium text-primary">Result</span>
                  </div>
                  <p className="text-sm text-text-secondary">{story?.result}</p>
                </div>

                {/* Testimonial */}
                <div className="bg-muted/50 rounded-lg p-4 mt-4">
                  <Icon name="Quote" size={16} className="text-accent mb-2" />
                  <p className="text-sm text-text-secondary italic">"{story?.testimonial}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesInAction;