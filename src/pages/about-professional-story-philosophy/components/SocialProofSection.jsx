import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SocialProofSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const colleagueEndorsements = [
    {
      name: "Sarah Chen",
      role: "Senior Product Manager",
      company: "TechFlow Inc",
      relationship: "Worked together for 2 years",
      endorsement: "Working with this developer was a game-changer for our team. Their ability to translate complex business requirements into elegant technical solutions is unmatched. They don't just code—they think strategically about the entire user experience.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      skills: ["Strategic Thinking", "User Experience", "Technical Leadership"]
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      company: "StartupLab",
      relationship: "Client for 18 months",
      endorsement: "Rare combination of technical excellence and business acumen. They helped us scale from 1,000 to 50,000 users without a single major outage. Their proactive approach to performance optimization saved us thousands in infrastructure costs.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      skills: ["Scalability", "Performance", "Cost Optimization"]
    },
    {
      name: "Emily Watson",
      role: "Lead Designer",
      company: "Creative Solutions",
      relationship: "Collaboration partner",
      endorsement: "The best developer I\'ve worked with when it comes to design-development collaboration. They understand the \'why\' behind design decisions and often suggest improvements that enhance both aesthetics and functionality.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      skills: ["Design Collaboration", "UI/UX Implementation", "Creative Problem Solving"]
    },
    {
      name: "David Park",
      role: "Senior Developer",
      company: "CodeCraft Agency",
      relationship: "Peer collaborator",
      endorsement: "Exceptional code quality and mentorship skills. They introduced our team to modern development practices that improved our productivity by 40%. Always willing to share knowledge and help others grow.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      skills: ["Code Quality", "Mentorship", "Team Leadership"]
    }
  ];

  const speakingEngagements = [
    {
      event: "React Summit 2024",
      title: "Building Scalable Component Libraries",
      type: "Conference Talk",
      audience: "500+ developers",
      date: "March 2024",
      description: "Shared insights on creating maintainable component systems that scale across multiple projects and teams.",
      icon: "Mic"
    },
    {
      event: "Local Dev Meetup",
      title: "From Junior to Senior: A Developer\'s Journey",
      type: "Keynote",
      audience: "150+ attendees",
      date: "January 2024",
      description: "Discussed the non-technical skills that separate senior developers from their junior counterparts.",
      icon: "Users"
    },
    {
      event: "Tech Podcast: \'Code & Coffee'",
      title: "The Future of Full-Stack Development",
      type: "Podcast Interview",
      audience: "10K+ listeners",
      date: "December 2023",
      description: "Explored emerging trends in web development and their impact on developer workflows.",
      icon: "Radio"
    },
    {
      event: "University Guest Lecture",
      title: "Real-World Web Development",
      type: "Educational Talk",
      audience: "80+ students",
      date: "November 2023",
      description: "Bridged the gap between academic learning and industry practices for computer science students.",
      icon: "GraduationCap"
    }
  ];

  const achievements = [
    {
      title: "GitHub Contributions",
      value: "1,200+",
      description: "Commits across personal and open-source projects",
      icon: "GitCommit",
      color: "accent"
    },
    {
      title: "Client Satisfaction",
      value: "98%",
      description: "Average rating across all completed projects",
      icon: "Star",
      color: "warning"
    },
    {
      title: "Project Success Rate",
      value: "100%",
      description: "On-time delivery with zero failed launches",
      icon: "Target",
      color: "success"
    },
    {
      title: "Community Impact",
      value: "15K+",
      description: "Developers reached through content and talks",
      icon: "Users",
      color: "primary"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Social Proof & Recognition
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            The relationships I've built and recognition I've earned through consistent delivery of exceptional work and genuine contribution to the developer community.
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements?.map((achievement, index) => (
            <motion.div
              key={achievement?.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center hover:shadow-brand-lg transition-brand group"
            >
              <div className={`w-16 h-16 bg-${achievement?.color}/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-${achievement?.color} group-hover:scale-110 transition-brand`}>
                <Icon 
                  name={achievement?.icon} 
                  size={24} 
                  className={`text-${achievement?.color} group-hover:text-white transition-brand`} 
                />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{achievement?.value}</div>
              <h4 className="font-semibold text-primary mb-2">{achievement?.title}</h4>
              <p className="text-sm text-text-secondary">{achievement?.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Colleague Endorsements */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Colleague Endorsements</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              What peers, clients, and collaborators say about working with me.
            </p>
          </motion.div>

          {/* Testimonial Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {colleagueEndorsements?.map((endorsement, index) => (
              <motion.button
                key={endorsement?.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveTestimonial(index)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-brand ${
                  activeTestimonial === index
                    ? 'bg-accent text-white shadow-brand-md'
                    : 'bg-background text-text-secondary hover:bg-accent/10 hover:text-accent'
                }`}
              >
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img 
                    src={endorsement?.avatar} 
                    alt={endorsement?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium">{endorsement?.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Active Testimonial */}
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card p-8 max-w-4xl mx-auto"
          >
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                <Icon name="Quote" size={32} className="text-accent mb-4" />
                <blockquote className="text-lg text-text-secondary leading-relaxed mb-6 italic">
                  "{colleagueEndorsements?.[activeTestimonial]?.endorsement}"
                </blockquote>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {colleagueEndorsements?.[activeTestimonial]?.skills?.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Endorser Info */}
              <div className="text-center lg:text-left">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto lg:mx-0 mb-4">
                  <img 
                    src={colleagueEndorsements?.[activeTestimonial]?.avatar} 
                    alt={colleagueEndorsements?.[activeTestimonial]?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-primary text-lg mb-1">
                  {colleagueEndorsements?.[activeTestimonial]?.name}
                </h4>
                <p className="text-accent font-medium mb-1">
                  {colleagueEndorsements?.[activeTestimonial]?.role}
                </p>
                <p className="text-text-secondary text-sm mb-2">
                  {colleagueEndorsements?.[activeTestimonial]?.company}
                </p>
                <p className="text-text-muted text-xs">
                  {colleagueEndorsements?.[activeTestimonial]?.relationship}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Speaking Engagements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">Speaking & Community</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Sharing knowledge and contributing to the developer community through talks, podcasts, and educational content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {speakingEngagements?.map((engagement, index) => (
              <motion.div
                key={engagement?.event}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:shadow-brand-lg transition-brand"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={engagement?.icon} size={20} className="text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-primary">{engagement?.title}</h4>
                      <span className="text-xs text-text-muted">{engagement?.date}</span>
                    </div>
                    
                    <p className="text-accent font-medium text-sm mb-1">{engagement?.event}</p>
                    <p className="text-text-secondary text-sm mb-3">{engagement?.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded">
                        {engagement?.type}
                      </span>
                      <span className="text-xs text-success font-medium">
                        {engagement?.audience}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;