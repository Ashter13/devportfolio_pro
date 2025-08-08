import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedResource = ({ resource }) => {
  return (
    <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 text-white mb-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex-1 mb-6 md:mb-0">
          <div className="flex items-center space-x-2 mb-3">
            <Icon name="Star" size={20} className="text-yellow-300" />
            <span className="text-sm font-medium text-white/90">Featured Resource</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">{resource?.title}</h3>
          <p className="text-white/90 mb-4 max-w-2xl">{resource?.description}</p>
          <div className="flex items-center space-x-6 text-sm text-white/80">
            <span className="flex items-center space-x-1">
              <Icon name="Download" size={14} />
              <span>{resource?.downloadCount} downloads</span>
            </span>
            <span className="flex items-center space-x-1">
              <Icon name="Star" size={14} />
              <span>{resource?.rating}/5 rating</span>
            </span>
            <span className="flex items-center space-x-1">
              <Icon name="FileText" size={14} />
              <span>{resource?.pages} pages</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <Button
            variant="secondary"
            size="lg"
            iconName="Download"
            iconPosition="left"
            onClick={resource?.onDownload}
            className="bg-white text-primary hover:bg-white/90"
          >
            Download Now
          </Button>
          <Button
            variant="ghost"
            size="sm"
            iconName="Eye"
            iconPosition="left"
            onClick={resource?.onPreview}
            className="text-white hover:bg-white/10"
          >
            Preview
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedResource;