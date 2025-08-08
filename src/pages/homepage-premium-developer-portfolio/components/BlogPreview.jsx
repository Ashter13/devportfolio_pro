import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const BlogPreview = () => {
  const [hoveredPost, setHoveredPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications: Architecture Patterns That Work",
      excerpt: "Explore proven architectural patterns for large-scale React applications, including component composition, state management strategies, and performance optimization techniques that have been battle-tested in production environments.",
      category: "React Development",
      readTime: "8 min read",
      publishDate: "2025-01-05",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      tags: ["React", "Architecture", "Performance", "Best Practices"],
      views: "2.4K",
      likes: 156,
      featured: true
    },
    {
      id: 2,
      title: "The Complete Guide to TypeScript in 2025: Advanced Patterns and Techniques",
      excerpt: "Master advanced TypeScript patterns including conditional types, mapped types, and template literal types. Learn how to leverage TypeScript's type system to build more robust and maintainable applications.",
      category: "TypeScript",
      readTime: "12 min read",
      publishDate: "2025-01-02",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
      tags: ["TypeScript", "Advanced", "Types", "Development"],
      views: "1.8K",
      likes: 124,
      featured: false
    },
    {
      id: 3,
      title: "Optimizing Web Performance: From 3s to 300ms Load Times",
      excerpt: "A comprehensive case study on how we reduced page load times by 90% using modern optimization techniques including code splitting, lazy loading, image optimization, and strategic caching.",
      category: "Performance",
      readTime: "10 min read",
      publishDate: "2024-12-28",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      tags: ["Performance", "Optimization", "Web Vitals", "Case Study"],
      views: "3.1K",
      likes: 203,
      featured: true
    },
    {
      id: 4,
      title: "Modern CSS Techniques: Grid, Flexbox, and Container Queries in Practice",
      excerpt: "Discover how to create responsive, maintainable layouts using modern CSS features. Includes practical examples and real-world use cases for CSS Grid, Flexbox, and the new Container Queries API.",
      category: "CSS & Design",
      readTime: "6 min read",
      publishDate: "2024-12-25",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      tags: ["CSS", "Layout", "Responsive", "Modern Web"],
      views: "1.5K",
      likes: 89,
      featured: false
    }
  ];

  const categories = [
    { name: "All", count: blogPosts?.length, active: true },
    { name: "React Development", count: 12, active: false },
    { name: "TypeScript", count: 8, active: false },
    { name: "Performance", count: 6, active: false },
    { name: "CSS & Design", count: 10, active: false }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Latest Insights & Tutorials
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Sharing knowledge, best practices, and technical insights from real-world development experience
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories?.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category?.active
                    ? 'bg-primary text-primary-foreground shadow-brand-sm'
                    : 'bg-background text-text-secondary hover:bg-muted hover:text-primary border border-border'
                }`}
              >
                {category?.name} ({category?.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-12"
        >
          {blogPosts?.filter(post => post?.featured)?.map((post) => (
            <motion.article
              key={post?.id}
              variants={itemVariants}
              className="group relative"
              onMouseEnter={() => setHoveredPost(post?.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <div className="bg-background rounded-2xl overflow-hidden shadow-brand-md hover:shadow-brand-xl transition-all duration-500 border border-border">
                {/* Post Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post?.image}
                    alt={post?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Icon name="Star" size={14} />
                      <span>Featured</span>
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-background/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {post?.category}
                    </span>
                  </div>

                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent transition-opacity duration-300 ${
                    hoveredPost === post?.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button
                        variant="secondary"
                        size="sm"
                        iconName="ArrowRight"
                        iconPosition="right"
                        className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                      >
                        Read Article
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-text-muted mb-3">
                    <span>{formatDate(post?.publishDate)}</span>
                    <span>•</span>
                    <span>{post?.readTime}</span>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={14} />
                      <span>{post?.views}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post?.title}
                  </h3>

                  <p className="text-text-secondary mb-4 leading-relaxed line-clamp-3">
                    {post?.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post?.tags?.slice(0, 3)?.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-muted text-text-primary px-2 py-1 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {post?.tags?.length > 3 && (
                      <span className="text-xs text-text-muted">+{post?.tags?.length - 3} more</span>
                    )}
                  </div>

                  {/* Post Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-4 text-sm text-text-muted">
                      <div className="flex items-center space-x-1">
                        <Icon name="Heart" size={14} />
                        <span>{post?.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="MessageCircle" size={14} />
                        <span>12</span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="ArrowRight"
                      iconPosition="right"
                      className="text-accent hover:text-accent/80"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Regular Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {blogPosts?.filter(post => !post?.featured)?.map((post) => (
            <motion.article
              key={post?.id}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-background rounded-xl overflow-hidden shadow-brand-sm hover:shadow-brand-md transition-all duration-300 border border-border">
                <div className="flex">
                  {/* Post Image */}
                  <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
                    <Image
                      src={post?.image}
                      alt={post?.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Post Content */}
                  <div className="flex-1 p-4">
                    <div className="flex items-center space-x-2 text-xs text-text-muted mb-2">
                      <span>{post?.category}</span>
                      <span>•</span>
                      <span>{post?.readTime}</span>
                    </div>

                    <h3 className="font-bold text-text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {post?.title}
                    </h3>

                    <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                      {post?.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-text-muted">
                        {formatDate(post?.publishDate)}
                      </span>
                      <div className="flex items-center space-x-3 text-xs text-text-muted">
                        <div className="flex items-center space-x-1">
                          <Icon name="Eye" size={12} />
                          <span>{post?.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Heart" size={12} />
                          <span>{post?.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-center text-white"
        >
          <Icon name="Mail" size={48} className="mx-auto mb-4 opacity-80" />
          <h3 className="text-2xl font-bold mb-4">
            Stay Updated with Latest Insights
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get weekly updates on the latest web development trends, tutorials, and best practices. 
            Join 2,500+ developers who trust our content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-text-primary bg-white border-0 focus:ring-2 focus:ring-white/50 focus:outline-none"
            />
            <Button
              variant="secondary"
              iconName="Send"
              iconPosition="right"
              className="bg-white text-primary hover:bg-white/90"
            >
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-white/70 mt-4">
            No spam, unsubscribe at any time. Read our privacy policy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;