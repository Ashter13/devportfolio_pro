import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentAction, setCurrentAction] = useState(0);

  const actions = [
    {
      id: 1,
      icon: "MessageCircle",
      label: "Quick Chat",
      description: "Start a conversation",
      color: "bg-primary",
      action: () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      id: 2,
      icon: "Calendar",
      label: "Schedule Call",
      description: "Book a consultation",
      color: "bg-accent",
      action: () => {
        window.open('https://calendly.com/devportfolio', '_blank');
      }
    },
    {
      id: 3,
      icon: "Download",
      label: "Get Resume",
      description: "Download CV/Portfolio",
      color: "bg-success",
      action: () => {
        // In a real app, this would trigger a download
        window.open('/assets/resume.pdf', '_blank');
      }
    },
    {
      id: 4,
      icon: "Mail",
      label: "Send Email",
      description: "Direct email contact",
      color: "bg-secondary",
      action: () => {
        window.location.href = 'mailto:hello@devportfolio.com';
      }
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show CTA after scrolling past the hero section
      setIsVisible(scrollY > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Auto-rotate actions every 4 seconds when expanded
    if (isExpanded) {
      const interval = setInterval(() => {
        setCurrentAction((prev) => (prev + 1) % actions?.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isExpanded, actions?.length]);

  const handleMainAction = () => {
    if (isExpanded) {
      actions?.[currentAction]?.action();
    } else {
      setIsExpanded(true);
    }
  };

  const handleActionClick = (action) => {
    action?.action();
    setIsExpanded(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Expanded Actions Menu */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.3 }}
                className="mb-4 space-y-3"
              >
                {actions?.map((action, index) => (
                  <motion.div
                    key={action?.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-end"
                  >
                    {/* Action Label */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-background/95 backdrop-blur-sm border border-border rounded-lg px-4 py-2 mr-3 shadow-brand-md cursor-pointer"
                      onClick={() => handleActionClick(action)}
                    >
                      <div className="text-right">
                        <div className="text-sm font-semibold text-text-primary">
                          {action?.label}
                        </div>
                        <div className="text-xs text-text-secondary">
                          {action?.description}
                        </div>
                      </div>
                    </motion.div>

                    {/* Action Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleActionClick(action)}
                      className={`w-12 h-12 ${action?.color} rounded-full flex items-center justify-center text-white shadow-brand-lg hover:shadow-brand-xl transition-all`}
                    >
                      <Icon name={action?.icon} size={20} />
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.2 
            }}
            className="relative"
          >
            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
            
            {/* Main Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleMainAction}
              className={`relative w-16 h-16 ${actions?.[currentAction]?.color} rounded-full flex items-center justify-center text-white shadow-brand-xl hover:shadow-2xl transition-all group`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentAction}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon name={actions?.[currentAction]?.icon} size={24} />
                </motion.div>
              </AnimatePresence>

              {/* Close Icon Overlay */}
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-error rounded-full flex items-center justify-center"
                  onClick={(e) => {
                    e?.stopPropagation();
                    setIsExpanded(false);
                  }}
                >
                  <Icon name="X" size={20} />
                </motion.div>
              )}
            </motion.button>

            {/* Tooltip */}
            <AnimatePresence>
              {!isExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 whitespace-nowrap"
                >
                  <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-brand-md">
                    <div className="text-sm font-semibold text-text-primary">
                      {actions?.[currentAction]?.label}
                    </div>
                    <div className="text-xs text-text-secondary">
                      Click to expand options
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-border border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Progress Indicator */}
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1"
            >
              {actions?.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentAction ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </motion.div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;