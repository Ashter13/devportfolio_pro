import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactMethods = [
    {
      id: 1,
      icon: "Mail",
      title: "Email",
      description: "Get in touch via email",
      value: "hello@devportfolio.com",
      action: "mailto:hello@devportfolio.com",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      icon: "Phone",
      title: "Phone",
      description: "Call for immediate assistance",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      id: 3,
      icon: "MessageCircle",
      title: "WhatsApp",
      description: "Quick chat on WhatsApp",
      value: "+1 (555) 123-4567",
      action: "https://wa.me/15551234567",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      id: 4,
      icon: "Calendar",
      title: "Schedule Call",
      description: "Book a consultation",
      value: "calendly.com/devportfolio",
      action: "https://calendly.com/devportfolio",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const projectTypes = [
    "Web Application Development",
    "Mobile App Development",
    "E-commerce Platform",
    "SaaS Product Development",
    "API Development",
    "Performance Optimization",
    "Technical Consulting",
    "Other"
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "Let\'s discuss"
  ];

  const timelines = [
    "ASAP (Rush project)",
    "1-2 weeks",
    "1-2 months",
    "3-6 months",
    "6+ months",
    "Flexible"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleContactMethod = (action) => {
    if (action?.startsWith('mailto:') || action?.startsWith('tel:')) {
      window.location.href = action;
    } else {
      window.open(action, '_blank');
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Ready to transform your ideas into exceptional digital experiences? 
            Let's discuss your project and explore how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Get in Touch
              </h3>
              <p className="text-text-secondary mb-6">
                Choose your preferred way to connect. I typically respond within 24 hours 
                and offer free initial consultations to discuss your project requirements.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactMethods?.map((method) => (
                <motion.div
                  key={method?.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-card rounded-xl p-4 border border-border hover:shadow-brand-md transition-all cursor-pointer"
                  onClick={() => handleContactMethod(method?.action)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${method?.bgColor} rounded-lg flex items-center justify-center`}>
                      <Icon name={method?.icon} size={20} className={method?.color} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-text-primary">{method?.title}</h4>
                      <p className="text-sm text-text-secondary">{method?.description}</p>
                      <p className="text-sm font-medium text-primary">{method?.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-muted/50 rounded-xl p-6 border border-border">
              <h4 className="font-bold text-text-primary mb-4">What to Expect</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={16} className="text-success" />
                  <span className="text-sm text-text-secondary">Response within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Video" size={16} className="text-success" />
                  <span className="text-sm text-text-secondary">Free 30-minute consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="FileText" size={16} className="text-success" />
                  <span className="text-sm text-text-secondary">Detailed project proposal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" size={16} className="text-success" />
                  <span className="text-sm text-text-secondary">NDA available upon request</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-brand-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Start Your Project
              </h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg">
                  <div className="flex items-center space-x-2 text-success">
                    <Icon name="CheckCircle" size={20} />
                    <span className="font-medium">Message sent successfully!</span>
                  </div>
                  <p className="text-sm text-success/80 mt-1">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-lg">
                  <div className="flex items-center space-x-2 text-error">
                    <Icon name="XCircle" size={20} />
                    <span className="font-medium">Failed to send message</span>
                  </div>
                  <p className="text-sm text-error/80 mt-1">
                    Please try again or contact me directly via email.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    type="text"
                    name="name"
                    value={formData?.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData?.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    required
                  />
                </div>

                <Input
                  label="Company (Optional)"
                  type="text"
                  name="company"
                  value={formData?.company}
                  onChange={handleInputChange}
                  placeholder="Your Company Name"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData?.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-background"
                      required
                    >
                      <option value="">Select project type</option>
                      {projectTypes?.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData?.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-background"
                      required
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges?.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData?.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-background"
                    required
                  >
                    <option value="">Select timeline</option>
                    {timelines?.map((timeline, index) => (
                      <option key={index} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Project Description
                  </label>
                  <textarea
                    name="message"
                    value={formData?.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-background resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-text-muted">
                  Prefer a quick call? 
                  <button
                    onClick={() => handleContactMethod('tel:+15551234567')}
                    className="text-primary hover:text-accent ml-1 font-medium"
                  >
                    Schedule a 15-minute chat
                  </button>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;