import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Loading Header */}
        <div className="flex items-center justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-full h-full border-4 border-muted border-t-primary rounded-full"
              ></motion.div>
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Loading Projects</h3>
            <p className="text-text-secondary">Fetching the latest case studies...</p>
          </motion.div>
        </div>

        {/* Loading Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array?.from({ length: 6 })?.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-brand-sm"
            >
              {/* Image Skeleton */}
              <div className="h-48 bg-muted animate-pulse"></div>
              
              {/* Content Skeleton */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <div className="h-6 bg-muted animate-pulse rounded"></div>
                
                {/* Client */}
                <div className="h-4 bg-muted animate-pulse rounded w-1/2"></div>
                
                {/* Description */}
                <div className="space-y-2">
                  <div className="h-4 bg-muted animate-pulse rounded"></div>
                  <div className="h-4 bg-muted animate-pulse rounded w-3/4"></div>
                  <div className="h-4 bg-muted animate-pulse rounded w-1/2"></div>
                </div>
                
                {/* Technologies */}
                <div className="flex space-x-2">
                  <div className="h-6 w-16 bg-muted animate-pulse rounded"></div>
                  <div className="h-6 w-20 bg-muted animate-pulse rounded"></div>
                  <div className="h-6 w-12 bg-muted animate-pulse rounded"></div>
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-12 bg-muted animate-pulse rounded"></div>
                  <div className="h-12 bg-muted animate-pulse rounded"></div>
                  <div className="h-12 bg-muted animate-pulse rounded"></div>
                </div>
                
                {/* Button */}
                <div className="h-12 bg-muted animate-pulse rounded"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Loading Progress */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="mt-12 mx-auto max-w-md"
        >
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoadingSpinner;