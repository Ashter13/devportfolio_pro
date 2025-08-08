import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DownloadableResources = () => {
  const resources = [
    {
      title: "Developer DNA Infographic",
      description: "Visual summary of my technical approach, core competencies, and development philosophy",
      type: "Infographic",
      format: "PDF",
      size: "2.1 MB",
      icon: "FileImage",
      color: "accent",
      downloadUrl: "/assets/downloads/developer-dna-infographic.pdf",
      preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
      title: "Technical Resume",
      description: "Comprehensive resume highlighting technical skills, project experience, and achievements",
      type: "Resume",
      format: "PDF",
      size: "1.8 MB",
      icon: "FileText",
      color: "primary",
      downloadUrl: "/assets/downloads/technical-resume.pdf",
      preview: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop"
    },
    {
      title: "Project Case Studies",
      description: "Detailed breakdown of 5 major projects with challenges, solutions, and results",
      type: "Case Studies",
      format: "PDF",
      size: "4.2 MB",
      icon: "FolderOpen",
      color: "success",
      downloadUrl: "/assets/downloads/project-case-studies.pdf",
      preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      title: "Tech Stack Guide",
      description: "My preferred technologies, tools, and frameworks with usage recommendations",
      type: "Technical Guide",
      format: "PDF",
      size: "1.5 MB",
      icon: "Code",
      color: "warning",
      downloadUrl: "/assets/downloads/tech-stack-guide.pdf",
      preview: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop"
    }
  ];

  const downloadStats = [
    { label: "Total Downloads", value: "2,847", icon: "Download" },
    { label: "Avg. Rating", value: "4.9/5", icon: "Star" },
    { label: "Resources", value: "4", icon: "FileText" },
    { label: "Last Updated", value: "Jan 2025", icon: "Calendar" }
  ];

  const handleDownload = (resource) => {
    // In a real application, this would trigger the actual download
    // For now, we'll just show a success message
    alert(`Downloading ${resource?.title}...`);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Professional Resources
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Download comprehensive resources that showcase my expertise, approach, and professional background. Perfect for HR teams, potential clients, and collaboration partners.
          </p>
        </motion.div>

        {/* Download Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {downloadStats?.map((stat, index) => (
            <motion.div
              key={stat?.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center hover:shadow-brand-lg transition-brand"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={20} className="text-accent" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat?.value}</div>
              <div className="text-sm text-text-secondary">{stat?.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {resources?.map((resource, index) => (
            <motion.div
              key={resource?.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:shadow-brand-lg transition-brand group"
            >
              <div className="grid md:grid-cols-3 gap-6 items-center">
                {/* Preview */}
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <img 
                    src={resource?.preview} 
                    alt={`${resource?.title} preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-brand"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-${resource?.color}/10 rounded-lg flex items-center justify-center`}>
                        <Icon name={resource?.icon} size={20} className={`text-${resource?.color}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-brand">
                          {resource?.title}
                        </h3>
                        <p className="text-sm text-accent font-medium">{resource?.type}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {resource?.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-text-muted">
                      <span className="flex items-center space-x-1">
                        <Icon name="File" size={12} />
                        <span>{resource?.format}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="HardDrive" size={12} />
                        <span>{resource?.size}</span>
                      </span>
                    </div>

                    <Button
                      variant="default"
                      size="sm"
                      iconName="Download"
                      iconPosition="left"
                      onClick={() => handleDownload(resource)}
                      className="group-hover:shadow-brand-md"
                    >
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
            <Icon name="Mail" size={32} className="text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-4">
              Need Something Specific?
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Looking for additional information, custom case studies, or specific technical documentation? I'm happy to provide tailored resources for serious inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                iconName="Mail"
                iconPosition="left"
                onClick={() => window.location.href = 'mailto:contact@devportfolio.pro'}
              >
                Request Custom Resources
              </Button>
              <Button
                variant="outline"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => alert('Calendar booking would open here')}
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadableResources;