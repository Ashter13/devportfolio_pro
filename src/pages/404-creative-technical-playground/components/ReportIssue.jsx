import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ReportIssue = ({ attemptedUrl }) => {
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [reportData, setReportData] = useState({
    email: '',
    description: '',
    expectedUrl: '',
    referrer: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setReportData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setIsReportOpen(false);
      setReportData({
        email: '',
        description: '',
        expectedUrl: '',
        referrer: ''
      });
    }, 3000);
  };

  const toggleReport = () => {
    setIsReportOpen(!isReportOpen);
    if (!isReportOpen) {
      // Pre-fill some data
      setReportData(prev => ({
        ...prev,
        expectedUrl: attemptedUrl || '',
        referrer: document.referrer || 'Direct access'
      }));
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <button
        onClick={toggleReport}
        className="w-full p-4 text-left hover:bg-muted transition-brand flex items-center justify-between"
      >
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
            <Icon name="AlertTriangle" size={16} className="text-red-600" />
          </div>
          <div>
            <h3 className="font-medium text-text-primary">
              Report This Issue
            </h3>
            <p className="text-sm text-text-secondary">
              Help me fix broken links and improve the site
            </p>
          </div>
        </div>
        <Icon 
          name={isReportOpen ? "ChevronUp" : "ChevronDown"} 
          size={16} 
          className="text-text-muted" 
        />
      </button>
      {isReportOpen && (
        <div className="border-t border-border p-4">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <div className="flex items-start space-x-2">
                  <Icon name="Info" size={16} className="text-yellow-600 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-yellow-800 font-medium mb-1">
                      Issue Details
                    </p>
                    <p className="text-yellow-700">
                      <strong>Attempted URL:</strong> {attemptedUrl || 'Unknown'}
                    </p>
                    <p className="text-yellow-700">
                      <strong>Timestamp:</strong> {new Date()?.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              <Input
                label="Your Email (Optional)"
                type="email"
                placeholder="your.email@example.com"
                value={reportData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                description="We'll only use this to follow up on the issue"
              />

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  What were you looking for?
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  rows="3"
                  placeholder="Describe what you were trying to find or what you expected to see..."
                  value={reportData?.description}
                  onChange={(e) => handleInputChange('description', e?.target?.value)}
                  required
                />
              </div>

              <Input
                label="Expected URL (If you know it)"
                type="url"
                placeholder="https://example.com/expected-page"
                value={reportData?.expectedUrl}
                onChange={(e) => handleInputChange('expectedUrl', e?.target?.value)}
                description="If you know what the correct URL should be"
              />

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={toggleReport}
                  className="text-text-secondary hover:text-text-primary transition-brand text-sm"
                >
                  Cancel
                </button>
                <Button
                  type="submit"
                  loading={isSubmitting}
                  disabled={!reportData?.description?.trim()}
                  iconName="Send"
                  iconPosition="left"
                >
                  {isSubmitting ? 'Sending...' : 'Send Report'}
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="CheckCircle" size={24} className="text-green-600" />
              </div>
              <h4 className="font-medium text-text-primary mb-2">
                Thank You!
              </h4>
              <p className="text-sm text-text-secondary">
                Your report has been submitted. I'll investigate and fix the issue soon.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ReportIssue;