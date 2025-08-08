import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage-premium-developer-portfolio', icon: 'Home' },
    { name: 'About', path: '/about-professional-story-philosophy', icon: 'User' },
    { name: 'Projects', path: '/projects-immersive-case-study-gallery', icon: 'FolderOpen' },
    { name: 'Skills', path: '/skills-technical-mastery-visualization', icon: 'Code' },
    { name: 'Resources', path: '/resources-professional-download-center', icon: 'Download' }
  ];

  const secondaryItems = [
    { name: 'Contact', action: 'contact', icon: 'Mail' },
    { name: 'Resume', action: 'resume', icon: 'FileText' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAction = (action) => {
    if (action === 'contact') {
      // Scroll to contact section or open contact modal
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (action === 'resume') {
      // Download resume or open in new tab
      window.open('/assets/resume.pdf', '_blank');
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-brand-md border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage-premium-developer-portfolio" 
            className="flex items-center space-x-2 group transition-brand"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:bg-primary/90 transition-brand">
                <Icon name="Code2" size={18} color="white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-80 group-hover:opacity-100 transition-brand"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary group-hover:text-primary/90 transition-brand">
                DevPortfolio
              </span>
              <span className="text-xs text-text-secondary -mt-1 group-hover:text-accent transition-brand">
                Pro
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-brand ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-brand-sm'
                    : 'text-text-secondary hover:text-primary hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              iconName="Mail"
              iconPosition="left"
              onClick={() => handleAction('contact')}
              className="text-text-secondary hover:text-primary"
            >
              Contact
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="Download"
              iconPosition="left"
              onClick={() => handleAction('resume')}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={20} />
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-brand ${
            isMenuOpen 
              ? 'max-h-screen opacity-100' :'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="bg-background/95 backdrop-blur-md border-t border-border">
            <nav className="px-6 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-brand ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-brand-sm'
                      : 'text-text-secondary hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 mt-4 border-t border-border space-y-2">
                {secondaryItems?.map((item) => (
                  <button
                    key={item?.action}
                    onClick={() => handleAction(item?.action)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-text-secondary hover:text-primary hover:bg-muted transition-brand w-full text-left"
                  >
                    <Icon name={item?.icon} size={18} />
                    <span>{item?.name}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;