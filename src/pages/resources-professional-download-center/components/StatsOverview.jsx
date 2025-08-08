import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats?.map((stat, index) => (
        <div key={index} className="bg-card rounded-lg border p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name={stat?.icon} size={20} className="text-primary" />
            </div>
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">
            {stat?.value}
          </div>
          <div className="text-sm text-text-secondary">
            {stat?.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;