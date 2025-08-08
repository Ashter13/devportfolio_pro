import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const QuickNavigation = ({ isUnlocked }) => {
  const navigationItems = [
    {
      title: "Featured Projects",
      description: "Explore my latest work and case studies",
      url: "/projects-immersive-case-study-gallery",
      icon: "FolderOpen",
      color: "bg-blue-500",
      stats: "12 Projects"
    },
    {
      title: "Technical Skills",
      description: "Interactive visualization of my expertise",
      url: "/skills-technical-mastery-visualization",
      icon: "Code",
      color: "bg-green-500",
      stats: "25+ Technologies"
    },
    {
      title: "Professional Story",
      description: "Learn about my journey and philosophy",
      url: "/about-professional-story-philosophy",
      icon: "User",
      color: "bg-purple-500",
      stats: "5+ Years"
    },
    {
      title: "Download Resources",
      description: "Resume, portfolio PDFs, and documentation",
      url: "/resources-professional-download-center",
      icon: "Download",
      color: "bg-orange-500",
      stats: "Multiple Formats"
    }
  ];

  const recentPosts = [
    {
      title: "Building Scalable React Apps",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      url: "/blog/scalable-react-apps"
    },
    {
      title: "Modern CSS Grid Techniques",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      url: "/blog/css-grid-techniques"
    },
    {
      title: "Node.js Performance Tips",
      date: "Dec 5, 2024",
      readTime: "10 min read",
      url: "/blog/nodejs-performance"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Main Navigation */}
      <div className={`transition-all duration-500 ${
        isUnlocked ? 'opacity-100 transform translate-y-0' : 'opacity-50 transform translate-y-4'
      }`}>
        <div className="flex items-center space-x-2 mb-4">
          <Icon name="Navigation" size={20} className="text-accent" />
          <h3 className="text-lg font-semibold text-text-primary">
            Popular Destinations
          </h3>
          {!isUnlocked && (
            <div className="flex items-center space-x-1 text-yellow-600">
              <Icon name="Lock" size={14} />
              <span className="text-xs">Complete the challenge to unlock</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {navigationItems?.map((item, index) => (
            <Link
              key={index}
              to={item?.url}
              className={`group block p-4 rounded-lg border border-border hover:border-accent transition-brand ${
                isUnlocked 
                  ? 'hover:shadow-brand-md cursor-pointer' 
                  : 'cursor-not-allowed opacity-60'
              }`}
              onClick={(e) => !isUnlocked && e?.preventDefault()}
            >
              <div className="flex items-start space-x-3">
                <div className={`flex-shrink-0 w-10 h-10 ${item?.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon name={item?.icon} size={20} color="white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-text-primary group-hover:text-primary transition-brand">
                    {item?.title}
                  </h4>
                  <p className="text-sm text-text-secondary mt-1">
                    {item?.description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-accent font-medium">
                      {item?.stats}
                    </span>
                    <Icon 
                      name="ArrowRight" 
                      size={14} 
                      className="text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" 
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Recent Blog Posts */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <div className="flex items-center space-x-2 mb-4">
          <Icon name="BookOpen" size={20} className="text-accent" />
          <h3 className="text-lg font-semibold text-text-primary">
            Recent Blog Posts
          </h3>
        </div>

        <div className="space-y-3">
          {recentPosts?.map((post, index) => (
            <Link
              key={index}
              to={post?.url}
              className="block p-3 rounded-lg hover:bg-muted transition-brand group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-text-primary group-hover:text-primary transition-brand">
                    {post?.title}
                  </h4>
                  <div className="flex items-center space-x-3 mt-1 text-sm text-text-secondary">
                    <span>{post?.date}</span>
                    <span>•</span>
                    <span>{post?.readTime}</span>
                  </div>
                </div>
                <Icon 
                  name="ExternalLink" 
                  size={14} 
                  className="text-text-muted group-hover:text-accent transition-brand flex-shrink-0 mt-1" 
                />
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-accent hover:text-primary transition-brand mt-4 text-sm font-medium"
        >
          <span>View all posts</span>
          <Icon name="ArrowRight" size={14} />
        </Link>
      </div>
      {/* Quick Contact */}
      <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-6 text-white">
        <div className="flex items-center space-x-2 mb-3">
          <Icon name="MessageCircle" size={20} />
          <h3 className="text-lg font-semibold">
            Need Help Finding Something?
          </h3>
        </div>
        <p className="text-white/90 mb-4 text-sm">
          Can't find what you're looking for? I'm here to help you navigate to the right place.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center space-x-2 bg-white text-primary px-4 py-2 rounded-lg hover:bg-gray-100 transition-brand text-sm font-medium"
          >
            <Icon name="Mail" size={16} />
            <span>Contact Me</span>
          </Link>
          <button
            onClick={() => window.history?.back()}
            className="inline-flex items-center justify-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-brand text-sm font-medium"
          >
            <Icon name="ArrowLeft" size={16} />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickNavigation;