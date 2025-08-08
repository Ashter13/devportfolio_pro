import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories?.map((category) => (
        <button
          key={category?.id}
          onClick={() => onCategoryChange(category?.id)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-brand ${
            activeCategory === category?.id
              ? 'bg-primary text-primary-foreground shadow-brand-sm'
              : 'bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary'
          }`}
        >
          <Icon name={category?.icon} size={16} />
          <span>{category?.name}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            activeCategory === category?.id
              ? 'bg-primary-foreground/20 text-primary-foreground'
              : 'bg-text-muted/20 text-text-muted'
          }`}>
            {category?.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;