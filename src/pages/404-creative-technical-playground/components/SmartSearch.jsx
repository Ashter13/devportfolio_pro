import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SmartSearch = ({ attemptedUrl }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const contentDatabase = [
    {
      title: "Premium Developer Portfolio",
      description: "Showcase of technical excellence and creative problem-solving",
      url: "/homepage-premium-developer-portfolio",
      type: "page",
      keywords: ["home", "portfolio", "developer", "showcase", "projects"]
    },
    {
      title: "Professional Story & Philosophy",
      description: "Learn about my journey, values, and working philosophy",
      url: "/about-professional-story-philosophy",
      type: "page",
      keywords: ["about", "story", "philosophy", "journey", "experience", "bio"]
    },
    {
      title: "Immersive Project Gallery",
      description: "Detailed case studies with technical deep-dives and impact metrics",
      url: "/projects-immersive-case-study-gallery",
      type: "page",
      keywords: ["projects", "portfolio", "case studies", "work", "development"]
    },
    {
      title: "Technical Mastery Visualization",
      description: "Skills visualization with proficiency indicators and technology radar",
      url: "/skills-technical-mastery-visualization",
      type: "page",
      keywords: ["skills", "technical", "expertise", "technologies", "programming"]
    },
    {
      title: "Professional Download Center",
      description: "Resume variants, case study PDFs, and technical documentation",
      url: "/resources-professional-download-center",
      type: "page",
      keywords: ["resources", "download", "resume", "cv", "documents", "pdf"]
    },
    // Mock blog posts
    {
      title: "Building Scalable React Applications",
      description: "Best practices for architecting large-scale React applications",
      url: "/blog/scalable-react-applications",
      type: "blog",
      keywords: ["react", "scalable", "architecture", "best practices", "development"]
    },
    {
      title: "Modern CSS Techniques for Developers",
      description: "Advanced CSS features and techniques for modern web development",
      url: "/blog/modern-css-techniques",
      type: "blog",
      keywords: ["css", "modern", "techniques", "styling", "web development"]
    },
    {
      title: "Full-Stack Development with Node.js",
      description: "Complete guide to building full-stack applications with Node.js",
      url: "/blog/fullstack-nodejs",
      type: "blog",
      keywords: ["nodejs", "fullstack", "backend", "javascript", "development"]
    }
  ];

  useEffect(() => {
    if (attemptedUrl) {
      // Analyze the attempted URL to suggest relevant content
      const urlParts = attemptedUrl?.toLowerCase()?.split('/')?.filter(Boolean);
      const relevantContent = contentDatabase?.filter(item => 
        urlParts?.some(part => 
          item?.keywords?.some(keyword => keyword?.includes(part) || part?.includes(keyword))
        )
      );
      
      if (relevantContent?.length > 0) {
        setSuggestions(relevantContent?.slice(0, 3));
      } else {
        setSuggestions(contentDatabase?.slice(0, 3));
      }
    }
  }, [attemptedUrl]);

  useEffect(() => {
    if (searchQuery?.length > 0) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        const filtered = contentDatabase?.filter(item =>
          item?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
          item?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
          item?.keywords?.some(keyword => 
            keyword?.toLowerCase()?.includes(searchQuery?.toLowerCase())
          )
        );
        setSuggestions(filtered?.slice(0, 5));
        setIsSearching(false);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setSuggestions(contentDatabase?.slice(0, 3));
    }
  }, [searchQuery]);

  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      <div className="flex items-center space-x-2 mb-4">
        <Icon name="Search" size={20} className="text-accent" />
        <h3 className="text-lg font-semibold text-text-primary">
          Find What You're Looking For
        </h3>
      </div>
      <div className="mb-4">
        <Input
          type="search"
          placeholder="Search for pages, projects, or topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e?.target?.value)}
          className="w-full"
        />
      </div>
      {isSearching ? (
        <div className="flex items-center justify-center py-8">
          <div className="flex items-center space-x-2 text-text-secondary">
            <div className="animate-spin">
              <Icon name="Loader2" size={16} />
            </div>
            <span className="text-sm">Searching...</span>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {suggestions?.length > 0 ? (
            <>
              {searchQuery?.length > 0 && (
                <p className="text-sm text-text-secondary mb-3">
                  Found {suggestions?.length} result{suggestions?.length !== 1 ? 's' : ''}
                </p>
              )}
              {suggestions?.map((item, index) => (
                <Link
                  key={index}
                  to={item?.url}
                  className="block p-3 rounded-lg border border-border hover:border-accent hover:bg-muted transition-brand group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <Icon 
                        name={item?.type === 'blog' ? 'FileText' : 'ExternalLink'} 
                        size={16} 
                        className="text-accent group-hover:text-primary transition-brand" 
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-text-primary group-hover:text-primary transition-brand">
                        {item?.title}
                      </h4>
                      <p className="text-sm text-text-secondary mt-1 line-clamp-2">
                        {item?.description}
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          item?.type === 'blog' ?'bg-blue-100 text-blue-800' :'bg-green-100 text-green-800'
                        }`}>
                          {item?.type === 'blog' ? 'Blog Post' : 'Page'}
                        </span>
                        <span className="text-xs text-text-muted">
                          {item?.url}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </>
          ) : (
            <div className="text-center py-8">
              <Icon name="Search" size={32} className="mx-auto text-text-muted mb-2" />
              <p className="text-text-secondary">
                No results found for "{searchQuery}"
              </p>
              <p className="text-sm text-text-muted mt-1">
                Try different keywords or browse the suggestions above
              </p>
            </div>
          )}
        </div>
      )}
      {attemptedUrl && suggestions?.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-sm text-text-secondary">
            <Icon name="Lightbulb" size={14} className="inline mr-1" />
            Based on your attempted URL: <code className="bg-muted px-1 py-0.5 rounded text-xs">{attemptedUrl}</code>
          </p>
        </div>
      )}
    </div>
  );
};

export default SmartSearch;