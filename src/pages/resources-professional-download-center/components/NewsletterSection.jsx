import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e?.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const newsletterArchives = [
    {
      id: 1,
      title: "React 18 Performance Optimization Techniques",
      date: "July 2024",
      description: "Deep dive into concurrent features and optimization strategies",
      downloadCount: 1247
    },
    {
      id: 2,
      title: "Modern JavaScript Architecture Patterns",
      date: "June 2024",
      description: "Exploring clean architecture and design patterns in JS",
      downloadCount: 892
    },
    {
      id: 3,
      title: "Full-Stack Development Best Practices",
      date: "May 2024",
      description: "End-to-end development workflow and tooling recommendations",
      downloadCount: 1156
    }
  ];

  return (
    <div className="bg-muted rounded-lg p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-2">
          Technical Insights Newsletter
        </h3>
        <p className="text-text-secondary">
          Get monthly deep-dives into development best practices, architecture decisions, and industry insights
        </p>
      </div>
      <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-8">
        <div className="flex gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e?.target?.value)}
            className="flex-1"
            required
          />
          <Button
            type="submit"
            variant="default"
            iconName="Send"
            iconPosition="right"
            disabled={isSubscribed}
          >
            {isSubscribed ? 'Subscribed!' : 'Subscribe'}
          </Button>
        </div>
      </form>
      <div className="border-t border-border pt-6">
        <h4 className="text-lg font-semibold text-text-primary mb-4 text-center">
          Newsletter Archives
        </h4>
        <div className="space-y-3">
          {newsletterArchives?.map((archive) => (
            <div key={archive?.id} className="flex items-center justify-between p-3 bg-background rounded-lg border">
              <div className="flex-1">
                <h5 className="font-medium text-text-primary text-sm">
                  {archive?.title}
                </h5>
                <p className="text-xs text-text-secondary mt-1">
                  {archive?.description}
                </p>
                <div className="flex items-center space-x-4 mt-2 text-xs text-text-muted">
                  <span>{archive?.date}</span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Download" size={10} />
                    <span>{archive?.downloadCount}</span>
                  </span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                iconName="Download"
                onClick={() => {}}
              >
                Download
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;