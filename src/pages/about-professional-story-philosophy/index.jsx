import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import MissionStatement from './components/MissionStatement';
import CareerTimeline from './components/CareerTimeline';
import WorkingPhilosophy from './components/WorkingPhilosophy';
import BehindTheCode from './components/BehindTheCode';
import ValuesInAction from './components/ValuesInAction';
import PersonalJourney from './components/PersonalJourney';
import SocialProofSection from './components/SocialProofSection';
import DownloadableResources from './components/DownloadableResources';

const AboutPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About - Professional Story & Philosophy | DevPortfolio Pro</title>
        <meta 
          name="description" 
          content="Discover the journey, values, and philosophy behind DevPortfolio Pro. From curious beginner to seasoned full-stack developer, learn about the thinking developer approach that drives exceptional results." 
        />
        <meta name="keywords" content="about developer, professional story, development philosophy, full-stack developer journey, technical expertise, developer values" />
        <meta property="og:title" content="About - Professional Story & Philosophy | DevPortfolio Pro" />
        <meta property="og:description" content="The journey, values, and philosophy of a thinking developer who transforms complex problems into elegant solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devportfolio.pro/about-professional-story-philosophy" />
        <link rel="canonical" href="https://devportfolio.pro/about-professional-story-philosophy" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <HeroSection />
          
          {/* Mission Statement */}
          <MissionStatement />
          
          {/* Career Timeline */}
          <CareerTimeline />
          
          {/* Working Philosophy */}
          <WorkingPhilosophy />
          
          {/* Behind the Code */}
          <BehindTheCode />
          
          {/* Values in Action */}
          <ValuesInAction />
          
          {/* Personal Journey */}
          <PersonalJourney />
          
          {/* Social Proof Section */}
          <SocialProofSection />
          
          {/* Downloadable Resources */}
          <DownloadableResources />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Brand */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">DP</span>
                  </div>
                  <span className="text-xl font-bold">DevPortfolio Pro</span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Transforming complex challenges into elegant digital solutions through strategic thinking and technical excellence.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="/homepage-premium-developer-portfolio" className="block text-white/80 hover:text-white text-sm transition-brand">
                    Home
                  </a>
                  <a href="/projects-immersive-case-study-gallery" className="block text-white/80 hover:text-white text-sm transition-brand">
                    Projects
                  </a>
                  <a href="/skills-technical-mastery-visualization" className="block text-white/80 hover:text-white text-sm transition-brand">
                    Skills
                  </a>
                  <a href="/resources-professional-download-center" className="block text-white/80 hover:text-white text-sm transition-brand">
                    Resources
                  </a>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-4">Get In Touch</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-white/80">Ready to discuss your project?</p>
                  <a href="mailto:contact@devportfolio.pro" className="block text-accent hover:text-accent/80 transition-brand">
                    contact@devportfolio.pro
                  </a>
                  <p className="text-white/80">Response within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 mt-8 pt-8 text-center">
              <p className="text-white/60 text-sm">
                © {new Date()?.getFullYear()} DevPortfolio Pro. Crafted with passion and precision.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutPage;