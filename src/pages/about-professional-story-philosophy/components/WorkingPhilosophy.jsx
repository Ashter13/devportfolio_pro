import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const WorkingPhilosophy = () => {
  const [activeTab, setActiveTab] = useState(0);

  const philosophyTabs = [
    {
      id: "problem-solving",
      title: "Problem Solving",
      icon: "Puzzle",
      content: {
        title: "Systematic Problem Decomposition",
        description: "I approach complex challenges by breaking them down into manageable components, analyzing each piece thoroughly, and building elegant solutions from the ground up.",
        principles: [
          {
            icon: "Search",
            title: "Deep Analysis",
            description: "Understanding the root cause before jumping to solutions"
          },
          {
            icon: "Layers",
            title: "Modular Thinking",
            description: "Breaking complex problems into smaller, solvable pieces"
          },
          {
            icon: "Target",
            title: "Goal-Oriented",
            description: "Every solution must serve the end user\'s needs effectively"
          }
        ],
        example: "When faced with a slow-loading e-commerce site, I don't just optimize images. I analyze the entire user journey, identify bottlenecks in database queries, implement caching strategies, and optimize the critical rendering path—resulting in 70% faster load times."
      }
    },
    {
      id: "collaboration",
      title: "Client Collaboration",
      icon: "Users",
      content: {
        title: "Partnership-Driven Development",
        description: "I believe the best solutions emerge from genuine collaboration. I work closely with clients to understand their vision, challenges, and goals, ensuring every technical decision aligns with business objectives.",
        principles: [
          {
            icon: "MessageCircle",
            title: "Clear Communication",
            description: "Translating technical concepts into business language"
          },
          {
            icon: "Eye",
            title: "Transparent Process",
            description: "Regular updates and demos throughout development"
          },
          {
            icon: "Handshake",
            title: "Shared Ownership",
            description: "Clients are partners in the development process"
          }
        ],
        example: "For a recent fintech project, I conducted weekly stakeholder meetings, created interactive prototypes for feedback, and maintained a shared project dashboard. This collaborative approach resulted in zero scope creep and a product that exceeded expectations."
      }
    },
    {
      id: "technical-decisions",
      title: "Technical Decisions",
      icon: "Settings",
      content: {
        title: "Strategic Technology Selection",
        description: "Technology choices should be driven by project requirements, team capabilities, and long-term maintainability—not by what's trendy. I evaluate each decision based on its impact on performance, scalability, and developer experience.",
        principles: [
          {
            icon: "Scale",
            title: "Balanced Evaluation",
            description: "Weighing pros and cons of each technology choice"
          },
          {
            icon: "Clock",
            title: "Future-Proofing",
            description: "Considering long-term maintenance and scalability"
          },
          {
            icon: "Zap",
            title: "Performance First",
            description: "Optimizing for speed and user experience"
          }
        ],
        example: "When building a real-time chat application, I chose WebSockets over polling for instant messaging, implemented Redis for session management, and used React Query for efficient data synchronization—creating a seamless user experience with minimal server load."
      }
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
            Working Philosophy
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            My approach to development is grounded in proven methodologies, clear communication, and strategic thinking. Here's how I tackle challenges and deliver exceptional results.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row justify-center mb-12 space-y-2 sm:space-y-0 sm:space-x-2">
            {philosophyTabs?.map((tab, index) => (
              <motion.button
                key={tab?.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-brand ${
                  activeTab === index
                    ? 'bg-accent text-white shadow-brand-md'
                    : 'bg-muted text-text-secondary hover:bg-accent/10 hover:text-accent'
                }`}
              >
                <Icon name={tab?.icon} size={18} />
                <span>{tab?.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Main Content */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name={philosophyTabs?.[activeTab]?.icon} size={24} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    {philosophyTabs?.[activeTab]?.content?.title}
                  </h3>
                </div>

                <p className="text-text-secondary leading-relaxed mb-8">
                  {philosophyTabs?.[activeTab]?.content?.description}
                </p>

                {/* Principles */}
                <div className="space-y-4">
                  {philosophyTabs?.[activeTab]?.content?.principles?.map((principle, index) => (
                    <div key={principle?.title} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name={principle?.icon} size={16} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{principle?.title}</h4>
                        <p className="text-sm text-text-secondary">{principle?.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Example Case Study */}
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl p-6 border border-accent/10">
                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="Lightbulb" size={20} className="text-accent" />
                  <h4 className="font-semibold text-primary">Real-World Example</h4>
                </div>
                <p className="text-text-secondary leading-relaxed text-sm">
                  {philosophyTabs?.[activeTab]?.content?.example}
                </p>
                
                {/* Visual Metaphor */}
                <div className="mt-6 flex items-center justify-center">
                  <div className="flex items-center space-x-2 text-accent">
                    <Icon name="ArrowRight" size={16} />
                    <span className="text-sm font-medium">Result-Driven Approach</span>
                    <Icon name="ArrowRight" size={16} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <Icon name="Compass" size={32} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-4">
              Core Philosophy
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Every project is an opportunity to create something meaningful. I combine technical expertise with strategic thinking, ensuring that every solution not only works flawlessly but also drives real business value and exceptional user experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkingPhilosophy;