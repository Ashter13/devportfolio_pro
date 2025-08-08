import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';

// Import components
import CodeDebugger from './components/CodeDebugger';
import InteractiveGame from './components/InteractiveGame';
import SmartSearch from './components/SmartSearch';
import QuickNavigation from './components/QuickNavigation';
import ReportIssue from './components/ReportIssue';
import EasterEggs from './components/EasterEggs';

const CreativeTechnicalPlayground = () => {
  const location = useLocation();
  const [bugFixed, setBugFixed] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [navigationUnlocked, setNavigationUnlocked] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const attemptedUrl = location.pathname;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.title = "404 - Creative Technical Playground | DevPortfolio Pro";
  }, []);

  const handleBugFixed = () => {
    setBugFixed(true);
    setTimeout(() => {
      setShowGame(true);
    }, 1000);
  };

  const handleGameComplete = (score) => {
    setGameCompleted(true);
    setNavigationUnlocked(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 py-12"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mb-6"
              >
                <Icon name="AlertTriangle" size={40} color="white" />
              </motion.div>
              
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold text-text-primary mb-4"
              >
                404
              </motion.h1>
              
              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-3xl font-semibold text-text-secondary mb-4"
              >
                Looks like this page took an unexpected route
              </motion.h2>
              
              <motion.p
                variants={itemVariants}
                className="text-lg text-text-muted max-w-2xl mx-auto"
              >
                Don't worry! Even the best developers encounter bugs. Let's debug this together and get you back on track.
              </motion.p>
            </div>

            {/* Status Info */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-4 bg-card rounded-lg px-6 py-3 border border-border"
            >
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="Clock" size={16} className="text-accent" />
                <span className="text-text-secondary">
                  {currentTime.toLocaleTimeString()}
                </span>
              </div>
              <div className="w-px h-4 bg-border"></div>
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="MapPin" size={16} className="text-accent" />
                <span className="text-text-secondary">
                  Error Location: {attemptedUrl}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Code Debugger */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  🐛 Interactive Code Debugger
                </h3>
                <p className="text-text-secondary">
                  Help me fix the bug in the page finder function!
                </p>
              </div>
              <CodeDebugger onBugFixed={handleBugFixed} />
            </div>
          </motion.div>

          {/* Interactive Game */}
          {showGame && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="max-w-4xl mx-auto">
                <InteractiveGame
                  isVisible={showGame}
                  onGameComplete={handleGameComplete}
                />
              </div>
            </motion.div>
          )}

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Smart Search */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <SmartSearch attemptedUrl={attemptedUrl} />
            </motion.div>

            {/* Report Issue */}
            <motion.div variants={itemVariants}>
              <ReportIssue attemptedUrl={attemptedUrl} />
            </motion.div>
          </div>

          {/* Quick Navigation */}
          <motion.div variants={itemVariants} className="mb-12">
            <QuickNavigation isUnlocked={navigationUnlocked} />
          </motion.div>

          {/* Easter Eggs */}
          <motion.div variants={itemVariants} className="mb-12">
            <EasterEggs />
          </motion.div>

          {/* Bottom Actions */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Still Lost?
              </h3>
              <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                No worries! Every great developer has been here. 
                Let's get you back to exploring the good stuff.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/homepage-premium-developer-portfolio">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Home"
                    iconPosition="left"
                    className="w-full sm:w-auto"
                  >
                    Take Me Home
                  </Button>
                </Link>
                
                <Button
                  variant="outline"
                  size="lg"
                  iconName="ArrowLeft"
                  iconPosition="left"
                  onClick={() => window.history?.back()}
                  className="w-full sm:w-auto"
                >
                  Go Back
                </Button>
                
                <Link to="/projects-immersive-case-study-gallery">
                  <Button
                    variant="ghost"
                    size="lg"
                    iconName="FolderOpen"
                    iconPosition="left"
                    className="w-full sm:w-auto"
                  >
                    View Projects
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Technical Implementation Note */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200">
              <div className="flex items-start space-x-3">
                <Icon name="Code2" size={20} className="text-primary mt-1" />
                <div>
                  <h4 className="font-medium text-text-primary mb-2">
                    About This 404 Page
                  </h4>
                  <p className="text-sm text-text-secondary mb-3">
                    This error page demonstrates advanced JavaScript skills, 
                    interactive animations, and user experience design. 
                    Built with React 18, Framer Motion, and Tailwind CSS.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React 18', 'Framer Motion', 'Interactive Games', 'Smart Search', 'Easter Eggs']?.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CreativeTechnicalPlayground;