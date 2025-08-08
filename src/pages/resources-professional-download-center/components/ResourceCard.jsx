import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResourceCard = ({ 
  title, 
  description, 
  fileSize, 
  downloadCount, 
  lastUpdated, 
  category, 
  iconName, 
  onDownload,
  isPremium = false,
  tags = []
}) => {
  return (
    <div className="bg-card rounded-lg border shadow-brand-sm hover:shadow-brand-md transition-brand p-6 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
            isPremium ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'
          }`}>
            <Icon name={iconName} size={20} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-brand">
              {title}
            </h3>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
              category === 'Resume' ? 'bg-blue-100 text-blue-700' :
              category === 'Case Study' ? 'bg-green-100 text-green-700' :
              category === 'Documentation' ? 'bg-purple-100 text-purple-700' :
              category === 'Template'? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-700'
            }`}>
              {category}
            </span>
          </div>
        </div>
        {isPremium && (
          <div className="flex items-center space-x-1 text-accent">
            <Icon name="Crown" size={16} />
            <span className="text-xs font-medium">Premium</span>
          </div>
        )}
      </div>
      <p className="text-text-secondary text-sm mb-4 line-clamp-3">
        {description}
      </p>
      {tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags?.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 bg-muted text-text-secondary rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="flex items-center justify-between text-xs text-text-muted mb-4">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <Icon name="HardDrive" size={12} />
            <span>{fileSize}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Icon name="Download" size={12} />
            <span>{downloadCount} downloads</span>
          </span>
        </div>
        <span>Updated {lastUpdated}</span>
      </div>
      <Button
        variant="outline"
        size="sm"
        iconName="Download"
        iconPosition="left"
        onClick={onDownload}
        fullWidth
        className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
      >
        Download
      </Button>
    </div>
  );
};

export default ResourceCard;