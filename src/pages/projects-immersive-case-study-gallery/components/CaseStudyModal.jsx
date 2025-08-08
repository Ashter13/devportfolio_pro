import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CaseStudyModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'challenge', label: 'Challenge', icon: 'Target' },
    { id: 'solution', label: 'Solution', icon: 'Lightbulb' },
    { id: 'results', label: 'Results', icon: 'TrendingUp' },
    { id: 'technical', label: 'Technical', icon: 'Code' }
  ];

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            variants={contentVariants}
            className="bg-card rounded-xl max-w-6xl max-h-[90vh] w-full overflow-hidden shadow-brand-xl"
            onClick={(e) => e?.stopPropagation()}
          >
            {/* Header */}
            <div className="relative h-64 bg-gradient-to-br from-primary to-secondary overflow-hidden">
              <Image
                src={project?.image}
                alt={project?.title}
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-brand"
              >
                <Icon name="X" size={20} />
              </button>

              {/* Project Info */}
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Icon name="FolderOpen" size={24} color="white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{project?.title}</h2>
                    <p className="text-white/80">{project?.client}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} />
                    <span className="text-sm">{project?.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={16} />
                    <span className="text-sm">Team of 4</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Star" size={16} />
                    <span className="text-sm">Featured Project</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="border-b border-border overflow-x-auto">
              <nav className="flex space-x-8 px-6">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center space-x-2 px-1 py-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
                      activeTab === tab?.id
                        ? 'border-primary text-primary' :'border-transparent text-text-secondary hover:text-primary'
                    }`}
                  >
                    <Icon name={tab?.icon} size={16} />
                    <span>{tab?.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="max-h-[60vh] overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6"
                >
                  {activeTab === 'overview' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-4">Project Overview</h3>
                        <p className="text-text-secondary leading-relaxed">
                          {project?.description}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-primary mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {project?.features?.map((feature, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <Icon name="Check" size={16} className="text-success" />
                                <span className="text-text-secondary">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-3">Technology Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project?.technologies?.map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <div className="text-2xl font-bold text-primary">{project?.metrics?.performance}</div>
                          <div className="text-sm text-text-secondary">Performance Score</div>
                        </div>
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <div className="text-2xl font-bold text-success">{project?.metrics?.uptime}</div>
                          <div className="text-sm text-text-secondary">Uptime</div>
                        </div>
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <div className="text-2xl font-bold text-accent">{project?.metrics?.loadTime}</div>
                          <div className="text-sm text-text-secondary">Load Time</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'challenge' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-4">The Challenge</h3>
                        <p className="text-text-secondary leading-relaxed mb-6">
                          {project?.challenge}
                        </p>
                      </div>

                      <div className="bg-error/5 border border-error/20 rounded-lg p-6">
                        <div className="flex items-start space-x-3">
                          <Icon name="AlertTriangle" size={20} className="text-error mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-error mb-2">Key Challenges Identified</h4>
                            <ul className="space-y-2 text-text-secondary">
                              <li>• Scalability requirements for high-traffic scenarios</li>
                              <li>• Complex user interface with multiple interactive elements</li>
                              <li>• Integration with third-party APIs and legacy systems</li>
                              <li>• Performance optimization across different devices</li>
                              <li>• Security considerations for sensitive user data</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-card border border-border rounded-lg p-6">
                          <h4 className="font-semibold text-primary mb-3">Technical Constraints</h4>
                          <ul className="space-y-2 text-sm text-text-secondary">
                            <li>• Legacy system compatibility</li>
                            <li>• Performance requirements</li>
                            <li>• Security compliance</li>
                            <li>• Mobile responsiveness</li>
                          </ul>
                        </div>

                        <div className="bg-card border border-border rounded-lg p-6">
                          <h4 className="font-semibold text-primary mb-3">Business Requirements</h4>
                          <ul className="space-y-2 text-sm text-text-secondary">
                            <li>• Tight project timeline</li>
                            <li>• Budget constraints</li>
                            <li>• User experience goals</li>
                            <li>• Market competition</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'solution' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-4">Our Solution</h3>
                        <p className="text-text-secondary leading-relaxed mb-6">
                          {project?.solution}
                        </p>
                      </div>

                      <div className="bg-success/5 border border-success/20 rounded-lg p-6">
                        <div className="flex items-start space-x-3">
                          <Icon name="Lightbulb" size={20} className="text-success mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-success mb-2">Innovative Approach</h4>
                            <p className="text-text-secondary">
                              We implemented a cutting-edge solution that not only addressed all the technical challenges 
                              but also exceeded the client's expectations in terms of performance and user experience.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-primary">Implementation Steps</h4>
                        <div className="space-y-4">
                          {[
                            { step: 1, title: 'Architecture Design', desc: 'Designed scalable system architecture' },
                            { step: 2, title: 'Core Development', desc: 'Built core functionality with best practices' },
                            { step: 3, title: 'Integration', desc: 'Integrated with external services and APIs' },
                            { step: 4, title: 'Testing & QA', desc: 'Comprehensive testing and quality assurance' },
                            { step: 5, title: 'Deployment', desc: 'Smooth deployment and monitoring setup' }
                          ]?.map((item, index) => (
                            <div key={index} className="flex items-start space-x-4">
                              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                                {item?.step}
                              </div>
                              <div>
                                <h5 className="font-medium text-primary">{item?.title}</h5>
                                <p className="text-sm text-text-secondary">{item?.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'results' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-4">Measurable Results</h3>
                        <p className="text-text-secondary leading-relaxed mb-6">
                          The project delivered exceptional results that exceeded all initial expectations and KPIs.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        {project?.results?.map((result, index) => (
                          <div key={index} className="text-center p-6 bg-success/5 border border-success/20 rounded-lg">
                            <div className="w-12 h-12 mx-auto mb-4 bg-success text-success-foreground rounded-full flex items-center justify-center">
                              <Icon name="TrendingUp" size={20} />
                            </div>
                            <div className="text-lg font-semibold text-success mb-2">
                              {result?.split(' ')?.[0]}
                            </div>
                            <div className="text-sm text-text-secondary">
                              {result?.split(' ')?.slice(1)?.join(' ')}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-card border border-border rounded-lg p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon name="MessageCircle" size={20} className="text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Client Testimonial</h4>
                            <blockquote className="text-text-secondary italic mb-4">
                              "{project?.testimonial}"
                            </blockquote>
                            <div className="flex items-center space-x-2">
                              <Image
                                src={project?.clientLogo}
                                alt="Client logo"
                                className="w-8 h-8 rounded"
                              />
                              <span className="text-sm font-medium text-primary">{project?.client}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'technical' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-4">Technical Deep Dive</h3>
                        <p className="text-text-secondary leading-relaxed mb-6">
                          A comprehensive look at the technical implementation and architecture decisions.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-primary">Frontend Technologies</h4>
                          <div className="space-y-2">
                            {project?.technologies?.slice(0, 2)?.map((tech, index) => (
                              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                <span className="font-medium text-text-primary">{tech}</span>
                                <div className="flex items-center space-x-2">
                                  <div className="w-24 bg-border rounded-full h-2">
                                    <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                                  </div>
                                  <span className="text-sm text-text-secondary">90%</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-primary">Backend Technologies</h4>
                          <div className="space-y-2">
                            {project?.technologies?.slice(2, 4)?.map((tech, index) => (
                              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                <span className="font-medium text-text-primary">{tech}</span>
                                <div className="flex items-center space-x-2">
                                  <div className="w-24 bg-border rounded-full h-2">
                                    <div className="bg-accent h-2 rounded-full" style={{ width: '85%' }}></div>
                                  </div>
                                  <span className="text-sm text-text-secondary">85%</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-gray-300 text-sm font-medium">Key Implementation Code</div>
                          <button className="text-gray-400 hover:text-gray-200 transition-colors">
                            <Icon name="Copy" size={16} />
                          </button>
                        </div>
                        <pre className="text-gray-300 text-sm font-mono">
                          <code>{`// Optimized React component with performance hooks
const ProjectComponent = memo(({ data }) => {
  const memoizedData = useMemo(() => 
    processData(data), [data]
  );
  
  return (
    <div className="project-container">
      {memoizedData.map(item => (
        <ProjectItem key={item.id} {...item} />
      ))}
    </div>
  );
});`}</code>
                        </pre>
                      </div>

                      <div className="flex space-x-4">
                        <a
                          href={project?.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-brand"
                        >
                          <Icon name="Github" size={16} />
                          <span>View Source Code</span>
                        </a>
                        <a
                          href={project?.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-brand"
                        >
                          <Icon name="ExternalLink" size={16} />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;