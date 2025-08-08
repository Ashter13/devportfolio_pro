import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ResourceCard from './components/ResourceCard';
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';
import StatsOverview from './components/StatsOverview';
import NewsletterSection from './components/NewsletterSection';
import FeaturedResource from './components/FeaturedResource';

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Mock data for resources
  const resources = [
    {
      id: 1,
      title: "Traditional Resume - PDF Format",
      description: "Clean, professional resume optimized for ATS systems and formal job applications. Includes comprehensive work history, technical skills, and achievements.",
      fileSize: "2.3 MB",
      downloadCount: 1247,
      lastUpdated: "Dec 2024",
      category: "Resume",
      iconName: "FileText",
      isPremium: false,
      tags: ["ATS-Optimized", "Professional", "PDF"]
    },
    {
      id: 2,
      title: "Creative Visual Resume",
      description: "Design-focused resume with visual elements, infographics, and modern layout. Perfect for creative roles and design-conscious clients.",
      fileSize: "4.1 MB",
      downloadCount: 892,
      lastUpdated: "Dec 2024",
      category: "Resume",
      iconName: "Palette",
      isPremium: true,
      tags: ["Creative", "Visual", "Design"]
    },
    {
      id: 3,
      title: "Technical Deep-Dive Resume",
      description: "Comprehensive technical resume highlighting specific programming languages, frameworks, and project architectures with detailed skill breakdowns.",
      fileSize: "3.7 MB",
      downloadCount: 1156,
      lastUpdated: "Dec 2024",
      category: "Resume",
      iconName: "Code",
      isPremium: false,
      tags: ["Technical", "Detailed", "Programming"]
    },
    {
      id: 4,
      title: "E-Commerce Platform Case Study",
      description: "Complete breakdown of a full-stack e-commerce solution including architecture decisions, performance optimizations, and client testimonials.",
      fileSize: "8.2 MB",
      downloadCount: 743,
      lastUpdated: "Nov 2024",
      category: "Case Study",
      iconName: "ShoppingCart",
      isPremium: true,
      tags: ["Full-Stack", "E-Commerce", "React", "Node.js"]
    },
    {
      id: 5,
      title: "SaaS Dashboard Case Study",
      description: "Detailed analysis of a complex dashboard application with real-time data visualization, user management, and scalable architecture.",
      fileSize: "6.8 MB",
      downloadCount: 634,
      lastUpdated: "Nov 2024",
      category: "Case Study",
      iconName: "BarChart3",
      isPremium: false,
      tags: ["SaaS", "Dashboard", "Real-time", "Analytics"]
    },
    {
      id: 6,
      title: "Mobile App Development Guide",
      description: "Comprehensive guide covering React Native development best practices, performance optimization, and cross-platform considerations.",
      fileSize: "12.4 MB",
      downloadCount: 1089,
      lastUpdated: "Oct 2024",
      category: "Documentation",
      iconName: "Smartphone",
      isPremium: true,
      tags: ["React Native", "Mobile", "Cross-platform"]
    },
    {
      id: 7,
      title: "API Architecture Best Practices",
      description: "White paper on RESTful API design, GraphQL implementation, authentication strategies, and scalable backend architecture patterns.",
      fileSize: "5.6 MB",
      downloadCount: 967,
      lastUpdated: "Oct 2024",
      category: "Documentation",
      iconName: "Server",
      isPremium: false,
      tags: ["API", "Backend", "Architecture", "GraphQL"]
    },
    {
      id: 8,
      title: "Project Proposal Template",
      description: "Professional project proposal template with sections for scope definition, timeline planning, cost estimation, and risk assessment.",
      fileSize: "1.8 MB",
      downloadCount: 1523,
      lastUpdated: "Sep 2024",
      category: "Template",
      iconName: "FileCheck",
      isPremium: false,
      tags: ["Proposal", "Project Management", "Business"]
    },
    {
      id: 9,
      title: "Technical Requirements Document",
      description: "Comprehensive template for documenting technical requirements, system specifications, and implementation guidelines for development projects.",
      fileSize: "2.1 MB",
      downloadCount: 856,
      lastUpdated: "Sep 2024",
      category: "Template",
      iconName: "FileCode",
      isPremium: false,
      tags: ["Requirements", "Documentation", "Technical"]
    },
    {
      id: 10,
      title: "Speaking Kit - Conference Materials",
      description: "Complete speaker package including professional photos, bio variations, presentation topics, and technical talk abstracts for conferences.",
      fileSize: "15.3 MB",
      downloadCount: 234,
      lastUpdated: "Aug 2024",
      category: "Speaking",
      iconName: "Mic",
      isPremium: true,
      tags: ["Speaking", "Conference", "Professional Photos"]
    }
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Resources', icon: 'Grid3X3', count: resources?.length },
    { id: 'Resume', name: 'Resumes', icon: 'FileText', count: resources?.filter(r => r?.category === 'Resume')?.length },
    { id: 'Case Study', name: 'Case Studies', icon: 'FolderOpen', count: resources?.filter(r => r?.category === 'Case Study')?.length },
    { id: 'Documentation', name: 'Documentation', icon: 'Book', count: resources?.filter(r => r?.category === 'Documentation')?.length },
    { id: 'Template', name: 'Templates', icon: 'Layout', count: resources?.filter(r => r?.category === 'Template')?.length },
    { id: 'Speaking', name: 'Speaking Kit', icon: 'Mic', count: resources?.filter(r => r?.category === 'Speaking')?.length }
  ];

  // Stats data
  const stats = [
    { icon: 'Download', value: '12.5K+', label: 'Total Downloads' },
    { icon: 'FileText', value: '25+', label: 'Resources Available' },
    { icon: 'Users', value: '3.2K+', label: 'Active Users' },
    { icon: 'Star', value: '4.9', label: 'Average Rating' }
  ];

  // Featured resource
  const featuredResource = {
    title: "Complete Full-Stack Developer Portfolio Guide",
    description: "A comprehensive 50-page guide covering everything from project selection and case study writing to technical documentation and client communication. Includes templates, examples, and actionable strategies.",
    downloadCount: 2847,
    rating: 4.9,
    pages: 50,
    onDownload: () => handleDownload('featured-guide'),
    onPreview: () => handlePreview('featured-guide')
  };

  // Filter resources based on search and category
  const filteredResources = useMemo(() => {
    return resources?.filter(resource => {
      const matchesSearch = resource?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                           resource?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                           resource?.tags?.some(tag => tag?.toLowerCase()?.includes(searchTerm?.toLowerCase()));
      
      const matchesCategory = activeCategory === 'all' || resource?.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory, resources]);

  const handleDownload = (resourceId) => {
    // Mock download functionality
    console.log(`Downloading resource: ${resourceId}`);
    // In a real app, this would trigger the actual download
  };

  const handlePreview = (resourceId) => {
    // Mock preview functionality
    console.log(`Previewing resource: ${resourceId}`);
    // In a real app, this would open a preview modal or new tab
  };

  return (
    <>
      <Helmet>
        <title>Resources - Professional Download Center | DevPortfolio Pro</title>
        <meta name="description" content="Access professional development resources including resumes, case studies, technical documentation, and templates. Download materials for career advancement and project success." />
        <meta name="keywords" content="developer resources, resume templates, case studies, technical documentation, project templates, professional materials" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                    <Icon name="Download" size={28} color="white" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                  Professional Download Center
                </h1>
                <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                  Access comprehensive resources designed to accelerate your development career. 
                  From polished resumes to detailed case studies and technical documentation.
                </p>
              </div>

              <StatsOverview stats={stats} />
            </div>
          </section>

          {/* Featured Resource */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <FeaturedResource resource={featuredResource} />
            </div>
          </section>

          {/* Resources Section */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-text-primary mb-2">
                  Browse Resources
                </h2>
                <p className="text-text-secondary">
                  Find the perfect materials for your professional needs
                </p>
              </div>

              <SearchBar 
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                placeholder="Search resources by title, description, or tags..."
              />

              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />

              {/* Results Count */}
              <div className="mb-6">
                <p className="text-text-secondary">
                  Showing {filteredResources?.length} of {resources?.length} resources
                  {searchTerm && ` for "${searchTerm}"`}
                  {activeCategory !== 'all' && ` in ${categories?.find(c => c?.id === activeCategory)?.name}`}
                </p>
              </div>

              {/* Resources Grid */}
              {filteredResources?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {filteredResources?.map((resource) => (
                    <ResourceCard
                      key={resource?.id}
                      {...resource}
                      onDownload={() => handleDownload(resource?.id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Search" size={32} className="text-text-muted" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    No resources found
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Try adjusting your search terms or category filter
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setActiveCategory('all');
                    }}
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-16 bg-muted/50">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <NewsletterSection />
            </div>
          </section>

          {/* Additional Resources Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-text-primary mb-4">
                  Additional Professional Materials
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Explore more resources to enhance your professional presence and development workflow
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-card rounded-lg border p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Camera" size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    Professional Photos
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    High-resolution professional headshots and workspace photos for conferences and profiles
                  </p>
                  <span className="text-xs text-text-muted">Coming Soon</span>
                </div>

                <div className="bg-card rounded-lg border p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Video" size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    Video Testimonials
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    Client testimonial videos and project walkthrough recordings
                  </p>
                  <span className="text-xs text-text-muted">Coming Soon</span>
                </div>

                <div className="bg-card rounded-lg border p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Presentation" size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    Presentation Decks
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    Technical presentation templates and speaking engagement materials
                  </p>
                  <span className="text-xs text-text-muted">Coming Soon</span>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Download" size={18} color="white" />
                </div>
                <span className="text-xl font-bold">Resource Center</span>
              </div>
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                Empowering developers with professional resources and comprehensive materials 
                for career advancement and project success.
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-primary-foreground/60">
                <span>© {new Date()?.getFullYear()} DevPortfolio Pro</span>
                <span>•</span>
                <span>All resources are professionally crafted</span>
                <span>•</span>
                <span>Updated regularly</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ResourcesPage;