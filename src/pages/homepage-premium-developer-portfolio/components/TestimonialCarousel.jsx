import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: `Working with this developer was transformative for our platform. They delivered a React-based dashboard that improved our user engagement by 340% and reduced load times by 60%. The attention to performance optimization and user experience was exceptional.`,
      rating: 5,
      project: "Enterprise Dashboard Redesign",
      outcome: "340% increase in user engagement",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=40&fit=crop"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Founder & CEO",
      company: "StartupLab Inc",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: `The full-stack solution delivered exceeded all expectations. From concept to deployment, every detail was meticulously crafted. The scalable architecture they built handles 10x our initial traffic projections without any performance issues.`,
      rating: 5,
      project: "MVP Development & Scaling",
      outcome: "Handles 10x projected traffic",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&h=40&fit=crop"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Product Manager",
      company: "Digital Innovations",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: `Incredible problem-solving skills and technical expertise. They transformed our legacy system into a modern, responsive application using React and Node.js. The migration was seamless, and our team productivity increased by 200%.`,
      rating: 5,
      project: "Legacy System Modernization",
      outcome: "200% productivity increase",
      logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=120&h=40&fit=crop"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Technical Director",
      company: "CloudScale Systems",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: `Outstanding work on our e-commerce platform. The custom React components and optimized backend reduced our bounce rate by 45% and increased conversions by 180%. Their code quality and documentation standards are exemplary.`,
      rating: 5,
      project: "E-commerce Platform Optimization",
      outcome: "180% conversion increase",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=40&fit=crop"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials?.[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Trusted by startups and enterprises to deliver exceptional digital solutions
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="bg-background rounded-2xl shadow-brand-lg border border-border overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="p-8 lg:p-12"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Content */}
                  <div className="lg:col-span-2">
                    {/* Company Logo */}
                    <div className="mb-6">
                      <div className="w-32 h-10 bg-muted rounded-lg overflow-hidden">
                        <Image
                          src={currentTestimonial?.logo}
                          alt={`${currentTestimonial?.company} logo`}
                          className="w-full h-full object-cover opacity-60"
                        />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                        <Icon key={i} name="Star" size={20} className="text-warning fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-lg lg:text-xl text-text-primary mb-6 leading-relaxed">
                      "{currentTestimonial?.content}"
                    </blockquote>

                    {/* Project Details */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="text-sm text-text-secondary mb-1">Project</div>
                        <div className="font-semibold text-text-primary">{currentTestimonial?.project}</div>
                      </div>
                      <div className="bg-success/10 rounded-lg p-4">
                        <div className="text-sm text-success mb-1">Key Outcome</div>
                        <div className="font-semibold text-success">{currentTestimonial?.outcome}</div>
                      </div>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={currentTestimonial?.avatar}
                          alt={currentTestimonial?.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-text-primary">{currentTestimonial?.name}</div>
                        <div className="text-sm text-text-secondary">
                          {currentTestimonial?.role} at {currentTestimonial?.company}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="hidden lg:block">
                    <div className="relative">
                      <div className="w-full aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                        <Icon name="Quote" size={80} className="text-primary/20" />
                      </div>
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-brand-md">
                        <Icon name="TrendingUp" size={24} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots Indicator */}
            <div className="flex items-center space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-8' :'bg-border hover:bg-primary/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-background border border-border hover:border-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <Icon name="ChevronLeft" size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-background border border-border hover:border-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
          </div>

          {/* Auto-play Indicator */}
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center space-x-2 text-sm text-text-muted">
              <Icon name={isAutoPlaying ? "Play" : "Pause"} size={16} />
              <span>{isAutoPlaying ? "Auto-playing" : "Paused"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;